"use client";

import { useState } from "react";

export default function AddClientModal({ onClose, onClientAdded }) {
  const [form, setForm] = useState({
    email: "",
    confirmEmail: "",
    firstName: "",
    lastName: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.email !== form.confirmEmail) {
      alert("Emails do not match!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/admin/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          email: form.email,
          firstName: form.firstName,
          lastName: form.lastName,
          phone: form.phone,
        }),
      });

      if (!res.ok) throw new Error("Failed to add client");

      const data = await res.json();
      onClientAdded(data);
      onClose();
    } catch (err) {
      console.error(err);
      alert("Could not create client.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Add New Client</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Όνομα"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Επώνυμο"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="email"
            placeholder="Επιβεβαίωση email"
            value={form.confirmEmail}
            onChange={(e) => setForm({ ...form, confirmEmail: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Τηλέφωνο"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full border p-2 rounded"
          />

          <div className="flex justify-end space-x-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 border rounded"
            >
              Ακύρωση
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {loading ? "Loading..." : "Προσθήκη"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
