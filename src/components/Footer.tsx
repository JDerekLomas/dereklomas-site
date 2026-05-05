import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-light mt-auto">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted font-sans">
          <span>&copy; {new Date().getFullYear()} Derek Lomas</span>
          <span aria-hidden="true">&middot;</span>
          <Link href="/press" className="hover:text-rust">
            Press
          </Link>
          <span aria-hidden="true">&middot;</span>
          <Link href="/about#contact" className="hover:text-rust">
            Contact
          </Link>
          <span aria-hidden="true">&middot;</span>
          <a
            href="https://scholar.google.com/citations?user=hbPBXXoAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rust"
          >
            Scholar
          </a>
          <span aria-hidden="true">&middot;</span>
          <a
            href="https://orcid.org/0000-0003-2329-7831"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rust"
          >
            ORCID
          </a>
          <span aria-hidden="true">&middot;</span>
          <a
            href="https://www.tudelft.nl/en/ide/about-ide/people/lomas-j-d"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rust"
          >
            TU Delft
          </a>
          <span aria-hidden="true">&middot;</span>
          <a
            href="https://www.linkedin.com/in/dereklomas/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rust"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
