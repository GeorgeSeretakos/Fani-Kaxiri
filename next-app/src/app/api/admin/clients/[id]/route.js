import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { verifyAdmin } from "../../../_lib/auth";
import prismaClient from "../../../../../../lib/prismaClient";
import supabaseServer from "../../../../../../lib/supabaseServer";

const prisma = new PrismaClient();

export async function GET(req, { params }) {
  const admin = await verifyAdmin(); // ✅ now async
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const clientId = Number(id);

  const client = await prisma.user.findUnique({
    where: { id: clientId },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      phone: true,
      createdAt: true,
      updatedAt: true,
      documents: {
        select: { id: true, name: true, type: true, description: true, date: true },
      },
    },
  });

  if (!client) return NextResponse.json({ error: "Client not found" }, { status: 404 });

  return NextResponse.json(client);
}

export async function DELETE(req, { params }) {
  const admin = await verifyAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = params;
  const clientId = Number(id);

  try {
    // 1. Πάρε όλα τα filePaths του client
    const docs = await prismaClient.document.findMany({
      where: { ownerId: clientId },
      select: { filePath: true },
    });

    // 2. Σβήσε τα από το Storage (αν υπάρχουν)
    if (docs.length > 0) {
      const paths = docs.map((d) => d.filePath);
      const { error: storageError } = await supabaseServer
        .storage
        .from("documents")
        .remove(paths);

      if (storageError) {
        console.error("Storage delete error:", storageError);
        return NextResponse.json({ error: "Failed to delete files from storage" }, { status: 500 });
      }
    }

    // 3. Σβήσε τα από το DB
    await prismaClient.document.deleteMany({ where: { ownerId: clientId } });
    await prismaClient.user.delete({ where: { id: clientId } });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Delete client error:", err);
    return NextResponse.json({ error: "Failed to delete client" }, { status: 500 });
  }
}


export async function PUT(req, { params }) {
  const admin = await verifyAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const clientId = Number(id);

  try {
    const body = await req.json();
    const { email, firstName, lastName, phone } = body;

    const updatedClient = await prisma.user.update({
      where: { id: clientId },
      data: {
        ...(email && { email }),
        ...(firstName && { firstName }),
        ...(lastName && { lastName }),
        ...(phone && { phone }),
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        createdAt: true,
        updatedAt: true,
      }
    });

    return NextResponse.json(updatedClient);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to update client" }, { status: 500 });
  }
}