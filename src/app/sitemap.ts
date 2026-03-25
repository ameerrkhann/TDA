import type { MetadataRoute } from "next";

const baseUrl = "https://topdigitalappliances.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/appliance-repair",
    "/appliance-installation",
    "/parts",
    "/brands-we-service",
    "/about",
    "/faq",
    "/contact",
  ];

  return staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
