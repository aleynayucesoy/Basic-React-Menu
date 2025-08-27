"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const router = useRouter();
    const [form, setForm] = useState({ email: "", password: "" });
    const [msg, setMsg] = useState("");

    const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

    const onSubmit = async (e) => {
        e.preventDefault();
        setMsg("");

        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form),
        });

        const data = await res.json();
        if(res.ok) {
            router.push("/admin")
        } else {
            setMsg(data.message || "Login failed.")
        }
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Login</h2>
        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              onChange={onChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
            <input
              name="password"
              type="password"
              placeholder="********"
              onChange={onChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition">
            Login
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4 text-center">
          Do you have an account?{" "}
          <a href="/admin/register" className="text-blue-500 hover:underline">Register</a>
        </p>

        {msg && <p className="text-center mt-4 text-sm">{msg}</p>}
      </div>
    </div>
  );
}