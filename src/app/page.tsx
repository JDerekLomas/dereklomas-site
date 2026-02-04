import Link from "next/link";
import { allProjects } from "@/data/projects";
import CyclingPortrait from "@/components/CyclingPortrait";

const recentNews = [
  {
    date: "2025",
    text: "Invited talk at UNESCO on AI and wellbeing in education",
  },
  {
    date: "2025",
    text: "Masterclass on designing AI systems for human flourishing",
  },
  {
    date: "2024",
    text: "Published research on resonance in interaction design",
  },
  {
    date: "2024",
    text: "Smart Paper reaches 5 million students across India",
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
            I research how to design AI systems that enhance human wellbeing and
            create resonant experiences. Professor of{" "}
            <a
              href="https://www.tudelft.nl/en/ide/about-ide/people/lomas-j-d"
              target="_blank"
              rel="noopener noreferrer"
            >
              Positive AI at TU Delft
            </a>
            , founder of three ed-tech companies reaching 5M+ students, and{" "}
            <Link href="/projects/source-library">
              collector of rare esoteric manuscripts
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Recent */}
      <section className="py-16 px-6 border-t border-light">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-medium mb-8">Recent</h2>
          <ul className="space-y-4">
            {recentNews.map((item, i) => (
              <li
                key={i}
                className="flex gap-4 items-baseline border-b border-light pb-4 last:border-b-0"
              >
                <span className="text-muted font-sans text-sm shrink-0">
                  {item.date}
                </span>
                <span className="text-secondary">{item.text}</span>
              </li>
            ))}
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
