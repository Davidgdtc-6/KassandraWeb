import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Palette,
  Scissors,
  Droplets,
  Wind,
  Sparkles,
  Eye,
  ArrowUpRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  { name: "Maquillaje", icon: Palette, img: "https://res.cloudinary.com/dsay0it3n/image/upload/v1778603011/maquillaje_auhgd0.jpg" },
  { name: "Peinados", icon: Sparkles, img: "https://res.cloudinary.com/dsay0it3n/image/upload/v1778603952/peinado_yyhhy8.jpg" },
  { name: "Tinturados", icon: Droplets, img: "https://res.cloudinary.com/dsay0it3n/image/upload/v1778603952/tinte_sobyhi.jpg" },
  { name: "Alisado Láser", icon: Wind, img: "https://res.cloudinary.com/dsay0it3n/image/upload/v1778603952/alisado_laser_j7nsem.jpg" },
  { name: "Cortes", icon: Scissors, img: "https://res.cloudinary.com/dsay0it3n/image/upload/v1778603952/corte_lbur2c.jpg" },
  { name: "Pestañas", icon: Eye, img: "https://res.cloudinary.com/dsay0it3n/image/upload/v1778603952/pestan%CC%83as_imeulh.jpg" },
  { name: "Lifting", icon: ArrowUpRight, img: "https://res.cloudinary.com/dsay0it3n/image/upload/v1778603952/lifting_auchvv.jpg" },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll(".service-card"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="px-4 md:px-8 lg:px-12 py-20 md:py-28 bg-rose/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-mono text-magenta/50 text-xs tracking-[0.2em] uppercase mb-3">
            Servicios
          </p>
          <h2 className="section-title">
            Transformamos tu estilo
          </h2>
          <p className="section-subtitle mt-2">
            descubre nuestros tratamientos
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.name}
                className="service-card group relative rounded-[2rem] overflow-hidden
                  aspect-[3/4] cursor-pointer card-hover"
              >
                <img
                  src={s.img}
                  alt={s.name}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700
                    group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent
                  transition-opacity duration-500" />
                <div className="absolute inset-0 bg-magenta/0 group-hover:bg-magenta/10
                  transition-all duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-4 h-4 text-white/80" />
                    <h3 className="font-sans font-bold text-sm md:text-base text-white">
                      {s.name}
                    </h3>
                  </div>
                  <a
                    href="https://wa.me/message/NEC4V43HNLMHC1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-sans text-xs text-white/60
                      hover:text-white transition-colors duration-300 mt-1"
                  >
                    Consultar
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
