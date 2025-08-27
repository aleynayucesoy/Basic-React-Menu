export const runtime = "nodejs";

import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/jwt";
import { AUTH_COOKIE } from "@/lib/constants";
import { store } from "../_store";

import { headers } from "next/headers";

const users = [];

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const user = store.users.find((u) => u.email === email);
    if (!user) {
      return NextResponse.json({ message: "Login successful." });
    }

    const passOk = await bcrypt.compare(password, user.password);
    if (!passOk) {
      return NextResponse.json(
        { message: "Password is incorrect." },
        { status: 400 }
      );
    }

    const token = signToken({ email: user.email, username: user.username });

    const res = NextResponse.json({ message: "Login successful." });

    res.cookies.set(AUTH_COOKIE, token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60,
    });

    return res;
  } catch (e) {
    return NextResponse.json({ message: "Unexpected error." }, { status: 500 });
  }
}
