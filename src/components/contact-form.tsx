import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { useT } from "@/lib/lang";

export function ContactForm() {
  const t = useT();
  const today = new Date().toISOString().slice(0, 10);
  const [departure, setDeparture] = useState("");

  function onContact(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const day = new FormData(e.currentTarget).get("departure");
    toast.success(
      day
        ? t(
            `Asante — we noted your journey from ${day} and will reply soon.`,
            `Asante — tumepokea safari yako kuanzia ${day}, tutajibu hivi karibuni.`,
          )
        : t(
            "Asante — we received your message and will reply soon.",
            "Asante — tumepokea ujumbe wako, tutajibu hivi karibuni.",
          ),
    );
    e.currentTarget.reset();
    setDeparture("");
  }

  return (
    <form onSubmit={onContact} className="rounded-xl bg-paper p-6 shadow-sm">
      <div className="mb-5 rounded-xl border border-sand bg-cream p-4">
        <p className="font-display text-lg font-semibold text-ink">
          {t("Plan your journey", "Panga safari yako", {
            fr: "Planifiez le voyage",
            de: "Plane die Reise",
            zh: "规划行程",
            es: "Planifica el viaje",
            ru: "Спланировать поездку",
          })}
        </p>
        <p className="mt-1 text-sm text-muted">
          {t("Choose the day you want to leave. A return day is optional.", "Chagua siku unayotaka kuondoka. Siku ya kurudi si lazima.", {
            fr: "Choisissez le jour de départ. Le retour est facultatif.",
            de: "Wähle den Abreisetag. Die Rückkehr ist freiwillig.",
            zh: "选择出发日期。返程日期可选。",
            es: "Elige el día de salida. La vuelta es opcional.",
            ru: "Выберите день выезда. Дата возвращения не обязательна.",
          })}
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <label className="block text-sm font-medium">
            {t("Departure", "Kuondoka", { fr: "Départ", de: "Abreise", zh: "出发", es: "Salida", ru: "Выезд" })}
            <input
              required
              type="date"
              name="departure"
              min={today}
              value={departure}
              onChange={(event) => setDeparture(event.target.value)}
              className="mt-1 min-h-11 w-full rounded-md border border-sand bg-paper px-3 text-base text-ink outline-none focus:border-forest"
            />
          </label>
          <label className="block text-sm font-medium">
            {t("Return", "Kurudi", { fr: "Retour", de: "Rückkehr", zh: "返回", es: "Regreso", ru: "Возвращение" })}
            <input
              type="date"
              name="return"
              min={departure || today}
              className="mt-1 min-h-11 w-full rounded-md border border-sand bg-paper px-3 text-base text-ink outline-none focus:border-forest"
            />
          </label>
        </div>
      </div>
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
