import type { Metadata } from "next";
import Link from "next/link";

type Experiment = {
  slug: string;
  title: string;
  description: string;
  tech: string;
  status: string;
  live?: boolean;
};

export const metadata: Metadata = {
  title: "Lab",
  description:
    "Interactive experiments, visualizations, and prototypes exploring the intersection of technology and human experience.",
};

const experiments = [
  {
    slug: "skill-ancestry",
    title: "Math Skill Ancestry Tree",
    description:
      "Interactive D3.js visualization mapping prerequisite chains between K-8 math skills. Explore how foundational concepts connect across grade levels.",
    tech: "D3.js",
    status: "Live",
    live: true,
  },
  {
    slug: "research-connections",
    title: "Research Connections",
    description:
      "Interactive D3.js visualization mapping the connections between research areas, collaborators, and publications.",
    tech: "D3.js",
    status: "Coming Soon",
  },
  {
    slug: "forest-architect",
    title: "Forest Architect",
    description:
      "A Three.js demo inspired by da Vinci's tree branching rules. Design and grow virtual trees with biologically-accurate branching.",
    tech: "Three.js",
    status: "Coming Soon",
  },
  {
    slug: "manuscript-viewer",
    title: "Manuscript Viewer",
    description:
      "Embedded Source Library widget for exploring digitized historical manuscripts with OCR and translation overlays.",
    tech: "Next.js",
    status: "Coming Soon",
  },
  {
    slug: "cognitive-playground",
    title: "Cognitive Playground",
    description:
      "Interactive demos of cognitive assessment games from NeuroUX research. Test attention, memory, and processing speed.",
    tech: "React",
    status: "Coming Soon",
  },
];

export default function LabPage() {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-16">
          <span className="inline-block px-3 py-1 bg-violet/10 text-violet text-xs font-[family-name:var(--font-inter)] font-medium rounded-full mb-4">
            Interactive Experiments
          </span>
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-medium text-text-primary mb-4">
            The Lab
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl">
            Interactive visualizations, 3D experiments, and prototypes. This is
            where I explore ideas before they become products.
          </p>
        </header>

        {/* Experiments grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {experiments.map((experiment) => {
            const Wrapper = experiment.live ? Link : 'div';
            const wrapperProps = experiment.live
              ? { href: `/lab/${experiment.slug}` }
              : {};

            return (
              <Wrapper
                key={experiment.slug}
                {...(wrapperProps as any)}
                className={`group p-6 bg-card rounded-lg border border-[var(--border-color)] hover:border-violet/30 transition-all no-underline ${experiment.live ? 'cursor-pointer' : ''}`}
              >
                {/* Preview area */}
                <div className={`aspect-video rounded-lg mb-6 flex items-center justify-center border border-[var(--border-color)] ${experiment.live ? 'bg-[#1a1510]' : 'bg-gradient-to-br from-warm to-paper'}`}>
                  {experiment.live ? (
                    <div className="text-center">
                      <div className="text-2xl mb-1">🌳</div>
                      <span className="text-[#8b7355] text-sm font-medium">Click to explore</span>
                    </div>
                  ) : (
                    <span className="text-text-faint text-sm">
                      {experiment.status}
                    </span>
                  )}
                </div>

                {/* Meta */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-violet/10 text-violet text-xs font-[family-name:var(--font-inter)] font-medium rounded">
                    {experiment.tech}
                  </span>
                  {experiment.live ? (
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-[family-name:var(--font-inter)] font-medium rounded">
                      Live
                    </span>
                  ) : (
                    <span className="text-text-faint text-xs">
                      {experiment.status}
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-text-primary group-hover:text-violet transition-colors">
                  {experiment.title}
                </h3>
                <p className="mt-2 text-text-secondary text-sm leading-relaxed">
                  {experiment.description}
                </p>
              </Wrapper>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center py-12 bg-warm rounded-lg border border-[var(--border-color)]">
          <p className="font-[family-name:var(--font-cormorant)] text-xl text-text-primary mb-3">
            More experiments brewing
          </p>
          <p className="text-text-secondary text-sm max-w-md mx-auto">
            The lab is always evolving. Check back soon for new interactive
            explorations, or reach out if you have ideas for collaboration.
          </p>
        </div>
      </div>
    </div>
  );
}
