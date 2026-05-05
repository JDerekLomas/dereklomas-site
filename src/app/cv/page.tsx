import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description:
    "Academic CV — J. Derek Lomas, PhD. Tenured Assistant Professor of Positive AI at TU Delft.",
};

const academic = [
  {
    range: "2017–present",
    body: (
      <>
        <strong>Industrial Design Engineering, TU Delft.</strong> Tenured
        Assistant Professor, Design Aesthetics Section. Research on aligning
        technology with humanity.
      </>
    ),
  },
  {
    range: "2015–2017",
    body: (
      <>
        <strong>The Design Lab, UC San Diego.</strong> Design Fellow and
        Postdoctoral Scholar. 2-year appointment under Don Norman. AI-assisted
        design, AI in education, design for human intelligence.
      </>
    ),
  },
  {
    range: "2009–2014",
    body: (
      <>
        <strong>HCI Institute, Carnegie Mellon University.</strong> PhD,
        Human-Computer Interaction. Dissertation: <em>Optimizing Motivation and
        Learning with Large-Scale Game Design Experiments</em>. Advisors: Ken
        Koedinger, Jodi Forlizzi.
      </>
    ),
  },
  {
    range: "Summer 2008",
    body: (
      <>
        <strong>Massachusetts Institute of Technology.</strong> Visiting
        Student, Mechanical Engineering. International Development Design
        Summit — $10 computers for education in developing contexts.
      </>
    ),
  },
  {
    range: "1999–2003",
    body: (
      <>
        <strong>Yale University.</strong> B.A. Cognitive Science. Worked with
        Nick Bostrom.
      </>
    ),
  },
];

const ventures = [
  {
    name: "Playpower Labs",
    years: "2012–present",
    description:
      "CEO and Chief Learning Scientist. Award-winning learning games used by millions of students. Data-science and game-design contracts with Pearson, Houghton-Mifflin Harcourt, AltSchool, BrainPOP, Scientific Learning, Carnegie Learning. Grants from Gates, MacArthur, and Schmidt foundations.",
    url: "https://www.playpowerlabs.com",
  },
  {
    name: "Playpower Games",
    description:
      "Free K–8 math games platform, Common Core / TEKS aligned, with live Kahoot-style quizzes; integrates with Google Classroom, Clever, ClassLink.",
    url: "https://playpowergames.com",
  },
  {
    name: "EdOptimize / Smart Paper",
    description:
      "Computer-vision platform turning hand-completed worksheets into instant feedback. 5M+ students reached across India.",
    url: "https://smartpaperapp.com",
  },
  {
    name: "NeuroUX",
    description:
      "HIPAA/GDPR-compliant cognitive assessment and Ecological Momentary Assessment (EMA) platform with wearables integrations (Fitbit, Garmin, Apple Watch, ActiGraph).",
    url: "https://getneuroux.com",
  },
  {
    name: "Source Library",
    description:
      "Open digital archive of pre-1700 Hermetic, alchemical, and natural-magic texts. 12,347 books · 11,218 new English translations · 152 languages.",
    url: "https://sourcelibrary.org",
  },
];

