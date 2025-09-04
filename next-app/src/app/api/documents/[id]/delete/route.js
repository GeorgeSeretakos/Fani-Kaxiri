import prismaClient from "../../../../../../lib/prismaClient";
import { deleteFromStorage } from "../../../../../utils/storageServer";

export const runtime = "nodejs";

export async function DELETE(req, { params }) {
  const { id } = await params;

  try {
    // Βρες το document
    const doc = await prismaClient.document.findUnique({
      where: { id } ,
    });
    if (!doc) {
      return new Response("Document not found", { status: 404 });
    }

    // Σβήσε από Supabase storage
    await deleteFromStorage(doc.filePath);

    // Σβήσε από DB
    await prismaClient.document.delete({
      where: { id }
    });

    // Ενημέρωσε updatedAt του χρήστη
    await prisma.user.update({
      where: { id: doc.ownerId },
      data: { updatedAt: new Date() },
    });

    return new Response("Document deleted successfully", { status: 200 });
  } catch (err) {
    console.error("Delete error:", err);
    return new Response("Server error", { status: 500 });
  }
}
