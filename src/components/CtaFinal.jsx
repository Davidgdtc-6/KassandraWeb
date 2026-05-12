import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AVATARS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
];

export default function CtaFinal() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        sectionRef.current?.querySelectorAll(".cta-el"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.8, ease: "power3.out" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative px-4 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-magenta to-[#c01868]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative max-w-3xl mx-auto text-center">
        <p className="cta-el font-mono text-white/40 text-xs tracking-[0.2em] uppercase mb-4">
          Contacto
        </p>
        <h2 className="cta-el font-sans font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-tight">
          Tu próxima transformación
          <br />
          comienza aquí.
        </h2>
        <p className="cta-el font-sans text-white/70 text-base md:text-lg mt-4 md:mt-6 max-w-lg mx-auto">
          Reserva tu cita y vive una experiencia de belleza premium.
        </p>

        <a
          href="https://wa.me/message/NEC4V43HNLMHC1"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-el inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-5
            bg-white text-magenta font-sans font-bold text-sm md:text-base tracking-wider uppercase
            rounded-full mt-8 md:mt-10
            transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-black/20"
        >
          <MessageCircle className="w-5 h-5" />
          Hablar por WhatsApp
        </a>

        <div className="cta-el flex items-center justify-center gap-3 mt-8">
          <div className="flex -space-x-2">
            {AVATARS.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white/30 object-cover"
              />
            ))}
          </div>
          <span className="font-sans text-white/60 text-sm">
            Clientas felices cada semana
          </span>
        </div>
      </div>
    </section>
  );
}
