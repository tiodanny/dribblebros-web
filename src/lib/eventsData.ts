/**
 * Source of truth para los eventos presenciales de Dribble Bros.
 *
 * Consumido por:
 *   - src/app/eventos/page.tsx       → grid visible
 *   - src/components/EventsJsonLd.tsx → ItemList of Event entities
 *
 * Reglas:
 * - Solo eventos confirmados ejecutados (status: completed) o programados
 *   con fecha y lugar definidos (status: scheduled).
 * - Cada evento debe tener attendeesCount verificable (no inflado).
 * - eventStartDate y eventEndDate idealmente ISO date; si solo se conoce
 *   el año/mes, se aproxima al primer día (ej. 2025-05-01 para "mayo 2025").
 */

export type EventStatus = "completed" | "scheduled";

export type DBEvent = {
  slug: string;
  name: string;
  city: string;
  country: string;
  countryCode: string;
  /** ISO date — start. */
  startDate: string;
  /** ISO date — end. Si fue evento de un día, igual al start. */
  endDate: string;
  /** Nombre del lugar/venue específico. */
  venue: string;
  /** Asistencia presencial confirmada. Cuando aplique. */
  attendees?: number;
  /** Notas adicionales (online attendance, contexto). */
  attendeesNote?: string;
  status: EventStatus;
  /** Descripción del evento para schema y para visible. */
  description: string;
  /** Photo path opcional. */
  photo?: string;
};

export const EVENTS: DBEvent[] = [
  {
    slug: "cancha-viva-rd-2026",
    name: "Cancha Viva — Fase 1: República Dominicana",
    city: "Santo Domingo",
    country: "República Dominicana",
    countryCode: "DO",
    startDate: "2026-09-01",
    endDate: "2026-09-30",
    venue: "Cancha por anunciar · durante Juegos Centroamericanos y del Caribe",
    status: "scheduled",
    description:
      "Lanzamiento del proyecto Cancha Viva en República Dominicana durante los Juegos Centroamericanos y del Caribe 2026. Renovación física + activación comunitaria + cobertura distribuida a 1M+ audiencia. Primera fase de un programa multi-país.",
  },
  {
    slug: "coca-cola-music-hall-pr-2025",
    name: '"La Fórmula del Éxito" — Coca-Cola Music Hall',
    city: "San Juan",
    country: "Puerto Rico",
    countryCode: "PR",
    startDate: "2025-05-01",
    endDate: "2025-05-01",
    venue: "Coca-Cola Music Hall, Distrito T-Mobile",
    attendees: 3000,
    attendeesNote: "3,000+ presencial + 1,500+ virtual",
    status: "completed",
    description:
      "Evento presencial co-hosteado por Tío Danny en el Coca-Cola Music Hall de PR. 3,000+ asistentes presenciales más 1,500+ virtuales. Activación con audiencia local de Dribble Bros. y Elías Valentín.",
    photo: "/photos/events/cch/cch-01.jpg",
  },
  {
    slug: "americup-fiba-nicaragua-2025",
    name: "AmeriCup FIBA — Nicaragua",
    city: "Managua",
    country: "Nicaragua",
    countryCode: "NI",
    startDate: "2025-08-01",
    endDate: "2025-08-31",
    venue: "Sedes FIBA AmeriCup",
    attendees: 700,
    status: "completed",
    description:
      "Cobertura presencial de la AmeriCup FIBA en Nicaragua. Activación con federaciones locales, jugadores y comunidad. 700+ asistentes en las actividades de Dribble Bros.",
    photo: "/photos/events/nicaragua/nicaragua-01.jpg",
  },
  {
    slug: "meet-greet-lima-2025",
    name: "Meet & Greet — Lima",
    city: "Lima",
    country: "Perú",
    countryCode: "PE",
    startDate: "2025-09-01",
    endDate: "2025-09-30",
    venue: "Espacio comunitario Lima",
    attendees: 300,
    status: "completed",
    description:
      "Activación presencial en Lima con la audiencia peruana de Dribble Bros. 300+ asistentes en formato meet & greet con basketball local.",
    photo: "/photos/events/peru/peru-01.jpg",
  },
  {
    slug: "activacion-medellin-2025",
    name: "Activación local — Medellín",
    city: "Medellín",
    country: "Colombia",
    countryCode: "CO",
    startDate: "2025-10-01",
    endDate: "2025-10-31",
    venue: "Espacio comunitario Medellín",
    attendees: 100,
    status: "completed",
    description:
      "Activación presencial en Medellín. 100+ asistentes con basketball comunitario local. Cobertura distribuida a la audiencia regional de Dribble Bros.",
    photo: "/photos/events/colombia/colombia-01.jpg",
  },
];
