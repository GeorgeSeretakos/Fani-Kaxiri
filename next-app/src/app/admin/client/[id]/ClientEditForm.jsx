"use client";

import { useState, useEffect } from "react";

export default function ClientEditForm({ clientId }) {
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Fetch client details when mounted
  useEffect(() => {
    const fetchClient = async () => {
      try {
        const res = await fetch(`/api/admin/clients/${clientId}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to load client");
        setClient(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchClient();
  }, [clientId]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      const res = await fetch(`/api/admin/clients/${clientId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: client.email,
          firstName: client.firstName,
          lastName: client.lastName,
          phone: client.phone,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to update client");
      alert("✅ Client updated successfully!");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p>Loading client...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          value={client.email}
          onChange={(e) => setClient({ ...client, email: e.target.value })}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">First Name</label>
        <input
          type="text"
          value={client.firstName}
          onChange={(e) => setClient({ ...client, firstName: e.target.value })}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Last Name</label>
        <input
          type="text"
          value={client.lastName}
          onChange={(e) => setClient({ ...client, lastName: e.target.value })}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Phone</label>
        <input
          type="text"
          value={client.phone || ""}
          onChange={(e) => setClient({ ...client, phone: e.target.value })}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <button
        type="submit"
        disabled={saving}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {saving ? "Saving..." : "Save Changes"}
      </button>
    </form>
  );
}
