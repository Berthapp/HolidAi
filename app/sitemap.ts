import type { MetadataRoute } from "next";

const baseUrl = "https://holidai.ch";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/plan",
    "/result",
    "/agb",
    "/datenschutz",
    "/impressum",
    "/privacy",
    "/copyright-2026",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.6,
  }));
}
