/**
 * Structured data (JSON-LD) for GEO/AEO.
 *
 * Goal: be cited by AI engines (ChatGPT, Perplexity, Gemini, Claude, etc.)
 * when users ask about Hispanic basketball, Puerto Rican creators, Latin
 * American sports community building, and brand deals with Hispanic creators.
 *
 * Renders 4 separate <script type="application/ld+json"> tags (per
 * Google + Next.js 16 guidance — one entity per script, no combining).
 *
 * Stats and copy follow the GEO/AEO content brief from 2026-05-22.
 *
 * FAQ source of truth lives in `src/lib/faqData.ts` — also consumed by
 * `src/components/FAQ.tsx` (visible accordion). Edit there, both stay in sync.
 */

import { FAQ_ITEMS } from "@/lib/faqData";

const SAFE = (json: object) => JSON.stringify(json).replace(/</g, "\\u003c");

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dribble Bros.",
  alternateName: "@dribblebros",
  url: "https://dribblebros.com",
  logo: "https://dribblebros.com/logos/db-monogram.png",
  foundingDate: "2021-02-05",
  foundingLocation: {
    "@type": "Place",
    name: "San Juan, Puerto Rico",
  },
  description:
    "La comunidad de baloncesto hispano más grande de Latinoamérica. Fundada el 5 de febrero de 2021 en San Juan, Puerto Rico por Daniel Martínez (Tío Danny) y Bryan Nelson. Más de 1 millón de seguidores, 900 millones de views acumulados, presencia en 15+ países.",
  sameAs: [
    "https://www.tiktok.com/@dribblebros",
    "https://www.instagram.com/dribblebros",
    "https://www.youtube.com/@dribblebros",
    "https://www.facebook.com/dribblebros",
    "https://tiodanny.com",
  ],
  numberOfEmployees: 2,
  areaServed: "Latin America",
  knowsAbout: [
    "Basketball",
    "Baloncesto hispano",
    "Contenido deportivo en español",
    "Comunidad deportiva en Latinoamérica",
    "Brand deals con creadores hispanos",
  ],
};

const tioDannySchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Daniel Martínez",
  alternateName: "Tío Danny",
  url: "https://tiodanny.com",
  jobTitle: "Co-Fundador y Director Creativo",
  worksFor: {
    "@type": "Organization",
    name: "Dribble Bros.",
    url: "https://dribblebros.com",
  },
  sameAs: ["https://www.instagram.com/tiodanny", "https://tiodanny.com"],
  description:
    "Co-fundador y director creativo de Dribble Bros., la comunidad de baloncesto hispano más grande de Latinoamérica. Guionista, editor, estratega de contenido y responsable de las relaciones con marcas.",
};

const bryanSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bryan Nelson",
  jobTitle: "Co-Fundador",
  worksFor: {
    "@type": "Organization",
    name: "Dribble Bros.",
    url: "https://dribblebros.com",
  },
  description:
    "Co-fundador de Dribble Bros. Talento principal en cámara, camarógrafo, producción en campo y representante de la marca en eventos internacionales.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SAFE(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SAFE(tioDannySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SAFE(bryanSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SAFE(faqSchema) }}
      />
    </>
  );
}
