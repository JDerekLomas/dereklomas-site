import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Getting Started with Claude Code",
  description:
    "A practical guide to Claude Code — from first install to custom skills. For people who've never used it, and for those who want to go deeper.",
  openGraph: {
    title: "Getting Started with Claude Code — Derek Lomas",
    description:
      "A practical guide to Claude Code — from first install to custom skills and MCP servers.",
    url: "https://dereklomas.me/lab/claude-code",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Getting Started with Claude Code — Derek Lomas",
    description:
      "A practical guide to Claude Code — from first install to custom skills and MCP servers.",
  },
};

/* ─── Tool Data ─── */

type Tool = {
  name: string;
  description: string;
  repo?: string;
  link?: string;
  tags: string[];
};

const skills: Tool[] = [
  {
    name: "getinput",
    description:
      "Human-in-the-loop feedback widget. Add to any site, send a ?getinput URL, get structured edits and comments back.",
    repo: "https://github.com/JDerekLomas/getinput",
    tags: ["feedback", "review"],
  },
  {
    name: "card-deck-creation",
    description:
      "Create themed card decks with AI-generated artwork via MuleRouter, Puppeteer rendering to PNG, and web gallery deployment.",
    repo: "https://github.com/JDerekLomas/claude-code-skills",
    tags: ["generative", "design"],
  },
  {
    name: "site-design-replication",
    description:
      "Crawl, analyze, and remix website designs. Extracts full design systems into LLM-ready docs.",
    repo: "https://github.com/JDerekLomas/claude-code-skills",
    tags: ["design", "crawling"],
  },
  {
    name: "d3-visualization",
    description:
      "Interactive data visualizations with D3.js. Includes scale reference, color schemes, and reusable patterns.",
    repo: "https://github.com/JDerekLomas/claude-code-skills",
    tags: ["dataviz", "d3"],
  },
  {
    name: "mulerouter",
    description:
      "Generate images and videos using MuleRouter multimodal APIs. Text-to-image, image-to-image, text-to-video with models like Wan2.6.",
    repo: "https://github.com/JDerekLomas/claude-code-skills",
    tags: ["generative", "images", "video"],
  },
  {
    name: "source-research",
    description:
      "Search and cite primary sources from Source Library — 116+ digitized pre-modern texts with OCR and English translation.",
    repo: "https://github.com/JDerekLomas/claude-code-skills",
    tags: ["research", "humanities"],
  },
  {
    name: "literature-review",
    description:
      "Systematic literature reviews across PubMed, arXiv, bioRxiv, and Semantic Scholar with verified citations.",
    repo: "https://github.com/JDerekLomas/claude-code-skills",
    tags: ["research", "academic"],
  },
  {
    name: "session-replay",
    description:
      "Create animated canvas-based replays of Claude Code building sessions as standalone HTML files.",
    repo: "https://github.com/JDerekLomas/claude-code-skills",
    tags: ["meta", "sharing"],
  },
  {
    name: "codevibing",
    description:
      "Post to codevibing.com — a social network for Claude Code users. Share what you're building with zero friction.",
    repo: "https://github.com/JDerekLomas/claude-code-skills",
    tags: ["social", "sharing"],
  },
  {
    name: "steamquest-development",
    description:
      "Build educational STEAMQuest games with Three.js 3D interactives, ElevenLabs voice acting, and Vercel deployment.",
    repo: "https://github.com/JDerekLomas/claude-code-skills",
    tags: ["education", "games", "3d"],
  },
  {
    name: "visual-compare",
    description:
      "Screenshot a reference app and a replica, use Claude vision to identify differences, and generate a gap report.",
    repo: "https://github.com/JDerekLomas/claude-code-skills",
    tags: ["design", "testing", "visual-diff"],
  },
  {
    name: "html-to-svg",
    description:
      "Convert rendered HTML/CSS to outlined SVG vectors. Renders with Puppeteer, traces with potrace to clean vector paths.",
    repo: "https://github.com/JDerekLomas/claude-code-skills",
    tags: ["design", "svg", "graphics"],
  },
  {
    name: "vercel-react-best-practices",
    description:
      "React and Next.js performance optimization guidelines from Vercel Engineering. Auto-reviews components for optimal patterns.",
    link: "https://github.com/vercel-labs/agent-skills",
    tags: ["performance", "react", "nextjs"],
  },
  {
    name: "web-design-guidelines",
    description:
      "Review UI code against Web Interface Guidelines. Checks accessibility, usability, and responsive design.",
    link: "https://github.com/vercel-labs/agent-skills",
    tags: ["design", "accessibility", "review"],
  },
];

