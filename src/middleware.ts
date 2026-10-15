import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

// Protège les routes du dashboard ; redirige vers /login si non authentifié.
export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isProtected =
    req.nextUrl.pathname.startsWith("/dashboard") ||
    req.nextUrl.pathname.startsWith("/contacts") ||
    req.nextUrl.pathname.startsWith("/companies") ||
    req.nextUrl.pathname.startsWith("/deals") ||
    req.nextUrl.pathname.startsWith("/settings");

  if (isProtected && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
