import { createFileRoute } from "@tanstack/react-router";
import { FaqPage } from "@/components/inner-pages";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/faq")({
  component: () => (
    <SiteShell>
      <FaqPage />
    </SiteShell>
  ),
});
