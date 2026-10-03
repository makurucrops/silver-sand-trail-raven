import { createFileRoute } from "@tanstack/react-router";
import { OffersPage } from "@/components/inner-pages";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/offers")({
  component: () => (
    <SiteShell>
      <OffersPage />
    </SiteShell>
  ),
});
