import { NextRequest, NextResponse } from "next/server";
import { readFile, writeFile } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const INPUT_FILE = path.join(process.cwd(), "input.json");

// These handlers back the local content-feedback widget and write to a file in
// the working directory. They were reachable in production — including an
// unauthenticated DELETE that truncates the store. Vercel's filesystem is
// read-only so it failed rather than being exploitable, but a public delete
// handler shouldn't be deployed at all. The tool is local-only by design.
const notFound = () =>
  NextResponse.json({ error: "Not found" }, { status: 404 });
const isProd = process.env.NODE_ENV === "production";

export async function GET() {
  if (isProd) return notFound();
  try {
    if (!existsSync(INPUT_FILE)) {
      return NextResponse.json([]);
    }
    const data = await readFile(INPUT_FILE, "utf-8");
    return NextResponse.json(JSON.parse(data));
  } catch (e) {
    return NextResponse.json([]);
  }
}

export async function POST(request: NextRequest) {
  if (isProd) return notFound();
  try {
    const item = await request.json();

    let input: unknown[] = [];
    if (existsSync(INPUT_FILE)) {
      const data = await readFile(INPUT_FILE, "utf-8");
      input = JSON.parse(data);
    }

    input.push(item);

    await writeFile(INPUT_FILE, JSON.stringify(input, null, 2));

    return NextResponse.json({ success: true, count: input.length });
  } catch (e) {
    console.error("Failed to save input:", e);
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}

export async function DELETE() {
  if (isProd) return notFound();
  try {
    await writeFile(INPUT_FILE, "[]");
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: "Failed to clear" }, { status: 500 });
  }
}
