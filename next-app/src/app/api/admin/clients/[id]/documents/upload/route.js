import { createUploadUrl } from "../../../../../../../utils/supabaseStorage";
import prisma from "../../../../../../../../lib/prismaClient";

export async function POST(req, { params }) {
  const { id } = await params;
  const { fileName, type, description } = await req.json();

  // construct a path like "clientId/fileName.pdf"
  const filePath = `${id}/${Date.now()}-${fileName}`; // avoid collisions

  const uploadUrl = await createUploadUrl(filePath);

  const storagePath = `${id}/${fileName}`;

  // Save in DB (without signed URL, only filePath)
  const doc = await prisma.document.create({
    data: {
      name: fileName,
      type,
      description,
      ownerId: Number(id),
      storagePath
    }
  })

  return Response.json({ uploadUrl, filePath, doc });
}
