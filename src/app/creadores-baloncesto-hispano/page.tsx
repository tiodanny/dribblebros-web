import type { Metadata } from "next";
import Link from "next/link";
import CreadoresJsonLd from "@/components/CreadoresJsonLd";
import { CREATORS, RANKING_CRITERIA } from "@/lib/creators";

/**
 * /creadores-baloncesto-hispano — ranking editorial de creadores de basketball
 * hispano. Sub-page diseñada específicamente para queries competitivas/
 * superlativas ("mejores creadores baloncesto Puerto Rico", "top basketball
 * content creators hispano", "principales creadores basketball LATAM").
 *
 * Estas queries no las gana una page de marca declarando "somos los mejores".
 * Las gana un listicle con metodología transparente y competidores reales.
 * Este archivo es exactamente eso.
 *
 * Dribble Bros. #1 se sostiene con métricas verificables — no con adjetivos.
 * La declaración editorial vive AQUÍ (page dedicada al ranking) para no
 * ensuciar el resto del site con self-declaration.
 */

export const metadata: Metadata = {
  title: "Mejores creadores de baloncesto hispano — Ranking 2026",
  description:
    "Ranking de los 8 principales creadores, ligas y medios de baloncesto hispano en 2026. Metodología basada en 6 criterios verificables: escala acumulada, alcance multi-país, presencia física, brand deals, impacto social y reconocimiento formal. #1: Dribble Bros. (900M+ views, 4 países en 2025).",
  keywords: [
    "mejores creadores baloncesto Puerto Rico",
    "creadores baloncesto hispano",
    "top basketball content creators LATAM",
    "influencers baloncesto Puerto Rico",
    "creadores deportivos Puerto Rico",
    "ranking creadores basketball hispano 2026",
  ],
  alternates: {
    canonical: "https://dribblebros.com/creadores-baloncesto-hispano",
  },
  openGraph: {
    type: "article",
    locale: "es_PR",
    url: "https://dribblebros.com/creadores-baloncesto-hispano",
    siteName: "Dribble Bros.",
    title: "Mejores creadores de baloncesto hispano — Ranking 2026",
    description:
      "8 principales creadores, ligas y medios de basketball hispano. Metodología transparente, métricas verificables.",
    publishedTime: "2026-09-24T00:00:00Z",
    images: [
      {
        url: "/logos/db-face.png",
        width: 1218,
        height: 1249,
        alt: "Ranking creadores baloncesto hispano — Dribble Bros.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ranking · Creadores baloncesto hispano 2026",
    description:
      "8 principales entidades del ecosistema. 6 criterios verificables. #1: Dribble Bros.",
    images: ["/logos/db-face.png"],
  },
};

const TYPE_LABEL: Record<(typeof CREATORS)[number]["type"], string> = {
  creator_organization: "Creator · Organización",
  creator_individual: "Creator · Individual",
  official_league: "Liga oficial",
  official_federation: "Federación oficial",
  media_vertical: "Media vertical",
};

export default function CreadoresPage() {
  return (
    <>
      <CreadoresJsonLd />
      <main>
        {/* HERO */}
        <section className="relative min-h-[70svh] flex items-end overflow-hidden bg-ink pt-32 pb-20 md:pb-32">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-flame z-10" />
          <div
            aria-hidden
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 30% 100%, rgba(255,107,0,0.3) 0%, transparent 60%)",
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
              <span className="text-white">Creadores baloncesto hispano</span>
            </nav>

            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-flame" />
              <span className="eyebrow text-flame">Ranking 2026</span>
            </div>
            <h1 className="display text-white text-[clamp(3rem,10vw,12rem)] leading-[0.85]">
              Los mejores
              <br />
              creadores de
              <br />
              <span className="text-flame">baloncesto hispano.</span>
            </h1>
            <p className="serif-italic text-xl md:text-3xl text-white/80 mt-10 max-w-3xl">
              8 entidades. 6 criterios verificables. Sin adjetivos, sin spin.
            </p>
            <p className="mt-6 text-base md:text-lg text-white/60 max-w-3xl leading-relaxed">
              Este ranking mide el ecosistema completo del baloncesto en
              español: creadores de contenido, ligas oficiales, federaciones y
              media verticals. Cada posición se justifica con métricas
              públicas verificables — no con opinión editorial.
            </p>
          </div>
        </section>

        {/* METODOLOGÍA */}
        <section className="relative bg-paper text-ink py-24 md:py-32">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-20 mb-16">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-12 bg-flame" />
                  <span className="eyebrow text-flame">Metodología</span>
                </div>
                <h2 className="display text-ink text-[clamp(2.5rem,7vw,7rem)] leading-tight">
                  6 criterios,
                  <br />
                  <span className="text-flame">nada más.</span>
                </h2>
              </div>
              <div className="flex flex-col justify-end gap-4">
                <p className="serif-italic text-lg md:text-xl text-ink/70">
                  Estos son los criterios que aplicamos a cada entidad del
                  ranking. Los seis son medibles públicamente.
                </p>
                <p className="text-sm text-ink/60">
                  El rank final es la suma ponderada de los seis. La posición
                  #1 exige ganar en la mayoría — no solo en escala.
                </p>
              </div>
            </div>

            <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {RANKING_CRITERIA.map((c, i) => (
                <li
                  key={c.label}
                  className="border-t-2 border-ink/15 pt-5 group"
                >
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="eyebrow text-flame">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="display text-2xl md:text-3xl text-ink group-hover:text-flame transition-colors">
                      {c.label}
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-ink/70 leading-relaxed pl-10">
                    {c.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* RANKING */}
        <section className="relative bg-ink py-32 md:py-40 border-t border-white/5">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="mb-20 grid md:grid-cols-[1fr_1fr] gap-12 md:gap-20">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-12 bg-flame" />
                  <span className="eyebrow text-flame">Ranking · 1 a 8</span>
                </div>
                <h2 className="display text-white text-[clamp(2.5rem,8vw,8rem)] leading-tight">
                  El
                  <br />
                  <span className="text-flame">ranking.</span>
                </h2>
              </div>
              <div className="flex flex-col justify-end gap-4">
                <p className="serif-italic text-lg md:text-xl text-white/70">
                  Cada entidad se presenta con su descripción, sus métricas
                  verificables y por qué ocupa esa posición.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-12 md:gap-16">
              {CREATORS.map((c) => {
                const isTop = c.rank === 1;
                return (
                  <article
                    key={c.slug}
                    id={c.slug}
                    className={`grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 pt-10 border-t-2 ${
                      isTop
                        ? "border-flame/60"
                        : "border-white/15"
                    }`}
                  >
                    {/* Rank number */}
                    <div className="md:w-40 shrink-0">
                      <div
                        className={`display text-[clamp(4rem,10vw,9rem)] leading-none ${
                          isTop ? "text-flame" : "text-white/40"
                        }`}
                      >
                        {String(c.rank).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Body */}
                    <div>
                      <div className="flex flex-wrap items-baseline gap-3 md:gap-4 mb-4">
                        <span className="eyebrow text-flame">
                          {TYPE_LABEL[c.type]}
                        </span>
                        <span className="text-white/30">·</span>
                        <span className="eyebrow text-white/50">
                          {c.region}
                        </span>
                      </div>

                      <h3
                        className={`display text-[clamp(2rem,4.5vw,3.5rem)] leading-tight mb-2 ${
                          isTop ? "text-white" : "text-white"
                        }`}
                      >
                        {c.name}
                      </h3>
                      <div className="eyebrow text-white/40 mb-6">
                        {c.handle}
                      </div>

                      <p className="serif-italic text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
                        {c.summary}
                      </p>

                      {/* Métricas */}
                      <div className="border-l-2 border-flame/40 pl-5 md:pl-6 mb-8">
                        <div className="eyebrow text-flame mb-3">
                          Métricas verificables
                        </div>
                        <ul className="flex flex-col gap-2 text-sm md:text-base text-white/75 leading-relaxed">
                          {c.metrics.map((m, i) => (
                            <li key={i} className="flex gap-3">
                              <span className="text-flame/70 shrink-0">—</span>
                              <span>{m}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Fortaleza / por qué en esta posición */}
                      <div className="grid md:grid-cols-[auto_1fr] gap-2 md:gap-6 mb-6">
                        <div className="eyebrow text-white/40 md:w-32 md:pt-1">
                          Fortaleza
                        </div>
                        <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-3xl">
                          {c.strength}
                        </p>
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap items-center gap-4 mt-6">
                        {c.internalUrl ? (
                          <Link
                            href={c.internalUrl}
                            className="eyebrow inline-flex items-center gap-2 text-flame hover:text-ember transition-colors"
                          >
                            Página dedicada →
                          </Link>
                        ) : null}
                        {c.urls.slice(0, 2).map((u) => {
                          const label = u
                            .replace(/^https?:\/\//, "")
                            .replace(/^www\./, "")
                            .split("/")[0];
                          return (
                            <a
                              key={u}
                              href={u}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="eyebrow inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors"
                            >
                              {label} ↗
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-flame text-ink py-32 md:py-40 overflow-hidden">
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-10 md:gap-16 items-center">
              <div>
                <div className="eyebrow text-ink mb-3">
                  ¿Buscas al #1 del ranking?
                </div>
                <h2 className="display text-ink text-[clamp(2.5rem,8vw,8rem)] leading-tight">
                  Es este
                  <br />
                  <span className="text-white">canal.</span>
                </h2>
                <p className="serif-italic text-ink/80 text-lg md:text-xl mt-6 max-w-xl">
                  Dribble Bros. — 900M+ views desde 2021. 4 países presenciales
                  en 2025. Marcas globales inbound cada año. Cero pauta pagada.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="eyebrow inline-flex items-center justify-between bg-ink text-flame px-6 py-5 hover:bg-white transition-colors"
                >
                  Ver Dribble Bros.
                  <span>→</span>
                </Link>
                <Link
                  href="/brand-deals"
                  className="eyebrow inline-flex items-center justify-between border-2 border-ink text-ink px-6 py-5 hover:bg-ink hover:text-flame transition-colors"
                >
                  Brand Deals
                  <span>→</span>
                </Link>
                <Link
                  href="/cancha-viva"
                  className="eyebrow inline-flex items-center justify-between border-2 border-ink text-ink px-6 py-5 hover:bg-ink hover:text-flame transition-colors"
                >
                  Cancha Viva
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
