"use client";

import { useRef } from "react";

export default function UploadModal({
                                      isOpen,
                                      onClose,
                                      onSubmit,
                                      file,
                                      setFile,
                                      docType,
                                      setDocType,
                                      description,
                                      setDescription,
                                      status,
                                      loading,
                                      date,
                                      setDate,
                                    }) {
  if (!isOpen) return null;

  const fileInputRef = useRef();

  const options = [
    { value: "DIET", label: "Δίαιτα" },
    { value: "MEASUREMENT", label: "Μέτρηση" },
    { value: "PHOTO", label: "Φωτογραφία" },
  ];

  const handleFileClick = () => fileInputRef.current.click();

  // default today in yyyy-mm-dd format
  const today = new Date().toISOString().split("T")[0];

  console.log("File received from Upload Modal: ", file);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-lg font-semibold mb-4">Ανέβασμα Εγγράφου</h3>

        <form onSubmit={onSubmit} className="space-y-4">
          {/* Custom file upload */}
          <div
            onClick={handleFileClick}
            className="w-full p-4 border-2 border-dashed border-gray-300 rounded cursor-pointer text-center hover:border-blue-400 transition"
          >
            <p className="text-gray-600">
              {file ? "Αλλαγή αρχείου" : "Κάντε κλικ για να επιλέξετε αρχείο"}
            </p>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={(e) => setFile(e.target.files[0])}
            className="hidden"
          />
          {file && (
            <p className="text-sm text-gray-700">
              Επιλεγμένο αρχείο: <span className="font-medium">{file.name}</span>
            </p>
          )}

          {/* Επιλογή τύπου */}
          <div className="flex space-x-2">
            {options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setDocType(opt.value)}
                className={`flex-1 px-3 py-2 rounded border text-sm font-medium transition ${
                  docType === opt.value
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Ημερομηνία */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ημερομηνία
            </label>
            <input
              type="date"
              required
              className="border p-2 rounded w-full"
              value={date || today}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* Περιγραφή */}
          <textarea
            rows={3}
            placeholder="Σημείωση"
            className="border p-2 rounded w-full resize-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={120}
          />

          {/* Κουμπιά */}
          <div className="flex justify-end space-x-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 border rounded hover:bg-gray-100"
            >
              Ακύρωση
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold shadow"
            >
              {loading ? "Ανέβασμα..." : "Ανέβασμα"}
            </button>
          </div>
        </form>

        {status && <p className="text-sm mt-3 text-gray-600">{status}</p>}
      </div>
    </div>
  );
}
