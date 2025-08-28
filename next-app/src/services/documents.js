// src/services/documents.js
export async function requestUpload({ clientId, fileName, type, date, description }) {
  const res = await fetch(`/api/documents/upload`, {
    method: "POST",
    body: JSON.stringify({ clientId, fileName, type, date, description }),
  });
  if (!res.ok) throw new Error("Failed to request upload URL");
  return res.json();
}

export async function uploadToStorage(uploadUrl, file) {
  console.log("Upload Util called with params: ", uploadUrl, file);
  const res = await fetch(uploadUrl, {
    method: "PUT",
    body: file,
  });
  if (!res.ok) {
    const text = await res.text();
    console.error("Upload failed:", text);
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

  return await res.text(); // π.χ. "Document deleted successfully"
}


