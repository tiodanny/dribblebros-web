import type { MetadataRoute } from "next";

/**
 * Sitemap for dribblebros.com.
 *
 * Generated statically at build time via Next.js 16 App Router metadata
 * file convention. Output lands at `/sitemap.xml` in the build folder.
 *
 * Currently the site is single-page (`/`). When new top-level routes are
 * added (e.g. `/cancha-viva`, `/press`), append them here with appropriate
 * priority and changeFrequency.
 *
 * `dynamic = "force-static"` is required because the project uses
 * `output: 'export'` (no server runtime). Without this flag, Next.js
 * refuses to build the special sitemap.xml route.
 */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dribblebros.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      // Sub-page dedicada al proyecto Cancha Viva (Fase 1 RD Sep 2026).
      // Priority 0.8: alta porque es contenido estratégico de
      // sponsorship pero secundario al hub principal del site.
      url: "https://dribblebros.com/cancha-viva",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
