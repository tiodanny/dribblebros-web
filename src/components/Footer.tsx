export default function Footer() {
  return (
    <footer className="bg-ink text-white border-t border-white/10">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-20">
          <div>
            <div className="display text-5xl md:text-6xl mb-4">
              DRIBBLE BROS<span className="text-flame">.</span>
            </div>
            <p className="serif-italic text-white/60 max-w-md">
              La comunidad de baloncesto hispana más grande de Latinoamérica.
              Desde San Juan, Puerto Rico.
            </p>
          </div>

          <div>
            <div className="eyebrow text-flame mb-4">Navegar</div>
            <ul className="flex flex-col gap-2 text-white/70">
              <li><a href="#numeros" className="hover:text-flame">Números</a></li>
              <li><a href="#marcas" className="hover:text-flame">Marcas</a></li>
              <li><a href="#trabajo" className="hover:text-flame">El trabajo</a></li>
              <li><a href="#cancha-viva" className="hover:text-flame">Cancha Viva</a></li>
              <li><a href="#sobre" className="hover:text-flame">Sobre</a></li>
            </ul>
          </div>

          <div>
            <div className="eyebrow text-flame mb-4">Legal</div>
            <ul className="flex flex-col gap-2 text-white/70">
              <li>Dribble Bros. LLC</li>
              <li>San Juan, Puerto Rico</li>
              <li>
                <a href="#contacto" className="hover:text-flame">
                  info@dribblebros.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/40 eyebrow">
          <div>© {new Date().getFullYear()} Dribble Bros. LLC · Registered USPTO · All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-flame" />
            Basketball. Cultura. Impacto.
          </div>
        </div>
      </div>
    </footer>
  );
}
