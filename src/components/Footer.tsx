export function Footer() {
  return (
    <footer className="border-t border-light mt-auto">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted font-sans">
          <span>&copy; {new Date().getFullYear()} Derek Lomas</span>
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
          <span aria-hidden="true">&middot;</span>
          <a href="mailto:dereklomas@gmail.com" className="hover:text-rust">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
