"use client";

import { useEffect, useState } from "react";
import { CONCERNS } from "./concerns";

// Explainer for the IDE MSc graduation rubric that applies to projects
// starting 23 September 2026, with a form where colleagues can register a
// response (including support). Unlinked from navigation; colleagues get
// dereklomas.me/rubric. Responses go to /api/rubric-sign.

type Signatory = { name: string; department: string; role: string };
type Tally = Record<string, number>;

const DEPARTMENTS = ["HCD", "DOS", "SDE", "ESA", "Other"];
const ROLES = ["Professor", "Associate professor", "Assistant professor", "Lecturer", "PhD candidate", "Postdoc", "Support staff", "Student", "Other"];

async function fetchResponses(): Promise<{ total: number; names: Signatory[]; tally: Tally } | null> {
  try {
    const res = await fetch("/api/rubric-sign", { cache: "no-store" });
    const data = await res.json();
    return { total: data.total ?? 0, names: data.names ?? [], tally: data.tally ?? {} };
  } catch {
    return null;
  }
}

export default function RubricExplainer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("HCD");
  const [role, setRole] = useState("Assistant professor");
  const [concerns, setConcerns] = useState<string[]>([]);
  const [comment, setComment] = useState("");
  const [showName, setShowName] = useState(true);
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [total, setTotal] = useState<number | null>(null);
  const [names, setNames] = useState<Signatory[]>([]);
  const [tally, setTally] = useState<Tally>({});

  function load() {
    fetchResponses().then((data) => {
      if (!data) return; // counters are decorative; the explainer still reads
      setTotal(data.total);
      setNames(data.names);
      setTally(data.tally);
    });
  }

  useEffect(load, []);

  function toggle(key: string) {
    setConcerns((c) => (c.includes(key) ? c.filter((k) => k !== key) : [...c, key]));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || status === "sending") return;
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/rubric-sign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, department, role, concerns, comment, showName, website }),
      });
      if (res.ok) {
        setStatus("done");
        load();
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error ?? "Something went wrong");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Something went wrong");
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-cream)" }}>
      <main className="mx-auto max-w-2xl px-4 py-16 sm:py-24">
        <p className="text-sm uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter)" }}>
          For IDE graduation supervisors · 18 September 2026
        </p>
        <h1 className="mt-3 text-4xl leading-tight sm:text-5xl" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}>
          The new graduation rubric, explained
        </h1>

        <Prose>
          <p>
            From <strong>23 September 2026</strong>, MSc graduation projects that start are assessed with a new
            rubric. Projects already running keep the 2018 one; MyCase shows which applies. Supervisor sessions
            follow in October and November. The five-page briefing is all supervisors have received; the full
            rubric is in the Teachers&rsquo; Manual and a MyCase tool.
          </p>
          <p>
            Any change to how we grade feels wrong at first because we know the old form. This page is meant to
            make the change clear enough that your response, for or against, is about the substance.
          </p>
        </Prose>

        <H2>What changes</H2>
        <div className="mt-5 space-y-3">
          {COMPARISON.map((row) => (
            <div key={row.aspect} className="rounded-lg border p-4" style={{ borderColor: "var(--border-light)", background: "var(--bg-white)" }}>
              <div className="font-medium" style={{ fontFamily: "var(--font-inter)", fontSize: 14 }}>{row.aspect}</div>
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                <div><Tag>2018</Tag><p className="mt-0.5 text-[0.97rem] leading-relaxed">{row.old}</p></div>
                <div><Tag accent>New</Tag><p className="mt-0.5 text-[0.97rem] leading-relaxed">{row.new}</p></div>
              </div>
            </div>
          ))}
        </div>

        <H2>How the grade is made</H2>
        <Prose>
          <p>
            For each of eight learning objectives you pick one of four levels and write a comment. The levels are
            worth 2, 4, 7 and 11 points, hidden on the form. A published formula turns the total (16 to 88) into a
            grade: level two everywhere is 32 points, a 6.0, and the pass mark. Each supervisor does this alone,
            the two then reconcile, and the team writes a final assessment. The computed grade is a
            recommendation; deviating from it must be substantiated on the form.
          </p>
        </Prose>

        <H2>Was the redesign required?</H2>
        <Prose>
          <p>
            Partly. The 2024 programme revision brought new final attainment levels, and the 2018 rubric had no
            criterion for prototyping and iteration, reflection, or the societal role of design. The new rubric
            adds those three. The rest, the four-level scale, hidden points, a computed grade, double
            independent assessment, and dropping desirability, feasibility and viability as named criteria, are
            the team&rsquo;s design choices. Nothing in the attainment levels required them, and nothing forbids
            keeping the old criteria.
          </p>
        </Prose>

        <H2>Time</H2>
        <Prose>
          <p>
            My estimate for the assessment step, per supervisor per project: about one hour under the 2018
            rubric, two to two and a half under the new one. The extra time is scoring and writing comments
            alone before the discussion, then reconciling two forms. Six graduations a year means six to nine
            extra hours. What it buys is a written, independent substantiation per objective, which the old form
            never asked for.
          </p>
        </Prose>

        <H2>Still unknown</H2>
        <ul className="mt-3 space-y-1.5 pl-5 text-[1.02rem] leading-relaxed" style={{ listStyle: "disc" }}>
          <li>The text of the nineteen descriptors, and whether desirability, feasibility, viability or aesthetics appear in them.</li>
          <li>The points-to-grade table (the briefing refers to an appendix that was not attached).</li>
          <li>What changed since the concept reviewed in January and February, and why.</li>
          <li>What the &ldquo;broader reform of the graduation structure&rdquo; announced alongside it will involve.</li>
        </ul>

        {/* Response form */}
        <section className="mt-14 rounded-lg border p-6 sm:p-8" style={{ borderColor: "var(--border-medium)", background: "var(--bg-warm)" }}>
          <h2 className="text-2xl" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>Your response</h2>
          <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            Tick what applies. Responses and comments go to the Board of Education and the Board of Examiners in
            early October. Your email keeps it to one response per person and is never shown.
          </p>

          {status === "done" ? (
            <p className="mt-6 text-lg" style={{ color: "var(--accent-rust)" }}>Thank you, {name.trim()}. Recorded.</p>
          ) : (
            <form onSubmit={submit} className="mt-6 space-y-5">
              <fieldset className="space-y-2">
                {CONCERNS.map((c) => (
                  <label key={c.key} className="flex items-start gap-2 text-[0.98rem]">
                    <input type="checkbox" className="mt-1.5" checked={concerns.includes(c.key)} onChange={() => toggle(c.key)} />
                    <span>{c.label}</span>
                  </label>
                ))}
              </fieldset>
              <label className="block text-sm">
                <span style={labelStyle}>Comment (optional)</span>
                <textarea style={{ ...inputStyle, minHeight: 70, resize: "vertical" }} value={comment} onChange={(e) => setComment(e.target.value)} maxLength={1000} />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span style={labelStyle}>Name</span>
                  <input style={inputStyle} value={name} onChange={(e) => setName(e.target.value)} maxLength={120} required autoComplete="name" />
                </label>
                <label className="block text-sm">
                  <span style={labelStyle}>TU Delft email</span>
                  <input style={inputStyle} type="email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={200} required placeholder="initials.name@tudelft.nl" autoComplete="email" />
                </label>
                <label className="block text-sm">
                  <span style={labelStyle}>Department</span>
                  <select style={inputStyle} value={department} onChange={(e) => setDepartment(e.target.value)}>
                    {DEPARTMENTS.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                </label>
                <label className="block text-sm">
                  <span style={labelStyle}>Role</span>
                  <select style={inputStyle} value={role} onChange={(e) => setRole(e.target.value)}>
                    {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                </label>
              </div>
              {/* Honeypot: hidden from people, filled by bots */}
              <input tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} style={{ position: "absolute", left: -9999, opacity: 0 }} aria-hidden="true" />
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={showName} onChange={(e) => setShowName(e.target.checked)} />
                <span style={{ color: "var(--text-secondary)" }}>List my name below</span>
              </label>
              <button className="rounded px-5 py-2.5 text-sm font-medium text-white disabled:opacity-60" style={{ background: "var(--accent-rust)", fontFamily: "var(--font-inter)" }} disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send"}
              </button>
              {status === "error" && <p className="text-sm" style={{ color: "var(--accent-rust)" }}>{errorMsg}. Please try again.</p>}
            </form>
          )}
        </section>

        <section className="mt-12">
          <h2 className="text-2xl" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
            Responses
            {total !== null && <span className="ml-3 text-base" style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter)" }}>{total}</span>}
          </h2>
          {total ? (
            <ul className="mt-4 space-y-1.5">
              {CONCERNS.map((c) => (
                <li key={c.key} className="flex items-baseline gap-3 text-[0.95rem]">
                  <span className="w-8 shrink-0 text-right tabular-nums" style={{ fontFamily: "var(--font-inter)", color: "var(--accent-rust)" }}>{tally[c.key] ?? 0}</span>
                  <span style={{ color: "var(--text-secondary)" }}>{c.label}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm" style={{ color: "var(--text-muted)" }}>None yet.</p>
          )}
          {names.length > 0 && (
            <ul className="mt-6 grid gap-x-8 gap-y-1 sm:grid-cols-2">
              {names.map((s, i) => (
                <li key={i} className="text-[1.0rem]">
                  {s.name}<span className="text-sm" style={{ color: "var(--text-muted)" }}> · {s.role}, {s.department}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <p className="mt-16 text-sm leading-relaxed" style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter)" }}>
          Compiled by Derek Lomas (HCD) from the briefing of 18 September 2026, the January concept, the 2018
          rubric and the IDE MSc Teaching and Examination Regulations. Corrections:{" "}
          <a href="mailto:j.d.lomas@tudelft.nl" className="underline">j.d.lomas@tudelft.nl</a>.
        </p>
      </main>
    </div>
  );
}

const COMPARISON = [
  {
    aspect: "Criteria",
    old: "Five competencies, twelve sub-criteria, plus a time-spent row.",
    new: "Eight learning objectives with nineteen descriptors; one level per objective.",
  },
  {
    aspect: "Project result",
    old: "Feasibility, desirability and viability are named rows.",
    new: "\"Possible, sustainable and just\", the new programme's wording. Whether the older terms survive in the descriptors is not stated.",
  },
  {
    aspect: "Added",
    old: "Nothing on prototyping and iteration, reflection, or the societal role of design.",
    new: "All three are explicit objectives.",
  },
  {
    aspect: "Scale",
    old: "Seven grade columns, grade visible while judging.",
    new: "Four levels; points hidden so descriptors are judged first, grade derived after.",
  },
  {
    aspect: "Grade",
    old: "Set by the team. \"Not necessarily the mean of the parts\"; no rule.",
    new: "Computed by a published formula, equal weights. Team may deviate with written justification.",
  },
  {
    aspect: "Process",
    old: "One joint form.",
    new: "Each supervisor scores independently, then reconcile, then a final form; PDF uploaded to MyCase.",
  },
  {
    aspect: "Delay",
    old: "Hard cap of 8.5 after a late Green Light or eight weeks over.",
    new: "No cap; delay is part of the planning descriptors.",
  },
];

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-11 text-2xl" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>{children}</h2>;
}

function Prose({ children }: { children: React.ReactNode }) {
  return <div className="mt-3 space-y-4 text-[1.05rem] leading-relaxed" style={{ color: "var(--text-primary)" }}>{children}</div>;
}

function Tag({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span className="text-xs uppercase tracking-wider" style={{ fontFamily: "var(--font-inter)", color: accent ? "var(--accent-rust)" : "var(--text-muted)" }}>
      {children}
    </span>
  );
}

const labelStyle: React.CSSProperties = { display: "block", marginBottom: 4, color: "var(--text-secondary)", fontFamily: "var(--font-inter)" };

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "9px 11px",
  border: "1px solid var(--border-medium)",
  borderRadius: 6,
  background: "var(--bg-white)",
  color: "var(--text-primary)",
  fontFamily: "var(--font-inter)",
  fontSize: 15,
};
