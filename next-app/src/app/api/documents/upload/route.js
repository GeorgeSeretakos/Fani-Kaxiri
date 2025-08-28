import { createUploadUrl } from "../../../../utils/storageServer";
import prisma from "../../../../../lib/prismaClient";

/**
 * Create an uploadUrl and write doc to DB, then client uploads the file
 */
export async function POST(req) {
  try {
    const { clientId, fileName, type, description, date } = await req.json();

    if (!clientId || !fileName || !type) {
      return new Response("Missing required fields", { status: 400 });
    }

    // construct a path like "clientId/timestamp-filename"
    const filePath = `${clientId}/${Date.now()}-${fileName}`;

    // 1. Προδημιουργούμε pre-signed URL
    const uploadUrl = await createUploadUrl(filePath);
    // console.log("Upload Url: ", uploadUrl);

    // 2. Αποθηκεύουμε ΜΟΝΟ το filePath (όχι το signed URL) στη βάση
    const doc = await prisma.document.create({
      data: {
        name: fileName,
        type,
        description,
        date: new Date(date), // ✅ convert string to JS Date
        ownerId: Number(clientId),
        filePath,   // ✅ renamed field
      },
    });

    // 3. Ενημέρωση updatedAt του χρήστη
    await prisma.user.update({
      where: { id: clientId },
      data: { updatedAt: new Date() },
    });

    return Response.json({ uploadUrl, doc });
  } catch (err) {
    console.error("Upload error:", err);
    return new Response("Server error", { status: 500 });
  }
}
