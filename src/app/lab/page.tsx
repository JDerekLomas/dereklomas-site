import type { Metadata } from "next";
import Link from "next/link";

type Experiment = {
  slug: string;
  title: string;
  description: string;
  tech: string;
  status: string;
  live?: boolean;
  icon?: string;
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
    icon: "tree",
  },
  {
    slug: "skill-graph",
    title: "Math Skill Progression",
    description:
      "Skills organized by grade rows and domain columns. Node size reflects importance scores. Hover to see prerequisite and dependent connections.",
    tech: "D3.js",
    status: "Live",
    live: true,
    icon: "grid",
  },
  {
    slug: "rivers",
    title: "Rivers of Esoteric Life",
    description:
      "Animated Sankey diagram mapping 280 years of occult publishing (1469-1750). Nine traditions — from Hermetica to Rosicrucianism — flow through time as rivers of ink.",
    tech: "D3.js",
    status: "Live",
    live: true,
    icon: "rivers",
  },
  {
    slug: "ficino-network",
    title: "Ficino's Network",
    description:
      "Interactive force-directed network of Marsilio Ficino's intellectual connections and correspondences in Renaissance Florence.",
    tech: "D3.js",
    status: "Live",
    live: true,
    icon: "network",
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
                      <svg width="48" height="48" viewBox="0 0 48 48" className="mx-auto mb-2 text-[#8b7355]">
                        {experiment.icon === "tree" && (
                          <g fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="24" y1="40" x2="24" y2="20" />
                            <line x1="24" y1="20" x2="14" y2="10" />
                            <line x1="24" y1="20" x2="34" y2="10" />
                            <line x1="14" y1="10" x2="8" y2="6" />
                            <line x1="14" y1="10" x2="18" y2="4" />
                            <line x1="34" y1="10" x2="30" y2="4" />
                            <line x1="34" y1="10" x2="40" y2="6" />
                            <line x1="24" y1="28" x2="16" y2="20" />
                            <line x1="24" y1="28" x2="32" y2="20" />
                          </g>
                        )}
                        {experiment.icon === "grid" && (
                          <g fill="currentColor">
                            {[0,1,2,3,4].map(r => [0,1,2,3,4].map(c => (
                              <circle key={`${r}-${c}`} cx={8+c*8} cy={8+r*8} r={1.5 + Math.random()*2} opacity={0.4 + Math.random()*0.6} />
                            )))}
                            <line x1="8" y1="16" x2="24" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.3" fill="none" />
                            <line x1="16" y1="8" x2="32" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.3" fill="none" />
                            <line x1="24" y1="24" x2="40" y2="32" stroke="currentColor" strokeWidth="1" opacity="0.3" fill="none" />
                          </g>
                        )}
                        {experiment.icon === "rivers" && (
                          <g fill="none" strokeWidth="3" strokeLinecap="round">
                            <path d="M4 10 C16 8, 32 14, 44 10" stroke="#9b59b6" opacity="0.7" />
                            <path d="M4 18 C16 22, 32 14, 44 18" stroke="#f1c40f" opacity="0.7" />
                            <path d="M4 26 C16 24, 32 30, 44 26" stroke="#3498db" opacity="0.7" />
                            <path d="M4 34 C16 38, 32 32, 44 34" stroke="#e74c3c" opacity="0.7" />
                            <path d="M4 42 C16 40, 32 44, 44 42" stroke="#2ecc71" opacity="0.7" />
                          </g>
                        )}
                        {experiment.icon === "network" && (
                          <g>
                            <line x1="14" y1="14" x2="34" y2="14" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                            <line x1="24" y1="8" x2="24" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                            <line x1="14" y1="14" x2="24" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                            <line x1="34" y1="14" x2="24" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                            <line x1="24" y1="28" x2="12" y2="38" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                            <line x1="24" y1="28" x2="36" y2="38" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                            <circle cx="24" cy="8" r="4" fill="#9b59b6" opacity="0.8" />
                            <circle cx="14" cy="14" r="3" fill="#e74c3c" opacity="0.8" />
                            <circle cx="34" cy="14" r="3" fill="#3498db" opacity="0.8" />
                            <circle cx="24" cy="28" r="5" fill="#f1c40f" opacity="0.8" />
                            <circle cx="12" cy="38" r="3" fill="#2ecc71" opacity="0.8" />
                            <circle cx="36" cy="38" r="3" fill="#e67e22" opacity="0.8" />
                          </g>
                        )}
                      </svg>
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
