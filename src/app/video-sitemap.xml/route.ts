import { readFileSync } from "fs";
import { join } from "path";

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

const BASE = "https://dereklomas.me";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Convert "5:07" or "1:23:45" → seconds. Returns null if unparseable.
function durationToSeconds(d: string): number | null {
  if (!d) return null;
  const parts = d.split(":").map((p) => parseInt(p, 10));
  if (parts.some((p) => Number.isNaN(p))) return null;
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  return null;
}

// Normalize "2024" or "2010-09-13" → ISO date "2024-01-01" / "2010-09-13"
function normalizeDate(d: string): string | null {
  if (!d || d === "unknown") return null;
  if (/^\d{4}$/.test(d)) return `${d}-01-01`;
  if (/^\d{4}-\d{2}-\d{2}$/.test(d)) return d;
  return null;
}

export function GET(): Response {
  const raw = readFileSync(
    join(process.cwd(), "public/data/youtube-videos.json"),
    "utf-8",
  );
  const data: VideoData = JSON.parse(raw);

  const entries = data.videos
    .map((v) => {
      const watchUrl = `https://www.youtube.com/watch?v=${v.id}`;
      const embedUrl = `https://www.youtube.com/embed/${v.id}`;
      const thumb = `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`;
      const title = escapeXml(v.title.slice(0, 100));
      // Google requires non-empty description ≤ 2048 chars
      const desc = escapeXml(
        (v.description && v.description.length > 0
          ? v.description
          : v.title
        ).slice(0, 2048),
      );
      const seconds = durationToSeconds(v.duration);
      const pubDate = normalizeDate(v.published);

      return `  <url>
    <loc>${BASE}/talks</loc>
    <video:video>
      <video:thumbnail_loc>${thumb}</video:thumbnail_loc>
      <video:title>${title}</video:title>
      <video:description>${desc}</video:description>
      <video:player_loc allow_embed="yes" autoplay="ap=1">${embedUrl}</video:player_loc>
      <video:content_loc>${watchUrl}</video:content_loc>${
        seconds !== null ? `\n      <video:duration>${seconds}</video:duration>` : ""
      }${
        pubDate ? `\n      <video:publication_date>${pubDate}T00:00:00+00:00</video:publication_date>` : ""
      }${
        v.views !== undefined && v.views > 0
          ? `\n      <video:view_count>${v.views}</video:view_count>`
          : ""
      }
      <video:family_friendly>yes</video:family_friendly>
      <video:platform relationship="allow">web mobile tv</video:platform>
      <video:uploader info="${BASE}/talks">Derek Lomas</video:uploader>
    </video:video>
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${entries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
