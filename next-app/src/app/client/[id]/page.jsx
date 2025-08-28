import { PrismaClient } from "@prisma/client";
import { createClient } from "@supabase/supabase-js";
import { verifyClient } from "../../api/_lib/auth";
import UnauthorizedRedirect from "@/app/components/UnauthorizedRedirect";
import ClientDetail from "@/app/components/admin/ClientDetail";

const prisma = new PrismaClient();
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // ✅ safe on server
);

export default async function ClientPage({ params }) {
  const { id } = params;

  // 🔒 Authorization: role + ownership
  const clientAuth = await verifyClient(id);
  if (!clientAuth) {
    return <UnauthorizedRedirect />;
  }

  // 📦 Φέρνουμε client από τη βάση
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
        select: {
          id: true,
          name: true,
          type: true,
          description: true,
          date: true,
          filePath: true,
        },
        orderBy: { date: "desc" },
      },
    },
  });

  if (!client) {
    return <p className="text-red-500">Δεν βρέθηκε ο πελάτης.</p>;
  }

  // 🔑 Signed URLs
  const docsWithUrls = await Promise.all(
    client.documents.map(async (doc) => {
      const { data } = await supabase.storage
        .from("documents")
        .createSignedUrl(doc.filePath, 60 * 60);
      return { ...doc, url: data?.signedUrl || null };
    })
  );

  const clientWithUrls = { ...client, documents: docsWithUrls };

  return <ClientDetail client={clientWithUrls} mode="client" />
}
