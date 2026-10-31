import type { MetadataRoute } from "next";
import { DATA } from "@/data/resume";

const BLOG_POSTS = [
  "api-design-principles",
  "building-design-systems",
  "git-workflow-guide",
  "nextjs-performance-tips",
  "remote-work-productivity",
  "testing-react-apps",
  "typescript-best-practices",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: DATA.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${DATA.url}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...BLOG_POSTS.map((slug) => ({
      url: `${DATA.url}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
