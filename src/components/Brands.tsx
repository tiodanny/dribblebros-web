"use client";

import { motion } from "framer-motion";

const BRANDS = [
  { name: "Red Beak Trips", note: "Campaign 2025" },
  { name: "Miller Lite", note: "3er año consecutivo" },
  { name: "OREO Frozen Treats", note: "Campaign 2025" },
  { name: "Brava Lubricants", note: "Campaign 2025" },
  { name: "Texaco", note: "Campaign 2025" },
];

const MARQUEE = [
  "Red Beak Trips",
  "Miller Lite",
  "OREO Frozen Treats",
  "Brava Lubricants",
  "Texaco",
  "Coca-Cola Music Hall",
  "AmeriCup Nicaragua",
];

export default function Brands() {
  return (
    <section
      id="marcas"
      className="relative bg-paper text-ink py-32 md:py-48"
    >
      {/* Marquee */}
      <div className="overflow-hidden border-y border-ink/15 py-6 mb-20 md:mb-32">
        <div className="flex marquee-track whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span
              key={i}
              className="display text-[clamp(3rem,6vw,6rem)] mx-8 flex items-center gap-8"
            >
              {m}
              <span className="inline-block h-3 w-3 rounded-full bg-flame" />
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-flame" />
              <span className="eyebrow text-flame">Brand deals</span>
            </div>
            <h2 className="display text-ink text-[clamp(3rem,8vw,8rem)]">
              Marcas que
              <br />
              <span className="text-flame">confían.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-6">
            <p className="text-lg md:text-xl text-ink/80 leading-relaxed max-w-xl">
              5 marcas globales nos buscaron en 2025.{" "}
              <span className="serif-italic">Todas inbound. Ninguna outbound.</span>{" "}
              La comunidad habla, las marcas responden.
            </p>
          </div>
        </div>

        <div className="grid gap-px bg-ink/15 border border-ink/15">
          {BRANDS.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-paper px-6 md:px-10 py-8 md:py-12 flex items-center justify-between gap-6 group hover:bg-bone transition-colors cursor-default"
            >
              <div className="flex items-baseline gap-4 md:gap-8">
                <span className="eyebrow text-ink/40 w-10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="display text-[clamp(2rem,5vw,5rem)] text-ink group-hover:text-flame transition-colors">
                  {b.name}
                </span>
              </div>
              <span className="hidden md:block eyebrow text-ink/60">
                {b.note}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 md:gap-12">
          {[
            {
              k: "YouTube Silver Play Button",
              v: "Reconocimiento oficial de la plataforma.",
            },
            {
              k: "SME Digital Awards 2026",
              v: "Nominación Macro Creator of the Year.",
            },
            {
              k: "Activaciones 2025",
              v: "4,100+ asistentes en 4 países. $0 marketing.",
            },
          ].map((c) => (
            <div key={c.k} className="border-t border-ink/20 pt-5">
              <div className="eyebrow text-flame mb-2">{c.k}</div>
              <div className="serif-italic text-ink/80">{c.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
