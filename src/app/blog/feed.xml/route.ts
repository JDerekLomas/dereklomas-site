const posts = [
  {
    slug: "teaching-biology-in-3d",
    title:
      "Teaching Biology in 3D: Building Interactive Cell Viewers with Blender and Three.js",
    description:
      "An atlas of interactive 3D cell models where students rotate, zoom, and click on organelles to learn how they work.",
    date: "2026-03-02",
    tag: "Education",
  },
  {
    slug: "why-terminals-cant-edit",
    title: "Why You Can't Click to Place Your Cursor in a Terminal",
    description:
      "The 1978 architecture decision that still shapes how 50 million developers work.",
    date: "2026-03-02",
    tag: "Technical",
  },
  {
    slug: "building-a-digital-library-with-ai",
    title: "Building a 1.67-Million-Page Digital Library with AI",
    description:
      "How I used Gemini, Lambda workers, and MongoDB to OCR and translate 4,430 books in 30 languages — for about $3,400 total.",
    date: "2026-02-27",
    tag: "Building in Public",
  },
  {
    slug: "replicating-quantum-papers-with-ai",
    title:
      "I Replicated 6 Quantum Computing Papers on 3 Platforms. Here's What Broke.",
    description:
      "An AI agent autonomously ran 105+ experiments across IBM, Quantum Inspire, and IQM hardware. 93% of published claims held up.",
    date: "2026-02-24",
    tag: "Research",
  },
  {
    slug: "translating-the-renaissance",
    title: "To Create a Second Renaissance, Translate the First",
    description:
      "533,000 Latin editions were printed between 1450 and 1700. Fewer than 3% have ever been translated into English.",
    date: "2026-01-28",
    tag: "Essay",
  },
  {
    slug: "making-card-decks-with-ai",
    title: "Making Card Decks with AI: From Prompt to Print",
    description:
      "A pipeline that turns card concepts into AI-generated artwork, web-rendered layouts, and print-ready files.",
    date: "2026-01-16",
    tag: "Creative Tech",
  },
];

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const baseUrl = "https://dereklomas.me";

  const items = posts
    .map(
      (p) => `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${baseUrl}/blog/${p.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${p.slug}</guid>
      <description>${escapeXml(p.description)}</description>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <category>${escapeXml(p.tag)}</category>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Derek Lomas — Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Essays on AI, quantum computing, digital libraries, and building things.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/blog/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
