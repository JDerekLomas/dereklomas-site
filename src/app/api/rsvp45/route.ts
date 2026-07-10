import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

// Birthday party RSVP endpoint (see /45). Stores documents in the
// `derek45_rsvp` collection of the default database on MONGODB_URI.

let client: MongoClient | null = null;

async function getCollection() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI not set");
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }
  return client.db().collection("derek45_rsvp");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim().slice(0, 120);
    const email = String(body.email ?? "").trim().slice(0, 200);
    const attending = body.attending === "yes" ? "yes" : "no";
    const note = String(body.note ?? "").trim().slice(0, 500);
    if (!name) {
      return NextResponse.json({ error: "Name required" }, { status: 400 });
    }
    const col = await getCollection();
    await col.insertOne({ name, email, attending, note, createdAt: new Date() });
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("rsvp45 POST failed:", e);
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const key = request.nextUrl.searchParams.get("key");
  if (!process.env.RSVP45_KEY || key !== process.env.RSVP45_KEY) {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 });
  }
  const col = await getCollection();
  const guests = await col
    .find({}, { projection: { _id: 0 } })
    .sort({ createdAt: 1 })
    .toArray();
  const coming = guests.filter((g) => g.attending === "yes").length;
  return NextResponse.json({ total: guests.length, coming, guests });
}
