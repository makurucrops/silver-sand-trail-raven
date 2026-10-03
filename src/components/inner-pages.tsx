import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Binoculars,
  Camera,
  Car,
  Check,
  ChevronDown,
  Handshake,
  Home,
  Hotel,
  Mountain,
  Tent,
  Trees,
  UtensilsCrossed,
  Users,
  X,
} from "lucide-react";
import {
  camps,
  countries,
  destinations,
  experiences,
  faqs,
  foods,
  gallery,
  hikingIncluded,
  hikingMountains,
  howWeWork,
  offers,
  partnerships,
  posts,
  pricingExcluded,
  pricingGroups,
  pricingIncluded,
  pricingOptional,
  pricingUgandaRwanda,
  services,
  stays,
  tanzaniaParks,
  team,
  tours,
} from "@/data/content";
import { useT } from "@/lib/lang";
import { cn } from "@/lib/utils";
import { ContactForm } from "./contact-form";
import { Diamond, SectionHead, pair } from "./section-head";
import { PageHero } from "./site-shell";

const stayIcons = { hotel: Hotel, tent: Tent, home: Home, camp: Trees };
const serviceIcons = {
  car: Car,
  utensils: UtensilsCrossed,
  mountain: Mountain,
  binoculars: Binoculars,
  users: Users,
  camera: Camera,
};

