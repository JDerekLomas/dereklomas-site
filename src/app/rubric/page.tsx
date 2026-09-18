"use client";

import { useEffect, useMemo, useState } from "react";

// A field guide to the IDE MSc graduation rubric that applies to projects
// starting 23 September 2026. Unlinked from navigation; colleagues get
// dereklomas.me/rubric. Source documents and research notes are served
// from /public/rubric. Colleagues with a concern can add their name via
// /api/rubric-sign.

type Signatory = { name: string; department: string; role: string };

const DEPARTMENTS = ["HCD", "DOS", "SDE", "ESA", "Other"];
const ROLES = ["Professor", "Associate professor", "Assistant professor", "Lecturer", "PhD candidate", "Postdoc", "Support staff", "Student", "Other"];

const DOCS = [
  { label: "A", title: "The 2018 rubric (ID4x95)", href: "/rubric/rubric-2018.pdf", note: "The one we all know. Also Appendix A of the student manual.", noteHref: "https://filelist.tudelft.nl/Studentenportal/Faculteitspecifiek/IO/Onderwijs/graduation/Downloads/MyCase%20afstuderen/IDE%20MSc%20Graduation%20student%20manual.pdf#page=30" },
  { label: "B", title: "The Friday briefing, 18 September 2026", href: "/rubric/briefing-2026-09-18.pdf", note: "Five pages. Everything supervisors have been given about the new rubric." },
  { label: "C", title: "The final concept, 28 January 2026", href: "/rubric/concept-2026-01-28.pdf", note: "Shown at the February walk-in sessions. Not what shipped." },
  { label: "D", title: "The first draft (Rev2), 16 January 2026", href: "/rubric/draft-rev2-2026-01-16.pdf", note: "Sent to a small reviewer group, with a deadline of early next week." },
  { label: "E", title: "Final attainment levels 2025–26", href: "https://filelist.tudelft.nl/Studentenportal/Faculteitspecifiek/IO/Onderwijs/Regelgeving/MSc%20IDE%20TER%20and%20RGfBE%202025-2026.pdf#page=48", note: "What the new rubric must prove our graduates can do. TER, Appendix 2." },
  { label: "F", title: "Final attainment levels 2023–24", href: "https://filelist.tudelft.nl/Studentenportal/Faculteitspecifiek/IO/Onderwijs/Regelgeving/MSc%20IDE%20TER%20and%20RGfBE%202023-2024.pdf#page=31", note: "What the 2018 rubric was written against. Note the word aesthetics." },
];

const LOS = [
  { theme: "Framing", text: "Envision and refine the design or research challenge" },
  { theme: "Knowledge", text: "Identify, acquire, critique and integrate relevant knowledge" },
  { theme: "Methods", text: "Explain and justify the choice and application of methods" },
  { theme: "Iteration", text: "Iteratively develop, prototype and test concepts" },
  { theme: "Process & outcome", text: "Address the challenge to shape possible, sustainable and just futures" },
  { theme: "Navigation", text: "Navigate the complexities of the project" },
  { theme: "Communication", text: "Communicate across written, verbal and visual modes" },
  { theme: "Reflection", text: "Reflect from academic and practitioner perspectives" },
];

const LEVEL_POINTS = [2, 4, 7, 11];
const LEVEL_NAMES = ["Level 1", "Level 2", "Level 3", "Level 4"];

// Assumes the passing segment is linear from 32 points (5.8) to 88 (10.0).
// The briefing says the curve is shallow in the failing range and steep in
// the passing range, and 32 -> 5.8, 31 -> 5.5, 16 -> 1, 88 -> 10.
function pointsToGrade(p: number) {
  if (p >= 32) return 5.8 + (p - 32) * (4.2 / 56);
  return 1 + (p - 16) * (4.5 / 15); // 16 -> 1.0, 31 -> 5.5
}

