"use client";

import { useRouter } from "next/navigation";

export default function ClientsTable({ clients }) {
  const router = useRouter();

  if (clients.length === 0) {
    return <p className="text-gray-500">No clients found.</p>;
  }

  return (
    <table className="w-full bg-white rounded shadow border">
      <thead>
      <tr className="bg-gray-100 text-left">
        <th className="p-3">First Name</th>
        <th className="p-3">Last Name</th>
        <th className="p-3">Email</th>
        <th className="p-3">Phone</th>
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
        </tr>
      ))}
      </tbody>
    </table>
  );
}
