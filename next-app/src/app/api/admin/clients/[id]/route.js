import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { verifyAdmin } from "../../../_lib/auth";
import {getRequestMeta, maskEmail} from "../../../../../utils/apiUtils";
import prismaClient from "../../../../../../lib/prismaClient";
import {deleteFromStorage} from "../../../../../utils/storageServer";

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
  const admin = await verifyAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const clientId = Number(id);

  try {
    // Collect file paths first (we'll need them after DB deletion)
    const docs = await prismaClient.document.findMany({
      where: { ownerId: clientId },
      select: { filePath: true },
    });
    const paths = [...new Set(docs.map(d => d.filePath).filter(Boolean))];

    // 1) Delete from DB first (atomic for user + docs)
    await prismaClient.$transaction([
      prismaClient.document.deleteMany({ where: { ownerId: clientId } }),
      prismaClient.user.delete({ where: { id: clientId } }),
    ]);

    // 2) Delete from Backblaze B2 (via S3 API util), in small batches
    const failed = [];
    const batch = 5;
    for (let i = 0; i < paths.length; i += batch) {
      const chunk = paths.slice(i, i + batch);
      const results = await Promise.allSettled(chunk.map(p => deleteFromStorage(p)));
      results.forEach((res, idx) => {
        const key = chunk[idx];
        if (res.status === "fulfilled") {
          if (res.value !== true) failed.push(key); // verification failed
        } else {
          failed.push(key); // exception
        }
      });
    }

    return NextResponse.json({ success: true, storageFailed: failed });
  } catch (err) {
    return NextResponse.json({ error: "Failed to delete client" }, { status: 500 });
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