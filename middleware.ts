import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (token && (path === "/signin" || path === "/signup")) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  if (!token && path === "/profile") {
    return NextResponse.redirect(new URL("/signin", req.nextUrl));
  }
}

export const config = {
  matcher: [
    "/signin",
    "/signup",
    "/profile",
    "/settings",
    "/create-entry",
    "/my-entries",
  ],
};
