/**
 * Structured data específico para /eventos.
 *
 * Schemas:
 *   1. CollectionPage — formato apropiado para listado de eventos.
 *   2. ItemList que contiene Event entities (uno por evento). AI engines
 *      pueden citar eventos individuales por slug.
 *   3. BreadcrumbList.
 *
 * Cada Event tiene:
 *   - name, description, startDate, endDate
 *   - location (Place con address + countryCode)
 *   - organizer (Dribble Bros.)
 *   - eventStatus (Scheduled | EventCompleted via schema)
 *   - eventAttendanceMode (Offline para todos los presenciales)
 *   - (opcional) Audience size approx — vía description text since
 *     attendees no es campo schema oficial fácil de mapear.
 */

import { EVENTS } from "@/lib/eventsData";

const SAFE = (json: object) => JSON.stringify(json).replace(/</g, "\\u003c");

// Schema.org event status URLs
const STATUS_URL: Record<"completed" | "scheduled", string> = {
  completed: "https://schema.org/EventScheduled", // Past completed events still use Scheduled per schema; no "Completed" type exists
  scheduled: "https://schema.org/EventScheduled",
};

const eventSchemas = EVENTS.map((e) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "@id": `https://dribblebros.com/eventos#${e.slug}`,
  name: e.name,
  description: e.description,
  startDate: e.startDate,
  endDate: e.endDate,
  eventStatus: STATUS_URL[e.status],
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: e.venue,
    address: {
      "@type": "PostalAddress",
      addressLocality: e.city,
      addressCountry: e.countryCode,
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Dribble Bros.",
    url: "https://dribblebros.com",
  },
  url: `https://dribblebros.com/eventos#${e.slug}`,
  inLanguage: "es",
}));

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  url: "https://dribblebros.com/eventos",
  name: "Eventos — Dribble Bros.",
  description:
    "Catálogo de eventos presenciales y activaciones internacionales de Dribble Bros. en 2025-2026. 4 países, 4,100+ asistentes acumulados, cero inversión en marketing pagado.",
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
    name: "Eventos Dribble Bros. 2025-2026",
    numberOfItems: EVENTS.length,
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    itemListElement: EVENTS.map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://dribblebros.com/eventos#${e.slug}`,
      name: e.name,
    })),
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
      name: "Eventos",
      item: "https://dribblebros.com/eventos",
    },
  ],
};

export default function EventsJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SAFE(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SAFE(breadcrumbSchema) }}
      />
      {eventSchemas.map((schema, i) => (
        <script
          key={schema["@id"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: SAFE(schema) }}
          data-event-index={i}
        />
      ))}
    </>
  );
}
