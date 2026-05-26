/**
 * Structured data específico para /press.
 *
 * Schemas:
 *   1. AboutPage — formato apropiado para una página "about" institucional.
 *   2. Organization (richer than layout) — incluye contactPoint específico
 *      para prensa, foundingDate, location, etc. AI engines y journalists
 *      pueden extraer datos verificables.
 *   3. BreadcrumbList.
 */

const SAFE = (json: object) => JSON.stringify(json).replace(/</g, "\\u003c");

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: "https://dribblebros.com/press",
  name: "Press Kit — Dribble Bros.",
  description:
    "Press kit oficial de Dribble Bros. con boilerplate, key facts, brand assets, media kit y contacto directo de prensa.",
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
};

const organizationContactSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://dribblebros.com#organization",
  name: "Dribble Bros.",
  legalName: "Dribble Bros. LLC",
  url: "https://dribblebros.com",
  logo: "https://dribblebros.com/logos/db-monogram.png",
  foundingDate: "2021-02-05",
  foundingLocation: {
    "@type": "Place",
    name: "San Juan, Puerto Rico",
  },
  founder: [
    {
      "@type": "Person",
      name: "Daniel Martínez",
      alternateName: "Tío Danny",
      url: "https://dribblebros.com/tio-danny",
    },
    {
      "@type": "Person",
      name: "Bryan Nelson",
      url: "https://dribblebros.com/bryan-nelson",
    },
  ],
  numberOfEmployees: 2,
  areaServed: ["Latin America", "United States Hispanic market"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Press",
    email: "info@dribblebros.com",
    availableLanguage: ["Spanish", "English"],
    areaServed: ["Latin America", "United States"],
  },
  sameAs: [
    "https://www.tiktok.com/@dribblebros",
    "https://www.instagram.com/dribblebros",
    "https://www.youtube.com/@dribblebros",
    "https://www.facebook.com/dribblebros",
  ],
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
      name: "Press Kit",
      item: "https://dribblebros.com/press",
    },
  ],
};

export default function PressJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SAFE(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SAFE(organizationContactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SAFE(breadcrumbSchema) }}
      />
    </>
  );
}
