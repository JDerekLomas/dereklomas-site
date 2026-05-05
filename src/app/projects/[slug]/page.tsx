import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProjects, getProjectBySlug, getAllSlugs } from "@/data/projects";

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
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/projects"
          className="text-sm text-text-secondary hover:text-rust transition-colors no-underline font-[family-name:var(--font-inter)]"
        >
          &larr; All Projects
        </Link>

        {/* Video or Image */}
        {project.video ? (
          <div className="mt-6 aspect-video bg-black rounded-lg overflow-hidden border border-[var(--border-color)]">
            <iframe
              src={`https://www.youtube.com/embed/${project.video}`}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        ) : project.image ? (
          <div className="mt-6 aspect-video bg-warm rounded-lg overflow-hidden border border-[var(--border-color)]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : null}

        {/* Header */}
        <div className="mt-8">
          <span className={`badge ${badgeClass}`}>{project.category}</span>
          <h1 className="mt-3 font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-medium text-text-primary">
            {project.title}
          </h1>
        </div>

        {/* Description */}
        <div className="mt-8 text-text-secondary leading-relaxed text-lg">
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

        {/* External link */}
        {project.url && (
          <div className="mt-8">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-rust text-white font-[family-name:var(--font-inter)] text-sm font-medium rounded-lg hover:bg-rust-hover transition-colors no-underline"
            >
              Visit Project &rarr;
            </a>
          </div>
        )}

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-12 space-y-4">
            {project.gallery.map((src, i) => (
              <div
                key={src}
                className="bg-warm rounded-lg overflow-hidden border border-[var(--border-color)]"
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