const mcpServers: Tool[] = [
  {
    name: "chrome-devtools",
    description:
      "Connect Claude to Chrome DevTools for live browser inspection, console access, and DOM manipulation.",
    link: "https://www.npmjs.com/package/chrome-devtools-mcp",
    tags: ["browser", "debugging"],
  },
  {
    name: "gemini",
    description:
      "MCP wrapper for Gemini CLI. Offload bulk content generation and large file analysis to Gemini 2.0 Flash.",
    tags: ["llm", "delegation"],
  },
  {
    name: "source-library",
    description:
      "Direct access to 116+ digitized historical texts — search, retrieve, and cite from within Claude Code.",
    link: "https://sourcelibrary.org",
    tags: ["research", "humanities"],
  },
];

const clis: Tool[] = [
  {
    name: "gh",
    description:
      "GitHub CLI for repo management, PRs, and issues without leaving the terminal.",
    link: "https://cli.github.com",
    tags: ["git"],
  },
  {
    name: "vercel",
    description:
      "Deploy to Vercel with `vercel --prod`. The default deployment target.",
    link: "https://vercel.com/docs/cli",
    tags: ["deploy"],
  },
  {
    name: "secret-lover",
    description:
      "Credential manager backed by macOS Keychain. No .env files — secrets stored securely and injected at runtime.",
    repo: "https://github.com/JDerekLomas/secret-lover",
    tags: ["security"],
  },
];

/* ─── Components ─── */

function CodeBlock({ children }: { children: string }) {
  return (
    <div className="bg-[#1a1510] rounded-lg border border-[var(--border-color)] overflow-x-auto my-6">
      <pre className="p-5 text-sm text-[#c9b99a] font-mono leading-relaxed">
        <code>{children}</code>
      </pre>
    </div>
  );
}

