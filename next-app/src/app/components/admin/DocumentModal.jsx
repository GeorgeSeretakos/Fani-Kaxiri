"use client";

import { useState, useEffect } from "react";

export default function DocumentModal({ doc, onClose }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    date: "",
  });

  useEffect(() => {
    if (doc) {
      setForm({
        name: doc.name || "",
        description: doc.description || "",
        date: doc.date || "",
      });
    }
  }, [doc]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (doc) {
      console.log("Updating document:", form);
    } else {
      console.log("Adding document:", form);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">
          {doc ? "Edit Document" : "Add Document"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Document Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />
          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full border p-2 rounded"
          />
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="w-full border p-2 rounded"
          />

          <div className="flex justify-end space-x-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1 bg-blue-600 text-white rounded"
            >
              {doc ? "Save Changes" : "Add Document"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
