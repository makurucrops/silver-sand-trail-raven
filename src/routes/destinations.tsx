import { createFileRoute } from "@tanstack/react-router";
import { DestinationsPage } from "@/components/inner-pages";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/destinations")({
  component: () => (
    <SiteShell>
      <DestinationsPage />
    </SiteShell>
  ),
});
