import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre Nosotros", href: "#about" },
  { label: "Contacto", href: "#footer" },
];

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: "top -80px",
        end: "bottom bottom",
        onUpdate: (self) => {
          if (!navRef.current) return;
          if (self.progress > 0) {
            navRef.current.classList.add(
              "bg-white/70",
              "backdrop-blur-xl",
              "border",
              "border-rose/50",
              "shadow-lg",
              "shadow-rose/10"
            );
            navRef.current.classList.remove("bg-transparent", "border-transparent");
          } else {
            navRef.current.classList.remove(
              "bg-white/70",
              "backdrop-blur-xl",
              "border",
              "border-rose/50",
              "shadow-lg",
              "shadow-rose/10"
            );
            navRef.current.classList.add("bg-transparent", "border-transparent");
          }
        },
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50
        flex items-center gap-1 md:gap-2 px-3 py-2 md:px-5 md:py-2.5
        rounded-full border border-transparent
        transition-all duration-500 ease-out
        w-[calc(100%-2rem)] max-w-3xl"
    >
      <img
        src="https://res.cloudinary.com/dsay0it3n/image/upload/v1778606539/LOGO_Mesa_de_trabajo_1_copia_q5twtp.png"
        alt="Kassandra Armijos Studio"
        className="h-9 md:h-14 w-auto mr-auto"
      />

      {NAV_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="hidden md:inline-block px-3 py-1.5 text-xs font-sans font-medium
            text-ink/70 hover:text-magenta transition-all duration-300
            hover:scale-[1.03] relative group"
        >
          {link.label}
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-magenta
            transition-all duration-300 group-hover:w-full" />
        </a>
      ))}

<a
          href="https://wa.me/message/NEC4V43HNLMHC1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-1.5 md:py-2
            bg-[#25D366] text-white text-xs font-sans font-semibold tracking-wider
            rounded-full transition-all duration-500 hover:scale-[1.03]
            hover:shadow-lg hover:shadow-[#25D366]/30"
        >
          <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4" />
          <span className="hidden md:inline">Reservar</span>
        </a>
    </nav>
  );
}
