import type { Metadata } from "next";
import Link from "next/link";
import LikeButton from "@/components/LikeButton";
import CusdisComments from "@/components/CusdisComments";

export const metadata: Metadata = {
  title: "To Create a Second Renaissance, Translate the First",
  description:
    "533,000 Latin editions were printed between 1450 and 1700. Fewer than 3% have ever been translated into English. We built the first comprehensive census to map the gap.",
  openGraph: {
    title: "To Create a Second Renaissance, Translate the First",
    description:
      "533,000 Latin editions. 3% translated. The first census of what we're missing.",
    type: "article",
    authors: ["Derek Lomas"],
  },
};

export default function SecondRenaissancePost() {
  return (
    <div className="min-h-screen py-16 px-6">
      <article className="max-w-2xl mx-auto">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted hover:text-rust transition-colors text-sm font-sans no-underline mb-10 block"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          All posts
        </Link>

        {/* Header */}
        <header className="mb-12">
          <p className="label mb-4">Essay</p>
          <h1 className="font-display text-3xl md:text-[42px] md:leading-[1.15] font-medium text-primary mb-6">
            To Create a Second Renaissance, Translate the First
          </h1>
          <p className="text-lg text-secondary leading-relaxed mb-4">
            533,000 Latin editions were printed between 1450 and 1700. Fewer than 3% have ever been translated into English. We built the first comprehensive census to map the gap.
          </p>
          <p className="font-sans text-sm text-muted">
            2 March 2026 &middot; 10 min read
          </p>
        </header>

        {/* Body */}
        <div className="prose">
          <p>
            The original Renaissance was, at its core, a translation project. Scholars in 14th-century
            Italy rediscovered ancient Greek and Roman texts that had been preserved in Arabic
            translations, retranslated them into Latin, and that flood of recovered knowledge reshaped
            European civilization. Copernicus read Ptolemy. Vesalius read Galen. Machiavelli read Livy.
            The ideas weren&rsquo;t new &mdash; they were ancient. But making them readable again changed
            everything.
          </p>

          <p>
            Here is the irony: the Renaissance produced an enormous body of scholarship &mdash; five
            centuries of scientific, philosophical, theological, and literary work, most of it written
            in Latin &mdash; and we have largely forgotten it. Not because the books were lost. They
            weren&rsquo;t. They sit in libraries across Europe, many of them digitized and freely
            accessible online. We forgot them because almost nobody reads Latin anymore.
          </p>

          <h2>The Numbers</h2>

          <p>
            The{" "}
            <a href="https://ustc.ac.uk" target="_blank" rel="noopener noreferrer">
              Universal Short Title Catalogue
            </a>{" "}
            (USTC) records 1.6 million editions printed in Europe between 1450 and 1700.
            Of those, <strong>533,307 are in Latin</strong> &mdash; 30.9% of all European printing.
          </p>

          <p>
            About 94,000 of these Latin editions have been digitized (18%). About 42,000 have searchable
            text via OCR or transcription (8%). And roughly 16,000 have any kind of English
            translation (3%).
          </p>

          <p>
            That leaves over <strong>500,000 Latin editions</strong> effectively inaccessible to
            English-speaking scholars, students, and the general public.
          </p>

          <p>
            To understand what that means, consider what those books contain. The USTC categorizes them:
          </p>

          <ul>
            <li>University publications: 147,859 (28%)</li>
            <li>Religious texts: 118,250 (22%)</li>
            <li>Jurisprudence: 35,243 (7%)</li>
            <li>Classical authors (reprints): 17,221</li>
            <li>Educational books: 14,775</li>
            <li>Poetry: 14,022</li>
            <li>Medical texts: 13,357</li>
            <li>Philosophy and morality: 9,228</li>
          </ul>

          <p>
            Half of Latin printing was university dissertations and religious works &mdash; precisely the
            categories with the lowest modern translation rates. The university dissertations alone
            represent nearly 150,000 works of early modern scholarship that have never been read in
            any modern language.
          </p>

          <h2>The Census</h2>

          <p>
            We built what we believe is the first comprehensive census of Latin-to-English translations:
            7,542 records spanning 1800 to 2025, compiled from the UNESCO Index Translationum, Open
            Library, Internet Archive, and over 50 publisher catalogs.
          </p>

          <p>
            Some findings:
          </p>

          <p>
            <strong>Translation output peaked in the 2000s</strong> with 1,345 translations published
            in that decade, then dropped sharply. The 2010s show roughly 400 translations in our
            scraped data, suggesting a significant decline.
          </p>

          <p>
            <strong>Geographic concentration is extreme.</strong> The United States produced 55% of all
            Latin-to-English translations. The UK produced 35%. Everyone else combined: less than 10%.
          </p>

          <p>
            <strong>The most-translated author is Pope John Paul II</strong> with 93 works &mdash; skewing the
            corpus toward modern religious texts. The most-translated classical work is Virgil&rsquo;s{" "}
            <em>Aeneid</em> with 34 editions. Ovid&rsquo;s <em>Metamorphoses</em> follows with 24.
          </p>

          <p>
            <strong>A handful of publishers do most of the work.</strong> Harvard&rsquo;s I Tatti
            Renaissance Library, the Dumbarton Oaks Medieval Library, the Loeb Classical Library, and
            Catholic University of America Press together account for a large share of scholarly
            translation. When these series slow down, translation output drops noticeably.
          </p>

          <h2>The Paradox of Latin</h2>

          <p>
            Latin&rsquo;s share of European publishing followed a remarkable trajectory. In the 1470s,
            about 80% of printed books were in Latin. By the 1520s, it had dropped to 45%, as
            vernacular publishing exploded. It stabilized around 47% through the 1600s, then collapsed
            to 20% by the 1690s.
          </p>

          <p>
            The paradox: as Latin faded from common use, it accumulated five centuries of scholarship.
            When it stopped being widely read, that scholarship froze in time. The books didn&rsquo;t
            disappear. They just became invisible.
          </p>

          <p>
            This isn&rsquo;t an abstract problem. Consider early modern medicine. The 13,000+
            medical texts in the USTC represent a detailed record of how European physicians thought
            about disease, treatment, anatomy, and pharmacology during a period of extraordinary
            intellectual ferment. Historians of medicine can access a handful of canonical
            translations &mdash; Vesalius, Harvey, Paracelsus &mdash; but the vast majority of this
            literature has never been read in English.
          </p>

          <p>
            The same is true for philosophy, jurisprudence, natural history, mathematics, astronomy,
            and theology. We have detailed studies of a few towering figures and almost no access to
            the broader intellectual context they worked within.
          </p>

          <h2>Why AI Changes the Equation</h2>

          <p>
            Human translation of a Latin scholarly text takes months to years per volume. A skilled
            translator might produce 5&ndash;10 pages of publication-quality translation per day. At that
            rate, translating even 1% of the untranslated Latin corpus would take centuries.
          </p>

          <p>
            AI translation is not publication-quality. But it doesn&rsquo;t need to be to change
            the equation. Research-grade AI translation &mdash; accurate enough for discovery, for
            following an argument, for identifying passages worth serious scholarly attention &mdash;
            can be produced at thousands of pages per hour for about $0.001 per page.
          </p>

          <p>
            The vision isn&rsquo;t to replace human translators. It&rsquo;s to build the index. Right
            now, a scholar studying early modern chemistry has no way to know what&rsquo;s in the
            thousands of untranslated Latin chemistry texts sitting in European libraries. A
            research-grade translation layer turns the entire corpus into a searchable resource.
            Instead of spending years finding the right text, the scholar spends hours &mdash; then
            invests deep translation effort where it actually matters.
          </p>

          <h2>The Translation Pipeline</h2>

          <p>
            The system we built at{" "}
            <a href="https://sourcelibrary.org" target="_blank" rel="noopener noreferrer">Source Library</a>{" "}
            is designed for expert-driven translation, not automation. The key insight:{" "}
            <strong>prompt refinement is where expertise lives.</strong>
          </p>

          <p>
            A subject matter expert reviews a sample translation, then refines the prompts for a
            specific text: specifying that <em>anima mundi</em> should be translated as &ldquo;world
            soul&rdquo; (not &ldquo;soul of the world&rdquo;), that the audience is graduate students
            in history of science, that the tone should be scholarly but accessible. These refined
            prompts are then applied to the entire book.
          </p>

          <p>
            Each page receives the previous page&rsquo;s OCR and translation as context, maintaining
            continuity across page breaks. A running glossary tracks every translated term throughout
            the book. The result is far more consistent than page-by-page translation without context.
          </p>

          <h2>The Infrastructure</h2>

          <p>
            The{" "}
            <a href="https://secondrenaissance.net" target="_blank" rel="noopener noreferrer">
              Second Renaissance
            </a>{" "}
            project maintains a Supabase backend with the full USTC dataset &mdash; 1.6 million edition
            records, 99.9% enriched with AI-generated metadata: English titles, detected languages,
            work types, subject tags, religious tradition, and classical source identification.
          </p>

          <p>
            This enrichment used Gemini 2.0 Flash and Claude Haiku to add structured metadata to each
            record: transforming bare bibliographic entries into searchable, categorizable, analyzable data.
            For the first time, it&rsquo;s possible to ask questions like &ldquo;how many commentaries on
            Aristotle were printed in Germany between 1550 and 1600?&rdquo; and get an answer.
          </p>

          <h2>The Window</h2>

          <p>
            There is urgency here, though it&rsquo;s the slow urgency of generational change. The
            scholars who can read Renaissance Latin, who understand the intellectual context of these
            texts, who can validate AI translations &mdash; they are retiring. Their students are fewer.
            The departments that trained them are shrinking.
          </p>

          <p>
            AI translation without scholarly validation is dangerous &mdash; plausible-sounding output
            that might be subtly wrong in ways only an expert would catch. The window where we have
            both the technology to translate at scale and the scholars to validate the output is
            narrowing.
          </p>

          <p>
            The original Renaissance translators worked under a similar constraint. The Greek texts
            they recovered were degraded, copied by scribes who didn&rsquo;t always understand what
            they were copying, sometimes corrupted across centuries of transmission. The translators
            had to be both linguists and scholars &mdash; able to reconstruct meaning from imperfect
            sources. Their work was imperfect too. But it was sufficient to change the world.
          </p>

          <p>
            We&rsquo;re proposing something similar: imperfect translations, made quickly, validated by
            experts, good enough to reveal what&rsquo;s been hiding in plain sight for 500 years. To
            create a second Renaissance, translate the first.
          </p>

          <p>
            The census data, the enriched USTC dataset, and the translation infrastructure are open
            at{" "}
            <a href="https://secondrenaissance.net" target="_blank" rel="noopener noreferrer">
              secondrenaissance.net
            </a>{" "}
            and{" "}
            <a href="https://sourcelibrary.org" target="_blank" rel="noopener noreferrer">
              sourcelibrary.org
            </a>
            .
          </p>
        </div>

        {/* Engagement */}
        <div style={{ marginTop: "3em", display: "flex", flexDirection: "column", alignItems: "center", gap: "1em" }}>
          <LikeButton slug="translating-the-renaissance" />
        </div>

        <CusdisComments
          pageId="translating-the-renaissance"
          pageUrl="https://derek-lomas.com/blog/translating-the-renaissance"
          pageTitle="To Create a Second Renaissance, Translate the First"
        />
      </article>
    </div>
  );
}
