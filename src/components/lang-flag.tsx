import type { ReactElement } from "react";
import type { Lang } from "@/lib/lang";
import { cn } from "@/lib/utils";

export function LangFlag({ id, className }: { id: Lang; className?: string }) {
  return (
    <span className={cn("inline-flex h-3.5 w-[1.35rem] overflow-hidden rounded-[2px] shadow-sm", className)} aria-hidden="true">
      {flags[id]}
    </span>
  );
}

const flags: Record<Lang, ReactElement> = {
  en: (
    <svg viewBox="0 0 60 30" className="h-full w-full">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0 0l60 30M60 0L0 30" stroke="#fff" strokeWidth="6" />
      <path d="M0 0l60 30M60 0L0 30" stroke="#c8102e" strokeWidth="4" clipPath="none" />
      <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
      <path d="M30 0v30M0 15h60" stroke="#c8102e" strokeWidth="6" />
    </svg>
  ),
  sw: (
    <svg viewBox="0 0 36 24" className="h-full w-full">
      <path fill="#1eb53a" d="M0 0h36v24H0z" />
      <path fill="#00a3dd" d="M36 0v24H0z" opacity="0" />
      <path fill="#00a3dd" d="M36 0v24H0L36 0z" />
      <path d="M-2 26L38-2" stroke="#fcd116" strokeWidth="8" />
      <path d="M-2 26L38-2" stroke="#000" strokeWidth="5" />
    </svg>
  ),
  fr: (
    <svg viewBox="0 0 36 24" className="h-full w-full">
      <rect width="12" height="24" fill="#002395" />
      <rect x="12" width="12" height="24" fill="#fff" />
      <rect x="24" width="12" height="24" fill="#ed2939" />
    </svg>
  ),
  de: (
    <svg viewBox="0 0 36 24" className="h-full w-full">
      <rect width="36" height="8" fill="#000" />
      <rect y="8" width="36" height="8" fill="#dd0000" />
      <rect y="16" width="36" height="8" fill="#ffce00" />
    </svg>
  ),
  zh: (
    <svg viewBox="0 0 36 24" className="h-full w-full">
      <rect width="36" height="24" fill="#de2910" />
      <polygon fill="#ffde00" points="8,4 9.2,7.6 13,7.6 10,9.8 11.2,13.4 8,11.2 4.8,13.4 6,9.8 3,7.6 6.8,7.6" />
    </svg>
  ),
  es: (
    <svg viewBox="0 0 36 24" className="h-full w-full">
      <rect width="36" height="24" fill="#c60b1e" />
      <rect y="6" width="36" height="12" fill="#ffc400" />
    </svg>
  ),
  ru: (
    <svg viewBox="0 0 36 24" className="h-full w-full">
      <rect width="36" height="8" fill="#fff" />
      <rect y="8" width="36" height="8" fill="#0039a6" />
      <rect y="16" width="36" height="8" fill="#d52b1e" />
    </svg>
  ),
};
