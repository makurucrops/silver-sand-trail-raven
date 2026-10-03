import { createFileRoute } from "@tanstack/react-router";
import { GalleryPage } from "@/components/inner-pages";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/gallery")({
  component: () => (
    <SiteShell>
      <GalleryPage />
    </SiteShell>
  ),
});
