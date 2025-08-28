"use client";

export default function EditClientModal({
                                          isOpen,
                                          onClose,
                                          formData,
                                          setFormData,
                                          onSave,
                                          status,
                                          loading,
                                        }) {
  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSave(); // η save λογική που περνάς απ'έξω
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Επεξεργασία Πελάτη</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Όνομα"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Επώνυμο"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Τηλέφωνο"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
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
              {loading ? "Αποθήκευση..." : "Αποθήκευση"}
            </button>
          </div>
        </form>

        {status && <p className="mt-2 text-sm text-gray-600">{status}</p>}
      </div>
    </div>
  );
}
