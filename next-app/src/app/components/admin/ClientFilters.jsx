"use client";

export default function ClientFilters({ search, setSearch }) {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-3 py-2 border rounded w-full"
      />
    </div>
  );
}
