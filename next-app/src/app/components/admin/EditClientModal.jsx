// EditClientModal.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";

export default function EditClientModal({
                                          isOpen,
                                          onClose,
                                          formData,
                                          setFormData,
                                          onSave,
                                          loading,
                                        }) {
  const firstInputRef = useRef(null);
  const onCloseRef = useRef(onClose);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const busy = Boolean(loading || isSubmitting);

  useEffect(() => { onCloseRef.current = onClose; }, [onClose]);

  // focus only when opens (rAF avoids fighting clicks)
  useEffect(() => {
    if (!isOpen) return;
    const id = requestAnimationFrame(() => firstInputRef.current?.focus());
    return () => cancelAnimationFrame(id);
  }, [isOpen]);

  // ESC close (read latest onClose via ref)
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === "Escape") onCloseRef.current?.(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      await onSave?.();
    } finally {
      setIsSubmitting(false);
    }
  };

  const stop = (e) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onMouseDown={() => onCloseRef.current?.()}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
        onMouseDown={stop}
        role="dialog"
        aria-modal="true"
      >
        <h2 className="text-lg font-semibold mb-4">Επεξεργασία Πελάτη</h2>

        <form onSubmit={handleSubmit} className="space-y-4" aria-busy={busy}>
          {/* Όνομα */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              Όνομα
            </label>
            <input
              id="firstName"
              ref={firstInputRef}
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="mt-1 w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-800"
              aria-describedby="firstNameHelp"
              required
            />
            <p id="firstNameHelp" className="mt-1 text-xs text-gray-500">
              Το μικρό όνομα του πελάτη.
            </p>
          </div>

          {/* Επώνυμο */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Επώνυμο
            </label>
            <input
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="mt-1 w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-800"
              aria-describedby="lastNameHelp"
              required
            />
            <p id="lastNameHelp" className="mt-1 text-xs text-gray-500">
              Το επίθετο του πελάτη.
            </p>
          </div>

          {/* Τηλέφωνο */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Τηλέφωνο (προαιρετικό)
            </label>
            <input
              id="phone"
              type="tel"
              inputMode="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="mt-1 w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-800"
              aria-describedby="phoneHelp"
              placeholder="π.χ. 69xxxxxxxx"
            />
            <p id="phoneHelp" className="mt-1 text-xs text-gray-500">
              Προσθέστε ένα κινητό ή σταθερό τηλέφωνο επικοινωνίας.
            </p>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => onCloseRef.current?.()}
              className="px-3 py-2 text-sm border rounded hover:cursor-pointer"
            >
              Ακύρωση
            </button>
            <button
              type="submit"
              disabled={busy}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-teal-800 text-white rounded hover:cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {busy ? (<><Loader2 className="w-4 h-4 animate-spin" />Αποθήκευση...</>) : "Αποθήκευση"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
