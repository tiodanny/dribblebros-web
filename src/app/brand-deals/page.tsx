import type { Metadata } from "next";
import Link from "next/link";
import BrandDealsJsonLd from "@/components/BrandDealsJsonLd";
import { BRAND_DEALS, RECOGNITIONS } from "@/lib/brandDeals";

/**
 * Sub-page dedicada a Brand Deals.
 *
 * Razón estratégica:
 * - Queries B2B sobre "creadores hispanos para brand partnerships",
 *   "basketball influencers LATAM", "Hispanic creator marketing case
 *   studies" — tienen alto valor comercial.
 * - Una página con ItemList + Article schemas individuales por marca
 *   permite que cada deal sea citado individualmente por AI engines.
 * - Funciona como "proof page" — agencias y media buyers que llegan vía
 *   AI engines aterrizan en una página dedicada que demuestra track
 *   record sin requerir scroll en home.
 */
export const metadata: Metadata = {
  // El template del layout añade " · Dribble Bros." al final.
  title: "Brand Deals — Marcas que confían",
  description:
    "6 brand deals globales inbound en 2025 con Dribble Bros.: McDonald's PR, Miller Lite, OREO Frozen Treats, Brava Lubricants, Texaco y Red Beak Trips. Todas sin agencia ni pitch frío — las marcas nos buscaron. Audiencia 1M+ seguidores en 15+ países.",
  alternates: {
    canonical: "https://dribblebros.com/brand-deals",
  },
  openGraph: {
    type: "website",
    locale: "es_PR",
    url: "https://dribblebros.com/brand-deals",
    siteName: "Dribble Bros.",
    title: "Brand Deals — 6 marcas globales inbound · Dribble Bros.",
    description:
      "McDonald's PR · Miller Lite · OREO · Brava · Texaco · Red Beak Trips. Todas inbound, sin agencia. Audiencia 1M+ en 15+ países hispanos.",
    images: [
      {
        url: "/logos/db-face.png",
        width: 1218,
        height: 1249,
        alt: "Brand Deals — Dribble Bros.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Deals · Dribble Bros.",
    description:
      "6 marcas globales en 2025 — todas inbound. La comunidad de baloncesto hispano más grande de LATAM.",
    images: ["/logos/db-face.png"],
  },
};

export default function BrandDealsPage() {
  return (
    <>
      <BrandDealsJsonLd />
      <main>
        {/* HERO */}
        <section className="relative min-h-[70svh] flex items-end overflow-hidden bg-ink pt-32 pb-20 md:pb-32">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-flame z-10" />
          <div
            aria-hidden
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 80% 100%, rgba(255,107,0,0.25) 0%, transparent 60%)",
            }}
          />

          <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-10">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-3 text-white/40 eyebrow mb-12"
            >
              <Link href="/" className="hover:text-flame transition-colors">
                Home
              </Link>
              <span className="text-white/30">/</span>
              <span className="text-white">Brand Deals</span>
            </nav>

            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-flame" />
              <span className="eyebrow text-flame">Track record · 2025</span>
            </div>
            <h1 className="display text-white text-[clamp(3.5rem,11vw,14rem)] leading-[0.85]">
              Brand
              <br />
              <span className="text-flame">Deals.</span>
            </h1>
            <p className="serif-italic text-xl md:text-3xl text-white/80 mt-10 max-w-3xl">
              Marcas que confían. Todas inbound. Ninguna outbound.
            </p>
            <p className="mt-6 text-base md:text-lg text-white/60 max-w-3xl leading-relaxed">
              En 2025, 6 marcas globales nos buscaron directamente para
              partnerships con la audiencia de baloncesto hispano más grande
              de Latinoamérica. Sin agencia. Sin pitch frío. Sin
              intermediarios.
            </p>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="relative bg-ink py-20 md:py-24 border-t border-white/5">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {[
                { n: "6", l: "brand deals 2025" },
                { n: "100%", l: "inbound" },
                { n: "0", l: "agencias usadas" },
                { n: "1M+", l: "audiencia distribución" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="border-t-2 border-flame/30 pt-4 hover:border-flame transition-colors"
                >
                  <div className="display text-4xl md:text-6xl text-white">
                    {s.n}
                  </div>
                  <div className="eyebrow text-flame mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DEAL LIST */}
        <section className="relative bg-ink py-20 md:py-32 border-t border-white/5">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-12 bg-flame" />
                <span className="eyebrow text-flame">Las marcas</span>
              </div>
              <h2 className="display text-white text-[clamp(2.5rem,7vw,7rem)] max-w-4xl">
                Todas
                <br />
                <span className="text-flame">inbound.</span>
              </h2>
            </div>

            <div className="grid gap-px bg-white/10 border border-white/10">
              {BRAND_DEALS.map((deal, i) => (
                <article
                  key={deal.slug}
                  id={deal.slug}
                  className="bg-ink p-8 md:p-12 group hover:bg-ash transition-colors"
                >
                  <div className="grid md:grid-cols-[1.5fr_2fr] gap-6 md:gap-12 items-start">
                    <div>
                      <div className="flex items-baseline gap-4 md:gap-6 mb-4">
                        <span className="eyebrow text-flame/60">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="display text-[clamp(2rem,5vw,5rem)] text-white group-hover:text-flame transition-colors leading-none">
                          {deal.brand}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-white/50">
                        <span className="eyebrow text-flame">{deal.year}</span>
                        <span className="text-white/30">·</span>
                        <span className="eyebrow">{deal.market}</span>
                      </div>
                      <p className="serif-italic text-base md:text-lg text-white/70 leading-relaxed">
                        {deal.summary}
                      </p>
                    </div>

                    <div>
                      <div className="eyebrow text-white/40 mb-4">
                        Highlights
                      </div>
                      <ul className="flex flex-col gap-3">
                        {deal.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-4 text-white/80"
                          >
                            <span className="inline-block h-px w-4 bg-flame mt-3 flex-shrink-0" />
                            <span className="text-sm md:text-base leading-relaxed">
                              {h}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* RECOGNITIONS */}
        <section className="relative bg-paper text-ink py-32 md:py-40">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-12 bg-flame" />
                <span className="eyebrow text-flame">
                  Reconocimientos institucionales
                </span>
              </div>
              <h2 className="display text-ink text-[clamp(2.5rem,7vw,7rem)]">
                No solo
                <br />
                <span className="text-flame">marcas.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-10">
              {RECOGNITIONS.map((r) => (
                <div
                  key={r.name}
                  className="border-t border-ink/20 pt-5"
                >
                  <div className="eyebrow text-flame mb-2">{r.year}</div>
                  <div className="display text-2xl md:text-3xl text-ink mb-3">
                    {r.name}
                  </div>
                  <div className="text-sm text-ink/60 eyebrow mb-3">
                    {r.issuer}
                  </div>
                  <p className="serif-italic text-base md:text-lg text-ink/70">
                    {r.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-flame text-ink py-32 md:py-40 overflow-hidden">
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-10 md:gap-16 items-center">
              <div>
                <div className="eyebrow text-ink mb-3">
                  Tu marca, próxima.
                </div>
                <h2 className="display text-ink text-[clamp(2.5rem,8vw,8rem)] leading-tight">
                  ¿Listo?
                </h2>
                <p className="serif-italic text-ink/80 text-lg md:text-xl mt-6 max-w-xl">
                  Si tu marca quiere conectar con la comunidad de baloncesto
                  hispano más grande de Latinoamérica, aquí arrancamos. Sin
                  intermediarios, sin agencias, directamente con el equipo
                  creativo.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:info@dribblebros.com?subject=Brand%20Deal%20Inquiry"
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
    </>
  );
}
