"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EVENTS = [
  {
    city: "San Juan",
    country: "Puerto Rico",
    venue: "Coca-Cola Music Hall",
    attendees: "3,000+",
    year: "2025",
    photo: "/photos/events/cch/cch-01.jpg",
  },
  {
    city: "Managua",
    country: "Nicaragua",
    venue: "AmeriCup FIBA",
    attendees: "700+",
    year: "2025",
    photo: "/photos/events/nicaragua/nicaragua-01.jpg",
  },
  {
    city: "Lima",
    country: "Perú",
    venue: "Meet & Greet",
    attendees: "300+",
    year: "2025",
    photo: "/photos/events/peru/peru-01.jpg",
  },
  {
    city: "Medellín",
    country: "Colombia",
    venue: "Activación local",
    attendees: "100+",
    year: "2025",
    photo: "/photos/events/colombia/colombia-01.jpg",
  },
];

const MOSAIC = [
  { src: "/photos/pair/IMG_7112.jpg", alt: "Tío Danny y Bryan", label: "El dúo" },
  { src: "/photos/events/nicaragua/nicaragua-02.jpg", alt: "Nicaragua", label: "Nicaragua" },
  { src: "/photos/archive/miller-lite.jpg", alt: "Miller Lite", label: "Miller Lite" },
  { src: "/photos/events/cch/cch-01.jpg", alt: "Coca-Cola Music Hall", label: "CCH · PR" },
  { src: "/photos/archive/youtube.jpg", alt: "YouTube Silver Play Button", label: "YouTube Silver" },
  { src: "/photos/events/colombia/colombia-02.jpg", alt: "Colombia", label: "Medellín" },
  { src: "/photos/events/peru/peru-02.jpg", alt: "Lima, Perú", label: "Lima" },
  { src: "/photos/archive/collab-bsn.jpg", alt: "Collab BSN", label: "BSN" },
  { src: "/photos/events/nicaragua/nicaragua-03.jpg", alt: "Nicaragua AmeriCup", label: "AmeriCup" },
  { src: "/photos/archive/olimpiadas-2024.jpg", alt: "Olimpiadas París 2024", label: "París 2024" },
  { src: "/photos/events/nicaragua/nicaragua-04.jpg", alt: "Nicaragua", label: "FIBA" },
  { src: "/photos/events/colombia/colombia-03.jpg", alt: "Colombia", label: "Colombia" },
  { src: "/photos/archive/rusos.jpg", alt: "WBC 2026", label: "WBC 2026" },
];

export default function Community() {
  return (
    <section
      id="comunidad"
      className="relative bg-paper text-ink py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-20 mb-16 md:mb-24">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-flame" />
              <span className="eyebrow text-flame">Comunidad</span>
            </div>
            <h2 className="display text-ink text-[clamp(3rem,9vw,10rem)]">
              Del feed
              <br />
              <span className="text-flame">a la cancha.</span>
            </h2>
          </div>
          <p className="serif-italic text-lg md:text-xl text-ink/70 md:self-end max-w-xl">
            4 países. 4,100+ asistentes. Cero dólares invertidos en marketing.
            Esto no es alcance. Es comunidad.
          </p>
        </div>

        {/* Events grid con fotos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-16 md:mb-20">
          {EVENTS.map((e, i) => (
            <motion.div
              key={e.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="relative aspect-[3/4] overflow-hidden group cursor-default bg-ink"
            >
              <Image
                src={e.photo}
                alt={`${e.city} · ${e.venue}`}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="eyebrow text-flame">{e.country}</div>
                <div>
                  <div className="display text-5xl md:text-6xl text-white leading-none mb-3">
                    {e.city}
                  </div>
                  <div className="border-t border-white/30 pt-3 mt-3">
                    <div className="text-xs text-white/70 mb-2">{e.venue}</div>
                    <div className="flex items-baseline justify-between">
                      <span className="display text-3xl md:text-4xl text-flame">
                        {e.attendees}
                      </span>
                      <span className="eyebrow text-white/50 text-[10px]">
                        {e.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Photo mosaic */}
        <div className="eyebrow text-ink/50 mb-6">Del archivo</div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-3">
          {MOSAIC.map((p, i) => (
            <motion.div
              key={p.src + i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className={`relative overflow-hidden group ${
                i === 0
                  ? "col-span-2 row-span-2 md:col-span-3 md:row-span-2 aspect-square md:aspect-[3/2]"
                  : "aspect-square"
              }`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes={
                  i === 0
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 50vw, 16vw"
                }
              />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-ink/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="eyebrow text-flame text-[10px]">{p.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
