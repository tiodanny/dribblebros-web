"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "info@dribblebros.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // noop
    }
  };

  return (
    <section
      id="contacto"
      className="relative bg-flame text-ink py-32 md:py-48 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="display text-ink/5 text-[clamp(20rem,35vw,45rem)] whitespace-nowrap">
          TRABAJEMOS
        </div>
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-ink" />
            <span className="eyebrow text-ink">Brand deals · Eventos · Sponsorships</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="display text-ink text-[clamp(4rem,13vw,16rem)]"
          >
            Hablemos
            <br />
            de <span className="italic font-serif" style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400 }}>impacto</span>.
          </motion.h2>

          <p className="mt-10 serif-italic text-xl md:text-3xl text-ink/80 max-w-3xl">
            Si tu marca quiere conectar con la comunidad de baloncesto hispana más
            grande de Latinoamérica — aquí arrancamos.
          </p>
        </div>

        <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-10 md:gap-16">
          <div className="border-t-2 border-ink pt-8">
            <div className="eyebrow text-ink mb-4">Contacto directo</div>
            <button
              onClick={copyEmail}
              className="display text-[clamp(2rem,5vw,5rem)] text-ink hover:text-white transition-colors block text-left leading-none"
            >
              {email}
            </button>
            <div className="mt-4 eyebrow text-ink/60">
              {copied ? "✓ Copiado al portapapeles" : "Click para copiar"}
            </div>
          </div>

          <div className="border-t-2 border-ink pt-8">
            <div className="eyebrow text-ink mb-4">Siguenos</div>
            <ul className="flex flex-col gap-3">
              {[
                { n: "Instagram", u: "https://instagram.com/dribblebros", s: "@dribblebros" },
                { n: "TikTok", u: "https://tiktok.com/@dribblebros", s: "@dribblebros" },
                { n: "YouTube", u: "https://youtube.com/@dribblebros", s: "@dribblebros" },
                { n: "Facebook", u: "https://facebook.com/dribblebros", s: "Dribble Bros." },
              ].map((x) => (
                <li key={x.n}>
                  <a
                    href={x.u}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline justify-between border-b border-ink/20 pb-3 hover:border-white transition-colors"
                  >
                    <span className="display text-3xl md:text-4xl text-ink group-hover:text-white transition-colors">
                      {x.n}
                    </span>
                    <span className="text-sm text-ink/70 group-hover:translate-x-1 transition-transform">
                      {x.s} →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <a
            href="/media-kit/dribblebros-media-kit-abril-2026.pdf"
            target="_blank"
            rel="noopener"
            className="eyebrow inline-flex items-center justify-between bg-ink text-flame px-6 py-5 hover:bg-white transition-colors w-full sm:w-auto sm:min-w-[420px]"
          >
            <span className="flex items-center gap-3">
              <span>↓</span>
              Descargar Media Kit — Abril 2026
            </span>
            <span className="ml-6">PDF</span>
          </a>
        </div>
      </div>
    </section>
  );
}
