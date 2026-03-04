import { NextRequest, NextResponse } from "next/server";

const skills = [
  {
    id: "getinput",
    name: "getinput",
    category: "skill",
    description:
      "Human-in-the-loop feedback widget. Add to any Next.js site, send a ?getinput URL to reviewers, get structured text edits and comments back as JSON. Paste the JSON into Claude Code to apply edits.",
    use_when:
      "Building websites and want design/copy feedback from collaborators without them needing dev tools.",
    install: {
      type: "git-clone",
      repo: "https://github.com/JDerekLomas/getinput",
      commands: [
        "git clone https://github.com/JDerekLomas/getinput.git ~/getinput",
        "mkdir -p ~/.claude/skills/input",
        "cp ~/getinput/skill.md ~/.claude/skills/input/SKILL.md",
      ],
    },
    tags: ["feedback", "review", "web"],
  },
  {
    id: "card-deck-creation",
    name: "card-deck-creation",
    category: "skill",
    description:
      "Create themed card decks with AI-generated artwork. Generates card content as JSON, creates artwork via MuleRouter API, renders to PNG with Puppeteer, and deploys a web gallery.",
    use_when:
      "Creating card games, tarot decks, flashcards, or any card-based content with custom AI artwork.",
    install: {
      type: "symlink",
      repo: "https://github.com/JDerekLomas/claude-code-skills",
      commands: [
        "git clone https://github.com/JDerekLomas/claude-code-skills.git ~/claude-code-skills",
        "ln -s ~/claude-code-skills/card-deck-creation ~/.claude/skills/card-deck-creation",
      ],
    },
    tags: ["generative", "design", "games"],
  },
  {
    id: "site-design-replication",
    name: "site-design-replication",
    category: "skill",
    description:
      "Crawl, analyze, and remix website designs. Extracts full design systems (colors, typography, spacing, components) into structured docs, then generates new sites inspired by existing ones.",
    use_when:
      "You see a website you like and want to create something similar, or need to document an existing design system.",
    install: {
      type: "symlink",
      repo: "https://github.com/JDerekLomas/claude-code-skills",
      commands: [
        "git clone https://github.com/JDerekLomas/claude-code-skills.git ~/claude-code-skills",
        "ln -s ~/claude-code-skills/site-design-replication ~/.claude/skills/site-design-replication",
      ],
    },
    tags: ["design", "crawling", "web"],
  },
  {
    id: "d3-visualization",
    name: "d3-visualization",
    category: "skill",
    description:
      "Interactive data visualizations with D3.js. Includes comprehensive references for scales, color schemes, and reusable patterns. Produces custom charts, network diagrams, geographic maps, and animated transitions.",
    use_when:
      "Creating data visualizations that go beyond basic charting libraries. Network graphs, Sankey diagrams, force layouts, geographic maps.",
    install: {
      type: "symlink",
      repo: "https://github.com/JDerekLomas/claude-code-skills",
      commands: [
        "git clone https://github.com/JDerekLomas/claude-code-skills.git ~/claude-code-skills",
        "ln -s ~/claude-code-skills/claude-d3js-skill ~/.claude/skills/d3-visualization",
      ],
    },
    tags: ["dataviz", "d3", "charts"],
  },
  {
    id: "mulerouter",
    name: "mulerouter",
    category: "skill",
    description:
      "Generate images and videos using MuleRouter multimodal APIs. Text-to-image, image-to-image, text-to-video, image-to-video with models like Wan2.6.",
    use_when:
      "Need to generate images or videos from prompts within a project. Hero images, card artwork, video content.",
    install: {
      type: "symlink",
      repo: "https://github.com/JDerekLomas/claude-code-skills",
      commands: [
        "git clone https://github.com/JDerekLomas/claude-code-skills.git ~/claude-code-skills",
        "ln -s ~/claude-code-skills/mulerouter ~/.claude/skills/mulerouter",
      ],
    },
    tags: ["generative", "images", "video"],
  },
  {
    id: "source-research",
    name: "source-research",
    category: "skill",
    description:
      "Search and cite primary sources from Source Library — 116+ digitized pre-modern texts (Ficino, Agrippa, Paracelsus, Bruno) with OCR and English translation.",
    use_when:
      "Researching historical philosophy, alchemy, Hermeticism, Renaissance thought, or need citations from rare texts.",
    install: {
      type: "symlink",
      repo: "https://github.com/JDerekLomas/claude-code-skills",
      commands: [
        "git clone https://github.com/JDerekLomas/claude-code-skills.git ~/claude-code-skills",
        "ln -s ~/claude-code-skills/source-research ~/.claude/skills/source-research",
      ],
    },
    tags: ["research", "humanities", "history"],
  },
  {
    id: "literature-review",
    name: "literature-review",
    category: "skill",
    description:
      "Systematic literature reviews across PubMed, arXiv, bioRxiv, and Semantic Scholar. Outputs formatted markdown and PDF with verified citations in APA, Nature, or Vancouver styles.",
    use_when:
      "Conducting academic research, writing papers, or need a comprehensive survey of scientific literature on a topic.",
    install: {
      type: "symlink",
      repo: "https://github.com/JDerekLomas/claude-code-skills",
      commands: [
        "git clone https://github.com/JDerekLomas/claude-code-skills.git ~/claude-code-skills",
        "ln -s ~/claude-code-skills/literature-review ~/.claude/skills/literature-review",
      ],
    },
    tags: ["research", "academic", "citations"],
  },
  {
    id: "session-replay",
    name: "session-replay",
    category: "skill",
    description:
      "Create animated canvas-based replays of Claude Code building sessions. Generates standalone HTML files showing prompts, AI responses, and project screenshots as a timeline video.",
    use_when:
      "Want to share a recording of what you built with Claude Code. Great for demos, portfolios, and social sharing.",
    install: {
      type: "symlink",
      repo: "https://github.com/JDerekLomas/claude-code-skills",
      commands: [
        "git clone https://github.com/JDerekLomas/claude-code-skills.git ~/claude-code-skills",
        "ln -s ~/claude-code-skills/session-replay ~/.claude/skills/session-replay",
      ],
    },
    tags: ["sharing", "demo", "video"],
  },
  {
    id: "codevibing",
    name: "codevibing",
    category: "skill",
    description:
      "Post to codevibing.com — a social network for Claude Code users. Share what you're building with zero friction. Auto-provisions accounts.",
    use_when:
      "Want to share your Claude Code projects with the community.",
    install: {
      type: "symlink",
      repo: "https://github.com/JDerekLomas/claude-code-skills",
      commands: [
        "git clone https://github.com/JDerekLomas/claude-code-skills.git ~/claude-code-skills",
        "ln -s ~/claude-code-skills/codevibing ~/.claude/skills/codevibing",
      ],
    },
    tags: ["social", "sharing"],
  },
  {
    id: "steamquest-development",
    name: "steamquest-development",
    category: "skill",
    description:
      "Build educational STEAMQuest games with Three.js 3D interactives, ElevenLabs voice acting, and Vercel deployment. Full scaffold-to-deploy pipeline.",
    use_when:
      "Creating educational games or interactive learning experiences with 3D graphics and voice narration.",
    install: {
      type: "symlink",
      repo: "https://github.com/JDerekLomas/claude-code-skills",
      commands: [
        "git clone https://github.com/JDerekLomas/claude-code-skills.git ~/claude-code-skills",
        "ln -s ~/claude-code-skills/steamquest-development ~/.claude/skills/steamquest-development",
      ],
    },
    tags: ["education", "games", "3d"],
  },
  {
    id: "vercel-react-best-practices",
    name: "vercel-react-best-practices",
    category: "skill",
    description:
      "React and Next.js performance optimization guidelines from Vercel Engineering. Auto-reviews your components for optimal rendering, data fetching, and bundle patterns.",
    use_when:
      "Building or reviewing React/Next.js apps and want to follow Vercel's recommended performance patterns.",
    install: {
      type: "git-clone",
      repo: "https://github.com/vercel-labs/agent-skills",
      commands: [
        "git clone https://github.com/vercel-labs/agent-skills.git ~/.agents/skills-vercel",
        "ln -s ~/.agents/skills-vercel/vercel-react-best-practices ~/.claude/skills/vercel-react-best-practices",
      ],
    },
    tags: ["performance", "react", "nextjs"],
  },
  {
    id: "web-design-guidelines",
    name: "web-design-guidelines",
    category: "skill",
    description:
      "Review UI code against Web Interface Guidelines. Checks accessibility, usability, responsive design, and visual consistency.",
    use_when:
      "Want a design review of your web UI for accessibility and best practices compliance.",
    install: {
      type: "git-clone",
      repo: "https://github.com/vercel-labs/agent-skills",
      commands: [
        "git clone https://github.com/vercel-labs/agent-skills.git ~/.agents/skills-vercel",
        "ln -s ~/.agents/skills-vercel/web-design-guidelines ~/.claude/skills/web-design-guidelines",
      ],
    },
    tags: ["design", "accessibility", "review"],
  },
  {
    id: "visual-compare",
    name: "visual-compare",
    category: "skill",
    description:
      "Visual comparison of a reference app against a replica build. Screenshots both via Chrome DevTools, uses Claude vision to identify differences, and generates gap reports.",
    use_when:
      "Auditing visual fidelity of a site clone, checking design replication, or doing a visual diff between two URLs.",
    install: {
      type: "symlink",
      repo: "https://github.com/JDerekLomas/claude-code-skills",
      commands: [
        "git clone https://github.com/JDerekLomas/claude-code-skills.git ~/claude-code-skills",
        "ln -s ~/claude-code-skills/visual-compare ~/.claude/skills/visual-compare",
      ],
    },
    tags: ["design", "testing", "visual-diff"],
  },
  {
    id: "html-to-svg",
    name: "html-to-svg",
    category: "skill",
    description:
      "Convert rendered HTML/CSS to outlined SVG vectors. Renders with Puppeteer at high resolution, traces with potrace to produce clean vector paths. All text becomes paths — no font dependencies.",
    use_when:
      "Creating SVG logos, converting text to vector outlines, or exporting any HTML component as a scalable vector graphic.",
    install: {
      type: "symlink",
      repo: "https://github.com/JDerekLomas/claude-code-skills",
      commands: [
        "git clone https://github.com/JDerekLomas/claude-code-skills.git ~/claude-code-skills",
        "ln -s ~/claude-code-skills/html-to-svg ~/.claude/skills/html-to-svg",
      ],
    },
    tags: ["design", "svg", "graphics"],
  },
];

