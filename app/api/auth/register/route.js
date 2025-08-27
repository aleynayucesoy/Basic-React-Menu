export const runtime = "nodejs";

import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { store } from "../_store";

export async function POST(req) {
  try {
    const { email, password, username } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password required." },
        { status: 400 }
      );
    }

    const exists = store.users.find((u) => u.email === email);
    if (exists) {
      return NextResponse.json(
        { message: "This email is already registed." },
        { status: 400 }
      );
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = { email, username: username || "", password: hashed };
    store.users.push(user);

    return NextResponse.json(
      {
        message: "Registration successful.",
        user: { email, username: user.username },
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ message: "Unexpected error." }, { status: 500 });
  }
}
