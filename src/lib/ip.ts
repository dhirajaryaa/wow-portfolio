import { headers } from "next/headers";

export async function getClientIp(): Promise<string> {
    const headersList = await headers();

    const ip = headersList.get("x-forwarded-for")?.split(",")[0] || headersList.get("x-real-ip") || headersList.get("cf-connecting-ip") || headersList.get("x-client-ip");

    return ip || "127.0.0.1"; // fallback for development local server
}