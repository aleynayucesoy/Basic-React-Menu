import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { AUTH_COOKIE } from "@/lib/constants"
import { verifyToken } from "@/lib/jwt"
import ProductManager from "./ProductManager"

export const dynamic = "force-dynamic" //dev'de cache aksiliklerini azaltır

export default function ProductPage() {
    const token = cookies().get(AUTH_COOKIE)?.value || null
    const session = token ? verifyToken(token) : null


    if(!session) {
        redirect("/admin/login")
    }

    return(
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-5xl mx-auto py-10 px-4">
                <h1 className="text-3xl font-bold mb-6">Product Manager</h1>
                <ProductManager />
            </div>
        </div>
    )
}