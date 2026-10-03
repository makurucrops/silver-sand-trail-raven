import { createFileRoute } from "@tanstack/react-router";
import { CampsPage } from "@/components/inner-pages";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/camps")({
  component: () => (
    <SiteShell>
      <CampsPage />
    </SiteShell>
  ),
});
