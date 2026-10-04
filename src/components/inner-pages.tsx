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
      <section className="relative isolate flex min-h-[68vh] items-end justify-center overflow-hidden px-5 pt-32 pb-28 text-center text-paper sm:min-h-[76vh] sm:pb-32">
        <img src="/footer/read-more.jpg" alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/25 via-ink/35 to-ink/60" />
        <div className="relative mx-auto max-w-3xl">
          <span className="inline-flex rounded-full border border-paper/70 px-4 py-1.5 text-[11px] tracking-[0.16em] uppercase sm:text-xs">
            {t("About us", "Kuhusu sisi", { fr: "À propos", de: "Über uns", zh: "关于我们", es: "Sobre nosotros", ru: "О нас" })}
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold sm:text-6xl lg:text-7xl">
            {t("Our", "Hadithi", { fr: "Notre", de: "Unsere", zh: "我们的", es: "Nuestra", ru: "Наша" })}{" "}
            <span className="font-display text-gold italic">
              {t("Story", "yetu", { fr: "histoire", de: "Geschichte", zh: "故事", es: "historia", ru: "история" })}
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-paper/95 sm:text-base">
            {t(
              "The journeys that stay with you are built with the parks, the people beside you, and the quiet between game drives.",
              "Safari zinazobaki ni zile zenye mbuga, watu walio nawe, na utulivu kati ya game drives.",
              {
                fr: "Les voyages qui restent se construisent avec les parcs, les gens à vos côtés, et le calme entre les drives.",
                de: "Reisen, die bleiben, entstehen aus Parks, den Menschen neben dir und der Ruhe zwischen den Drives.",
                zh: "难忘的旅程来自公园、同行的人，以及巡游之间的安静。",
                es: "Los viajes que quedan se construyen con los parques, la gente a tu lado y la calma entre los drives.",
                ru: "Поездки, которые остаются, складываются из парков, людей рядом и тишины между выездами.",
              },
            )}
          </p>
        </div>
        <svg className="absolute -bottom-px left-0 h-14 w-full text-cream sm:h-20" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
          <path fill="currentColor" d="M0 36c240 48 480 52 720 18 240-34 480-8 720 16v26H0Z" />
        </svg>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.25fr_0.75fr] lg:gap-10">
          <img
            src="/about/gallery.png"
            alt=""
            className="aspect-[4/5] w-full rounded-2xl object-cover object-[center_28%]"
          />
          <div>
            <span className="inline-flex rounded-full border border-gold/70 px-4 py-1 text-[11px] tracking-[0.14em] text-gold uppercase">
              {t("Who we are", "Sisi ni nani", { fr: "Qui nous sommes", de: "Wer wir sind", zh: "我们是谁", es: "Quiénes somos", ru: "Кто мы" })}
            </span>
            <h2 className="mt-4 font-display text-3xl leading-tight font-semibold text-ink sm:text-4xl lg:text-5xl">
              {t("Meaningful safari", "Safari zenye", { fr: "Des safaris", de: "Safari mit", zh: "有意义的", es: "Safari con", ru: "Сафари со" })}{" "}
              <span className="text-gold italic">
                {t("experiences", "maana", { fr: "sens", de: "Sinn", zh: "体验", es: "sentido", ru: "смыслом" })}
              </span>
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
              <p>
                {t(
                  "Eco Vibe Safari is an Arusha house. We plan private, group and family journeys through the northern parks, the coast and the peaks, with licensed local guides.",
                  "Eco Vibe Safari ni nyumba ya Arusha. Tunapanga safari za faragha, kikundi na familia kwenye mbuga za kaskazini, pwani na milima, na viongozi wenye leseni.",
                  {
                    fr: "Eco Vibe Safari est une maison d’Arusha. Safaris privés, de groupe et en famille, parcs du nord, côte et sommets, guides locaux licenciés.",
                    de: "Eco Vibe Safari ist ein Haus in Arusha. Private, Gruppen- und Familiensafaris, Nordparks, Küste und Gipfel, lizenzierte lokale Guides.",
                    zh: "Eco Vibe Safari 在阿鲁沙。我们安排私人、团体与家庭行程，覆盖北部公园、海岸与山峰，向导为本地持证人员。",
                    es: "Eco Vibe Safari es una casa en Arusha. Safaris privados, de grupo y en familia por los parques del norte, la costa y las cumbres, con guías locales.",
                    ru: "Eco Vibe Safari — дом в Аруше. Частные, групповые и семейные сафари по северным паркам, побережью и вершинам, с лицензированными гидами.",
                  },
                )}
              </p>
              <p>
                {t(
                  "A good day is not only the animal. It is the light the guide waits for, the camp meal, and a pace that fits children, hikers or a quiet couple.",
                  "Siku nzuri si mnyama tu. Ni mwanga kiongozi anasubiri, chakula cha kambi, na kasi inayofaa watoto, wapandaji au wanandoa.",
                  {
                    fr: "Une bonne journée n’est pas seulement l’animal. C’est la lumière, le repas au camp, et un rythme pour enfants, marcheurs ou un couple au calme.",
                    de: "Ein guter Tag ist nicht nur das Tier. Es ist das Licht, das Essen im Camp und ein Tempo für Kinder, Wanderer oder ein ruhiges Paar.",
                    zh: "美好的一天不只是动物。还有向导等待的光线、营地的一餐，以及适合孩子、徒步者或安静伴侣的节奏。",
                    es: "Un buen día no es solo el animal. Es la luz, la comida en el campamento y un ritmo para niños, caminantes o una pareja tranquila.",
                    ru: "Хороший день — не только зверь. Это свет, еда в лагере и темп для детей, тех, кто идёт в горы, или тихой пары.",
                  },
                )}
              </p>
              <p>
                {t(
                  "From Serengeti and Ngorongoro to Kilimanjaro, Meru, Lengai and Zanzibar, the plan stays clear: camps and lodges we know, Tanzanian food on the road, and no hidden extras.",
                  "Kutoka Serengeti na Ngorongoro hadi Kilimanjaro, Meru, Lengai na Zanzibar, mpango uko wazi: kambi tunazozijua, chakula cha Tanzania, bila gharama zilizofichwa.",
                  {
                    fr: "Du Serengeti au Kilimandjaro, Meru, Lengai et Zanzibar : camps connus, cuisine tanzanienne, sans frais cachés.",
                    de: "Von der Serengeti bis Kilimandscharo, Meru, Lengai und Sansibar: bekannte Camps, tansanische Küche, keine versteckten Kosten.",
                    zh: "从塞伦盖蒂、恩戈罗恩戈罗到乞力马扎罗、梅鲁、伦盖和桑给巴尔：熟悉的营地、坦桑尼亚餐食、没有隐藏费用。",
                    es: "Del Serengeti al Kilimanjaro, Meru, Lengai y Zanzíbar: campamentos conocidos, comida tanzana y sin extras ocultos.",
                    ru: "От Серенгети до Килиманджаро, Меру, Ленгая и Занзибара: знакомые лагеря, танзанийская еда и без скрытых доплат.",
                  },
                )}
              </p>
            </div>
          </div>
          <img
            src="/journeys/classic.png"
            alt=""
            className="aspect-[4/5] w-full rounded-2xl object-cover object-center lg:mt-16"
          />
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
              <img src={d.image} alt={pair(t, d.title)} className="aspect-[4/5] w-full object-cover object-center" />
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
              <img src={d.image} alt={pair(t, d.title)} className={`aspect-[4/5] w-full object-cover ${"pos" in d && d.pos === "top" ? "object-[center_28%]" : "object-center"}`} />
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
            <div className="relative aspect-[4/5]">
              <img src={tour.image} alt="" className="h-full w-full object-cover object-center" />
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
        title={t("Private, group, and with kids", "Faragha, kikundi, na watoto")}
      />
      <div className="mx-auto max-w-6xl space-y-10 px-4 py-16 sm:px-6">
        {experiences.map((item) => (
          <article key={item.key} className="grid overflow-hidden rounded-xl bg-paper shadow-sm md:grid-cols-2">
            <img src={item.image} alt="" className="aspect-[4/5] w-full object-cover object-center md:aspect-auto md:h-full" />
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
            <img
              src={item.image}
              alt=""
              className={`h-72 w-full object-cover md:h-full ${"pos" in item && item.pos === "bottom" ? "object-[center_70%]" : "pos" in item && item.pos === "top" ? "object-[center_28%]" : "object-center"}`}
            />
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
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {foods.map((f) => (
            <article key={f.title.en} className="overflow-hidden rounded-xl bg-paper shadow-sm">
              <img
                src={f.image}
                alt={pair(t, f.title)}
                className={`aspect-[4/5] w-full object-cover ${"pos" in f && f.pos === "bottom" ? "object-bottom" : "object-center"}`}
              />
              <div className="p-5">
                <h4 className="font-display text-lg font-semibold">{pair(t, f.title)}</h4>
                <p className="mt-2 text-sm text-muted">{pair(t, f.text)}</p>
              </div>
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
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <img
            src="/how/map.png"
            alt=""
            className="aspect-[4/5] w-full rounded-2xl object-cover object-[center_62%]"
          />
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-sunset uppercase">
              {t("On the map", "Kwenye ramani", { fr: "Sur la carte", de: "Auf der Karte", zh: "在地图上", es: "En el mapa", ru: "На карте" })}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              {t("We draw the route with you", "Tunachora njia pamoja nawe", {
                fr: "Nous traçons la route avec vous",
                de: "Wir zeichnen die Route mit dir",
                zh: "我们和你一起画路线",
                es: "Trazamos la ruta contigo",
                ru: "Мы чертим маршрут вместе с вами",
              })}
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
              <p>
                {t(
                  "Every journey starts on a map. We mark Kilimanjaro, the parks, the lodges and the nights between them, then we say what the drive actually takes.",
                  "Kila safari huanza kwenye ramani. Tunaweka alama Kilimanjaro, mbuga, lodges na usiku kati yake, kisha tunasema safari inachukua muda gani.",
                  {
                    fr: "Chaque voyage commence sur une carte. Kilimandjaro, parcs, lodges et nuits entre eux — puis le temps réel de route.",
                    de: "Jede Reise beginnt auf der Karte. Kilimandscharo, Parks, Lodges und die Nächte dazwischen — dann die echte Fahrzeit.",
                    zh: "每段旅程都从地图开始。标出乞力马扎罗、公园、小屋和其间的夜晚，再说清实际车程。",
                    es: "Cada viaje empieza en un mapa. Kilimanjaro, parques, lodges y las noches entre ellos, y luego el tiempo real de ruta.",
                    ru: "Каждая поездка начинается с карты. Килиманджаро, парки, лоджи и ночи между ними — потом реальное время в пути.",
                  },
                )}
              </p>
              <p>
                {t(
                  "You tell us who is coming and how you like to travel. We answer with a clear plan: vehicle, guide, camps and a price with no hidden extras.",
                  "Unatuambia nani anakuja na unapenda kusafiri vipi. Tunajibu kwa mpango wazi: gari, kiongozi, kambi na bei bila gharama zilizofichwa.",
                  {
                    fr: "Vous dites qui vient et comment vous aimez voyager. Nous répondons par un plan clair : véhicule, guide, camps, prix sans frais cachés.",
                    de: "Du sagst, wer kommt und wie du reisen willst. Wir antworten mit einem klaren Plan: Fahrzeug, Guide, Camps, Preis ohne versteckte Kosten.",
                    zh: "你告诉我们同行的人和旅行方式。我们给出清晰计划：车辆、向导、营地，以及没有隐藏费用的价格。",
                    es: "Nos dices quién viene y cómo te gusta viajar. Respondemos con un plan claro: vehículo, guía, campamentos y un precio sin extras ocultos.",
                    ru: "Вы говорите, кто едет и как вам удобно. Мы отвечаем ясным планом: машина, гид, лагеря и цена без скрытых доплат.",
                  },
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {howWeWork.map((step) => (
            <article key={step.n} className="rounded-xl bg-paper p-6 shadow-sm">
              <p className="font-display text-3xl text-sunset">{step.n}</p>
              <h2 className="mt-3 font-display text-xl font-semibold">{pair(t, step.title)}</h2>
              <p className="mt-2 text-sm text-muted">{pair(t, step.text)}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

export function OffersPage() {
  const t = useT();
  return (
    <>
      <PageHero
        kicker={t("Offers", "Ofa")}
        title={t("This season", "Msimu huu")}
        desc={t(
          "Three ways to travel this season. Each price is a starting point per person, sharing. We confirm the camps and the final figure once we have your dates.",
          "Njia tatu za kusafiri msimu huu. Kila bei ni mwanzo kwa mtu mmoja, mshikamano. Tunathibitisha kambi na bei ya mwisho tukipata tarehe zako.",
          {
            fr: "Trois façons de voyager cette saison. Chaque prix est un point de départ par personne, en partage. Nous confirmons camps et chiffre une fois les dates connues.",
            de: "Drei Arten, diese Saison zu reisen. Jeder Preis ist ein Start pro Person im Doppelzimmer. Camps und Endpreis bestätigen wir mit euren Daten.",
            zh: "本季三种走法。价格为每人分摊的起价。收到日期后我们确认营地与最终价格。",
            es: "Tres formas de viajar esta temporada. Cada precio es un punto de partida por persona, compartiendo. Confirmamos campamentos y cifra final con tus fechas.",
            ru: "Три способа поехать в этом сезоне. Цена — старт на человека при размещении вдвоём. Лагеря и итог подтверждаем, когда есть даты.",
          },
        )}
      />
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {offers.map((o) => (
            <article key={o.title.en} className="flex flex-col rounded-xl bg-paper p-6 shadow-sm">
              <span className="text-xs font-semibold tracking-widest text-sunset uppercase">{pair(t, o.tag)}</span>
              <h2 className="mt-3 font-display text-2xl font-semibold">{pair(t, o.title)}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{pair(t, o.text)}</p>
              <ul className="mt-4 space-y-2 text-sm text-ink">
                {o.points.map((point) => (
                  <li key={point.en} className="flex gap-2">
                    <span className="text-sunset" aria-hidden="true">✓</span>
                    <span>{pair(t, point)}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-display text-xl text-forest">{pair(t, o.price)}</p>
              <Link to="/contact" className="mt-4 inline-flex min-h-11 items-center self-start rounded-full bg-forest px-4 text-sm font-semibold text-paper">
                {t("Ask for dates", "Uliza tarehe")}
              </Link>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-muted">
          {t(
            "International flights, visas, travel insurance, tips and drinks are not inside these from-prices. Tell us the dates and we write the days, the camps and what is included.",
            "Ndege za kimataifa, visa, bima, tips na vinywaji havipo ndani ya bei hizi za kuanzia. Tuambie tarehe nasi tunaandika siku, kambi na kilichojumuishwa.",
            {
              fr: "Vols internationaux, visas, assurance, pourboires et boissons ne sont pas dans ces prix « dès ». Donnez les dates, nous écrivons les jours, les camps et ce qui est inclus.",
              de: "Internationale Flüge, Visa, Versicherung, Trinkgeld und Getränke sind nicht in diesen Ab-Preisen. Nennt die Daten, wir schreiben Tage, Camps und das Inkludierte.",
              zh: "国际机票、签证、保险、小费和酒水不在这些起价里。告诉我们日期，我们写出天数、营地和包含项目。",
              es: "Vuelos internacionales, visados, seguro, propinas y bebidas no van en estos precios «desde». Danos las fechas y escribimos los días, los campamentos y lo incluido.",
              ru: "Международные перелёты, визы, страховка, чаевые и напитки не входят в цены «от». Назовите даты — распишем дни, лагеря и что включено.",
            },
          )}
        </p>
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
              <div className="relative min-h-72">
                <img src={peak.image} alt="" className="aspect-[3/4] h-full w-full object-cover object-[center_30%] md:aspect-auto md:min-h-[32rem]" />
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
  const columns = [
    ["/food/bush-breakfast.jpg", "/experiences/private.png", "/parks/tarangire.png"],
    ["/gallery/cultural.png", "/journeys/classic.png", "/experiences/group.png", "/food/nyama-choma.jpg"],
    ["/parks/ngorongoro.png", "/camps/four-seasons.jpg", "/destinations/tanzania.png", "/parks/overview.png"],
  ];
  const heights = [
    ["h-64 sm:h-72", "h-40", "h-44"],
    ["aspect-square", "h-40", "h-72 sm:h-80", "h-36"],
    ["h-44", "h-40", "h-36", "h-40"],
  ];
  const strip = ["/gallery/maasai.png", "/journeys/kilimanjaro.png", "/journeys/zanzibar.png", "/intro/camp.jpg"];

  function open(src: string) {
    return (
      <button type="button" onClick={() => setLightbox(src)} className="block h-full w-full overflow-hidden rounded-2xl">
        <img src={src} alt="" className="h-full w-full object-cover" />
      </button>
    );
  }

  return (
    <>
      <section className="relative min-h-[420px] overflow-hidden bg-ink sm:min-h-[480px]">
        <img src="/gallery/hero.jpg" alt="" className="absolute inset-0 h-full w-full object-cover object-[center_40%]" />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative flex min-h-[420px] flex-col items-center justify-center px-5 pt-28 pb-20 text-center text-paper sm:min-h-[480px] sm:px-6 sm:pt-32">
          <span className="rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-semibold tracking-wide text-paper backdrop-blur-sm">
            {t("Our Gallery", "Matunzio yetu", { fr: "Notre galerie", de: "Unsere Galerie", zh: "我们的图库", es: "Nuestra galería", ru: "Наша галерея" })}
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-tight font-semibold sm:text-5xl">
            {t("A glimpse into the", "Mtazamo wa uzoefu wa", { fr: "Un aperçu de l’expérience", de: "Ein Blick ins", zh: "走进", es: "Una mirada a la experiencia", ru: "Взгляд на опыт" })}{" "}
            <span className="text-gold">Eco Vibe</span>
            {t({ en: " experience", sw: " ", fr: " ", de: " Erlebnis", zh: " 体验", es: " ", ru: " " })}
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-paper/90 sm:text-base">
            {t(
              "From the plains of Tanzania to camp meals, cultural days and quiet waterholes — every picture is a journey shared.",
              "Kutoka nyanda za Tanzania hadi milo ya kambi, siku za utamaduni na visima vya maji — kila picha ni safari iliyoshirikiwa.",
              {
                fr: "Des plaines de Tanzanie aux repas de camp, aux journées culturelles et aux points d’eau — chaque image est un voyage partagé.",
                de: "Von den Ebenen Tansanias zu Camp-Mahlzeiten, Kulturtagen und stillen Wasserstellen — jedes Bild ist eine geteilte Reise.",
                zh: "从坦桑尼亚草原到营地餐食、文化日与安静的水坑，每张照片都是一段被分享的旅程。",
                es: "De las llanuras de Tanzania a las comidas del campamento, los días culturales y los abrevaderos — cada foto es un viaje compartido.",
                ru: "От равнин Танзании до еды в лагере, культурных дней и тихих водопоев — каждый кадр это общее путешествие.",
              },
            )}
          </p>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 text-cream">
          <svg viewBox="0 0 1440 90" className="block h-14 w-full sm:h-20" preserveAspectRatio="none" aria-hidden="true">
            <path fill="currentColor" d="M0,58 C420,10 980,96 1440,42 L1440,90 L0,90 Z" />
          </svg>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pt-2 pb-16 sm:px-6">
        <div className="grid items-center gap-3 lg:grid-cols-[1.05fr_1fr_1fr_0.9fr] lg:gap-4">
          {columns.map((col, index) => (
            <div key={col[0]} className="grid grid-cols-2 gap-3 lg:grid-cols-1">
              {col.map((src, photo) => (
                <div key={src} className={heights[index][photo]}>
                  {open(src)}
                </div>
              ))}
            </div>
          ))}
          <div className="px-1 py-6 lg:px-3">
            <h2 className="font-display text-3xl leading-tight font-semibold text-ink sm:text-4xl">
              {t("Real moments, real journeys", "Matukio halisi, safari halisi", {
                fr: "Vrais instants, vrais voyages",
                de: "Echte Momente, echte Reisen",
                zh: "真实瞬间，真实旅程",
                es: "Momentos reales, viajes reales",
                ru: "Настоящие моменты, настоящие пути",
              })}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {t(
                "Wildlife, shared meals, the crater, the coast and the quiet minutes between drives. These are the days we plan, and the days guests take home.",
                "Wanyamapori, milo pamoja, crater, pwani na dakika tulivu kati ya drives. Hizi ndizo siku tunazopanga, na siku wageni wanazobeba nyumbani.",
                {
                  fr: "Faune, repas partagés, cratère, côte et minutes calmes entre les drives. Ce sont les jours que nous préparons, et ceux que les voyageurs ramènent.",
                  de: "Wildtiere, gemeinsame Mahlzeiten, Krater, Küste und die stillen Minuten zwischen den Fahrten. Das sind die Tage, die wir planen.",
                  zh: "野生动物、共享的餐食、火山口、海岸，以及车程之间的安静时刻。这些是我们安排的日子，也是客人带回家的日子。",
                  es: "Fauna, comidas compartidas, cráter, costa y los minutos quietos entre los recorridos. Son los días que planeamos y los que los viajeros se llevan.",
                  ru: "Звери, общие обеды, кратер, побережье и тихие минуты между выездами. Это дни, которые мы планируем и которые гости увозят с собой.",
                },
              )}
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-sm font-semibold text-cream"
            >
              {t("Plan your journey", "Panga safari yako", {
                fr: "Planifiez le voyage",
                de: "Reise planen",
                zh: "规划行程",
                es: "Planifica el viaje",
                ru: "Спланировать поездку",
              })}
            </Link>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {strip.map((src) => (
            <div key={src} className="h-52 sm:h-64">
              {open(src)}
            </div>
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
      <PageHero
        kicker={t("Blog", "Blogu")}
        title={t("From the field", "Kutoka uwanjani")}
        desc={t(
          "Climbing, safari, Tanzania, birdwatching and the islands — notes with the places we actually run.",
          "Kupanda, safari, Tanzania, ndege na visiwa — maelezo ya maeneo tunayoendesha.",
        )}
      />
      <div className="mx-auto max-w-3xl space-y-8 px-4 py-14 sm:px-6">
        {posts.map((p) => (
          <article key={p.title.en} className="overflow-hidden rounded-xl bg-paper shadow-sm">
            <img
              src={p.image}
              alt=""
              className={"fit" in p && p.fit ? p.fit : "h-56 w-full object-cover sm:h-72"}
            />
            <div className="p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-sunset uppercase">{pair(t, p.topic)}</p>
              <h2 className="mt-2 font-display text-2xl font-semibold">{pair(t, p.title)}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{pair(t, p.body)}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
