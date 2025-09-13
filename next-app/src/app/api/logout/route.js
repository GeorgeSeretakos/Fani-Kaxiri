import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { getRequestMeta, maskEmail } from "../../../utils/apiUtils.js";

export async function POST(req) {
  const { ip, ua } = getRequestMeta(req);
  const isProd = process.env.NODE_ENV === "production";

  let payload = null;
  let token = "";

  // ✅ MUST await cookies() on your Next version
  try {
    const cookieStore = await cookies();
    token = cookieStore.get("token")?.value || "";
    if (token) {
      try {
        // verify for valid sessions
        payload = jwt.verify(token, process.env.JWT_SECRET);
      } catch {
        // expired/invalid: decode only for logging context (NOT for auth)
        try { payload = jwt.decode(token) || null; } catch {}
      }
    }
  } catch {
    // non-fatal; proceed to clear cookie + redirect
  }

  // Redirect to login (use trailing slash if trailingSlash: true)
  const res = NextResponse.redirect(
    new URL("/login/", process.env.NEXT_PUBLIC_BASE_URL || req.url),
    { status: 303 } // force GET
  );

  // Clear cookie (mirror flags used at login)
  res.cookies.set("token", "", {
    httpOnly: true,
    secure: isProd,
    sameSite: "strict",
    expires: new Date(0),
    path: "/",
  });

  // Minimal, useful logs (no PII)
  if (payload?.id) {
    console.info("logout.success", {
      userId: payload.id,
      role: payload.role,
      email: payload.email ? maskEmail(payload.email) : undefined,
      ip, ua,
    });
  } else if (token) {
    console.info("logout.cleared_invalid_or_expired_token", { ip, ua });
  } else {
    console.info("logout.no_session_cookie", { ip, ua });
  }

  return res;
}