import Link from "next/link";
import Image from "next/image";
import { allProjects } from "@/data/projects";

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

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Introduction */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden shrink-0">
              <Image
                src="/images/headshot.png"
                alt="Derek Lomas"
                width={64}
                height={64}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-medium">Derek Lomas</h1>
          </div>
          <p className="text-lg text-secondary leading-relaxed">
            Tenured professor of{" "}
            <a
              href="https://www.tudelft.nl/en/ide/about-ide/people/lomas-j-d"
              target="_blank"
              rel="noopener noreferrer"
            >
              Positive AI at TU Delft
            </a>
            . I research the design of AI systems for wellbeing, build educational
            technology that has reached 5 million students, and{" "}
            <Link href="/projects/source-library">
              digitize rare historical manuscripts
            </Link>
            . PhD from Carnegie Mellon, BA from Yale.{" "}
            <a
              href="https://scholar.google.com/citations?user=hbPBXXoAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              75+ publications
            </a>
            , 1,500+ citations.
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
