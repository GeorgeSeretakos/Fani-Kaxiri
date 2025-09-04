"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";

export default function AddClientModal({ onClose, onClientAdded }) {
  const [form, setForm] = useState({
    email: "",
    confirmEmail: "",
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(""); // inline errors only (no generic status)

  const firstInputRef = useRef(null);

  useEffect(() => {
    firstInputRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const emailsMismatch =
    form.email.trim() !== "" &&
    form.confirmEmail.trim() !== "" &&
    form.email.trim() !== form.confirmEmail.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (emailsMismatch) {
      setErrorMsg("Τα email δεν ταιριάζουν.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/admin/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          email: form.email.trim(),
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          phone: form.phone.trim(),
        }),
      });

      if (!res.ok) throw new Error("Failed to add client");

      const data = await res.json();
      onClientAdded?.(data);
      onClose?.();
    } catch (err) {
      console.error(err);
      setErrorMsg("Αποτυχία δημιουργίας πελάτη. Προσπαθήστε ξανά.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Νέος Πελάτης</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Όνομα */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              Όνομα
            </label>
            <input
              id="firstName"
              ref={firstInputRef}
              type="text"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className="mt-1 w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-800"
              required
            />
            <p className="mt-1 text-xs text-gray-500">Το μικρό όνομα του πελάτη.</p>
          </div>

          {/* Επώνυμο */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Επώνυμο
            </label>
            <input
              id="lastName"
              type="text"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className="mt-1 w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-800"
              required
            />
            <p className="mt-1 text-xs text-gray-500">Το επίθετο του πελάτη.</p>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1 w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-800"
              required
            />
            <p className="mt-1 text-xs text-gray-500">Το email επικοινωνίας του πελάτη.</p>
          </div>

          {/* Επιβεβαίωση Email */}
          <div>
            <label htmlFor="confirmEmail" className="block text-sm font-medium text-gray-700">
              Επιβεβαίωση email
            </label>
            <input
              id="confirmEmail"
              type="email"
              value={form.confirmEmail}
              onChange={(e) => setForm({ ...form, confirmEmail: e.target.value })}
              className={`mt-1 w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                emailsMismatch ? "border-red-300 focus:ring-red-500" : "focus:ring-teal-800"
              }`}
              required
            />
            <p className={`mt-1 text-xs ${emailsMismatch ? "text-red-600" : "text-gray-500"}`}>
              {emailsMismatch ? "Τα email δεν ταιριάζουν." : "Πληκτρολογήστε ξανά το email για επιβεβαίωση."}
            </p>
          </div>

          {/* Τηλέφωνο (προαιρετικό) */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Τηλέφωνο (προαιρετικό)
            </label>
            <input
              id="phone"
              type="tel"
              inputMode="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="mt-1 w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-800"
              placeholder="π.χ. 69xxxxxxxx"
            />
            <p className="mt-1 text-xs text-gray-500">Προσθέστε κινητό ή σταθερό τηλέφωνο.</p>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 text-sm border rounded hover:bg-gray-50"
            >
              Ακύρωση
            </button>
            <button
              type="submit"
              disabled={loading || emailsMismatch}
              aria-busy={loading}
              className="px-4 py-2 text-sm bg-teal-800 text-white rounded hover:bg-teal-900 disabled:opacity-60 inline-flex items-center gap-2"
            >
              {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
              Προσθήκη
            </button>
          </div>
        </form>

        {/* Error only (no generic status) */}
        {errorMsg && <p className="mt-3 text-sm text-red-600">{errorMsg}</p>}
      </div>
    </div>
  );
}
