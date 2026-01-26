import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-light bg-warm mt-auto">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-medium mb-3">Derek Lomas</h3>
            <p className="text-secondary text-sm max-w-md leading-relaxed">
              Enhancing global wellbeing through artificial intelligence and
              humanistic design. Professor of Positive AI at TU Delft.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="label mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/projects" className="text-secondary">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/writing" className="text-secondary">
                  Writing
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-secondary">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/lab" className="text-secondary">
                  Lab
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="label mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://scholar.google.com/citations?user=hbPBXXoAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary"
                >
                  Google Scholar
                </a>
              </li>
              <li>
                <a
                  href="https://www.tudelft.nl/en/ide/about-ide/people/lomas-j-d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary"
                >
                  TU Delft
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/dereklomas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:j.d.lomas@tudelft.nl" className="text-secondary">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-light flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm">
            &copy; {new Date().getFullYear()} Derek Lomas. All rights reserved.
          </p>
          <p className="text-faint text-xs">
            Built with care for readers and learners.
          </p>
        </div>
      </div>
    </footer>
  );
}
