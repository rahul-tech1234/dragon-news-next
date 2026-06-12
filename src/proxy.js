import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
    //console.log("request", request);
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    //const se = true;
    if (session) {
        return NextResponse.next();
    }
    if (!session) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    console.log("session", session);
}
export const config = {
    matcher: [
        "/carrer",
        "/about",
        "/news/:path*",
    ],
};
