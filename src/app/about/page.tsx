import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Cognitive scientist, AI researcher, and entrepreneur. Tenured professor of Positive AI at TU Delft.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-medium text-text-primary mb-6">
            About Me
          </h1>
        </header>

        {/* Photo */}
        <div className="mb-12 flex justify-center">
          <div className="w-full max-w-md aspect-[4/3] rounded-lg overflow-hidden border border-[var(--border-color)]">
            <Image
              src="/images/headshot.png"
              alt="Derek Lomas"
              width={600}
              height={450}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Bio narrative */}
        <div className="space-y-6 text-text-secondary leading-relaxed mb-16">
          <p>
            I'm a tenured professor of{" "}
            <strong className="text-text-primary">Positive AI</strong> at{" "}
            <a
              href="https://www.tudelft.nl/en/ide/about-ide/people/lomas-j-d"
              target="_blank"
              rel="noopener noreferrer"
            >
              TU Delft's Human-Centered Design department
            </a>
            , where I research the design of AI systems to maximize wellbeing
            and the role of resonance in interaction design.
          </p>

          <p>
            My academic journey spans cognitive science at Yale (BA '03), social
            design at UC San Diego (MFA '09), and human-computer interaction at
            Carnegie Mellon (PhD '14). Along the way, I've founded three
            companies—
            <strong className="text-text-primary">Playpower Labs</strong>{" "}
            (AI-based educational software),{" "}
            <strong className="text-text-primary">NeuroUX</strong> (gamified
            cognitive assessments), and{" "}
            <strong className="text-text-primary">Smart Paper</strong> (computer
            vision for paper-based learning).
          </p>

          <p>
            My work has reached over 5 million students, primarily through Smart
            Paper's deployment across India. I've designed 35+ educational games
            and a dozen psychological assessment tools, winning recognition from
            Sesame Street, the White House, the MacArthur Foundation, and DARPA.
          </p>

          <p>
            Beyond my professional work, I'm passionate about{" "}
            <Link href="/projects/source-library">
              digitizing rare historical texts
            </Link>
            —particularly Hermetic, alchemical, and mystical manuscripts from
            the pre-modern era. I believe these texts contain valuable wisdom
            about the nature of consciousness, creativity, and human
            flourishing.
          </p>

          <p>
            I live in the Netherlands with my wife and four children. Originally
            from Ohio.
          </p>
        </div>

        {/* Education */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-6">
            Education
          </h2>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
              <span className="text-text-muted font-[family-name:var(--font-inter)] text-sm w-20">
                2014
              </span>
              <div>
                <p className="text-text-primary font-medium">
                  PhD, Human-Computer Interaction
                </p>
                <p className="text-text-secondary text-sm">
                  Carnegie Mellon University
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
              <span className="text-text-muted font-[family-name:var(--font-inter)] text-sm w-20">
                2009
              </span>
              <div>
                <p className="text-text-primary font-medium">
                  MFA, Visual Arts (Social Design)
                </p>
                <p className="text-text-secondary text-sm">UC San Diego</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
              <span className="text-text-muted font-[family-name:var(--font-inter)] text-sm w-20">
                2003
              </span>
              <div>
                <p className="text-text-primary font-medium">
                  BA, Cognitive Science
                </p>
                <p className="text-text-secondary text-sm">Yale University</p>
              </div>
            </div>
          </div>
        </section>

        {/* Get in Touch */}
        <section id="contact" className="scroll-mt-24">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-text-secondary mb-6">
            I'm always happy to hear from fellow researchers, collaborators, and
            anyone interested in positive AI, education, or esoteric history.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <a
              href="mailto:dereklomas@gmail.com"
              className="flex items-center gap-3 p-4 bg-card rounded-lg border border-[var(--border-color)] no-underline hover:border-rust transition-colors group"
            >
              <div className="w-9 h-9 bg-warm rounded-full flex items-center justify-center text-text-muted group-hover:text-rust transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div className="min-w-0">
                <p className="font-medium text-text-primary text-sm">Email</p>
                <p className="text-xs text-text-secondary truncate">dereklomas@gmail.com</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/dereklomas/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-card rounded-lg border border-[var(--border-color)] no-underline hover:border-rust transition-colors group"
            >
              <div className="w-9 h-9 bg-warm rounded-full flex items-center justify-center text-text-muted group-hover:text-rust transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
              <div className="min-w-0">
                <p className="font-medium text-text-primary text-sm">LinkedIn</p>
                <p className="text-xs text-text-secondary truncate">linkedin.com/in/dereklomas</p>
              </div>
            </a>
            <a
              href="https://scholar.google.com/citations?user=hbPBXXoAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-card rounded-lg border border-[var(--border-color)] no-underline hover:border-rust transition-colors group"
            >
              <div className="w-9 h-9 bg-warm rounded-full flex items-center justify-center text-text-muted group-hover:text-rust transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <div className="min-w-0">
                <p className="font-medium text-text-primary text-sm">Google Scholar</p>
                <p className="text-xs text-text-secondary truncate">Publications & citations</p>
              </div>
            </a>
            <a
              href="https://orcid.org/0000-0003-2329-7831"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-card rounded-lg border border-[var(--border-color)] no-underline hover:border-rust transition-colors group"
            >
              <div className="w-9 h-9 bg-warm rounded-full flex items-center justify-center text-text-muted group-hover:text-rust transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-1.444-.881-3.722-3.916-3.722h-2.403z"/></svg>
              </div>
              <div className="min-w-0">
                <p className="font-medium text-text-primary text-sm">ORCID</p>
                <p className="text-xs text-text-secondary truncate">0000-0003-2329-7831</p>
              </div>
            </a>
            <a
              href="https://x.com/cognotron"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-card rounded-lg border border-[var(--border-color)] no-underline hover:border-rust transition-colors group"
            >
              <div className="w-9 h-9 bg-warm rounded-full flex items-center justify-center text-text-muted group-hover:text-rust transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
              </div>
              <div className="min-w-0">
                <p className="font-medium text-text-primary text-sm">X / Twitter</p>
                <p className="text-xs text-text-secondary truncate">@cognotron</p>
              </div>
            </a>
            <Link
              href="/press"
              className="flex items-center gap-3 p-4 bg-card rounded-lg border border-[var(--border-color)] no-underline hover:border-rust transition-colors group"
            >
              <div className="w-9 h-9 bg-warm rounded-full flex items-center justify-center text-text-muted group-hover:text-rust transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8z"/></svg>
              </div>
              <div className="min-w-0">
                <p className="font-medium text-text-primary text-sm">Press &amp; Talks</p>
                <p className="text-xs text-text-secondary truncate">Media coverage and speaking</p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
