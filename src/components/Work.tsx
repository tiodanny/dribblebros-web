"use client";

import { motion } from "framer-motion";

const CHANNELS = [
  {
    name: "Instagram",
    handle: "@dribblebros",
    url: "https://instagram.com/dribblebros",
    stat: "230K seguidores",
    color: "from-pink-500 via-fuchsia-500 to-amber-400",
  },
  {
    name: "TikTok",
    handle: "@dribblebros",
    url: "https://tiktok.com/@dribblebros",
    stat: "545K seguidores",
    color: "from-cyan-400 via-white to-rose-500",
  },
  {
    name: "YouTube",
    handle: "@dribblebros",
    url: "https://youtube.com/@dribblebros",
    stat: "227K subscribers · Silver Button",
    color: "from-red-600 via-red-500 to-red-700",
  },
  {
    name: "Facebook",
    handle: "Dribble Bros.",
    url: "https://facebook.com/dribblebros",
    stat: "63K seguidores",
    color: "from-blue-600 to-blue-400",
  },
];

export default function Work() {
  return (
    <section
      id="trabajo"
      className="relative bg-ink py-32 md:py-48 border-t border-white/5"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-flame" />
            <span className="eyebrow text-flame">El trabajo</span>
          </div>
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-10 md:items-end">
            <h2 className="display text-white text-[clamp(3rem,9vw,10rem)]">
              Donde vive
              <br />
              <span className="text-flame">el contenido.</span>
            </h2>
            <p className="serif-italic text-lg md:text-xl text-white/60">
              Cada plataforma, una audiencia. Cada audiencia, un lenguaje.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {CHANNELS.map((c, i) => (
            <motion.a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative group bg-ink p-8 md:p-12 overflow-hidden block"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 ${c.color}`}
              />
              <div className="relative flex flex-col h-full min-h-[280px] justify-between gap-8">
                <div className="flex items-start justify-between">
                  <div className="display text-[clamp(3rem,6vw,6rem)] text-white group-hover:text-flame transition-colors">
                    {c.name}
                  </div>
                  <span className="text-2xl md:text-3xl text-white/40 group-hover:text-flame group-hover:translate-x-2 transition-all">
                    →
                  </span>
                </div>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="eyebrow text-white/40 mb-2">Handle</div>
                    <div className="font-mono text-sm md:text-base text-white">
                      {c.handle}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="eyebrow text-flame mb-2">Stats</div>
                    <div className="text-sm md:text-base text-white/80">
                      {c.stat}
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
