export const dynamic = "force-static";

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tsukuneserver.xyz",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
