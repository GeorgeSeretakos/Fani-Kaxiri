"use client";

import { useEffect, useState, useMemo } from "react";
import ClientFilters from "../components/admin/ClientFilters";
import ClientsTable from "../components/admin/ClientsTable";
import AddClientModal from "../components/admin/AddClientModal";
import { Plus } from "lucide-react";

export default function AdminPage() {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/admin/clients", { credentials: "include" });
        if (!res.ok) throw new Error("Unauthorized or failed fetch");
        const data = await res.json();
        setClients(data || []);
      } catch (err) {
        console.error(err);
        setErrorMsg("Αποτυχία φόρτωσης πελατών.");
      } finally {
        setLoading(false);
      }
    };
    fetchClients();
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return clients;
    return clients.filter((c) =>
      [c.firstName, c.lastName, c.email].some((v) => v?.toLowerCase().includes(q))
    );
  }, [clients, search]);

  const handleClientAdded = (newClient) => {
    setClients((prev) => [newClient, ...prev]);
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <header className="border-b border-zinc-200 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* 3-column grid: Left (title+icon), Middle (search centered), Right (spacer) */}
          <div className="grid gap-4 py-4 sm:grid-cols-[auto_1fr_auto] sm:items-center">
            {/* Left: Title + total + add icon */}
            <div className="flex items-center gap-2">
              <div>
                <h2 className="text-xl font-semibold">Πελάτες</h2>
                <p className="text-xs sm:text-sm text-zinc-500">Σύνολο: {clients.length}</p>
              </div>

              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="p-1 rounded hover:bg-gray-100 text-gray-600"
                title="Νέος πελάτης"
                aria-label="Νέος πελάτης"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>

            {/* Middle: Search (centered in its grid cell) */}
            <div className="justify-self-center w-full sm:max-w-md">
              <ClientFilters search={search} setSearch={setSearch} />
            </div>

            {/* Right: Spacer to keep middle centered on desktop */}
            <div className="hidden sm:block" aria-hidden="true" />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        {loading ? (
          <div className="animate-pulse">
            <div className="h-10 bg-zinc-100 rounded mb-3" />
            <div className="h-10 bg-zinc-100 rounded mb-3" />
            <div className="h-10 bg-zinc-100 rounded mb-3" />
          </div>
        ) : errorMsg ? (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded px-4 py-3 text-sm">
            {errorMsg}
          </div>
        ) : filtered.length === 0 ? (
          <div className="bg-white border border-zinc-200 rounded-lg p-8 text-center">
            <p className="text-sm text-zinc-600">Δεν βρέθηκαν πελάτες.</p>
            <div className="mt-4">
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                <Plus className="w-4 h-4" />
                <span>Προσθήκη πελάτη</span>
              </button>
            </div>
          </div>
        ) : (
          <ClientsTable clients={filtered} />
        )}
      </main>

      {showModal && (
        <AddClientModal
          onClose={() => setShowModal(false)}
          onClientAdded={handleClientAdded}
        />
      )}
    </div>
  );
}