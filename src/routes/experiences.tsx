import { createFileRoute } from "@tanstack/react-router";
import { ExperiencesPage } from "@/components/inner-pages";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/experiences")({
  component: () => (
    <SiteShell>
      <ExperiencesPage />
    </SiteShell>
  ),
});
