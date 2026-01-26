import Link from "next/link";
import { ProjectCard, type Project } from "@/components/ProjectCard";

// Featured projects data
const featuredProjects: Project[] = [
  {
    slug: "source-library",
    title: "Source Library",
    description:
      "Digitizing and translating rare Hermetic, alchemical, and mystical texts. 100+ books from the pre-1650 era, including works on kabbalah, neoplatonism, and natural magic.",
    category: "Esoteric",
    tags: ["Next.js", "MongoDB", "Gemini OCR", "Digital Humanities"],
    featured: true,
  },
  {
    slug: "playpowerlearn",
    title: "PlayPowerLearn",
    description:
      "AI-powered learning management system where AI generates standards-aligned content and humans curate. Inverting the traditional LMS paradigm.",
    category: "Education",
    tags: ["Next.js", "PostgreSQL", "Prisma", "AI"],
    featured: true,
  },
  {
    slug: "smart-paper",
    title: "Smart Paper",
    description:
      "Computer vision for paper-based learning, reaching 5 million students across India. Making AI-powered education accessible without devices.",
    category: "AI",
    tags: ["Computer Vision", "Education", "Scale"],
  },
  {
    slug: "steamquest",
    title: "STEAMQuest",
    description:
      "Educational 3D games with professional voice acting. Gamified learning through Three.js visualizations and immersive problem-solving.",
    category: "Education",
    tags: ["Three.js", "ElevenLabs", "Interactive"],
  },
  {
    slug: "babysees",
    title: "BabySees & FunBookies",
    description:
      "Visual vocabulary books for toddlers featuring complex imagery: fractals, honeycombs, nebulae, microscopic structures. Plus decodable readers for early literacy.",
    category: "Books",
    tags: ["AI Art", "Early Learning", "Science of Reading"],
  },
  {
    slug: "neuroux",
    title: "NeuroUX",
    description:
      "Gamified cognitive assessments for remote mental health research. Over a dozen games designed for psychological assessment.",
    category: "Research",
    tags: ["Cognitive Science", "Games", "Assessment"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-warm">
        {/* Content */}
        <div className="relative z-10 container-medium py-24 text-center">
          <div className="stagger-children">
            {/* Overline */}
            <p className="label mb-6">AI · Education · Digital Humanities</p>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-medium leading-tight">
              Enhancing wellbeing through
              <br />
              <span className="text-rust">intelligent design</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-8 text-xl md:text-2xl text-secondary leading-relaxed max-w-2xl mx-auto">
              I build AI systems for learning, digitize ancient manuscripts, and
              create tools that make human potential more accessible.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects" className="btn-primary">
                View Projects
              </Link>
              <Link href="/about" className="btn-secondary">
                About Me
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-muted"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24">
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
                featured={project.featured}
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
      <section className="py-24 bg-warm">
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

      {/* Stats/Credentials Section */}
      <section className="py-24">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-semibold text-rust">5M+</p>
              <p className="mt-2 text-secondary text-sm">Students reached</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-semibold text-rust">35+</p>
              <p className="mt-2 text-secondary text-sm">Educational games</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-semibold text-rust">100+</p>
              <p className="mt-2 text-secondary text-sm">Manuscripts digitized</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-semibold text-rust">100K+</p>
              <p className="mt-2 text-secondary text-sm">Learners in experiments</p>
            </div>
          </div>
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
