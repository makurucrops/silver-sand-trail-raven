import { useEffect, useRef, useState } from "react";
import { useT } from "@/lib/lang";
import { cn } from "@/lib/utils";

type Slide =
  | { kind: "video"; src: string; poster: string }
  | { kind: "image"; src: string };

const slides: Slide[] = [
  { kind: "video", src: "/hero/maasai.mp4", poster: "/hero/poster-maasai.jpg" },
  { kind: "video", src: "/hero/leopard.mp4", poster: "/hero/poster-leopard.jpg" },
  {
    kind: "image",
    src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1920&q=80",
  },
];

export function HeroStage() {
  const t = useT();
  const [index, setIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 9000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === index) {
        void video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [index]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            i === index ? "opacity-100" : "opacity-0",
          )}
          aria-hidden={i !== index}
        >
          {slide.kind === "video" ? (
            <video
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              className="h-full w-full object-cover"
              src={slide.src}
              poster={slide.poster}
              muted
              playsInline
              loop
              preload={i === 0 ? "auto" : "metadata"}
            />
          ) : (
            <img src={slide.src} alt="" className="h-full w-full object-cover" />
          )}
        </div>
      ))}

      <div className="absolute inset-0 bg-ink/45" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pb-20 pt-28 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.28em] text-gold uppercase">
          Arusha · Tanzania
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-[1.85rem] font-semibold leading-snug text-paper sm:text-6xl">
          {t("Welcome to Eco Vibe Safari", "Karibu Eco Vibe Safari", {
            fr: "Bienvenue chez Eco Vibe Safari",
            de: "Willkommen bei Eco Vibe Safari",
            zh: "欢迎来到 Eco Vibe Safari",
            es: "Bienvenido a Eco Vibe Safari",
            ru: "Добро пожаловать в Eco Vibe Safari",
          })}
        </h1>
        <p className="mt-3 font-display text-xl italic text-gold sm:text-5xl">
          {t("Feel natural. Live the adventure.", "Hisia ya asili. Ishi adventure.", {
            fr: "Feel natural. Live the adventure.",
            de: "Feel natural. Live the adventure.",
            zh: "Feel natural. Live the adventure.",
            es: "Feel natural. Live the adventure.",
            ru: "Feel natural. Live the adventure.",
          })}
        </p>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/90 sm:text-lg">
          {t(
            "Wild parks, island tides, and journeys with people who know the land — that is the trip that counts.",
            "Mbuga pori, mawimbi ya visiwa, na safari na watu wanaojua nchi — ndiyo safari inayojali.",
            {
              fr: "Parcs sauvages, marées des îles, et des voyages avec des gens qui connaissent le pays.",
              de: "Wilde Parks, Inselgezeiten und Reisen mit Menschen, die das Land kennen.",
              zh: "荒野公园、岛屿潮汐，以及与真正了解这片土地的人同行。",
              es: "Parques salvajes, mareas de isla y viajes con gente que conoce la tierra.",
              ru: "Дикие парки, островные приливы и путь с людьми, которые знают эту землю.",
            },
          )}
        </p>
        <div className="mt-8">
          <a
            href="/contact"
            className="inline-flex min-h-12 items-center rounded-full border-2 border-paper px-7 text-sm font-semibold tracking-wide text-paper uppercase transition-colors hover:bg-paper hover:text-ink"
          >
            {t("Customize your journey", "Panga safari yako")}
          </a>
        </div>
      </div>

      <div className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-3 sm:flex">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className="inline-flex size-11 items-center justify-center rounded-full border border-paper/70 bg-paper/10 text-paper backdrop-blur-sm transition-colors hover:bg-paper hover:text-ink"
          >
            {s.icon}
          </a>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={t(`Show scene ${i + 1}`, `Onyesha eneo ${i + 1}`)}
            onClick={() => setIndex(i)}
            className={cn(
              "h-2 rounded-full transition-all",
              i === index ? "w-7 bg-paper" : "w-2 bg-paper/50",
            )}
          />
        ))}
      </div>
    </section>
  );
}

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 fill-current">
        <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.2A4.8 4.8 0 1016.8 12 4.8 4.8 0 0012 7.2zm0 7.9A3.1 3.1 0 1115.1 12 3.1 3.1 0 0112 15.1zM17.6 6.1a1.1 1.1 0 11-1.1 1.1 1.1 1.1 0 011.1-1.1z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 fill-current">
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 fill-current">
        <path d="M14.5 3c.4 2.4 1.8 4.2 4.2 4.6v2.4c-1.5 0-2.9-.5-4.1-1.4v6.6a6.2 6.2 0 11-6.2-6.2c.3 0 .7 0 1 .1v2.6a3.6 3.6 0 00-1-.1 3.6 3.6 0 103.6 3.6V3h2.5z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 fill-current">
        <path d="M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C19.2 5.4 12 5.4 12 5.4s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6zM9.8 15.6V8.8l6.4 3.4-6.4 3.4z" />
      </svg>
    ),
  },
];
