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

  const current = LANGS.find((l) => l.id === lang)?.label ?? "ENG";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 rounded-full bg-cream px-3 py-2 shadow-lg sm:px-5">
        <Link to="/" className="flex min-h-11 shrink-0 items-center gap-2.5 pr-1" onClick={() => setOpen(false)}>
          <img
            src="/logo-mark.jpg"
            alt="Eco Vibe Safari"
            className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-sand sm:h-12 sm:w-12"
          />
          <span className="whitespace-nowrap font-display text-[11px] font-semibold tracking-wide text-ink sm:text-sm">
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

        <div className="flex items-center gap-2">
          <div className="relative" ref={langRef}>
            <button
              type="button"
              onClick={() => setLangsOpen((v) => !v)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-sand bg-paper px-3 text-[11px] font-semibold tracking-wide text-ink"
              aria-haspopup="listbox"
              aria-expanded={langsOpen}
              aria-label={t("Language", "Lugha", { fr: "Langue", de: "Sprache", zh: "语言", es: "Idioma", ru: "Язык" })}
            >
              <LangFlag id={lang} />
              {current}
              <ChevronDown className="size-3.5" />
            </button>
            {langsOpen ? (
              <ul
                role="listbox"
                className="absolute right-0 z-50 mt-2 min-w-44 rounded-xl border border-sand bg-cream py-1 shadow-lg"
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
                      className="flex min-h-10 w-full items-center gap-2.5 px-3 text-left text-sm text-ink hover:bg-paper"
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
            className="inline-flex size-11 items-center justify-center rounded-full bg-paper text-ink ring-1 ring-sand"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t("Close menu", "Funga menyu") : t("Open menu", "Fungua menyu")}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl bg-cream px-4 py-4 shadow-lg">
          <nav className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
            <Link to="/" onClick={() => setOpen(false)} className="min-h-11 rounded-md px-2 py-2 text-base font-medium text-ink">
              {t("Home", "Nyumbani", { fr: "Accueil", de: "Start", zh: "首页", es: "Inicio", ru: "Главная" })}
            </Link>
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="min-h-11 rounded-md px-2 py-2 text-base font-medium text-ink"
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
