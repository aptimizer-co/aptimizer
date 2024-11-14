import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.aptimizer.co.kr";

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "always" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/notice`,
      lastModified: new Date().toISOString(),
      changeFrequency: "always" as const,
      priority: 0.9,
    },
  ];

  return routes;
}
