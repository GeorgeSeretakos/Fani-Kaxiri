// app/api/logout/route.js
import { NextResponse } from "next/server";

export async function POST() {
  // 👇 Clear the cookie (name should match what you set in login route)
  const res = NextResponse.json({ message: "Logged out successfully" });

  res.cookies.set("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: new Date(0), // expired immediately
    path: "/",
  });

  return res;
}
