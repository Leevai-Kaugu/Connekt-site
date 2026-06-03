import { NextResponse } from "next/server";

const UPSTREAM = process.env.API_URL ?? "https://sandbox.connektsaas.com/v1";

export async function GET() {
  try {
    const upstream = await fetch(`${UPSTREAM}/web/countries/active`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      // revalidate every 10 minutes — country list changes rarely
      next: { revalidate: 600 },
    });

    const data = await upstream.json().catch(() => []);
    return NextResponse.json(data, { status: upstream.status });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Upstream request failed.";
    return NextResponse.json({ message }, { status: 502 });
  }
}