function Step({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative pl-12 pb-10">
      {/* Connector line */}
      <div className="absolute left-[18px] top-10 bottom-0 w-px bg-[var(--border-light)]" />
      {/* Number circle */}
      <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-rust text-white text-sm font-[family-name:var(--font-inter)] font-semibold flex items-center justify-center">
        {number}
      </div>
      <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-text-primary mb-3 pt-1">
        {title}
      </h3>
      <div className="text-text-secondary text-[15px] leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );
}

function Callout({
  children,
  label = "Tip",
}: {
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <div className="bg-warm border-l-3 border-rust rounded-r-lg p-4 my-6">
      <span className="font-[family-name:var(--font-inter)] text-xs font-semibold text-rust uppercase tracking-wide">
        {label}
      </span>
      <div className="mt-1 text-text-secondary text-[15px] leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="p-4 bg-card rounded-lg border border-[var(--border-color)] hover:border-violet/30 transition-all">
      <div className="flex items-start justify-between gap-3 mb-1.5">
        <h4 className="font-[family-name:var(--font-inter)] text-sm font-semibold text-text-primary">
          {tool.name}
        </h4>
        <div className="flex gap-2 shrink-0">
          {tool.repo && (
            <a
              href={tool.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-violet transition-colors"
              title="GitHub"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
          {tool.link && (
            <a
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-violet transition-colors"
              title="Link"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
        </div>
      </div>
      <p className="text-text-secondary text-sm leading-relaxed">
        {tool.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-2.5">
        {tool.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 bg-violet/10 text-violet text-[11px] font-[family-name:var(--font-inter)] font-medium rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Page ─── */

export default function ClaudeCodePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="pt-16 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link
              href="/lab"
              className="text-text-muted hover:text-violet text-sm font-[family-name:var(--font-inter)] no-underline"
            >
              Lab
            </Link>
            <span className="text-text-faint">/</span>
          </div>
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-medium text-text-primary mb-5">
            Getting Started with Claude Code
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
            Claude Code is an AI that lives in your terminal and builds things
            with you. You describe what you want. It writes the code, runs
            commands, creates files, and deploys. This guide gets you from zero
            to your first deployed project in about ten minutes.
          </p>
          <nav className="flex gap-4 mt-8 font-[family-name:var(--font-inter)] text-sm">
            <a href="#start" className="btn-primary no-underline">
              Start Here
            </a>
            <a href="#advanced" className="btn-secondary no-underline">
              Advanced Setup
            </a>
          </nav>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 pb-20">
        {/* What it is */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-4">
            What is Claude Code?
          </h2>
          <div className="text-text-secondary text-[16px] leading-relaxed space-y-4">
            <p>
              Most AI coding tools are autocomplete on steroids — they suggest
              the next line. Claude Code is different. It&apos;s an{" "}
              <strong className="text-text-primary">agent</strong>. You give it
              a goal, and it figures out how to get there: reading your files,
              writing code, running tests, fixing errors, deploying to the web.
            </p>
            <p>
              You interact through your terminal. No browser tab, no IDE plugin
              required. Just open a folder, start Claude Code, and tell it what
              you want to build.
            </p>
          </div>
        </section>

        {/* Getting Started Steps */}
        <section id="start" className="mb-16 scroll-mt-24">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-8">
            Your First Ten Minutes
          </h2>

          <Step number={1} title="Install Claude Code">
            <p>One command. Requires Node.js 18+.</p>
            <CodeBlock>{`npm install -g @anthropic-ai/claude-code`}</CodeBlock>
            <p>
              You&apos;ll need an{" "}
              <a
                href="https://console.anthropic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rust"
              >
                Anthropic API key
              </a>{" "}
              or a Max plan. The install will walk you through authentication.
            </p>
          </Step>

          <Step number={2} title="Open a project folder">
            <p>
              Navigate to any folder — an existing project or an empty one — and
              start Claude Code:
            </p>
            <CodeBlock>{`mkdir my-project && cd my-project
claude`}</CodeBlock>
            <p>
              That&apos;s it. You&apos;re in a conversation with Claude, and it
              can see your files.
            </p>
          </Step>

          <Step number={3} title="Build something">
            <p>
              Type what you want. Be as vague or specific as you like. Here are
              real prompts that work:
            </p>
            <CodeBlock>
              {`> create a landing page for a coffee shop called "Third Wave"

> build a todo app with local storage

> I have a CSV of sales data. Make a dashboard with charts.`}
            </CodeBlock>
            <p>
              Claude will create files, install dependencies, and tell you how
              to preview the result. For a Next.js project, it usually runs{" "}
              <code className="text-violet bg-violet/10 px-1.5 py-0.5 rounded text-xs">
                npm run dev
              </code>{" "}
              automatically.
            </p>
          </Step>

          <Step number={4} title="Deploy it">
            <p>
              Install{" "}
              <a
                href="https://vercel.com/docs/cli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rust"
              >
                Vercel CLI
              </a>{" "}
              once, then deploying is a single prompt:
            </p>
            <CodeBlock>{`npm install -g vercel && vercel login

# Then just tell Claude:
> deploy this to vercel`}</CodeBlock>
            <p>
              You&apos;ll get a live URL in about 30 seconds. Every change after
              this is just &quot;deploy&quot; or &quot;push it.&quot;
            </p>
          </Step>

          <Step number={5} title="Iterate">
            <p>
              Now you have a live site. Keep going. Claude remembers everything
              about the project within a session:
            </p>
            <CodeBlock>
              {`> make the header sticky

> add a dark mode toggle

> the contact form doesn't validate email addresses

> make it look better on mobile`}
            </CodeBlock>
            <Callout>
              You don&apos;t need to explain the codebase. Claude has already
              read your files. Short prompts work best once context is
              established.
            </Callout>
          </Step>
        </section>

        {/* CLAUDE.md */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-4">
            Making It Yours
          </h2>
          <div className="text-text-secondary text-[16px] leading-relaxed space-y-4">
            <p>
              The single most powerful customization is a{" "}
              <code className="text-violet bg-violet/10 px-1.5 py-0.5 rounded text-xs">
                CLAUDE.md
              </code>{" "}
              file. It&apos;s a markdown file that tells Claude how to work with
              you — your preferences, project conventions, and things it should
              always remember.
            </p>
            <p>
              Create one at{" "}
              <code className="text-violet bg-violet/10 px-1.5 py-0.5 rounded text-xs">
                ~/.claude/CLAUDE.md
              </code>{" "}
              for global preferences, or in any project root for
              project-specific instructions.
            </p>
          </div>
          <CodeBlock>
            {`# My Preferences

## Style
- Be concise, no fluff
- Use TypeScript when possible
- Deploy to Vercel with \`vercel --prod\`

## Project Conventions
- Tests go in __tests__/ directories
- Use Tailwind for styling

## Things to Remember
- My GitHub username is: YOUR_USERNAME
- Never commit .env files`}
          </CodeBlock>
          <Callout>
            This is how you build a working relationship with Claude over time.
            Start simple, add rules as you notice patterns. My own CLAUDE.md is
            about 60 lines and has been refined over months.
          </Callout>
        </section>

        {/* Secrets */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-4">
            Handling Secrets
          </h2>
          <Callout label="Important">
            Never put API keys in{" "}
            <code className="text-violet bg-violet/10 px-1.5 py-0.5 rounded text-xs">
              .env
            </code>{" "}
            files when using AI coding tools. Claude can read your files —
            anything in plaintext can end up in conversation context.
          </Callout>
          <div className="text-text-secondary text-[16px] leading-relaxed space-y-4">
            <p>
              <strong className="text-text-primary">
                The simple approach:
              </strong>{" "}
              export secrets in your shell profile. Claude can use{" "}
              <code className="text-violet bg-violet/10 px-1.5 py-0.5 rounded text-xs">
                $OPENAI_API_KEY
              </code>{" "}
              as an environment variable without ever seeing the value.
            </p>
          </div>
          <CodeBlock>{`# Add to ~/.zshrc (or ~/.bashrc)
export OPENAI_API_KEY="sk-..."
export SUPABASE_URL="https://..."

# Restart your terminal, then Claude can use them:
> use the OpenAI API to generate embeddings`}</CodeBlock>
          <div className="text-text-secondary text-[16px] leading-relaxed space-y-4">
            <p>
              <strong className="text-text-primary">
                The robust approach:
              </strong>{" "}
              use a credential manager like{" "}
              <a
                href="https://github.com/JDerekLomas/secret-lover"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rust"
              >
                secret-lover
              </a>{" "}
              that stores secrets in macOS Keychain and injects them at runtime.
            </p>
          </div>
        </section>

        {/* Working patterns */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-4">
            Patterns That Work
          </h2>
          <div className="text-text-secondary text-[16px] leading-relaxed space-y-6">
            <div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-medium text-text-primary mb-2">
                Think in outcomes, not instructions
              </h3>
              <p>
                Instead of &quot;write a function that validates email
                addresses,&quot; try &quot;add signup with validation, error
                states, and success feedback.&quot; Let Claude figure out the
                implementation. You focus on what you&apos;re building, not how.
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-medium text-text-primary mb-2">
                Short prompts after context is set
              </h3>
              <p>
                Once Claude understands your project, you can be terse.
                &quot;darker&quot; adjusts colors. &quot;mobile&quot; fixes
                responsive issues. &quot;deploy&quot; ships it. This feels
                strange at first, but it works.
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-medium text-text-primary mb-2">
                Context management
              </h3>
              <p>
                Claude Code has a context window — think of it as working
                memory. Use{" "}
                <code className="text-violet bg-violet/10 px-1.5 py-0.5 rounded text-xs">
                  /compact
                </code>{" "}
                to compress context when it gets long.{" "}
                <code className="text-violet bg-violet/10 px-1.5 py-0.5 rounded text-xs">
                  /clear
                </code>{" "}
                to start fresh when switching tasks. Point Claude at specific
                files when you want it to focus.
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-medium text-text-primary mb-2">
                Iterate fast, deploy early
              </h3>
              <p>
                Get something live quickly, then refine it in place. A deployed
                prototype you can test on your phone is worth more than a
                perfect local build you haven&apos;t looked at in a browser.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-[var(--border-light)] my-16" />

        {/* Advanced Section */}
        <section id="advanced" className="scroll-mt-24">
          <header className="mb-10">
            <span className="inline-block px-3 py-1 bg-violet/10 text-violet text-xs font-[family-name:var(--font-inter)] font-medium rounded-full mb-4">
              Advanced
            </span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-text-primary mb-3">
              Going Deeper
            </h2>
            <p className="text-text-secondary max-w-2xl">
              Once you&apos;re comfortable with the basics, these tools extend
              what Claude Code can do. Skills teach it specialized workflows.
              MCP servers connect it to external tools. CLIs give it access to
              your infrastructure.
            </p>
          </header>

          {/* Skills */}
          <div className="mb-12">
            <h3 className="font-[family-name:var(--font-inter)] text-sm font-semibold text-text-primary mb-2 uppercase tracking-wide">
              Skills
            </h3>
            <p className="text-text-secondary text-sm mb-5">
              Prompt files that teach Claude Code specialized workflows. Invoke
              with slash commands like{" "}
              <code className="text-violet bg-violet/10 px-1.5 py-0.5 rounded text-xs">
                /input
              </code>{" "}
              or{" "}
              <code className="text-violet bg-violet/10 px-1.5 py-0.5 rounded text-xs">
                /codevibing
              </code>
              . Install from{" "}
              <a
                href="https://github.com/JDerekLomas/claude-code-skills"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rust"
              >
                my skills repo
              </a>
              .
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {skills.map((skill) => (
                <ToolCard key={skill.name} tool={skill} />
              ))}
            </div>
          </div>

          {/* MCP Servers */}
          <div className="mb-12">
            <h3 className="font-[family-name:var(--font-inter)] text-sm font-semibold text-text-primary mb-2 uppercase tracking-wide">
              MCP Servers
            </h3>
            <p className="text-text-secondary text-sm mb-5">
              Model Context Protocol servers give Claude access to external tools
              and data. Configure in{" "}
              <code className="text-violet bg-violet/10 px-1.5 py-0.5 rounded text-xs">
                ~/.claude/mcp_servers.json
              </code>
              .
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {mcpServers.map((server) => (
                <ToolCard key={server.name} tool={server} />
              ))}
            </div>
          </div>

          {/* CLI Tools */}
          <div className="mb-12">
            <h3 className="font-[family-name:var(--font-inter)] text-sm font-semibold text-text-primary mb-2 uppercase tracking-wide">
              CLI Tools
            </h3>
            <p className="text-text-secondary text-sm mb-5">
              Command-line tools Claude can invoke directly. Standard CLIs on
              your system that Claude learns to use through CLAUDE.md
              instructions.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {clis.map((cli) => (
                <ToolCard key={cli.name} tool={cli} />
              ))}
            </div>
          </div>

          {/* Install prompt */}
          <div className="bg-warm rounded-lg p-6 border border-[var(--border-color)]">
            <p className="text-sm text-text-secondary mb-3">
              <strong className="text-text-primary">
                Install skills from inside Claude Code:
              </strong>{" "}
              paste this URL and Claude will browse the catalog and install what
              fits your project.
            </p>
            <code className="block text-sm text-violet font-mono bg-[#1a1510] rounded px-3 py-2 select-all">
              https://dereklomas.me/api/skills
            </code>
          </div>
        </section>

        {/* Footer CTA */}
        <div className="text-center py-12 mt-16 bg-warm rounded-lg border border-[var(--border-color)]">
          <p className="font-[family-name:var(--font-cormorant)] text-xl text-text-primary mb-3">
            All tools are open source
          </p>
          <p className="text-text-secondary text-sm max-w-md mx-auto mb-6">
            Clone the repo, fork individual skills, or use them as templates for
            your own.
          </p>
          <a
            href="https://github.com/JDerekLomas/claude-code-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-rust text-white text-sm font-[family-name:var(--font-inter)] font-medium rounded-lg no-underline hover:opacity-90 transition"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
