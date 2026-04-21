"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const LINKS = [
  { label: "Números", href: "#numeros" },
  { label: "Marcas", href: "#marcas" },
  { label: "El trabajo", href: "#trabajo" },
  { label: "Cancha Viva", href: "#cancha-viva" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contacto", href: "#contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="#top"
          className="display text-2xl md:text-3xl tracking-tight"
          aria-label="Dribble Bros."
        >
          DRIBBLE BROS<span className="text-flame">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="eyebrow text-white/70 hover:text-flame transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden md:inline-flex eyebrow border border-flame text-flame px-4 py-2 hover:bg-flame hover:text-ink transition-colors"
        >
          Brand Deals →
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span
            className={`h-px w-6 bg-white transition-all ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-white transition-all ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-white transition-all ${
              open ? "-translate-y-[5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-ink border-b border-white/5 ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6 gap-5">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="display text-3xl text-white hover:text-flame transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="eyebrow mt-4 self-start border border-flame text-flame px-4 py-2"
          >
            Brand Deals →
          </a>
        </nav>
      </div>
    </header>
  );
}
