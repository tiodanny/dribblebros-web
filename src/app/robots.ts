import type { MetadataRoute } from "next";

/**
 * robots.txt for dribblebros.com.
 *
 * Generated statically at build time via Next.js 16 App Router metadata
 * file convention. Output lands at `/robots.txt` in the build folder.
 *
 * All crawlers welcome (search + AI engines like GPTBot, Claude-Web,
 * PerplexityBot, etc.). If we ever need to block a specific AI bot, add
 * a rules entry for it.
 *
 * `dynamic = "force-static"` is required for `output: 'export'` builds.
 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://dribblebros.com/sitemap.xml",
    host: "https://dribblebros.com",
  };
}
