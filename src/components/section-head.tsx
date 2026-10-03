import type { Copy } from "@/lib/lang";

export function Diamond() {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true">
      <span className="h-px w-10 bg-sunset/70" />
      <span className="size-1.5 rotate-45 bg-sunset" />
      <span className="h-px w-10 bg-sunset/70" />
    </div>
  );
}

export function SectionHead({ kicker, title, desc }: { kicker: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="text-xs font-semibold tracking-[0.22em] text-sunset uppercase">{kicker}</p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      <div className="mt-3">
        <Diamond />
      </div>
      {desc ? <p className="mt-4 text-muted">{desc}</p> : null}
    </div>
  );
}

export function pair(t: (c: Copy) => string, p: Copy) {
  return t(p);
}
