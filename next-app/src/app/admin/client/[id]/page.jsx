import { PrismaClient } from "@prisma/client";
import ClientDetail from "@/app/components/admin/ClientDetail";
import { createClient } from "@supabase/supabase-js";
import { verifyAdmin } from "../../../api/_lib/auth";
import { redirect } from "next/navigation";


const prisma = new PrismaClient();
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

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
      updatedAt: true,
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

  if (!client) throw new Error("Client not found");

  // enrich with signed URLs
  const docsWithUrls = await Promise.all(
    client.documents.map(async (doc) => {
      const { data } = await supabase.storage
        .from("documents")
        .createSignedUrl(doc.filePath, 60 * 60); // 1h
      return { ...doc, url: data?.signedUrl || null };
    })
  );

  const clientWithUrls = { ...client, documents: docsWithUrls };

  // console.log("Client passed to client detail page: ", clientWithUrls);

  return <ClientDetail client={clientWithUrls} mode="admin"/>;
}