export function AboutPage() {
  const t = useT();
  return (
    <>
      <PageHero
        kicker={t("About", "Sisi", { fr: "À propos", de: "Über uns", zh: "关于", es: "Nosotros", ru: "О нас" })}
        title={t("A local Arusha safari house", "Nyumba ya safari ya Arusha", {
          fr: "Une maison safari à Arusha",
          de: "Ein lokales Safari-Haus in Arusha",
          zh: "阿鲁沙本地safari之家",
          es: "Una casa safari local en Arusha",
          ru: "Местный сафари-дом в Аруше",
        })}
        desc={t(
          "Feel natural · live the adventure — parks, peaks, islands and people.",
          "Hisia ya asili · ishi adventure — mbuga, milima, visiwa na watu.",
          {
            fr: "Feel natural · live the adventure — parcs, sommets, îles et gens.",
            de: "Feel natural · live the adventure — Parks, Gipfel, Inseln und Menschen.",
            zh: "Feel natural · live the adventure — 公园、山峰、岛屿与人。",
            es: "Feel natural · live the adventure — parques, cumbres, islas y gente.",
            ru: "Feel natural · live the adventure — парки, вершины, острова и люди.",
          },
        )}
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="flex items-center justify-center rounded-xl border border-sand bg-paper px-6 py-8">
            <img src="/logo.jpg" alt="Eco Vibe Safari" className="h-auto w-full max-w-[18rem] object-contain" />
          </div>
          <div>
            <p className="leading-relaxed text-muted">
              {t(
                "We are based in Arusha. Our crews run game drives, mountain treks and cultural days with licensed local guides. We book camps and lodges, cook Tanzanian food on the road, and keep the itinerary honest — no hidden extras.",
                "Tuko Arusha. Timu zetu zinaendesha game drives, trek za milima na siku za utamaduni na viongozi wenye leseni. Tunahifadhi kambi na lodges, tunapika chakula cha Tanzania, na ratiba iko wazi.",
                {
                  fr: "Nous sommes à Arusha. Guides locaux licenciés, camps et lodges, cuisine tanzanienne, itinéraires sans frais cachés.",
                  de: "Wir sitzen in Arusha. Lizenzierte lokale Guides, Camps und Lodges, tansanische Küche, ehrliche Routen.",
                  zh: "我们在阿鲁沙。持证本地向导、营地与小屋、坦桑尼亚美食、行程透明无隐藏费用。",
                  es: "Estamos en Arusha. Guías locales con licencia, campamentos y lodges, comida tanzana e itinerarios honestos.",
                  ru: "Мы в Аруше. Лицензированные местные гиды, лагеря и лоджи, танзанийская кухня, честные маршруты.",
                },
              )}
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                ["1500+", t("Travellers", "Wasafiri", { fr: "Voyageurs", de: "Gäste", zh: "旅客", es: "Viajeros", ru: "Гости" })],
                ["12+", t("Years", "Miaka", { fr: "Ans", de: "Jahre", zh: "年", es: "Años", ru: "Лет" })],
                ["98%", t("Would return", "Wangerudi", { fr: "Reviendraient", de: "Kämen wieder", zh: "愿意再来", es: "Volverían", ru: "Вернулись бы" })],
              ].map(([n, l]) => (
                <div key={String(l)} className="rounded-lg bg-paper p-3 text-center shadow-sm">
                  <p className="font-display text-2xl font-semibold text-forest">{n}</p>
                  <p className="text-xs text-muted">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16">
          <SectionHead
            kicker={t("The house", "Nyumba", { fr: "La maison", de: "Das Haus", zh: "团队", es: "La casa", ru: "Дом" })}
            title={t("People who run Eco Vibe Safari", "Watu wanaoendesha Eco Vibe Safari", {
              fr: "Les gens d’Eco Vibe Safari",
              de: "Die Menschen hinter Eco Vibe Safari",
              zh: "运营 Eco Vibe Safari 的人",
              es: "Quiénes llevan Eco Vibe Safari",
              ru: "Кто ведёт Eco Vibe Safari",
            })}
          />
          <div className="grid gap-6 md:grid-cols-2">
            {team.map((person) => (
              <article key={person.name} className="rounded-xl bg-paper p-6 shadow-sm md:p-8">
                <p className="text-xs font-semibold tracking-[0.22em] text-sunset uppercase">{pair(t, person.role)}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{person.name}</h3>
                <p className="mt-5 leading-relaxed text-muted">{pair(t, person.bio)}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = serviceIcons[s.icon];
            return (
              <article key={s.title.en} className="rounded-xl bg-paper p-6 shadow-sm">
                <Icon className="size-6 text-forest" />
                <h3 className="mt-4 font-display text-lg font-semibold">{pair(t, s.title)}</h3>
                <p className="mt-2 text-sm text-muted">{pair(t, s.text)}</p>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}

export function DestinationsPage() {
  const t = useT();
  return (
    <>
      <PageHero
        kicker={t("Explore", "Gundua")}
        title={t("Destinations", "Maeneo")}
        desc={t(
          "East and southern Africa from our Arusha house — countries first, then the Tanzania parks.",
          "Afrika Mashariki na Kusini kutoka Arusha — nchi kwanza, kisha mbuga za Tanzania.",
          {
            fr: "Afrique de l’Est et australe depuis Arusha.",
            de: "Ost- und Südliches Afrika ab Arusha.",
            zh: "从阿鲁沙出发的东非与南部非洲。",
            es: "África oriental y austral desde Arusha.",
            ru: "Восточная и южная Африка из Аруши.",
          },
        )}
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((d) => (
            <article key={d.key} className="overflow-hidden rounded-xl bg-paper shadow-sm">
              <img src={d.image} alt={pair(t, d.title)} className="h-52 w-full object-cover" />
              <div className="p-5">
                <h2 className="font-display text-2xl font-semibold">{pair(t, d.title)}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{pair(t, d.blurb)}</p>
              </div>
            </article>
          ))}
        </div>
        <h3 className="mt-16 text-center font-display text-2xl font-semibold">
          {t("Tanzania parks & peaks", "Mbuga na milima ya Tanzania")}
        </h3>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <article key={d.key} className="overflow-hidden rounded-xl border border-sand bg-cream">
              <img src={d.image} alt={pair(t, d.title)} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-display text-lg font-semibold">{pair(t, d.title)}</h3>
                <p className="mt-1 text-sm text-muted">{pair(t, d.blurb)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

export function TripsPage() {
  const t = useT();
  return (
    <>
      <PageHero
        kicker={t("Our trips", "Safari zetu")}
        title={t("Ready-made journeys", "Safari zilizoandaliwa")}
        desc={t("Parks, peaks, islands — or we rewrite every day around you.", "Mbuga, milima, visiwa — au tunaandika kila siku kwa ajili yako.")}
      />
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour) => (
          <article key={tour.title.en} className="flex flex-col overflow-hidden rounded-xl bg-paper shadow-sm">
            <div className="relative h-48">
              <img src={tour.image} alt="" className="h-full w-full object-cover" />
              <span className="absolute top-3 left-3 rounded-full bg-sunset px-3 py-1 text-xs font-semibold text-paper">
                {pair(t, tour.badge)}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs font-medium tracking-wide text-muted uppercase">
                {pair(t, tour.days)} · {tour.place}
              </p>
              <h2 className="mt-1 font-display text-xl font-semibold">{pair(t, tour.title)}</h2>
              <p className="mt-2 flex-1 text-sm text-muted">{pair(t, tour.blurb)}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-display text-xl font-semibold text-forest">{tour.price}</span>
                <Link to="/contact" className="inline-flex min-h-11 items-center rounded-full bg-forest px-4 text-sm font-semibold text-paper">
                  {t("Book", "Weka nafasi", { fr: "Réserver", de: "Buchen", zh: "预订", es: "Reservar", ru: "Бронь" })}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export function ExperiencesPage() {
  const t = useT();
  return (
    <>
      <PageHero
        kicker={t("Experiences", "Uzoefu")}
        title={t("Small group, family, private", "Kikundi kidogo, familia, faragha")}
      />
      <div className="mx-auto max-w-6xl space-y-10 px-4 py-16 sm:px-6">
        {experiences.map((item) => (
          <article key={item.key} className="grid overflow-hidden rounded-xl bg-paper shadow-sm md:grid-cols-2">
            <img src={item.image} alt="" className="h-64 w-full object-cover md:h-full" />
            <div className="flex flex-col justify-center p-8">
              <h2 className="font-display text-3xl font-semibold">{pair(t, item.title)}</h2>
              <p className="mt-4 leading-relaxed text-muted">{pair(t, item.text)}</p>
              <Link to="/contact" className="mt-6 inline-flex min-h-11 w-fit items-center rounded-full bg-forest px-5 text-sm font-semibold text-paper">
                {t("Plan this style", "Panga mtindo huu")}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export function ExploreTanzaniaPage() {
  const t = useT();
  return (
    <>
      <PageHero
        kicker={t("Explore Tanzania", "Gundua Tanzania")}
        title={t("Parks, crater, peaks and tide", "Mbuga, crater, milima na pwani")}
        desc={t(
          "The northern circuit first — then Arusha NP, Manyara, Mikumi, Ruaha, Nyerere, Kilimanjaro, Meru and the islands.",
          "Mzunguko wa kaskazini kwanza — kisha Arusha NP, Manyara, Mikumi, Ruaha, Nyerere, Kilimanjaro, Meru na visiwa.",
        )}
      />
      <div className="mx-auto max-w-6xl space-y-10 px-4 py-16 sm:px-6">
        {tanzaniaParks.map((item) => (
          <article key={item.key} className="grid overflow-hidden rounded-xl bg-paper shadow-sm md:grid-cols-2">
            <img src={item.image} alt="" className="h-64 w-full object-cover md:h-full" />
            <div className="flex flex-col justify-center p-8">
              <h2 className="font-display text-3xl font-semibold">{pair(t, item.title)}</h2>
              <p className="mt-4 leading-relaxed text-muted">{pair(t, item.text)}</p>
              <Link to="/contact" className="mt-6 inline-flex min-h-11 w-fit items-center rounded-full bg-forest px-5 text-sm font-semibold text-paper">
                {t("Ask for this park", "Ulizia hifadhi hii")}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export function CampsPage() {
  const t = useT();
  return (
    <>
      <PageHero
        kicker={t("Sleep", "Lala")}
        title={t("Camps & lodges", "Kambi na lodges")}
        desc={t("Canvas, lodges and beach villas we book on your behalf.", "Hema, lodges na villa za pwani tunazohifadhi kwa niaba yako.")}
      />
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 sm:grid-cols-2 lg:grid-cols-3">
        {camps.map((c) => (
          <article key={c.title.en} className="overflow-hidden rounded-xl bg-paper shadow-sm">
            <img src={c.image} alt="" className="h-48 w-full object-cover" />
            <div className="p-5">
              <p className="text-xs font-semibold tracking-widest text-sunset uppercase">{pair(t, c.kind)}</p>
              <h2 className="mt-1 font-display text-xl font-semibold">{pair(t, c.title)}</h2>
              <p className="mt-1 text-sm text-muted">{pair(t, c.place)}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export function StayPage() {
  const t = useT();
  return (
    <>
      <PageHero
        kicker={t("Comfort", "Starehe")}
        title={t("Accommodation & food", "Malazi na chakula")}
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stays.map((s) => {
            const Icon = stayIcons[s.icon];
            return (
              <article key={s.title.en} className="rounded-xl border border-sand bg-paper p-6 text-center">
                <Icon className="mx-auto size-8 text-forest" />
                <h3 className="mt-4 font-display text-lg font-semibold">{pair(t, s.title)}</h3>
                <p className="mt-2 text-sm text-muted">{pair(t, s.text)}</p>
              </article>
            );
          })}
        </div>
        <h3 className="mt-16 text-center font-display text-2xl font-semibold">
          {t("Cultural food on the road", "Chakula cha kitamaduni njiani")}
        </h3>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {foods.map((f) => (
            <article key={f.title.en} className="rounded-xl bg-paper p-5">
              <UtensilsCrossed className="size-5 text-sunset" />
              <h4 className="mt-3 font-display text-lg font-semibold">{pair(t, f.title)}</h4>
              <p className="mt-2 text-sm text-muted">{pair(t, f.text)}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

export function HowWeWorkPage() {
  const t = useT();
  return (
    <>
      <PageHero kicker={t("Process", "Mchakato")} title={t("How we work", "Jinsi tunavyofanya kazi")} />
      <div className="mx-auto grid max-w-6xl gap-5 px-4 py-16 sm:px-6 sm:grid-cols-2 lg:grid-cols-4">
        {howWeWork.map((step) => (
          <article key={step.n} className="rounded-xl bg-paper p-6 shadow-sm">
            <p className="font-display text-3xl text-sunset">{step.n}</p>
            <h2 className="mt-3 font-display text-xl font-semibold">{pair(t, step.title)}</h2>
            <p className="mt-2 text-sm text-muted">{pair(t, step.text)}</p>
          </article>
        ))}
      </div>
    </>
  );
}

export function OffersPage() {
  const t = useT();
  return (
    <>
      <PageHero kicker={t("Offers", "Ofa")} title={t("This season", "Msimu huu")} />
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-3">
        {offers.map((o) => (
          <article key={o.title.en} className="rounded-xl bg-paper p-6 shadow-sm">
            <span className="text-xs font-semibold tracking-widest text-sunset uppercase">{pair(t, o.tag)}</span>
            <h2 className="mt-3 font-display text-2xl font-semibold">{pair(t, o.title)}</h2>
            <p className="mt-3 text-sm text-muted">{pair(t, o.text)}</p>
            <p className="mt-5 font-display text-xl text-forest">{pair(t, o.price)}</p>
            <Link to="/contact" className="mt-4 inline-flex min-h-11 items-center rounded-full bg-forest px-4 text-sm font-semibold text-paper">
              {t("Ask for dates", "Uliza tarehe")}
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}

export function PricingPage() {
  const t = useT();
  const from = t("From", "Kuanzia", { fr: "Dès", de: "Ab", zh: "起价", es: "Desde", ru: "От" });
  const pp = t("pp", "kwa mtu", { fr: "/ pers.", de: "p. P.", zh: "/人", es: "/ pers.", ru: "/ чел." });
  const tiers = [
    { key: "comfort" as const, label: t("Comfort", "Starehe", { fr: "Confort", de: "Comfort", zh: "舒适", es: "Comfort", ru: "Комфорт" }) },
    { key: "luxury" as const, label: t("Luxury", "Anasa", { fr: "Luxe", de: "Luxus", zh: "奢华", es: "Lujo", ru: "Люкс" }) },
    { key: "vip" as const, label: t("VIP Luxury", "VIP Luxury", { fr: "VIP Luxe", de: "VIP-Luxus", zh: "VIP奢华", es: "VIP Lujo", ru: "VIP люкс" }) },
  ];

  return (
    <>
      <PageHero
        kicker={t("Pricing", "Bei")}
        title={t("Packages from Arusha", "Vifurushi kutoka Arusha")}
        desc={t(
          "Feel natural, live the adventure. All prices are from, per person, and shift with season, rooms and group size.",
          "Hisia ya asili, ishi adventure. Bei zote ni kuanzia, kwa mtu, na zinabadilika kwa msimu, vyumba na idadi ya wageni.",
        )}
      />

      <div className="mx-auto max-w-6xl space-y-14 px-4 py-14 sm:px-6">
        {pricingGroups.map((group) => (
          <section key={group.key}>
            <div className="mb-6 overflow-hidden rounded-xl">
              <div className="relative h-36 sm:h-44">
                <img src={group.image} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-ink/45" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 text-paper">
                  <p className="text-sm">{group.flag}</p>
                  <h2 className="font-display text-2xl font-semibold sm:text-3xl">{pair(t, group.region)}</h2>
                  <p className="mt-1 max-w-xl text-sm text-sand">{pair(t, group.intro)}</p>
                </div>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {group.packages.map((pkg) => (
                <article key={pkg.title.en} className="rounded-xl bg-paper p-5 shadow-sm">
                  <h3 className="font-display text-xl font-semibold">{pair(t, pkg.title)}</h3>
                  <div className="mt-4 grid gap-2 sm:grid-cols-3">
                    {tiers.map((tier) => (
                      <div
                        key={tier.key}
                        className={cn(
                          "rounded-lg border px-3 py-3 text-center",
                          tier.key === "vip" ? "border-gold bg-cream" : "border-sand",
                        )}
                      >
                        <p className="text-[11px] font-semibold tracking-widest text-sunset uppercase">{tier.label}</p>
                        <p className="mt-1 font-display text-lg font-semibold text-forest">
                          {from} {pkg[tier.key]}
                        </p>
                        <p className="text-xs text-muted">{pp}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-forest"
                  >
                    {t("Request this itinerary", "Omba ratiba hii", {
                      fr: "Demander cet itinéraire",
                      de: "Diese Route anfragen",
                      zh: "申请此行程",
                      es: "Pedir este itinerario",
                      ru: "Запросить маршрут",
                    })}
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ))}

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-xl bg-paper p-6 shadow-sm">
            <h2 className="font-display text-2xl font-semibold">
              {t("What’s included", "Nini kimo ndani", {
                fr: "Ce qui est inclus",
                de: "Inklusivleistungen",
                zh: "包含内容",
                es: "Qué incluye",
                ru: "Что включено",
              })}
            </h2>
            <p className="mt-2 text-sm text-muted">
              {t(
                "Depending on the selected itinerary and package.",
                "Kulingana na ratiba na kifurushi ulichochagua.",
              )}
            </p>
            <ul className="mt-4 space-y-2">
              {pricingIncluded.map((item) => (
                <li key={item.en} className="flex gap-2 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-forest" />
                  <span>{pair(t, item)}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 font-display text-lg font-semibold">
              {t("Uganda & Rwanda packages", "Vifurushi vya Uganda na Rwanda")}
            </h3>
            <p className="mt-1 text-sm text-muted">
              {t(
                "Where applicable. Permits are included only when specifically stated in the selected itinerary.",
                "Inapohitajika. Vizia vimo tu vikiwa vimeandikwa wazi kwenye ratiba.",
              )}
            </p>
            <ul className="mt-3 space-y-2">
              {pricingUgandaRwanda.map((item) => (
                <li key={item.en} className="flex gap-2 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-forest" />
                  <span>{pair(t, item)}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl bg-paper p-6 shadow-sm">
            <h2 className="font-display text-2xl font-semibold">
              {t("What’s excluded", "Nini hakimo", {
                fr: "Non inclus",
                de: "Nicht enthalten",
                zh: "不含内容",
                es: "Qué no incluye",
                ru: "Что не входит",
              })}
            </h2>
            <ul className="mt-4 space-y-2">
              {pricingExcluded.map((item) => (
                <li key={item.en} className="flex gap-2 text-sm">
                  <X className="mt-0.5 size-4 shrink-0 text-sunset" />
                  <span>{pair(t, item)}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <section>
          <SectionHead
            kicker={t("Add-ons", "Nyongeza")}
            title={t("Optional experiences", "Uzoefu wa hiari")}
            desc={t("Available at an additional cost.", "Inapatikana kwa gharama ya ziada.")}
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {pricingOptional.map((item) => (
              <p key={item.en} className="rounded-xl bg-paper px-4 py-3 text-sm font-medium shadow-sm">
                {pair(t, item)}
              </p>
            ))}
          </div>
        </section>

        <p className="rounded-xl border border-sand bg-paper px-5 py-4 text-sm leading-relaxed text-muted">
          {t(
            "All prices are “From” prices per person and may vary according to travel season, accommodation availability, number of guests, selected activities, flight arrangements and itinerary customization. For VIP Luxury, accommodation, private transport, premium dining and exclusive experiences can be customized to the guest’s preferences.",
            "Bei zote ni “Kuanzia” kwa mtu na zinaweza kubadilika kwa msimu, upatikanaji wa malazi, idadi ya wageni, shughuli, ndege na marekebisho ya ratiba. Kwa VIP Luxury, malazi, usafiri wa faragha, milo na uzoefu maalum vinaweza kubadilishwa kwa mapenzi ya mgeni.",
          )}
        </p>

        <div className="rounded-xl bg-forest-deep px-6 py-10 text-center text-paper">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            {t("Ready to lock a departure?", "Uko tayari kufunga tarehe?")}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sand">
            {t(
              "Tell us dates and which category — Comfort, Luxury or VIP Luxury — and we sketch the parks and camps.",
              "Tuambie tarehe na kundi — Comfort, Luxury au VIP Luxury — tunaandaa mbuga na kambi.",
            )}
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex min-h-11 items-center rounded-full bg-gold px-6 text-sm font-semibold text-ink"
          >
            {t("Plan this trip", "Panga safari")}
          </Link>
        </div>
      </div>
    </>
  );
}

export function HikingPage() {
  const t = useT();
  const from = t("From", "Kuanzia", { fr: "Dès", de: "Ab", zh: "起价", es: "Desde", ru: "От" });
  const pp = t("pp", "kwa mtu", { fr: "/ pers.", de: "p. P.", zh: "/人", es: "/ pers.", ru: "/ чел." });

  return (
    <>
      <PageHero
        kicker={t("Hiking", "Kupanda milima")}
        title={t("Three peaks from Arusha", "Milima mitatu kutoka Arusha")}
        desc={t(
          "Kilimanjaro, Mount Meru and Ol Doinyo Lengai — licensed crews, honest loads, and prices from per person.",
          "Kilimanjaro, Mount Meru na Ol Doinyo Lengai — timu zenye leseni, mizigo ya haki, na bei kuanzia kwa mtu.",
        )}
      />

      <div className="mx-auto max-w-6xl space-y-10 px-4 py-14 sm:px-6">
        {hikingMountains.map((peak) => (
          <article key={peak.key} className="overflow-hidden rounded-xl bg-paper shadow-sm">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-52">
                <img src={peak.image} alt="" className="h-full w-full object-cover" />
                <span className="absolute top-3 left-3 rounded-full bg-sunset px-3 py-1 text-xs font-semibold text-paper">
                  {peak.height}
                </span>
              </div>
              <div className="p-5 sm:p-7">
                <p className="text-xs font-semibold tracking-[0.18em] text-sunset uppercase">{pair(t, peak.tag)}</p>
                <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">{pair(t, peak.name)}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{pair(t, peak.text)}</p>
                <ul className="mt-5 space-y-3">
                  {peak.routes.map((route) => (
                    <li
                      key={route.title.en}
                      className="flex items-center justify-between gap-3 rounded-lg border border-sand px-3 py-3"
                    >
                      <span className="text-sm font-medium">{pair(t, route.title)}</span>
                      <span className="shrink-0 text-right">
                        <span className="font-display text-lg font-semibold text-forest">
                          {from} {route.price}
                        </span>
                        <span className="ml-1 text-xs text-muted">{pp}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex min-h-11 items-center rounded-full bg-forest px-5 text-sm font-semibold text-paper"
                >
                  {t("Book this climb", "Weka nafasi ya kupanda", {
                    fr: "Réserver cette ascension",
                    de: "Diese Tour buchen",
                    zh: "预订此次登山",
                    es: "Reservar esta cumbre",
                    ru: "Забронировать восхождение",
                  })}
                </Link>
              </div>
            </div>
          </article>
        ))}

        <article className="rounded-xl bg-paper p-6 shadow-sm">
          <h2 className="font-display text-2xl font-semibold">
            {t("What’s included on the mountain", "Nini kimo mlimani")}
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {hikingIncluded.map((item) => (
              <li key={item.en} className="flex gap-2 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-forest" />
                <span>{pair(t, item)}</span>
              </li>
            ))}
          </ul>
        </article>

        <p className="rounded-xl border border-sand bg-paper px-5 py-4 text-sm leading-relaxed text-muted">
          {t(
            "All hiking prices are “From” prices per person. They shift with season, group size, route and extra nights. Tips, personal gear, visas and travel insurance are not included.",
            "Bei za hiking ni “Kuanzia” kwa mtu. Zinabadilika kwa msimu, idadi ya wageni, njia na usiku wa ziada. Tips, vifaa binafsi, visa na bima havimo.",
          )}
        </p>
      </div>
    </>
  );
}

export function GalleryPage() {
  const t = useT();
  const [lightbox, setLightbox] = useState<string | null>(null);
  return (
    <>
      <PageHero kicker={t("Light", "Mwanga")} title={t("Gallery", "Matunzio")} />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {gallery.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setLightbox(src)}
              className={cn("overflow-hidden rounded-lg", i === 0 ? "md:col-span-2 md:row-span-2" : "")}
            >
              <img
                src={src}
                alt={t("Safari photograph", "Picha ya safari")}
                className={cn("w-full object-cover", i === 0 ? "h-full min-h-52 md:min-h-80" : "h-36 md:h-44")}
              />
            </button>
          ))}
        </div>
      </div>
      {lightbox ? (
        <button
          type="button"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4"
          onClick={() => setLightbox(null)}
          aria-label={t("Close image", "Funga picha")}
        >
          <img src={lightbox} alt="" className="max-h-[90vh] max-w-full rounded-lg object-contain" />
        </button>
      ) : null}
    </>
  );
}

export function PartnershipsPage() {
  const t = useT();
  return (
    <>
      <PageHero
        kicker={t("Partnership", "Ushirika")}
        title={t("Who we work with", "Tunafanya kazi na nani")}
        desc={t(
          "Lodges, parks, mountain crews, communities and agents — a local Arusha desk that holds the moving parts.",
          "Lodges, mbuga, timu za milima, jamii na mawakala — dawati la Arusha linaloshika kila sehemu.",
        )}
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {partnerships.map((item) => (
            <article key={item.title.en} className="rounded-xl bg-paper p-6 shadow-sm md:p-8">
              <Handshake className="size-6 text-forest" />
              <h2 className="mt-4 font-display text-xl font-semibold">{pair(t, item.title)}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{pair(t, item.text)}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 rounded-xl bg-forest px-6 py-10 text-center text-paper md:px-10">
          <h3 className="font-display text-2xl font-semibold">
            {t("Work with Eco Vibe Safari", "Fanya kazi na Eco Vibe Safari")}
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sand">
            {t(
              "Agents, lodges and conservation desks — send a note. We reply with how we partner, net rates and a named operations contact.",
              "Mawakala, lodges na ofisi za uhifadhi — tuma ujumbe. Tunajibu namna tunavyoshirikiana, bei na mtu wa operations.",
            )}
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex min-h-11 items-center rounded-full bg-cream px-6 text-sm font-semibold text-ink"
          >
            {t("Start a partnership", "Anza ushirika")}
          </Link>
        </div>
      </div>
    </>
  );
}

export function FaqPage() {
  const t = useT();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <>
      <PageHero kicker={t("Questions", "Maswali")} title={t("Frequently asked", "Maswali ya mara kwa mara")} />
      <div className="mx-auto max-w-3xl space-y-3 px-4 py-16 sm:px-6">
        {faqs.map((f, i) => {
          const open = openFaq === i;
          return (
            <div key={f.q.en} className="rounded-xl border border-sand bg-paper">
              <button
                type="button"
                className="flex min-h-12 w-full items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpenFaq(open ? null : i)}
                aria-expanded={open}
              >
                <span className="font-medium">{pair(t, f.q)}</span>
                <ChevronDown className={cn("size-5 shrink-0 text-forest transition-transform", open && "rotate-180")} />
              </button>
              {open ? <p className="px-5 pb-4 text-sm leading-relaxed text-muted">{pair(t, f.a)}</p> : null}
            </div>
          );
        })}
      </div>
    </>
  );
}

export function ContactPage() {
  const t = useT();
  return (
    <>
      <PageHero
        kicker={t("Plan the days", "Panga siku")}
        title={t("Tell us the trip in your head", "Tuambie safari iliyo kichwani")}
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
        <div>
          <div className="mt-1">
            <Diamond />
          </div>
          <p className="mt-4 text-muted">
            {t(
              "Share dates, who is travelling, and whether you want plains, crater, coast or the mountain. We reply with a clear outline.",
              "Tuambie tarehe, nani anasafiri, na kama unataka nyanda, crater, pwani au mlima.",
            )}
          </p>
          <p className="mt-6 text-sm text-muted">
            WhatsApp · +255 754 000 000
            <br />
            hello@ecovibesafari.com
            <br />
            Arusha, Tanzania
          </p>
        </div>
        <ContactForm />
      </div>
    </>
  );
}

export function JournalPage() {
  const t = useT();
  return (
    <>
      <PageHero kicker={t("Field notes", "Vidokezo")} title={t("From the journal", "Kutoka jarida")} />
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-3">
        {posts.map((p) => (
          <article key={p.title.en} className="overflow-hidden rounded-xl bg-paper shadow-sm">
            <img src={p.image} alt="" className="h-44 w-full object-cover" />
            <div className="p-5">
              <p className="text-xs font-medium text-sunset">{p.date}</p>
              <h2 className="mt-2 font-display text-xl font-semibold">{pair(t, p.title)}</h2>
              <p className="mt-2 text-sm text-muted">{pair(t, p.blurb)}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
