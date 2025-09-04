// app/api/notify/route.js
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { verifyAdmin } from "../_lib/auth";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const admin = await verifyAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { to, name, subject, message, replyTo, from } = await req.json();
  if (!to) return NextResponse.json({ error: "`to` is required" }, { status: 400 });

  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://tonia-kaparelioti.gr";
  const firstName = (name || "").split(" ")[0] || "πελάτη";

  const finalFrom = "Believe in Yourself <no-reply@tonia-kaparelioti.gr>";
  const finalSubj  = subject || `Ενημέρωση από Believe in Yourself`;
  const finalMsg   = message || "Έχουν ανέβει νέα αρχεία στον λογαριασμό σας.";

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

  try {
    const { data, error } = await resend.emails.send({
      from: finalFrom,
      to: Array.isArray(to) ? to : [to],
      subject: finalSubj,
      html,
      text,
    });
    if (error) return NextResponse.json({ error }, { status: 502 });
    return NextResponse.json({ ok: true, id: data?.id });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
