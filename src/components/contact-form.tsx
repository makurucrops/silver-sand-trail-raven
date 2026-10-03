import { FormEvent } from "react";
import { toast } from "sonner";
import { useT } from "@/lib/lang";

export function ContactForm() {
  const t = useT();

  function onContact(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.success(
      t(
        "Asante — we received your message and will reply soon.",
        "Asante — tumepokea ujumbe wako, tutajibu hivi karibuni.",
      ),
    );
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={onContact} className="rounded-xl bg-paper p-6 shadow-sm">
      <label className="mb-4 block text-sm font-medium">
        {t("Name", "Jina")}
        <input
          required
          name="name"
          className="mt-1 min-h-11 w-full rounded-md border border-sand bg-cream px-3 text-base text-ink outline-none focus:border-forest"
        />
      </label>
      <label className="mb-4 block text-sm font-medium">
        {t("Email", "Barua pepe")}
        <input
          required
          type="email"
          name="email"
          className="mt-1 min-h-11 w-full rounded-md border border-sand bg-cream px-3 text-base text-ink outline-none focus:border-forest"
        />
      </label>
      <label className="mb-4 block text-sm font-medium">
        {t("Interest", "Unachotaka")}
        <select
          name="interest"
          className="mt-1 min-h-11 w-full rounded-md border border-sand bg-cream px-3 text-base text-ink outline-none focus:border-forest"
        >
          <option>{t("Safari circuit", "Mzunguko wa safari")}</option>
          <option>{t("Kilimanjaro climb", "Kupanda Kilimanjaro")}</option>
          <option>{t("Group package", "Kifurushi cha kikundi")}</option>
          <option>{t("Private safari", "Safari ya faragha")}</option>
          <option>{t("Photographic", "Picha")}</option>
          <option>{t("Custom itinerary", "Ratiba maalum")}</option>
        </select>
      </label>
      <label className="mb-4 block text-sm font-medium">
        {t("Message", "Ujumbe")}
        <textarea
          required
          name="message"
          rows={4}
          className="mt-1 w-full rounded-md border border-sand bg-cream px-3 py-2 text-base text-ink outline-none focus:border-forest"
        />
      </label>
      <button
        type="submit"
        className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-sunset text-sm font-semibold text-paper hover:bg-sunset/90"
      >
        {t("Send message", "Tuma ujumbe")}
      </button>
    </form>
  );
}
