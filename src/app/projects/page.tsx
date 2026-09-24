import type { Metadata } from "next";
import ProjectsFilter from "@/components/ProjectsFilter";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "From ancient manuscripts to AI-powered education — the full range of what technology can do for human flourishing.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-5xl md:text-7xl font-medium text-primary mb-6">
            Projects
          </h1>
          <p className="text-xl md:text-2xl text-secondary max-w-3xl leading-snug">
            From ancient manuscripts to AI-powered education—exploring the full
            range of what technology can do for human flourishing.
          </p>
        </header>

        <ProjectsFilter />
      </div>
    </div>
  );
}
