import prisma from "../../../../lib/prismaClient.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return new Response(JSON.stringify({ status: "not_found" }), { status: 200 });
    }

    // Case 1: first login (no password yet)
    if (!user.password) {
      return new Response(JSON.stringify({ status: "first_login" }), { status: 200 });
    }

    // Case 2: check password
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return new Response(JSON.stringify({ status: "invalid_password" }), { status: 200 });
    }

    // Case 3: successful login - These are the data to embed in the token
    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
        email: user.email
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    console.log("User: ", user); // TODO: Remove before production

    // Build response
    const res = new Response(
      JSON.stringify({
        status: "success",
        role: user.role,
        id: user.id,
      }),
      { status: 200 }
    );

    // Set cookie
    res.headers.append(
      "Set-Cookie",
      `token=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=3600`
    );

    return res;
  } catch (err) {
    return new Response(JSON.stringify({ status: "error", message: err.message }), { status: 500 });
  }
}