const publications = [
  {
    year: "2026",
    cite: "Lomas JD et al.",
    title:
      "Parametric Analysis of Feature-Specific Neural Coding During Music Imagery and Perception.",
    venue: "IEEE.",
  },
  {
    year: "2025",
    cite: "Liao D, Lomas D, Yu C.",
    title:
      "Enhancing the aesthetic appeal of AI-generated physical product designs through LoRA fine-tuning with human feedback.",
    venue: "AIGC.",
  },
  {
    year: "2025",
    cite: "Lomas D, Xue H.",
    title: "The Harmony of Opposites in Design and Philosophy.",
    venue: "In: Perspectives on Harmony, ed. Li, Lai, Benitez. Bloomsbury.",
  },
  {
    year: "2024",
    cite: "Lomas JD, van der Maden W, Lion G, Bandyopadhyay S, Litowsky Y, Xue H, Desmet P.",
    title: "Evaluating the alignment of AI with human emotions.",
    venue: "Advanced Design Research.",
  },
  {
    year: "2024",
    cite: "van der Maden W, van Beek E, Halperin BA, Jääskeläinen P, Kang E, Kun P, Lomas JD, van der Burg V.",
    title:
      "Death of the Design Researcher? Creating Knowledge Resources for Designers Using Generative AI.",
    venue: "ACM DIS.",
  },
  {
    year: "2024",
    cite: "van der Maden W, Lomas D, Hekkert P.",
    title:
      "Developing and evaluating a design method for positive artificial intelligence.",
    venue: "AI EDAM.",
  },
  {
    year: "2023",
    cite: "van der Maden W, Lomas JD, Hekkert P.",
    title:
      "A framework for designing AI systems that support community wellbeing.",
    venue: "Frontiers in Psychology.",
  },
  {
    year: "2023",
    cite: "Patel N, Nagpal P, Shah T, Sharma A, Malvi S, Lomas D.",
    title:
      "Improving mathematics assessment readability: Do large language models help?",
    venue: "Journal of Computer Assisted Learning.",
  },
  {
    year: "2022",
    cite: "Lin A, Lomas JD.",
    title:
      "The Enigma of Mind: A Theory of Evolution and Conscious Experience.",
    venue: "In: Enigmas — Darwin College Lectures. Cambridge University Press.",
  },
  {
    year: "2022",
    cite: "Lomas JD, Lin A, Forster D, Huisman G, Habekost J, Beardow C, Mullen T, Pandey P, Ahmad N, Miyapuram K, van der Maden W, Cross E.",
    title: "Resonance as a Design Strategy for AI and Social Robots.",
    venue: "Frontiers in Neurorobotics.",
  },
  {
    year: "2022",
    cite: "Lomas D, Xue H.",
    title:
      "Harmony in Design: A Synthesis of Literature from Classical Philosophy, the Sciences, Economics, and Design.",
    venue: "She Ji.",
  },
  {
    year: "2022",
    cite: "Shah T, Patel N, Lomas D, Sharma A.",
    title: "EdOptimize — An Open-Source K-12 Learning Analytics Platform.",
    venue: "LAK22.",
  },
  {
    year: "2021",
    cite: "Lomas D, Karac M, Gielen M.",
    title:
      "Design Space Cards: Using a Card Deck to Navigate the Design Space of Interactive Play.",
    venue: "ACM CHI PLAY.",
  },
  {
    year: "2019",
    cite: "Lomas D.",
    title:
      "How Might Data-Driven Design Help Reduce the Poverty-Achievement Gap?",
    venue: "Mind, Brain and Education.",
  },
  {
    year: "2017",
    cite: "Lomas D, Forlizzi J, Patel N, Shodhan S, Patel K, Poonwala N, Koedinger K.",
    title:
      "Is Difficulty Overrated? Investigating the Effects of Choice, Novelty and Suspense on Intrinsic Motivation.",
    venue: "ACM CHI. Honorable Mention.",
  },
  {
    year: "2016",
    cite: "Lomas D, Forlizzi J, Poonwala N, Patel N, Shodhan S, Patel K, Koedinger K, Brunskill E.",
    title: "Interaction Design as a Multi-Armed Bandit Problem.",
    venue: "ACM CHI.",
  },
  {
    year: "2013",
    cite: "Lomas D, Forlizzi J, Koedinger K.",
    title:
      "Optimizing Challenge in an Educational Game Using Large-Scale Design Experiments.",
    venue: "ACM CHI.",
  },
];

const funding = [
  "NWA-ORC Quantum Inspire — PhD student (Caiseal Beardow)",
  "Quantum Delta “Quantum & Society” with Deborah Nas — Postdoc, 1 day/week personal time",
  "eHealthjr with Valentijn Visch — Postdoc",
  "Google AI Gift — €36,000",
  "KNAW fellowship for a workshop on Resonance — €10,000",
  "4TU support on Wellbeing in Engineering Education — ½ PhD",
  "ErasmusX “AI in University Education” — 1 day/week personal time",
];

