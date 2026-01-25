import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-warm mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold mb-3">
              Derek Lomas
            </h3>
            <p className="text-text-secondary text-sm max-w-md leading-relaxed">
              Enhancing global wellbeing through artificial intelligence and
              humanistic design. Professor of Positive AI at TU Delft.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-[family-name:var(--font-inter)] text-sm font-medium text-text-muted uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/projects" className="text-text-secondary hover:text-rust">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/writing" className="text-text-secondary hover:text-rust">
                  Writing
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-text-secondary hover:text-rust">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/lab" className="text-text-secondary hover:text-rust">
                  Lab
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-[family-name:var(--font-inter)] text-sm font-medium text-text-muted uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://scholar.google.com/citations?user=hbPBXXoAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-rust"
                >
                  Google Scholar
                </a>
              </li>
              <li>
                <a
                  href="https://www.tudelft.nl/en/ide/about-ide/people/lomas-j-d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-rust"
                >
                  TU Delft
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/dereklomas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-rust"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:j.d.lomas@tudelft.nl"
                  className="text-text-secondary hover:text-rust"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} Derek Lomas. All rights reserved.
          </p>
          <p className="text-text-faint text-xs">
            Built with care for readers and learners.
          </p>
        </div>
      </div>
    </footer>
  );
}
