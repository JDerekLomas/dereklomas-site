import Link from "next/link";
import Image from "next/image";
import { allProjects } from "@/data/projects";

/**
 * Variant A: "Bookish Scholar" — Robin Sloan inspired
 * Generous serif typography, warm cream, print-like rhythm,
 * hot accent, decorative flourishes (rules, smallcaps labels)
 */

const recentNews = [
  { date: "2025", text: "Invited talk at UNESCO on AI and wellbeing in education" },
  { date: "2025", text: "Masterclass on designing AI systems for human flourishing" },
  { date: "2024", text: "Published research on resonance in interaction design" },
  { date: "2024", text: "Smart Paper reaches 5 million students across India" },
];

const selectedWork = allProjects
  .filter((p) => p.featured)
  .slice(0, 6);

export default function PreviewA() {
  return (
    <div
      style={{
        fontFamily: "var(--font-newsreader), Georgia, serif",
        background: "#fdfcf9",
        color: "#1a1612",
        minHeight: "100vh",
      }}
    >
      {/* Nav */}
      <header
        style={{
          borderBottom: "1px solid #e8e4dc",
          padding: "1.25rem 1.5rem",
          position: "sticky",
          top: 0,
          background: "rgba(253,252,249,0.97)",
          backdropFilter: "blur(8px)",
          zIndex: 50,
        }}
      >
        <div style={{ maxWidth: "40rem", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/preview/a" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.5rem", fontWeight: 500, textDecoration: "none", color: "#1a1612" }}>
            Derek Lomas
          </Link>
          <nav style={{ display: "flex", gap: "2rem", fontFamily: "var(--font-inter), sans-serif", fontSize: "0.8rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            {["Projects", "Research", "Writing", "Lab", "About"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} style={{ textDecoration: "none", color: "#888" }}>
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Introduction */}
      <section style={{ maxWidth: "40rem", margin: "0 auto", padding: "4rem 1.5rem 3rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "2rem" }}>
          <div style={{ width: 72, height: 72, borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "2px solid #e8e4dc" }}>
            <Image src="/images/headshot.png" alt="Derek Lomas" width={72} height={72} style={{ width: "100%", height: "100%", objectFit: "cover" }} priority />
          </div>
          <div>
            <h1 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "2.25rem", fontWeight: 400, margin: 0, lineHeight: 1.1 }}>
              Derek Lomas
            </h1>
            <p style={{ margin: "0.25rem 0 0", fontSize: "0.85rem", color: "#9e4a3a", fontFamily: "var(--font-inter), sans-serif", fontWeight: 500 }}>
              Positive AI &middot; TU Delft
            </p>
          </div>
        </div>

        <p style={{ fontSize: "1.2rem", lineHeight: 1.75, color: "#444" }}>
          I&rsquo;m a tenured professor of{" "}
          <a href="https://www.tudelft.nl/en/ide/about-ide/people/lomas-j-d" target="_blank" rel="noopener noreferrer" style={{ color: "#9e4a3a", textDecorationColor: "rgba(158,74,58,0.3)" }}>
            Positive AI at TU Delft
          </a>
          , where I research how to design AI systems that enhance human wellbeing. My work in educational technology has reached over five million students. I also{" "}
          <Link href="/projects/source-library" style={{ color: "#9e4a3a", textDecorationColor: "rgba(158,74,58,0.3)" }}>
            digitize rare historical manuscripts
          </Link>{" "}
          from the pre-modern era.
        </p>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#888", marginTop: "1rem" }}>
          PhD Carnegie Mellon &middot; MFA UC San Diego &middot; BA Yale &middot;{" "}
          <a href="https://scholar.google.com/citations?user=hbPBXXoAAAAJ" target="_blank" rel="noopener noreferrer" style={{ color: "#888" }}>
            75+ publications
          </a>
        </p>
      </section>

      {/* Decorative rule */}
      <div style={{ maxWidth: "40rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ textAlign: "center", color: "#d4cfc4", fontSize: "1rem", letterSpacing: "0.5em" }}>* &nbsp; * &nbsp; *</div>
      </div>

      {/* Recent */}
      <section style={{ maxWidth: "40rem", margin: "0 auto", padding: "2.5rem 1.5rem" }}>
        <h2 style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", marginBottom: "1.5rem" }}>
          Recent
        </h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {recentNews.map((item, i) => (
            <li key={i} style={{ display: "flex", gap: "1rem", alignItems: "baseline", padding: "0.75rem 0", borderBottom: i < recentNews.length - 1 ? "1px solid #f0ece4" : "none" }}>
              <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.8rem", color: "#aaa", flexShrink: 0, minWidth: "2.5rem" }}>{item.date}</span>
              <span style={{ color: "#444", fontSize: "1rem" }}>{item.text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Decorative rule */}
      <div style={{ maxWidth: "40rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ textAlign: "center", color: "#d4cfc4", fontSize: "1rem", letterSpacing: "0.5em" }}>* &nbsp; * &nbsp; *</div>
      </div>

      {/* Selected Work */}
      <section style={{ maxWidth: "40rem", margin: "0 auto", padding: "2.5rem 1.5rem 4rem" }}>
        <h2 style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", marginBottom: "1.5rem" }}>
          Selected Work
        </h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {selectedWork.map((item) => (
            <li key={item.slug} style={{ padding: "1rem 0", borderBottom: "1px solid #f0ece4" }}>
              <Link href={`/projects/${item.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem" }}>
                  <span style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.2rem", fontWeight: 500, color: "#1a1612" }}>
                    {item.title}
                  </span>
                  <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.7rem", color: "#aaa", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {item.category}
                  </span>
                </div>
                <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "0.35rem", lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }}>
                  {item.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: "1.5rem" }}>
          <Link href="/projects" style={{ color: "#9e4a3a", fontFamily: "var(--font-inter), sans-serif", fontSize: "0.8rem", fontWeight: 500, textDecoration: "none" }}>
            View all projects &rarr;
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #e8e4dc", padding: "2rem 1.5rem" }}>
        <div style={{ maxWidth: "40rem", margin: "0 auto", textAlign: "center", fontFamily: "var(--font-inter), sans-serif", fontSize: "0.8rem", color: "#aaa" }}>
          &copy; 2025 Derek Lomas &middot;{" "}
          <a href="https://scholar.google.com/citations?user=hbPBXXoAAAAJ" target="_blank" rel="noopener noreferrer" style={{ color: "#aaa" }}>Scholar</a> &middot;{" "}
          <a href="https://www.tudelft.nl/en/ide/about-ide/people/lomas-j-d" target="_blank" rel="noopener noreferrer" style={{ color: "#aaa" }}>TU Delft</a> &middot;{" "}
          <a href="https://www.linkedin.com/in/dereklomas/" target="_blank" rel="noopener noreferrer" style={{ color: "#aaa" }}>LinkedIn</a> &middot;{" "}
          <a href="mailto:dereklomas@gmail.com" style={{ color: "#aaa" }}>Email</a>
        </div>
      </footer>

      {/* Label */}
      <div style={{ position: "fixed", bottom: "1rem", right: "1rem", background: "#9e4a3a", color: "#fff", fontFamily: "var(--font-inter), sans-serif", fontSize: "0.7rem", fontWeight: 600, padding: "0.4rem 0.75rem", borderRadius: "4px", zIndex: 100 }}>
        VARIANT A: Bookish Scholar
      </div>
    </div>
  );
}
