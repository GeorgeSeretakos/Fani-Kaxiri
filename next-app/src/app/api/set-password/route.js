import prisma from "../../../../lib/prismaClient";
import bcrypt from "bcryptjs";
import { getRequestMeta, maskEmail } from "../../../utils/apiUtils";

export async function POST(req) {
  const { ip, ua } = getRequestMeta(req);

  try {
    const { email: emailRaw, newPassword } = await req.json();
    const email = (emailRaw || "").trim().toLowerCase();

    if (!email || !newPassword) {
      console.warn("set_password.missing_fields", { ip, ua });
      const res = new Response(
        JSON.stringify({ status: "error", message: "Missing email or password" }),
        { status: 400 }
      );
      res.headers.set("Cache-Control", "no-store");
      return res;
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      console.warn("set_password.user_not_found", { email: maskEmail(email), ip, ua });
      const res = new Response(JSON.stringify({ status: "not_found" }), { status: 200 });
      res.headers.set("Cache-Control", "no-store");
      return res;
    }

    if (user.password) {
      console.info("set_password.already_set", { userId: user.id, email: maskEmail(email), ip, ua });
      const res = new Response(JSON.stringify({ status: "already_set" }), { status: 200 });
      res.headers.set("Cache-Control", "no-store");
      return res;
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { email },
      data: { password: hashedPassword },
    });

    console.info("set_password.success", { userId: user.id, email: maskEmail(email), ip, ua });
    const res = new Response(JSON.stringify({ status: "success" }), { status: 200 });
    res.headers.set("Cache-Control", "no-store");
    return res;
  } catch (err) {
    console.error("set_password.error", { message: err?.message });
    const res = new Response(JSON.stringify({ status: "error", message: err.message }), { status: 500 });
    res.headers.set("Cache-Control", "no-store");
    return res;
  }
}