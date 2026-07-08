import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

const ALLOWED_CRAWLERS = [
  "Googlebot",
  "Bingbot",
  "GPTBot",
  "ChatGPT-User",
  "ClaudeBot",
  "PerplexityBot",
  "Google-Extended",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: ALLOWED_CRAWLERS.map((userAgent) => ({
      userAgent,
      allow: "/",
    })),
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
