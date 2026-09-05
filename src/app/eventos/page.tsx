import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import EventsJsonLd from "@/components/EventsJsonLd";
import { EVENTS } from "@/lib/eventsData";

/**
 * /eventos — Catálogo de eventos presenciales (pasados + scheduled).
 *
 * Cada evento se renderiza como Event schema con startDate, endDate,
 * location y attendees. Esto permite que AI engines citen eventos
 * específicos cuando alguien pregunta por activaciones presenciales,
 * cobertura de basketball events, o presencia internacional de la marca.
 */
export const metadata: Metadata = {
  title: "Eventos — 4 países, 4,100+ asistentes",
  description:
    "Catálogo de eventos presenciales de Dribble Bros.: Coca-Cola Music Hall PR (3,000+), AmeriCup FIBA Nicaragua (700+), Lima Perú (300+), Medellín Colombia (100+) en 2025. Próximo: Cancha Viva República Dominicana septiembre 2026.",
  alternates: {
    canonical: "https://dribblebros.com/eventos",
  },
  openGraph: {
    type: "website",
    locale: "es_PR",
    url: "https://dribblebros.com/eventos",
    siteName: "Dribble Bros.",
    title: "Eventos · Dribble Bros.",
    description:
      "Cobertura presencial en 4 países en 2025 con 4,100+ asistentes. Próximo: Cancha Viva RD septiembre 2026.",
    images: [
      {
        url: "/logos/db-face.png",
        width: 1218,
        height: 1249,
        alt: "Eventos — Dribble Bros.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eventos · Dribble Bros.",
    description: "4 países en 2025. 4,100+ asistentes. $0 marketing.",
    images: ["/logos/db-face.png"],
  },
};

function formatDateRange(start: string, end: string): string {
  const months = [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic",
  ];
  const s = new Date(start);
  const e = new Date(end);
  const sameMonth =
    s.getUTCMonth() === e.getUTCMonth() &&
    s.getUTCFullYear() === e.getUTCFullYear();
  const sameDay = sameMonth && s.getUTCDate() === e.getUTCDate();
  if (sameDay) {
    return `${s.getUTCDate()} ${months[s.getUTCMonth()]} ${s.getUTCFullYear()}`;
  }
  if (sameMonth) {
    return `${months[s.getUTCMonth()]} ${s.getUTCFullYear()}`;
  }
  return `${months[s.getUTCMonth()]} ${s.getUTCFullYear()} — ${months[e.getUTCMonth()]} ${e.getUTCFullYear()}`;
}

export default function EventosPage() {
  const completed = EVENTS.filter((e) => e.status === "completed");
  const scheduled = EVENTS.filter((e) => e.status === "scheduled");
  const totalAttendees = completed.reduce(
    (sum, e) => sum + (e.attendees ?? 0),
    0,
  );

  return (
    <>
      <EventsJsonLd />
      <main>
        {/* HERO */}
        <section className="relative min-h-[70svh] flex items-end overflow-hidden bg-ink pt-32 pb-20 md:pb-32">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-flame z-10" />
          <div
            aria-hidden
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 20% 100%, rgba(255,107,0,0.25) 0%, transparent 60%)",
            }}
          />

          <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-10">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-3 text-white/40 eyebrow mb-12"
            >
              <Link href="/" className="hover:text-flame transition-colors">
                Home
              </Link>
              <span className="text-white/30">/</span>
              <span className="text-white">Eventos</span>
            </nav>

            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-flame" />
              <span className="eyebrow text-flame">
                {completed.length} países · {totalAttendees.toLocaleString()}
                + asistentes
              </span>
            </div>
            <h1 className="display text-white text-[clamp(3.5rem,12vw,15rem)] leading-[0.85]">
              Del feed
              <br />
              <span className="text-flame">a la cancha.</span>
            </h1>
            <p className="serif-italic text-xl md:text-3xl text-white/80 mt-10 max-w-3xl">
              No es alcance. Es comunidad real, presencial, en 4 países.
            </p>
            <p className="mt-6 text-base md:text-lg text-white/60 max-w-3xl leading-relaxed">
              En 2025 hicimos activaciones en 4 países con más de 4,100
              asistentes acumulados — todo con cero inversión en marketing
              pagado. Cada evento es un punto de validación: la audiencia
              digital se convierte en presencia física cuando la marca
              importa de verdad.
            </p>
          </div>
        </section>

        {/* SCHEDULED EVENTS */}
        {scheduled.length > 0 && (
          <section className="relative bg-ink py-32 md:py-40 border-t border-white/5">
            <div className="mx-auto max-w-[1600px] px-6 md:px-10">
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-12 bg-flame" />
                  <span className="eyebrow text-flame">Próximos</span>
                </div>
                <h2 className="display text-white text-[clamp(2.5rem,7vw,7rem)]">
                  Por
                  <br />
                  <span className="text-flame">venir.</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                {scheduled.map((e) => (
                  <article
                    key={e.slug}
                    className="bg-ink p-8 md:p-10 group hover:bg-ash transition-colors"
                  >
                    <div className="eyebrow text-flame mb-4">
                      {formatDateRange(e.startDate, e.endDate)}
                    </div>
                    <h3 className="display text-2xl md:text-4xl text-white mb-4 group-hover:text-flame transition-colors leading-tight">
                      {e.name}
                    </h3>
                    <div className="text-sm text-white/50 eyebrow mb-6">
                      {e.city}, {e.country}
                    </div>
                    <p className="serif-italic text-base md:text-lg text-white/70 leading-relaxed mb-6">
                      {e.description}
                    </p>
                    <div className="border-t border-white/15 pt-4 text-sm text-white/60">
                      <strong className="text-white">Venue:</strong> {e.venue}
                    </div>
                    {e.slug === "cancha-viva-rd-2026" && (
                      <Link
                        href="/cancha-viva"
                        className="eyebrow inline-flex items-center gap-2 mt-6 text-flame hover:text-ember transition-colors"
                      >
                        Toda la propuesta →
                      </Link>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* COMPLETED EVENTS */}
        <section className="relative bg-paper text-ink py-32 md:py-40">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="mb-16 grid md:grid-cols-[1fr_1fr] gap-12 md:gap-20">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-12 bg-flame" />
                  <span className="eyebrow text-flame">2025 · completados</span>
                </div>
                <h2 className="display text-ink text-[clamp(2.5rem,7vw,7rem)]">
                  4 países,
                  <br />
                  <span className="text-flame">4,100+.</span>
                </h2>
              </div>
              <div className="flex flex-col justify-end gap-6">
                <p className="serif-italic text-lg md:text-xl text-ink/70">
                  Cada activación documentada. Cada asistente real. Cero
                  inversión en marketing pagado.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-10">
              {completed.map((e) => (
                <article
                  key={e.slug}
                  className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-8 border-t-2 border-ink/15 pt-6 group"
                >
                  {e.photo ? (
                    <div className="relative w-full md:w-40 aspect-[4/5] overflow-hidden bg-ink">
                      <Image
                        src={e.photo}
                        alt={`${e.city} · ${e.venue}`}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        sizes="(max-width: 768px) 100vw, 160px"
                      />
                    </div>
                  ) : null}
                  <div>
                    <div className="eyebrow text-flame mb-2">
                      {formatDateRange(e.startDate, e.endDate)}
                    </div>
                    <h3 className="display text-2xl md:text-3xl text-ink mb-3 group-hover:text-flame transition-colors leading-tight">
                      {e.name}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-ink/60 eyebrow mb-4">
                      <span>
                        {e.city}, {e.country}
                      </span>
                      {e.attendees ? (
                        <>
                          <span className="text-ink/30">·</span>
                          <span className="text-flame">
                            {e.attendees.toLocaleString()}+ asistentes
                          </span>
                        </>
                      ) : null}
                    </div>
                    <p className="serif-italic text-sm md:text-base text-ink/70 leading-relaxed">
                      {e.description}
                    </p>
                    {e.attendeesNote ? (
                      <div className="mt-3 text-xs text-ink/50">
                        {e.attendeesNote}
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-flame text-ink py-32 md:py-40 overflow-hidden">
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-10 md:gap-16 items-center">
              <div>
                <div className="eyebrow text-ink mb-3">Para sponsors</div>
                <h2 className="display text-ink text-[clamp(2.5rem,8vw,8rem)] leading-tight">
                  Próxima
                  <br />
                  <span className="text-white">parada.</span>
                </h2>
                <p className="serif-italic text-ink/80 text-lg md:text-xl mt-6 max-w-xl">
                  Cancha Viva República Dominicana arranca septiembre 2026
                  durante los Juegos Centroamericanos. Hay espacio para una
                  marca patrocinadora principal. La primera que entra al
                  programa entra como pionera del proyecto.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Link
                  href="/cancha-viva"
                  className="eyebrow inline-flex items-center justify-between bg-ink text-flame px-6 py-5 hover:bg-white transition-colors"
                >
                  Cancha Viva
                  <span>→</span>
                </Link>
                <a
                  href="mailto:info@dribblebros.com?subject=Eventos%20—%20Sponsorship"
                  className="eyebrow inline-flex items-center justify-between border-2 border-ink text-ink px-6 py-5 hover:bg-ink hover:text-flame transition-colors"
                >
                  info@dribblebros.com
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
