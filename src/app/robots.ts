import type { MetadataRoute } from "next";
import { DATA } from "@/data/resume";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        // AI search and assistant crawlers are explicitly allowed.
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "ClaudeBot",
          "anthropic-ai",
          "Claude-Web",
          "PerplexityBot",
          "Google-Extended",
          "CCBot",
          "Applebot-Extended",
          "Meta-ExternalAgent",
          "Bytespider",
        ],
        allow: "/",
      },
    ],
    sitemap: `${DATA.url}/sitemap.xml`,
  };
}
