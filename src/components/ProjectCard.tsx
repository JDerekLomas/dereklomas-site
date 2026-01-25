import Link from "next/link";

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image?: string;
  url?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const categoryColors: Record<string, string> = {
  AI: "bg-violet/10 text-violet",
  Education: "bg-sage/20 text-sage",
  Books: "bg-gold/20 text-gold",
  Research: "bg-slate/20 text-slate",
  Music: "bg-rust/10 text-rust",
  Esoteric: "bg-gold/20 text-gold",
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const categoryStyle = categoryColors[project.category] || "bg-text-muted/10 text-text-muted";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group block bg-card rounded-lg border border-[var(--border-color)] overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-rust/30 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Image placeholder */}
      {project.image ? (
        <div className="aspect-video bg-warm overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="aspect-video bg-gradient-to-br from-warm to-paper flex items-center justify-center">
          <span className="text-text-faint font-[family-name:var(--font-cormorant)] text-4xl opacity-30">
            {project.title.charAt(0)}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Category badge */}
        <span
          className={`inline-block px-2.5 py-1 rounded-full text-xs font-[family-name:var(--font-inter)] font-medium ${categoryStyle}`}
        >
          {project.category}
        </span>

        {/* Title */}
        <h3 className="mt-3 font-[family-name:var(--font-cormorant)] text-xl font-semibold text-text-primary group-hover:text-rust transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-text-secondary text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs text-text-muted font-[family-name:var(--font-inter)]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
