import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dereklomas.me";

  const projectSlugs = getAllSlugs();

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/research`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/writing`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/lab`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/press`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.5 },
  ];

  const blogPosts = [
    { slug: "teaching-biology-in-3d", date: "2026-03-02" },
    { slug: "why-terminals-cant-edit", date: "2026-03-02" },
    { slug: "building-a-digital-library-with-ai", date: "2026-02-27" },
    { slug: "replicating-quantum-papers-with-ai", date: "2026-02-24" },
    { slug: "translating-the-renaissance", date: "2026-01-28" },
    { slug: "making-card-decks-with-ai", date: "2026-01-16" },
  ].map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.8,
  }));

  const projectPages = projectSlugs.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    priority: 0.6,
  }));

  const labPages = [
    "skill-ancestry",
    "skill-graph",
    "rivers",
    "ficino-network",
    "claude-code",
  ].map((slug) => ({
    url: `${baseUrl}/lab/${slug}`,
    lastModified: new Date(),
    priority: 0.5,
  }));

  return [...staticPages, ...blogPosts, ...projectPages, ...labPages];
}
