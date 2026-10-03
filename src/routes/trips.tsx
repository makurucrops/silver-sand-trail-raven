import { createFileRoute } from "@tanstack/react-router";
import { TripsPage } from "@/components/inner-pages";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/trips")({
  component: () => (
    <SiteShell>
      <TripsPage />
    </SiteShell>
  ),
});
