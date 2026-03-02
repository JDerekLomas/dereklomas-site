import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LikeButton from "@/components/LikeButton";
import CusdisComments from "@/components/CusdisComments";

export const metadata: Metadata = {
  title: "Building a 1.67-Million-Page Digital Library with AI",
  description:
    "How I used Gemini, Lambda workers, and MongoDB to OCR and translate 4,430 books in 30 languages — for about $3,400 total.",
  openGraph: {
    title: "Building a 1.67-Million-Page Digital Library with AI",
    description:
      "OCR and translation at scale: 4,430 books, 30 languages, $3,400 in AI costs.",
    type: "article",
    authors: ["Derek Lomas"],
  },
};

export default function SourceLibraryPost() {
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
          <p className="label mb-4">Building in Public</p>
          <h1 className="font-display text-3xl md:text-[42px] md:leading-[1.15] font-medium text-primary mb-6">
            Building a 1.67-Million-Page Digital Library with AI
          </h1>
          <p className="text-lg text-secondary leading-relaxed mb-4">
            How I used Gemini, Lambda workers, and MongoDB to OCR and translate 4,430 books in 30 languages &mdash; for about $3,400 total.
          </p>
          <p className="font-sans text-sm text-muted">
            27 February 2026 &middot; 12 min read
          </p>
          <div className="mt-8 rounded-lg overflow-hidden">
            <Image src="/images/blog/source-library.jpg" alt="Splendor Solis illuminated manuscript — a page from Source Library's collection" width={800} height={400} className="w-full" />
          </div>
        </header>

        {/* Body */}
        <div className="prose">
          <p>
            There are roughly 533,000 Latin editions printed between 1450 and 1700 catalogued in the
            Universal Short Title Catalogue. About 18% have been digitized. About 8% have searchable text.
            About 3% have an English translation of any kind. The rest &mdash; hundreds of thousands of books
            containing five centuries of European thought &mdash; are effectively invisible to anyone
            who doesn&rsquo;t read Renaissance Latin.
          </p>

          <p>
            In December 2025, I started building{" "}
            <a href="https://sourcelibrary.org" target="_blank" rel="noopener noreferrer">Source Library</a>{" "}
            to change that. Less than three months later, the system has processed 4,430 books containing 1.67 million
            page images from 15 institutional archives, in over 30 languages. 467,000 pages have been
            OCR&rsquo;d. 285,000 pages have been translated into English. Total AI processing cost: roughly
            $3,400.
          </p>

          <p>
            This is the technical story of how that works.
          </p>

          <h2>The Pipeline</h2>

          <p>
            Every book flows through a nine-stage pipeline, each stage driven by an independent cron job.
            The stages are idempotent &mdash; you can re-run any stage without corrupting data &mdash; and each
            book transitions through 14 states from <code>queued</code> to <code>complete</code>, with
            automatic retry logic (three attempts before marking <code>failed</code>).
          </p>

          <p>The stages, in order:</p>

          <ol style={{ textIndent: 0, textAlign: "left", paddingLeft: "1.25em", lineHeight: "1.8" }}>
            <li><strong>Import</strong> &mdash; Pull metadata and page images from 13 different archive APIs (Internet Archive, Gallica, Bavarian State Library, Vatican, Bodleian, and others)</li>
            <li><strong>Archive</strong> &mdash; Cache page images to Vercel Blob storage</li>
            <li><strong>OCR</strong> &mdash; Gemini vision models extract text, detect images, classify page type</li>
            <li><strong>Metadata enrichment</strong> &mdash; Language detection, category assignment, descriptions</li>
            <li><strong>Translation</strong> &mdash; Gemini translates with context chaining from previous pages</li>
            <li><strong>Summary &amp; index</strong> &mdash; Book-level summaries, entity extraction (people, places, concepts)</li>
            <li><strong>Chapters</strong> &mdash; Structural division detection</li>
            <li><strong>Image extraction</strong> &mdash; Lambda workers identify and catalog illustrations with museum-quality metadata</li>
            <li><strong>Cross-referencing</strong> &mdash; 129,000+ entities linked across the collection</li>
          </ol>

          <p>
            The entire thing runs unattended. I check the dashboard a few times a week. Most of my
            time goes into adding new archive sources and refining prompts.
          </p>

          <h2>Why Gemini</h2>

          <p>
            OCR on Renaissance-era books is not a solved problem. These texts have long-s characters, ligatures,
            mixed Latin and Greek, blackletter typefaces, marginalia in different hands, and woodcut
            illustrations interrupting the text flow. Traditional OCR engines like Tesseract struggle badly.
          </p>

          <p>
            Vision-language models handle this surprisingly well. You give Gemini a page image and a prompt
            that says &ldquo;transcribe this text exactly as written, noting any images or diagrams,&rdquo;
            and it returns clean text with remarkably few errors. I maintain language-specific prompts &mdash;
            a standard prompt, a Latin prompt that handles Neo-Latin abbreviations, and a German prompt for
            Fraktur and Kurrent scripts.
          </p>

          <p>
            The cost structure made Gemini the clear choice. The Batch API runs at 50% of realtime pricing,
            bringing per-page OCR cost to about $0.001. Translation is similar. For a typical 300-page book,
            the full pipeline &mdash; OCR, translation, summary, image extraction &mdash; costs about $1.20.
          </p>

          <h2>The Dual Processing Architecture</h2>

          <p>
            The system runs two parallel processing paths. The <strong>realtime path</strong> uses AWS Lambda
            workers with SQS queues &mdash; three workers for OCR, translation, and image extraction. Pages
            process in seconds, at full Gemini API prices. This is for priority books or when someone&rsquo;s
            waiting on a specific title.
          </p>

          <p>
            The <strong>batch path</strong> uses Gemini&rsquo;s Batch API. I submit jobs of up to 500 pages,
            they process within 24 hours (usually much faster), and a cron job collects results every two
            hours. This is 50% cheaper and handles the bulk of throughput.
          </p>

          <p>
            For books longer than 500 pages, the batch system uses a parent-child architecture &mdash; the
            parent job splits the book into chunks, each child processes independently, and results are
            reassembled.
          </p>

          <h2>The MongoDB Connection Storm</h2>

          <p>
            The hardest scaling problem wasn&rsquo;t AI &mdash; it was the database. When 600+ Lambda workers
            are processing pages concurrently, each one opening a MongoDB Atlas connection, writing results,
            and closing the connection, you get connection storms that exhaust the cluster&rsquo;s connection
            pool.
          </p>

          <p>
            The fix was a dedicated <strong>Writer Lambda</strong>. Instead of each worker writing directly
            to MongoDB, they all send results to an SQS write queue. A single Writer Lambda (capped at 50
            concurrent executions) reads from the queue, batches writes in groups of 10, and handles all
            database operations. Connection count dropped from &ldquo;unbounded&rdquo; to &ldquo;50, max.&rdquo;
          </p>

          <h2>When the AI Hallucinates</h2>

          <p>
            With 467,000 OCR&rsquo;d pages, I&rsquo;ve catalogued the failure modes. Two are distinctive:
          </p>

          <p>
            <strong>Space Flood:</strong> The model emits legitimate headers, then fills the rest of the
            output with spaces and dashes. I&rsquo;ve seen outputs with 1.7 million characters of whitespace.
            The P99 for legitimate OCR output is about 9,000 characters &mdash; anything over 25,000 is almost
            certainly a hallucination.
          </p>

          <p>
            <strong>Thinking Leak:</strong> The model&rsquo;s internal reasoning loop bleeds into the output,
            creating repetitive self-talk cycles. This is rare but unmistakable when it happens.
          </p>

          <p>
            The mitigation is straightforward: realtime processing uses a fallback chain
            (gemini-2.5-flash, then gemini-2.0-flash, then gemini-1.5-flash) when safety filters trigger, and
            all hallucinations are logged to a dedicated <code>gemini_usage</code> collection for analysis.
            Every prompt version is immutable in the database with auto-incrementing IDs, so every page&rsquo;s
            output is traceable to the exact prompt that produced it.
          </p>

          <h2>Multi-Column Detection</h2>

          <p>
            Many historical books have two-page spreads scanned as a single image, or multi-column layouts
            within a single page. Getting the reading order right requires detecting the gutter position
            between columns.
          </p>

          <p>
            The system tries four approaches in sequence: dark line detection (physical gutter shadow),
            bright line detection (margin whitespace), center split (when geometry is obvious), and finally
            Gemini AI analysis (when the layout is genuinely ambiguous). Virtual crop coordinates on a 0&ndash;1000
            scale allow non-destructive splitting &mdash; the original page image is never modified.
          </p>

          <p>
            OCR prompts output <code>&lt;column-break/&gt;</code> markers to preserve reading order within
            multi-column pages. This sounds like a detail, but getting it wrong means sentences from column A
            interleave with sentences from column B, rendering the entire page nonsensical.
          </p>

          <h2>What&rsquo;s in the Library</h2>

          <p>
            The core collection comes from the{" "}
            <a href="https://embassyofthefreemind.com" target="_blank" rel="noopener noreferrer">
              Bibliotheca Philosophica Hermetica
            </a>{" "}
            (Embassy of the Free Mind) in Amsterdam &mdash; one of the world&rsquo;s most important collections
            of Hermetic, alchemical, Kabbalistic, and Rosicrucian literature. But the scope extends far beyond
            esotericism: Greek philosophy, Roman law, Islamic science, Chinese statecraft, Indian mathematics,
            Reformation theology, early modern astronomy and medicine.
          </p>

          <p>
            The collection spans 30+ languages. The top five: Latin (975 books), English (828), Chinese (533),
            German (524), and Greek (428). The oldest texts date to antiquity; the newest to the 18th century.
          </p>

          <p>
            71,000 illustrations have been catalogued with AI-generated descriptions. The image extraction
            pipeline identifies woodcuts, diagrams, tables, and decorative elements, tagging each with
            subject matter, style, and context.
          </p>

          <h2>The MCP Server</h2>

          <p>
            Source Library publishes an{" "}
            <a href="https://www.npmjs.com/package/@source-library/mcp-server" target="_blank" rel="noopener noreferrer">
              MCP server
            </a>{" "}
            (Model Context Protocol, v4.0) with seven tools that let any AI system search and read the
            library programmatically. You can search across titles, authors, translations, and OCR text;
            find what historical authors wrote about specific topics; read 50+ pages of text in a single
            call; and query the illustration catalogue.
          </p>

          <p>
            Every tool returns structured data with citation URLs &mdash; if an AI finds a passage, it can
            link directly to the page on sourcelibrary.org where that passage appears. The library isn&rsquo;t
            just a website; it&rsquo;s a knowledge layer that other systems can build on.
          </p>

          <h2>Cost and Scale</h2>

          <p>
            Some numbers that still surprise me:
          </p>

          <ul>
            <li>Total AI processing cost to date: <strong>~$3,400</strong> for 2M+ Gemini API calls</li>
            <li>Per-book pipeline cost (batch): <strong>~$1.20</strong> for a 300-page book</li>
            <li>At current rates, $40K in API budget would process roughly <strong>40,000 books</strong> through the full pipeline</li>
            <li>A single human translator might produce 5&ndash;10 pages of scholarly translation per day. This system processes thousands of pages per hour.</li>
          </ul>

          <p>
            The translations are not publication-grade. They&rsquo;re research-grade &mdash; accurate enough for
            discovery, for finding the passage you need, for understanding argument structure, for deciding
            whether a book warrants serious scholarly attention. The difference matters. This isn&rsquo;t
            replacing translators; it&rsquo;s building the index that tells translators where to look.
          </p>

          <h2>Why Now</h2>

          <p>
            Three conditions are simultaneously true right now, and may not be for long:
          </p>

          <ol style={{ textIndent: 0, textAlign: "left", paddingLeft: "1.25em", lineHeight: "1.8" }}>
            <li>AI translation is good enough for research-grade discovery</li>
            <li>Source material is digitized &mdash; 400,000+ pre-modern texts have been photographed by archives worldwide</li>
            <li>Scholarly expertise still exists &mdash; but specialists in Latin, Syriac, Classical Chinese are retiring faster than they&rsquo;re being replaced</li>
          </ol>

          <p>
            The window where we have both the technology to process these texts and the scholars to validate
            the output is narrowing. Source Library is a bet that building the infrastructure now, while both
            exist, is worth the effort.
          </p>

          <h2>How It Was Built</h2>

          <p>
            Source Library was built almost entirely through Claude Code sessions. The prompts read
            like a project diary:
          </p>

          <div
            style={{
              background: "var(--bg-dark)",
              color: "#4ade80",
              fontFamily: "var(--font-inter), monospace",
              padding: "1.5em",
              borderRadius: "8px",
              fontSize: "13px",
              lineHeight: "2",
              margin: "2em 0",
            }}
          >
            <span style={{ color: "#78716c" }}># December 2025</span><br />
            &gt; I want to get to 200 books as quickly as possible... at least to &gt;50% translated<br />
            <br />
            <span style={{ color: "#78716c" }}># January 2026 — scaling</span><br />
            &gt; I think a queue based write approach works, for high load data inputs.<br />
            &gt; Things are pushed in a queue, and controllable number of workers insert<br />
            <br />
            <span style={{ color: "#78716c" }}># February 2026 — quality</span><br />
            &gt; check on the translation progress<br />
            &gt; I don&rsquo;t want gemini batch! only fifo with lambda<br />
            &gt; check for other broken images<br />
            &gt; the /letter to patrick collison needs more fact checking...
          </div>

          <p>
            That queue-based write prompt led directly to the Writer Lambda architecture. The
            &ldquo;check for broken images&rdquo; prompt uncovered the archive fallback chain.
            Most of the system emerged this way &mdash; a problem noticed, a prompt typed,
            a solution built in the same session.
          </p>

          <p>
            You can watch a compressed replay of a Source Library building session at{" "}
            <a href="https://codevibing.com/session/sourcelibrary" target="_blank" rel="noopener noreferrer">
              codevibing.com
            </a>
            .
          </p>

          <p>
            The library is live at{" "}
            <a href="https://sourcelibrary.org" target="_blank" rel="noopener noreferrer">
              sourcelibrary.org
            </a>
            . Everything is open. The MCP server is on npm. If you read Latin, we could use your eyes.
          </p>
        </div>

        {/* Engagement */}
        <div style={{ marginTop: "3em", display: "flex", flexDirection: "column", alignItems: "center", gap: "1em" }}>
          <LikeButton slug="building-a-digital-library-with-ai" />
        </div>

        <CusdisComments
          pageId="building-a-digital-library-with-ai"
          pageUrl="https://derek-lomas.com/blog/building-a-digital-library-with-ai"
          pageTitle="Building a 1.67-Million-Page Digital Library with AI"
        />
      </article>
    </div>
  );
}
