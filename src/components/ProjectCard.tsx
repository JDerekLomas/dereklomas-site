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

const categoryBadge: Record<string, string> = {
  AI: "badge-violet",
  Education: "badge-sage",
  Books: "badge-gold",
  Research: "badge-slate",
  Music: "badge-rust",
  Esoteric: "badge-gold",
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const badgeClass = categoryBadge[project.category] || "badge-slate";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`card block no-underline group ${featured ? "md:col-span-2" : ""}`}
    >
      {/* Image */}
      {project.image ? (
        <div className="aspect-video bg-warm rounded-t-lg overflow-hidden mb-4 -mx-6 -mt-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="aspect-video bg-warm rounded-t-lg flex items-center justify-center mb-4 -mx-6 -mt-6 border-b border-light">
          <span className="font-display text-4xl text-faint opacity-30">
            {project.title.charAt(0)}
          </span>
        </div>
      )}

      {/* Category badge */}
      <span className={`badge ${badgeClass}`}>{project.category}</span>

      {/* Title */}
      <h3 className="mt-3 text-xl font-medium group-hover:text-rust transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-secondary text-sm leading-relaxed line-clamp-2">
        {project.description}
      </p>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs text-muted font-sans">
            #{tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
