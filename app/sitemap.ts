import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: site.url, lastModified },
    { url: `${site.url}/projects`, lastModified },
    { url: `${site.url}/experience`, lastModified },
    { url: `${site.url}/writing`, lastModified },
    { url: `${site.url}/about`, lastModified },
    { url: `${site.url}/cv`, lastModified }
  ];
}
