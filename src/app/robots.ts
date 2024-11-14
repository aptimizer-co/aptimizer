import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://aptimizer.co.kr/sitemap.xml",
  };
}

/*
User-Agent: *
Allow: /
Disallow: /private/
Sitemap: https://aptifit.co.kr/sitemap.xml
*/
