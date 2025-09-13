// services/server/documents.server.js  (SERVER-ONLY)
import prisma from "../../../lib/prismaClient"; // adjust path to your prisma client
import { putToStorage, deleteFromStorage } from "../../utils/storageServer";

/* ----- date helpers (same semantics you used) ----- */
function toLocalMidnightFromYMD(ymd) {
  const [y, m, d] = ymd.split("-").map(Number);
  return new Date(y, m - 1, d, 0, 0, 0, 0);
}
function ymdLocal(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
function normalizeDocumentDate(inputYMD) {
  const now = new Date();
  if (!inputYMD) return now;
  return inputYMD === ymdLocal(now) ? now : toLocalMidnightFromYMD(inputYMD);
}

/** ====== DELETE ONE DOC (unchanged behavior) ====== */
export async function deleteDocumentAtomic(documentId) {
  const id = Number(documentId);
  if (!Number.isFinite(id)) throw new Error("INVALID_ID");

  await prisma.$transaction(async (tx) => {
    const doc = await tx.document.findUnique({
      where: { id },
      select: { id: true, ownerId: true, filePath: true },
    });
    if (!doc) throw new Error("DOC_NOT_FOUND");

    await tx.document.delete({ where: { id: doc.id } });
    await tx.user.update({
      where: { id: doc.ownerId },
      data: { updatedAt: new Date() },
    });

    try {
      await deleteFromStorage(doc.filePath);
    } catch {
      throw new Error("STORAGE_DELETE_FAILED");
    }
  }, { timeout: 15000 });
}

/** ====== DELETE WHOLE CLIENT (unchanged behavior) ====== */
export async function deleteClientAtomic(clientIdInput) {
  const clientId = Number(clientIdInput);
  if (!Number.isFinite(clientId)) throw new Error("INVALID_ID");

  await prisma.$transaction(async (tx) => {
    const docs = await tx.document.findMany({
      where: { ownerId: clientId },
      select: { filePath: true },
    });
    const paths = docs.map(d => d.filePath).filter(Boolean);

    await tx.document.deleteMany({ where: { ownerId: clientId } });
    await tx.user.delete({ where: { id: clientId } });

    try {
      // delete sequentially to keep deleteFromStorage simple
      for (const p of paths) await deleteFromStorage(p);
    } catch {
      throw new Error("STORAGE_DELETE_FAILED");
    }
  }, { timeout: 30000 });
}

/** ====== UPLOAD ONE DOC (new atomic upload, same schema/params) ====== */
export async function uploadDocumentAtomic({
                                             ownerId,
                                             fileName,
                                             mimeType,
                                             bytes,        // Buffer | Uint8Array
                                             date,         // yyyy-mm-dd | undefined
                                             type,         // e.g. "DIET"
                                             description,  // optional
                                           }) {
  const clientId = Number(ownerId);
  if (!Number.isFinite(clientId)) throw new Error("INVALID_ID");
  if (!bytes || (bytes.length ?? bytes.byteLength) === 0) throw new Error("EMPTY_FILE");

  const safeMime = mimeType || "application/octet-stream";
  const filePath = `${clientId}/${Date.now()}-${fileName}`;

  const created = await prisma.$transaction(async (tx) => {
    const doc = await tx.document.create({
      data: {
        name: fileName || "file",
        type,
        description: description || null,
        date: normalizeDocumentDate(date),
        ownerId: clientId,
        filePath,
      },
      select: {
        id: true, name: true, type: true, description: true, date: true,
        ownerId: true, filePath: true, createdAt: true, updatedAt: true,
      },
    });

    await tx.user.update({
      where: { id: clientId },
      data: { updatedAt: new Date() },
    });

    try {
      const buf = Buffer.isBuffer(bytes) ? bytes : Buffer.from(bytes);
      await putToStorage(filePath, buf, safeMime);
    } catch {
      throw new Error("STORAGE_UPLOAD_FAILED");
    }

    return doc;
  }, { timeout: 30000 });

  return created;
}
