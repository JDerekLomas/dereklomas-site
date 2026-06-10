import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "Interactive visualizations and prototypes — where ideas get explored before they become products.",
};

const experiments = [
  {
    slug: "rivers",
    title: "Rivers of Esoteric Life",
    tech: "D3.js",
    description:
      "Animated Sankey diagram mapping 280 years of occult publishing (1469–1750). Nine traditions — from Hermetica to Rosicrucianism — flow through time as rivers of ink.",
  },
  {
    slug: "ficino-network",
    title: "Ficino's Network",
    tech: "D3.js",
    description:
      "Force-directed network of Marsilio Ficino's intellectual connections and correspondences in Renaissance Florence.",
  },
  {
    slug: "skill-ancestry",
    title: "Math Skill Ancestry Tree",
    tech: "D3.js",
    description:
      "Prerequisite chains between K–8 math skills, drawn as an ancestry tree. How foundational concepts connect across grade levels.",
  },
  {
    slug: "skill-graph",
    title: "Math Skill Progression",
    tech: "D3.js",
    description:
      "Skills organized by grade rows and domain columns. Node size reflects importance; hover to trace prerequisite and dependent connections.",
  },
  {
    slug: "claude-code",
    title: "Getting Started with Claude Code",
    tech: "Guide",
    description:
      "A practical guide from first install to custom skills, MCP servers, and advanced workflows.",
  },
];

export default function LabPage() {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <header className="mb-12">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-medium text-text-primary mb-4">
            Lab
          </h1>
          <p className="text-lg text-text-secondary">
            Interactive visualizations and prototypes — where I explore ideas
            before they become products.
          </p>
        </header>

        <ul className="space-y-8">
          {experiments.map((experiment) => (
            <li
              key={experiment.slug}
              className="border-b border-light pb-8 last:border-b-0"
            >
              <Link
                href={`/lab/${experiment.slug}`}
                className="block no-underline group"
              >
                <div className="flex items-baseline gap-3">
                  <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary group-hover:text-rust transition-colors">
                    {experiment.title}
                  </h2>
                  <span className="text-muted font-sans text-xs shrink-0">
                    {experiment.tech}
                  </span>
                </div>
                <p className="text-secondary text-sm leading-relaxed mt-2">
                  {experiment.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
