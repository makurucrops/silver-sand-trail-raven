import { create } from "zustand";
import { NL } from "./nl";

export const LANGS = [
  { id: "en", label: "ENG", short: "ENG" },
  { id: "sw", label: "SW", short: "SW" },
  { id: "fr", label: "FRENCH", short: "FR" },
  { id: "de", label: "Deutschland (Deutsch)", short: "DE" },
  { id: "nl", label: "Nederland (Nederlands)", short: "NL" },
  { id: "zh", label: "CHINA", short: "ZH" },
  { id: "es", label: "España (Español)", short: "ES" },
  { id: "ru", label: "RUSSIA", short: "RU" },
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
    if (typeof copy === "object") {
      if (copy[lang]) return copy[lang] as string;
      if (lang === "nl") return NL[copy.en] || copy.en;
      return copy.en;
    }
    if (lang === "sw" && sw) return sw;
    if (extra?.[lang]) return extra[lang] as string;
    if (lang === "nl") return NL[copy] || copy;
    return copy;
  };
}
