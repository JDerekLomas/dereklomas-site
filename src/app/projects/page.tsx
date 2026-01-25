"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { ProjectCard, type Project } from "@/components/ProjectCard";

const allProjects: Project[] = [
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
  {
    slug: "soma",
    title: "Soma",
    description:
      "Multi-provider AI assistant platform. Create customizable personal AI assistants with Claude, ChatGPT, Gemini, and more.",
    category: "AI",
    tags: ["React 19", "Supabase", "Multi-model"],
  },
  {
    slug: "xwhysi",
    title: "XWHYSI",
    description:
      "Milo Lomas music portfolio with 30 AI-generated psychedelic video backgrounds. Electronic music meets generative art.",
    category: "Music",
    tags: ["SoundCloud", "Video Generation", "Creative"],
  },
];

const categories = ["All", "AI", "Education", "Esoteric", "Books", "Research", "Music"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-12">
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
