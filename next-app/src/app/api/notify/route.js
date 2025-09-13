import { NextResponse } from "next/server";
import { Resend } from "resend";
import { verifyAdmin } from "../_lib/auth";
import { getRequestMeta, maskEmail } from "../../../utils/apiUtils.js";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { ip, ua } = getRequestMeta(req);

  try {
    const admin = await verifyAdmin();
    if (!admin) {
      console.warn("notify.unauthorized", { ip, ua });
      return NextResponse.json({ error: "Unauthorized" }, { status: 401, headers: { "Cache-Control": "no-store" } });
    }

    const { to, name, subject, message, replyTo } = await req.json();
    const toEmail = String(to || "").trim().toLowerCase();
    if (!toEmail) {
      console.warn("notify.bad_request", { adminId: admin.id, ip, ua, reason: "`to` is required" });
      return NextResponse.json({ error: "`to` is required" }, { status: 400, headers: { "Cache-Control": "no-store" } });
    }

    const base = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://tonia-kaparelioti.gr").replace(/\/+$/, "");
    const site = `${base}/login`;
    const firstName = (name || "").split(" ")[0] || "πελάτη";

    const finalFrom = "Believe in Yourself <no-reply@tonia-kaparelioti.gr>";
    const finalSubj = subject || "Ενημέρωση από Believe in Yourself";
    const finalMsg  = message || "Έχουν ανέβει νέα αρχεία στον λογαριασμό σας.";

    const html = `
      <div style="font:14px/1.6 -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Helvetica,Arial;">
        <p>Γεια σου ${firstName},</p>
        <p>${finalMsg}</p>
        <p><a href="${site}" style="color:#0f766e;text-decoration:none">Μετάβαση στην εφαρμογή</a></p>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0" />
        <p style="color:#6b7280;font-size:12px">
          — Τόνια Καπαρελιώτη · Believe in Yourself<br/>
          Αυτό το email είναι ενημερωτικό σχετικά με τον λογαριασμό σας.
        </p>
      </div>
    `;

    const text = `Γεια σου ${firstName},

${finalMsg}

Μετάβαση: ${site}

— Τόνια Καπαρελιώτη · Believe in Yourself
`;

    // Start log (mask recipient; don't log full body)
    console.info("notify.start", {
      adminId: admin.id,
      to: maskEmail(toEmail),
      subjectLen: finalSubj.length,
      msgLen: finalMsg.length,
      ip, ua,
    });

    const { data, error } = await resend.emails.send({
      from: finalFrom,
      to: toEmail,                // single recipient
      subject: finalSubj,
      html,
      text,
      ...(replyTo ? { reply_to: replyTo } : {}),
    });

    if (error) {
      console.error("notify.provider_error", {
        adminId: admin.id,
        to: maskEmail(toEmail),
        error: error?.message || String(error),
        ip, ua,
      });
      return NextResponse.json(
        { error: error?.message || "Email provider error" },
        { status: 502, headers: { "Cache-Control": "no-store" } }
      );
    }

    console.info("notify.sent", {
      adminId: admin.id,
      to: maskEmail(toEmail),
      emailId: data?.id,
      ip, ua,
    });

    return NextResponse.json(
      { ok: true, id: data?.id },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  } catch (e) {
    console.error("notify.exception", { message: e?.message || String(e), ip, ua });
    return NextResponse.json(
      { error: e?.message || "Internal error" },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}