function gradeCommentary(levels: number[], grade: number) {
  const tops = levels.filter((l) => l === 3).length;
  const bottoms = levels.filter((l) => l === 0).length;
  if (levels.every((l) => l === 3)) return "A perfect 88. Frame it. Then ask whether you have ever met this student.";
  if (levels.every((l) => l === 2)) return "Solid level three across the board earns a 7.6. Consistency, it turns out, is a 7.6.";
  if (levels.every((l) => l === 1)) return "Level two everywhere: 32 points, a 5.8, rounded up to a pass. This is the floor, and it is exactly the floor.";
  if (grade < 6) return "Below the line. Under the old rubric you would now be having a conversation. Under the new one you still are, but first you write it down.";
  if (grade >= 9) return `A 9 or better needs the top level on about five of eight objectives. You gave ${tops}. Was the work that good, or was the form?`;
  if (grade >= 8) return `Each top level is worth 0.3 of a grade. You have awarded ${tops}. Two more and this is a 9.`;
  if (bottoms > 0) return `One weak objective costs 0.4 against level two and 0.6 against level three, whatever the objective is. Reflection weighs the same as Iteration.`;
  return "Somewhere in the honest middle. The form will now ask both of you to say why, separately, before you talk.";
}

async function fetchSignatures(): Promise<{ total: number; names: Signatory[] } | null> {
  try {
    const res = await fetch("/api/rubric-sign", { cache: "no-store" });
    const data = await res.json();
    return { total: data.total ?? 0, names: data.names ?? [] };
  } catch {
    return null;
  }
}

