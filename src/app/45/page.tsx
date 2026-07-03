"use client";

import { useState } from "react";

// RSVP page for Derek's 45th birthday (July 10, 2026).
// Deliberately unlinked from site navigation — guests get dereklomas.me/45.

export default function Rsvp45() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState("yes");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/rsvp45", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, attending, note }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div style={styles.page}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&family=IM+Fell+English+SC&family=Zeyada&display=swap');`}</style>
      <main style={styles.sheet}>
        <div style={styles.name}>Derek&rsquo;s</div>
        <div style={styles.word}>Birthday Party</div>
        <div style={styles.num}>45</div>
        <div style={styles.details}>
          Friday, July 10 &mdash; from 9:30 PM till 4:50 AM
          <br />
          dancing &middot; sauna &amp; jacuzzi &middot; shoeless
          <br />
          the address will follow personally
        </div>

        {status === "done" ? (
          <div style={styles.thanks}>
            {attending === "yes" ? (
              <>
                You are inscribed in the book of guests,{" "}
                <em>{name.trim()}</em>.
                <br />
                The address will find you. Let&rsquo;s celebrate Life together!
              </>
            ) : (
              <>
                Noted with sorrow, <em>{name.trim()}</em> &mdash; you will be
                toasted in absentia.
              </>
            )}
          </div>
        ) : (
          <form onSubmit={submit} style={styles.form}>
            <label style={styles.label}>
              Thy name
              <input
                style={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={120}
                required
              />
            </label>
            <label style={styles.label}>
              Wilt thou come?
              <select
                style={styles.input}
                value={attending}
                onChange={(e) => setAttending(e.target.value)}
              >
                <option value="yes">Yes — joyfully</option>
                <option value="no">Alas, no</option>
              </select>
            </label>
            <label style={styles.label}>
              A note, if thou wishest
              <textarea
                style={{ ...styles.input, height: 70, resize: "vertical" }}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                maxLength={500}
              />
            </label>
            <button style={styles.button} disabled={status === "sending"}>
              {status === "sending" ? "Inscribing…" : "Seal thy answer"}
            </button>
            {status === "error" && (
              <div style={styles.error}>
                The ink spilled — please try once more.
              </div>
            )}
          </form>
        )}
        <div style={styles.marginalia}>bring thy towel!</div>
      </main>
    </div>
  );
}

const ink = "#3b2b18";

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#e9dfc8",
    display: "flex",
    justifyContent: "center",
    padding: "40px 16px",
    fontFamily: "'IM Fell English', serif",
    color: ink,
  },
  sheet: {
    position: "relative",
    background: "#f4ecd8",
    maxWidth: 460,
    width: "100%",
    padding: "48px 36px 56px",
    boxShadow: "0 2px 24px rgba(60,40,10,0.25)",
    textAlign: "center",
  },
  name: {
    fontFamily: "'IM Fell English SC', serif",
    fontSize: 44,
    letterSpacing: 3,
  },
  word: {
    fontFamily: "'IM Fell English SC', serif",
    fontSize: 24,
    letterSpacing: 6,
    paddingLeft: 6,
    marginBottom: 6,
  },
  num: { fontSize: 54, lineHeight: 1.1 },
  details: { fontSize: 17, lineHeight: 1.5, margin: "18px 0 26px" },
  form: { display: "flex", flexDirection: "column", gap: 14, textAlign: "left" },
  label: { fontSize: 17, display: "flex", flexDirection: "column", gap: 4 },
  input: {
    fontFamily: "'IM Fell English', serif",
    fontSize: 17,
    padding: "8px 10px",
    border: `1px solid ${ink}`,
    borderRadius: 2,
    background: "#fbf6e9",
    color: ink,
  },
  button: {
    fontFamily: "'IM Fell English SC', serif",
    fontSize: 20,
    letterSpacing: 2,
    padding: "10px 12px",
    marginTop: 6,
    border: `1.5px solid ${ink}`,
    borderRadius: 2,
    background: "#e7d9b8",
    color: ink,
    cursor: "pointer",
  },
  thanks: { fontSize: 20, lineHeight: 1.5, marginTop: 10 },
  error: { color: "#8a2c1d", fontSize: 16 },
  marginalia: {
    position: "absolute",
    bottom: 10,
    right: 18,
    fontFamily: "'Zeyada', cursive",
    fontSize: 24,
    color: "#6b4a2f",
    transform: "rotate(-4deg)",
  },
};
