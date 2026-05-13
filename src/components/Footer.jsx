import { MessageCircle, MapPin, Clock } from "lucide-react";

const NAV_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre Nosotros", href: "#about" },
  { label: "Contacto", href: "#footer" },
];

const SERVICES_LIST = [
  "Maquillaje",
  "Peinados",
  "Tinturados",
  "Alisado Láser",
  "Cortes",
  "Pestañas",
  "Lifting",
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-floral text-ink/60">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div>
            <span className="font-serif italic text-2xl text-magenta">
              Kassandra Mejías Estudio
            </span>
            <p className="font-sans text-sm text-ink/50 mt-3 leading-relaxed max-w-xs">
              Experiencias de belleza premium con atención personalizada y
              resultados que resaltan tu esencia.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans font-bold text-xs text-ink/70 uppercase tracking-widest mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-ink/50 hover:text-magenta transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans font-bold text-xs text-ink/70 uppercase tracking-widest mb-4">
              Servicios
            </h4>
            <ul className="space-y-2.5">
              {SERVICES_LIST.map((s) => (
                <li key={s}>
                  <span className="font-sans text-sm text-ink/50">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-bold text-xs text-ink/70 uppercase tracking-widest mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/message/NEC4V43HNLMHC1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-sans text-sm text-ink/50 hover:text-magenta transition-colors duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2 font-sans text-sm text-ink/50">
                <MapPin className="w-4 h-4 shrink-0" />
                Piñas, El Oro, Ecuador
              </li>
              <li className="flex items-center gap-2 font-sans text-sm text-ink/50">
                <Clock className="w-4 h-4 shrink-0" />
                Lun–Sáb 9:00–18:00
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-ink/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-ink/30">
            &copy; 2026 Kassandra Mejías Estudio. Todos los derechos reservados.
          </span>
          <span className="font-mono text-xs text-ink/30 flex items-center gap-2">
            Sistema activo
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50 animate-pulse" />
            Beauty Experience v1.0
          </span>
        </div>
      </div>
    </footer>
  );
}
