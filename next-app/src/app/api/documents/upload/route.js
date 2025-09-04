import { createUploadUrl } from "../../../../utils/storageServer";
import prisma from "../../../../../lib/prismaClient";

function jlog(level, msg, extra = {}) {
  console[level](
    JSON.stringify({
      level,
      msg,
      ts: new Date().toISOString(),
      ...extra,
    })
  );
}

// ---- date helpers ----
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
/**
 * Appointment date semantics:
 * - if picked date is today -> keep today (still stored as Date)
 * - if past date -> store at local midnight (no time-of-day)
 * - if missing -> use now
 */
function normalizeDocumentDate(inputYMD) {
  const now = new Date();
  if (!inputYMD) return now;
  return inputYMD === ymdLocal(now) ? now : toLocalMidnightFromYMD(inputYMD);
}

/**
 * Create an uploadUrl and write doc to DB, then client uploads the file
 */
export async function POST(req) {
  const reqId = crypto.randomUUID();
  const t0 = Date.now();

  try {
    const body = await req.json().catch(() => ({}));
    const { clientId, fileName, type, description, date } = body;

    jlog("info", "upload:start", { reqId, clientId, fileName, type });

    // Basic validation (fail fast, log reason)
    if (!clientId || !fileName || !type) {
      jlog("warn", "upload:validation_failed", {
        reqId,
        haveClientId: !!clientId,
        haveFileName: !!fileName,
        haveType: !!type,
      });
      return Response.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const ownerId = Number(clientId);

    // Build storage path
    const filePath = `${ownerId}/${Date.now()}-${fileName}`;

    // 1) Presign URL
    let uploadUrl;
    try {
      uploadUrl = await createUploadUrl(filePath);
      jlog("info", "upload:presigned_url_created", { reqId, filePath });
    } catch (e) {
      jlog("error", "upload:presign_failed", {
        reqId,
        filePath,
        error: e?.message,
        stack: e?.stack,
      });
      return Response.json(
        { ok: false, error: "Failed to create upload URL" },
        { status: 502 }
      );
    }

    // 2) Create DB record AND bump user's updatedAt ATOMICALLY
    let doc;
    try {
      const [createdDoc] = await prisma.$transaction([
        prisma.document.create({
          data: {
            name: fileName,
            type,
            description: description || null,
            date: normalizeDocumentDate(date),
            ownerId,
            filePath,
          },
        }),
        prisma.user.update({
          where: { id: ownerId },
          data: { updatedAt: new Date() },
        }),
      ]);

      doc = createdDoc;
      jlog("info", "upload:db_document_created_and_user_touched", {
        reqId,
        docId: doc.id,
        ownerId,
      });
    } catch (e) {
      jlog("error", "upload:db_transaction_failed", {
        reqId,
        error: e?.message,
        stack: e?.stack,
      });
      return Response.json(
        { ok: false, error: "Failed to create document and update user" },
        { status: 500 }
      );
    }

    const ms = Date.now() - t0;
    jlog("info", "upload:success", { reqId, ms });

    return Response.json({ ok: true, uploadUrl, doc }, { status: 200 });
  } catch (err) {
    const ms = Date.now() - t0;
    jlog("error", "upload:unhandled_error", {
      reqId,
      ms,
      error: err?.message,
      stack: err?.stack,
    });
    return new Response("Server error", { status: 500 });
  }
}