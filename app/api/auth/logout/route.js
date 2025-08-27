import { NextResponse } from "next/server";
import { AUTH_COOKIE } from "@/lib/constants";

export async function POST() {
  const res = NextResponse.json({ message: "Exit made." });
  res.cookies.set(AUTH_COOKIE, "", { path: "/", maxAge: 0 });
  return res;
}
