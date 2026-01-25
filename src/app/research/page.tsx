import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Selected publications on AI for wellbeing, learning engineering, empirical aesthetics, and human-centered design.",
};

const publications = [
  {
    title: "Resonance as a Design Strategy for AI",
    venue: "CHI 2023",
    year: 2023,
    description:
      "Exploring how principles of resonance can guide the design of AI systems that harmonize with human cognition and emotion.",
  },
  {
    title: "Harmony in Design: The Role of Aesthetic Experience in Human-AI Interaction",
    venue: "DIS 2022",
    year: 2022,
    description:
      "Investigating how aesthetic qualities of interfaces influence user wellbeing and engagement with AI systems.",
  },
  {
    title: "Data-Driven Learning Engineering at Scale",
    venue: "Learning Engineering Summit",
    year: 2021,
    description:
      "Methods for using large-scale experiment data to optimize educational content and improve learning outcomes.",
  },
  {
    title: "Gamified Cognitive Assessment: Validation and Engagement",
    venue: "Journal of Medical Internet Research",
    year: 2020,
    description:
      "Demonstrating that game-based cognitive tests can be both valid and more engaging than traditional assessments.",
  },
  {
    title: "Designing for Positive AI: A Framework",
    venue: "AI & Society",
    year: 2019,
    description:
      "A framework for designing AI systems that actively promote human wellbeing rather than merely avoiding harm.",
  },
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-16">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-medium text-text-primary mb-4">
            Research
          </h1>
          <p className="text-xl text-text-secondary mb-6">
            Selected publications on AI for wellbeing, learning engineering, and
            human-centered design.
          </p>
          <a
            href="https://scholar.google.com/citations?user=hbPBXXoAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-rust font-[family-name:var(--font-inter)] text-sm font-medium hover:gap-3 transition-all"
          >
            View full publication list on Google Scholar
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z" />
            </svg>
          </a>
        </header>

        {/* Research areas */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-6">
            Research Areas
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 bg-warm rounded-lg border border-[var(--border-color)]">
              <h3 className="font-medium text-text-primary mb-2">
                AI for Wellbeing
              </h3>
              <p className="text-text-secondary text-sm">
                Designing AI systems that actively promote human flourishing,
                from educational tools to mental health applications.
              </p>
            </div>
            <div className="p-6 bg-warm rounded-lg border border-[var(--border-color)]">
              <h3 className="font-medium text-text-primary mb-2">
                Learning Engineering
              </h3>
              <p className="text-text-secondary text-sm">
                Using data-driven methods to optimize educational content and
                improve outcomes at scale.
              </p>
            </div>
            <div className="p-6 bg-warm rounded-lg border border-[var(--border-color)]">
              <h3 className="font-medium text-text-primary mb-2">
                Empirical Aesthetics
              </h3>
              <p className="text-text-secondary text-sm">
                Investigating how aesthetic experience influences interaction,
                engagement, and wellbeing.
              </p>
            </div>
            <div className="p-6 bg-warm rounded-lg border border-[var(--border-color)]">
              <h3 className="font-medium text-text-primary mb-2">
                Resonance in Design
              </h3>
              <p className="text-text-secondary text-sm">
                Exploring how principles of resonance and harmony can guide the
                design of human-AI systems.
              </p>
            </div>
          </div>
        </section>

        {/* Selected publications */}
        <section>
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-6">
            Selected Publications
          </h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <article
                key={index}
                className="p-6 bg-card rounded-lg border border-[var(--border-color)] hover:border-rust/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-text-primary">{pub.title}</h3>
                    <p className="text-text-muted text-sm mt-1">
                      {pub.venue} · {pub.year}
                    </p>
                    <p className="text-text-secondary text-sm mt-3">
                      {pub.description}
                    </p>
                  </div>
                  <span className="shrink-0 text-text-faint font-[family-name:var(--font-inter)] text-xs">
                    {pub.year}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
