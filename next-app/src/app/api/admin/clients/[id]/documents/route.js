// app/api/admin/clients/[id]/documents/route.js
import prisma from "../../../../../../../lib/prismaClient"
import { getSignedUrl } from "../../../../../../utils/supabaseStorage";

export async function GET(req, { params }) {
  const { id } = params;

  const docs = await prisma.document.findMany({
    where: { ownerId: Number(id) },
  });

  // attach signed urls
  const docsWithUrls = await Promise.all(
    docs.map(async (doc) => ({
      ...doc,
      url: await getSignedUrl(doc.name), // filePath is usually doc.name or "clientId/fileName"
    }))
  );

  return Response.json(docsWithUrls);
}
