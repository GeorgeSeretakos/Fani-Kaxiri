// app/api/logout/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  const res = NextResponse.redirect(
    new URL("/login", process.env.NEXT_PUBLIC_BASE_URL || req.url),
    { status: 303 } // <- force GET on redirect
  );

  res.cookies.set("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: new Date(0),
    path: "/",
  });

  return res;
}