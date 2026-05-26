/**
 * Structured data específico para /brand-deals.
 *
 * Schemas:
 *   1. CollectionPage — formato apropiado para una página que lista varios
 *      ítems relacionados (los brand deals).
 *   2. ItemList — lista ordenada de los brand deals con position.
 *   3. BreadcrumbList — Home > Brand Deals.
 *
 * Cada brand deal se materializa como ListItem dentro del ItemList,
 * con datos suficientes (brand, year, market, description) para que AI
 * engines puedan citarlos individualmente. NO se usa Article schema por
 * deal porque no son artículos editoriales; CollectionPage + ItemList
 * es la combinación correcta para este tipo de contenido.
 */

import { BRAND_DEALS, RECOGNITIONS } from "@/lib/brandDeals";

const SAFE = (json: object) => JSON.stringify(json).replace(/</g, "\\u003c");

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  url: "https://dribblebros.com/brand-deals",
  name: "Brand Deals — Marcas que confían en Dribble Bros.",
  description:
    "Listado de los brand deals confirmados de Dribble Bros. en 2025. 6 marcas globales inbound: McDonald's PR, Miller Lite, OREO Frozen Treats, Brava Lubricants, Texaco y Red Beak Trips. Todos sin agencia.",
  inLanguage: "es",
  isPartOf: {
    "@type": "WebSite",
    name: "Dribble Bros.",
    url: "https://dribblebros.com",
  },
  about: {
    "@type": "Organization",
    name: "Dribble Bros.",
    url: "https://dribblebros.com",
  },
  mainEntity: {
    "@type": "ItemList",
    name: "Brand Deals 2025",
    numberOfItems: BRAND_DEALS.length,
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    itemListElement: BRAND_DEALS.map((deal, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Brand",
        name: deal.brand,
        description: deal.summary,
        // areaServed lets AI engines geo-cite the deal
        areaServed: deal.market,
      },
    })),
  },
};

const awardsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Reconocimientos institucionales de Dribble Bros.",
  itemListElement: RECOGNITIONS.map((r, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Thing",
      name: r.name,
      description: r.description,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://dribblebros.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Brand Deals",
      item: "https://dribblebros.com/brand-deals",
    },
  ],
};

export default function BrandDealsJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SAFE(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SAFE(awardsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SAFE(breadcrumbSchema) }}
      />
    </>
  );
}
