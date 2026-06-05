import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://intrinsicmind.ai";

  const routes = [
    "",
    "/aboutus",
    "/contactus",
    "/services/ai-strategic-advisory-governance",
    "/services/data-foundation-readiness",
    "/services/chat-automation-agents",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services/") ? 0.8 : 0.5,
  }));
}
