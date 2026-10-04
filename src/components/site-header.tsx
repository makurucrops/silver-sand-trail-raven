import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { nav } from "@/data/content";
import { LANGS, type Lang, useLang, useT } from "@/lib/lang";
import { LangFlag } from "./lang-flag";

const pillLinks = [
  {
    href: "/",
    label: { en: "Home", sw: "Nyumbani", fr: "Accueil", de: "Start", zh: "首页", es: "Inicio", ru: "Главная" },
  },
  {
    href: "/destinations",
    label: {
      en: "Destinations",
      sw: "Maeneo",
      fr: "Destinations",
      de: "Ziele",
      zh: "目的地",
      es: "Destinos",
      ru: "Направления",
    },
  },
  {
    href: "/explore-tanzania",
    label: {
      en: "Tanzania",
      sw: "Tanzania",
      fr: "Tanzanie",
      de: "Tansania",
      zh: "坦桑尼亚",
      es: "Tanzania",
      ru: "Танзания",
    },
  },
  {
    href: "/trips",
    label: { en: "Trips", sw: "Safari", fr: "Voyages", de: "Reisen", zh: "行程", es: "Viajes", ru: "Поездки" },
  },
  {
    href: "/experiences",
    label: {
      en: "Experiences",
      sw: "Uzoefu",
      fr: "Expériences",
      de: "Erlebnisse",
      zh: "体验",
      es: "Experiencias",
      ru: "Впечатления",
    },
  },
  {
    href: "/gallery",
    label: { en: "Gallery", sw: "Picha", fr: "Galerie", de: "Galerie", zh: "图库", es: "Galería", ru: "Галерея" },
  },
];

export function SiteHeader() {
  const t = useT();
  const lang = useLang((s) => s.lang);
  const setLang = useLang((s) => s.setLang);
  const [open, setOpen] = useState(false);
  const [langsOpen, setLangsOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("eco-lang") as Lang | null;
    if (saved && LANGS.some((l) => l.id === saved)) setLang(saved);
  }, [setLang]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!langRef.current?.contains(e.target as Node)) setLangsOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const current = LANGS.find((l) => l.id === lang)?.short ?? "ENG";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2.5 pt-[max(0.55rem,env(safe-area-inset-top))] sm:px-6 sm:pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-1.5 rounded-full border border-white/70 bg-cream/95 px-2 py-1.5 shadow-[0_10px_30px_rgba(60,36,18,0.16)] ring-1 ring-sand/80 backdrop-blur-md sm:gap-2 sm:px-5 sm:py-2">
        <Link to="/" className="flex min-w-0 items-center gap-2 pr-0.5" onClick={() => setOpen(false)}>
          <img
            src="/logo-mark.jpg"
            alt="Eco Vibe Safari"
            className="h-9 w-9 shrink-0 rounded-full object-cover ring-1 ring-sand sm:h-12 sm:w-12"
          />
          <span className="truncate font-display text-[10.5px] font-semibold tracking-[0.03em] text-ink min-[380px]:text-[11px] min-[380px]:tracking-wide sm:text-sm">
            ECO VIBE SAFARI
          </span>
        </Link>

        <nav className="hidden items-center gap-4 lg:flex">
          {pillLinks.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-xs font-semibold tracking-[0.12em] text-ink uppercase transition-colors hover:text-sunset"
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <div className="relative" ref={langRef}>
            <button
              type="button"
              onClick={() => setLangsOpen((v) => !v)}
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-sand bg-paper px-2 text-[11px] font-semibold tracking-wide text-ink sm:min-h-11 sm:gap-2 sm:px-3"
              aria-haspopup="listbox"
              aria-expanded={langsOpen}
              aria-label={t("Language", "Lugha", { fr: "Langue", de: "Sprache", zh: "语言", es: "Idioma", ru: "Язык" })}
            >
              <LangFlag id={lang} />
              <span>{current}</span>
              <ChevronDown className="size-3.5" />
            </button>
            {langsOpen ? (
              <ul
                role="listbox"
                className="absolute right-0 z-50 mt-2 max-h-[70vh] min-w-56 overflow-auto rounded-2xl border border-sand bg-cream py-1 shadow-lg"
              >
                {LANGS.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={item.id === lang}
                      onClick={() => {
                        setLang(item.id);
                        setLangsOpen(false);
                      }}
                      className="flex min-h-11 w-full items-center gap-2.5 px-3 text-left text-sm text-ink hover:bg-paper"
                    >
                      <LangFlag id={item.id} />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <Link
            to="/contact"
            className="hidden min-h-11 items-center rounded-full bg-ink px-4 text-[11px] font-semibold tracking-[0.1em] text-cream uppercase sm:inline-flex"
          >
            {t("Travel with us", "Safiri nasi", {
              fr: "Voyagez avec nous",
              de: "Reise mit uns",
              zh: "与我们同行",
              es: "Viaja con nosotros",
              ru: "С нами",
            })}
          </Link>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full bg-paper text-ink ring-1 ring-sand sm:size-11"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t("Close menu", "Funga menyu") : t("Open menu", "Fungua menyu")}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="mx-3 mt-2 max-h-[min(70vh,32rem)] overflow-auto rounded-2xl bg-cream px-3 py-3 shadow-lg sm:mx-auto sm:max-w-6xl sm:px-4 sm:py-4">
          <nav className="grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-3">
            <Link to="/" onClick={() => setOpen(false)} className="min-h-11 rounded-lg px-3 py-2.5 text-base font-medium text-ink active:bg-paper">
              {t("Home", "Nyumbani", { fr: "Accueil", de: "Start", zh: "首页", es: "Inicio", ru: "Главная" })}
            </Link>
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="min-h-11 rounded-lg px-3 py-2.5 text-base font-medium text-ink active:bg-paper"
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
