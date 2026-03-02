import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — research collaborations, speaking, consulting.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <header className="mb-12">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-medium text-text-primary mb-4">
            Contact Me
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            I'm always happy to hear from fellow researchers, collaborators, and
            anyone interested in positive AI, education, or esoteric history.
          </p>
        </header>

        <div className="space-y-6">
          <a
            href="mailto:dereklomas@gmail.com"
            className="flex items-center gap-4 p-6 bg-card rounded-lg border border-[var(--border-color)] no-underline hover:border-rust transition-colors group"
          >
            <div className="w-10 h-10 bg-warm rounded-full flex items-center justify-center text-text-muted group-hover:text-rust transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div>
              <p className="font-medium text-text-primary">Email</p>
              <p className="text-sm text-text-secondary">dereklomas@gmail.com</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/dereklomas/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-card rounded-lg border border-[var(--border-color)] no-underline hover:border-rust transition-colors group"
          >
            <div className="w-10 h-10 bg-warm rounded-full flex items-center justify-center text-text-muted group-hover:text-rust transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </div>
            <div>
              <p className="font-medium text-text-primary">LinkedIn</p>
              <p className="text-sm text-text-secondary">linkedin.com/in/dereklomas</p>
            </div>
          </a>

          <a
            href="https://scholar.google.com/citations?user=hbPBXXoAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-card rounded-lg border border-[var(--border-color)] no-underline hover:border-rust transition-colors group"
          >
            <div className="w-10 h-10 bg-warm rounded-full flex items-center justify-center text-text-muted group-hover:text-rust transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            </div>
            <div>
              <p className="font-medium text-text-primary">Google Scholar</p>
              <p className="text-sm text-text-secondary">Publications and citations</p>
            </div>
          </a>

          <a
            href="https://orcid.org/0000-0003-2329-7831"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-card rounded-lg border border-[var(--border-color)] no-underline hover:border-rust transition-colors group"
          >
            <div className="w-10 h-10 bg-warm rounded-full flex items-center justify-center text-text-muted group-hover:text-rust transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-1.444-.881-3.722-3.916-3.722h-2.403z"/></svg>
            </div>
            <div>
              <p className="font-medium text-text-primary">ORCID</p>
              <p className="text-sm text-text-secondary">0000-0003-2329-7831</p>
            </div>
          </a>

          <a
            href="https://x.com/cognotron"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-card rounded-lg border border-[var(--border-color)] no-underline hover:border-rust transition-colors group"
          >
            <div className="w-10 h-10 bg-warm rounded-full flex items-center justify-center text-text-muted group-hover:text-rust transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
            </div>
            <div>
              <p className="font-medium text-text-primary">X / Twitter</p>
              <p className="text-sm text-text-secondary">@cognotron</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
