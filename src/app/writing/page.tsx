import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays on AI, wellbeing, design, education, and the intersection of technology and human flourishing.",
};

export default function WritingPage() {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-16">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-medium text-text-primary mb-4">
            Writing
          </h1>
          <p className="text-xl text-text-secondary">
            Essays on AI, wellbeing, design, and the pursuit of human
            flourishing through technology.
          </p>
        </header>

        {/* Coming soon */}
        <div className="text-center py-24 bg-warm rounded-lg border border-[var(--border-color)]">
          <p className="font-[family-name:var(--font-cormorant)] text-2xl text-text-primary mb-4">
            Essays coming soon
          </p>
          <p className="text-text-secondary max-w-md mx-auto">
            I'm working on a collection of essays about resonance in design,
            AI-enhanced learning, and lessons from historical texts.
          </p>
        </div>
      </div>
    </div>
  );
}
