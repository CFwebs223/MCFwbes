import type { MetadataRoute } from "next";
import { SITE_URL, SERVICES } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/demos",
    "/demos/plumber",
    "/demos/electrician",
    "/demos/cafe",
    "/about",
    "/pricing",
    "/faq",
    "/contact",
  ];

  const serviceRoutes = SERVICES.map((s) => `/services/${s.slug}`);

  return [...staticRoutes, ...serviceRoutes].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
