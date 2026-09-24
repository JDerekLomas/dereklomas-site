"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { allProjects } from "@/data/projects";

const categories = ["All", "AI", "Education", "Design", "Research", "Esoteric", "Books", "Music"];

export default function ProjectsFilter() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-sans transition-colors border ${
              activeCategory === category
                ? "bg-[var(--text-primary)] text-black border-transparent"
                : "text-secondary border-[var(--border-medium)] hover:text-primary hover:border-[var(--text-primary)]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredProjects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} priority={i < 3} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-text-muted">No projects in this category yet.</p>
        </div>
      )}
    </>
  );
}
