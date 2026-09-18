"use client";

import { useEffect, useState } from "react";
import { CONCERNS } from "./concerns";

// Explainer for the IDE MSc graduation rubric that applies to projects
// starting 23 September 2026, with a form where colleagues can register a
// considered response (including support). Unlinked from navigation;
// colleagues get dereklomas.me/rubric. Responses go to /api/rubric-sign.

type Signatory = { name: string; department: string; role: string };
type Tally = Record<string, number>;

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
      <main className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
        <p className="text-sm uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter)" }}>
          Explainer · 18 September 2026
        </p>
        <h1 className="mt-3 text-4xl leading-tight sm:text-5xl" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}>
          What changes in the IDE MSc graduation rubric
        </h1>
        <p className="mt-4 text-lg" style={{ color: "var(--text-secondary)", fontStyle: "italic" }}>
          A plain-language summary for supervisors, compiled from the Board of Education&rsquo;s briefing of 18
          September, the concept circulated in January, the 2018 rubric, and the Teaching and Examination
          Regulations. Read it, then say what you think.
        </p>

        <Prose>
          <p>
            On 18 September the IDE Board of Education announced that a new graduation rubric applies to every
            MSc graduation project that starts on or after <strong>23 September 2026</strong>. Projects that
            started earlier keep the 2018 rubric; MyCase shows which one applies by course code (IDEM1001,
            IDEM2001 and IDEM3001 use the new one). Mandatory supervisor sessions follow in October and
            November. The five-page briefing is the only document supervisors have received so far; the full
            rubric lives in the Teachers&rsquo; Manual and in an interactive tool linked from MyCase.
          </p>
          <p>
            Any change to how we grade is unwelcome at first, simply because we know the old instrument. That
            is not a reason to object, and it is not a reason to accept. The purpose of this page is to make
            the change legible enough that your response, whatever it is, is about the substance.
          </p>
        </Prose>

        <H2>Why the team says it was needed</H2>
        <Prose>
          <p>
            The MSc programmes were revised in September 2024 with new Final Attainment Levels (FALs), the
            eleven statements of what an IDE graduate can do that are written into the Teaching and
            Examination Regulations. The 2018 rubric predates them. The briefing gives two further reasons:
            lessons from previous graduation assessments, and weaknesses in the 2018 form itself, namely
            seven grade columns with only five distinct descriptors, an aggregation rule that was never
            written down, weighting that was never declared, and grades visible in the column headers while
            judging. The briefing also says the rubric is a first step in a &ldquo;broader reform of the
            graduation structure&rdquo;, which it describes as no longer sustainable. That reform has not been
            described further.
          </p>
        </Prose>

        <H2>Old and new, side by side</H2>
        <div className="mt-6 space-y-3">
          {COMPARISON.map((row) => (
            <div key={row.aspect} className="rounded-lg border p-4 sm:grid sm:grid-cols-[9rem_1fr_1fr] sm:gap-4" style={{ borderColor: "var(--border-light)", background: "var(--bg-white)" }}>
              <div className="font-medium" style={{ fontFamily: "var(--font-inter)", fontSize: 14 }}>{row.aspect}</div>
              <div className="mt-2 sm:mt-0">
                <Tag>2018 rubric</Tag>
                <p className="mt-1 text-[0.98rem] leading-relaxed">{row.old}</p>
              </div>
              <div className="mt-3 sm:mt-0">
                <Tag accent>New rubric</Tag>
                <p className="mt-1 text-[0.98rem] leading-relaxed">{row.new}</p>
              </div>
            </div>
          ))}
        </div>

        <H2>How a grade is now produced</H2>
        <Prose>
          <p>
            For each of the eight learning objectives you read the criterion descriptors (nineteen in total),
            pick one of four performance levels, and write a comment substantiating it. The form does not show
            points. Behind it, the four levels are worth 2, 4, 7 and 11 points, so a project scores between 16
            and 88. A published piecewise-linear formula converts points to a grade: 32 points (level two on
            every objective) is a 5.8, rounded to 6.0, and is the pass threshold; 31 points is a 5.5 and fails;
            88 is a 10. The curve is flat through the failing range and steep across the passing range, so most
            of the grade discrimination happens between levels two, three and four.
          </p>
          <p>
            Both supervisors fill in the rubric independently, then discuss, then complete a final assessment
            with written feedback. The calculated grade is a recommendation. The supervisory team keeps the
            final responsibility and may deviate, but the deviation must be substantiated on the form.
          </p>
        </Prose>

        <H2>The eight learning objectives</H2>
        <ol className="mt-4 space-y-2 pl-6 text-[1.02rem] leading-relaxed" style={{ listStyle: "decimal" }}>
          {LOS.map((lo) => (
            <li key={lo.n}>
              <span style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter)", fontSize: 13 }}>{lo.theme} · </span>
              {lo.text}
              <span style={{ color: "var(--text-muted)", fontSize: 14 }}> ({lo.n} criteria)</span>
            </li>
          ))}
        </ol>

        <H2>What alignment actually required</H2>
        <Prose>
          <p>
            Mapping the 2018 rubric&rsquo;s twelve sub-criteria onto the eleven 2025&ndash;26 FALs shows most of
            them already covered: knowledge, methods and complexity, communication, stakeholders, planning and
            autonomy, and an implementation-ready result. Three things were genuinely missing from 2018: any
            criterion on <strong>prototyping and iteration</strong> (FAL 4), the <strong>societal and planetary
            role of design</strong> (FAL 8), and <strong>reflection</strong> beyond &ldquo;response to
            feedback&rdquo; (FAL 7). The new rubric adds all three.
          </p>
          <p>
            The other changes, the four-level scale, hidden points, a computed grade, equal weighting,
            independent double assessment, and the removal of desirability, feasibility and viability as named
            criteria, are design choices by the team rather than requirements of the FALs. The FALs do not
            forbid keeping those criteria either; the SPD attainment levels still name viability and
            feasibility. Note also that the 2024 FALs themselves dropped the words aesthetic, ergonomic and
            embodiment that the previous FALs contained, so the absence of form and aesthetics from the rubric
            traces back to the programme revision, not only to the rubric team.
          </p>
        </Prose>

        <H2>How we got here</H2>
        <ul className="mt-4 space-y-2 pl-5 text-[1.02rem] leading-relaxed" style={{ listStyle: "disc" }}>
          <li><strong>16 Jan 2026.</strong> A delegated team of the Board of Examiners circulates a draft (Rev2) to a small group of reviewers, planned for use from the second semester.</li>
          <li><strong>21 to 22 Jan.</strong> The team replies to reviewers: the draft was too complicated and will be simplified; desirability should not be omitted. Colleagues raise form and aesthetics and submit a written proposal.</li>
          <li><strong>28 Jan.</strong> A &ldquo;final concept&rdquo; is shared with all departments, with walk-in sessions on 3 to 5 February. That version had five visible grade columns and let student and supervisors choose three impact dimensions from viability, desirability, feasibility, sustainability, aesthetics and responsibility.</li>
          <li><strong>Feb to Sep.</strong> No further version reaches supervisors. The rollout moves from February to September.</li>
          <li><strong>18 Sep.</strong> The Board of Education announces the rubric, effective 23 September. Compared with the February concept, the scale, the themes and the impact-dimension mechanism have changed.</li>
        </ul>

        <H2>What is still unknown</H2>
        <ul className="mt-4 space-y-2 pl-5 text-[1.02rem] leading-relaxed" style={{ listStyle: "disc" }}>
          <li>The text of the nineteen criterion descriptors, and whether desirability, feasibility, viability or aesthetics appear inside them.</li>
          <li>The points-to-grade conversion table and chart (the briefing refers to an appendix that was not attached).</li>
          <li>What changed between the February concept and this version, and why.</li>
          <li>What the &ldquo;broader reform of the graduation structure&rdquo; will involve.</li>
        </ul>

        {/* Response form */}
        <section className="mt-14 rounded-lg border p-6 sm:p-8" style={{ borderColor: "var(--border-medium)", background: "var(--bg-warm)" }}>
          <h2 className="text-2xl" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
            Your response
          </h2>
          <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            For TU Delft staff and students. Tick whatever applies, including support. Responses, with the
            comments, will be compiled and sent to the Board of Education and the Board of Examiners. Your
            email address is used only to keep one response per person and is never shown.
          </p>

          {status === "done" ? (
            <p className="mt-6 text-lg" style={{ color: "var(--accent-rust)" }}>
              Thank you, {name.trim()}. Your response has been recorded.
            </p>
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
                <span style={labelStyle}>Comment (optional, shared with the Boards)</span>
                <textarea style={{ ...inputStyle, minHeight: 80, resize: "vertical" }} value={comment} onChange={(e) => setComment(e.target.value)} maxLength={1000} />
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
                <span style={{ color: "var(--text-secondary)" }}>List my name on this page</span>
              </label>
              <button className="rounded px-5 py-2.5 text-sm font-medium text-white disabled:opacity-60" style={{ background: "var(--accent-rust)", fontFamily: "var(--font-inter)" }} disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send my response"}
              </button>
              {status === "error" && (
                <p className="text-sm" style={{ color: "var(--accent-rust)" }}>{errorMsg}. Please try again.</p>
              )}
            </form>
          )}
        </section>

        <section className="mt-12">
          <h2 className="text-2xl" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
            Responses so far
            {total !== null && (
              <span className="ml-3 text-base" style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter)" }}>{total}</span>
            )}
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
            <p className="mt-3 text-sm" style={{ color: "var(--text-muted)" }}>No responses yet.</p>
          )}
          {names.length > 0 && (
            <ul className="mt-6 grid gap-x-8 gap-y-1 sm:grid-cols-2">
              {names.map((s, i) => (
                <li key={i} className="text-[1.0rem]">
                  {s.name}
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}> · {s.role}, {s.department}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <p className="mt-16 text-sm leading-relaxed" style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter)" }}>
          Compiled by Derek Lomas, Assistant Professor, HCD, from: the supervisor briefing of 18 September 2026;
          the concept of 28 January 2026 and the Rev2 draft of 16 January; the 2018 rubric (ID4x95); and Appendix 2 of the
          IDE MSc Teaching and Examination Regulations 2023&ndash;24 and 2025&ndash;26. Corrections welcome at{" "}
          <a href="mailto:j.d.lomas@tudelft.nl" className="underline">j.d.lomas@tudelft.nl</a>.
        </p>
      </main>
    </div>
  );
}

const COMPARISON = [
  {
    aspect: "What is scored",
    old: "Five competencies (knowledge, methods, project result, communication, project management) with twelve sub-criteria, plus a separate time-spent row.",
    new: "Eight learning objectives judged holistically, with nineteen criterion descriptors as evidence. One level per objective.",
  },
  {
    aspect: "Project result",
    old: "Feasibility (can it be done?), desirability (does it address users' values and needs?) and viability (will it survive on a longer term?) are named rows.",
    new: "Process and outcome framed as \"possible, sustainable and just\", the wording of the new programme. Whether the three older terms appear in the descriptors is not stated in the briefing.",
  },
  {
    aspect: "Prototyping, reflection, societal role",
    old: "Not assessed as such. Reflection appears only as \"response to feedback\".",
    new: "Explicit objectives: iteratively develop, prototype and test (LO 4); reflect from academic and practitioner perspectives (LO 8); shape possible, sustainable and just futures (LO 5).",
  },
  {
    aspect: "Scale",
    old: "Seven grade columns (4 to 10) with five distinct descriptor bands; the grade is visible while judging.",
    new: "Four performance levels. Points (2, 4, 7, 11) are hidden on the form to reduce grade anchoring; the descriptors come first, the grade is derived afterwards.",
  },
  {
    aspect: "Aggregation",
    old: "\"The final grade is not necessarily the mean of the parts.\" No rule given.",
    new: "Published piecewise-linear formula and conversion table. 32 of 88 points passes (6.0).",
  },
  {
    aspect: "Weighting",
    old: "Implicit and undeclared.",
    new: "All eight objectives weigh equally, declared in advance. An objective with one criterion (Methods, Reflection) counts as much as one with three.",
  },
  {
    aspect: "Who fills it in",
    old: "The supervisory team, typically in one discussion.",
    new: "Each supervisor independently, then a discussion, then a final assessment with written feedback.",
  },
  {
    aspect: "Deviating from the number",
    old: "Not applicable; the team set the grade directly.",
    new: "The computed grade is a recommendation. The team may deviate but must substantiate the deviation on the form.",
  },
  {
    aspect: "Delay",
    old: "Hard cap: maximum 8.5 if Green Light was not granted at the first or second meeting, or graduation ran eight or more weeks over.",
    new: "No cap. Delay is folded into the planning descriptors of LO 6 (Navigation).",
  },
  {
    aspect: "Tool",
    old: "Form in MyCase, appears in the finalisation phase.",
    new: "Interactive tool linked from MyCase; the completed rubric is exported as a PDF and uploaded to MyCase.",
  },
];

const LOS = [
  { theme: "Framing", text: "Envision and refine the design or research challenge.", n: 3 },
  { theme: "Knowledge", text: "Identify, acquire, critique and integrate knowledge from domains relevant to the challenge.", n: 3 },
  { theme: "Methods", text: "Explain and justify the choice and application of methods.", n: 1 },
  { theme: "Iteration", text: "Iteratively develop, prototype and test concepts.", n: 3 },
  { theme: "Process & outcome", text: "Address the identified challenge to shape possible, sustainable and just futures.", n: 3 },
  { theme: "Navigation", text: "Navigate complexities associated with the project.", n: 3 },
  { theme: "Communication", text: "Communicate across written, verbal and visual modes appropriate to the context.", n: 2 },
  { theme: "Reflection", text: "Reflect on process and outcome from academic and practitioner perspectives.", n: 1 },
];

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 text-2xl" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
      {children}
    </h2>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 space-y-4 text-[1.05rem] leading-relaxed" style={{ color: "var(--text-primary)" }}>
      {children}
    </div>
  );
}

function Tag({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      className="text-xs uppercase tracking-wider"
      style={{ fontFamily: "var(--font-inter)", color: accent ? "var(--accent-rust)" : "var(--text-muted)" }}
    >
      {children}
    </span>
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
