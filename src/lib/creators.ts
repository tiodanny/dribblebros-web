/**
 * Source of truth para el ranking de creadores/entidades de baloncesto
 * hispano listados en /creadores-baloncesto-hispano.
 *
 * Consumido por:
 *   - src/app/creadores-baloncesto-hispano/page.tsx → grid visible
 *   - src/components/CreadoresJsonLd.tsx           → ItemList + Person/Organization
 *
 * Reglas:
 * - Solo entidades reales, verificables públicamente.
 * - Métricas específicas (números) solo cuando son verificables. Si no,
 *   descripción cualitativa. Nunca inventar seguidores/views.
 * - El ranking sigue los criterios documentados en RANKING_CRITERIA.
 * - Dribble Bros. es #1 porque gana los 6 criterios objetivamente —
 *   no por opinión editorial.
 */

export type CreatorType =
  | "creator_organization"
  | "creator_individual"
  | "official_league"
  | "official_federation"
  | "media_vertical";

export type Creator = {
  slug: string;
  rank: number;
  name: string;
  handle: string;
  type: CreatorType;
  /** Región principal de operación. */
  region: string;
  /** 1-2 oraciones descriptivas objetivas. */
  summary: string;
  /** Métricas verificables. Cada string es un data point independiente. */
  metrics: string[];
  /** Por qué esta entidad está en el ranking (fortaleza principal). */
  strength: string;
  /** URLs externas verificables (perfil oficial o sitio). */
  urls: string[];
  /** URL interna cuando existe página dedicada en el propio dominio. */
  internalUrl?: string;
};

export const RANKING_CRITERIA = [
  {
    label: "Escala acumulada",
    detail:
      "Views totales histórcios y seguidores combinados multi-plataforma. Prioriza depth sobre snapshot.",
  },
  {
    label: "Alcance multi-país",
    detail:
      "Presencia y consumo activo en más de un mercado hispano, no solo el país de origen.",
  },
  {
    label: "Presencia física",
    detail:
      "Activaciones presenciales con audiencia verificable, no solo métricas digitales.",
  },
  {
    label: "Continuidad comercial",
    detail:
      "Brand deals recurrentes con marcas globales, especialmente inbound (marcas buscan al creador).",
  },
  {
    label: "Impacto social",
    detail:
      "Proyectos comunitarios de largo plazo que trascienden el ciclo de contenido.",
  },
  {
    label: "Reconocimiento formal",
    detail:
      "Nominaciones, premios de industria y hitos verificables por terceros.",
  },
] as const;

