import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { number: "01", title: "Valoración", desc: "Conocemos tus necesidades y objetivos de belleza en una consulta personalizada." },
  { number: "02", title: "Diagnóstico personalizado", desc: "Analizamos tu tipo de cabello, piel y estilo para recomendar el tratamiento ideal." },
  { number: "03", title: "Transformación premium", desc: "Ejecutamos tu servicio con técnicas modernas y productos de alta calidad." },
  { number: "04", title: "Resultado final", desc: "Disfruta de un look impecable con recomendaciones para mantenerlo perfecto." },
];

export default function Process() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.2, ease: "power3.out", transformOrigin: "left center" }
      );

      tl.fromTo(
        sectionRef.current?.querySelectorAll(".step-card"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-4 md:px-8 lg:px-12 py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-mono text-magenta/50 text-xs tracking-[0.2em] uppercase mb-3">
            Proceso
          </p>
          <h2 className="section-title">
            Tu experiencia en Kassandra Armijos Studio
          </h2>
        </div>

        {/* Timeline line - desktop */}
        <div className="relative hidden md:block mb-12">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-rose-300" />
          <div
            ref={lineRef}
            className="absolute left-0 right-0 top-1/2 h-0.5 bg-magenta origin-left"
            style={{ scaleX: 0 }}
          />
          <div className="relative flex justify-between">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full bg-magenta shadow-lg shadow-magenta/30 absolute"
                style={{ left: `${(i / (STEPS.length - 1)) * 100}%`, top: "50%", transform: "translate(-50%, -50%)" }}
              />
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-6 md:gap-8">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="step-card bg-white/70 backdrop-blur-sm rounded-[2rem] p-6 md:p-8
                shadow-xl shadow-rose/20 border border-rose/30 card-hover text-center md:text-left"
            >
              <span className="font-serif italic text-3xl md:text-4xl text-magenta/30 block mb-3">
                {step.number}
              </span>
              <h3 className="font-sans font-bold text-lg md:text-xl text-ink mb-2">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-ink/60 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
