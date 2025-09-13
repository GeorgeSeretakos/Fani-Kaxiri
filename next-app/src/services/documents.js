import {logClientError} from "../utils/logClientError";

export async function uploadToStorage(uploadUrl, file) {
  console.log("[upload:start]", { uploadUrl, size: file.size });
  const res = await fetch(uploadUrl, {
    method: "PUT",
    body: file,
  });
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


export async function getDownloadUrl(docId) {
  const res = await fetch(`/api/documents/${docId}/download`);
  if (!res.ok) throw new Error("Failed to get download URL");
  return res.json(); // { url }
}

export async function deleteDocument(id) {
  const res = await fetch(`/api/documents/${id}/delete`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete document");
  }

  return await res.text();
}

// services/documents.js
export async function requestUpload({ clientId, fileName }) {
  const res = await fetch("/api/documents/upload/presign", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ clientId, fileName }),
  });
  const json = await res.json();
  if (!res.ok || !json?.ok) throw new Error(json?.error || "Presign failed");
  return json; // { ok, uploadUrl, filePath }
}

export async function finalizeUpload({ clientId, fileName, type, description, date, filePath }) {
  const res = await fetch("/api/documents/upload/finalize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ clientId, fileName, type, description, date, filePath }),
  });
  const json = await res.json();
  if (!res.ok || !json?.ok) throw new Error(json?.error || "Finalize failed");
  return json; // { ok, doc }
}
