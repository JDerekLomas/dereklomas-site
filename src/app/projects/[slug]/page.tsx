import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProjects, getProjectBySlug, getAllSlugs, loopPoster } from "@/data/projects";

const categoryBadge: Record<string, string> = {
  AI: "badge-violet",
  Education: "badge-sage",
  Design: "badge-rust",
  Books: "badge-gold",
  Research: "badge-slate",
  Music: "badge-rust",
  Esoteric: "badge-gold",
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.description,
    ...(project.image && {
      openGraph: {
        title: project.title,
        description: project.description,
        images: [{ url: project.image }],
      },
    }),
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const badgeClass = categoryBadge[project.category] || "badge-slate";

  return (
    <div className="min-h-screen pb-24">
      {/* Big picture first: video or image across the full content width */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-6 md:pt-10">
        <Link
          href="/projects"
          className="text-sm text-secondary hover:text-primary transition-colors no-underline font-sans"
        >
          &larr; All Projects
        </Link>

        {project.video ? (
          <div className="mt-6 aspect-video bg-black overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${project.video}`}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        ) : project.loop ? (
          <div className="mt-6 bg-black overflow-hidden">
            <video
              src={project.loop}
              poster={loopPoster(project.loop)}
              autoPlay
              muted
              loop
              playsInline
              aria-label={project.title}
              className="w-full max-h-[78vh] object-cover"
            />
            {project.loopCredit && (
              <p className="px-1 pt-2 pb-1 font-sans text-xs text-muted bg-cream">
                {project.loopCredit}
              </p>
            )}
          </div>
        ) : project.image ? (
          <div className="mt-6 bg-warm overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-[78vh] object-cover"
            />
          </div>
        ) : null}
      </div>

      <div className="max-w-3xl mx-auto px-6 pt-4">
        {/* Header */}
        <div className="mt-8">
          <span className={`badge ${badgeClass}`}>{project.category}</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-medium text-primary">
            {project.title}
          </h1>
        </div>

        {/* Description */}
        <div className="mt-8 text-secondary leading-relaxed text-lg md:text-xl">
          <p>{project.fullDescription || project.description}</p>
        </div>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-warm rounded-full text-xs text-text-muted font-[family-name:var(--font-inter)] border border-[var(--border-color)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        {(project.url || (project.relatedLinks && project.relatedLinks.length > 0)) && (
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--text-primary)] text-black font-sans text-sm font-medium hover:bg-white transition-colors no-underline"
              >
                Visit Project &rarr;
              </a>
            )}
            {project.relatedLinks?.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-rust hover:text-rust-hover transition-colors no-underline font-[family-name:var(--font-inter)]"
              >
                {link.label} &rarr;
              </Link>
            ))}
          </div>
        )}

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-12 space-y-4">
            {project.gallery.map((src, i) => (
              <div
                key={src}
                className="bg-warm overflow-hidden"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`${project.title} — image ${i + 1}`}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
