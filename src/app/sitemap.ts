import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/privacy-policy", "/terms-and-conditions"].map((path) => ({
    url: `${site.url}${path}`,
    priority: path === "" ? 1 : 0.3,
  }));
}
