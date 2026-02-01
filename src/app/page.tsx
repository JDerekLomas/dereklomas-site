import Link from "next/link";
import Image from "next/image";
import { ProjectCard } from "@/components/ProjectCard";
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

const featuredProjects = allProjects.filter((p) => p.featured);

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-warm">
        <div className="container-medium">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-[var(--border-color)]">
                <Image
                  src="/images/headshot.png"
                  alt="Derek Lomas"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Bio */}
            <div>
              <h1 className="text-4xl md:text-5xl font-medium leading-tight">
                Derek Lomas
              </h1>
              <p className="mt-2 text-rust font-sans text-sm font-medium">
                TU Delft · Positive AI
              </p>
              <p className="mt-6 text-lg text-secondary leading-relaxed">
                I build AI systems for learning, digitize ancient manuscripts,
                and create tools that make human potential more accessible.
                Tenured professor of Positive AI, cognitive scientist, and
                serial entrepreneur.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/projects" className="btn-primary">
                  View Projects
                </Link>
                <Link href="/about" className="btn-secondary">
                  About Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-24">
        <div className="container-medium">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">Recent</h2>
          <ul className="space-y-4">
            {recentNews.map((item, i) => (
              <li
                key={i}
                className="flex gap-4 items-baseline border-b border-[var(--border-color)] pb-4"
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

      {/* Featured Projects Section */}
      <section className="py-24 bg-warm">
        <div className="container-wide">
          {/* Section header */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium">Featured Work</h2>
              <p className="mt-2 text-secondary">
                From ancient manuscripts to AI-powered education
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden sm:flex items-center gap-2 text-rust font-sans text-sm font-medium no-underline hover:gap-3 transition-all"
            >
              View all projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z" />
              </svg>
            </Link>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}
          </div>

          {/* Mobile link */}
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-rust font-sans text-sm font-medium no-underline"
            >
              View all projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24">
        <div className="container-narrow text-center">
          <blockquote className="text-2xl md:text-3xl leading-relaxed italic">
            "My personal mission is to enhance global wellbeing through
            artificial intelligence and humanistic design."
          </blockquote>
          <p className="mt-6 text-secondary font-sans text-sm">
            From research on resonance in interaction design to AI systems that
            measurably improve student motivation and learning.
          </p>
        </div>
      </section>

      {/* Lab Preview Section */}
      <section className="py-24 bg-warm">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge badge-violet mb-4">Interactive Experiments</span>
              <h2 className="text-3xl md:text-4xl font-medium">The Lab</h2>
              <p className="mt-4 text-secondary leading-relaxed">
                Explore interactive visualizations, 3D experiments, and
                prototypes. From D3.js data stories to Three.js immersive
                experiences.
              </p>
              <Link
                href="/lab"
                className="inline-flex items-center gap-2 mt-6 text-rust font-sans text-sm font-medium no-underline hover:gap-3 transition-all"
              >
                Enter the lab
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z" />
                </svg>
              </Link>
            </div>
            <div className="card-warm aspect-video flex items-center justify-center">
              <p className="text-muted font-sans text-sm">
                Interactive demo coming soon
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
