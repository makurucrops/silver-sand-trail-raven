import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/inner-pages";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/about")({
  component: () => (
    <SiteShell>
      <AboutPage />
    </SiteShell>
  ),
});
