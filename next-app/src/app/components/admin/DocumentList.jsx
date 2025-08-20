"use client";

import { useState } from "react";
import DocumentModal from "./DocumentModal";

export default function DocumentList({ docs }) {
  const [showModal, setShowModal] = useState(false);
  const [editingDoc, setEditingDoc] = useState(null);

  const handleAdd = () => {
    setEditingDoc(null);
    setShowModal(true);
  };

  const handleEdit = (doc) => {
    setEditingDoc(doc);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this document?")) {
      console.log("Deleting doc", id);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow space-y-4">
      {docs.length === 0 ? (
        <p className="text-gray-500">No documents yet.</p>
      ) : (
        <ul className="space-y-2">
          {docs.map((doc) => (
            <li key={doc.id} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-medium">{doc.name}</p>
                <p className="text-sm text-gray-500">{doc.description}</p>
                <p className="text-xs text-gray-400">{doc.date}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(doc)}
                  className="px-2 py-1 text-sm bg-yellow-500 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(doc.id)}
                  className="px-2 py-1 text-sm bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Add button */}
      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        + Add Document
      </button>

      {showModal && (
        <DocumentModal doc={editingDoc} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}
