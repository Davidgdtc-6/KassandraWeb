import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    text: "Mi color quedó perfecto.",
    name: "Valentina",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    text: "El mejor lifting que me he hecho.",
    name: "Camila",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    text: "Atención increíble y resultados hermosos.",
    name: "Sofía",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
  },
];

function TestimonialRotator() {
  const [active, setActive] = useState(0);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 85%",
        onEnter: () => {
          gsap.fromTo(
            containerRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
          );
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, [active]);

  const t = TESTIMONIALS[active];

  return (
    <div
      ref={containerRef}
      className="bg-white/70 backdrop-blur-sm rounded-[2rem] p-6 md:p-8 shadow-xl shadow-rose/20 border border-rose/30 card-hover"
    >
      <h3 className="font-sans font-bold text-xl md:text-2xl text-ink mb-6">
        Lo que dicen
      </h3>

      <div ref={textRef} className="flex flex-col items-center text-center gap-4 min-h-[180px] justify-center">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-magenta/20 shadow-md"
        />
        <p className="font-serif italic text-lg md:text-xl text-ink/80 leading-relaxed">
          &ldquo;{t.text}&rdquo;
        </p>
        <span className="font-sans text-sm font-medium text-magenta">
          — {t.name}
        </span>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              i === active ? "bg-magenta w-5" : "bg-ink/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}



export default function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll(".feature-title"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="px-4 md:px-8 lg:px-12 py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto">
        <div className="feature-title text-center mb-12 md:mb-16">
          <p className="font-mono text-magenta/50 text-xs tracking-[0.2em] uppercase mb-3">
            Experiencia
          </p>
          <h2 className="section-title">
            Tu momento, nuestra pasión
          </h2>
          <p className="section-subtitle mt-2">
            cada detalle importa
          </p>
        </div>

        <div className="grid md:grid-cols-1 max-w-md mx-auto gap-5 md:gap-8">
          <TestimonialRotator />
        </div>
      </div>
    </section>
  );
}
