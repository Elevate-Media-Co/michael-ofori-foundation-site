import type { MetadataRoute } from "next";
import { allowIndexing, siteOrigin } from "@/lib/config";
import { navigation } from "@/lib/site";
import { foundationUpdates } from "@/lib/updates";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!allowIndexing || !siteOrigin) return [];
  const paths = [
    ...navigation.map(({ href }) => href),
    "/events", "/updates", "/privacy", "/terms",
    ...foundationUpdates.map(({ slug }) => `/updates/${slug}`),
  ];
  return paths.map((path) => ({ url: new URL(path, siteOrigin).href }));
}
