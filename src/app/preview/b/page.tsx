import Link from "next/link";
import Image from "next/image";
import { allProjects } from "@/data/projects";

/**
 * Variant B: "Modern Journal" — Dario Amodei / Gwern inspired
 * Same warm palette but tighter, more structured.
 * Subtle card for bio, section dividers with labels,
 * slightly larger type, more "designed" feel while staying warm.
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

export default function PreviewB() {
  return (
    <div
      style={{
        fontFamily: "var(--font-newsreader), Georgia, serif",
        background: "#fff",
        color: "#1a1612",
        minHeight: "100vh",
      }}
    >
      {/* Nav — thin, understated */}
      <header
        style={{
          borderBottom: "1px solid #eee",
          padding: "0.9rem 1.5rem",
          position: "sticky",
          top: 0,
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(8px)",
          zIndex: 50,
        }}
      >
        <div style={{ maxWidth: "38rem", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/preview/b" style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none", color: "#1a1612", letterSpacing: "-0.01em" }}>
            Derek Lomas
          </Link>
          <nav style={{ display: "flex", gap: "1.5rem", fontFamily: "var(--font-inter), sans-serif", fontSize: "0.8rem" }}>
            {["Projects", "Research", "Writing", "Lab", "About"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} style={{ textDecoration: "none", color: "#666" }}>
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Introduction — card-style bio */}
      <section style={{ maxWidth: "38rem", margin: "0 auto", padding: "3rem 1.5rem 2rem" }}>
        <div style={{ background: "#faf8f5", border: "1px solid #eee", borderRadius: "12px", padding: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
              <Image src="/images/headshot.png" alt="Derek Lomas" width={56} height={56} style={{ width: "100%", height: "100%", objectFit: "cover" }} priority />
            </div>
            <div>
              <h1 style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "1.15rem", fontWeight: 600, margin: 0, letterSpacing: "-0.02em" }}>
                Derek Lomas
              </h1>
              <p style={{ margin: "0.15rem 0 0", fontSize: "0.8rem", color: "#888", fontFamily: "var(--font-inter), sans-serif" }}>
                Professor of Positive AI, TU Delft
              </p>
            </div>
          </div>

          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "#444", margin: 0 }}>
            I research the design of AI systems for human wellbeing, build educational technology that has reached five million students, and{" "}
            <Link href="/projects/source-library" style={{ color: "#2563eb", textDecorationColor: "rgba(37,99,235,0.3)" }}>
              digitize rare historical manuscripts
            </Link>
            . Previously at Carnegie Mellon (PhD), UC San Diego, and Yale.
          </p>

          <div style={{ display: "flex", gap: "1.25rem", marginTop: "1rem", fontFamily: "var(--font-inter), sans-serif", fontSize: "0.78rem" }}>
            <a href="https://scholar.google.com/citations?user=hbPBXXoAAAAJ" target="_blank" rel="noopener noreferrer" style={{ color: "#2563eb", textDecoration: "none" }}>
              Google Scholar
            </a>
            <a href="https://www.tudelft.nl/en/ide/about-ide/people/lomas-j-d" target="_blank" rel="noopener noreferrer" style={{ color: "#2563eb", textDecoration: "none" }}>
              TU Delft
            </a>
            <a href="https://www.linkedin.com/in/dereklomas/" target="_blank" rel="noopener noreferrer" style={{ color: "#2563eb", textDecoration: "none" }}>
              LinkedIn
            </a>
            <a href="mailto:dereklomas@gmail.com" style={{ color: "#2563eb", textDecoration: "none" }}>
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Recent — clean list with left border accent */}
      <section style={{ maxWidth: "38rem", margin: "0 auto", padding: "1.5rem 1.5rem 2rem" }}>
        <h2 style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.75rem", fontWeight: 600, color: "#999", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>
          Recent
        </h2>
        <div style={{ borderLeft: "2px solid #e8e4dc", paddingLeft: "1.25rem" }}>
          {recentNews.map((item, i) => (
            <div key={i} style={{ padding: "0.5rem 0", display: "flex", gap: "0.75rem", alignItems: "baseline" }}>
              <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.75rem", color: "#bbb", flexShrink: 0 }}>{item.date}</span>
              <span style={{ fontSize: "0.95rem", color: "#444" }}>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Work — compact table-like layout */}
      <section style={{ maxWidth: "38rem", margin: "0 auto", padding: "1.5rem 1.5rem 3rem" }}>
        <h2 style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.75rem", fontWeight: 600, color: "#999", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>
          Selected Work
        </h2>
        <div>
          {selectedWork.map((item, i) => (
            <Link
              key={item.slug}
              href={`/projects/${item.slug}`}
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: "1rem",
                padding: "0.7rem 0",
                borderBottom: i < selectedWork.length - 1 ? "1px solid #f0f0f0" : "none",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <span style={{ fontSize: "1rem", fontWeight: 500, color: "#1a1612" }}>
                {item.title}
              </span>
              <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.7rem", color: "#bbb", flexShrink: 0, textTransform: "uppercase", letterSpacing: "0.03em" }}>
                {item.category}
              </span>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: "1.25rem" }}>
          <Link href="/projects" style={{ color: "#2563eb", fontFamily: "var(--font-inter), sans-serif", fontSize: "0.8rem", textDecoration: "none" }}>
            All projects &rarr;
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #eee", padding: "1.5rem 1.5rem" }}>
        <div style={{ maxWidth: "38rem", margin: "0 auto", textAlign: "center", fontFamily: "var(--font-inter), sans-serif", fontSize: "0.75rem", color: "#bbb" }}>
          &copy; 2025 Derek Lomas
        </div>
      </footer>

      {/* Label */}
      <div style={{ position: "fixed", bottom: "1rem", right: "1rem", background: "#2563eb", color: "#fff", fontFamily: "var(--font-inter), sans-serif", fontSize: "0.7rem", fontWeight: 600, padding: "0.4rem 0.75rem", borderRadius: "4px", zIndex: 100 }}>
        VARIANT B: Modern Journal
      </div>
    </div>
  );
}
