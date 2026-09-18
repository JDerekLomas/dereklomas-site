"use client";

import { useEffect, useState } from "react";

// Explainer for the IDE MSc graduation rubric that applies to projects
// starting 23 September 2026. Unlinked from navigation; colleagues get
// dereklomas.me/rubric. Source documents are served from /public/rubric.
// Colleagues with a concern can add their name; that goes to /api/rubric-sign.

type Signatory = { name: string; department: string; role: string };

const DEPARTMENTS = ["HCD", "DOS", "SDE", "ESA", "Other"];
const ROLES = ["Professor", "Associate professor", "Assistant professor", "Lecturer", "PhD candidate", "Postdoc", "Support staff", "Student", "Other"];

const DOCS = [
  { title: "2018 rubric (ID4x95), the one in use until now", href: "/rubric/rubric-2018.pdf", note: "Also Appendix A of the official student manual", noteHref: "https://filelist.tudelft.nl/Studentenportal/Faculteitspecifiek/IO/Onderwijs/graduation/Downloads/MyCase%20afstuderen/IDE%20MSc%20Graduation%20student%20manual.pdf#page=30" },
  { title: "Supervisor briefing on the new rubric, 18 September 2026", href: "/rubric/briefing-2026-09-18.pdf", note: "The only document supervisors have received about the new rubric" },
  { title: "Final concept, 28 January 2026", href: "/rubric/concept-2026-01-28.pdf", note: "The version shown at the February walk-in sessions" },
  { title: "First review draft (Rev2), 16 January 2026", href: "/rubric/draft-rev2-2026-01-16.pdf", note: "Sent to a small reviewer group" },
  { title: "Final attainment levels 2025–26 (TER, Appendix 2)", href: "https://filelist.tudelft.nl/Studentenportal/Faculteitspecifiek/IO/Onderwijs/Regelgeving/MSc%20IDE%20TER%20and%20RGfBE%202025-2026.pdf#page=48", note: "What the new rubric must assess" },
  { title: "Final attainment levels 2023–24 (TER, Appendix 2)", href: "https://filelist.tudelft.nl/Studentenportal/Faculteitspecifiek/IO/Onderwijs/Regelgeving/MSc%20IDE%20TER%20and%20RGfBE%202023-2024.pdf#page=31", note: "What the 2018 rubric was written against" },
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

export default function RubricExplainer() {
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
      if (!data) return; // the counter is decorative; the explainer still reads
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
            rubric is in the Teachers&rsquo; Manual and in a MyCase tool.
          </p>
          <p>
            Any change to how we grade feels wrong at first because we know the old form. This page tries to
            explain what changes and why, so that your view, for or against, is about the substance. Read the
            documents yourself; they are short.
          </p>
        </Prose>

        <H2>The documents</H2>
        <ul className="mt-4 space-y-3">
          {DOCS.map((d) => (
            <li key={d.href} className="text-[1.02rem] leading-snug">
              <a href={d.href} className="underline decoration-1 underline-offset-2" style={{ color: "var(--accent-rust)" }} target="_blank" rel="noopener">
                {d.title}
              </a>
              <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                {d.note}
                {d.noteHref && (
                  <>
                    {" "}(<a href={d.noteHref} className="underline" target="_blank" rel="noopener">link</a>)
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>

        <H2>Why the rubric was redesigned</H2>
        <Prose>
          <p>
            <strong>The programmes changed first.</strong> In September 2024 the three MSc programmes were
            revised, and with them the final attainment levels (FALs): the eleven statements in the Teaching
            and Examination Regulations of what an IDE graduate can do. The 2018 rubric was written against the
            old FALs, which spoke of products, embodiment design, ergonomics and aesthetics. The new FALs speak
            of design practices, design rationale, &ldquo;possible, sustainable and just futures&rdquo;,
            creativity in framing and prototyping, reflexivity, and the role of design at societal and
            planetary levels. A graduation project is where the faculty shows that graduates meet the FALs, so
            its assessment has to map onto them. Accreditation panels check exactly this mapping, which is why
            the briefing includes a FAL-to-objective table.
          </p>
          <p>
            <strong>The 2018 form had known weaknesses.</strong> The briefing names four. It had seven grade
            columns but only five distinct descriptors, so the 7 and 8 columns, and the 9 and 10 columns, shared
            one text. Its aggregation rule was never written down (&ldquo;the final grade is not necessarily the
            mean of the parts&rdquo;). Its weighting was never declared. And the grades sat in the column
            headers, so assessors read the number before the descriptor. Each of these makes grades less
            comparable between supervisory teams, and harder to explain to a student who appeals.
          </p>
          <p>
            <strong>Each new mechanism answers one of those problems.</strong> Four clearly distinct levels
            replace seven columns with five texts. A published formula and equal weights replace an unwritten
            rule. Hiding the points is a bias measure: assessors judge the descriptor first and see the grade
            afterwards, which is meant to reduce anchoring on a number. Independent scoring by both supervisors
            is a reliability measure: two separate judgements, then a discussion, give a more defensible grade
            than one conversation in which the first opinion voiced tends to win. The requirement to
            substantiate a deviation from the computed grade keeps the team&rsquo;s final say while making it
            visible.
          </p>
          <p>
            <strong>One rubric for three programmes.</strong> DfI, IPD and SPD share the same generic FALs, so
            the team built one rubric, generic enough for all three, and moved the programme-specific flavour
            into the comments. This is why the criteria are phrased abstractly, and why a supervisor in one
            programme may feel their kind of project is not described.
          </p>
          <p>
            <strong>A first step in something larger.</strong> The briefing says the current graduation
            structure is &ldquo;no longer considered sustainable&rdquo; and that a broader reform is being
            developed. The rubric is described as a step within that. What the reform involves has not been
            said.
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

        <H2>Which changes the FALs required, and which were choices</H2>
        <Prose>
          <p>
            Set the 2018 rubric against the 2025&ndash;26 FALs and most of it still maps: knowledge, methods,
            complexity, communication, stakeholders, planning, autonomy, an implementation-ready result. Three
            things were genuinely missing: prototyping and iteration, reflection, and the societal role of
            design. The new rubric adds those. The four-level scale, hidden points, the formula, double
            independent assessment, and dropping desirability, feasibility and viability as named criteria are
            the team&rsquo;s answers to the weaknesses above, not requirements of the FALs. The FALs do not
            forbid keeping the old criteria; SPD&rsquo;s own FALs still name viability and feasibility. Note that
            the words aesthetic and ergonomic disappeared from the FALs in 2024, before the rubric was written.
          </p>
        </Prose>

        <H2>What the evidence says</H2>
        <Prose>
          <p>
            <strong>What the rules require.</strong> The NVAO accreditation framework asks only that assessment be
            &ldquo;valid, reliable and sufficiently independent&rdquo; and transparent; the word rubric does not
            appear in it, and it does not require double examiners or written justification (
            <A href="https://www.nvao.net/files/attachments/.139/Assessment_Framework_for_the_Higher_Education_Accreditation_System_of_the_Netherlands_2018.pdf">framework, standards 3 and 4</A>).
            TU Delft&rsquo;s own assessment framework goes further: every graduation manual must contain a rubric with
            descriptors for the just-sufficient level and the level of the learning objectives, and its rubric guide
            recommends three to five criteria and an analytic layout (
            <A href="https://www.tudelft.nl/en/teaching-support/educational-advice/assess/guidelines/assessment-framework/assessment-policies-in-the-faculty">policy</A>,{" "}
            <A href="https://www.tudelft.nl/en/teaching-support/educational-advice/assess/projects-and-assignments/design-rubric">guide</A>).
            The 2018 rubric already met that. The IDE TER requires two examiners at the defence and that the student
            can ascertain how the result was reached; it never names a rubric. The MSc programmes were last
            accredited in 2019, and the cycle is six years, so the next assessment is due around now. That, more
            than any rule, is the likely reason for the timing (
            <A href="/rubric/research-regulatory.md">notes</A>).
          </p>
          <p>
            <strong>How comparable schools do it.</strong> Every peer found uses a rubric. None hides the points:
            Wageningen, TU Delft Aerospace, Mechanical Engineering and Applied Sciences all show the grade bands on
            the form. None uses equal weights across all criteria; Aerospace weights 30/20/20/15/15, Wageningen
            40/50/5/5, and Applied Sciences states that the grade &ldquo;is not an average with fixed
            weights&rdquo;. A published formula exists at Aerospace and Twente, but there it simply is the grade;
            no peer treats a computed grade as a default that examiners must justify departing from. Independent
            scoring by two assessors does have a precedent, at Wageningen. Eindhoven&rsquo;s Industrial Design
            uses four levels and a panel verdict with no arithmetic; Aalto grades holistically and names the
            quality of the design component as a criterion. Dropping feasibility, desirability and viability by
            name is in line with engineering faculties, and out of line with design schools (
            <A href="/rubric/research-peers.md">notes and links</A>).
          </p>
          <p>
            <strong>What the research says.</strong> Reviews support the direction: analytic, specific rubrics with
            training improve reliability (Jonsson &amp; Svingby 2007), and visible numbers anchor judgements, so
            hiding them has a rationale. Three findings cut the other way. Sadler (2009) shows that preset
            criteria cannot capture multi-criterion judgement and that assessors produce systematic anomalies
            when a formula is imposed, which is why the deviation clause will be used, not rarely. A 2023 study
            found examiners with a shared rubric reaching the same grade for different reasons and different
            grades for the same reason, and warns that rubrics create a false impression of consistency.
            Haagsman et al. (2021) found that under nominally equal weighting, examiners still weight some
            criteria far more than others in practice. In design education specifically, Orr &amp; Bloxham
            (2013) and Cowdroy &amp; de Graaff (2005) find that assessors rely on tacit expertise beyond the
            criteria and that creativity resists preset levels. No study tests whether requiring written
            justification for deviations changes grading behaviour (
            <A href="/rubric/research-literature.md">citations</A>).
          </p>
        </Prose>

        <H2>The deeper issue: judgement, not objectivity</H2>
        <Prose>
          <p>
            Assessing a graduation project is a judgement. The question is not whether to remove the
            subjectivity, which cannot be done, but where to put it so that it can be seen and argued with. The
            new rubric puts it inside nineteen level choices and a formula. The research on rubrics says that
            does not make it go away. Bloxham and colleagues (2016) interviewed markers using detailed shared
            criteria and titled the result &ldquo;Let&rsquo;s stop the pretence of consistent marking&rdquo;.
            Sadler (2014) argues that achievement standards cannot be fully codified and that the attempt
            displaces the judgement it claims to capture. Torrance (2007) shows that explicit criteria breed
            &ldquo;criteria compliance&rdquo;, work and grading aimed at the boxes. Shay (2005), studying design
            assessment, found assessors perform a double reading, one against the criteria and one as a
            professional, and that the second resolves the real disagreements. Yorke (2011) calls the
            points-and-decimals apparatus the &ldquo;measurement fallacy&rdquo;. The strongest defence of rubrics,
            Panadero and Jonsson (2020), rebuts the polemical critics but treats these studies as the credible
            evidence base (
            <A href="/rubric/research-rubric-critique.md">citations</A>).
          </p>
          <p>
            <strong>What produces consistent grades is calibrated people.</strong> Sadler (2013) and
            O&rsquo;Donovan, Sadler and Reimann (2024) set out the alternative: assessors who have argued about
            the same exemplars until they share a sense of what a 7, an 8 and a 9 look like. The Australian
            &ldquo;Achievement Matters&rdquo; exercise (Watty et al. 2014) measured the effect: agreement improved
            through the calibration sessions, not through the standards documents. The closest Dutch study
            (Hsiao et al. 2023) found that double marking alone left large disagreement; it was training plus a
            reconciliation conversation that worked. Written reasoning is not a weaker cousin of a number: PhD
            examiner reports (Holbrook and Bourke) and narrative assessment in medicine (Ginsburg et al.) show
            written justification to be reliable and defensible on appeal (
            <A href="/rubric/research-calibration.md">citations</A>).
          </p>
          <p>
            <strong>What a 9 should mean.</strong> TU Delft&rsquo;s own grading guidance says that &ldquo;a 10, or
            even a 9, is not often awarded&rdquo; and that Delft holds &ldquo;even higher standards&rdquo;. On the
            same page it reports the distribution of grades for MSc students graduating 2019 to 2022: a 9 for
            27 percent and a 10 for 4 percent, so 31 percent at 9 or above (
            <A href="https://filelist.tudelft.nl/TUDelft/Onderwijs/Toelating_en_aanmelding/Exchange/updated_files/TU%20Delft%20grading%20scale%20MSc%20students.pdf">source</A>;
            it is university-wide and does not separate graduation grades). No IDE-specific figure for
            graduation projects is public; it exists in MyCase and the Board of Examiners could publish it. If
            roughly a third of projects receive a 9 or higher, the question is whether a third of the work is
            &ldquo;very good&rdquo; by the faculty&rsquo;s own scale, and that is a calibration question no
            formula answers. Under the new formula, assuming the passing range is linear from 32 points to 88, a
            project at level three on every objective scores 7.6, each objective at the top level adds 0.3, and a
            9 requires the top level on five of eight objectives. So the new rubric will only produce fewer 9s
            if supervisors are sparing with its top level. That depends on what they think the top level means,
            which is exactly what calibration, not points, would settle (
            <A href="/rubric/research-grade-inflation.md">notes</A>).
          </p>
          <p>
            <strong>What the evidence suggests instead.</strong> A short set of criteria that names what a design
            project is for. A yearly calibration session in which supervisors grade the same three to five past
            projects and argue about them before seeing the reference grades. A written justification for every
            grade, tied to evidence in the work, with extra scrutiny at 9 and above. Independent double
            assessment with a conversation to reconcile, which the new rubric does include. And publication of
            the grade distribution each year, so the faculty can see whether its 9 still means what it says. The
            cost is one shared session a year plus the conversation on borderline cases, which is less per project
            than double-scoring nineteen descriptors.
          </p>
        </Prose>

        <H2>Three more angles</H2>
        <Prose>
          <p>
            <strong>Students now write with AI.</strong> When researchers slipped fully AI-written answers into a
            live UK degree, 94 percent went undetected and they scored above the real students (Scarfe et al.
            2024). Across seven Australian universities the vulnerability tracked the format, not the discipline:
            text judged against criteria is the easiest thing to satisfy (Nikolic et al. 2023). Where a grader
            and a language model agree most closely is exactly on rubric-anchored scores, and least on holistic
            expert judgement (Flod&eacute;n 2025). The field&rsquo;s response is to ask not &ldquo;did they
            cheat&rdquo; but &ldquo;is the grade still valid&rdquo; (Dawson, Bearman, Dollinger and Boud 2024),
            to move weight onto process evidence and the live defence (Lodge et al. 2023, for the Australian
            regulator; Sotiriadou et al. 2020 on interactive orals), and to treat the student&rsquo;s own
            evaluative judgement as the scarce competence (Bearman et al. 2024). Two honest caveats: the strong
            evidence is from exams and essays, not design projects, and AI-assisted writing is not lower in
            quality (Noy and Zhang 2023), so the lever is provenance and reasoning, not prose. A rubric with
            nineteen written descriptors is, structurally, the ideal target for a model; a supervisor who has
            watched the project for six months is not (
            <A href="/rubric/research-ai-assessment.md">citations</A>).
          </p>
          <p>
            <strong>What design educators have found.</strong> Sch&ouml;n (1987) built the theory of the reflective
            practitioner on an architecture studio and located the assessment of design ability in the live
            dialogue between coach and student. Nelson and Stolterman (2012) describe design competence as some
            ten kinds of judgement exercised at once, which resist decomposition into criteria. Orr and Shreeve
            (2018), from years of studying art and design assessment, found that explicit criteria mostly serve as
            post-hoc rationalisations of judgements already made, and that ambiguity is structural to creative
            education, not a defect. Dorst (2008) argues the most valuable expert move is reframing the problem,
            which a rubric of fixed objectives cannot reward unless it says so. On the other side, Anthony
            (1991), in the largest empirical study of design juries, found them unreliable and swayed by
            presentation skill, fatigue and power, which is the honest case for structure and documentation;
            and Blair (2006) found that vague holistic comments are useless as feedback, which is the honest case
            for descriptors. A useful audit from this literature: good studio assessment attends to product,
            process, person and press, and rubrics tend to over-weight product (de la Harpe et al. 2009). The
            feasibility, desirability, viability triad, incidentally, is Vitruvius&rsquo;s firmitas, utilitas,
            venustas restated; the new rubric keeps the first two and drops delight (
            <A href="/rubric/research-design-assessment.md">citations</A>).
          </p>
          <p>
            <strong>The humanist tradition.</strong> Biesta (2010) asks whether we measure what we value or value
            what we can measure; Muller (2018) names metric fixation, the belief that judgement can be replaced
            by standardised numbers; Espeland and Sauder (2016) show what commensuration, turning unlike things
            into one number, does to institutions; and Strathern&rsquo;s version of Goodhart&rsquo;s law, that a
            measure which becomes a target stops being a measure, applies to any threshold students can see.
            The older tradition made the same point from the other side. Aristotle&rsquo;s phronesis is judgement
            of the particular case, which no rule anticipates. Kant held that aesthetic judgement is exemplary,
            not determinate: it is taught by examples, not derived from a rule. Gadamer revived the humanist
            sensus communis, a shared sense of the fitting formed in a community, which is what calibration
            among supervisors builds. Quintilian told teachers to judge a pupil&rsquo;s ingenium together with
            their iudicium, talent with judgement, and Cicero&rsquo;s decorum, the trained sense of what fits the
            occasion, is desirability by an older name. Vives advised teachers to compare their judgements of
            pupils with one another. And the graduation defence itself descends from the Renaissance
            disputatio: the faculty already owns the humanist form of examination. Grafton and Jardine (1982)
            supply the warning that closes the circle: even the school of Guarino, the model humanist school,
            decayed from cultivating judgement into rote drill, because drill is easier to administer (
            <A href="/rubric/research-humanism.md">citations</A>).
          </p>
        </Prose>

        <H2>The case against</H2>
        <Prose>
          <p>
            The strongest objection is not that the old rubric was fine. It is that the new one solves
            measurement problems by taking judgement away from the people best placed to exercise it, without
            evidence that the measurement problems were doing harm.
          </p>
        </Prose>
        <ul className="mt-4 space-y-3 pl-5 text-[1.02rem] leading-relaxed" style={{ listStyle: "disc" }}>
          <li>
            <strong>It measures the wrong thing more precisely.</strong> The 2018 rubric asked whether the result
            was feasible, desirable and viable, which is what a design project is for. The new one asks whether
            eight learning objectives were demonstrated. A student can iterate, reflect, navigate complexity and
            communicate well and still produce something nobody wants. No row in the new form catches that, and
            nothing credits real value created in the world.
          </li>
          <li>
            <strong>A formula cannot weigh what matters in a given project.</strong> Equal weights mean Methods, with
            one criterion, counts as much as Iteration, with three, and a research-led project is balanced the
            same way as an embodiment-led one. The 2018 form&rsquo;s unwritten rule let experienced coaches weigh
            the parts to the project. Requiring written justification to deviate from the number makes the
            computed grade the default and expertise the exception.
          </li>
          <li>
            <strong>Hidden points move anchoring rather than removing it.</strong> Assessors will know the 2, 4, 7,
            11 mapping within a semester. What the hiding does achieve is that a supervisor cannot see, while
            scoring, whether the levels chosen add up to the grade the project deserves. That is a loss of
            calibration presented as a bias measure.
          </li>
          <li>
            <strong>Independent scoring treats disagreement as noise.</strong> Chair and mentor see different things
            because they played different roles. The joint conversation integrated those views. The new process
            scores them apart and reconciles afterwards, at about double the time, to reach the same integrated
            judgement.
          </li>
          <li>
            <strong>Two mechanisms have no precedent.</strong> Among the peer rubrics found, none hides the points and
            none makes a computed grade the default that examiners must justify departing from. Equal weighting
            across all criteria is also unlike any peer. The new rubric is conventional in having levels and
            descriptors, and unusual in exactly the mechanisms that shift judgement to the formula.
          </li>
          <li>
            <strong>The evidence is missing.</strong> No one has shown that 2018 grades varied between teams, that
            appeals were being lost, or that students found the form opaque. The briefing lists design
            weaknesses of the form, not harms observed in the grades. A change this large should be able to
            point to one.
          </li>
          <li>
            <strong>Process.</strong> Reviewers saw a concept in February with visible grade columns and
            student-chosen impact dimensions. The version in force has neither, was not shown to those who gave
            feedback, and lands five days before it applies, with the training afterwards.
          </li>
        </ul>
        <Prose>
          <p>
            Weaker objections, not worth leading with: that it takes more time (any written substantiation
            does); that form and aesthetics are missing (that was lost in the 2024 attainment levels, not here);
            that it is bureaucracy-driven (likely true of the motive, but the mechanisms must be argued on
            their merits).
          </p>
          <p>
            <strong>And the case for.</strong> The old form let the strongest personality in the room set the
            grade. &ldquo;Not necessarily the mean of the parts&rdquo; is indefensible to a student who appeals.
            Written substantiation per objective is better feedback than most students received. The new rubric
            is the standard answer to those problems. The open question is whether this faculty&rsquo;s
            supervisors were the problem the standard answer assumes.
          </p>
        </Prose>

        <H2>Time</H2>
        <Prose>
          <p>
            My estimate for the assessment step, per supervisor per project: about one hour under the 2018
            rubric, two to two and a half under the new one. The extra time is scoring and writing comments
            alone before the discussion, then reconciling two forms. What it buys is a written, independent
            substantiation per objective, which the old form never asked for.
          </p>
        </Prose>

        <H2>Still unknown</H2>
        <ul className="mt-3 space-y-1.5 pl-5 text-[1.02rem] leading-relaxed" style={{ listStyle: "disc" }}>
          <li>The text of the nineteen descriptors, and whether desirability, feasibility, viability or aesthetics appear in them.</li>
          <li>The points-to-grade table (the briefing refers to an appendix that was not attached).</li>
          <li>What changed between the January concept and this version, and why it was not re-circulated.</li>
          <li>What the broader reform of the graduation structure will involve.</li>
        </ul>

        {/* Concern sign-on */}
        <section className="mt-14 rounded-lg border p-6 sm:p-8" style={{ borderColor: "var(--border-medium)", background: "var(--bg-warm)" }}>
          <h2 className="text-2xl" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>If this leaves you with a concern</h2>
          <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            Add your name and, if you like, a comment. I will pass the names and comments to the Board of
            Education and the Board of Examiners in early October. Your email keeps it to one entry per person
            and is never shown.
          </p>

          {status === "done" ? (
            <p className="mt-6 text-lg" style={{ color: "var(--accent-rust)" }}>Thank you, {name.trim()}. Recorded.</p>
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
                {status === "sending" ? "Sending…" : "Add my name"}
              </button>
              {status === "error" && <p className="text-sm" style={{ color: "var(--accent-rust)" }}>{errorMsg}. Please try again.</p>}
            </form>
          )}

          {total !== null && total > 0 && (
            <div className="mt-8">
              <div className="text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter)" }}>
                {total} {total === 1 ? "colleague has" : "colleagues have"} added their name
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

        <p className="mt-16 text-sm leading-relaxed" style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter)" }}>
          Compiled by Derek Lomas (HCD) from the documents linked above. Corrections:{" "}
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

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="underline decoration-1 underline-offset-2" style={{ color: "var(--accent-rust)" }} target="_blank" rel="noopener">
      {children}
    </a>
  );
}

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
