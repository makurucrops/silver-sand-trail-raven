import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { WhatsAppFloat } from "./whatsapp-float";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <WhatsAppFloat />
      {children}
      <SiteFooter />
    </div>
  );
}

export function PageHero({ kicker, title, desc }: { kicker: string; title: string; desc?: string }) {
  return (
    <div className="bg-forest-deep px-4 pt-32 pb-16 text-center text-paper sm:px-6">
      <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">{kicker}</p>
      <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">{title}</h1>
      {desc ? <p className="mx-auto mt-4 max-w-2xl text-sand">{desc}</p> : null}
    </div>
  );
}
