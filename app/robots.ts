import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "Yandex",
        allow: "/",
        crawlDelay: 0,
      },
    ],
    sitemap: "https://yourdomain.com/sitemap.xml",
  };
}
