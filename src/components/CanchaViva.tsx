"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PILLARS = [
  {
    n: "01",
    label: "Renovación",
    copy: "Infraestructura física permanente con identidad del sponsor. El nombre de la marca queda grabado en el cemento — literal.",
  },
  {
    n: "02",
    label: "Deporte",
    copy: "Eventos de inauguración, comunidad reunida, acceso real al juego donde más se necesita.",
  },
  {
    n: "03",
    label: "Contenido",
    copy: "Mini doc + reels antes/después + cobertura en vivo, distribuidos a la audiencia de 1M+ de Dribble Bros.",
  },
];

const STEPS = [
  { n: "01", t: "Identificar", d: "Cancha abandonada en comunidad activa." },
  { n: "02", t: "Renovar", d: "Transformación física completa con branding del sponsor." },
  { n: "03", t: "Activar", d: "Evento de inauguración con la comunidad y Dribble Bros." },
  { n: "04", t: "Documentar", d: "Mini doc + reels + cobertura distribuida a 1M+ personas." },
];

export default function CanchaViva() {
  return (
    <section
      id="cancha-viva"
      className="relative bg-ink py-32 md:py-48 border-t border-white/5 overflow-hidden"
    >
      {/* Giant background text */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
      >
        <div className="display text-flame/5 text-[clamp(20rem,40vw,50rem)] whitespace-nowrap">
          CANCHA VIVA
        </div>
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10">
        {/* Header */}
        <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-20 items-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-flame" />
              <span className="eyebrow text-flame">Proyecto · by Dribble Bros.</span>
            </div>
            <h2 className="display text-white text-[clamp(3.5rem,10vw,11rem)] leading-[0.85]">
              Cancha
              <br />
              <span className="text-flame">Viva.</span>
            </h2>

            <p className="mt-10 serif-italic text-xl md:text-2xl text-white/80 max-w-lg">
              Renovamos canchas. Construimos comunidad. Generamos contenido.
            </p>

            <p className="mt-6 text-base md:text-lg text-white/60 max-w-lg leading-relaxed">
              Millones de jóvenes en Latinoamérica viven rodeados de canchas que
              existen — pero están abandonadas. Cancha Viva las vuelve a la vida,
              y convierte el proceso en una campaña completa para una marca.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] flex items-center justify-center bg-gradient-to-br from-ash to-ink border border-white/10 overflow-hidden"
          >
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
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(255,107,0,0.35) 0%, transparent 60%)",
              }}
            />
            <div className="relative flex flex-col items-center gap-8 p-8">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-40 h-40 md:w-56 md:h-56"
              >
                <Image
                  src="/logos/db-face.png"
                  alt="Dribble Bros."
                  fill
                  className="object-contain drop-shadow-[0_20px_40px_rgba(255,107,0,0.3)]"
                  sizes="(max-width: 768px) 160px, 224px"
                />
              </motion.div>
              <div className="eyebrow text-flame">Fase 1 · Lanzamiento</div>
              <div className="text-center">
                <div className="display text-4xl md:text-6xl text-white leading-none">
                  República
                  <br />
                  Dominicana
                </div>
                <div className="eyebrow text-white/60 mt-4">Septiembre 2026</div>
              </div>
              <div className="border-t border-white/15 pt-4 text-center max-w-[200px]">
                <div className="text-xs text-white/50 leading-relaxed">
                  Durante los Juegos Centroamericanos y del Caribe — el momento
                  regional más importante del año en RD.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Problem stat */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-center mb-24 md:mb-32 border-y border-white/10 py-12 md:py-16"
        >
          <div className="display text-flame text-[clamp(5rem,12vw,12rem)] leading-none">
            70<span className="text-flame/60">%</span>
          </div>
          <div className="max-w-xl">
            <div className="eyebrow text-flame mb-3">El problema</div>
            <p className="display text-3xl md:text-5xl text-white leading-tight mb-4">
              de las canchas públicas en Latinoamérica están sin mantenimiento activo.
            </p>
            <p className="serif-italic text-white/60">
              El deporte como herramienta de comunidad está siendo desperdiciado
              donde más se necesita.
            </p>
          </div>
        </motion.div>

        {/* 3 Pillars */}
        <div className="mb-24 md:mb-32">
          <div className="eyebrow text-flame mb-10">La solución — 3 pilares</div>
          <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="bg-ink p-8 md:p-10 group hover:bg-ash transition-colors"
              >
                <div className="eyebrow text-flame/60 mb-4">{p.n}</div>
                <div className="display text-4xl md:text-5xl text-white mb-6 group-hover:text-flame transition-colors">
                  {p.label}
                </div>
                <p className="text-sm md:text-base text-white/70 leading-relaxed">
                  {p.copy}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4-step process */}
        <div className="mb-24 md:mb-32">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <div className="eyebrow text-flame mb-3">El proceso</div>
              <h3 className="display text-3xl md:text-5xl text-white">
                Una campaña completa,
                <br />
                <span className="serif-italic text-white/80 font-normal normal-case text-2xl md:text-3xl">
                  no solo un post.
                </span>
              </h3>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-4 md:gap-6">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="border-l-2 border-flame pl-5 py-2"
              >
                <div className="display text-flame text-4xl md:text-5xl mb-2">
                  {s.n}
                </div>
                <div className="display text-2xl md:text-3xl text-white mb-3">
                  {s.t}
                </div>
                <div className="text-sm text-white/60 leading-relaxed">
                  {s.d}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="grid md:grid-cols-[1.5fr_1fr] gap-10 md:gap-16 items-center border-t border-white/10 pt-16 md:pt-20"
        >
          <blockquote className="serif-italic text-white text-2xl md:text-5xl leading-tight max-w-3xl">
            &ldquo;Tu marca no solo aparece en pantalla.{" "}
            <span className="text-flame">Queda grabada en el cemento.</span>&rdquo;
          </blockquote>
          <div className="flex flex-col gap-4">
            <a
              href="#contacto"
              className="eyebrow inline-flex items-center justify-between bg-flame text-ink px-6 py-5 hover:bg-ember transition-colors"
            >
              Sponsorship info
              <span>→</span>
            </a>
            <a
              href="/media-kit/dribblebros-media-kit-abril-2026.pdf"
              target="_blank"
              rel="noopener"
              className="eyebrow inline-flex items-center justify-between border border-white/30 text-white px-6 py-5 hover:border-flame hover:text-flame transition-colors"
            >
              Ver media kit
              <span>↓</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
