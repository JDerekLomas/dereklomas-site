import Link from "next/link";
import { allProjects } from "@/data/projects";
import CyclingPortrait from "@/components/CyclingPortrait";

type RecentItem = {
  date: string;
  text: string;
  href?: string;
  external?: boolean;
};

const recentNews: RecentItem[] = [
  {
    date: "May 2026",
    text: "New paper: Parametric Analysis of Feature-Specific Neural Coding During Music Imagery and Perception (IEEE)",
    href: "/research",
  },
  {
    date: "Apr 2026",
    text: "Source Library passes 12,347 books and 11,218 new English translations across 152 languages",
    href: "https://sourcelibrary.org",
    external: true,
  },
  {
    date: "2025",
    text: "Invited talk at Ozora Festival, Hungary: \"Vibes, Resonance and Harmony in the Age of AI\"",
  },
  {
    date: "Mar 2026",
    text: "Playpower Games launches free K–8 math platform with live Kahoot-style quizzes",
    href: "https://playpowergames.com",
    external: true,
  },
  {
    date: "Feb 2026",
    text: "Essay: To Create a Second Renaissance, Translate the First",
    href: "/blog/translating-the-renaissance",
  },
  {
    date: "2025",
    text: "Chapter: The Harmony of Opposites in Design and Philosophy (Bloomsbury)",
    href: "/research/harmony-of-opposites",
  },
];

const stats = [
  { value: "75+", label: "publications" },
  { value: "1,500+", label: "citations" },
  { value: "5M+", label: "students reached" },
  { value: "12,347", label: "rare texts digitized" },
  { value: "11,218", label: "new translations" },
];

const currentlyItems = [
  {
    title: "Positive AI at TU Delft",
    body: "Designing AI systems that promote wellbeing — supervising PhD work on aesthetic alignment, EEG-based meditation feedback, and AI-as-design-research-instrument.",
  },
  {
    title: "Source Library",
    body: "Expanding the open archive of pre-1700 Hermetic, alchemical, and natural-magic texts. Recent translations: Rithmomachia, the Philosopher's Stone literature, first-translated works.",
  },
  {
    title: "Writing & Lab",
    body: "Long-form essays on building with AI, plus interactive Three.js experiments — most recently a GPU ocean-current simulator and an animated Sankey of 280 years of occult publishing.",
  },
];

const selectedWork = allProjects
  .filter((p) => p.featured)
  .slice(0, 6)
  .map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    category: p.category,
  }));

// Aesthetic groupings - curated sets that work visually together
const portraitSets = {
  // Friendly illustrated style - starts with real photo, fades to illustrations
  illustrated: [
    "/images/headshot.png",
    "/images/ai-portraits/illustrated-1.jpg",
    "/images/ai-portraits/illustrated-2.jpg",
    "/images/ai-portraits/illustrated-3.jpg",
    "/images/ai-portraits/illustrated-4.jpg",
  ],
  // Classical/fine art - sophisticated, timeless
  classical: [
    "/images/ai-portraits/creative/marble-1.jpg",
    "/images/ai-portraits/creative/ethereal-1.jpg",
    "/images/ai-portraits/creative/impressionist-1.jpg",
    "/images/ai-portraits/creative/surreal-1.jpg",
  ],
  // Digital/futuristic - tech-forward, bold
  digital: [
    "/images/ai-portraits/creative/cyberpunk-1.jpg",
    "/images/ai-portraits/creative/cyberpunk-2.jpg",
    "/images/ai-portraits/creative/glitch-1.jpg",
    "/images/ai-portraits/creative/cosmic-1.jpg",
  ],
  // Retro/nostalgic - playful, memorable
  retro: [
    "/images/ai-portraits/creative/popart-1.jpg",
    "/images/ai-portraits/creative/astronaut-1.jpg",
    "/images/ai-portraits/creative/steampunk-1.jpg",
  ],
};

// Current selection for home page - using illustrated set for friendly vibe
const activePortraits = portraitSets.illustrated;

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Introduction */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <CyclingPortrait
              images={activePortraits}
              interval={1500}
              className="w-24 h-24 md:w-32 md:h-32 rounded-lg shrink-0"
            />
            <div>
              <p className="text-sm font-[family-name:var(--font-inter)] text-text-muted uppercase tracking-wide mb-2">
                Vibe Research Lab / TU Delft
              </p>
              <h1 className="text-2xl md:text-3xl font-medium text-text-primary leading-tight">
                AI & Experience Design
              </h1>
            </div>
          </div>
          <p className="text-lg text-secondary leading-relaxed">
            I design AI systems that enhance human wellbeing and
            create resonant experiences. Professor of{" "}
            <a
              href="https://www.tudelft.nl/en/ide/about-ide/people/lomas-j-d"
              target="_blank"
              rel="noopener noreferrer"
            >
              Positive AI at TU Delft
            </a>
            , founder of three ed-tech companies reaching 5M+ students, and
            builder of{" "}
            <Link href="/projects/source-library">
              Source Library
            </Link>
            {" "}— an open archive of 12,000+ rare historical texts with 11,000+
            new English translations.
          </p>

          {/* Stat strip */}
          <ul className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-x-4 gap-y-4 border-y border-light py-5">
            {stats.map((stat) => (
              <li key={stat.label} className="text-center sm:text-left">
                <div className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-medium text-text-primary leading-none">
                  {stat.value}
                </div>
                <div className="font-[family-name:var(--font-inter)] text-[11px] uppercase tracking-wider text-text-muted mt-1.5">
                  {stat.label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Currently */}
      <section className="py-16 px-6 border-t border-light bg-warm/30">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-baseline justify-between mb-8 gap-4 flex-wrap">
            <h2 className="text-2xl font-medium">Currently</h2>
            <span className="font-[family-name:var(--font-inter)] text-xs uppercase tracking-wider text-text-muted">
              May 2026
            </span>
          </div>
          <div className="space-y-6">
            {currentlyItems.map((item) => (
              <div key={item.title}>
                <h3 className="font-medium text-text-primary mb-1">
                  {item.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent */}
      <section className="py-16 px-6 border-t border-light">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-medium mb-8">Recent</h2>
          <ul className="space-y-4">
            {recentNews.map((item, i) => {
              const content = (
                <>
                  <span className="text-muted font-sans text-sm shrink-0 w-20">
                    {item.date}
                  </span>
                  <span className="text-secondary">{item.text}</span>
                </>
              );
              return (
                <li
                  key={i}
                  className="border-b border-light pb-4 last:border-b-0"
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      {...(item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="flex gap-4 items-baseline no-underline hover:text-rust transition-colors group"
                    >
                      {content}
                    </Link>
                  ) : (
                    <div className="flex gap-4 items-baseline">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-16 px-6 border-t border-light">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-medium mb-8">Selected Work</h2>
          <ul className="space-y-4">
            {selectedWork.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/projects/${item.slug}`}
                  className="block no-underline group"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-medium group-hover:text-rust transition-colors">
                      {item.title}
                    </span>
                    <span className="text-muted font-sans text-xs shrink-0">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-secondary text-sm mt-1 line-clamp-1">
                    {item.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              href="/projects"
              className="text-rust font-sans text-sm font-medium no-underline hover:underline"
            >
              View all projects &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
