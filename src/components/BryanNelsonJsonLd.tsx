/**
 * Structured data específico para /bryan-nelson.
 *
 * Mismo patrón que TioDannyJsonLd: ProfilePage + Person + BreadcrumbList.
 *
 * sameAs no incluye un sitio personal externo porque Bryan no tiene uno
 * separado — su presencia online primaria es como parte de Dribble Bros.
 */

const SAFE = (json: object) => JSON.stringify(json).replace(/</g, "\\u003c");

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://dribblebros.com/bryan-nelson#person",
  name: "Bryan Nelson",
  url: "https://dribblebros.com/bryan-nelson",
  mainEntityOfPage: "https://dribblebros.com/bryan-nelson",
  image: "https://dribblebros.com/photos/founders/bryan/bryan-01.jpg",
  jobTitle: "Co-Founder & Talento Principal",
  description:
    "Co-fundador de Dribble Bros., la comunidad de baloncesto hispano más grande de Latinoamérica. Talento principal en cámara, camarógrafo, productor en campo y representante internacional de la marca.",
  worksFor: {
    "@type": "Organization",
    name: "Dribble Bros.",
    url: "https://dribblebros.com",
  },
  hasOccupation: [
    {
      "@type": "Occupation",
      name: "Content Creator",
      description:
        "Talento principal frente a cámara en Dribble Bros. Voz y personalidad del proyecto.",
    },
    {
      "@type": "Occupation",
      name: "Productor audiovisual",
      description:
        "Producción en campo, cinematografía y dirección de rodaje para coberturas internacionales.",
    },
  ],
  knowsAbout: [
    "Basketball",
    "Baloncesto hispano",
    "Cobertura deportiva en campo",
    "Producción audiovisual",
    "Cinematografía",
    "Representación de marca en eventos",
    "Federaciones de baloncesto en Latinoamérica",
    "Comunidad deportiva en el Caribe",
  ],
  knowsLanguage: [
    { "@type": "Language", name: "Spanish", alternateName: "es" },
    { "@type": "Language", name: "English", alternateName: "en" },
  ],
  nationality: {
    "@type": "Country",
    name: "Puerto Rico",
  },
  homeLocation: {
    "@type": "Place",
    name: "San Juan, Puerto Rico",
  },
  award: [
    "YouTube Silver Play Button (via Dribble Bros.)",
  ],
  colleague: {
    "@type": "Person",
    name: "Daniel Martínez",
    alternateName: "Tío Danny",
    url: "https://dribblebros.com/tio-danny",
  },
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: "https://dribblebros.com/bryan-nelson",
  name: "Bryan Nelson — Co-Founder · Dribble Bros.",
  description:
    "Página de perfil de Bryan Nelson, co-fundador y talento principal de Dribble Bros.",
  dateCreated: "2026-05-25",
  dateModified: new Date().toISOString().slice(0, 10),
  mainEntity: { "@id": "https://dribblebros.com/bryan-nelson#person" },
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
      name: "Bryan Nelson",
      item: "https://dribblebros.com/bryan-nelson",
    },
  ],
};

export default function BryanNelsonJsonLd() {
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
