import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MessageCircle, ArrowRight } from "lucide-react";

const AVATARS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
];

export default function Hero() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imagesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        textRef.current?.querySelectorAll(".anim-text"),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 1 }
      );

      tl.fromTo(
        textRef.current?.querySelectorAll(".anim-btn"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8 },
        "-=0.4"
      );

      tl.fromTo(
        textRef.current?.querySelectorAll(".anim-social"),
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.3"
      );

      gsap.fromTo(
        imagesRef.current?.querySelectorAll(".anim-img"),
        { x: 80, opacity: 0, rotate: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          rotate: (i) => (i === 0 ? -3 : i === 2 ? 2 : 0),
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-20 px-4 md:px-8 lg:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left */}
        <div ref={textRef} className="relative z-10 order-2 md:order-1">
          <div className="anim-text">
            <p className="font-mono text-magenta/60 text-xs tracking-[0.2em] uppercase mb-4">
              Kassandra Armijos Studio
            </p>
          </div>
          <h1 className="anim-text font-sans font-bold text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.05] tracking-tight">
            Belleza hecha
          </h1>
          <h2 className="anim-text font-serif italic text-magenta text-5xl md:text-6xl lg:text-7xl leading-[1.1] mt-2">
            transformación.
          </h2>
          <p className="anim-text font-sans text-ink/60 text-base md:text-lg leading-relaxed mt-6 max-w-md">
            Creamos experiencias de belleza premium con atención personalizada,
            técnicas modernas y resultados que resaltan tu esencia.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="https://wa.me/message/NEC4V43HNLMHC1"
              target="_blank"
              rel="noopener noreferrer"
              className="anim-btn btn-primary"
            >
              <MessageCircle className="w-4 h-4" />
              Reservar cita
            </a>
            <a
              href="#servicios"
              className="anim-btn btn-outline group"
            >
              Ver servicios
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="anim-social flex items-center gap-3 mt-10">
            <div className="flex -space-x-2">
              {AVATARS.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-floral object-cover"
                />
              ))}
            </div>
            <div>
              <span className="font-serif italic text-magenta text-lg">+500</span>
              <span className="font-sans text-ink/50 text-sm ml-1">
                clientas felices
              </span>
            </div>
          </div>
        </div>

        {/* Right - Images */}
        <div
          ref={imagesRef}
          className="relative order-1 md:order-2 flex items-center justify-center h-[400px] md:h-[600px]"
        >
          <div className="relative w-full h-full max-w-md mx-auto">
            <img
              src="https://res.cloudinary.com/dsay0it3n/image/upload/v1778603011/maquillaje_auhgd0.jpg"
              alt="Maquillaje profesional"
              className="anim-img absolute top-0 right-0 w-3/5 rounded-[2rem] shadow-2xl shadow-rose/30 object-cover aspect-[3/4] -rotate-3"
            />
            <img
              src="https://res.cloudinary.com/dsay0it3n/image/upload/v1778643736/12_Hair_Products_That_Are_Worth_Your_Money_-_Society19_rrqe3p.jpg"
              alt="Peinado elegante"
              className="anim-img absolute bottom-0 left-0 w-3/5 rounded-[2rem] shadow-2xl shadow-magenta/20 object-cover aspect-[3/4] rotate-2 z-10"
            />
            <img
              src="https://res.cloudinary.com/dsay0it3n/image/upload/v1778643736/The_Troy_Always_Styled_Hair_Trick_iudcjt.jpg"
              alt="Coloración premium"
              className="anim-img absolute top-1/4 left-1/4 w-2/5 rounded-[2rem] shadow-xl shadow-magenta/15 object-cover aspect-square z-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
