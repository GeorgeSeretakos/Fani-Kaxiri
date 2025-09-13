import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prismaClient.js";
import { verifyAdmin } from "../../_lib/auth";
import { getRequestMeta, maskEmail } from "../../../../utils/apiUtils.js";

export async function GET(req) {
  const { ip, ua } = getRequestMeta(req);

  const admin = await verifyAdmin();
  if (!admin) {
    console.warn("admin_clients.list.unauthorized", { ip, ua });
    return NextResponse.json({ error: "Unauthorized" }, { status: 401, headers: { "Cache-Control": "no-store" } });
  }

  console.info("admin_clients.list.start", { adminId: admin.id, ip, ua });

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

  console.info("admin_clients.list.success", { adminId: admin.id, count: clients.length, ip, ua });

  return NextResponse.json(clients, {
    status: 200,
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(req) {
  const { ip, ua } = getRequestMeta(req);

  const admin = await verifyAdmin();
  if (!admin) {
    console.warn("admin_clients.create.unauthorized", { ip, ua });
    return NextResponse.json({ error: "Unauthorized" }, { status: 401, headers: { "Cache-Control": "no-store" } });
  }

  try {
    const { email: emailRaw, firstName, lastName, phone } = await req.json();
    const email = (emailRaw || "").trim().toLowerCase();

    if (!email || !firstName || !lastName) {
      console.warn("admin_clients.create.bad_request", { adminId: admin.id, ip, ua });
      return NextResponse.json({ error: "Missing required fields" }, { status: 400, headers: { "Cache-Control": "no-store" } });
    }

    console.info("admin_clients.create.start", {
      adminId: admin.id,
      email: maskEmail(email),
      ip, ua,
    });

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

    console.info("admin_clients.create.success", {
      adminId: admin.id,
      userId: newClient.id,
      email: maskEmail(newClient.email),
      ip, ua,
    });

    return NextResponse.json(newClient, {
      status: 201,
      headers: { "Cache-Control": "no-store" },
    });
  } catch (err) {
    // Handle unique email constraint (Prisma P2002)
    if (err?.code === "P2002") {
      console.warn("admin_clients.create.conflict", { reason: "email_unique", ip, ua });
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 409, headers: { "Cache-Control": "no-store" } }
      );
    }

    console.error("admin_clients.create.exception", { message: err?.message, ip, ua });
    return NextResponse.json(
      { error: "Failed to create client" },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}
