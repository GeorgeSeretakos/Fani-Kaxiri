"use client";

import { useState } from "react";

export default function UploadDocument({ clientId }) {
  const [file, setFile] = useState(null);
  const [type, setType] = useState("DIET");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  async function handleUpload(e) {
    e.preventDefault();
    if (!file) return alert("Please choose a file");

    try {
      // 1. Ask backend for signed upload URL
      const res = await fetch(`/api/admin/clients/${clientId}/documents/upload`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fileName: file.name,
          type,
          description,
        }),
      });

      const { uploadUrl } = await res.json();

      // 2. Upload directly to Supabase with PUT
      await fetch(uploadUrl, {
        method: "PUT",
        body: file,
        headers: { "Content-Type": file.type },
      });

      setStatus("✅ Upload successful");
    } catch (err) {
      console.error(err);
      setStatus("❌ Upload failed");
    }
  }

  return (
    <form onSubmit={handleUpload} className="space-y-4 border p-4 rounded bg-white shadow">
      <h3 className="text-lg font-semibold">Upload Document</h3>

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <select value={type} onChange={(e) => setType(e.target.value)} className="border p-2 rounded">
        <option value="DIET">Δίαιτα</option>
        <option value="MEASUREMENT">Μετρήσεις</option>
        <option value="PHOTO">Φωτογραφία Προόδου</option>
      </select>

      <input
        type="text"
        placeholder="Description"
        className="border p-2 rounded w-full"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Upload
      </button>

      {status && <p className="text-sm mt-2">{status}</p>}
    </form>
  );
}
