import { deleteDocumentAtomic } from "../../../../../services/documents";

export async function DELETE(_req, { params }) {
  const id = Number(params?.id);
  if (!Number.isFinite(id)) {
    return new Response("Invalid id", { status: 400 });
  }

  try {
    await deleteDocumentAtomic(id);
    return new Response("Document deleted successfully", {
      status: 200,
      headers: { "Cache-Control": "no-store" },
    });
  } catch (err) {
    if (err?.message === "DOC_NOT_FOUND") {
      return new Response("Document not found", { status: 404 });
    }
    if (err?.message === "STORAGE_DELETE_FAILED") {
      return new Response("Failed to delete file from storage", { status: 500 });
    }
    console.error("Delete document error:", err);
    return new Response("Server error", { status: 500 });
  }
}