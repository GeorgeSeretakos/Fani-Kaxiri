// services/documents.js  (CLIENT-ONLY)
import { logClientError } from "../utils/logClientError";

/** ---- Old 2-step flow helpers (keep if you still use presigned URLs) ---- */
export async function requestUpload({ clientId, fileName, type, date, description }) {
  const res = await fetch(`/api/documents/upload`, {
    method: "POST",
    body: JSON.stringify({ clientId, fileName, type, date, description }),
  });
  if (!res.ok) throw new Error("Failed to request upload URL");
  return res.json(); // { ok, uploadUrl, filePath?, doc? } depending on route
}

export async function uploadToStorage(uploadUrl, file) {
  const res = await fetch(uploadUrl, { method: "PUT", body: file });
  if (!res.ok) {
    const text = await res.text();
    await logClientError("uploadToStorage", {
      status: res.status,
      body: text,
      fileName: file?.name,
    });
    throw new Error("Failed to upload file");
  }
  return true;
}

/** ---- One-call atomic upload (multipart/form-data) ---- */
export async function uploadDocumentAtomicClient({ clientId, file, type, date, description }) {
  const fd = new FormData();
  fd.append("clientId", String(clientId));
  fd.append("type", type);
  fd.append("date", date || "");
  fd.append("description", description || "");
  fd.append("file", file, file.name);

  const res = await fetch("/api/documents/upload", { method: "POST", body: fd });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data?.ok) throw new Error(data?.error || "Upload failed");
  return data.doc; // normalized doc from API
}

/** ---- Download URL helper ---- */
export async function getDownloadUrl(docId) {
  const res = await fetch(`/api/documents/${docId}/download`);
  if (!res.ok) throw new Error("Failed to get download URL");
  return res.json(); // { url }
}

/** ---- Delete (client -> API) ---- */
export async function deleteDocument(id) {
  const res = await fetch(`/api/documents/${id}/delete`, { method: "DELETE" });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || "Failed to delete document");
  }
  return true;
}
