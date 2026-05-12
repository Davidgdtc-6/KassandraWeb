import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const BADGES = [
  { label: "Color Specialist", color: "bg-magenta/10 text-magenta border-magenta/20" },
  { label: "Beauty Studio", color: "bg-rose text-ink/80 border-rose/50" },
  { label: "Premium Experience", color: "bg-ink/5 text-ink/70 border-ink/10" },
];

export default function About() {
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
        sectionRef.current?.querySelectorAll(".about-img"),
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
      );

      tl.fromTo(
        sectionRef.current?.querySelectorAll(".about-text"),
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );

      tl.fromTo(
        sectionRef.current?.querySelectorAll(".about-badge"),
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="px-4 md:px-8 lg:px-12 py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left - Image */}
        <div className="about-img">
          <div className="relative">
            <div className="absolute -inset-2 bg-magenta/5 rounded-[2rem] rotate-2" />
            <img
              src="https://res.cloudinary.com/dsay0it3n/image/upload/v1778606964/kass_wmimqu.jpg"
              alt="Kassandra Armijos Studio"
              className="relative w-full rounded-[2rem] object-cover aspect-[4/5] shadow-2xl shadow-rose/20"
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className="about-text">
          <p className="font-mono text-magenta/50 text-xs tracking-[0.2em] uppercase mb-4">
            Sobre Nosotros
          </p>
          <h2 className="section-title">
            Más que un salón, <br />
            <span className="font-serif italic text-magenta">una experiencia.</span>
          </h2>
          <p className="font-sans text-ink/60 text-base md:text-lg leading-relaxed mt-6">
            En Kassandra Armijos Studio creemos que la belleza es una expresión
            personal. Por eso ofrecemos atención personalizada en un ambiente
            exclusivo, combinando técnicas innovadoras con productos premium
            para realzar tu estilo único.
          </p>
          <p className="font-sans text-ink/60 text-base leading-relaxed mt-4">
            Especialistas en color, cortes de vanguardia y tratamientos
            capilares que transforman. Cada visita es una experiencia
            diseñada para consentirte.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {BADGES.map((badge) => (
              <span
                key={badge.label}
                className={`about-badge font-sans text-xs font-medium px-4 py-1.5 rounded-full border ${badge.color}`}
              >
                {badge.label}
              </span>
            ))}
          </div>

          <a
            href="https://wa.me/message/NEC4V43HNLMHC1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex"
          >
            <MessageCircle className="w-4 h-4" />
            Agendar valoración
          </a>
        </div>
      </div>
    </section>
  );
}
