import { createFileRoute } from "@tanstack/react-router";
import { HikingPage } from "@/components/inner-pages";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/hiking")({
  component: () => (
    <SiteShell>
      <HikingPage />
    </SiteShell>
  ),
});
