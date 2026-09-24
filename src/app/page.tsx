import Link from "next/link";
import Image from "next/image";
import { allProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SOURCE_LIBRARY } from "@/data/stats";

type RecentItem = {
  date: string;
  text: string;
  href?: string;
  external?: boolean;
};

const recentNews: RecentItem[] = [
  {
    date: "Sep 2026",
    text: "The Cloud Layer: every cloud on Earth, from five weather satellites",
    href: "/projects/cloud-layer",
  },
  {
    date: "May 2026",
    text: "New paper: Parametric Analysis of Feature-Specific Neural Coding During Music Imagery and Perception (IEEE)",
    href: "/research",
  },
  {
    date: "Sep 2026",
    text: `Source Library passes ${SOURCE_LIBRARY.books} books and ${SOURCE_LIBRARY.translations} new English translations across ${SOURCE_LIBRARY.languages} languages`,
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
  { value: SOURCE_LIBRARY.books, label: "rare texts digitized" },
  { value: SOURCE_LIBRARY.translations, label: "new translations" },
];

const currentlyItems = [
  {
    title: "Positive AI at TU Delft",
    body: "Designing AI systems that promote wellbeing — supervising PhD work on aesthetic alignment, EEG-based meditation feedback, and AI-as-design-research-instrument.",
  },
  {
    title: "MakeMode",
    body: "Building a sovereign AI coding agent on European infrastructure, so anyone in a school, lab or company can turn an idea into working software.",
  },
  {
    title: "The Cloud Layer",
    body: "A globe of every cloud on Earth, as five weather satellites saw it, ten minutes at a time.",
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

// The homepage gallery: the newest work up front as a full-width feature,
// then a mosaic of projects chosen because their pictures are strong.
// Order matters — it maps onto the tile spans in `mosaicSpans` below.
const FEATURE_SLUG = "cloud-layer";
const MOSAIC_SLUGS = [
  "quantum-resonance",
  "source-library",
  "landshapes",
  "neuroaesthetic-resonance",
  "quantum-vibecoding",
  "envision-glasses",
  "smart-paper",
  "resonance-pod",
];

// 6-column grid on desktop: rows of 4+2, 2+4, then 3+3 twice.
const mosaicSpans = [
  "md:col-span-4",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-4",
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-3",
];

const bySlug = (slug: string) => {
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) throw new Error(`Homepage lists unknown project "${slug}"`);
  return project;
};

const feature = bySlug(FEATURE_SLUG);
const mosaic = MOSAIC_SLUGS.map(bySlug);

const label =
  "font-sans text-xs uppercase tracking-[0.16em] text-muted";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero: portrait + statement, after derek-lomas.com */}
      <section className="px-6 md:px-10 pt-10 md:pt-20 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[8/9] overflow-hidden bg-warm">
            <Image
              src="/images/headshot-bw.webp"
              alt="Derek Lomas"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover grayscale"
            />
          </div>
          <div>
            <h1 className="text-[2.1rem] leading-[1.12] sm:text-5xl md:text-[3.4rem] md:leading-[1.08] font-normal text-primary">
              <em className="italic">Derek Lomas</em> is a tenured professor of{" "}
              <span className="text-gradient whitespace-nowrap">Positive AI</span> at{" "}
              <a
                href="https://www.tudelft.nl/en/ide/about-ide/people/lomas-j-d"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[var(--border-medium)] decoration-2 underline-offset-[6px] hover:text-primary hover:decoration-[var(--text-primary)]"
              >
                TU Delft
              </a>
              , working on bridging Human-Centered Design and Artificial
              Intelligence.
            </h1>
            <p className="mt-8 text-lg text-secondary leading-relaxed max-w-xl">
              Founder of three ed-tech companies reaching 5M+ students, and
              builder of{" "}
              <Link href="/projects/source-library" className="underline decoration-[var(--border-medium)] underline-offset-4">
                Source Library
              </Link>
              {" "}— an open archive of {SOURCE_LIBRARY.books} historical
              texts with {SOURCE_LIBRARY.translations} new English translations.
            </p>
          </div>
        </div>

        {/* Stat strip */}
        <ul className="max-w-7xl mx-auto mt-16 md:mt-24 grid grid-cols-2 sm:grid-cols-5 gap-x-6 gap-y-6 border-t border-light pt-8">
          {stats.map((stat) => (
            <li key={stat.label}>
              <div className="font-display text-3xl md:text-4xl font-light text-primary leading-none">
                {stat.value}
              </div>
              <div className="font-sans text-[11px] uppercase tracking-[0.14em] text-muted mt-2">
                {stat.label}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Recent work: full-width feature, then the mosaic */}
      <section className="px-3 md:px-10 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between px-3 md:px-0 mb-6">
            <h2 className={label}>Recent work</h2>
            <Link href="/projects" className="font-sans text-sm text-secondary no-underline hover:text-primary">
              All projects &rarr;
            </Link>
          </div>

          <Link
            href={`/projects/${feature.slug}`}
            className="group relative block overflow-hidden bg-black no-underline aspect-[4/5] sm:aspect-[16/9]"
          >
            {feature.image && (
              <Image
                src={feature.image}
                alt=""
                fill
                priority
                sizes="(min-width: 1280px) 1280px, 100vw"
                className="object-cover transition duration-1000 ease-out group-hover:scale-[1.02]"
              />
            )}
            {feature.loop && (
              <video
                src={feature.loop}
                poster={feature.image}
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden transition duration-1000 ease-out group-hover:scale-[1.02]"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-12">
              <p className="font-sans text-xs uppercase tracking-[0.16em] text-white/60 mb-3">
                New · {feature.category}
              </p>
              <h3 className="text-4xl md:text-6xl font-medium text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-base md:text-xl text-white/75 max-w-2xl leading-snug">
                {feature.description}
              </p>
            </div>
          </Link>

          <div className="mt-3 grid grid-cols-1 md:grid-cols-6 gap-3">
            {mosaic.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                className={`aspect-[4/3] md:aspect-auto md:h-[440px] ${mosaicSpans[i]}`}
                sizes="(min-width: 768px) 66vw, 100vw"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Currently + Recent, side by side on wide screens */}
      <section className="px-6 md:px-10 py-20 md:py-28 border-t border-light">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <div className="flex items-baseline justify-between mb-10 gap-4">
              <h2 className={label}>Currently</h2>
              <span className="font-sans text-xs text-faint">September 2026</span>
            </div>
            <div className="space-y-8">
              {currentlyItems.map((item) => (
                <div key={item.title}>
                  <h3 className="text-2xl font-medium text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-secondary leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className={`${label} mb-10`}>News</h2>
            <ul>
              {recentNews.map((item, i) => {
                const content = (
                  <>
                    <span className="text-muted font-sans text-sm shrink-0 w-20">
                      {item.date}
                    </span>
                    <span className="text-secondary group-hover:text-primary transition-colors">
                      {item.text}
                    </span>
                  </>
                );
                return (
                  <li key={i} className="border-b border-light last:border-b-0">
                    {item.href ? (
                      <Link
                        href={item.href}
                        {...(item.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="flex gap-5 items-baseline py-4 no-underline group"
                      >
                        {content}
                      </Link>
                    ) : (
                      <div className="flex gap-5 items-baseline py-4">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
