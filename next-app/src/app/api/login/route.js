import prisma from "../../../../lib/prismaClient.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { getRequestMeta, maskEmail } from "../../../utils/apiUtils";

const JWT_TTL_SECONDS = parseInt(process.env.JWT_TTL_SECONDS || "14400", 10); // 4 hours

export async function POST(req) {
  const { ip, ua } = getRequestMeta(req);

  try {
    const { email: emailRaw, password, acceptedPrivacy } = await req.json();
    const email = (emailRaw || "").trim().toLowerCase();

    // Require acceptance every login
    if (!acceptedPrivacy) {
      console.warn("login.privacy_not_accepted", { email: maskEmail(email), ip, ua });
      return new Response(JSON.stringify({ status: "privacy_not_accepted" }), { status: 200 });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      console.warn("login.not_found", { email: maskEmail(email), ip, ua });
      return new Response(JSON.stringify({ status: "not_found" }), { status: 200 });
    }

    // First login (no password set)
    if (!user.password) {
      console.info("login.first_login", { userId: user.id, ip, ua });
      return new Response(JSON.stringify({ status: "first_login" }), { status: 200 });
    }

    // Password check
    const valid = await bcrypt.compare(password || "", user.password);
    if (!valid) {
      console.warn("login.invalid_password", { userId: user.id, ip, ua });
      return new Response(JSON.stringify({ status: "invalid_password" }), { status: 200 });
    }

    // Issue JWT with SAME TTL as cookie Max-Age
    const token = jwt.sign(
      { id: user.id, role: user.role, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: JWT_TTL_SECONDS }
    );

    const res = new Response(
      JSON.stringify({ status: "success", role: user.role, id: user.id }),
      { status: 200 }
    );

    // Set cookie with SAME TTL
    res.headers.append(
      "Set-Cookie",
      `token=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=${JWT_TTL_SECONDS}`
    );

    console.info("login.success", { userId: user.id, role: user.role, ip, ua });
    return res;
  } catch (err) {
    console.error("login.error", { message: err?.message, stack: err?.stack });
    return new Response(JSON.stringify({ status: "error", message: err.message }), { status: 500 });
  }
}
