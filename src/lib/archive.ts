import { readFileSync } from "fs";
import { join } from "path";

export type ArchivePost = {
  slug: string;
  title: string;
  date: string;
  url: string;
  platform: "medium" | "substack";
  path: string;
  images: number;
};

const ARCHIVE_ROOT = join(process.cwd(), "content/archive");

export function getArchiveIndex(): ArchivePost[] {
  const raw = readFileSync(join(ARCHIVE_ROOT, "index.json"), "utf-8");
  const posts = JSON.parse(raw) as Omit<ArchivePost, "slug">[];
  return posts
    .map((p) => ({ ...p, slug: p.path.split("/")[1] }))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getArchivePost(slug: string) {
  const post = getArchiveIndex().find((p) => p.slug === slug);
  if (!post) return null;

  const raw = readFileSync(join(ARCHIVE_ROOT, post.path, "index.md"), "utf-8");
  // Strip frontmatter
  const body = raw.replace(/^---\n[\s\S]*?\n---\n/, "");

  const cleaned = body
    .split("\n")
    .filter((line) => {
      const t = line.trim();
      // Substack subscription boilerplate captured by the archiver
      if (t === "Subscribe" || t === "Share" || t === "Leave a comment") return false;
      if (t.startsWith("Thanks for reading")) return false;
      return true;
    })
    .join("\n")
    // Point relative image refs at the copies in /public/archive
    .replaceAll("(images/", `(/archive/${post.path}/images/`)
    .replaceAll('src="images/', `src="/archive/${post.path}/images/`);

  return { ...post, markdown: cleaned };
}
