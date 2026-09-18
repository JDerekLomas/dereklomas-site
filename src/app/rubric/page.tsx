"use client";

import { useEffect, useState } from "react";

// Open letter from IDE graduation supervisors on the MSc graduation rubric
// that became mandatory on 23 September 2026. Unlinked from navigation;
// colleagues get dereklomas.me/rubric. Signatures go to /api/rubric-sign.

type Signatory = { name: string; department: string; role: string };

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

async function fetchSignatures(): Promise<{ total: number; names: Signatory[] } | null> {
  try {
    const res = await fetch("/api/rubric-sign", { cache: "no-store" });
    const data = await res.json();
    return { total: data.total ?? 0, names: data.names ?? [] };
  } catch {
    return null;
  }
}

export default function RubricLetter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("HCD");
  const [role, setRole] = useState("Assistant professor");
  const [comment, setComment] = useState("");
  const [showName, setShowName] = useState(true);
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");
  const [total, setTotal] = useState<number | null>(null);
  const [names, setNames] = useState<Signatory[]>([]);

  function load() {
    fetchSignatures().then((data) => {
      if (!data) return; // counter is decorative; the letter still reads
      setTotal(data.total);
      setNames(data.names);
    });
  }

  useEffect(load, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || status === "sending") return;
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/rubric-sign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          department,
          role,
          comment,
          showName,
          website,
        }),
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
        <p
          className="text-sm uppercase tracking-widest"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter)" }}
        >
          Open letter · September 2026
        </p>
        <h1
          className="mt-3 text-4xl leading-tight sm:text-5xl"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}
        >
          On the new IDE MSc graduation rubric
        </h1>
        <p
          className="mt-4 text-lg"
          style={{ color: "var(--text-secondary)", fontStyle: "italic" }}
        >
          To the IDE Board of Education and the Board of Examiners, from
          graduation supervisors at the Faculty of Industrial Design
          Engineering, TU Delft.
        </p>

        <div
          className="mt-10 space-y-5 text-[1.08rem] leading-relaxed"
          style={{ color: "var(--text-primary)" }}
        >
          <p>
            On 18 September 2026 we were informed that a new rubric applies to
            every MSc graduation project starting on or after 23 September,
            five days later. The mandatory supervisor sessions that introduce
            it follow in October and November. We supervise these projects,
            and we ask the Boards to reconsider both the timing and the
            substance of this change.
          </p>
          <p>
            The rubric now in force is not the &ldquo;final concept&rdquo; that
            was circulated for feedback on 28 January 2026. The scale, the
            themes and the treatment of desirability, feasibility and
            viability have all changed since then, and the revised version was
            not shown again to the colleagues who gave feedback. In January,
            supervisors asked what educational problem the redesign was meant
            to solve. That question has not been answered.
          </p>
          <p>
            We compared the 2018 rubric with the Final Attainment Levels in the
            2025&ndash;26 Teaching and Examination Regulations. Alignment
            genuinely required three additions: prototyping and iteration,
            reflection, and the societal role of design. It did not require
            replacing the assessment model, hiding the points from assessors,
            computing the grade, or removing the criteria that supervisors had
            internalised over eight years.
          </p>
        </div>

        <h2
          className="mt-12 text-2xl"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
        >
          What we ask
        </h2>
        <ol
          className="mt-4 list-decimal space-y-4 pl-6 text-[1.08rem] leading-relaxed"
          style={{ color: "var(--text-primary)" }}
        >
          <li>
            <strong>Publish the full rubric now.</strong> All nineteen
            criterion descriptors, the points-to-grade conversion table, and a
            change log against the 28 January concept.
          </li>
          <li>
            <strong>Do not make it mandatory before supervisors are trained.</strong>{" "}
            Let projects starting this semester use either rubric, by
            agreement of the supervisory team, and treat the semester as a
            pilot with a documented evaluation.
          </li>
          <li>
            <strong>Restore explicit criteria for desirability, feasibility and
            viability, and for form and aesthetics.</strong> These are the
            criteria that distinguish a design faculty&rsquo;s assessment. The
            revised attainment levels do not require their removal; the SPD
            attainment levels still name viability and feasibility.
          </li>
          <li>
            <strong>Keep the supervisory team&rsquo;s judgement primary.</strong>{" "}
            Hidden points, a computed grade and a requirement to justify any
            deviation in writing move the burden of proof onto experienced
            assessors. A rubric should support judgement, not replace it.
          </li>
          <li>
            <strong>Document the rationale.</strong> State what problem the new
            model solves, what evidence supports it, and what the
            &ldquo;broader reform of the graduation structure&rdquo; announced
            alongside it will involve, before further changes are made.
          </li>
        </ol>

        <p
          className="mt-8 text-[1.08rem] leading-relaxed"
          style={{ color: "var(--text-primary)" }}
        >
          We raise this because the workload is real (two rubrics in parallel,
          an external tool, independent double assessment with written
          reconciliation) and because the quality of graduation assessment
          depends on the shared understanding of the people who do it. That
          understanding is built through consultation, not announced by email.
        </p>

        {/* Signatures */}
        <section
          className="mt-14 rounded-lg border p-6 sm:p-8"
          style={{
            borderColor: "var(--border-medium)",
            background: "var(--bg-warm)",
          }}
        >
          <h2
            className="text-2xl"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
          >
            Add your name
          </h2>
          <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            For TU Delft staff and students. Your email address is used only to
            verify that each signature is real and is never shown. The list of
            signatories will be sent to the Board of Education, the Board of
            Examiners and the Faculty Student Council.
          </p>

          {status === "done" ? (
            <p className="mt-6 text-lg" style={{ color: "var(--accent-rust)" }}>
              Thank you, {name.trim()}. Your signature has been recorded.
            </p>
          ) : (
            <form onSubmit={submit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span style={labelStyle}>Name</span>
                  <input
                    style={inputStyle}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={120}
                    required
                    autoComplete="name"
                  />
                </label>
                <label className="block text-sm">
                  <span style={labelStyle}>TU Delft email</span>
                  <input
                    style={inputStyle}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    maxLength={200}
                    required
                    placeholder="initials.name@tudelft.nl"
                    autoComplete="email"
                  />
                </label>
                <label className="block text-sm">
                  <span style={labelStyle}>Department</span>
                  <select
                    style={inputStyle}
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  >
                    {DEPARTMENTS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block text-sm">
                  <span style={labelStyle}>Role</span>
                  <select
                    style={inputStyle}
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    {ROLES.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="block text-sm">
                <span style={labelStyle}>Comment (optional, shared with the Boards)</span>
                <textarea
                  style={{ ...inputStyle, minHeight: 80, resize: "vertical" }}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  maxLength={1000}
                />
              </label>
              {/* Honeypot: hidden from people, filled by bots */}
              <input
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                style={{ position: "absolute", left: -9999, opacity: 0 }}
                aria-hidden="true"
              />
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={showName}
                  onChange={(e) => setShowName(e.target.checked)}
                />
                <span style={{ color: "var(--text-secondary)" }}>
                  Show my name on this page
                </span>
              </label>
              <button
                className="rounded px-5 py-2.5 text-sm font-medium text-white disabled:opacity-60"
                style={{
                  background: "var(--accent-rust)",
                  fontFamily: "var(--font-inter)",
                }}
                disabled={status === "sending"}
              >
                {status === "sending" ? "Signing…" : "Sign the letter"}
              </button>
              {status === "error" && (
                <p className="text-sm" style={{ color: "var(--accent-rust)" }}>
                  {errorMsg}. Please try again.
                </p>
              )}
            </form>
          )}
        </section>

        <section className="mt-12">
          <h2
            className="text-2xl"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
          >
            Signatories
            {total !== null && (
              <span
                className="ml-3 text-base"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter)" }}
              >
                {total}
              </span>
            )}
          </h2>
          {names.length === 0 ? (
            <p className="mt-3 text-sm" style={{ color: "var(--text-muted)" }}>
              {total ? "Signatories have chosen not to list their names." : "Be the first to sign."}
            </p>
          ) : (
            <ul className="mt-4 grid gap-x-8 gap-y-1 sm:grid-cols-2">
              {names.map((s, i) => (
                <li key={i} className="text-[1.02rem]">
                  {s.name}
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                    {" "}
                    · {s.role}, {s.department}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <p
          className="mt-16 text-sm"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter)" }}
        >
          Initiated by Derek Lomas, Assistant Professor, HCD. Sources: the
          supervisor briefing of 18 September 2026, the rubric concept of 28
          January 2026, the 2018 rubric (ID4x95), and Appendix 2 of the IDE
          MSc Teaching and Examination Regulations 2023&ndash;24 and
          2025&ndash;26. Questions:{" "}
          <a href="mailto:j.d.lomas@tudelft.nl" className="underline">
            j.d.lomas@tudelft.nl
          </a>
          .
        </p>
      </main>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: 4,
  color: "var(--text-secondary)",
  fontFamily: "var(--font-inter)",
};

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
