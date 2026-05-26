import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CanchaVivaJsonLd from "@/components/CanchaVivaJsonLd";

/**
 * Sub-page dedicada al proyecto Cancha Viva.
 *
 * Existe (vs. solo la sección en home) por dos razones GEO/AEO:
 * 1. Es un entry point específico para queries sobre "activaciones de marca
 *    en basketball LATAM", "renovación de canchas", "Juegos Centroamericanos
 *    2026", "deportes + impacto social". AI engines pesan más una página
 *    dedicada que una sección dentro de otra.
 * 2. Permite Event schema con fechas/lugar específicos (Sep 2026 RD),
 *    que la sección home no podía expresar correctamente.
 *
 * Contenido expandido vs. home: añade contexto del problema, deliverables
 * del sponsor, track record de Dribble Bros como plataforma de distribución,
 * y plan de fases multi-año. La home tiene el teaser; aquí está la propuesta.
 */
export const metadata: Metadata = {
  title: "Cancha Viva — Renovamos canchas. Construimos comunidad.",
  description:
    "Proyecto social de Dribble Bros. para renovar canchas de baloncesto abandonadas en Latinoamérica con identidad del sponsor. Fase 1: República Dominicana, septiembre 2026, durante los Juegos Centroamericanos y del Caribe. Renovación física + activación comunitaria + contenido distribuido a 1M+ audiencia.",
  alternates: {
    canonical: "https://dribblebros.com/cancha-viva",
  },
  openGraph: {
    type: "website",
    locale: "es_PR",
    url: "https://dribblebros.com/cancha-viva",
    siteName: "Dribble Bros.",
    title: "Cancha Viva — Tu marca grabada en el cemento.",
    description:
      "Renovamos canchas abandonadas en LATAM con identidad del sponsor. Fase 1: RD durante los Juegos Centroamericanos 2026.",
    images: [
      {
        url: "/logos/db-face.png",
        width: 1218,
        height: 1249,
        alt: "Cancha Viva — Dribble Bros.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cancha Viva — Dribble Bros.",
    description:
      "Renovación física + comunidad + contenido a 1M+ audiencia. Fase 1: RD septiembre 2026.",
    images: ["/logos/db-face.png"],
  },
};

export default function CanchaVivaPage() {
  return (
    <>
      <Nav />
      <CanchaVivaJsonLd />
      <main>
        {/* HERO */}
        <section
          id="top"
          className="relative min-h-[80svh] flex items-end overflow-hidden bg-ink pt-32 pb-20 md:pb-32"
        >
          {/* Orange top bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-flame z-10" />
          {/* Background flame */}
          <div
            aria-hidden
            className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
          >
            <div className="display text-flame/[0.04] text-[clamp(20rem,40vw,55rem)] whitespace-nowrap select-none">
              CANCHA VIVA
            </div>
          </div>
          <div
            aria-hidden
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 30% 100%, rgba(255,107,0,0.25) 0%, transparent 60%)",
            }}
          />

          <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-10">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-3 text-white/40 eyebrow mb-12"
            >
              <Link
                href="/"
                className="hover:text-flame transition-colors"
              >
                Home
              </Link>
              <span className="text-white/30">/</span>
              <span className="text-white">Cancha Viva</span>
            </nav>

            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-flame" />
              <span className="eyebrow text-flame">
                Proyecto · by Dribble Bros.
              </span>
            </div>
            <h1 className="display text-white text-[clamp(4rem,13vw,16rem)] leading-[0.85]">
              Cancha
              <br />
              <span className="text-flame">Viva.</span>
            </h1>
            <p className="serif-italic text-xl md:text-3xl text-white/80 mt-10 max-w-3xl">
              Renovamos canchas. Construimos comunidad. Generamos contenido.
            </p>
            <p className="mt-6 text-base md:text-lg text-white/60 max-w-3xl leading-relaxed">
              Millones de jóvenes en Latinoamérica viven rodeados de canchas
              que existen — pero están abandonadas. Cancha Viva las vuelve a
              la vida, y convierte el proceso en una campaña completa para
              una marca patrocinadora.
            </p>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="relative bg-ink py-32 md:py-40 border-t border-white/5">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-center">
              <div className="display text-flame text-[clamp(6rem,15vw,15rem)] leading-none">
                70<span className="text-flame/60">%</span>
              </div>
              <div className="max-w-2xl">
                <div className="eyebrow text-flame mb-3">El problema</div>
                <h2 className="display text-3xl md:text-5xl text-white leading-tight mb-6">
                  de las canchas públicas en Latinoamérica están sin
                  mantenimiento activo.
                </h2>
                <p className="serif-italic text-lg md:text-xl text-white/70 mb-4">
                  El deporte como herramienta de comunidad está siendo
                  desperdiciado donde más se necesita.
                </p>
                <p className="text-base md:text-lg text-white/60 leading-relaxed">
                  Para las marcas, esto es contenido auténtico esperando
                  ser activado. Para las comunidades, es infraestructura
                  esperando volver a la vida. Cancha Viva conecta las dos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PILLARS */}
        <section className="relative bg-ink py-32 md:py-40 border-t border-white/5">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
              <div>
                <div className="eyebrow text-flame mb-3">La solución</div>
                <h2 className="display text-white text-[clamp(2.5rem,6vw,6rem)]">
                  Tres pilares,
                  <br />
                  <span className="text-flame">una activación.</span>
                </h2>
              </div>
              <p className="serif-italic text-lg md:text-xl text-white/60 max-w-md">
                No es content marketing. Es infraestructura, comunidad y
                contenido en una sola jugada.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
              {[
                {
                  n: "01",
                  label: "Renovación",
                  copy: "Transformación física completa de una cancha abandonada. El nombre de la marca queda grabado en el cemento — literal y permanente. No es un post que se va. Es presencia permanente en el espacio público.",
                },
                {
                  n: "02",
                  label: "Deporte",
                  copy: "Evento de inauguración con la comunidad local: torneo, exhibición, acceso al juego en el espacio recién recuperado. Talento basketball local participa. La marca patrocina la activación presencial completa.",
                },
                {
                  n: "03",
                  label: "Contenido",
                  copy: "Mini documental + reels antes/después + cobertura en vivo del proceso completo, distribuido a la audiencia orgánica de 1M+ seguidores de Dribble Bros. en TikTok, Instagram, YouTube y Facebook.",
                },
              ].map((p) => (
                <div
                  key={p.label}
                  className="bg-ink p-8 md:p-10 group hover:bg-ash transition-colors"
                >
                  <div className="eyebrow text-flame/60 mb-4">{p.n}</div>
                  <div className="display text-4xl md:text-5xl text-white mb-6 group-hover:text-flame transition-colors">
                    {p.label}
                  </div>
                  <p className="text-sm md:text-base text-white/70 leading-relaxed">
                    {p.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="relative bg-paper text-ink py-32 md:py-40">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="mb-16 md:mb-24">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-12 bg-flame" />
                <span className="eyebrow text-flame">El proceso</span>
              </div>
              <h2 className="display text-ink text-[clamp(2.5rem,7vw,7rem)] max-w-4xl">
                Una campaña completa,{" "}
                <span className="serif-italic text-ink/70 font-normal normal-case text-3xl md:text-5xl">
                  no solo un post.
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  n: "01",
                  t: "Identificar",
                  d: "Equipo de Dribble Bros. + scouts locales identifican la cancha óptima: comunidad activa, ubicación visible, potencial de impacto.",
                },
                {
                  n: "02",
                  t: "Renovar",
                  d: "Renovación física completa con branding del sponsor. Pintura, aros, iluminación si aplica, mejoras estructurales. El nombre de la marca queda grabado en el cemento.",
                },
                {
                  n: "03",
                  t: "Activar",
                  d: "Evento de inauguración: torneo o exhibición con jugadores locales y Dribble Bros. en vivo. La comunidad regresa al espacio. La marca patrocina la jornada completa.",
                },
                {
                  n: "04",
                  t: "Documentar",
                  d: "Mini documental + reels antes/después + cobertura del evento + storytelling de la comunidad, distribuido a 1M+ audiencia orgánica en TikTok, IG, YouTube y FB.",
                },
              ].map((s) => (
                <div
                  key={s.n}
                  className="border-l-2 border-flame pl-5 py-2"
                >
                  <div className="display text-flame text-4xl md:text-5xl mb-2">
                    {s.n}
                  </div>
                  <div className="display text-2xl md:text-3xl text-ink mb-3">
                    {s.t}
                  </div>
                  <p className="text-sm md:text-base text-ink/70 leading-relaxed">
                    {s.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FASE 1 — REPÚBLICA DOMINICANA */}
        <section
          id="fase-1"
          className="relative bg-ink py-32 md:py-40 border-t border-white/5"
        >
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-12 bg-flame" />
                  <span className="eyebrow text-flame">Fase 1 · Lanzamiento</span>
                </div>
                <h2 className="display text-white text-[clamp(3rem,8vw,8rem)] leading-[0.9]">
                  República
                  <br />
                  <span className="text-flame">Dominicana.</span>
                </h2>
                <div className="mt-6 eyebrow text-white/60">
                  Septiembre 2026 · Santo Domingo
                </div>

                <p className="mt-10 text-base md:text-lg text-white/70 leading-relaxed max-w-xl">
                  Cancha Viva arranca en República Dominicana durante los{" "}
                  <strong className="text-white">
                    Juegos Centroamericanos y del Caribe
                  </strong>{" "}
                  — el momento regional más importante del año en RD para
                  baloncesto. Audiencia concentrada, conversación cultural en
                  pico, oportunidad única de asociar tu marca con un legado
                  físico y un evento global del deporte.
                </p>

                <p className="mt-4 text-base md:text-lg text-white/60 leading-relaxed max-w-xl">
                  Una cancha. Una comunidad. Un evento. Y un paquete completo
                  de contenido orgánico distribuido a la audiencia de Dribble
                  Bros. de más de 1 millón de seguidores en 15+ países
                  hispanohablantes.
                </p>
              </div>

              {/* Visual card */}
              <div className="relative aspect-[4/5] md:aspect-[5/6] flex items-center justify-center bg-gradient-to-br from-ash to-ink border border-white/10 overflow-hidden">
                <Image
                  src="/flags/dominican-republic.svg"
                  alt="Bandera de República Dominicana"
                  fill
                  aria-hidden
                  className="object-cover opacity-[0.18] pointer-events-none"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/70"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-40"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 60%, rgba(255,107,0,0.4) 0%, transparent 65%)",
                  }}
                />
                <div className="relative z-10 flex flex-col items-center gap-8 p-8 text-center">
                  <div className="relative w-32 h-32 md:w-48 md:h-48">
                    <Image
                      src="/logos/db-face.png"
                      alt="Dribble Bros."
                      fill
                      className="object-contain drop-shadow-[0_20px_40px_rgba(255,107,0,0.3)]"
                      sizes="(max-width: 768px) 128px, 192px"
                    />
                  </div>
                  <div className="display text-3xl md:text-5xl text-white leading-none">
                    Fase 1
                  </div>
                  <div className="border-t border-white/15 pt-4 max-w-[280px] text-sm text-white/60 leading-relaxed">
                    Una cancha renovada · Un evento de inauguración · Un mini
                    documental · Cobertura para 1M+ audiencia.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERABLES */}
        <section className="relative bg-paper text-ink py-32 md:py-40">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-12 bg-flame" />
                <span className="eyebrow text-flame">Lo que el sponsor recibe</span>
              </div>
              <h2 className="display text-ink text-[clamp(2.5rem,7vw,7rem)] max-w-4xl">
                No un post.{" "}
                <span className="text-flame">Un legado.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-10">
              {[
                {
                  k: "Branding físico permanente",
                  v: "Logo de la marca grabado en la cancha renovada. Sigue ahí años después del evento.",
                },
                {
                  k: "Activación presencial",
                  v: "Evento de inauguración con la comunidad local, talento basketball, acceso de marca al espacio.",
                },
                {
                  k: "Mini documental",
                  v: "Producción audiovisual de 5-10 min: el antes, el proceso, la inauguración, las personas. Distribuible en todos los canales del sponsor.",
                },
                {
                  k: "Reels antes/después",
                  v: "Serie de piezas cortas optimizadas para TikTok/Reels distribuidas a la audiencia orgánica de Dribble Bros.",
                },
                {
                  k: "Cobertura live",
                  v: "Streams + stories desde el evento de inauguración. Audiencia conectada en tiempo real.",
                },
                {
                  k: "PR + storytelling de comunidad",
                  v: "Testimonios reales de la comunidad beneficiada. Material editorial para press y otras plataformas del sponsor.",
                },
              ].map((d) => (
                <div
                  key={d.k}
                  className="border-t border-ink/20 pt-5"
                >
                  <div className="eyebrow text-flame mb-2">{d.k}</div>
                  <div className="serif-italic text-ink/80 text-base md:text-lg">
                    {d.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY DRIBBLE BROS */}
        <section className="relative bg-ink py-32 md:py-40 border-t border-white/5">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-12 bg-flame" />
                  <span className="eyebrow text-flame">Por qué Dribble Bros.</span>
                </div>
                <h2 className="display text-white text-[clamp(2.5rem,6vw,6rem)]">
                  Audiencia ya
                  <br />
                  <span className="text-flame">construida.</span>
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                {[
                  { n: "900M+", l: "views all time" },
                  { n: "1M+", l: "seguidores" },
                  { n: "140M+", l: "views en 2025" },
                  { n: "15+", l: "países activos" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="border-t border-white/15 pt-4"
                  >
                    <div className="display text-3xl md:text-5xl text-white">
                      {s.n}
                    </div>
                    <div className="eyebrow text-flame mt-2">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-12 serif-italic text-lg md:text-xl text-white/60 max-w-3xl">
              Cancha Viva no es un proyecto de cero alcance. Cada activación
              se distribuye orgánicamente a una audiencia ya construida en 4
              años de trabajo, 4,100+ asistentes a eventos en 4 países, y 6
              brand deals inbound en 2025.
            </p>
          </div>
        </section>

        {/* QUOTE + CTA */}
        <section
          id="sponsorship"
          className="relative bg-flame text-ink py-32 md:py-40 overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="display text-ink/5 text-[clamp(15rem,30vw,40rem)] whitespace-nowrap">
              CEMENTO
            </div>
          </div>
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-10">
            <blockquote className="serif-italic text-ink text-3xl md:text-6xl leading-tight max-w-4xl mb-16">
              &ldquo;Tu marca no solo aparece en pantalla.
              <br />
              <span className="text-white">Queda grabada en el cemento.</span>
              &rdquo;
            </blockquote>

            <div className="grid md:grid-cols-[1.5fr_1fr] gap-10 md:gap-16 items-center border-t-2 border-ink/30 pt-12">
              <div>
                <div className="eyebrow text-ink mb-3">Sponsorship · Fase 1 RD</div>
                <h3 className="display text-ink text-[clamp(2rem,5vw,5rem)] leading-tight">
                  Hablemos.
                </h3>
                <p className="serif-italic text-ink/80 text-lg md:text-xl mt-6 max-w-xl">
                  Cancha Viva es el primer proyecto de impacto social de
                  largo plazo en el nicho del baloncesto hispano digital. La
                  primera marca que entra al programa entra como pionera.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:info@dribblebros.com?subject=Sponsorship%20—%20Cancha%20Viva%20Fase%201%20RD"
                  className="eyebrow inline-flex items-center justify-between bg-ink text-flame px-6 py-5 hover:bg-white transition-colors"
                >
                  info@dribblebros.com
                  <span>→</span>
                </a>
                <a
                  href="/media-kit/dribblebros-media-kit-abril-2026.pdf"
                  target="_blank"
                  rel="noopener"
                  className="eyebrow inline-flex items-center justify-between border-2 border-ink text-ink px-6 py-5 hover:bg-ink hover:text-flame transition-colors"
                >
                  Media kit
                  <span>↓</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
