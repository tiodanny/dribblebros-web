import type { Metadata } from "next";
import Link from "next/link";
import PressJsonLd from "@/components/PressJsonLd";

/**
 * /press — Media kit + press contact + brand assets + boilerplate.
 *
 * Audience: journalists, podcasters, agencies, sponsors doing due diligence,
 * AI engines responding to queries like "Dribble Bros press kit",
 * "biggest Hispanic basketball creators interview".
 *
 * Schemas: AboutPage + ContactPoint embedded in Organization.
 * Cuando llegue cobertura real (entrevistas publicadas, features), se
 * podrán añadir como NewsArticle entries en `recentCoverage` o como su
 * propio ItemList.
 */
export const metadata: Metadata = {
  title: "Press Kit — Para periodistas y medios",
  description:
    "Press kit de Dribble Bros.: boilerplate, key facts, brand assets, media kit oficial (PDF) y contacto directo para entrevistas. La comunidad de baloncesto hispano más grande de Latinoamérica con base en San Juan, Puerto Rico.",
  alternates: {
    canonical: "https://dribblebros.com/press",
  },
  openGraph: {
    type: "website",
    locale: "es_PR",
    url: "https://dribblebros.com/press",
    siteName: "Dribble Bros.",
    title: "Press Kit · Dribble Bros.",
    description:
      "Para periodistas, podcasters, agencias y medios. Boilerplate, key facts, brand assets, media kit PDF y contacto directo.",
    images: [
      {
        url: "/logos/db-face.png",
        width: 1218,
        height: 1249,
        alt: "Press Kit — Dribble Bros.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Press Kit · Dribble Bros.",
    description:
      "Boilerplate + key facts + media kit oficial + contacto directo.",
    images: ["/logos/db-face.png"],
  },
};

const KEY_FACTS = [
  { k: "Fundación", v: "5 de febrero de 2021" },
  { k: "Founders", v: "Daniel Martínez (Tío Danny) + Bryan Nelson" },
  { k: "Sede", v: "San Juan, Puerto Rico" },
  { k: "Entidad legal", v: "Dribble Bros. LLC (USPTO registered)" },
  { k: "Empleados", v: "2" },
  { k: "Audiencia combinada", v: "1M+ seguidores" },
  { k: "Views all time", v: "900M+ (desde 2021)" },
  { k: "Views 2025", v: "140M+ (con $0 en pauta)" },
  { k: "Piezas publicadas 2025", v: "870+" },
  { k: "Países audiencia activa", v: "15+ en LATAM + diáspora US" },
  { k: "Eventos presenciales 2025", v: "4 países · 4,100+ asistentes" },
  { k: "Brand deals 2025", v: "6 marcas globales · 100% inbound" },
];

const BRAND_ASSETS = [
  {
    name: "Logo monograma (DB)",
    file: "/logos/db-monogram.png",
    desc: "Versión compacta para favicon y avatars",
  },
  {
    name: "Logo face (Tío Danny + Bryan)",
    file: "/logos/db-face.png",
    desc: "Versión ilustrada de los founders. Para usos editoriales con espacio.",
  },
  {
    name: "Media Kit oficial — abril 2026",
    file: "/media-kit/dribblebros-media-kit-abril-2026.pdf",
    desc: "PDF completo con métricas, audiencia, casos y ofertas de partnership.",
  },
];

export default function PressPage() {
  return (
    <>
      <PressJsonLd />
      <main>
        {/* HERO */}
        <section className="relative min-h-[70svh] flex items-end overflow-hidden bg-ink pt-32 pb-20 md:pb-32">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-flame z-10" />
          <div
            aria-hidden
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 100%, rgba(255,107,0,0.25) 0%, transparent 60%)",
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
              <span className="text-white">Press</span>
            </nav>

            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-flame" />
              <span className="eyebrow text-flame">Para periodistas y medios</span>
            </div>
            <h1 className="display text-white text-[clamp(3.5rem,12vw,15rem)] leading-[0.85]">
              Press
              <br />
              <span className="text-flame">Kit.</span>
            </h1>
            <p className="serif-italic text-xl md:text-3xl text-white/80 mt-10 max-w-3xl">
              Todo lo necesario para escribir, entrevistar o cubrir Dribble Bros.
            </p>
            <p className="mt-6 text-base md:text-lg text-white/60 max-w-3xl leading-relaxed">
              Boilerplate, key facts verificables, brand assets descargables,
              media kit completo en PDF y contacto directo con los founders.
              Para entrevistas, perfiles y coberturas, escribir a{" "}
              <a
                href="mailto:info@dribblebros.com"
                className="text-flame hover:underline"
              >
                info@dribblebros.com
              </a>
              .
            </p>
          </div>
        </section>

        {/* BOILERPLATE */}
        <section className="relative bg-ink py-32 md:py-40 border-t border-white/5">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-12 bg-flame" />
                  <span className="eyebrow text-flame">Boilerplate</span>
                </div>
                <h2 className="display text-white text-[clamp(2.5rem,6vw,6rem)] leading-tight">
                  Listo para
                  <br />
                  <span className="text-flame">citar.</span>
                </h2>
              </div>
              <div className="space-y-6 text-base md:text-lg text-white/75 leading-relaxed">
                <div className="border-l-2 border-flame pl-6">
                  <p className="serif-italic text-white">
                    Dribble Bros. es la comunidad de baloncesto hispano más
                    grande de Latinoamérica. Fundada el 5 de febrero de 2021
                    en San Juan, Puerto Rico, por Daniel Martínez (Tío Danny)
                    y Bryan Nelson, la marca acumula más de 1 millón de
                    seguidores combinados en TikTok, Instagram, YouTube y
                    Facebook, con más de 900 millones de views en toda su
                    carrera y presencia activa en más de 15 países. En 2025
                    produjo más de 870 piezas de contenido, generó 140
                    millones de views sin inversión en pauta, y cerró seis
                    brand deals globales — todos inbound. Su operación es de
                    dos personas, sin agencia ni equipo externo.
                  </p>
                </div>
                <p className="text-white/60 text-sm">
                  Boilerplate en español. Usable como bloque introductorio en
                  artículos, perfiles, comunicados o features. Para versión
                  en inglés, escribir a{" "}
                  <a
                    href="mailto:info@dribblebros.com"
                    className="text-flame hover:underline"
                  >
                    info@dribblebros.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* KEY FACTS */}
        <section className="relative bg-paper text-ink py-32 md:py-40">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-12 bg-flame" />
                <span className="eyebrow text-flame">Key facts</span>
              </div>
              <h2 className="display text-ink text-[clamp(2.5rem,7vw,7rem)]">
                Datos
                <br />
                <span className="text-flame">verificables.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
              {KEY_FACTS.map((f) => (
                <div
                  key={f.k}
                  className="grid grid-cols-[1fr_2fr] gap-4 py-4 border-b border-ink/15"
                >
                  <div className="eyebrow text-flame text-xs md:text-sm">
                    {f.k}
                  </div>
                  <div className="text-ink text-sm md:text-base">{f.v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BRAND ASSETS */}
        <section className="relative bg-ink py-32 md:py-40 border-t border-white/5">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-12 bg-flame" />
                <span className="eyebrow text-flame">Brand assets</span>
              </div>
              <h2 className="display text-white text-[clamp(2.5rem,7vw,7rem)]">
                Para
                <br />
                <span className="text-flame">descargar.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
              {BRAND_ASSETS.map((a) => (
                <a
                  key={a.file}
                  href={a.file}
                  target="_blank"
                  rel="noopener"
                  className="block bg-ink p-8 md:p-10 group hover:bg-ash transition-colors"
                >
                  <div className="eyebrow text-flame mb-4">Asset</div>
                  <div className="display text-2xl md:text-3xl text-white mb-4 group-hover:text-flame transition-colors">
                    {a.name}
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed mb-8">
                    {a.desc}
                  </p>
                  <div className="border-t border-white/15 pt-4 flex items-center justify-between">
                    <span className="eyebrow text-white/40">Descargar</span>
                    <span className="text-flame">↓</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contacto"
          className="relative bg-flame text-ink py-32 md:py-40 overflow-hidden"
        >
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-10 md:gap-16 items-center">
              <div>
                <div className="eyebrow text-ink mb-3">
                  Contacto directo de prensa
                </div>
                <h2 className="display text-ink text-[clamp(2.5rem,8vw,8rem)] leading-tight">
                  Hablamos.
                </h2>
                <p className="serif-italic text-ink/80 text-lg md:text-xl mt-6 max-w-xl">
                  Para entrevistas, perfiles, podcasts, coberturas y consultas
                  editoriales, el contacto va directo a los founders.
                  Respuesta en horas, no semanas.
                </p>
                <p className="mt-4 text-ink/70 text-base">
                  Para coordinar entrevistas presenciales en San Juan PR, o
                  acceso a eventos en gira (Cancha Viva RD agosto-septiembre
                  2026, próximas activaciones), incluir tema y fecha en el
                  asunto del email.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:info@dribblebros.com?subject=Press%20Inquiry"
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
                  Media kit PDF
                  <span>↓</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