const talks = [
  { year: "2025", venue: "Ozora Festival, Hungary", title: "Vibes, Resonance and Harmony in the Age of AI" },
  { year: "2022", venue: "Experience Research Summit, Salt Lake City", title: "Design Resonance" },
  { year: "2022", venue: "Amplify AI, Amsterdam", title: "AI for Good Vibes" },
  { year: "2022", venue: "Fruit Punch AI, Eindhoven", title: "AI for Mental Health" },
  { year: "2020", venue: "AI Agora, Delft", title: "AI for Wellbeing" },
  { year: "2017", venue: "Mind, Brain and Education, Erice, Sicily", title: "Large-Scale Learning Systems and the Neuroscience of Poverty" },
  { year: "2016", venue: "Latin American Cognitive and Neuroscience School, Argentina", title: "The Design Challenge of Improving Human Intelligence" },
  { year: "2013", venue: "Carnegie Institute of Technology, Pittsburgh", title: "The Future of Computer-Aided Learning" },
  { year: "2010", venue: "Games for Health, Boston", title: "An Anti-Malaria Game for a $10 Computer" },
  { year: "2009", venue: "PopTech, Camden, ME", title: "Open-Source Games for Global Education" },
  { year: "2009", venue: "O'Reilly ETech, San Jose", title: "Playpower! $12 Computers for Radically Affordable Computer-Aided Learning" },
];

const teaching = [
  "AI Research Methods (graduate)",
  "Research Methods (graduate & undergraduate, 6× total) — lecture: “Experimental Design for Designers”",
  "Interactive Technology Design (3×) — lectures: “Big History of HCI” and “Cognitive Ergonomics”",
  "Product Use, Understanding and Experience (3×) — lecture: “Resonance in Design”",
  "Entrepreneurial Thinking (5×) — lecture: “AI for Design Ideation”",
  "Exploring Interactions (3×); Understanding Humans (2×)",
];

const press = [
  { year: "2021", body: "Lifewire, Digital Trends, New Scientist, Inner Detail — coverage of EEG-based song-identification research" },
  { year: "2020", body: "News-Medical — “New Mobile Platform Can Address Another Serious Complication of COVID-19”" },
  { year: "2013", body: "Wall Street Journal — “New Approaches to Teaching Fractions”" },
  { year: "2011", body: "KQED MindShift — “Preventing the Summer Slide in Math Skills”" },
  { year: "2009", body: "Wired, NPR, CNN, MIT News — Playpower / $12 Computer coverage" },
];

const recognition = [
  "ACM CHI 2017 — Honorable Mention Award",
  "PopTech Social Innovation Fellow (2009)",
  "Ashoka Changemakers Innovation Award",
  "Recognition from Sesame Street, the White House, the MacArthur Foundation, and DARPA for educational-game work",
];

function Section({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="mb-12 scroll-mt-24">
      <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-medium text-text-primary mb-5 pb-2 border-b border-[var(--border-color)]">
        {title}
      </h2>
      {children}
    </section>
  );
}

function RowItem({ label, body }: { label: string; body: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-2">
      <span className="text-text-muted font-[family-name:var(--font-inter)] text-sm sm:w-28 shrink-0">
        {label}
      </span>
      <div className="text-text-secondary leading-relaxed">{body}</div>
    </div>
  );
}

