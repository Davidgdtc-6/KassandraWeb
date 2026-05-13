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
              Kassandra Armijos Studio
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
              <li className="flex items-start gap-2 font-sans text-sm text-ink/50">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  García Moreno y Bolívar<br />
                  Edificio esquinero gris/blanco<br />
                  Diagonal al parque central<br />
                  3er piso, Piñas, El Oro
                </span>
              </li>
              <li className="flex items-center gap-2 font-sans text-sm text-ink/50">
                <Clock className="w-4 h-4 shrink-0" />
                Lun–Sáb 9:00–18:00
              </li>
            </ul>
          </div>
        </div>

        {/* Map */}
        <div className="mt-10 rounded-2xl overflow-hidden shadow-lg shadow-rose/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.590138704876!2d-79.6823991!3d-3.6803377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x90335f631f4d1457%3A0xcacaef9b4d66ef20!2sGarcia%20Moreno%20%26%20Bolivar%2C%20Pi%C3%B1as!5e0!3m2!1ses-419!2sec!4v1778643524269!5m2!1ses-419!2sec"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-48 rounded-2xl"
          />
        </div>

        {/* Bottom bar */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-ink/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-ink/30">
            &copy; 2026 Kassandra Armijos Studio. Todos los derechos reservados.
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
