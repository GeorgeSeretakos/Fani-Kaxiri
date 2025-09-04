"use client";

import AddClientModal from "../components/admin/AddClientModal";
import ClientsTable from "../components/admin/ClientsTable";
import {useEffect, useMemo, useState} from "react";
import ClientFilters from "../components/admin/ClientFilters";
import { Plus } from "lucide-react";

export default function AdminPage() {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("lastName"); // 'lastName' | 'updatedAt'
  const [sortDir, setSortDir] = useState("desc"); // 'asc' | 'desc'
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
        console.log("Clients fetched from admin page: ", data);
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

  const sorted = useMemo(() => {
    const arr = [...filtered];
    const dir = sortDir === "asc" ? 1 : -1;

    if (sortBy === "lastName") {
      arr.sort((a, b) => {
        const A = (a.lastName || "").toString();
        const B = (b.lastName || "").toString();
        // localeCompare for Greek + case-insensitive
        return A.localeCompare(B, "el", { sensitivity: "base" }) * dir ||
          (a.firstName || "").localeCompare((b.firstName || ""), "el", { sensitivity: "base" }) * dir;
      });
    } else if (sortBy === "updatedAt") {
      arr.sort((a, b) => {
        const A = a.updatedAt ? new Date(a.updatedAt).getTime() : 0;
        const B = b.updatedAt ? new Date(b.updatedAt).getTime() : 0;
        return (A - B) * dir;
      });
    }
    return arr;
  }, [filtered, sortBy, sortDir]);

  const handleClientAdded = (newClient) => {
    setClients((prev) => [newClient, ...prev]);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="py-6 px-12">
          <div className="flex flex-col gap-3">

            {/* Row 1: Title + Add | Counts */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div>
                  <h2 className="text-xl font-semibold">Πελάτες</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="p-1 rounded hover:bg-gray-100 text-gray-600"
                  title="Νέος πελάτης"
                  aria-label="Νέος πελάτης"
                >
                  <Plus className="w-5 h-5"/>
                </button>
              </div>

              {/* Counts (total + shown) */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-600">
                <span className="inline-flex items-center rounded-full bg-zinc-100 px-2 py-1">
                  Σύνολο: <span className="ml-1 font-semibold">{clients.length}</span>
                </span>
              </div>
            </div>

            {/* Row 2: Search + Sort | Reset */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <div className="flex-1 w-full">
                <ClientFilters
                  search={search}
                  setSearch={setSearch}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  sortDir={sortDir}
                  setSortDir={setSortDir}
                />
              </div>
            </div>

          </div>
        </div>
      </header>


      {/* Content */}
      <main>
        {loading ? (
          <div className="animate-pulse max-w-6xl mx-auto px-4 py-6">
            <div className="h-10 bg-zinc-100 rounded mb-3"/>
            <div className="h-10 bg-zinc-100 rounded mb-3"/>
            <div className="h-10 bg-zinc-100 rounded mb-3"/>
          </div>
        ) : errorMsg ? (
          <div
            className="bg-red-50 border border-red-200 text-red-700 rounded px-4 py-3 text-sm max-w-6xl mx-auto my-4">
            {errorMsg}
          </div>
        ) : !sorted.length ? (
          <div className="bg-white border border-zinc-200 rounded-lg p-8 text-center max-w-6xl mx-auto my-6">
            <p className="text-sm text-zinc-600">Δεν βρέθηκαν πελάτες.</p>
            <div className="mt-4">
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                <Plus className="w-4 h-4"/>
                <span>Προσθήκη πελάτη</span>
              </button>
            </div>
          </div>
        ) : (
          <ClientsTable clients={sorted}/>
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
