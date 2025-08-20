import { PrismaClient } from "@prisma/client";
import ClientDetail from "@/app/components/admin/ClientDetail";

const prisma = new PrismaClient();

export default async function ClientDetailPage({ params }) {
  const { id } = await params;

  const client = await prisma.user.findUnique({
    where: { id: Number(id) },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      phone: true,
      createdAt: true,
      documents: {
        select: { id: true, name: true, type: true, description: true, date: true },
      },
    },
  });

  if (!client) throw new Error("Client not found");

  return <ClientDetail client={client} />;
}