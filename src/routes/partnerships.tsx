import { createFileRoute } from "@tanstack/react-router";
import { PartnershipsPage } from "@/components/inner-pages";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/partnerships")({
  component: () => (
    <SiteShell>
      <PartnershipsPage />
    </SiteShell>
  ),
});
