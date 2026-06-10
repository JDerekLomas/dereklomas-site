import type { Metadata } from "next";
import Link from "next/link";
import { readFileSync } from "fs";
import { join } from "path";

export const metadata: Metadata = {
  title: "Talks & Videos",
  description:
    "Talks, documentaries, education projects, and creative video work by Derek Lomas — from 2007 fieldwork in Mumbai through TU Delft lectures on Positive AI.",
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
  channel: { name: string; handle?: string; url: string };
  videos: Video[];
};

function loadVideoData(): VideoData {
  const raw = readFileSync(
    join(process.cwd(), "public/data/youtube-videos.json"),
    "utf-8",
  );
  return JSON.parse(raw);
}

const CATEGORY_LABEL: Record<string, string> = {
  talk: "Talks & Lectures",
  documentary: "Documentary",
  education: "Educational Games & Demos",
  research: "Research",
  creative: "Creative & Art",
  other: "Other",
};

const CATEGORY_DESCRIPTION: Record<string, string> = {
  talk: "Conference talks, public lectures, and master classes.",
  documentary:
    "Documentary footage and short films — much of it from fieldwork in Mumbai, Bangalore, and Pittsburgh between 2007 and 2010.",
  education:
    "Demos of educational games and learning tools developed at Playpower Labs and during PhD research at CMU.",
  research: "Research demos, study walkthroughs, and project pitches.",
  creative: "Creative experiments, art projects, and visualizations.",
  other: "Miscellaneous video work.",
};

const CATEGORY_ORDER = [
  "talk",
  "documentary",
  "education",
  "research",
  "creative",
  "other",
];

function thumb(id: string) {
  // YouTube provides hqdefault.jpg for every video. 480×360.
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

function VideoCard({ video }: { video: Video }) {
  const url = `https://www.youtube.com/watch?v=${video.id}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-card rounded-lg border border-[var(--border-color)] hover:border-[var(--border-medium)] hover:shadow-sm transition-all group no-underline overflow-hidden"
    >
      <div className="aspect-video overflow-hidden bg-[var(--bg-cream)] relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumb(video.id)}
          alt={video.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
        />
        {video.duration && (
          <span className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-1.5 py-0.5 rounded font-[family-name:var(--font-inter)]">
            {video.duration}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-text-primary group-hover:text-rust transition-colors leading-snug mb-2">
          {video.title}
        </h3>
        {video.description && (
          <p className="text-xs text-text-secondary line-clamp-2 mb-2 leading-relaxed">
            {video.description}
          </p>
        )}
        <div className="flex items-center gap-3 text-xs text-text-muted font-[family-name:var(--font-inter)]">
          {video.published && <span>{video.published}</span>}
          {video.views !== undefined && video.views > 0 && (
            <span>{video.views.toLocaleString()} views</span>
          )}
        </div>
      </div>
    </a>
  );
}

export default function TalksPage() {
  const data = loadVideoData();

  const featured = data.videos.filter((v) => v.featured);

  const byCategory: Record<string, Video[]> = {};
  for (const v of data.videos) {
    if (v.featured) continue;
    if (!byCategory[v.category]) byCategory[v.category] = [];
    byCategory[v.category].push(v);
  }
  // Sort each category by views desc, then by published date desc
  for (const cat of Object.keys(byCategory)) {
    byCategory[cat].sort((a, b) => {
      const va = a.views ?? 0;
      const vb = b.views ?? 0;
      if (vb !== va) return vb - va;
      return (b.published || "").localeCompare(a.published || "");
    });
  }

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-medium text-text-primary mb-4">
            Talks &amp; Videos
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
            {data.videos.length} videos spanning conference talks on AI and
            design, educational game demos from Playpower Labs, and
            documentary fieldwork from Mumbai and Bangalore (2007-2010).
          </p>
          <p className="mt-3 text-sm text-text-muted">
            <a
              href={data.channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rust hover:underline no-underline"
            >
              View channel on YouTube →
            </a>
          </p>
        </header>

        {/* Source Library launch transcript */}
        <section className="mb-16">
          <Link
            href="/talks/source-library-launch"
            className="block bg-card rounded-lg border border-[var(--border-color)] hover:border-[var(--border-medium)] hover:shadow-sm transition-all no-underline p-6 md:p-8"
          >
            <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-wider text-rust mb-2">
              New · Listen with aligned transcript
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-medium text-text-primary mb-2">
              The Source Library: Beta Launch
            </h2>
            <p className="text-text-secondary leading-relaxed max-w-2xl">
              Launching sourcelibrary.org at the Embassy of the Free Mind in
              Amsterdam — translating the Renaissance with AI, from Ficino to
              15,000 books in 55 languages. A 54-minute talk with word-aligned
              audio: click any sentence to listen from there.
            </p>
          </Link>
        </section>

        {/* Featured */}
        {featured.length > 0 && (
          <section className="mb-16">
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-6">
              Featured
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featured.map((v) => (
                <VideoCard key={v.id} video={v} />
              ))}
            </div>
          </section>
        )}

        {/* By category */}
        {CATEGORY_ORDER.map((cat) => {
          const videos = byCategory[cat];
          if (!videos || videos.length === 0) return null;
          return (
            <section key={cat} className="mb-16">
              <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-2">
                {CATEGORY_LABEL[cat] || cat}
              </h2>
              <p className="text-sm text-text-secondary mb-6">
                {CATEGORY_DESCRIPTION[cat]}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {videos.map((v) => (
                  <VideoCard key={v.id} video={v} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
