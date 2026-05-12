import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Check, Save } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const BEFORE_IMG = "https://res.cloudinary.com/dsay0it3n/image/upload/v1778605946/antes_wahnmh.jpg";
const AFTER_IMG = "https://res.cloudinary.com/dsay0it3n/image/upload/v1778605946/despues_zzo5gx.jpg";

function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = (e) => {
    if (!isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX ?? e.touches?.[0]?.clientX) - rect.left;
    const p = Math.max(3, Math.min(97, (x / rect.width) * 100));
    setPosition(p);
  };

  useEffect(() => {
    const onUp = () => { isDragging.current = false; };
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
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

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-[2rem] p-6 md:p-8 shadow-xl shadow-rose/20 border border-rose/30 card-hover">
      <h3 className="font-sans font-bold text-xl md:text-2xl text-ink mb-4">
        Transformaciones reales
      </h3>

      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none"
        onMouseDown={() => { isDragging.current = true; }}
        onTouchStart={() => { isDragging.current = true; }}
        onMouseMove={handleMove}
        onTouchMove={handleMove}
      >
        <img
          src={AFTER_IMG}
          alt="Después"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "50% 0%" }}
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            src={BEFORE_IMG}
            alt="Antes"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "50% 0%" }}
          />
        </div>
        <div
          className="absolute inset-y-0 w-0.5 bg-white shadow-lg"
          style={{ left: `${position}%` }}
        >
          <div
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2
              w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center
              text-xs font-bold text-ink cursor-ew-resize"
          >
            ⋮
          </div>
        </div>
        <span className="absolute bottom-3 left-3 font-sans text-xs text-white/80 bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
          Antes
        </span>
        <span className="absolute bottom-3 right-3 font-sans text-xs text-white/80 bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
          Después
        </span>
      </div>
    </div>
  );
}

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

const DAYS = ["Lun", "Mar", "Mié", "Jue", "Vie"];
const HOURS = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

function CalendarCursor() {
  const [selectedDay, setSelectedDay] = useState(2);
  const [selectedHour, setSelectedHour] = useState(3);
  const [saved, setSaved] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const cycle = setInterval(() => {
      setSelectedDay((prev) => (prev + 1) % DAYS.length);
      setSelectedHour((prev) => (prev + 1) % HOURS.length);
      setSaved(false);
    }, 4000);

    const saveTimer = setInterval(() => {
      setSaved(true);
    }, 3000);

    return () => {
      clearInterval(cycle);
      clearInterval(saveTimer);
    };
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

  return (
    <div
      ref={containerRef}
      className="bg-white/70 backdrop-blur-sm rounded-[2rem] p-6 md:p-8 shadow-xl shadow-rose/20 border border-rose/30 card-hover"
    >
      <div className="flex items-center gap-2 mb-5">
        <Calendar className="w-5 h-5 text-magenta" />
        <h3 className="font-sans font-bold text-xl md:text-2xl text-ink">
          Reserva fácil
        </h3>
      </div>

      <div className="space-y-3">
        <div className="flex gap-1.5">
          {DAYS.map((d, i) => (
            <button
              key={d}
              onClick={() => setSelectedDay(i)}
              className={`flex-1 py-2 text-xs font-sans font-medium rounded-xl transition-all duration-300 ${
                i === selectedDay
                  ? "bg-magenta text-white shadow-md shadow-magenta/25"
                  : "bg-rose text-ink/60 hover:bg-rose/80"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-1.5">
          {HOURS.map((h, i) => (
            <button
              key={h}
              onClick={() => setSelectedHour(i)}
              className={`py-2 text-xs font-sans font-medium rounded-xl transition-all duration-300 ${
                i === selectedHour
                  ? "bg-magenta text-white shadow-md shadow-magenta/25"
                  : "bg-rose text-ink/60 hover:bg-rose/80"
              }`}
            >
              {h}
            </button>
          ))}
        </div>

        <button
          className={`w-full py-2.5 rounded-xl font-sans font-semibold text-xs tracking-wider uppercase
            transition-all duration-500 flex items-center justify-center gap-2 ${
              saved
                ? "bg-emerald-500 text-white shadow-md"
                : "bg-ink/10 text-ink/50 hover:bg-magenta hover:text-white"
            }`}
        >
          {saved ? (
            <>
              <Check className="w-3.5 h-3.5" />
              Reservado
            </>
          ) : (
            <>
              <Save className="w-3.5 h-3.5" />
              Guardar
            </>
          )}
        </button>
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

        <div className="grid md:grid-cols-3 gap-5 md:gap-8">
          <BeforeAfter />
          <TestimonialRotator />
          <CalendarCursor />
        </div>
      </div>
    </section>
  );
}
