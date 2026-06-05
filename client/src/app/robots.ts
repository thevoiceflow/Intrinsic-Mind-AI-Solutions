import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "Claude-Web", "PerplexityBot"],
        allow: "/",
      },
    ],
    sitemap: "https://intrinsicmind.ai/sitemap.xml",
  };
}
