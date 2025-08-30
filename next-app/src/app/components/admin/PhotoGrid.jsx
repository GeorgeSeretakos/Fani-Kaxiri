"use client";

import { useEffect, useState } from "react";

export default function PhotoGrid({ photos, onDelete }) {
  const [urls, setUrls] = useState({});

  useEffect(() => {
    async function fetchUrls() {
      const result = {};
      for (const p of photos) {
        try {
          result[p.id] = p.url;
        } catch (err) {
          console.error("Failed to fetch preview URL for photo", p.id, err);
        }
      }
      setUrls(result);
    }

    if (photos.length) {
      fetchUrls();
    }
  }, [photos]);


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {photos.map((p) => {
        const preview = urls[p.id];
        return (
          <div
            key={p.id}
            className="border rounded p-3 bg-white shadow flex flex-col items-center"
          >
            {/* Image preview */}
            {preview ? (
              <img
                src={preview}
                alt={p.description || p.name}
                className="w-full h-48 object-cover rounded"
              />
            ) : (
              <div className="w-full h-48 flex items-center justify-center bg-gray-100 rounded text-gray-500">
                Loading…
              </div>
            )}

            {/* Title + date */}
            <p className="mt-2 font-semibold">{p.description || p.name}</p>
            <p className="text-sm text-gray-500">
              {new Date(p.date).toLocaleDateString()}
            </p>

            {/* Actions */}
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => onDelete(p.id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
