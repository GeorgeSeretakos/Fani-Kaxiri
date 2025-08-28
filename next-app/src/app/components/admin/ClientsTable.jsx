"use client";

import { useRouter } from "next/navigation";

export default function ClientsTable({ clients }) {
  const router = useRouter();

  if (clients.length === 0) {
    return <p className="text-gray-500">Δεν βρέθηκαν πελάτες.</p>;
  }

  // helper function για format
  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("el-GR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <table className="w-full bg-white rounded shadow border">
      <thead>
      <tr className="bg-gray-100 text-left">
        <th className="p-3">Όνομα</th>
        <th className="p-3">Επώνυμο</th>
        <th className="p-3">Email</th>
        <th className="p-3">Τηλέφωνο</th>
        <th className="p-3">Τελευταία τροποποίηση</th>
      </tr>
      </thead>
      <tbody>
      {clients.map((c) => (
        <tr
          key={c.id}
          onClick={() => router.push(`/admin/client/${c.id}`)}
          className="border-t font-semibold hover:bg-teal-800 hover:text-white cursor-pointer"
        >
          <td className="p-3">{c.firstName}</td>
          <td className="p-3">{c.lastName}</td>
          <td className="p-3">{c.email}</td>
          <td className="p-3">{c.phone}</td>
          <td className="p-3">{formatDate(c.updatedAt)}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}
