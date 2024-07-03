import { NextRequest, NextResponse } from "next/server";
export default function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/")
    return NextResponse.redirect(new URL("/home", request.url));
}
export const config = {
  matcher: ["/"],
};
