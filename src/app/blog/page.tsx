import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Essays on terminals, AI, and building things.",
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
            Essays on terminals, AI, and building things.
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
