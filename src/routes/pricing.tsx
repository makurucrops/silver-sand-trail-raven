import { createFileRoute } from "@tanstack/react-router";
import { PricingPage } from "@/components/inner-pages";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/pricing")({
  component: () => (
    <SiteShell>
      <PricingPage />
    </SiteShell>
  ),
});
