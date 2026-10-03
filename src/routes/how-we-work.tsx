import { createFileRoute } from "@tanstack/react-router";
import { HowWeWorkPage } from "@/components/inner-pages";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/how-we-work")({
  component: () => (
    <SiteShell>
      <HowWeWorkPage />
    </SiteShell>
  ),
});
