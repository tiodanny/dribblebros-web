import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BryanNelsonJsonLd from "@/components/BryanNelsonJsonLd";

/**
 * Author/bio sub-page para Bryan Nelson, co-founder de Dribble Bros.
 *
 * Mismo template que /tio-danny — ProfilePage + Person + BreadcrumbList.
 *
 * Diferencias vs. /tio-danny:
 * - No tiene sitio personal externo (todo el perfil vive aquí)
 * - El rol es "talento principal + producción en campo" vs. "estrategia"
 * - Bio focused en su voz como personaje de cámara y representación
 *   internacional de la marca
 */
export const metadata: Metadata = {
  // El template del layout añade " · Dribble Bros." al final.
  title: "Bryan Nelson — Co-Founder",
  description:
    "Bryan Nelson — co-fundador de Dribble Bros., la comunidad de baloncesto hispano más grande de Latinoamérica. Talento principal en cámara, camarógrafo, productor en campo y representante internacional de la marca. Desde San Juan, Puerto Rico.",
  alternates: {
    canonical: "https://dribblebros.com/bryan-nelson",
  },
  openGraph: {
    type: "profile",
    locale: "es_PR",
    url: "https://dribblebros.com/bryan-nelson",
    siteName: "Dribble Bros.",
    title: "Bryan Nelson — Co-Founder de Dribble Bros.",
    description:
      "Bryan Nelson. Talento principal en cámara + producción en campo de la comunidad de baloncesto hispano más grande de Latinoamérica.",
    images: [
      {
        url: "/photos/founders/bryan/bryan-01.jpg",
        alt: "Bryan Nelson — Co-Founder Dribble Bros.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryan Nelson — Co-Founder Dribble Bros.",
    description:
      "Bryan Nelson. Talento principal + producción en campo. Desde San Juan, PR.",
    images: ["/photos/founders/bryan/bryan-01.jpg"],
  },
};

export default function BryanNelsonPage() {
  return (
    <>
      <BryanNelsonJsonLd />
      <main>
        {/* HERO */}
        <section className="relative min-h-[90svh] flex items-end overflow-hidden bg-ink pt-32 pb-20 md:pb-32">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-flame z-10" />
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
              <Link href="/" className="hover:text-flame transition-colors">
                Home
              </Link>
              <span className="text-white/30">/</span>
              <Link
                href="/#sobre"
                className="hover:text-flame transition-colors"
              >
                Sobre
              </Link>
              <span className="text-white/30">/</span>
              <span className="text-white">Bryan Nelson</span>
            </nav>

            <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20 items-end">
              <div className="relative aspect-[4/5] overflow-hidden bg-ash order-2 md:order-1">
                <Image
                  src="/photos/founders/bryan/bryan-01.jpg"
                  alt="Bryan Nelson, co-founder de Dribble Bros."
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              </div>

              <div className="order-1 md:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-12 bg-flame" />
                  <span className="eyebrow text-flame">
                    Co-Founder · Talento Principal
                  </span>
                </div>
                <h1 className="display text-white text-[clamp(3.5rem,10vw,13rem)] leading-[0.85]">
                  Bryan
                  <br />
                  <span className="text-flame">Nelson.</span>
                </h1>
                <p className="serif-italic text-xl md:text-3xl text-white/80 mt-10">
                  La voz del proyecto
                </p>
                <p className="mt-6 text-base md:text-lg text-white/60 max-w-xl leading-relaxed">
                  Co-fundador de Dribble Bros. Talento principal en cámara,
                  camarógrafo, productor en campo y representante
                  internacional de la marca en eventos, federaciones y
                  activaciones de sponsor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BIO */}
        <section className="relative bg-ink py-32 md:py-40 border-t border-white/5">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-12 bg-flame" />
                  <span className="eyebrow text-flame">Bio</span>
                </div>
                <h2 className="display text-white text-[clamp(2.5rem,6vw,6rem)] leading-tight">
                  La voz
                  <br />
                  <span className="text-flame">en cámara.</span>
                </h2>
              </div>
              <div className="space-y-6 text-base md:text-lg text-white/75 leading-relaxed">
                <p>
                  Bryan Nelson co-fundó Dribble Bros. con{" "}
                  <Link
                    href="/tio-danny"
                    className="text-flame hover:underline"
                  >
                    Daniel Martínez (Tío Danny)
                  </Link>{" "}
                  el 5 de febrero de 2021 en San Juan, Puerto Rico. Si Danny
                  es el cerebro estratégico detrás de la cámara, Bryan es la
                  voz frente a ella — el personaje, el carisma, la
                  personalidad que conecta a la audiencia con cada pieza
                  publicada.
                </p>
                <p>
                  Bryan lidera la producción en campo: cuando hay cobertura
                  internacional (Mundial FIBA Manila, Olimpiadas París,
                  AmeriCup Nicaragua, Coca-Cola Music Hall PR), él es el que
                  está con la cámara en mano grabando, dirigiendo el momento
                  y coordinando con jugadores, federaciones y talento local.
                </p>
                <p>
                  Su rol como talento principal define el formato que ha
                  convertido a Dribble Bros. en referencia regional:
                  energía alta, comentario opinable, comparaciones versus,
                  hooks que retienen. Aparece en virtualmente cada pieza
                  publicada — más de 870 en 2025 solo.
                </p>
                <p>
                  En el lado de relaciones internacionales, Bryan representa
                  a Dribble Bros. en activaciones presenciales con
                  federaciones de basketball del Caribe y Latinoamérica.
                  Eventos en 4 países con más de 4,100 asistentes
                  acumulados en 2025.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ROLES */}
        <section className="relative bg-paper text-ink py-32 md:py-40">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-12 bg-flame" />
                <span className="eyebrow text-flame">
                  Responsabilidades en Dribble Bros.
                </span>
              </div>
              <h2 className="display text-ink text-[clamp(2.5rem,7vw,7rem)]">
                Voz, cámara,
                <br />
                <span className="text-flame">presencia.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-10">
              {[
                {
                  k: "Talento principal en cámara",
                  v: "Voz y personaje frente a la cámara en virtualmente cada pieza. Define el tono opinable y carismático del formato.",
                },
                {
                  k: "Co-creador de conceptos",
                  v: "Junto a Tío Danny desarrolla los conceptos de cada video: hooks, formatos versus, opiniones de basketball, segmentos editoriales.",
                },
                {
                  k: "Camarógrafo y producción en campo",
                  v: "Cuando hay cobertura internacional, Bryan dirige la producción presencial: cámara en mano, organización del rodaje, coordinación con talento local.",
                },
                {
                  k: "Representante en eventos",
                  v: "Voz pública de la marca en activaciones internacionales: Coca-Cola Music Hall PR, AmeriCup Nicaragua, Lima, Medellín, festivales de basketball.",
                },
                {
                  k: "Relaciones con federaciones",
                  v: "Punto de contacto con federaciones de basketball del Caribe y Latinoamérica para coberturas oficiales y partnerships institucionales.",
                },
                {
                  k: "Voz y personalidad del proyecto",
                  v: "La identidad emocional de Dribble Bros. en cada video se construye sobre su personaje. La razón por la que la audiencia se queda más allá del hook.",
                },
              ].map((d) => (
                <div key={d.k} className="border-t border-ink/20 pt-5">
                  <div className="eyebrow text-flame mb-2">{d.k}</div>
                  <div className="serif-italic text-ink/80 text-base md:text-lg">
                    {d.v}
                  </div>
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
                <div className="eyebrow text-ink mb-3">Trabajemos juntos</div>
                <h2 className="display text-ink text-[clamp(2.5rem,8vw,8rem)] leading-tight">
                  Eventos.
                  <br />
                  <span className="text-white">Activaciones.</span>
                </h2>
                <p className="serif-italic text-ink/80 text-lg md:text-xl mt-6 max-w-xl">
                  Para coberturas internacionales, presencia de Bryan en
                  eventos, activaciones presenciales con federaciones o
                  brand deals con Dribble Bros., el email oficial es{" "}
                  <strong>info@dribblebros.com</strong>.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:info@dribblebros.com"
                  className="eyebrow inline-flex items-center justify-between bg-ink text-flame px-6 py-5 hover:bg-white transition-colors"
                >
                  info@dribblebros.com
                  <span>→</span>
                </a>
                <Link
                  href="/tio-danny"
                  className="eyebrow inline-flex items-center justify-between border-2 border-ink text-ink px-6 py-5 hover:bg-ink hover:text-flame transition-colors"
                >
                  Conoce a Tío Danny
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
