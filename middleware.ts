import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Safe by default:
// - DEMO_MODE not "false" -> design preview, pages are open.
// - DEMO_MODE="false"     -> /dashboard and /admin are locked for everyone
//   until real login (Supabase) is added in the backend phase.
// A cookie check alone is NOT real security. Real checks must also run on the server
// for every action (credits, downloads, admin tools).
export function middleware(req: NextRequest) {
  if (process.env.DEMO_MODE !== "false") {
    return NextResponse.next();
  }
  const url = req.nextUrl.clone();
  url.pathname = "/login";
  url.search = "";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};