export default function RubricFieldGuide() {
  // Grade Machine
  const [levels, setLevels] = useState<number[]>([2, 2, 2, 2, 2, 2, 2, 2]);
  const points = useMemo(() => levels.reduce((s, l) => s + LEVEL_POINTS[l], 0), [levels]);
  const grade = pointsToGrade(points);

  // Time calculator
  const [projects, setProjects] = useState(6);

  // Sign-on
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("HCD");
  const [role, setRole] = useState("Assistant professor");
  const [comment, setComment] = useState("");
  const [showName, setShowName] = useState(true);
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [total, setTotal] = useState<number | null>(null);
  const [names, setNames] = useState<Signatory[]>([]);

  function load() {
    fetchSignatures().then((data) => {
      if (!data) return; // the counter is decorative; the guide still reads
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
        body: JSON.stringify({ name, email, department, role, comment, showName, website }),
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
          A field guide · for IDE graduation supervisors
        </p>
        <h1 className="mt-3 text-4xl leading-tight sm:text-5xl" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}>
          The new graduation rubric, explained, with feelings
        </h1>
        <p className="mt-4 text-lg" style={{ color: "var(--text-secondary)", fontStyle: "italic" }}>
          For everyone who received a five-page PDF on a Friday and has until Wednesday.
        </p>

        <H2>What happened on Friday</H2>
        <Prose>
          <p>
            On 18 September the Board of Education wrote to all MSc graduation supervisors. From{" "}
            <strong>23 September</strong>, any project that starts is assessed with a new rubric. Projects already
            running keep the old one; MyCase decides, by course code. Training follows in October and November,
            which is a bold order of operations. The full rubric lives in the Teachers&rsquo; Manual and in a
            MyCase tool nobody has seen yet.
          </p>
          <p>
            Every change to how we grade feels wrong at first, for the excellent reason that we know the old
            form and not the new one. That is not an argument. This page is an attempt to get past it: here is
            what changes, why the team says it changed, what the research says, and a machine you can play with.
            Then, if you still have a concern, there is a scroll to sign at the bottom.
          </p>
        </Prose>

        <H2>Exhibits A to F</H2>
        <ul className="mt-4 space-y-3">
          {DOCS.map((d) => (
            <li key={d.href} className="flex gap-3 text-[1.02rem] leading-snug">
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs" style={{ background: "var(--accent-rust)", color: "#fff", fontFamily: "var(--font-inter)" }}>{d.label}</span>
              <div>
                <A href={d.href}>{d.title}</A>
                <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {d.note}
                  {d.noteHref && <> (<a href={d.noteHref} className="underline" target="_blank" rel="noopener">link</a>)</>}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <H2>Why, though?</H2>
        <Prose>
          <p>
            Five reasons, in the team&rsquo;s own words where possible, and in fair paraphrase where not.
          </p>
        </Prose>
        <ol className="mt-3 space-y-3 pl-6 text-[1.02rem] leading-relaxed" style={{ listStyle: "decimal" }}>
          <li>
            <strong>The programmes changed first.</strong> In 2024 the three MSc programmes got new final
            attainment levels, the eleven things a graduate can do (Exhibit E). The 2018 rubric was written for
            the old ones (Exhibit F), which talked about products, embodiment, ergonomics and aesthetics. The new
            ones talk about design practices, design rationale, &ldquo;possible, sustainable and just
            futures&rdquo;, reflexivity, and the planet. Assessment must map onto the attainment levels, and
            accreditation panels check the map. The MSc programmes were last accredited in 2019, on a six-year
            cycle. You may do the arithmetic.
          </li>
          <li>
            <strong>The old form had four known quirks.</strong> Seven grade columns but only five texts (the 7
            and the 8 shared one, so did the 9 and the 10). An aggregation rule that read, in full, &ldquo;the
            final grade is not necessarily the mean of the parts&rdquo;. No declared weighting. And the grades
            printed in the column headers, so you read the number before the words.
          </li>
          <li>
            <strong>Each new mechanism answers one quirk.</strong> Four distinct levels instead of seven columns.
            A published formula and equal weights instead of an unwritten rule. Hidden points, so that you judge
            the descriptor before you see the grade, which is an anti-anchoring measure. Two supervisors scoring
            separately, so that the first opinion voiced does not win the room.
          </li>
          <li>
            <strong>One rubric for three programmes.</strong> DfI, IPD and SPD share the generic attainment
            levels, so the team wrote one rubric and moved the flavour into the comments. This is why it reads
            like it was written for no project in particular.
          </li>
          <li>
            <strong>It is step one.</strong> The briefing says the graduation structure is &ldquo;no longer
            considered sustainable&rdquo; and a broader reform is coming. It does not say what.
          </li>
        </ol>

        <H2>Before and after</H2>
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

        {/* Grade Machine */}
        <H2>The Grade Machine</H2>
        <Prose>
          <p>
            On the real form the points are hidden. On this page they are not, because this is not the real
            form. Pick a level for each objective and watch the grade come out. The levels are worth 2, 4, 7 and
            11 points; the formula is assumed linear across the passing range, from 32 points (5.8) to 88 (10),
            which is what the briefing describes without quite saying.
          </p>
        </Prose>
        <div className="mt-5 rounded-lg border p-4 sm:p-6" style={{ borderColor: "var(--border-medium)", background: "var(--bg-white)" }}>
          <div className="space-y-2">
            {LOS.map((lo, i) => (
              <div key={lo.theme} className="grid grid-cols-[1fr_auto] items-center gap-3">
                <div className="min-w-0">
                  <div className="text-sm font-medium" style={{ fontFamily: "var(--font-inter)" }}>{i + 1}. {lo.theme}</div>
                  <div className="truncate text-xs" style={{ color: "var(--text-muted)" }}>{lo.text}</div>
                </div>
                <div className="flex gap-1">
                  {LEVEL_NAMES.map((_, l) => (
                    <button
                      key={l}
                      type="button"
                      aria-label={`${lo.theme} level ${l + 1}`}
                      onClick={() => setLevels((v) => v.map((x, j) => (j === i ? l : x)))}
                      className="h-8 w-8 rounded text-sm"
                      style={{
                        fontFamily: "var(--font-inter)",
                        background: levels[i] === l ? "var(--accent-rust)" : "var(--bg-warm)",
                        color: levels[i] === l ? "#fff" : "var(--text-secondary)",
                        border: "1px solid var(--border-light)",
                      }}
                    >
                      {l + 1}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-baseline gap-x-6 gap-y-1 border-t pt-4" style={{ borderColor: "var(--border-light)" }}>
            <div>
              <span className="text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter)" }}>Points </span>
              <span className="text-2xl tabular-nums" style={{ fontFamily: "var(--font-cormorant)" }}>{points}</span>
              <span className="text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter)" }}> / 88</span>
            </div>
            <div>
              <span className="text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter)" }}>Grade </span>
              <span className="text-4xl tabular-nums" style={{ fontFamily: "var(--font-cormorant)", color: grade >= 6 ? "var(--accent-rust)" : "var(--text-muted)" }}>{grade.toFixed(1)}</span>
              <span className="text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter)" }}> rounds to {(Math.round(grade * 2) / 2).toFixed(1)}</span>
            </div>
          </div>
          <p className="mt-3 text-[0.98rem] italic" style={{ color: "var(--text-secondary)" }}>{gradeCommentary(levels, grade)}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              { l: "All level 2", v: [1, 1, 1, 1, 1, 1, 1, 1] },
              { l: "All level 3", v: [2, 2, 2, 2, 2, 2, 2, 2] },
              { l: "Five tops", v: [3, 3, 3, 3, 3, 2, 2, 2] },
              { l: "All level 4", v: [3, 3, 3, 3, 3, 3, 3, 3] },
            ].map((p) => (
              <button key={p.l} type="button" onClick={() => setLevels(p.v)} className="rounded border px-2.5 py-1 text-xs" style={{ borderColor: "var(--border-medium)", fontFamily: "var(--font-inter)", color: "var(--text-secondary)" }}>
                {p.l}
              </button>
            ))}
          </div>
        </div>
        <Prose>
          <p>
            Three things the machine teaches quickly. Level three everywhere is a 7.6, so the whole 7-to-8 band
            lives inside one level. Each top-level objective adds exactly 0.3, whichever objective it is, so
            Reflection (one criterion) moves the grade as much as Iteration (three). And a 9 needs the top level
            on five of eight objectives, which means the number of 9s the faculty gives next year depends
            entirely on how freely supervisors award the top level, not on the formula at all.
          </p>
        </Prose>

        <H2>Was any of this required?</H2>
        <Prose>
          <p>
            Partly. Set the 2018 rubric against the new attainment levels and most of it still maps. Three
            things were genuinely missing: prototyping and iteration, reflection, and the societal role of
            design. The new rubric adds those, and good. The four-level scale, the hidden points, the formula,
            the double independent scoring and the disappearance of desirability, feasibility and viability
            as named rows are the team&rsquo;s answers to the four quirks above, not requirements of anything.
            The attainment levels do not forbid keeping the old rows; SPD&rsquo;s own attainment levels still
            say &ldquo;viable and feasible&rdquo;. The words aesthetic and ergonomic left the attainment levels
            in 2024, before any rubric was written, so that argument was lost upstream.
          </p>
        </Prose>

        {/* Time calculator */}
        <H2>What it costs you</H2>
        <div className="mt-4 rounded-lg border p-4 sm:p-6" style={{ borderColor: "var(--border-medium)", background: "var(--bg-white)" }}>
          <label className="flex flex-wrap items-center gap-3 text-[1.02rem]">
            <span>I supervise about</span>
            <input
              type="number"
              min={0}
              max={40}
              value={projects}
              onChange={(e) => setProjects(Math.max(0, Math.min(40, Number(e.target.value) || 0)))}
              className="w-16 rounded border px-2 py-1 text-center tabular-nums"
              style={{ borderColor: "var(--border-medium)", fontFamily: "var(--font-inter)" }}
            />
            <span>graduation projects a year.</span>
          </label>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <Stat label="2018 rubric" value={`${projects} h`} note="about an hour each: one joint form, one conversation" />
            <Stat label="New rubric" value={`${Math.round(projects * 2)}–${Math.round(projects * 2.5)} h`} note="scoring alone, writing eight comments, reconciling two forms, a final form, a PDF" accent />
            <Stat label="One-off" value="≈ 3 h" note="the mandatory session plus learning the tool" />
          </div>
          <p className="mt-3 text-sm" style={{ color: "var(--text-muted)" }}>
            My estimate, not the Board&rsquo;s; the briefing gives none. What the extra hour buys is a written,
            independent substantiation per objective, which the old form never asked for.
          </p>
        </div>

        <H2>Field notes from the literature</H2>
        <Prose>
          <p>
            Six research notes sit behind this page. The short version, in three parts.
          </p>
        </Prose>
        <ul className="mt-3 space-y-3 pl-5 text-[1.02rem] leading-relaxed" style={{ listStyle: "disc" }}>
          <li>
            <strong>The rules.</strong> The NVAO accreditation framework asks for assessment that is &ldquo;valid,
            reliable and sufficiently independent&rdquo;. It never says rubric. TU Delft&rsquo;s own assessment
            framework does require a rubric in every graduation manual, with descriptors for a 6 and a 10, and
            recommends three to five criteria. The 2018 rubric already complied (
            <A href="/rubric/research-regulatory.md">notes</A>).
          </li>
          <li>
            <strong>The neighbours.</strong> Every comparable school found uses a rubric. None hides the points.
            None uses equal weights. Where a formula exists (Aerospace, Twente) it simply is the grade; nobody
            makes a computed grade the default you must write an essay to escape. Eindhoven&rsquo;s Industrial
            Design uses four levels and a panel verdict with no arithmetic. Aalto grades holistically and names
            the quality of the design as a criterion (<A href="/rubric/research-peers.md">notes</A>).
          </li>
          <li>
            <strong>The research.</strong> Analytic rubrics with training improve reliability, and visible numbers
            anchor judgements, so far so good for the team. Then: preset criteria cannot capture multi-criterion
            judgement and assessors produce systematic anomalies when a formula is imposed (Sadler 2009);
            examiners with a shared rubric reach the same grade for different reasons and different grades for
            the same reason (2023); examiners weight criteria unequally even when told they are equal (Haagsman
            et al. 2021); and nobody has tested whether making people write a justification to deviate changes
            anything (<A href="/rubric/research-literature.md">notes</A>).
          </li>
        </ul>

        <H2>Objectivity is a costume</H2>
        <Prose>
          <p>
            Grading a graduation project is a judgement. You cannot remove the subjectivity; you can only choose
            where to put it. The new rubric puts it inside nineteen level choices and a formula, where it wears
            a number and looks objective. The people who study this have been saying for two decades that the
            costume does not fit. Bloxham and colleagues (2016) interviewed markers using detailed shared
            criteria and called the paper &ldquo;Let&rsquo;s stop the pretence of consistent marking&rdquo;.
            Sadler (2014) argued that standards cannot be codified, only shared. Torrance (2007) showed that
            explicit criteria breed criteria compliance, in students and in graders. Shay (2005), watching
            design assessors, found they do a double reading, once against the criteria and once as a
            professional, and the second one settles the argument. Yorke (2011) called the decimals the
            &ldquo;measurement fallacy&rdquo;. The strongest defence of rubrics (Panadero and Jonsson 2020)
            dismisses the polemicists and keeps exactly these studies (
            <A href="/rubric/research-rubric-critique.md">notes</A>).
          </p>
          <p>
            <strong>What does produce consistent grades is calibrated people.</strong> Assessors who have argued
            over the same past projects until they share a sense of what a 7, an 8 and a 9 look like. The
            Australian &ldquo;Achievement Matters&rdquo; exercise measured it: agreement improved through the
            calibration sessions, not the standards documents. The nearest Dutch study (Hsiao et al. 2023) found
            double marking alone left large disagreement, and training plus a reconciliation conversation fixed
            it. Written reasoning is not a weaker cousin of a number; PhD examiner reports and narrative
            assessment in medicine both turn out reliable and defensible on appeal (
            <A href="/rubric/research-calibration.md">notes</A>).
          </p>
          <p>
            <strong>What a 9 should mean.</strong> TU Delft&rsquo;s official grading guidance says that &ldquo;a 10,
            or even a 9, is not often awarded&rdquo; and that Delft holds &ldquo;even higher standards&rdquo;.
            On the same page it reports that MSc students graduating 2019 to 2022 received a 9 for 27 percent of
            their grades and a 10 for 4 percent (
            <A href="https://filelist.tudelft.nl/TUDelft/Onderwijs/Toelating_en_aanmelding/Exchange/updated_files/TU%20Delft%20grading%20scale%20MSc%20students.pdf">source</A>;
            university-wide, not graduation projects). Nobody publishes the IDE figure; it is in MyCase. If a
            third of projects get a 9, the question is whether a third of the work is &ldquo;very good&rdquo;,
            and the Grade Machine above shows that no formula will answer it. Only what supervisors think the
            top level means will (<A href="/rubric/research-grade-inflation.md">notes</A>).
          </p>
        </Prose>

        <H2>A brief history of judging things</H2>
        <ol className="mt-4 space-y-3 border-l-2 pl-5" style={{ borderColor: "var(--border-medium)" }}>
          {HISTORY.map((h) => (
            <li key={h.when} className="relative">
              <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full" style={{ background: "var(--accent-rust)" }} />
              <div className="text-xs uppercase tracking-wider" style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter)" }}>{h.when}</div>
              <div className="text-[1.02rem] leading-relaxed"><strong>{h.who}.</strong> {h.what}</div>
            </li>
          ))}
        </ol>
        <Prose>
          <p>
            The faculty already owns the humanist form of examination: the public defence descends from the
            Renaissance disputatio. Grafton and Jardine (1982) supply the warning that closes the circle: even
            the school of Guarino, the model humanist school, decayed from cultivating judgement into rote drill,
            because drill is easier to administer (<A href="/rubric/research-humanism.md">notes</A>).
          </p>
        </Prose>

        <H2>The AI in the room</H2>
        <Prose>
          <p>
            Our students write with language models now. When researchers slipped fully AI-written answers into
            a live UK degree, 94 percent went undetected and they outscored the real students (Scarfe et al.
            2024). Graders and language models agree most on rubric-anchored scores and least on holistic
            judgement (Flod&eacute;n 2025). A model given nineteen descriptors will satisfy nineteen
            descriptors; it is, structurally, the ideal tool for criteria compliance. The field&rsquo;s response
            is to weight process evidence and the live defence, and to treat the student&rsquo;s own evaluative
            judgement as the thing worth grading (Dawson et al. 2024; Bearman et al. 2024). Two honest caveats:
            the strong evidence is from exams, not design projects, and AI-assisted writing is not worse, so the
            lever is provenance and reasoning, not prose quality. The supervisor who watched the project for six
            months remains hard to fool (<A href="/rubric/research-ai-assessment.md">notes</A>).
          </p>
        </Prose>

        <H2>Objections, ranked</H2>
        <ol className="mt-4 space-y-3 pl-6 text-[1.02rem] leading-relaxed" style={{ listStyle: "decimal" }}>
          <li><strong>It measures the wrong thing more precisely.</strong> A student can frame, iterate, navigate and reflect beautifully and produce something nobody wants. No row catches that.</li>
          <li><strong>A formula cannot weigh what matters in this project.</strong> Equal weights and a justify-to-deviate clause make the number the default and expertise the exception.</li>
          <li><strong>Two mechanisms have no precedent.</strong> Hidden points and an enforced computed grade appear at no peer school found. The rubric is conventional except where it moves judgement into the formula.</li>
          <li><strong>Hidden points move anchoring rather than removing it.</strong> Everyone will know the mapping by Christmas; meanwhile nobody can see whether their levels add up to the grade the work deserves.</li>
          <li><strong>Independent scoring treats disagreement as noise.</strong> Chair and mentor saw different things because they had different roles. The old conversation integrated that; the new process reconciles it afterwards, at double the time.</li>
          <li><strong>The evidence of harm is missing.</strong> Nobody has shown grades varied between teams, appeals were lost, or students found the old form opaque. The briefing lists quirks of the form, not damage in the grades.</li>
          <li><strong>Process.</strong> Reviewers saw a concept in February with visible grades and student-chosen impact dimensions. The version in force has neither, was not shown to them, and lands five days before it applies, training to follow.</li>
        </ol>
        <Prose>
          <p>
            Weaker objections, not to lead with: that it takes longer (any written substantiation does); that
            aesthetics is missing (lost upstream in 2024); that it is bureaucracy-driven (probably, but the
            mechanisms must be argued on their merits).
          </p>
        </Prose>

        <H2>In fairness</H2>
        <Prose>
          <p>
            The old form let the strongest personality in the room set the grade. &ldquo;Not necessarily the
            mean of the parts&rdquo; is indefensible to a student who appeals. Written substantiation per
            objective is better feedback than most students got. Anthony (1991), in the largest empirical study
            of design juries, found them unreliable and swayed by presentation skill, fatigue and power. The new
            rubric is the standard answer to those problems. The open question is whether this faculty&rsquo;s
            supervisors were the problem the standard answer assumes.
          </p>
        </Prose>

        <H2>Unknown unknowns</H2>
        <ul className="mt-3 space-y-1.5 pl-5 text-[1.02rem] leading-relaxed" style={{ listStyle: "disc" }}>
          <li>The text of the nineteen descriptors, and whether desirability, feasibility, viability or aesthetics survive inside them.</li>
          <li>The points-to-grade table. The briefing refers to an appendix that was not attached, so the Grade Machine is an educated guess.</li>
          <li>What changed between the January concept and this version, and why it was not re-circulated.</li>
          <li>What the &ldquo;broader reform of the graduation structure&rdquo; is.</li>
          <li>How many IDE graduation projects get a 9 or higher each year. MyCase knows.</li>
        </ul>

        {/* Sign the scroll */}
        <section className="mt-14 rounded-lg border p-6 sm:p-8" style={{ borderColor: "var(--border-medium)", background: "var(--bg-warm)" }}>
          <h2 className="text-2xl" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>Sign the scroll</h2>
          <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            If you read this far and still have a concern, add your name and, if you like, the concern. Names
            and comments go to the Board of Education and the Board of Examiners in early October. Your email
            keeps it to one entry per person and is never shown to anyone.
          </p>

          {status === "done" ? (
            <p className="mt-6 text-lg" style={{ color: "var(--accent-rust)" }}>Thank you, {name.trim()}. Inscribed.</p>
          ) : (
            <form onSubmit={submit} className="mt-6 space-y-4">
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
              <label className="block text-sm">
                <span style={labelStyle}>Your concern (optional)</span>
                <textarea style={{ ...inputStyle, minHeight: 70, resize: "vertical" }} value={comment} onChange={(e) => setComment(e.target.value)} maxLength={1000} />
              </label>
              {/* Honeypot: hidden from people, filled by bots */}
              <input tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} style={{ position: "absolute", left: -9999, opacity: 0 }} aria-hidden="true" />
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={showName} onChange={(e) => setShowName(e.target.checked)} />
                <span style={{ color: "var(--text-secondary)" }}>List my name below</span>
              </label>
              <button className="rounded px-5 py-2.5 text-sm font-medium text-white disabled:opacity-60" style={{ background: "var(--accent-rust)", fontFamily: "var(--font-inter)" }} disabled={status === "sending"}>
                {status === "sending" ? "Inscribing…" : "Add my name"}
              </button>
              {status === "error" && <p className="text-sm" style={{ color: "var(--accent-rust)" }}>{errorMsg}. Please try again.</p>}
            </form>
          )}

          {total !== null && total > 0 && (
            <div className="mt-8">
              <div className="text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter)" }}>
                {total} {total === 1 ? "colleague has" : "colleagues have"} signed
              </div>
              {names.length > 0 && (
                <ul className="mt-3 grid gap-x-8 gap-y-1 sm:grid-cols-2">
                  {names.map((s, i) => (
                    <li key={i} className="text-[1.0rem]">
                      {s.name}<span className="text-sm" style={{ color: "var(--text-muted)" }}> · {s.role}, {s.department}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </section>

        <H2>The bibliography, for the brave</H2>
        <ul className="mt-3 grid gap-x-6 gap-y-1 text-sm sm:grid-cols-2" style={{ fontFamily: "var(--font-inter)" }}>
          {NOTES.map((n) => (
            <li key={n.href}><A href={n.href}>{n.title}</A></li>
          ))}
        </ul>
        <p className="mt-10 text-sm leading-relaxed" style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter)" }}>
          Written by Derek Lomas (HCD) from the exhibits above and nine sets of research notes, with help from a
          language model that was asked to check its sources and mostly did. Errors are mine; corrections to{" "}
          <a href="mailto:j.d.lomas@tudelft.nl" className="underline">j.d.lomas@tudelft.nl</a> and fixed the same day.
        </p>
      </main>
    </div>
  );
}

const COMPARISON = [
  { aspect: "Criteria", old: "Five competencies, twelve sub-criteria, plus a time-spent row.", new: "Eight learning objectives with nineteen descriptors; one level per objective." },
  { aspect: "The result", old: "Feasibility (can it be done?), desirability (does anyone want it?), viability (will it survive?).", new: "\"Possible, sustainable and just.\" Whether the older three survive inside the descriptors is not stated." },
  { aspect: "Newly assessed", old: "Nothing on prototyping and iteration, reflection, or the societal role of design.", new: "All three are explicit objectives. Credit where due." },
  { aspect: "Scale", old: "Seven grade columns, grade visible while judging.", new: "Four levels. Points hidden, so you judge the words before you see the number." },
  { aspect: "The grade", old: "Set by the team. \"Not necessarily the mean of the parts\"; no rule.", new: "Computed by a published formula, equal weights. Deviate if you must, and write down why." },
  { aspect: "Process", old: "One joint form, one conversation.", new: "Each supervisor scores alone, then you reconcile, then a final form, then a PDF into MyCase." },
  { aspect: "Running late", old: "Hard cap of 8.5 after a late Green Light or eight weeks over.", new: "No cap. Lateness lives inside the planning descriptors." },
];

const HISTORY = [
  { when: "1st century BCE", who: "Vitruvius", what: "Good building is firmitas, utilitas, venustas: sound, useful, delightful. Feasibility, desirability and viability is this triad in a lanyard. The new rubric keeps the first two and drops delight." },
  { when: "1st century CE", who: "Quintilian", what: "Judge a pupil's ingenium together with their iudicium, talent alongside judgement. Cicero adds decorum, the trained sense of what fits the occasion, which is desirability by an older name." },
  { when: "1459", who: "Battista Guarino", what: "Writes the curriculum of the model humanist school at Ferrara. Vives (1531) tells teachers to compare their judgements of pupils with each other. That is a calibration session." },
  { when: "1790", who: "Kant", what: "Aesthetic judgement is exemplary, not determinate: it is taught by examples and cannot be derived from a rule. A rubric is a rule." },
  { when: "1960", who: "Gadamer", what: "Revives the humanist sensus communis, a shared sense of the fitting, formed in a community of judges. Which is what supervisors build when they argue about the same three projects." },
  { when: "2010", who: "Biesta", what: "Asks whether we measure what we value or value what we can measure. Muller (2018) names metric fixation. Strathern's law: a measure that becomes a target stops being a measure." },
];

const NOTES = [
  { title: "Rules: NVAO, TU Delft, the TER", href: "/rubric/research-regulatory.md" },
  { title: "Peer schools' rubrics", href: "/rubric/research-peers.md" },
  { title: "Rubric reliability and validity", href: "/rubric/research-literature.md" },
  { title: "The critique of rubrics", href: "/rubric/research-rubric-critique.md" },
  { title: "Calibration methods", href: "/rubric/research-calibration.md" },
  { title: "Grade distributions", href: "/rubric/research-grade-inflation.md" },
  { title: "AI and assessment", href: "/rubric/research-ai-assessment.md" },
  { title: "Design education assessment", href: "/rubric/research-design-assessment.md" },
  { title: "Humanism and judgement", href: "/rubric/research-humanism.md" },
];

function Stat({ label, value, note, accent }: { label: string; value: string; note: string; accent?: boolean }) {
  return (
    <div className="rounded-md border p-3" style={{ borderColor: "var(--border-light)" }}>
      <div className="text-xs uppercase tracking-wider" style={{ color: accent ? "var(--accent-rust)" : "var(--text-muted)", fontFamily: "var(--font-inter)" }}>{label}</div>
      <div className="mt-1 text-2xl tabular-nums" style={{ fontFamily: "var(--font-cormorant)" }}>{value}</div>
      <div className="mt-1 text-xs leading-snug" style={{ color: "var(--text-muted)" }}>{note}</div>
    </div>
  );
}

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="underline decoration-1 underline-offset-2" style={{ color: "var(--accent-rust)" }} target="_blank" rel="noopener">
      {children}
    </a>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-12 text-2xl" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>{children}</h2>;
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
