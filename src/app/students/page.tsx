import type { Metadata } from "next";
import Image from "next/image";
import allTheses from "@/data/student-theses.json";

type Thesis = {
  uuid: string;
  title: string;
  subtitle: string | null;
  description: string;
  year: number | null;
  degree: "MSc" | "BSc";
  student: string;
  derekRole: string;
  keywords: string[];
  repoUrl: string;
  image?: string;
  pdf?: string;
};

const thesesByYear: { year: number; items: Thesis[] }[] = (() => {
  const grouped = new Map<number, Thesis[]>();
  for (const t of allTheses as Thesis[]) {
    const y = t.year ?? 0;
    if (!grouped.has(y)) grouped.set(y, []);
    grouped.get(y)!.push(t);
  }
  return [...grouped.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([year, items]) => ({ year, items }));
})();

export const metadata: Metadata = {
  title: "Students",
  description:
    "Graduated students supervised by Derek Lomas at TU Delft, with links to their thesis reports in the TU Delft repository.",
};

const phdStudents = [
  {
    name: "Willem van der Maden",
    status: "PhD 2024",
    title:
      "Designing Positive AI: How optimizing for contextual wellbeing inspired a design method for artificial intelligence that promotes human flourishing",
    url: "https://repository.tudelft.nl/record/uuid:7a341d93-3a51-4df2-9d0a-fcade9008e63",
  },
  {
    name: "Caiseal Beardow",
    status: "PhD candidate",
    title: "Aesthetics and resonance in human-AI interaction",
    url: null,
  },
  {
    name: "Aleksander Buszydlik",
    status: "PhD candidate",
    title: "Co-supervised with Willem-Paul Brinkman and Gosia Migut",
    url: null,
  },
];

export default function StudentsPage() {
  const msc = (allTheses as Thesis[]).filter((t) => t.degree === "MSc").length;
  const bsc = (allTheses as Thesis[]).filter((t) => t.degree === "BSc").length;

  return (
    <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
      <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-medium text-text-primary mb-3">
        Students
      </h1>
      <p className="text-text-secondary mb-12 leading-relaxed">
        {allTheses.length} graduation theses supervised at TU Delft ({msc} MSc,{" "}
        {bsc} BSc), each linked to the full report in the{" "}
        <a
          href="https://repository.tudelft.nl"
          target="_blank"
          rel="noopener noreferrer"
          className="text-rust hover:underline"
        >
          TU Delft repository
        </a>
        .
      </p>

      {/* Doctoral students */}
      <section className="mb-14">
        <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-6">
          Doctoral Students
        </h2>
        <div className="space-y-4">
          {phdStudents.map((s) => (
            <div
              key={s.name}
              className="p-5 bg-white rounded-lg border border-[var(--border-color)]"
            >
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="badge badge-rust text-xs">{s.status}</span>
              </div>
              <p className="font-medium text-text-primary">{s.name}</p>
              {s.url ? (
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary mt-1 block hover:text-rust transition-colors"
                >
                  {s.title}
                </a>
              ) : (
                <p className="text-sm text-text-secondary mt-1">{s.title}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Graduation thesis archive */}
      <section>
        <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-6">
          Graduation Theses
        </h2>
        <div className="space-y-8">
          {thesesByYear.map(({ year, items }) => (
            <div key={year}>
              <h3 className="font-[family-name:var(--font-inter)] text-sm font-medium text-text-muted mb-4 sticky top-20 bg-[var(--bg-cream)] py-2">
                {year}{" "}
                <span className="text-text-muted">({items.length})</span>
              </h3>
              <div className="space-y-3 pl-4 border-l-2 border-[var(--border-color)]">
                {items.map((t) => (
                  <div key={t.uuid} className="pb-3 flex gap-3">
                    {t.image && (
                      <a
                        href={t.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0"
                      >
                        <Image
                          src={t.image}
                          alt={t.title}
                          width={128}
                          height={86}
                          className="w-32 h-[86px] object-cover rounded-md border border-[var(--border-color)]"
                        />
                      </a>
                    )}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span
                          className={`badge text-xs ${
                            t.degree === "MSc" ? "badge-violet" : "badge-sage"
                          }`}
                        >
                          {t.degree}
                        </span>
                        <span className="text-xs text-text-muted">
                          {t.derekRole}
                        </span>
                      </div>
                      <p className="text-text-primary text-sm font-medium">
                        {t.student}
                      </p>
                      <a
                        href={t.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary text-sm leading-snug hover:text-rust transition-colors no-underline block mt-0.5"
                      >
                        {t.title}
                        {t.subtitle && <span>: {t.subtitle}</span>}
                      </a>
                      {t.pdf && (
                        <a
                          href={t.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-rust text-xs hover:underline mt-1 inline-block"
                        >
                          Download PDF
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
