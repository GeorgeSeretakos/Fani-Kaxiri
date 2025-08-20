"use client";

import { useState } from "react";
import HeaderTabs from "./HeaderTabs";
import DocumentList from "./DocumentList";
import { format } from "date-fns";

export default function ClientDetail({ client }) {
  const [activeTab, setActiveTab] = useState("diet");
  const [clientData, setClientData] = useState(client);
  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    firstName: client.firstName || "",
    lastName: client.lastName || "",
    phone: client.phone || "",
  });

  const [file, setFile] = useState(null);
  const [docType, setDocType] = useState("DIET");
  const [description, setDescription] = useState("");

  // --- Delete client ---
  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this client and all documents?")) return;

    try {
      const res = await fetch(`/api/admin/clients/${clientData.id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!res.ok) throw new Error("Failed to delete client");

      alert("Client deleted successfully!");
      window.location.href = "/admin";
    } catch (err) {
      console.error(err);
      alert("Error deleting client");
    }
  };

  // --- Save client edit ---
  const handleEditSave = async () => {
    try {
      setStatus("Saving...");
      const res = await fetch(`/api/admin/clients/${clientData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to update client");

      const updated = await res.json();
      setFormData({
        firstName: updated.firstName,
        lastName: updated.lastName,
        phone: updated.phone,
      });
      setClientData(updated);
      setStatus("✅ Saved successfully!");
      setIsEditing(false);
    } catch (err) {
      console.error(err);
      setStatus("❌ Error saving client");
    }
  };

  // --- Upload document ---
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Select a file first");

    try {
      setStatus("Uploading...");

      // 1. Request signed upload URL
      const res = await fetch(`/api/admin/clients/${clientData.id}/documents/upload`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fileName: file.name,
          type: docType,
          description,
        }),
      });

      const { uploadUrl, doc } = await res.json();

      // 2. Upload file to Supabase storage
      await fetch(uploadUrl, {
        method: "PUT",
        body: file,
        headers: { "Content-Type": file.type },
      });

      // 3. Update local state
      setClientData((prev) => ({
        ...prev,
        documents: [...(prev.documents || []), doc],
      }));

      setFile(null);
      setDescription("");
      setStatus("✅ Document uploaded!");
    } catch (err) {
      console.error(err);
      setStatus("❌ Upload failed");
    }
  };

  return (
    <div className="space-y-6">
      {/* Client Info */}
      <div className="bg-white p-4 rounded shadow flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">
            {clientData.firstName} {clientData.lastName}
          </h2>
          <p className="text-gray-600">{clientData.email}</p>
          <p className="text-gray-600">{clientData.phone}</p>
          <p className="text-sm text-gray-500">
            Created: {format(new Date(clientData.createdAt), "dd/MM/yyyy")}
          </p>
        </div>
        <div className="space-x-2">
          <button
            onClick={() => setIsEditing(true)}
            className="px-3 py-1 bg-green-500 text-white rounded"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="px-3 py-1 bg-red-500 text-white rounded"
          >
            Delete Client
          </button>
        </div>
      </div>

      {/* Tabs */}
      <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Upload Form */}
      <form onSubmit={handleUpload} className="bg-white p-4 rounded shadow space-y-3">
        <h3 className="font-semibold">Upload Document</h3>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <select
          value={docType}
          onChange={(e) => setDocType(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="DIET">Δίαιτα</option>
          <option value="MEASUREMENT">Μετρήσεις</option>
          <option value="PHOTO">Φωτογραφία</option>
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

      {/* Documents */}
      <DocumentList
        docs={
          clientData.documents?.filter(
            (d) => d.type.toLowerCase() === activeTab
          ) || []
        }
      />

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Client</h2>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className="border p-2 rounded w-full mb-2"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className="border p-2 rounded w-full mb-2"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="border p-2 rounded w-full mb-2"
            />

            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setIsEditing(false)}
                className="px-3 py-1 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleEditSave}
                className="px-3 py-1 bg-blue-600 text-white rounded"
              >
                Save
              </button>
            </div>

            {status && <p className="mt-2 text-sm">{status}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
