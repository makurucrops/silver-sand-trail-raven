import { createFileRoute } from "@tanstack/react-router";
import { StayPage } from "@/components/inner-pages";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/stay")({
  component: () => (
    <SiteShell>
      <StayPage />
    </SiteShell>
  ),
});
