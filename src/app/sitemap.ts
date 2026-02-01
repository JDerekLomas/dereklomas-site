import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://derek-lomas.com";

  const projectSlugs = getAllSlugs();

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/research`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/writing`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/lab`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/press`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.5 },
  ];

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
  ].map((slug) => ({
    url: `${baseUrl}/lab/${slug}`,
    lastModified: new Date(),
    priority: 0.5,
  }));

  return [...staticPages, ...projectPages, ...labPages];
}
