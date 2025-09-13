import { NextResponse } from "next/server";
import prisma from "../../../../../../lib/prismaClient";
import { verifyAdmin } from "../../../_lib/auth";
import { getRequestMeta } from "../../../../../utils/apiUtils";
import { S3Client, HeadObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: "us-east-1",
  endpoint: process.env.B2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.B2_KEY_ID,
    secretAccessKey: process.env.B2_APP_KEY,
  },
});
const BUCKET = process.env.B2_BUCKET;

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

export async function POST(req) {
  const { ip, ua } = getRequestMeta(req);

  const admin = await verifyAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const { clientId, fileName, type, description, date, filePath } = body || {};

  if (!clientId || !fileName || !type || !filePath) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Basic sanity: ensure path belongs to client
  const ownerId = Number(clientId);
  if (!filePath.startsWith(`${ownerId}/`)) {
    return NextResponse.json({ error: "Invalid filePath for client" }, { status: 400 });
  }

  // 1) Verify object exists in B2
  try {
    await s3.send(new HeadObjectCommand({ Bucket: BUCKET, Key: filePath }));
  } catch (err) {
    const code = err?.$metadata?.httpStatusCode;
    if (code === 404) {
      return NextResponse.json({ error: "File not found in storage" }, { status: 404 });
    }
    return NextResponse.json({ error: "Storage check failed" }, { status: 502 });
  }

  // 2) Create DB record + bump user's updatedAt (atomic)
  try {
    const [doc] = await prisma.$transaction([
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
      prisma.user.update({ where: { id: ownerId }, data: { updatedAt: new Date() } }),
    ]);

    return NextResponse.json(
      { ok: true, doc },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  } catch (err) {
    return NextResponse.json({ error: "Failed to create document" }, { status: 500 });
  }
}
