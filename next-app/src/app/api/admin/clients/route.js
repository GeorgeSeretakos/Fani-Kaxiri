import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { verifyAdmin } from "../../_lib/auth";

const prisma = new PrismaClient();

// ✅ Existing GET
export async function GET() {
  const user = verifyAdmin();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const clients = await prisma.user.findMany({
    where: { role: "CLIENT" },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      phone: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: { lastName: "asc" },
  });

  return NextResponse.json(clients);
}

// ✅ New POST
export async function POST(req) {
  const user = verifyAdmin();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { email, firstName, lastName, phone } = await req.json();

    if (!email || !firstName || !lastName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newClient = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        phone,
        role: "CLIENT",
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json(newClient, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to create client" }, { status: 500 });
  }
}