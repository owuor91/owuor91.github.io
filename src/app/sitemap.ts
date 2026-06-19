import type { MetadataRoute } from "next";

export const dynamic = "force-static";
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://owuor91.github.io",
      lastModified: "2026-06-19",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
