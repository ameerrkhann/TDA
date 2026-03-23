import type { MetadataRoute } from "next";
import { repairServices } from "@/data/services";

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

  const repairPages = repairServices.map((service) => ({
    url: `${baseUrl}/appliance-repair/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...repairPages,
  ];
}
