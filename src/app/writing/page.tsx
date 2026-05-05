import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { readFileSync } from "fs";
import { join } from "path";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays on AI, wellbeing, design, education, and the intersection of technology and human flourishing.",
};

type BlogPost = {
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

const blogPosts: BlogPost[] = [
  {
    slug: "simulating-ocean-currents",
    title: "Simulating Ocean Currents from One Equation",
    description:
      "The Gulf Stream, Kuroshio Current, and Antarctic Circumpolar Current all emerge from a single equation. I built a GPU-accelerated simulator that lets you watch it happen — and reshape the continents while it runs.",
    date: "24 April 2026",
    readTime: "8 min read",
    tag: "Education",
    image: "/images/blog/amoc-simulator.png",
  },
  {
    slug: "teaching-biology-in-3d",
    title: "Teaching Biology in 3D: Building Interactive Cell Viewers with Three.js",
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

type Article = {
  title: string;
  description: string;
  date: string;
  url: string;
  featured?: boolean;
  publication?: string;
  authors?: string[];
};

type WritingData = {
  substack: {
    name: string;
    url: string;
    description: string;
    articles: Article[];
  };
  medium: {
    profile: string;
    articles: Article[];
  };
  themes: string[];
};

type Video = {
  id: string;
  title: string;
  description: string;
  duration: string;
  published: string;
  views?: number;
  category: string;
  project: string;
  featured?: boolean;
};

type VideoData = {
  channel: { name: string; url: string };
  videos: Video[];
};

function loadWritingData(): WritingData {
  const raw = readFileSync(join(process.cwd(), "public/data/writing.json"), "utf-8");
  return JSON.parse(raw);
}

function loadVideoData(): VideoData {
  const raw = readFileSync(join(process.cwd(), "public/data/youtube-videos.json"), "utf-8");
  return JSON.parse(raw);
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 bg-card rounded-lg border border-[var(--border-color)] hover:border-[var(--border-medium)] hover:shadow-sm transition-all group no-underline"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            {article.featured && (
              <span className="badge badge-rust text-xs">Featured</span>
            )}
            {article.publication && (
              <span className="text-xs text-text-muted">
                in {article.publication}
              </span>
            )}
          </div>
          <h3 className="text-lg font-medium text-text-primary group-hover:text-rust transition-colors">
            {article.title}
          </h3>
          <p className="mt-2 text-sm text-text-secondary line-clamp-2">
            {article.description}
          </p>
        </div>
        <span className="text-xs text-text-muted whitespace-nowrap font-[family-name:var(--font-inter)]">
          {formatDate(article.date)}
        </span>
      </div>
    </a>
  );
}

function ChevronIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z" />
    </svg>
  );
}

export default function WritingPage() {
  const writing = loadWritingData();
  const videoData = loadVideoData();

  // Show featured + most-viewed videos
  const featuredVideos = videoData.videos
    .filter((v) => v.featured || (v.views && v.views > 1000))
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 6);

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-medium text-text-primary mb-4">
            Writing
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Essays on AI, wellbeing, design, and the pursuit of human
            flourishing through technology.
          </p>
        </header>

        {/* Blog (long-form on this site) */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary">
                Blog
              </h2>
              <p className="text-sm text-text-secondary mt-1">
                Long-form essays on building, research, and craft
              </p>
            </div>
            <a
              href="/blog/feed.xml"
              className="text-sm text-rust font-[family-name:var(--font-inter)] font-medium hover:underline flex items-center gap-1"
            >
              RSS
              <ChevronIcon />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-card rounded-lg border border-[var(--border-color)] hover:border-[var(--border-medium)] hover:shadow-sm transition-all group no-underline overflow-hidden"
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
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className={`badge ${TAG_COLORS[post.tag] || "badge-rust"} text-xs`}>{post.tag}</span>
                    <span className="font-[family-name:var(--font-inter)] text-xs text-text-muted">
                      {post.date} &middot; {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-base font-medium text-text-primary group-hover:text-rust transition-colors mb-1 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Substack Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary">
                {writing.substack.name}
              </h2>
              <p className="text-sm text-text-secondary mt-1">
                {writing.substack.description}
              </p>
            </div>
            <a
              href={writing.substack.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-rust font-[family-name:var(--font-inter)] font-medium hover:underline flex items-center gap-1"
            >
              Subscribe
              <ChevronIcon />
            </a>
          </div>

          <div className="space-y-4">
            {writing.substack.articles.map((article) => (
              <ArticleCard key={article.url} article={article} />
            ))}
          </div>
        </section>

        {/* Medium Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary">
                Medium
              </h2>
              <p className="text-sm text-text-secondary mt-1">
                Earlier essays on intelligence, design thinking, and wellbeing
              </p>
            </div>
            <a
              href={writing.medium.profile}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-rust font-[family-name:var(--font-inter)] font-medium hover:underline flex items-center gap-1"
            >
              View profile
              <ChevronIcon />
            </a>
          </div>

          <div className="space-y-4">
            {writing.medium.articles.map((article) => (
              <ArticleCard key={article.url} article={article} />
            ))}
          </div>
        </section>

        {/* Videos Section */}
        {featuredVideos.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary">
                  Videos
                </h2>
                <p className="text-sm text-text-secondary mt-1">
                  Selected talks, demos, and research documentation
                </p>
              </div>
              <a
                href={videoData.channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-rust font-[family-name:var(--font-inter)] font-medium hover:underline flex items-center gap-1"
              >
                YouTube
                <ChevronIcon />
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {featuredVideos.map((video) => (
                <a
                  key={video.id}
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 bg-card rounded-lg border border-[var(--border-color)] hover:border-[var(--border-medium)] transition-colors no-underline group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-text-primary leading-snug group-hover:text-rust transition-colors">
                        {video.title}
                      </h3>
                      {video.description && (
                        <p className="mt-1.5 text-xs text-text-secondary line-clamp-2">
                          {video.description}
                        </p>
                      )}
                      <div className="mt-2 flex items-center gap-3 text-xs text-text-muted">
                        <span>{video.duration}</span>
                        {video.views && (
                          <span>{video.views.toLocaleString()} views</span>
                        )}
                        <span className="capitalize">{video.category}</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Topics */}
        <section className="p-8 bg-warm rounded-lg border border-[var(--border-color)]">
          <h2 className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-text-primary mb-4">
            Topics I Write About
          </h2>
          <div className="flex flex-wrap gap-2">
            {writing.themes.map((topic) => (
              <span
                key={topic}
                className="px-3 py-1.5 bg-white rounded-full text-sm text-text-secondary border border-[var(--border-color)]"
              >
                {topic}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
