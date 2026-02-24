import { scalekit } from "@/lib/scalekit";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
    const redirectUri=`https://aisupport-zeta.vercel.app/api/auth/callback`
    const url=scalekit.getAuthorizationUrl(redirectUri)
    console.log(url)
    return NextResponse.redirect(url)

}
