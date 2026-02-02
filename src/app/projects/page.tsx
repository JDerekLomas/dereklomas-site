"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { allProjects } from "@/data/projects";

const categories = ["All", "AI", "Education", "Design", "Research", "Esoteric", "Books", "Music"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-medium text-text-primary mb-4">
            Projects
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl">
            From ancient manuscripts to AI-powered education—exploring the full
            range of what technology can do for human flourishing.
          </p>
        </header>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-[family-name:var(--font-inter)] font-medium transition-colors ${
                activeCategory === category
                  ? "bg-rust text-white"
                  : "bg-warm text-text-secondary hover:text-rust border border-[var(--border-color)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-muted">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
