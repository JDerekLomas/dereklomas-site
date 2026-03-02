import type { Metadata } from "next";
import Link from "next/link";
import LikeButton from "@/components/LikeButton";
import CusdisComments from "@/components/CusdisComments";

export const metadata: Metadata = {
  title: "Making Card Decks with AI: From Prompt to Print",
  description:
    "I built a pipeline that turns a JSON file of card concepts into AI-generated artwork, web-rendered card layouts, and print-ready files for physical production. Four decks so far.",
  openGraph: {
    title: "Making Card Decks with AI: From Prompt to Print",
    description:
      "AI-generated artwork, Puppeteer rendering, and print-ready output. The full pipeline for physical card decks.",
    type: "article",
    authors: ["Derek Lomas"],
  },
};

export default function CardDecksPost() {
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
          <p className="label mb-4">Creative Tech</p>
          <h1 className="font-display text-3xl md:text-[42px] md:leading-[1.15] font-medium text-primary mb-6">
            Making Card Decks with AI: From Prompt to Print
          </h1>
          <p className="text-lg text-secondary leading-relaxed mb-4">
            A pipeline that turns card concepts into AI-generated artwork, web-rendered layouts, and print-ready files. Four decks and counting.
          </p>
          <p className="font-sans text-sm text-muted">
            2 March 2026 &middot; 9 min read
          </p>
        </header>

        {/* Body */}
        <div className="prose">
          <p>
            I design card decks for workshops. Futures thinking, relationship therapy, alchemical
            symbolism, plant intelligence &mdash; the topics vary, but the format is the same: a deck
            of 40&ndash;70 cards that participants draw, combine, and interpret. Cards are an extraordinarily
            effective design medium. They&rsquo;re tangible, combinatorial, and they force you to distill
            an idea down to a title, an image, and a sentence or two.
          </p>

          <p>
            The problem is making them. A professional card deck with custom artwork used to take months
            and cost thousands of dollars in illustration. So I built a pipeline that takes a JSON file of
            card concepts and produces, in about an hour, a complete deck with AI-generated artwork,
            web-rendered card layouts, and print-ready files you can send directly to a manufacturer.
          </p>

          <p>
            Four decks so far: a 72-card Futures Oracle, a 39-card Alchemy Deck, a 63-card relationships
            therapy game, and a 40-card Plant Intelligence oracle. Here&rsquo;s how the pipeline works.
          </p>

          <h2>Step 1: Card Data</h2>

          <p>
            Every deck starts as a JSON file. Each card has an ID, a name, a short description, and
            optional fields depending on the deck type &mdash; symbols, keywords, positive and negative
            interpretations, modifier values. The structure is simple enough that Claude Code can generate
            an entire deck from a conversation about the theme.
          </p>

          <p>
            The Alchemy Deck, for example, has seven categories: Stages (nigredo, albedo, citrinitas,
            rubedo), Operations (calcination, dissolution, separation), Elements, Principles, Vessels,
            Sages, and Arcana. Each card carries a quote from a historical alchemical text &mdash; sourced
            from{" "}
            <a href="https://sourcelibrary.org" target="_blank" rel="noopener noreferrer">Source Library</a>{" "}
            &mdash; and a reflective question. The Nigredo card: &ldquo;The beginning of our work is in
            the blackness&rdquo; (Sendivogius). Question: &ldquo;What needs to die? What shadow must
            you face?&rdquo;
          </p>

          <p>
            The MFT (marriage and family therapy) deck is structured differently: Life Domains, Gottman&rsquo;s
            Four Horsemen, Antipatterns, Positive Patterns, Fundamental Needs, and Mode Cards. Each card
            has conflict scenarios for couples to practice with. The format is flexible enough to handle
            oracle decks, therapeutic games, and speculative design tools from the same codebase.
          </p>

          <h2>Step 2: AI Artwork</h2>

          <p>
            A Node.js script reads the card data and generates one image per card using Replicate&rsquo;s
            Flux 1.1 Pro model (about $0.04 per image). Each card gets a detailed prompt combining a
            consistent deck-wide style guide with card-specific visual elements.
          </p>

          <p>
            The base style for the Futures Oracle:
          </p>

          <div
            style={{
              background: "var(--bg-dark)",
              color: "#4ade80",
              fontFamily: "var(--font-inter), monospace",
              padding: "1.5em",
              borderRadius: "8px",
              fontSize: "13px",
              lineHeight: "1.6",
              margin: "2em 0",
            }}
          >
            Cinematic digital art, dramatic lighting, evocative atmosphere,<br />
            rich saturated colors, mysterious mood, oracle card aesthetic,<br />
            no text, no letters, no words, no watermarks.
          </div>

          <p>
            Each card appends its specific imagery. The Plant Intelligence deck shows how detailed
            these prompts get: &ldquo;intricate botanical tarot card showing mycelial network beneath
            forest soil, golden threadlike connections between tree roots, sacred geometry of
            interconnected filaments, art nouveau border with neural-like patterns, mystical scientific
            diagram.&rdquo;
          </p>

          <p>
            Getting consistency across 40&ndash;70 cards is the hardest part. The style prompt does most of
            the work, but you still get outliers &mdash; cards that feel like they&rsquo;re from a different
            deck. I regenerate about 10&ndash;15% of images. At $0.04 each, the cost of iteration is trivial.
          </p>

          <p>
            For some decks I use MuleRouter&rsquo;s Wan2.6 model as an alternative. The async polling
            workflow is different (fire-and-forget task creation, then poll for completion) but the output
            quality is comparable.
          </p>

          <h2>Step 3: Card Rendering</h2>

          <p>
            This is where Puppeteer earns its keep. A rendering script launches headless Chrome, loads
            an HTML template for each card, injects the artwork and text, and takes a screenshot. Two
            output paths:
          </p>

          <ul>
            <li><strong>Web cards:</strong> 900 &times; 1500 pixels, 72 DPI, rounded corners (40px radius). For digital display and online galleries.</li>
            <li><strong>Print cards:</strong> 1050 &times; 1750 pixels, 300 DPI, square corners with 4mm bleed on all sides. Die-cut by the printer.</li>
          </ul>

          <p>
            Each category gets its own color scheme and gradient background, defined in a
            <code>categoryStyles</code> object. The Alchemy Deck&rsquo;s Nigredo cards get dark purple
            gradients (#1f1a2e to #0f0a1a). The MFT deck&rsquo;s Money &amp; Finances domain gets
            forest green (#2d5a27). These accents are subtle but they make cards from the same category
            visually cohesive when fanned out on a table.
          </p>

          <p>
            Typography matters more than you&rsquo;d expect. Card titles need to be large enough to read
            at arm&rsquo;s length. Subtitles in italics. Context text sized for close reading. The
            rendering template handles all of this with CSS &mdash; cards are effectively tiny web pages.
          </p>

          <h2>Step 4: Print Production</h2>

          <p>
            Print-ready files are packaged as a ZIP and uploaded to a manufacturer. The specs
            matter:
          </p>

          <ul>
            <li>Physical card size: 89 &times; 148mm (with 4mm bleed)</li>
            <li>Trim size: ~80 &times; 140mm after cutting</li>
            <li>Color: RGB PNGs &mdash; printers handle CMYK conversion</li>
            <li>Corners: square (the printer die-cuts rounded corners)</li>
          </ul>

          <p>
            For small runs (1&ndash;25 decks), MakePlayingCards.com is cheapest: about $30&ndash;40 for
            a single deck, dropping to $15&ndash;20 at 10+. They accept tarot-size cards
            (2.75&Prime; &times; 4.75&Prime;) and the upload process is straightforward. For medium runs,
            DigiDecks in the Netherlands does 20&ndash;25 deck minimums with custom formats. For 100+, Acelion
            offers professional quality with custom packaging.
          </p>

          <p>
            The total cost for a new deck, from concept to a physical prototype in your hands: about
            $35 in AI generation + $30&ndash;40 for a single printed copy. Under $80 for a completely
            custom card deck with unique artwork on every card.
          </p>

          <h2>The Interactive Layer</h2>

          <p>
            The Futures Oracle deck goes further. It has a live web interface where you draw cards and
            Claude generates a scenario based on your draw. You pull an Arc card (what kind of change),
            a Terrain card (what domain), an Object card (what thing is changing), and a Wellbeing card
            (what&rsquo;s the human impact). Claude weaves them into a 2&ndash;3 paragraph future scenario
            with a title, a grounded character scene, and second-order implications. Then MuleRouter
            generates an illustration of the scenario.
          </p>

          <p>
            This is where card decks become something more than printed artifacts. The physical cards
            set up the combinatorial space. The AI fills it with meaning. Draw the same three cards
            twice and you get different scenarios &mdash; the cards are constraints, not scripts.
          </p>

          <h2>The Template System</h2>

          <p>
            The whole pipeline is templatized. The <code>_template/</code> directory contains a clean
            starting point: <code>cards.json</code> for data, <code>generate-images.js</code> for
            artwork, <code>render-cards.js</code> for web output, and <code>render-print-cards.js</code>
            for print output. A 350-line guide (<code>CREATING-CARDS.md</code>) walks through the
            entire process.
          </p>

          <p>
            In practice, creating a new deck with Claude Code looks like this:
          </p>

          <ol style={{ textIndent: 0, textAlign: "left", paddingLeft: "1.25em", lineHeight: "1.8" }}>
            <li>Describe the deck theme and categories in conversation</li>
            <li>Claude generates the card data JSON</li>
            <li>Review, iterate on card concepts</li>
            <li>Run image generation (~5 seconds between API calls to avoid throttling)</li>
            <li>Review artwork, regenerate outliers</li>
            <li>Run card rendering (web + print)</li>
            <li>Upload print files to manufacturer</li>
          </ol>

          <p>
            The entire process, from &ldquo;I want a deck about X&rdquo; to holding printed cards,
            takes about a week &mdash; most of which is waiting for the printer to ship.
          </p>

          <h2>Why Cards</h2>

          <p>
            I keep coming back to cards because they solve a specific design problem: how do you get
            a group of people to think combinatorially about a complex topic? Slide decks are linear.
            Workshops are facilitator-dependent. But a deck of cards is a portable, self-contained
            system for structured improvisation. You draw three cards and you&rsquo;re forced to find
            connections between ideas that you wouldn&rsquo;t have juxtaposed on your own.
          </p>

          <p>
            The AI pipeline makes it feasible to create decks for any context. A workshop on climate
            adaptation? Design a deck in an afternoon. A therapy exercise for couples? A deck. A
            classroom activity on molecular biology? A deck. The constraint isn&rsquo;t creativity
            or cost anymore &mdash; it&rsquo;s having something worth making cards about.
          </p>

          <p>
            The template and decks are on{" "}
            <a href="https://github.com/JDerekLomas" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            . If you make a deck, I want to see it.
          </p>
        </div>

        {/* Engagement */}
        <div style={{ marginTop: "3em", display: "flex", flexDirection: "column", alignItems: "center", gap: "1em" }}>
          <LikeButton slug="making-card-decks-with-ai" />
        </div>

        <CusdisComments
          pageId="making-card-decks-with-ai"
          pageUrl="https://derek-lomas.com/blog/making-card-decks-with-ai"
          pageTitle="Making Card Decks with AI: From Prompt to Print"
        />
      </article>
    </div>
  );
}
