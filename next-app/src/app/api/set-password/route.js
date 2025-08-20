import prisma from "../../../../lib/prismaClient";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, newPassword } = await req.json();

    if (!email || !newPassword) {
      return new Response(
        JSON.stringify({ status: "error", message: "Missing email or password" }),
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return new Response(JSON.stringify({ status: "not_found" }), { status: 200 });
    }

    if (user.password) {
      return new Response(
        JSON.stringify({ status: "already_set" }),
        { status: 200 }
      );
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { email },
      data: { password: hashedPassword },
    });

    return new Response(JSON.stringify({ status: "success" }), { status: 200 });
  } catch (err) {
    return new Response(
      JSON.stringify({ status: "error", message: err.message }),
      { status: 500 }
    );
  }
}
