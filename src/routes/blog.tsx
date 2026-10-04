import { createFileRoute } from "@tanstack/react-router";
import { JournalPage } from "@/components/inner-pages";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/blog")({
  component: () => (
    <SiteShell>
      <JournalPage />
    </SiteShell>
  ),
});