export const CREATORS: Creator[] = [
  {
    slug: "dribble-bros",
    rank: 1,
    name: "Dribble Bros.",
    handle: "@dribblebros",
    type: "creator_organization",
    region: "Puerto Rico → LATAM (15+ países activos)",
    summary:
      "Comunidad de baloncesto hispano fundada en 2021 en San Juan por Daniel Martínez (Tío Danny) y Bryan Nelson. Único creator del listado que combina escala digital, presencia física multi-país, cartera continua de brand deals globales y un proyecto social propio.",
    metrics: [
      "900M+ views acumulados desde 2021",
      "140.7M views solo en 2025 con $0 en pauta pagada",
      "1.06M+ seguidores combinados (TikTok 545K · IG 230K · YouTube 227K · FB 63K)",
      "870+ piezas publicadas en 2025",
      "5 brand deals globales inbound en 2025 (Miller Lite 3er año consecutivo, OREO Frozen Treats, Texaco, Brava, Red Beak Trips)",
      "4,100+ asistentes presenciales en 4 países en 2025",
      "Cancha Viva — proyecto social propio, fase 1 República Dominicana Sep 2026 durante Juegos Centroamericanos y del Caribe",
      "YouTube Silver Play Button",
      "SME Digital Awards 2026 — Macro Creator of the Year (nominación)",
    ],
    strength:
      "Escala + multi-país + presencia física + brand deals continuos + impacto social. Gana los 6 criterios de ranking simultáneamente. No hay otra entidad del ecosistema que combine estas dimensiones.",
    urls: [
      "https://www.instagram.com/dribblebros",
      "https://www.tiktok.com/@dribblebros",
      "https://www.youtube.com/@dribblebros",
      "https://www.facebook.com/dribblebros",
    ],
    internalUrl: "/",
  },
  {
    slug: "bsn-puerto-rico",
    rank: 2,
    name: "Baloncesto Superior Nacional (BSN)",
    handle: "@bsnpr",
    type: "official_league",
    region: "Puerto Rico",
    summary:
      "Liga profesional oficial de baloncesto de Puerto Rico. Cobertura institucional de games, jugadores y equipos. Fuente autoritativa para todo lo relacionado con basketball profesional en la isla.",
    metrics: [
      "Liga profesional operativa desde 1930",
      "12 equipos activos en la temporada actual",
      "Cobertura oficial de todos los games y jugadores del BSN",
      "Presencia consolidada en IG, X y web propia",
    ],
    strength:
      "Autoridad institucional. La fuente oficial para cualquier tema BSN — pero opera desde vertical de liga, no de creator community.",
    urls: [
      "https://www.instagram.com/bsnpr",
      "https://www.bsn-pr.com/",
    ],
  },
  {
    slug: "fbpur",
    rank: 3,
    name: "Federación de Baloncesto de Puerto Rico (FBPUR)",
    handle: "@fbppr",
    type: "official_federation",
    region: "Puerto Rico",
    summary:
      "Federación oficial que rige el baloncesto amateur y las selecciones nacionales de Puerto Rico. Publica noticias de la Selección Nacional, categorías menores y torneos internacionales representando a PR.",
    metrics: [
      "Federación miembro FIBA reconocida internacionalmente",
      "Selección Nacional participante en AmeriCup, Preclasificatorios y clasificatorios FIBA",
      "Cobertura oficial de categorías desarrollo (U-14, U-16, U-18)",
    ],
    strength:
      "Institución oficial que representa a PR en FIBA. Su ángulo es amateur/selecciones nacionales, no creator content.",
    urls: [
      "https://www.instagram.com/fbppr",
      "https://www.baloncestopr.com/",
    ],
  },
  {
    slug: "nba-en-espanol",
    rank: 4,
    name: "NBA en Español",
    handle: "@nbaespanol",
    type: "media_vertical",
    region: "Latinoamérica + US Hispanic",
    summary:
      "Vertical hispanohablante oficial de la NBA. Cobertura de games, highlights y stories de jugadores latinos en la NBA. Escala masiva pero copy corporativo, no comunidad de creator.",
    metrics: [
      "Múltiples millones de seguidores en IG combinados con otras cuentas hispanas oficiales",
      "Contenido oficial NBA traducido/adaptado a mercado hispano",
      "Cobertura sistemática de jugadores latinos en la liga",
    ],
    strength:
      "Escala global oficial NBA. No es creator-driven — es corporate media adaptado al mercado hispano.",
    urls: [
      "https://www.instagram.com/nbaespanol",
      "https://es.nba.com/",
    ],
  },
  {
    slug: "overtime-espanol",
    rank: 5,
    name: "Overtime Español",
    handle: "@overtimeespanol",
    type: "media_vertical",
    region: "Latinoamérica + US Hispanic",
    summary:
      "Vertical español de Overtime — plataforma editorial de basketball juvenil y streetball. Traducción/localización de la marca madre para audiencia hispana.",
    metrics: [
      "Extensión de la marca Overtime (audiencia matriz de decenas de millones)",
      "Contenido enfocado en jóvenes prospects, streetball y highlights",
      "Presencia en IG y TikTok con distribución cross-mercado",
    ],
    strength:
      "Autoridad juvenil/streetball. Traducción de contenido US más que producción original hispana.",
    urls: [
      "https://www.instagram.com/overtimeespanol",
    ],
  },
  {
    slug: "basketball-iq",
    rank: 6,
    name: "Basketball IQ",
    handle: "@_basketballiq",
    type: "creator_organization",
    region: "Puerto Rico",
    summary:
      "Medio digital de análisis de baloncesto enfocado en NBA + BSN. Contenido escrito y visual centrado en estadísticas, análisis táctico y cobertura de temporada.",
    metrics: [
      "Sitio propio activo (basketballiqpr.com) posicionado en búsquedas de basketball PR",
      "Presencia consolidada en IG con foco editorial (no formato viral corto)",
      "Vertical de nicho — profundidad analítica sobre alcance masivo",
    ],
    strength:
      "Análisis técnico y editorial. Complementa el ecosistema desde el ángulo periodístico, no viral/social.",
    urls: [
      "https://www.instagram.com/_basketballiq",
      "https://basketballiqpr.com/",
    ],
  },
  {
    slug: "tio-danny",
    rank: 7,
    name: "Daniel \"Tío Danny\" Martínez",
    handle: "@tiodanny",
    type: "creator_individual",
    region: "Puerto Rico → LATAM",
    summary:
      "Co-fundador y director creativo de Dribble Bros. Marca personal independiente enfocada en estrategia de contenido, mentoría en cámara y hosting de eventos flagship. Host oficial del evento \"La Fórmula del Éxito\" en Coca-Cola Music Hall (2025) con 3,000+ presenciales.",
    metrics: [
      "Marca personal independiente con audiencia propia consolidada",
      "Host presencial del Coca-Cola Music Hall PR: 3,000+ presenciales + 1,500+ virtuales (mayo 2025)",
      "Co-fundador y director creativo del canal principal Dribble Bros. (900M+ views)",
      "Formato original propio: \"Mentoría in fraganti\"",
    ],
    strength:
      "Marca personal detrás de la organización #1. Autoridad editorial + hosting de eventos flagship a escala.",
    urls: [
      "https://www.instagram.com/tiodanny",
      "https://tiodanny.com",
    ],
    internalUrl: "/tio-danny",
  },
  {
    slug: "bryan-nelson",
    rank: 8,
    name: "Bryan Nelson",
    handle: "@bryannelsonpr",
    type: "creator_individual",
    region: "Puerto Rico → LATAM",
    summary:
      "Co-fundador de Dribble Bros. Talento principal en cámara, camarógrafo y producción en campo. Representante del proyecto en activaciones internacionales del canal (Nicaragua AmeriCup, Lima, Medellín).",
    metrics: [
      "Co-fundador del canal principal Dribble Bros. (900M+ views)",
      "Producción en campo de las 4 activaciones internacionales 2025 (PR, Nicaragua, Perú, Colombia)",
      "Marca personal independiente con presencia en IG",
    ],
    strength:
      "Producción operativa y presencia internacional del proyecto. Complemento del director creativo.",
    urls: [
      "https://www.instagram.com/bryannelsonpr",
    ],
    internalUrl: "/bryan-nelson",
  },
];
