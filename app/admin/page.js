import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_COOKIE } from "@/lib/constants";
import { verifyToken } from "@/lib/jwt";
import LogoutButton from "../components/LogoutButton";


export default function AdminDashboard() {
  const token = cookies().get(AUTH_COOKIE)?.value || null;
  const session = token ? verifyToken(token) : null;

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4 min-h-screen flex flex-col justify-center items-center">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </header>

        <div className="bg-white rounded-2xl shadow p-8 mb-6">
          <p className="text-gray-700">
            Welcome,{" "}
            <span className="font-semibold">
              {session.username || session.email}
            </span>
            !
          </p>
          <p className="text-gray-500 mt-2">
            This is the area that only residents can see.
          </p>
        </div>

        <LogoutButton />
      </div>
    </div>
  );
}
