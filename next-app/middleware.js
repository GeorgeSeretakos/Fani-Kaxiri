import { NextResponse } from "next/server";

export function middleware(req) {
  console.log("✅ Middleware triggered for:", req.url);
  return NextResponse.redirect(new URL("/login", req.url));
}

export const config = {
  matcher: ["/admin/:path*"],
};
