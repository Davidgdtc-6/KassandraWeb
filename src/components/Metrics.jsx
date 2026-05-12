import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const METRICS = [
  { value: 5, suffix: "+", label: "años de experiencia", prefix: "" },
  { value: 1000, suffix: "+", label: "cambios de look", prefix: "" },
  { value: 95, suffix: "%", label: "clientas recurrentes", prefix: "" },
  { value: 8, suffix: "", label: "servicios premium", prefix: "" },
];

export default function Metrics() {
  const sectionRef = useRef(null);
  const numbersRef = useRef([]);

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
        sectionRef.current?.querySelectorAll(".metric-item"),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power3.out" }
      );

      METRICS.forEach((m, i) => {
        const el = numbersRef.current[i];
        if (!el) return;
        const target = m.value;
        tl.fromTo(
          el,
          { textContent: 0 },
          {
            textContent: target,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            onUpdate: () => {
              if (el) {
                el.textContent = Math.round(parseFloat(el.textContent)) + m.suffix;
              }
            },
          },
          "-=1.5"
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-4 md:px-8 lg:px-12 py-20 md:py-28 bg-rose/40"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-mono text-magenta/50 text-xs tracking-[0.2em] uppercase mb-3">
            Números
          </p>
          <h2 className="section-title">Resultados que hablan</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {METRICS.map((m, i) => (
            <div key={m.label} className="metric-item text-center">
              <span
                ref={(el) => { numbersRef.current[i] = el; }}
                className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-magenta block"
              >
                0{m.suffix}
              </span>
              <span className="font-sans text-sm md:text-base text-ink/60 mt-2 block">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
