import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/inner-pages";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/contact")({
  component: () => (
    <SiteShell>
      <ContactPage />
    </SiteShell>
  ),
});
