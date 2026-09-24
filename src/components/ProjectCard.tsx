import Link from "next/link";
import Image from "next/image";
import { loopPoster, type Project } from "@/data/projects";

export type { Project };

interface ProjectCardProps {
  project: Project;
  /** Extra classes for the tile box — grid spans, height or aspect ratio. */
  className?: string;
  /** Show the one-line description under the title. */
  showDescription?: boolean;
  /** Pass true for tiles above the fold so the image isn't lazy-loaded. */
  priority?: boolean;
  /** Hint for next/image; tiles in a 3-column grid need far less than a hero. */
  sizes?: string;
}

/**
 * Image-first project tile: the picture fills the box and the title sits on
 * a dark wash at the bottom, in the manner of the derek-lomas.com grid.
 */
export function ProjectCard({
  project,
  className = "aspect-[4/3]",
  showDescription = true,
  priority = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative block overflow-hidden bg-warm no-underline ${className}`}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt=""
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition duration-700 ease-out opacity-85 group-hover:opacity-100 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-7xl text-faint">
            {project.title.charAt(0)}
          </span>
        </div>
      )}

      {project.loop && (
        <video
          src={project.loop}
          poster={loopPoster(project.loop)}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden transition duration-700 ease-out group-hover:scale-[1.03]"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-white/60 mb-1.5">
          {project.category}
        </p>
        <h3 className="text-xl md:text-2xl font-medium text-white leading-tight">
          {project.title}
        </h3>
        {showDescription && (
          <p className="mt-2 text-sm text-white/70 leading-snug line-clamp-2 max-w-xl">
            {project.description}
          </p>
        )}
      </div>
    </Link>
  );
}
