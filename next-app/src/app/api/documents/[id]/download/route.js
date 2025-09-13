import prisma from "../../../../../../lib/prismaClient";
import { createDownloadUrl } from "../../../../../utils/storageServer";

export async function GET(req, { params }) {
  try {
    const { id } = await params;

    if (!id) {
      return new Response("Missing document id", { status: 400 });
    }

    // 1. Βρίσκουμε το έγγραφο
    const doc = await prisma.document.findUnique({
      where: { id },
    });

    if (!doc) {
      return new Response("Document not found", { status: 404 });
    }

    // 2. Παράγουμε signed URL με βάση το filePath
    const url = await createDownloadUrl(doc.filePath);

    return Response.json({ url });
  } catch (err) {
    console.error("Download error:", err);
    return new Response("Server error", { status: 500 });
  }
}