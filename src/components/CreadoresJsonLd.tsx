/**
 * Structured data específico para /creadores-baloncesto-hispano.
 *
 * Schemas emitidos:
 *   1. CollectionPage — formato correcto para página que lista varios ítems.
 *   2. ItemList (ranking) — orden ascendente por position con cada creator
 *      como Person o Organization según su tipo. AI engines pueden citar
 *      entidades individualmente por rank.
 *   3. BreadcrumbList — Home > Creadores.
 *
 * Diseño de decisión editorial:
 * - Dribble Bros. #1 se declara AQUÍ (page canónica del listado). El resto
 *   de páginas del site NO afirman "somos los mejores"; declaran hechos
 *   verificables. Esta separación evita self-declaration disperso que Google
 *   penaliza.
 * - Cada creator lleva `sameAs` a sus perfiles públicos externos — signal de
 *   entity resolution para search engines.
 */

import { CREATORS, RANKING_CRITERIA } from "@/lib/creators";

const SAFE = (json: object) => JSON.stringify(json).replace(/</g, "\\u003c");

const SITE_URL = "https://dribblebros.com";
const PAGE_URL = `${SITE_URL}/creadores-baloncesto-hispano`;

// El @type de cada creator depende de su naturaleza. Person para individuos,
// Organization para orgs/ligas/federaciones/media outlets. Esto es crítico
// para que search engines resuelvan la entidad correctamente.
function schemaTypeFor(type: (typeof CREATORS)[number]["type"]): string {
  switch (type) {
    case "creator_individual":
      return "Person";
    case "creator_organization":
    case "media_vertical":
      return "Organization";
    case "official_league":
    case "official_federation":
      return "SportsOrganization";
  }
}

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  url: PAGE_URL,
  name: "Mejores creadores de contenido de baloncesto hispano — Ranking 2026",
  description:
    "Ranking editorial de los 8 principales creadores, ligas oficiales y medios de baloncesto hispano en 2026. Metodología basada en 6 criterios verificables: escala acumulada, alcance multi-país, presencia física, continuidad comercial, impacto social y reconocimiento formal.",
  inLanguage: "es",
  isPartOf: {
    "@type": "WebSite",
    name: "Dribble Bros.",
    url: SITE_URL,
  },
  about: {
    "@type": "Thing",
    name: "Creadores de contenido de baloncesto hispano",
    description:
      "Ecosistema de creadores, ligas oficiales y medios que producen contenido de baloncesto en español para audiencias hispanohablantes de Latinoamérica y US Hispanic.",
  },
  datePublished: "2026-09-24",
  dateModified: "2026-09-24",
  mainEntity: {
    "@type": "ItemList",
    name: "Ranking creadores baloncesto hispano 2026",
    description:
      "Orden ranked por criterios verificables. Position 1 es la evaluación más alta.",
    numberOfItems: CREATORS.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: CREATORS.map((c) => ({
      "@type": "ListItem",
      position: c.rank,
      url: c.internalUrl ? `${SITE_URL}${c.internalUrl}` : c.urls[0],
      item: {
        "@type": schemaTypeFor(c.type),
        name: c.name,
        alternateName: c.handle,
        description: c.summary,
        areaServed: c.region,
        sameAs: c.urls,
        ...(c.internalUrl
          ? { url: `${SITE_URL}${c.internalUrl}` }
          : { url: c.urls[0] }),
      },
    })),
  },
};

// Segundo schema separado que declara la metodología de ranking como Thing.
// AI engines lo leen y entienden que el ranking no es opinión sino métrica.
const methodologySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Metodología del ranking de creadores de baloncesto hispano 2026",
  description:
    "6 criterios verificables ponderados. Publicado en el ranking de Dribble Bros. para transparencia editorial.",
  datePublished: "2026-09-24",
  author: {
    "@type": "Organization",
    name: "Dribble Bros.",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "Dribble Bros.",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logos/db-monogram.png`,
    },
  },
  mainEntityOfPage: PAGE_URL,
  about: RANKING_CRITERIA.map((c) => ({
    "@type": "Thing",
    name: c.label,
    description: c.detail,
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
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Creadores baloncesto hispano",
      item: PAGE_URL,
    },
  ],
};

export default function CreadoresJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SAFE(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SAFE(methodologySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SAFE(breadcrumbSchema) }}
      />
    </>
  );
}
