import { createUploadUrl } from "../../../../utils/storageServer";
import prisma from "../../../../../lib/prismaClient";

function jlog(level, msg, extra = {}) {
  // Netlify shows console output; keep it JSON for easy grepping
  console[level](
    JSON.stringify({
      level,
      msg,
      ts: new Date().toISOString(),
      ...extra,
    })
  );
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

    // Build storage path
    const filePath = `${clientId}/${Date.now()}-${fileName}`;

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

    // 2) Create DB record
    let doc;
    try {
      doc = await prisma.document.create({
        data: {
          name: fileName,
          type,
          description: description || null,
          date: date ? new Date(date) : new Date(),
          ownerId: Number(clientId),
          filePath,
        },
      });
      jlog("info", "upload:db_document_created", { reqId, docId: doc.id });
    } catch (e) {
      jlog("error", "upload:db_create_failed", {
        reqId,
        error: e?.message,
        stack: e?.stack,
      });
      return Response.json(
        { ok: false, error: "Failed to create document record" },
        { status: 500 }
      );
    }

    // 3) Touch user.updatedAt (best-effort)
    try {
      await prisma.user.update({
        where: { id: Number(clientId) },
        data: { updatedAt: new Date() },
      });
      jlog("info", "upload:user_touched", { reqId, clientId });
    } catch (e) {
      jlog("warn", "upload:user_touch_failed", {
        reqId,
        clientId,
        error: e?.message,
      });
      // don’t fail the whole request for this
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
