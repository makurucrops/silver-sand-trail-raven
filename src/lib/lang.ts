import { create } from "zustand";

export const LANGS = [
  { id: "en", label: "ENG" },
  { id: "sw", label: "SW" },
  { id: "fr", label: "FRENCH" },
  { id: "de", label: "GERMAN" },
  { id: "zh", label: "CHINA" },
  { id: "es", label: "SPANISH" },
  { id: "ru", label: "RUSSIA" },
] as const;

export type Lang = (typeof LANGS)[number]["id"];

export type Copy = { en: string } & Partial<Record<Lang, string>>;

type LangState = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

export const useLang = create<LangState>()((set) => ({
  lang: "en",
  setLang: (lang) => {
    try {
      localStorage.setItem("eco-lang", lang);
    } catch {
      /* ignore */
    }
    set({ lang });
  },
}));

export function useT() {
  const lang = useLang((s) => s.lang);
  return (copy: Copy | string, sw?: string, extra?: Partial<Record<Lang, string>>) => {
    if (typeof copy === "object") return copy[lang] || copy.en;
    if (lang === "sw" && sw) return sw;
    if (extra?.[lang]) return extra[lang] as string;
    return copy;
  };
}
