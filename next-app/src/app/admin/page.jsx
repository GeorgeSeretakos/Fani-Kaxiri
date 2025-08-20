"use client";

import { useEffect, useState } from "react";
import ClientFilters from "../components/admin/ClientFilters";
import ClientsTable from "../components/admin/ClientsTable";
import AddClientModal from "../components/admin/AddClientModal";

export default function AdminPage() {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch("/api/admin/clients", {
          credentials: "include",
        });

        if (!res.ok) throw new Error("Unauthorized or failed fetch");

        const data = await res.json();
        console.log("Fetched clients: ", data);

        setClients(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchClients();
  }, []);


  const handleClientAdded = (newClient) => {
    setClients((prev) => [newClient, ...prev]);
  };

  return (
    <div className="space-y-6">
      {/* Header with Add Button */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Clients</h2>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + Add Client
        </button>
      </div>

      {/* Search + Filters */}
      <ClientFilters search={search} setSearch={setSearch} />

      {/* Table */}
      <ClientsTable
        clients={clients.filter((c) => {
          const q = search.toLowerCase();
          return (
            c.firstName.toLowerCase().includes(q) ||
            c.lastName.toLowerCase().includes(q) ||
            c.email.toLowerCase().includes(q)
          );
        })}
      />

      {showModal && (
        <AddClientModal
          onClose={() => setShowModal(false)}
          onClientAdded={handleClientAdded}
        />
      )}
    </div>
  );
}
