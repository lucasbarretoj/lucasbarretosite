import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${siteConfig.url}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${siteConfig.resumeUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
