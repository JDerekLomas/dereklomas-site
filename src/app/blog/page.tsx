import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Essays on AI, quantum computing, digital libraries, and building things.",
};

type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tag: string;
};

const posts: Post[] = [
  {
    slug: "building-a-digital-library-with-ai",
    title: "Building a 1.67-Million-Page Digital Library with AI",
    description:
      "How I used Gemini, Lambda workers, and MongoDB to OCR and translate 4,430 books in 30 languages — for about $3,400 total.",
    date: "2 March 2026",
    readTime: "12 min read",
    tag: "Building in Public",
  },
  {
    slug: "replicating-quantum-papers-with-ai",
    title: "I Replicated 6 Quantum Computing Papers on 3 Platforms. Here's What Broke.",
    description:
      "An AI agent autonomously ran 105+ experiments across IBM, Quantum Inspire, and IQM hardware. 93% of published claims held up. The failures were more interesting than the successes.",
    date: "2 March 2026",
    readTime: "14 min read",
    tag: "Research",
  },
  {
    slug: "translating-the-renaissance",
    title: "To Create a Second Renaissance, Translate the First",
    description:
      "533,000 Latin editions were printed between 1450 and 1700. Fewer than 3% have ever been translated into English. We built the first comprehensive census to map the gap.",
    date: "2 March 2026",
    readTime: "10 min read",
    tag: "Essay",
  },
  {
    slug: "making-card-decks-with-ai",
    title: "Making Card Decks with AI: From Prompt to Print",
    description:
      "A pipeline that turns card concepts into AI-generated artwork, web-rendered layouts, and print-ready files for physical production. Four decks and counting.",
    date: "2 March 2026",
    readTime: "9 min read",
    tag: "Creative Tech",
  },
  {
    slug: "teaching-biology-in-3d",
    title: "Teaching Biology in 3D: Building Interactive Cell Viewers with Blender and Three.js",
    description:
      "An atlas of interactive 3D cell models where students rotate, zoom, and click on organelles to learn how they work. The rod photoreceptor even fires photons.",
    date: "2 March 2026",
    readTime: "8 min read",
    tag: "Education",
  },
  {
    slug: "why-terminals-cant-edit",
    title: "Why You Can't Click to Place Your Cursor in a Terminal",
    description:
      "Terminal emulators don't know what's on screen. They draw characters on a grid and forward keystrokes. That architectural decision from 1978 is why basic text editing feels broken in 2026.",
    date: "2 March 2026",
    readTime: "10 min read",
    tag: "Technical",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <header className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-medium text-primary mb-4">
            Blog
          </h1>
          <p className="text-xl text-secondary leading-relaxed">
            Essays on AI, quantum computing, digital libraries, and building things.
          </p>
        </header>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-6 bg-card rounded-lg border border-[var(--border-light)] hover:border-[var(--border-medium)] hover:shadow-sm transition-all group no-underline"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="badge badge-rust text-xs">{post.tag}</span>
                <span className="font-sans text-xs text-muted">
                  {post.date} &middot; {post.readTime}
                </span>
              </div>
              <h2 className="text-xl font-medium text-primary group-hover:text-rust transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-secondary leading-relaxed">
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
