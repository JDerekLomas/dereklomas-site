import type { Metadata } from "next";
import { readFileSync } from "fs";
import { join } from "path";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays on AI, wellbeing, design, education, and the intersection of technology and human flourishing.",
};

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
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-16">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-medium text-text-primary mb-4">
            Writing
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Essays on AI, wellbeing, design, and the pursuit of human
            flourishing through technology.
          </p>
        </header>

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
