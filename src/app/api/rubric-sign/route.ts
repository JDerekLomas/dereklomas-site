import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

// Signatures for the open letter at /rubric. Documents live in the
// `ide_rubric_signatures` collection of the default database on MONGODB_URI.
// One signature per email address (re-signing updates the earlier one).
//
// GET            -> count + public names (only signatories who opted in)
// GET ?key=...   -> full export including emails (RUBRIC_KEY, falls back to RSVP45_KEY)

let client: MongoClient | null = null;

async function getCollection() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI not set");
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }
  return client.db().collection("ide_rubric_signatures");
}

const DEPARTMENTS = ["HCD", "DOS", "SDE", "ESA", "Other"];
const ROLES = [
  "Professor",
  "Associate professor",
  "Assistant professor",
  "Lecturer",
  "PhD candidate",
  "Postdoc",
  "Support staff",
  "Student",
  "Other",
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Honeypot: real users never fill this field.
    if (String(body.website ?? "").trim()) {
      return NextResponse.json({ success: true });
    }
    const name = String(body.name ?? "").trim().slice(0, 120);
    const email = String(body.email ?? "").trim().toLowerCase().slice(0, 200);
    const department = DEPARTMENTS.includes(body.department) ? body.department : "Other";
    const role = ROLES.includes(body.role) ? body.role : "Other";
    const comment = String(body.comment ?? "").trim().slice(0, 1000);
    const showName = body.showName !== false;
    if (!name) {
      return NextResponse.json({ error: "Name required" }, { status: 400 });
    }
    if (!/^[^@\s]+@(?:[a-z0-9-]+\.)*tudelft\.nl$/.test(email)) {
      return NextResponse.json(
        { error: "Please use your TU Delft email address" },
        { status: 400 }
      );
    }
    const col = await getCollection();
    await col.updateOne(
      { email },
      {
        $set: { name, department, role, comment, showName, updatedAt: new Date() },
        $setOnInsert: { createdAt: new Date() },
      },
      { upsert: true }
    );
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("rubric-sign POST failed:", e);
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const col = await getCollection();
    const key = request.nextUrl.searchParams.get("key");
    const secret = process.env.RUBRIC_KEY || process.env.RSVP45_KEY;
    if (key) {
      if (!secret || key !== secret) {
        return NextResponse.json({ error: "Not authorized" }, { status: 401 });
      }
      const all = await col
        .find({}, { projection: { _id: 0 } })
        .sort({ createdAt: 1 })
        .toArray();
      return NextResponse.json({ total: all.length, signatures: all });
    }
    const total = await col.countDocuments();
    const names = await col
      .find(
        { showName: true },
        { projection: { _id: 0, name: 1, department: 1, role: 1 } }
      )
      .sort({ createdAt: 1 })
      .toArray();
    return NextResponse.json({ total, names });
  } catch (e) {
    console.error("rubric-sign GET failed:", e);
    return NextResponse.json({ total: 0, names: [] });
  }
}
