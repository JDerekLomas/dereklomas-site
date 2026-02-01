import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Derek Lomas is a tenured professor of Positive AI at TU Delft, cognitive scientist, and entrepreneur working at the intersection of AI, education, and wellbeing.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-12">
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
        <section>
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-text-secondary mb-4">
            Interested in collaborating or have a question?{" "}
            <a
              href="mailto:j.d.lomas@tudelft.nl"
              className="text-rust font-medium"
            >
              Send me an email
            </a>{" "}
            or find me on{" "}
            <a
              href="https://scholar.google.com/citations?user=hbPBXXoAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rust font-medium"
            >
              Google Scholar
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/dereklomas/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rust font-medium"
            >
              LinkedIn
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
