import { useEffect, useRef, useState } from "react";
import { BadgeCheck, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/content";
import { useT } from "@/lib/lang";
import { cn } from "@/lib/utils";
import { pair } from "./section-head";

const GOOGLE_REVIEW_URL =
  "https://www.google.com/maps/search/?api=1&query=Eco+Vibe+Safari+Arusha";

const AVATAR_COLORS = ["#7c3aed", "#0f766e", "#b45309", "#be185d", "#1d4ed8", "#047857"];

function Stars({ value }: { value: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${value} / 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={cn("size-3.5", n <= value ? "fill-[#fbbc04] text-[#fbbc04]" : "fill-sand text-sand")}
        />
      ))}
    </div>
  );
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.56c2.08-1.92 3.28-4.74 3.28-8.1Z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z" />
      <path fill="#FBBC05" d="M5.84 14.09A6.97 6.97 0 0 1 5.5 12c0-.72.13-1.41.34-2.09V7.07H2.18A11 11 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84Z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z" />
    </svg>
  );
}

function initials(name: string) {
  return name
    .replace(/[^A-Za-z ]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

function WildlifeRow() {
  return (
    <div className="mt-6 flex w-full max-w-md items-center justify-between gap-2 rounded-full bg-[#f3e6c8] px-4 py-2.5 sm:mt-8 sm:gap-4 sm:px-6 sm:py-3">
      <svg viewBox="0 0 64 40" className="h-6 w-9 text-ink sm:h-8 sm:w-12" fill="currentColor" aria-hidden>
        <ellipse cx="22" cy="26" rx="14" ry="9" />
        <path d="M34 22c8-2 16 2 22 8-8 2-16 1-22-2v-6Z" />
        <circle cx="14" cy="16" r="6" />
        <path d="M8 14c-4-6-6-8-7-8 2 4 3 8 4 10h3Z" />
      </svg>
      <svg viewBox="0 0 40 48" className="h-8 w-6 text-ink sm:h-10 sm:w-7" fill="currentColor" aria-hidden>
        <rect x="16" y="8" width="8" height="22" rx="2" />
        <ellipse cx="20" cy="8" rx="7" ry="8" />
        <path d="M12 30h16l2 14H10L12 30Z" />
        <path d="M14 4h3l1 6h-3zM23 4h3l-1 6h-3z" />
      </svg>
      <svg viewBox="0 0 48 40" className="h-6 w-8 text-ink sm:h-8 sm:w-10" fill="currentColor" aria-hidden>
        <path d="M10 28c0-8 6-14 14-16 2-6 8-10 10-10-2 6-2 10 2 14 6 2 10 8 10 14H10Z" />
        <path d="M18 28v8h-3v-8M30 28v8h3v-8" />
      </svg>
      <svg viewBox="0 0 56 32" className="h-5 w-9 text-ink sm:h-7 sm:w-12" fill="currentColor" aria-hidden>
        <rect x="6" y="12" width="36" height="10" rx="2" />
        <path d="M18 12 V6 h16 v6" />
        <circle cx="16" cy="24" r="5" />
        <circle cx="38" cy="24" r="5" />
        <rect x="42" y="14" width="8" height="6" />
      </svg>
      <svg viewBox="0 0 48 40" className="h-7 w-8 text-ink sm:h-9 sm:w-10" fill="currentColor" aria-hidden>
        <path d="M24 4c2 8 10 12 14 20H10C14 16 22 12 24 4Z" />
        <path d="M24 24c8 0 12 8 12 12H12c0-4 4-12 12-12Z" />
      </svg>
    </div>
  );
}

export function Reviews() {
  const t = useT();
  const count = testimonials.length;
  const scroller = useRef<HTMLDivElement>(null);
  const pauseUntil = useRef(0);
  const [openQuote, setOpenQuote] = useState<string | null>(null);
  const openQuoteRef = useRef(openQuote);
  openQuoteRef.current = openQuote;

  const hold = () => {
    pauseUntil.current = Date.now() + 8000;
  };

  const scrollByCard = (dir: number) => {
    const el = scroller.current;
    if (!el) return;
    hold();
    const card = el.querySelector("article");
    const step = card ? card.getBoundingClientRect().width + 12 : Math.min(280, el.clientWidth * 0.85);
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer = 0;

    const tick = () => {
      if (Date.now() < pauseUntil.current || openQuoteRef.current) return;
      const node = scroller.current;
      if (!node) return;
      const card = node.querySelector("article");
      const step = (card?.getBoundingClientRect().width ?? 240) + 12;
      const atEnd = node.scrollLeft + node.clientWidth >= node.scrollWidth - 16;
      node.scrollTo({ left: atEnd ? 0 : node.scrollLeft + step, behavior: "smooth" });
    };

    const start = () => {
      window.clearInterval(timer);
      if (!mobile.matches || reduce.matches) return;
      timer = window.setInterval(tick, 3800);
    };

    start();
    mobile.addEventListener("change", start);
    return () => {
      window.clearInterval(timer);
      mobile.removeEventListener("change", start);
    };
  }, []);

  return (
    <section className="overflow-x-hidden bg-cream px-5 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <h2 className="font-display text-[1.75rem] leading-snug font-semibold text-gold sm:text-4xl lg:text-5xl">
              {t("Real life stories...", "Hadithi za kweli...", {
                fr: "Histoires vraies...",
                de: "Wahre Geschichten...",
                zh: "真实故事...",
                es: "Historias reales...",
                ru: "Живые истории...",
              })}
            </h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted sm:mt-4 sm:text-base">
              {t(
                "Every journey we share leaves behind its own memories. Here are a few words from guests who travelled Tanzania with Eco Vibe Safari — wildlife, culture, and days that stayed with them.",
                "Kila safari inaacha kumbukumbu. Haya ni maneno ya wageni waliosafiri Tanzania na Eco Vibe Safari — pori, utamaduni, na siku zilizobaki nao.",
                {
                  fr: "Chaque voyage laisse une mémoire. Quelques mots d’invités partis en Tanzanie avec Eco Vibe Safari.",
                  de: "Jede Reise hinterlässt Erinnerungen. Worte von Gästen, die mit Eco Vibe Safari Tansania erlebten.",
                  zh: "每一次旅程都会留下记忆。以下是与 Eco Vibe Safari 同行坦桑尼亚的旅客的话。",
                  es: "Cada viaje deja recuerdos. Palabras de viajeros que recorrieron Tanzania con Eco Vibe Safari.",
                  ru: "Каждое путешествие оставляет память. Слова гостей, ездивших по Танзании с Eco Vibe Safari.",
                },
              )}
            </p>
            <WildlifeRow />
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80"
              alt=""
              className="h-52 w-full object-cover sm:h-72"
            />
            <div className="absolute inset-3 flex items-center justify-center rounded-xl border border-white/40 bg-cream/85 p-4 text-center backdrop-blur-sm sm:inset-6 sm:rounded-2xl sm:p-6">
              <div>
                <p className="font-display text-lg leading-snug font-semibold text-ink sm:text-2xl lg:text-3xl">
                  {t("Real experiences & memories.", "Uzoefu na kumbukumbu za kweli.", {
                    fr: "Vraies expériences et souvenirs.",
                    de: "Echte Erlebnisse und Erinnerungen.",
                    zh: "真实体验与记忆。",
                    es: "Experiencias y recuerdos reales.",
                    ru: "Настоящие впечатления и память.",
                  })}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted sm:mt-3 sm:text-sm">
                  {t(
                    "A journey shaped by comfort, trust, wildlife, culture, and heartfelt hospitality.",
                    "Safari yenye starehe, imani, pori, utamaduni na ukarimu wa kweli.",
                    {
                      fr: "Un voyage de confort, de confiance, de faune et d’hospitalité sincère.",
                      de: "Eine Reise aus Komfort, Vertrauen, Wildnis und ehrlicher Gastfreundschaft.",
                      zh: "由舒适、信任、野生动物、文化与真诚款待构成的旅程。",
                      es: "Un viaje de confort, confianza, fauna, cultura y hospitalidad.",
                      ru: "Путешествие из комфорта, доверия, дикой природы и искреннего гостеприимства.",
                    },
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 sm:mt-12 lg:flex-row lg:items-start lg:gap-8">
          <div className="shrink-0 lg:w-56">
            <div className="flex items-center gap-3">
              <img src="/logo-mark.jpg" alt="" className="size-12 rounded-full object-cover ring-1 ring-sand sm:size-14" />
              <div>
                <p className="text-sm font-semibold sm:text-base">Eco Vibe Safari</p>
                <Stars value={5} />
                <p className="mt-1 text-xs text-muted">
                  {t(`${count} Google reviews`, `Maoni ${count} ya Google`, {
                    fr: `${count} avis Google`,
                    de: `${count} Google-Bewertungen`,
                    zh: `${count} 条 Google 评价`,
                    es: `${count} reseñas de Google`,
                    ru: `${count} отзыва Google`,
                  })}
                </p>
              </div>
            </div>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full border border-ink px-5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-cream sm:mt-5"
            >
              {t("Write a review", "Andika maoni", {
                fr: "Écrire un avis",
                de: "Bewertung schreiben",
                zh: "写评价",
                es: "Escribir una reseña",
                ru: "Написать отзыв",
              })}
            </a>
          </div>

          <div className="relative min-w-0 flex-1">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              className="absolute top-1/2 left-0 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-sand bg-paper text-ink shadow-sm sm:-left-3 sm:size-10"
              aria-label={t("Previous reviews", "Maoni yaliyopita")}
            >
              <ChevronLeft className="size-5" />
            </button>
            <div
              ref={scroller}
              onPointerDown={hold}
              className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-10 pb-2 sm:gap-4 sm:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {testimonials.map((item, i) => {
                const quote = pair(t, item.quote);
                const long = quote.length > 140;
                const open = openQuote === item.name;
                return (
                  <article
                    key={item.name}
                    className="relative w-[min(17rem,calc(100vw-5.5rem))] shrink-0 snap-start rounded-2xl border border-sand bg-paper p-4 shadow-sm sm:w-[16.5rem] sm:p-5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex min-w-0 items-center gap-2.5">
                        <div
                          className="flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white sm:size-10"
                          style={{ background: AVATAR_COLORS[i % AVATAR_COLORS.length] }}
                        >
                          {initials(item.name)}
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold">{item.name}</p>
                          <p className="text-[11px] text-muted">{item.date}</p>
                        </div>
                      </div>
                      <GoogleMark />
                    </div>
                    <div className="mt-3 flex items-center gap-1">
                      <Stars value={item.rating} />
                      <BadgeCheck className="size-3.5 fill-[#1a73e8] text-paper" />
                    </div>
                    <p className={cn("mt-3 text-[13px] leading-relaxed text-muted sm:text-sm", !open && "line-clamp-4")}>
                      {quote}
                    </p>
                    {long ? (
                      <button
                        type="button"
                        onClick={() => setOpenQuote(open ? null : item.name)}
                        className="mt-2 text-xs font-semibold text-forest"
                      >
                        {open
                          ? t("Show less", "Ficha")
                          : t("Read more", "Soma zaidi", {
                              fr: "Lire plus",
                              de: "Mehr lesen",
                              zh: "阅读更多",
                              es: "Leer más",
                              ru: "Читать дальше",
                            })}
                      </button>
                    ) : null}
                    <span className="absolute right-4 bottom-3 font-display text-3xl leading-none text-gold/50">
                      ”
                    </span>
                  </article>
                );
              })}
            </div>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              className="absolute top-1/2 right-0 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-sand bg-paper text-ink shadow-sm sm:-right-3 sm:size-10"
              aria-label={t("Next reviews", "Maoni yajayo")}
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
