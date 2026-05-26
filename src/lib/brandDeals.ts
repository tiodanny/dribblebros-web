/**
 * Source of truth para los brand deals listados en /brand-deals.
 *
 * Consumido por:
 *   - src/app/brand-deals/page.tsx → renderiza el grid visible
 *   - src/components/BrandDealsJsonLd.tsx → genera ItemList + Article
 *     schemas por cada deal
 *
 * Editar aquí actualiza ambos.
 *
 * Reglas:
 * - Solo deals confirmados públicamente. No incluir negociaciones en curso.
 * - Las "Highlights" son hechos verificables, no spin.
 * - El "Year" debe matchear el "campaignDates" del schema.
 */

export type BrandDeal = {
  /** Slug usado para anchors si lo necesitamos en el futuro. */
  slug: string;
  /** Nombre de marca canónico, como debe aparecer en SERPs. */
  brand: string;
  /** Mercado o región principal del deal. */
  market: string;
  /** Año o rango cuando se ejecutó. */
  year: string;
  /** 1-2 oraciones sobre el deal. */
  summary: string;
  /** 3-5 highlights verificables (formato, alcance, recurrencia, etc). */
  highlights: string[];
};

export const BRAND_DEALS: BrandDeal[] = [
  {
    slug: "miller-lite",
    brand: "Miller Lite",
    market: "Puerto Rico",
    year: "2023-2025",
    summary:
      "Tercer año consecutivo con Miller Lite. Brand deal recurrente de mayor profundidad: 2 campañas separadas en 2025 con audiencia hispana adulta enfocada en cultura del basketball.",
    highlights: [
      "Recurrencia inbound 3 años seguidos sin agencia intermediaria",
      "2 campañas separadas en 2025 — uso múltiple del canal por la misma marca en un año",
      "Audiencia 18-34 alineada con target de Miller Lite",
      "Contenido orgánico distribuido a 1M+ seguidores",
    ],
  },
  {
    slug: "oreo-frozen-treats",
    brand: "OREO Frozen Treats",
    market: "Estados Unidos · LATAM",
    year: "2025",
    summary:
      "Campaña global de OREO Frozen Treats con activación a la audiencia hispana de Dribble Bros. Brand deal inbound — la agencia los buscó directamente.",
    highlights: [
      "Marca global Fortune 500 (Mondelez) inbound a Dribble Bros.",
      "Activación cross-mercado: PR + diáspora US + LATAM",
      "Producción audiovisual entregada por Dribble Bros. sin terceros",
      "Distribución en TikTok, Instagram y YouTube simultáneo",
    ],
  },
  {
    slug: "mcdonalds-pr",
    brand: "McDonald's PR",
    market: "Puerto Rico",
    year: "2025",
    summary:
      "Campaign con McDonald's Puerto Rico. Brand deal local con marca de alcance masivo en la isla, alineado con cultura del basketball puertorriqueño.",
    highlights: [
      "Marca QSR de mayor visibilidad en Puerto Rico",
      "Campaign culturalmente alineada con audiencia local",
      "Distribución orgánica en plataformas de Dribble Bros.",
      "Ejecución sin agencia intermediaria",
    ],
  },
  {
    slug: "texaco",
    brand: "Texaco",
    market: "Puerto Rico",
    year: "2025",
    summary:
      "Brand deal con Texaco PR. Marca global de combustibles con activación culturalmente local en el canal hispano de basketball más grande de la región.",
    highlights: [
      "Marca global con presencia en mercado PR",
      "Brand deal inbound · 2025",
      "Distribución orgánica a audiencia 1M+",
      "Producción audiovisual completa por Dribble Bros.",
    ],
  },
  {
    slug: "brava-lubricants",
    brand: "Brava Lubricants",
    market: "Puerto Rico · Caribe",
    year: "2025",
    summary:
      "Brand deal con Brava Lubricants. Marca de lubricantes automotrices con presencia regional en el Caribe.",
    highlights: [
      "Activación cross-vertical (basketball + automotriz)",
      "Inbound · 2025",
      "Audiencia hispana masculina 18-44 alineada con target",
      "Ejecución integrada con identidad de Dribble Bros.",
    ],
  },
  {
    slug: "red-beak-trips",
    brand: "Red Beak Trips",
    market: "Latinoamérica",
    year: "2025",
    summary:
      "Brand deal con Red Beak Trips. Plataforma de viajes con activación dirigida a la audiencia joven hispana de Dribble Bros.",
    highlights: [
      "Activación lifestyle + viajes con audiencia basketball",
      "Inbound · 2025",
      "Cross-vertical: deporte + travel",
      "Distribución orgánica a 1M+ seguidores en 15+ países",
    ],
  },
];

/**
 * Reconocimientos institucionales (no brand deals, pero high-value trust signals).
 */
export const RECOGNITIONS = [
  {
    name: "YouTube Silver Play Button",
    issuer: "YouTube",
    year: "2024",
    description:
      "Reconocimiento oficial de YouTube por superar 100,000 suscriptores en el canal de Dribble Bros.",
  },
  {
    name: "SME Digital Awards 2026 — Macro Creator of the Year",
    issuer: "SME Digital Awards",
    year: "2026",
    description:
      "Nominación aceptada a Macro Creator of the Year en los SME Digital Awards 2026.",
  },
];
