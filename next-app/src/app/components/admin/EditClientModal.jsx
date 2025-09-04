"use client";
import { useEffect, useRef } from "react";

export default function EditClientModal({
                                          isOpen,
                                          onClose,
                                          formData,
                                          setFormData,
                                          onSave,
                                          status,
                                          loading,
                                        }) {
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    // focus first field
    firstInputRef.current?.focus();

    // close on Esc
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Επεξεργασία Πελάτη</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Όνομα */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              Όνομα
            </label>
            <input
              id="firstName"
              ref={firstInputRef}
              type="text"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className="mt-1 w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <p className="mt-1 text-xs text-gray-500">
              Το μικρό όνομα του πελάτη.
            </p>
          </div>

          {/* Επώνυμο */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Επώνυμο
            </label>
            <input
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className="mt-1 w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <p className="mt-1 text-xs text-gray-500">
              Το επίθετο του πελάτη.
            </p>
          </div>

          {/* Τηλέφωνο */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Τηλέφωνο (προαιρετικό)
            </label>
            <input
              id="phone"
              type="tel"
              inputMode="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="mt-1 w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="π.χ. 69xxxxxxxx"
            />
            <p className="mt-1 text-xs text-gray-500">
              Προσθέστε ένα κινητό ή σταθερό τηλέφωνο επικοινωνίας.
            </p>
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
              disabled={loading}
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-60"
            >
              {loading ? "Αποθήκευση..." : "Αποθήκευση"}
            </button>
          </div>
        </form>

        {status && <p className="mt-3 text-sm text-gray-600">{status}</p>}
      </div>
    </div>
  );
}