export default function CVPage() {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-12 print:mb-8">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-medium text-text-primary mb-2">
            J. Derek Lomas, PhD
          </h1>
          <p className="text-text-secondary text-lg mb-4">
            Tenured Assistant Professor of Positive AI · TU Delft, Industrial
            Design Engineering, Design Aesthetics Section
          </p>
          <div className="text-text-muted text-sm space-y-1 font-[family-name:var(--font-inter)]">
            <p>
              <a href="mailto:j.d.lomas@tudelft.nl">j.d.lomas@tudelft.nl</a> ·{" "}
              <a href="mailto:dereklomas@gmail.com">dereklomas@gmail.com</a> · +31 6 3404 5748
            </p>
            <p>Mekelweg 2, 2628 CD Delft, Netherlands</p>
            <p>
              <a href="https://dereklomas.me">dereklomas.me</a> ·{" "}
              <a
                href="https://scholar.google.com/citations?user=hbPBXXoAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Scholar
              </a>{" "}
              ·{" "}
              <a
                href="https://orcid.org/0000-0003-2329-7831"
                target="_blank"
                rel="noopener noreferrer"
              >
                ORCID 0000-0003-2329-7831
              </a>
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 print:hidden">
            <a
              href="/cv-derek-lomas.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-[var(--border-color)] rounded-lg text-sm font-medium text-text-primary no-underline hover:border-rust transition-colors"
            >
              Download PDF
            </a>
            <a
              href="https://scholar.google.com/citations?user=hbPBXXoAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-[var(--border-color)] rounded-lg text-sm font-medium text-text-primary no-underline hover:border-rust transition-colors"
            >
              Full publication list →
            </a>
          </div>
        </header>

        <Section title="Research Interests" id="interests">
          <p className="text-text-secondary leading-relaxed">
            AI &amp; Experience Design, Wellbeing, Human-Centered Artificial
            Intelligence, Learning Engineering, Quantum Computing, EEG, Music
            Cognition, Future Studies, Data Science, Cybernetics,
            Human-Computer Interaction, EdTech, Game Design.
          </p>
        </Section>

        <Section title="Academic History" id="academic">
          <div className="space-y-1">
            {academic.map((row) => (
              <RowItem key={row.range} label={row.range} body={row.body} />
            ))}
          </div>
        </Section>

        <Section title="Entrepreneurial" id="entrepreneurial">
          <div className="space-y-5">
            {ventures.map((v) => (
              <div key={v.name}>
                <p className="text-text-primary font-medium">
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {v.name}
                  </a>
                  {v.years && (
                    <span className="text-text-muted font-normal">
                      {" "}
                      ({v.years})
                    </span>
                  )}
                </p>
                <p className="text-text-secondary leading-relaxed mt-1">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Selected Peer-Reviewed Publications" id="publications">
          <div className="space-y-4">
            {publications.map((p, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span className="text-text-muted font-[family-name:var(--font-inter)] text-sm sm:w-12 shrink-0">
                  {p.year}
                </span>
                <div className="text-text-secondary leading-relaxed">
                  {p.cite} <strong className="text-text-primary font-medium">{p.title}</strong>{" "}
                  <em>{p.venue}</em>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-text-muted mt-6">
            Full publication list — 75+ papers, 1,500+ citations — at{" "}
            <a
              href="https://scholar.google.com/citations?user=hbPBXXoAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Scholar
            </a>{" "}
            and <a href="/research">/research</a>.
          </p>
        </Section>

        <Section title="Funding" id="funding">
          <ul className="space-y-2 text-text-secondary leading-relaxed list-disc pl-5">
            {funding.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </Section>

        <Section title="Invited Talks (Selected)" id="talks">
          <div className="space-y-1">
            {talks.map((t, i) => (
              <RowItem
                key={i}
                label={t.year}
                body={
                  <>
                    <strong className="text-text-primary font-medium">
                      {t.venue}.
                    </strong>{" "}
                    {t.title}
                  </>
                }
              />
            ))}
          </div>
        </Section>

        <Section title="Teaching (TU Delft)" id="teaching">
          <ul className="space-y-2 text-text-secondary leading-relaxed list-disc pl-5">
            {teaching.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </Section>

        <Section title="Student Supervision" id="supervision">
          <p className="text-text-secondary leading-relaxed">
            25 graduated MSc theses, 6 currently supervised, plus PhDs (incl.
            Willem van der Maden, 2024 — <em>Designing Positive AI</em>;
            Caiseal Beardow, in progress).
          </p>
          <p className="text-text-secondary leading-relaxed mt-3">
            Notable entrepreneurial outcomes from supervised theses: Tim Smits
            (Unpluq, accepted to Techstars); Marco van der Woude (Breeze);
            Bryan Zaaijer (SenseGlove, leads UX); Ferkan Metin (Envision
            Glasses, leads UX); Jefta Harwig (Glimp, Philips Entrepreneur
            Award); Mihovil Karač (Lumies, Shark Tank).
          </p>
        </Section>

        <Section title="Selected Press" id="press">
          <div className="space-y-1">
            {press.map((p, i) => (
              <RowItem key={i} label={p.year} body={p.body} />
            ))}
          </div>
        </Section>

        <Section title="Recognition" id="recognition">
          <ul className="space-y-2 text-text-secondary leading-relaxed list-disc pl-5">
            {recognition.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
}
