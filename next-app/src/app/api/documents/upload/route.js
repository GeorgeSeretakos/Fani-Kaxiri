import { uploadDocumentAtomic } from "../../../../services/server/documents.server";

export async function POST(req) {
  try {
    const form = await req.formData();
    const ownerId     = form.get("clientId");
    const type        = form.get("type");
    const description = form.get("description") || null;
    const date        = form.get("date");
    const file        = form.get("file");
    if (!ownerId || !type || !file || typeof file.arrayBuffer !== "function") {
      return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const bytes    = Buffer.from(await file.arrayBuffer());
    const mimeType = file.type || "application/octet-stream";
    const fileName = file.name || "file";
    if (!bytes.length) {
      return Response.json({ ok: false, error: "Empty file" }, { status: 400 });
    }

    const doc = await uploadDocumentAtomic({
      ownerId,
      fileName,
      mimeType,
      bytes,
      date,
      type,
      description,
    });

    return Response.json(
      { ok: true, doc },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  } catch {
    return Response.json(
      { ok: false, error: "Server error" },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}
