"use client";

import { motion } from "framer-motion";

const STATS = [
  {
    number: "900M+",
    label: "Views all time",
    context: "Desde 2021. Sin agencia. Sin equipo externo.",
  },
  {
    number: "140M+",
    label: "Views en 2025",
    context: "Con cero en pauta pagada.",
  },
  {
    number: "1M+",
    label: "Seguidores combinados",
    context: "TikTok · Instagram · YouTube · Facebook.",
  },
  {
    number: "870+",
    label: "Piezas publicadas en 2025",
    context: "Un equipo de 2, con impacto de 100.",
  },
  {
    number: "4,100+",
    label: "Asistentes a eventos 2025",
    context: "Puerto Rico · Nicaragua · Medellín · Lima. $0 marketing.",
  },
  {
    number: "15+",
    label: "Países con audiencia activa",
    context: "De una cancha en San Juan al mundo.",
  },
];

export default function Stats() {
  return (
    <section
      id="numeros"
      className="relative bg-ink py-32 md:py-48 border-t border-white/5"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20 md:mb-32">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-flame" />
              <span className="eyebrow text-flame">Los números</span>
            </div>
            <h2 className="display text-white text-[clamp(3rem,9vw,10rem)] max-w-4xl">
              La evidencia
              <br />
              <span className="text-flame">habla sola.</span>
            </h2>
          </div>
          <p className="serif-italic text-lg md:text-xl text-white/60 max-w-sm">
            &ldquo;Sin agencia. Sin equipo externo. Todo orgánico.&rdquo;
          </p>
        </div>

        <div className="grid gap-px bg-white/10 border border-white/10">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: (i % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-ink p-8 md:p-12 grid grid-cols-1 md:grid-cols-[1fr_2fr_1.5fr] gap-4 md:gap-10 md:items-baseline group hover:bg-ash transition-colors"
            >
              <div className="display text-[clamp(4rem,10vw,9rem)] text-white group-hover:text-flame transition-colors leading-none">
                {s.number}
              </div>
              <div className="display text-2xl md:text-4xl text-white/90">
                {s.label}
              </div>
              <div className="text-sm md:text-base text-white/50 md:text-right serif-italic">
                {s.context}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platform breakdown — seguidores actuales */}
        <div className="mt-24 md:mt-32">
          <div className="eyebrow text-white/40 mb-8">Seguidores por plataforma</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              { p: "TikTok", f: "545K" },
              { p: "Instagram", f: "230K" },
              { p: "YouTube", f: "227K" },
              { p: "Facebook", f: "63K" },
            ].map((x) => (
              <div
                key={x.p}
                className="border-t border-white/15 pt-4 hover:border-flame transition-colors"
              >
                <div className="eyebrow text-white/40">{x.p}</div>
                <div className="display text-4xl md:text-5xl mt-2 text-white">
                  {x.f}
                </div>
                <div className="text-sm text-flame mt-1">seguidores</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
