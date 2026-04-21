"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FOUNDERS = [
  {
    name: "Tío Danny",
    alias: "Daniel Martínez",
    role: "Co-founder · Director creativo · Estratega",
    roles: [
      "Dirección creativa y estrategia",
      "Guionista y conceptualizador",
      "Editor y postproducción",
      "Relaciones con marcas",
      "Talento en cámara",
    ],
    photo: "/photos/founders/danny/danny-01.jpg",
    photoPosition: "40% 72%",
    photoScale: 1.7,
  },
  {
    name: "Bryan Nelson",
    alias: "Co-fundador",
    role: "Co-founder · Talento principal · Voz del proyecto",
    roles: [
      "Talento principal en cámara",
      "Co-creador de conceptos",
      "Camarógrafo y producción en campo",
      "Representante en eventos",
      "Voz y personalidad del proyecto",
    ],
    photo: "/photos/founders/bryan/bryan-01.jpg",
    photoPosition: "center",
    photoScale: 1,
  },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="relative bg-ink py-32 md:py-48 border-t border-white/5"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 mb-20 md:mb-28">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-flame" />
              <span className="eyebrow text-flame">Sobre</span>
            </div>
            <h2 className="display text-white text-[clamp(3rem,9vw,10rem)]">
              Un equipo
              <br />
              de <span className="text-flame">2.</span>
              <br />
              Impacto
              <br />
              de <span className="text-flame">100.</span>
            </h2>
          </div>

          <div className="flex flex-col justify-end gap-6">
            <p className="serif-italic text-xl md:text-2xl text-white leading-relaxed">
              Sin agencia. Sin equipo externo. Todo el contenido es creado,
              producido, editado y publicado por Tío Danny y Bryan.
            </p>
            <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl">
              Fundada el 5 de febrero de 2021 en San Juan, Puerto Rico. De una
              cancha en Tras Talleres, Santurce — al Mundial FIBA Manila, las
              Olimpiadas de París, y 15+ países de audiencia activa.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {FOUNDERS.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
              className="bg-ink group"
            >
              <div className="relative aspect-[4/5] md:aspect-[5/4] overflow-hidden">
                <Image
                  src={f.photo}
                  alt={f.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  style={{
                    objectPosition: f.photoPosition,
                    transform: `scale(${f.photoScale})`,
                    transformOrigin: f.photoPosition,
                  }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                  <div className="eyebrow text-flame">
                    {String(i + 1).padStart(2, "0")} — {f.alias}
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="display text-4xl md:text-6xl text-white leading-none">
                    {f.name}
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-10 group-hover:bg-ash transition-colors">
                <div className="text-sm md:text-base text-white/60 mb-8 serif-italic">
                  {f.role}
                </div>
                <ul className="flex flex-col gap-3 border-t border-white/15 pt-6">
                  {f.roles.map((r) => (
                    <li
                      key={r}
                      className="flex items-center gap-4 text-white/80"
                    >
                      <span className="inline-block h-1 w-4 bg-flame" />
                      <span className="text-sm md:text-base">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-24 md:mt-32">
          <div className="eyebrow text-white/40 mb-10">
            De una cancha al mundo
          </div>
          <div className="grid md:grid-cols-5 gap-6 md:gap-4">
            {[
              { y: "2019", t: "Tío Danny y Bryan se conocen." },
              {
                y: "2021",
                t: "Primer video en cancha Tras Talleres, Santurce. Nace @dribblebros.",
              },
              {
                y: "2023",
                t: "Cobertura Mundial FIBA Manila. Expansión LATAM.",
              },
              {
                y: "2024",
                t: "1M+ seguidores. Olimpiadas París.",
              },
              {
                y: "2025",
                t: "140M+ views. Host Coca-Cola Music Hall. 4 países en eventos. 5 marcas inbound.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.y}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="border-t-2 border-flame/30 pt-4 hover:border-flame transition-colors"
              >
                <div className="display text-4xl md:text-5xl text-flame mb-3">
                  {step.y}
                </div>
                <div className="text-sm text-white/70 leading-relaxed">
                  {step.t}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
