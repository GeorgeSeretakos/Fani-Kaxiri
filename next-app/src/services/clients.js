// src/services/clients.js
export async function deleteClient(clientId) {
  const res = await fetch(`/api/admin/clients/${clientId}`, {
    method: "DELETE",
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to delete client");
  return true;
}

export async function updateClient(clientId, data) {
  const res = await fetch(`/api/admin/clients/${clientId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update client");
  return res.json();
}
