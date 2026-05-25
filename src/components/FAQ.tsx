"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/faqData";

/**
 * Visible FAQ accordion — mounted between `<About />` and `<Contact />`.
 *
 * Why it exists: AI engines (and Google's FAQ rich result policy) reward
 * pages where the FAQPage JSON-LD schema is mirrored by visible content
 * the user can actually read. Without this component, the schema is at
 * risk of being demoted as "schema-only content."
 *
 * Data is consumed from `src/lib/faqData.ts` — same source the JSON-LD
 * uses. Edit there, both update together.
 *
 * Language detection: each item is auto-tagged ES/EN by checking the
 * leading character of the question. Saves manual flagging in the data.
 */

const isEnglish = (q: string) => !q.trimStart().startsWith("¿");

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative bg-ink py-32 md:py-48 border-t border-white/5"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        {/* Header */}
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-20 mb-16 md:mb-24">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-flame" />
              <span className="eyebrow text-flame">Preguntas</span>
            </div>
            <h2 className="display text-white text-[clamp(3rem,9vw,10rem)]">
              Lo que la
              <br />
              gente <span className="text-flame">pregunta.</span>
            </h2>
          </div>
          <p className="serif-italic text-lg md:text-xl text-white/60 md:self-end max-w-xl">
            10 respuestas directas sobre quién es Dribble Bros., cómo opera
            y por qué la comunidad nos eligió.
          </p>
        </div>

        {/* Accordion */}
        <div className="border-t border-white/10">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            const lang = isEnglish(item.question) ? "EN" : "ES";
            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-b border-white/10"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  className="group w-full flex items-baseline justify-between gap-6 md:gap-10 py-6 md:py-8 text-left hover:bg-ash/40 transition-colors -mx-4 px-4 md:-mx-6 md:px-6"
                >
                  <div className="flex items-baseline gap-4 md:gap-8 flex-1 min-w-0">
                    <span className="eyebrow text-flame/60 w-10 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="eyebrow text-white/30 w-8 shrink-0">
                      {lang}
                    </span>
                    <span className="display text-[clamp(1.5rem,3vw,2.5rem)] text-white group-hover:text-flame transition-colors leading-tight">
                      {item.question}
                    </span>
                  </div>
                  <span
                    aria-hidden
                    className={`display text-3xl md:text-4xl text-flame transition-transform duration-500 shrink-0 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 md:pb-10 pl-0 md:pl-[5.5rem] pr-4 md:pr-16 max-w-4xl">
                        <p className="text-base md:text-lg text-white/75 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 md:mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-white/10 pt-10"
        >
          <p className="serif-italic text-white/60 text-lg md:text-xl max-w-xl">
            ¿Tu pregunta no está aquí? Escríbenos directo.
          </p>
          <a
            href="#contacto"
            className="eyebrow inline-flex items-center justify-center bg-flame text-ink px-6 py-4 hover:bg-ember transition-colors"
          >
            Contacto →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
