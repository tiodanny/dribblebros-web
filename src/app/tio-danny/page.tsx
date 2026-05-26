import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TioDannyJsonLd from "@/components/TioDannyJsonLd";

/**
 * Author/bio sub-page para Tío Danny (Daniel Martínez), co-founder de
 * Dribble Bros.
 *
 * Existe (vs. solo la card en About) para:
 * 1. Aumentar E-E-A-T: Google y AI engines pesan más una página dedicada
 *    a una persona/autor que una mención en bloque.
 * 2. ProfilePage schema (Google 2023+): formato específico para perfiles
 *    de autor que habilita rich results de "Author".
 * 3. Backlink de autoridad bidireccional con tiodanny.com (su sitio
 *    personal). Aquí se enlaza con rel="author" hacia tiodanny.com,
 *    y desde tiodanny.com hacia aquí.
 *
 * Esta página es la versión "co-founder de Dribble Bros." de su perfil.
 * Para el perfil personal completo, el enlace canónico es tiodanny.com.
 */
export const metadata: Metadata = {
  // El template del layout añade " · Dribble Bros." al final.
  title: "Tío Danny — Co-Founder & Director Creativo",
  description:
    "Daniel Martínez (Tío Danny) — co-fundador y director creativo de Dribble Bros., la comunidad de baloncesto hispano más grande de Latinoamérica. Estratega de contenido digital, guionista, editor y responsable de las relaciones con marcas. Desde San Juan, Puerto Rico.",
  alternates: {
    canonical: "https://dribblebros.com/tio-danny",
  },
  openGraph: {
    type: "profile",
    locale: "es_PR",
    url: "https://dribblebros.com/tio-danny",
    siteName: "Dribble Bros.",
    title: "Tío Danny — Co-Founder de Dribble Bros.",
    description:
      "Daniel Martínez (Tío Danny). Estratega de contenido digital. Director creativo de la comunidad de baloncesto hispano más grande de Latinoamérica.",
    images: [
      {
        url: "/photos/founders/danny/danny-01.jpg",
        alt: "Tío Danny — Daniel Martínez",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tío Danny — Co-Founder Dribble Bros.",
    description:
      "Daniel Martínez. Estratega + director creativo. Desde San Juan, PR.",
    images: ["/photos/founders/danny/danny-01.jpg"],
  },
};

export default function TioDannyPage() {
  return (
    <>
      <Nav />
      <TioDannyJsonLd />
      <main>
        {/* HERO */}
        <section className="relative min-h-[90svh] flex items-end overflow-hidden bg-ink pt-32 pb-20 md:pb-32">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-flame z-10" />
          <div
            aria-hidden
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 70% 100%, rgba(255,107,0,0.25) 0%, transparent 60%)",
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
              <span className="text-white">Tío Danny</span>
            </nav>

            <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-end">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-12 bg-flame" />
                  <span className="eyebrow text-flame">
                    Co-Founder · Director Creativo
                  </span>
                </div>
                <h1 className="display text-white text-[clamp(3.5rem,11vw,14rem)] leading-[0.85]">
                  Tío
                  <br />
                  <span className="text-flame">Danny.</span>
                </h1>
                <p className="serif-italic text-xl md:text-3xl text-white/80 mt-10">
                  Daniel Martínez
                </p>
                <p className="mt-6 text-base md:text-lg text-white/60 max-w-xl leading-relaxed">
                  Co-fundador y director creativo de Dribble Bros., la
                  comunidad de baloncesto hispano más grande de
                  Latinoamérica. Guionista, editor y estratega de contenido
                  digital con base en San Juan, Puerto Rico.
                </p>

                <div className="flex flex-wrap gap-3 mt-10">
                  <a
                    href="https://tiodanny.com"
                    rel="author noopener"
                    target="_blank"
                    className="eyebrow inline-flex items-center gap-3 border border-flame text-flame px-5 py-3 hover:bg-flame hover:text-ink transition-colors"
                  >
                    Sitio personal
                    <span>→</span>
                  </a>
                  <a
                    href="https://www.instagram.com/tiodanny"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="eyebrow inline-flex items-center gap-3 border border-white/30 text-white px-5 py-3 hover:border-flame hover:text-flame transition-colors"
                  >
                    @tiodanny IG
                    <span>↗</span>
                  </a>
                </div>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden bg-ash">
                <Image
                  src="/photos/founders/danny/danny-01.jpg"
                  alt="Tío Danny (Daniel Martínez), co-founder de Dribble Bros."
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  style={{
                    objectPosition: "40% 72%",
                    transform: "scale(1.7)",
                    transformOrigin: "40% 72%",
                  }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
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
                  De Santurce
                  <br />
                  <span className="text-flame">a 15+ países.</span>
                </h2>
              </div>
              <div className="space-y-6 text-base md:text-lg text-white/75 leading-relaxed">
                <p>
                  Daniel Martínez — conocido como{" "}
                  <strong className="text-white">Tío Danny</strong> — co-fundó
                  Dribble Bros. junto a Bryan Nelson el 5 de febrero de 2021
                  en una cancha de Tras Talleres, Santurce. Lo que empezó como
                  un experimento de contenido en redes sociales se convirtió
                  en cuatro años en la comunidad de baloncesto hispano más
                  grande de Latinoamérica.
                </p>
                <p>
                  Dentro de Dribble Bros., Danny lidera la dirección creativa
                  y la estrategia de contenido. Escribe los guiones,
                  conceptualiza las piezas, edita la postproducción y
                  representa a la marca en las relaciones con sponsors. En
                  2025 cerró 6 brand deals inbound con marcas globales —
                  McDonald&apos;s PR, Miller Lite, OREO Frozen Treats, Brava
                  Lubricants, Texaco y Red Beak Trips — sin agencia y sin
                  pitch frío.
                </p>
                <p>
                  Fuera de Dribble Bros., Danny opera como{" "}
                  <a
                    href="https://tiodanny.com"
                    rel="author noopener"
                    target="_blank"
                    className="text-flame hover:underline"
                  >
                    estratega de contenido digital para clientes
                  </a>{" "}
                  que buscan construir presencia en redes con datos y
                  estrategia, no contenido genérico. Su filosofía: no es un
                  creador, es un estratega. La diferencia es que no hace
                  videos bonitos — construye sistemas que venden.
                </p>
                <p>
                  En 2025 fue host del evento{" "}
                  <em>&ldquo;La Fórmula del Éxito&rdquo;</em> en el
                  Coca-Cola Music Hall de Puerto Rico (3,000+ asistentes
                  presencial, 1,500+ virtual), parte de un año donde Dribble
                  Bros. realizó activaciones presenciales en 4 países (Puerto
                  Rico, Nicaragua, Colombia, Perú) con más de 4,100
                  asistentes en total — todo con cero inversión en marketing.
                </p>
                <p>
                  Reconocimientos del trabajo: YouTube Silver Play Button por
                  el canal de Dribble Bros., nominación al SME Digital Awards
                  2026 como Macro Creator of the Year.
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
                Un equipo
                <br />
                <span className="text-flame">de dos.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-10">
              {[
                {
                  k: "Dirección creativa y estrategia",
                  v: "Define la narrativa, el tono y el enfoque de cada pieza y campaña. Decide qué se publica, cuándo y por qué.",
                },
                {
                  k: "Guionista y conceptualizador",
                  v: "Escribe los guiones de cada video, desarrolla los conceptos virales, identifica los hooks que retienen audiencia.",
                },
                {
                  k: "Editor y postproducción",
                  v: "Edita la mayoría de las piezas publicadas. Mantiene el lenguaje visual consistente a lo largo de 870+ piezas anuales.",
                },
                {
                  k: "Relaciones con marcas",
                  v: "Punto de contacto principal para sponsors y agencias. Lidera las conversaciones de los brand deals inbound y la estrategia de partnership.",
                },
                {
                  k: "Talento en cámara",
                  v: "Aparece en cámara junto a Bryan Nelson. Voz de hooks, segmentos opinables y momentos versus que definen el formato.",
                },
                {
                  k: "Comunicaciones públicas",
                  v: "Host de eventos presenciales como Coca-Cola Music Hall PR. Representa a Dribble Bros. en activaciones y entrevistas.",
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

        {/* COVERAGE */}
        <section className="relative bg-ink py-32 md:py-40 border-t border-white/5">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-flame" />
              <span className="eyebrow text-flame">Cobertura internacional</span>
            </div>
            <h2 className="display text-white text-[clamp(2.5rem,6vw,6rem)] mb-12">
              Donde está
              <br />
              <span className="text-flame">el baloncesto.</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6 md:gap-10">
              {[
                {
                  y: "2023",
                  t: "Mundial FIBA — Manila",
                  d: "Primera cobertura internacional de un Mundial de Baloncesto. Expansión a audiencias hispanas más allá del Caribe.",
                },
                {
                  y: "2024",
                  t: "Olimpiadas París",
                  d: "Cobertura del torneo olímpico de baloncesto. Producción en campo cubriendo selecciones hispanas en juego.",
                },
                {
                  y: "2025",
                  t: "AmeriCup FIBA — Nicaragua",
                  d: "Activación presencial con 700+ asistentes. Co-creación de contenido con jugadores y federaciones locales.",
                },
                {
                  y: "2025",
                  t: "Coca-Cola Music Hall — PR",
                  d: 'Host del evento "La Fórmula del Éxito": 3,000+ presencial, 1,500+ virtual.',
                },
                {
                  y: "2025",
                  t: "Lima · Medellín",
                  d: "Meet & greets y activaciones locales. 300+ asistentes Lima, 100+ Medellín.",
                },
                {
                  y: "2026",
                  t: "WBC + Cancha Viva RD",
                  d: "World Basketball Classic + lanzamiento de Cancha Viva en República Dominicana durante los Juegos Centroamericanos.",
                },
              ].map((s) => (
                <div
                  key={`${s.y}-${s.t}`}
                  className="border-t-2 border-flame/30 pt-4 hover:border-flame transition-colors"
                >
                  <div className="display text-3xl md:text-4xl text-flame mb-2">
                    {s.y}
                  </div>
                  <div className="display text-xl md:text-2xl text-white mb-3">
                    {s.t}
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {s.d}
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
                <div className="eyebrow text-ink mb-3">Contacto profesional</div>
                <h2 className="display text-ink text-[clamp(2.5rem,8vw,8rem)] leading-tight">
                  Hablemos.
                </h2>
                <p className="serif-italic text-ink/80 text-lg md:text-xl mt-6 max-w-xl">
                  Para brand deals, eventos, sponsorships y partnerships con
                  Dribble Bros., el email oficial es{" "}
                  <strong>info@dribblebros.com</strong>. Para trabajo
                  estratégico personal con clientes 1-on-1, ver tiodanny.com.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:info@dribblebros.com"
                  className="eyebrow inline-flex items-center justify-between bg-ink text-flame px-6 py-5 hover:bg-white transition-colors"
                >
                  Email Dribble Bros.
                  <span>→</span>
                </a>
                <a
                  href="https://tiodanny.com"
                  rel="author noopener"
                  target="_blank"
                  className="eyebrow inline-flex items-center justify-between border-2 border-ink text-ink px-6 py-5 hover:bg-ink hover:text-flame transition-colors"
                >
                  Trabajo personal
                  <span>↗</span>
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