const mcpServers = [
  {
    id: "chrome-devtools",
    name: "chrome-devtools",
    category: "mcp",
    description:
      "Connect Claude Code to Chrome DevTools for live browser inspection, console access, network monitoring, and DOM manipulation during development.",
    use_when:
      "Debugging frontend issues, inspecting live pages, or need Claude to see what's happening in the browser.",
    install: {
      config_key: "chrome-devtools",
      config_value: {
        command: "npx",
        args: ["-y", "chrome-devtools-mcp@latest", "--isolated"],
      },
      instructions:
        'Add to ~/.claude/mcp_servers.json under the key "chrome-devtools".',
    },
    tags: ["browser", "debugging", "frontend"],
  },
  {
    id: "source-library",
    name: "source-library",
    category: "mcp",
    description:
      "MCP server for Source Library — search, retrieve, and cite from 116+ digitized historical texts directly within Claude Code.",
    use_when:
      "Doing historical research and want Claude to search and cite primary sources inline.",
    install: {
      config_key: "source-library",
      config_value: {
        command: "npx",
        args: ["-y", "@source-library/mcp-server"],
      },
      instructions:
        'Add to ~/.claude/mcp_servers.json under the key "source-library".',
    },
    tags: ["research", "humanities"],
  },
];

const clis = [
  {
    id: "vercel-cli",
    name: "vercel",
    category: "cli",
    description:
      "Deploy to Vercel with a single command. Default deployment target for Next.js and static sites.",
    use_when: "Deploying web projects.",
    install: {
      commands: ["npm install -g vercel"],
    },
    tags: ["deploy", "hosting"],
  },
  {
    id: "gh-cli",
    name: "gh",
    category: "cli",
    description:
      "GitHub CLI for repo creation, PRs, issues, releases, and API access from the terminal.",
    use_when: "Any GitHub operations — repos, PRs, issues.",
    install: {
      commands: ["brew install gh && gh auth login"],
    },
    tags: ["git", "github"],
  },
  {
    id: "supabase-cli",
    name: "supabase",
    category: "cli",
    description:
      "PostgreSQL database, auth, storage, and edge functions. Full backend-as-a-service from the CLI.",
    use_when:
      "Need a database, authentication, or file storage for your project.",
    install: {
      commands: ["brew install supabase/tap/supabase"],
    },
    tags: ["database", "backend", "auth"],
  },
  {
    id: "secret-lover",
    name: "secret-lover",
    category: "cli",
    description:
      "Credential manager backed by macOS Keychain. No .env files — secrets are stored securely and injected at runtime.",
    use_when:
      "Managing API keys and secrets across projects without .env files.",
    install: {
      commands: [
        "git clone https://github.com/JDerekLomas/secret-lover.git ~/secret-lover",
        "cd ~/secret-lover && ./install.sh",
      ],
      repo: "https://github.com/JDerekLomas/secret-lover",
    },
    tags: ["security", "credentials"],
  },
];

export async function GET(request: NextRequest) {
  const accept = request.headers.get("accept") || "";

  // Browsers get redirected to the human-readable page
  if (accept.includes("text/html")) {
    return NextResponse.redirect(new URL("/lab/claude-code", request.url));
  }

  return NextResponse.json(
    {
      name: "Derek Lomas Claude Code Toolkit",
      description:
        "Custom skills, MCP servers, and CLI integrations for Claude Code. Browse the list below and install what's useful for your workflow.",
      instructions:
        "To install a skill: run the install commands in order. For MCP servers: add the config to ~/.claude/mcp_servers.json. For CLIs: run the install command. Skills that share the same repo only need one git clone — skip if already cloned.",
      page: "https://dereklomas.me/lab/claude-code",
      repo: "https://github.com/JDerekLomas/claude-code-skills",
      tools: [...skills, ...mcpServers, ...clis],
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=3600",
      },
    }
  );
}
