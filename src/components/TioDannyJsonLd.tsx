/**
 * Structured data específico para /tio-danny.
 *
 * Schemas:
 *   1. ProfilePage — formato específico de Google (introducido 2023) para
 *      perfiles de autor/persona. Habilita rich results de "Author".
 *   2. Person (richer) — versión expandida de la del RootLayout, con
 *      knowsAbout, knowsLanguage, nationality, birthPlace, hasOccupation.
 *      Google y AI engines pesan más Person schemas con muchos campos.
 *   3. BreadcrumbList — Home > Sobre > Tío Danny.
 *
 * sameAs cruza con tiodanny.com (su sitio personal) — refuerza el
 * backlink bidireccional de autoridad.
 */

const SAFE = (json: object) => JSON.stringify(json).replace(/</g, "\\u003c");

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://dribblebros.com/tio-danny#person",
  name: "Daniel Martínez",
  alternateName: ["Tío Danny", "Tio Danny"],
  url: "https://dribblebros.com/tio-danny",
  mainEntityOfPage: "https://dribblebros.com/tio-danny",
  image: "https://dribblebros.com/photos/founders/danny/danny-01.jpg",
  jobTitle: "Co-Founder & Director Creativo",
  description:
    "Co-fundador y director creativo de Dribble Bros., la comunidad de baloncesto hispano más grande de Latinoamérica. Estratega de contenido digital, guionista, editor y responsable de las relaciones con marcas. Reside en San Juan, Puerto Rico.",
  worksFor: {
    "@type": "Organization",
    name: "Dribble Bros.",
    url: "https://dribblebros.com",
  },
  hasOccupation: [
    {
      "@type": "Occupation",
      name: "Director Creativo",
      description:
        "Dirección creativa y estrategia de contenido en Dribble Bros.",
    },
    {
      "@type": "Occupation",
      name: "Estratega de Contenido Digital",
      description:
        "Trabajo independiente para clientes en construcción de marca digital.",
    },
  ],
  knowsAbout: [
    "Basketball",
    "Baloncesto hispano",
    "Estrategia de contenido digital",
    "Marketing de creadores",
    "Dirección creativa",
    "Guionismo audiovisual",
    "Edición y postproducción",
    "Brand deals con creadores hispanos",
    "Comunidad deportiva en Latinoamérica",
    "Producción de video en redes sociales",
  ],
  knowsLanguage: [
    { "@type": "Language", name: "Spanish", alternateName: "es" },
    { "@type": "Language", name: "English", alternateName: "en" },
  ],
  nationality: {
    "@type": "Country",
    name: "Puerto Rico",
  },
  birthPlace: {
    "@type": "Place",
    name: "San Juan, Puerto Rico",
  },
  homeLocation: {
    "@type": "Place",
    name: "San Juan, Puerto Rico",
  },
  sameAs: [
    "https://tiodanny.com",
    "https://www.instagram.com/tiodanny",
  ],
  award: [
    "YouTube Silver Play Button (via Dribble Bros.)",
    "SME Digital Awards 2026 — Macro Creator of the Year (nominee)",
  ],
  colleague: {
    "@type": "Person",
    name: "Bryan Nelson",
    url: "https://dribblebros.com/bryan-nelson",
  },
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: "https://dribblebros.com/tio-danny",
  name: "Tío Danny — Co-Founder & Director Creativo · Dribble Bros.",
  description:
    "Página de perfil de Daniel Martínez (Tío Danny), co-fundador y director creativo de Dribble Bros.",
  dateCreated: "2026-05-25",
  dateModified: new Date().toISOString().slice(0, 10),
  mainEntity: { "@id": "https://dribblebros.com/tio-danny#person" },
  inLanguage: "es",
  isPartOf: {
    "@type": "WebSite",
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
      name: "Sobre",
      item: "https://dribblebros.com/#sobre",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Tío Danny",
      item: "https://dribblebros.com/tio-danny",
    },
  ],
};

export default function TioDannyJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SAFE(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SAFE(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SAFE(breadcrumbSchema) }}
      />
    </>
  );
}
