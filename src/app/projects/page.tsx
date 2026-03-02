import type { Metadata } from "next";
import ProjectsFilter from "@/components/ProjectsFilter";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "From ancient manuscripts to AI-powered education — the full range of what technology can do for human flourishing.",
};

export default function ProjectsPage() {
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

        <ProjectsFilter />
      </div>
    </div>
  );
}
