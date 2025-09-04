"use client";
import { ChevronDown, ChevronUp, RotateCcw } from "lucide-react";

export default function ClientFilters({
                                        search,
                                        setSearch,
                                        sortBy,
                                        setSortBy,
                                        sortDir,
                                        setSortDir,
                                      }) {
  const toggleDir = () => setSortDir((d) => (d === "asc" ? "desc" : "asc"));

  const handleReset = () => {
    setSearch("");
    setSortBy("lastName");
    setSortDir("desc"); // API default
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-4">
      {/* Search */}
      <div className="flex-1">
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Αναζήτηση
        </label>
        <input
          type="text"
          placeholder="Όνομα ή email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-2 border rounded text-sm"
        />
      </div>

      {/* Sort */}
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Ταξινόμηση κατά
        </label>
        <div className="flex gap-2">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border rounded text-sm"
          >
            <option value="lastName">Επώνυμο</option>
            <option value="updatedAt">Τελευταία τροποποίηση</option>
          </select>

          <button
            type="button"
            onClick={toggleDir}
            className="px-3 py-2 border rounded text-sm inline-flex items-center gap-1 hover:bg-gray-50"
          >
            {sortDir === "asc" ? (
              <>
                <ChevronUp className="w-4 h-4" />
                <span>Αύξουσα</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                <span>Φθίνουσα</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Reset */}
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1 invisible">
          Reset
        </label>
        <button
          type="button"
          onClick={handleReset}
          className="px-3 py-2 text-sm border rounded hover:bg-gray-50 inline-flex items-center gap-1"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Επαναφορά</span>
        </button>
      </div>
    </div>
  );
}
