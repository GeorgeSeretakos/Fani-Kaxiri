import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { verifyAdmin } from "../../../_lib/auth";
import {deleteClientAtomic} from "../../../../../services/documents";
import {getRequestMeta, maskEmail} from "../../../../../utils/apiUtils";

const prisma = new PrismaClient();

export async function GET(req, { params }) {
  const { ip, ua } = getRequestMeta(req);

  // Auth
  const admin = await verifyAdmin();
  if (!admin) {
    console.warn("clients.get.unauthorized", { ip, ua });
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401, headers: { "Cache-Control": "no-store" } }
    );
  }

  // Params
  const { id } = await params; // keep your pattern
  const clientId = Number(id);
  if (!Number.isFinite(clientId)) {
    console.warn("clients.get.invalid_id", { id, ip, ua });
    return NextResponse.json(
      { error: "Invalid id" },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }

  try {
    console.info("clients.get.attempt", { clientId, ip, ua });

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

    if (!client) {
      console.warn("clients.get.not_found", { clientId, ip, ua });
      return NextResponse.json(
        { error: "Client not found" },
        { status: 404, headers: { "Cache-Control": "no-store" } }
      );
    }

    console.info("clients.get.success", {
      clientId,
      email: client.email ? maskEmail(client.email) : undefined,
      docs: client.documents?.length ?? 0,
      ip,
      ua,
    });

    return NextResponse.json(client, {
      status: 200,
      headers: { "Cache-Control": "no-store" },
    });
  } catch (err) {
    console.error("clients.get.error", {
      clientId,
      message: err?.message,
      stack: err?.stack,
      ip,
      ua,
    });
    return NextResponse.json(
      { error: "Failed to fetch client" },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}


export async function DELETE(req, { params }) {
  const { ip, ua } = getRequestMeta(req);

  // Auth
  const admin = await verifyAdmin();
  if (!admin) {
    console.warn("clients.delete.unauthorized", { ip, ua });
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401, headers: { "Cache-Control": "no-store" } }
    );
  }

  // Params
  const clientId = Number(params?.id);
  if (!Number.isFinite(clientId)) {
    console.warn("clients.delete.invalid_id", { id: params?.id, ip, ua });
    return NextResponse.json(
      { error: "Invalid id" },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }

  try {
    console.info("clients.delete.attempt", { clientId, ip, ua });

    await deleteClientAtomic(clientId);

    console.info("clients.delete.success", { clientId, ip, ua });
    return NextResponse.json(
      { success: true },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  } catch (err) {
    if (err?.message === "STORAGE_DELETE_FAILED") {
      console.error("clients.delete.storage_delete_failed", {
        clientId,
        message: err?.message,
        stack: err?.stack,
        ip,
        ua,
      });
      return NextResponse.json(
        { error: "Failed to delete files from storage" },
        { status: 500, headers: { "Cache-Control": "no-store" } }
      );
    }

    console.error("clients.delete.error", {
      clientId,
      message: err?.message,
      stack: err?.stack,
      ip,
      ua,
    });
    return NextResponse.json(
      { error: "Failed to delete client" },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}


export async function PUT(req, { params }) {
  const { ip, ua } = getRequestMeta(req);

  // Auth
  const admin = await verifyAdmin();
  if (!admin) {
    console.warn("clients.update.unauthorized", { ip, ua });
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401, headers: { "Cache-Control": "no-store" } }
    );
  }

  // Params
  const { id } = await params;
  const clientId = Number(id);
  if (!Number.isFinite(clientId)) {
    console.warn("clients.update.invalid_id", { id, ip, ua });
    return NextResponse.json(
      { error: "Invalid id" },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }

  try {
    const body = await req.json();
    const { email: emailRaw, firstName, lastName, phone } = body ?? {};
    const email = (emailRaw ?? "").trim().toLowerCase();

    // Build update payload (only provided, truthy fields)
    const data = {
      ...(email ? { email } : {}),
      ...(firstName ? { firstName } : {}),
      ...(lastName ? { lastName } : {}),
      ...(phone ? { phone } : {}),
    };

    if (Object.keys(data).length === 0) {
      console.warn("clients.update.no_fields", { clientId, ip, ua });
      return NextResponse.json(
        { error: "No fields to update" },
        { status: 400, headers: { "Cache-Control": "no-store" } }
      );
    }

    console.info("clients.update.attempt", {
      clientId,
      fields: Object.keys(data),
      ip,
      ua,
    });

    const updatedClient = await prisma.user.update({
      where: { id: clientId },
      data,
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

    console.info("clients.update.success", {
      clientId,
      fields: Object.keys(data),
      ip,
      ua,
    });

    return NextResponse.json(updatedClient, {
      status: 200,
      headers: { "Cache-Control": "no-store" },
    });
  } catch (err) {
    console.error("clients.update.error", {
      clientId,
      message: err?.message,
      stack: err?.stack,
      ip,
      ua,
    });
    return NextResponse.json(
      { error: "Failed to update client" },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}