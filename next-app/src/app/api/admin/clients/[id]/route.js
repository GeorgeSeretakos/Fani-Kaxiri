import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { verifyAdmin } from "../../../_lib/auth";

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
      documents: {
        select: { id: true, name: true, type: true, description: true, date: true },
      },
    },
  });

  if (!client) return NextResponse.json({ error: "Client not found" }, { status: 404 });

  return NextResponse.json(client);
}

export async function DELETE(req, { params }) {
  const admin = await verifyAdmin(); // ✅ must await
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const clientId = Number(id);

  try {
    await prisma.document.deleteMany({ where: { ownerId: clientId } });
    await prisma.user.delete({ where: { id: clientId } });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
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
      }
    });

    return NextResponse.json(updatedClient);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to update client" }, { status: 500 });
  }
}