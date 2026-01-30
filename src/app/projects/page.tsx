"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { ProjectCard, type Project } from "@/components/ProjectCard";

const allProjects: Project[] = [
  // Personal projects
  {
    slug: "source-library",
    title: "Source Library",
    description:
      "Digitizing and translating rare Hermetic, alchemical, and mystical texts. 100+ books from the pre-1650 era, including works on kabbalah, neoplatonism, and natural magic.",
    category: "Esoteric",
    tags: ["Next.js", "MongoDB", "Gemini OCR", "Digital Humanities"],
    image: "/images/projects/source-library.jpg",
    featured: true,
  },
  {
    slug: "playpowerlearn",
    title: "PlayPowerLearn",
    description:
      "AI-powered learning management system where AI generates standards-aligned content and humans curate. Inverting the traditional LMS paradigm.",
    category: "Education",
    tags: ["Next.js", "PostgreSQL", "Prisma", "AI"],
    image: "/images/projects/playpowerlearn.png",
    featured: true,
  },
  {
    slug: "smart-paper",
    title: "Smart Paper",
    description:
      "Computer vision tool integrating paper-based and digital learning. Reached 5 million students with 6 longitudinal assessments across India.",
    category: "AI",
    tags: ["Computer Vision", "Education", "Scale"],
    image: "/images/projects/smart-paper.jpg",
  },
  {
    slug: "steamquest",
    title: "STEAMQuest",
    description:
      "Educational 3D games with professional voice acting. Gamified learning through Three.js visualizations and immersive problem-solving.",
    category: "Education",
    tags: ["Three.js", "ElevenLabs", "Interactive"],
    image: "/images/projects/steamquest.png",
  },
  {
    slug: "babysees",
    title: "BabySees & FunBookies",
    description:
      "Visual vocabulary books for toddlers featuring complex imagery: fractals, honeycombs, nebulae, microscopic structures. Plus decodable readers for early literacy.",
    category: "Books",
    tags: ["AI Art", "Early Learning", "Science of Reading"],
    image: "/images/projects/babysees.jpg",
  },
  {
    slug: "neuroux",
    title: "NeuroUX",
    description:
      "Platform enabling researchers to collect large-scale cognitive and psychological performance data via mobile technologies. Over 15 published studies.",
    category: "Research",
    tags: ["Cognitive Science", "Games", "Assessment"],
    image: "/images/projects/neuroux-phone.png",
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
  // TU Delft projects
  {
    slug: "my-wellness-check",
    title: "My Wellness Check",
    description:
      "System for measuring and improving community wellbeing. Deployed assessments across all 30,000 students and staff at TU Delft over two years during COVID-19.",
    category: "Research",
    tags: ["Wellbeing", "COVID-19", "TU Delft"],
    image: "/images/projects/my-wellness-check.png",
    url: "https://mywellnesscheck.org",
  },
  {
    slug: "resonance-pod",
    title: "Resonance Pod",
    description:
      "Enclosed environment using warm pulsing lights, soft vibrations, and music to reset breathing rhythms. Exhibited at Dutch Design Week 2020.",
    category: "Design",
    tags: ["Haptics", "Wellbeing", "Installation"],
    image: "/images/projects/resonance-pod.png",
  },
  {
    slug: "feel-the-vibe",
    title: "Feel the Vibe",
    description:
      "Interactive installation exploring vibro-tactile and acoustic stimuli as aesthetic drivers. Published at EuroHaptics 2020.",
    category: "Design",
    tags: ["Haptics", "Aesthetics", "Installation"],
    image: "/images/projects/feel-the-vibe.png",
  },
  {
    slug: "escape-the-smart-city",
    title: "Escape the Smart City",
    description:
      "Critical pervasive game raising awareness about AI-surveillance in smart cities. Players experience how AI perceives the world. Published at CHI 2019.",
    category: "Design",
    tags: ["AI Ethics", "Games", "Critical Design"],
    image: "/images/projects/escape-smart-city.jpeg",
  },
  {
    slug: "envision-glasses",
    title: "Envision Glasses",
    description:
      "AI-powered smartglasses for the visually impaired with text recognition, face recognition, and remote sighted-person assist. Student: Ferkan Metin.",
    category: "Design",
    tags: ["Accessibility", "AI", "Product Design"],
    image: "/images/projects/envision-glasses.png",
    url: "https://www.letsenvision.com/glasses",
  },
  {
    slug: "landshapes",
    title: "LANDSHAPES",
    description:
      "AI-generated landscape art installation for climate exhibitions. Morphing photorealistic landscapes that never existed, sparking wonder about climate change.",
    category: "Design",
    tags: ["GANs", "Climate", "Google AI"],
    image: "/images/projects/landshapes.jpg",
  },
  {
    slug: "upgrade",
    title: "UpGrade",
    description:
      "Open source A/B testing platform for education software, supported by the Bill & Melinda Gates Foundation and Schmidt Futures.",
    category: "Education",
    tags: ["A/B Testing", "Open Source", "EdTech"],
    image: "/images/projects/upgrade.png",
    url: "https://www.upgradeplatform.org",
  },
  {
    slug: "design-space-cards",
    title: "Design Space Cards",
    description:
      "Physical card deck for generating game design concepts by sampling a design space. Published in CHI PLAY / PACM HCI.",
    category: "Design",
    tags: ["Game Design", "Research", "Tools"],
    image: "/images/projects/design-space-cards.png",
  },
  {
    slug: "playpower-labs",
    title: "Playpower Labs",
    description:
      "EdTech company providing data science and software development for digital education. Products include Math Planet (1M+ downloads) and Numbaland.",
    category: "Education",
    tags: ["EdTech", "Data Science", "Games"],
    image: "/images/projects/playpower-labs.jpg",
    url: "https://www.playpowerlabs.com",
  },
  {
    slug: "playpower-8bit",
    title: "PlayPower",
    description:
      "Educational initiative leveraging $12 8-bit TV-computers for game-based learning. Won 2009 MacArthur Foundation Digital Media and Learning Grant.",
    category: "Education",
    tags: ["8-bit", "MacArthur", "India"],
    image: "/images/projects/playpower-8bit.png",
  },
];

const categories = ["All", "AI", "Education", "Design", "Research", "Esoteric", "Books", "Music"];

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
