import { NextRequest, NextResponse } from "next/server";

const UPSTREAM = process.env.API_URL ?? "";

export async function POST(req: NextRequest) {
  if (!UPSTREAM) {
    return NextResponse.json(
      { message: "API_URL is not configured on the server." },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  try {
    const upstream = await fetch(`${UPSTREAM}/web/onboarding/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await upstream.json().catch(() => ({}));
    return NextResponse.json(data, { status: upstream.status });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Upstream request failed.";
    return NextResponse.json({ message }, { status: 502 });
  }
}
