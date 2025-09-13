import { NextResponse } from "next/server";
import { verifyAdmin } from "../../../_lib/auth";
import { getRequestMeta } from "../../../../../utils/apiUtils";
import { createUploadUrl } from "../../../../../utils/storageServer";

export async function POST(req) {
  const { ip, ua } = getRequestMeta(req);
  const admin = await verifyAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const { clientId, fileName } = body || {};
  if (!clientId || !fileName) {
    return NextResponse.json({ error: "Missing clientId or fileName" }, { status: 400 });
  }

  const filePath = `${Number(clientId)}/${Date.now()}-${fileName}`;
  const uploadUrl = await createUploadUrl(filePath);

  return NextResponse.json(
    { ok: true, uploadUrl, filePath },
    { status: 200, headers: { "Cache-Control": "no-store" } }
  );
}
