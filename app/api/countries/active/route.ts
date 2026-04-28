import { NextResponse } from "next/server";

const UPSTREAM = process.env.API_URL ?? "";

export async function GET() {
  if (!UPSTREAM) {
    return NextResponse.json(
      { message: "API_URL is not configured on the server." },
      { status: 500 }
    );
  }

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
