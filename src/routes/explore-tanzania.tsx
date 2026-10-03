import { createFileRoute } from "@tanstack/react-router";
import { ExploreTanzaniaPage } from "@/components/inner-pages";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/explore-tanzania")({
  component: () => (
    <SiteShell>
      <ExploreTanzaniaPage />
    </SiteShell>
  ),
});
