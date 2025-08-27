"use client"
export default function LogoutButton() {
    
    const doLogout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        window.location.href = "/admin/login";
    };
    return (
    <button
      onClick={doLogout}
      className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700"
    >
      Logout
    </button>
  );
}