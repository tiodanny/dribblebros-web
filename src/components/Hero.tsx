"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-ink"
    >
      {/* Orange top bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-flame z-10" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 100%, rgba(255,107,0,0.25) 0%, transparent 60%), radial-gradient(ellipse at 0% 0%, rgba(255,107,0,0.08) 0%, transparent 50%)",
        }}
      />

      {/* Logo floating on the right (desktop only) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:block absolute right-[4%] top-1/2 -translate-y-1/2 z-[5] pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -16, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[380px] h-[380px] xl:w-[500px] xl:h-[500px] 2xl:w-[600px] 2xl:h-[600px]"
        >
          {/* Glow behind logo */}
          <div
            className="absolute inset-0 rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(255,107,0,0.4) 0%, transparent 70%)",
            }}
          />
          <Image
            src="/logos/db-face.png"
            alt="Dribble Bros. — Tío Danny & Bryan"
            fill
            priority
            className="object-contain drop-shadow-[0_20px_40px_rgba(255,107,0,0.15)]"
            sizes="600px"
          />
        </motion.div>
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-10 pb-20 md:pb-32 pt-32">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{}}
          className="flex flex-col gap-8"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="flex items-center gap-4"
          >
            <span className="h-px w-12 bg-flame" />
            <span className="eyebrow text-flame">
              Dribble Bros. — Est. 2021 · San Juan, PR
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="display text-white text-[clamp(4rem,14vw,18rem)]"
          >
            Más que
            <br />
            <span className="text-flame">baloncesto.</span>
            <br />
            Cultura.
          </motion.h1>

          {/* Logo on mobile (between headline and subline) */}
          <motion.div
            variants={fadeUp}
            custom={2}
            className="lg:hidden flex items-center gap-4 pt-2"
          >
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src="/logos/db-face.png"
                alt="Dribble Bros."
                fill
                className="object-contain"
                sizes="80px"
              />
            </div>
            <span className="serif-italic text-white/70 text-sm">
              Tío Danny + Bryan Nelson
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={3}
            className="max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed"
          >
            La comunidad de baloncesto hispana más grande de Latinoamérica.{" "}
            <span className="serif-italic text-white">
              900M+ views all time. 1M+ seguidores. Cero pauta.
            </span>
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={4}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4"
          >
            <a
              href="#contacto"
              className="eyebrow inline-flex items-center justify-center bg-flame text-ink px-6 py-4 hover:bg-ember transition-colors"
            >
              Trabaja con nosotros →
            </a>
            <a
              href="/media-kit/dribblebros-media-kit-abril-2026.pdf"
              target="_blank"
              rel="noopener"
              className="eyebrow inline-flex items-center justify-center border border-white/30 text-white px-6 py-4 hover:border-flame hover:text-flame transition-colors"
            >
              Media Kit ↓
            </a>
          </motion.div>
        </motion.div>

        {/* Corner stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pt-10 border-t border-white/10 max-w-4xl"
        >
          {[
            { n: "900M+", l: "views all time" },
            { n: "1M+", l: "seguidores" },
            { n: "15+", l: "países" },
            { n: "870+", l: "piezas 2025" },
          ].map((s) => (
            <div key={s.l}>
              <div className="display text-3xl md:text-5xl text-white">
                {s.n}
              </div>
              <div className="eyebrow text-white/50 mt-2">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 right-6 md:right-10 eyebrow text-white/40 flex items-center gap-3 z-10">
        <span className="h-[2px] w-8 bg-flame" />
        Scroll
      </div>
    </section>
  );
}
