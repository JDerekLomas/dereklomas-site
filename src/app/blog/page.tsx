import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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
  image: string;
};

const TAG_COLORS: Record<string, string> = {
  "Building in Public": "badge-rust",
  Research: "badge-violet",
  Technical: "badge-slate",
  Education: "badge-sage",
  Essay: "badge-gold",
  "Creative Tech": "badge-rust",
};

const posts: Post[] = [
  {
    slug: "teaching-biology-in-3d",
    title: "Teaching Biology in 3D: Building Interactive Cell Viewers with Blender and Three.js",
    description:
      "An atlas of interactive 3D cell models where students rotate, zoom, and click on organelles to learn how they work. The rod photoreceptor even fires photons.",
    date: "2 March 2026",
    readTime: "8 min read",
    tag: "Education",
    image: "/images/blog/blendercell.png",
  },
  {
    slug: "why-terminals-cant-edit",
    title: "Why You Can't Click to Place Your Cursor in a Terminal",
    description:
      "Terminal emulators don't know what's on screen. They draw characters on a grid and forward keystrokes. That architectural decision from 1978 is why basic text editing feels broken in 2026.",
    date: "2 March 2026",
    readTime: "10 min read",
    tag: "Technical",
    image: "/images/blog/terminal.png",
  },
  {
    slug: "building-a-digital-library-with-ai",
    title: "Building a 1.67-Million-Page Digital Library with AI",
    description:
      "How I used Gemini, Lambda workers, and MongoDB to OCR and translate 4,430 books in 30 languages — for about $3,400 total.",
    date: "27 February 2026",
    readTime: "12 min read",
    tag: "Building in Public",
    image: "/images/blog/source-library.jpg",
  },
  {
    slug: "replicating-quantum-papers-with-ai",
    title: "I Replicated 6 Quantum Computing Papers on 3 Platforms. Here's What Broke.",
    description:
      "An AI agent autonomously ran 105+ experiments across IBM, Quantum Inspire, and IQM hardware. 93% of published claims held up. The failures were more interesting than the successes.",
    date: "24 February 2026",
    readTime: "14 min read",
    tag: "Research",
    image: "/images/blog/quantum.jpg",
  },
  {
    slug: "translating-the-renaissance",
    title: "To Create a Second Renaissance, Translate the First",
    description:
      "533,000 Latin editions were printed between 1450 and 1700. Fewer than 3% have ever been translated into English. We built the first comprehensive census to map the gap.",
    date: "28 January 2026",
    readTime: "10 min read",
    tag: "Essay",
    image: "/images/blog/second-renaissance.jpg",
  },
  {
    slug: "making-card-decks-with-ai",
    title: "Making Card Decks with AI: From Prompt to Print",
    description:
      "A pipeline that turns card concepts into AI-generated artwork, web-rendered layouts, and print-ready files for physical production. Four decks and counting.",
    date: "16 January 2026",
    readTime: "9 min read",
    tag: "Creative Tech",
    image: "/images/blog/card-decks.png",
  },
];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-medium text-primary mb-4">
            Blog
          </h1>
          <p className="text-xl text-secondary leading-relaxed">
            Essays on AI, quantum computing, digital libraries, and building things.
          </p>
        </header>

        {/* Featured post */}
        <Link
          href={`/blog/${featured.slug}`}
          className="block bg-card rounded-lg border border-[var(--border-light)] hover:border-[var(--border-medium)] hover:shadow-md transition-all group no-underline mb-10 overflow-hidden"
        >
          <div className="overflow-hidden">
            <Image
              src={featured.image}
              alt={featured.title}
              width={800}
              height={400}
              className="w-full aspect-[2/1] object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className={`badge ${TAG_COLORS[featured.tag] || "badge-rust"} text-xs`}>{featured.tag}</span>
              <span className="font-sans text-xs text-muted">
                {featured.date} &middot; {featured.readTime}
              </span>
            </div>
            <h2 className="font-display text-2xl font-medium text-primary group-hover:text-rust transition-colors mb-2">
              {featured.title}
            </h2>
            <p className="text-secondary leading-relaxed">
              {featured.description}
            </p>
          </div>
        </Link>

        {/* Grid of remaining posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-card rounded-lg border border-[var(--border-light)] hover:border-[var(--border-medium)] hover:shadow-sm transition-all group no-underline overflow-hidden"
            >
              <div className="overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={267}
                  className="w-full aspect-[3/2] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`badge ${TAG_COLORS[post.tag] || "badge-rust"} text-xs`}>{post.tag}</span>
                  <span className="font-sans text-xs text-muted">
                    {post.date} &middot; {post.readTime}
                  </span>
                </div>
                <h2 className="text-lg font-medium text-primary group-hover:text-rust transition-colors mb-1">
                  {post.title}
                </h2>
                <p className="text-sm text-secondary leading-relaxed line-clamp-2">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
