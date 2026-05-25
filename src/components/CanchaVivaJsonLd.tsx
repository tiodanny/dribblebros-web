/**
 * Structured data específico para /cancha-viva.
 *
 * Tres schemas:
 *   1. Event — Fase 1 RD septiembre 2026. Alto valor para queries en AI
 *      engines sobre activaciones durante Juegos Centroamericanos 2026.
 *   2. WebPage — relación con la entidad Organization y descripción de la
 *      página específicamente.
 *   3. BreadcrumbList — refuerza el path Home > Cancha Viva para que los
 *      engines entiendan jerarquía.
 *
 * No incluye Organization/Person schemas — esos viven en layout.tsx (home)
 * y aplican a TODA la app via el RootLayout, así que ya están presentes
 * en esta página también.
 */

const SAFE = (json: object) => JSON.stringify(json).replace(/</g, "\\u003c");

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Cancha Viva — Fase 1: República Dominicana",
  description:
    "Renovación de una cancha de baloncesto abandonada en República Dominicana, con activación comunitaria y cobertura de contenido distribuida a 1M+ audiencia. Primera fase del proyecto Cancha Viva de Dribble Bros., ejecutada durante los Juegos Centroamericanos y del Caribe Santo Domingo 2026.",
  // Juegos Centroamericanos y del Caribe Santo Domingo 2026 — fechas
  // aproximadas durante el evento global. Cancha Viva se ejecuta dentro
  // de esta ventana.
  startDate: "2026-09-01",
  endDate: "2026-09-30",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Santo Domingo, República Dominicana",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santo Domingo",
      addressCountry: "DO",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Dribble Bros.",
    url: "https://dribblebros.com",
  },
  isAccessibleForFree: true,
  inLanguage: "es",
  image: "https://dribblebros.com/logos/db-face.png",
  url: "https://dribblebros.com/cancha-viva",
  about: [
    "Renovación de canchas de baloncesto",
    "Impacto social a través del deporte",
    "Activación de marca con creadores hispanos",
    "Comunidad de baloncesto en Latinoamérica",
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://dribblebros.com/cancha-viva",
  name: "Cancha Viva — Renovamos canchas. Construimos comunidad.",
  description:
    "Proyecto social de Dribble Bros. para renovar canchas de baloncesto abandonadas en Latinoamérica con identidad del sponsor. Fase 1: República Dominicana, septiembre 2026, durante los Juegos Centroamericanos y del Caribe.",
  inLanguage: "es",
  isPartOf: {
    "@type": "WebSite",
    name: "Dribble Bros.",
    url: "https://dribblebros.com",
  },
  about: {
    "@type": "Project",
    name: "Cancha Viva",
    description:
      "Iniciativa social de largo plazo de Dribble Bros. que renueva canchas de baloncesto abandonadas en comunidades de necesidad en Latinoamérica, asociadas a un sponsor de marca con presencia física permanente.",
    sponsor: {
      "@type": "Organization",
      name: "Dribble Bros.",
      url: "https://dribblebros.com",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "Dribble Bros.",
    url: "https://dribblebros.com",
  },
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
      name: "Cancha Viva",
      item: "https://dribblebros.com/cancha-viva",
    },
  ],
};

export default function CanchaVivaJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SAFE(eventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SAFE(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SAFE(breadcrumbSchema) }}
      />
    </>
  );
}
