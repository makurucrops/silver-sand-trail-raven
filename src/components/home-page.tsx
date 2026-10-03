import { Link } from "@tanstack/react-router";
import { countries, experiences, tanzaniaParks, tours } from "@/data/content";
import { useT } from "@/lib/lang";
import { Diamond, SectionHead, pair } from "./section-head";
import { HeroStage } from "./hero-stage";
import { Reviews } from "./reviews";
import { SiteShell } from "./site-shell";

export function HomePage() {
  const t = useT();

  return (
    <SiteShell>
      <HeroStage />

      <section className="relative z-10 -mt-10 rounded-t-[2.5rem] bg-cream px-4 pt-14 pb-16 shadow-[0_-18px_40px_rgba(60,36,18,0.18)] sm:-mt-14 sm:px-6 sm:pt-16">
        <div className="mb-10 flex justify-center">
          <Diamond />
        </div>
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div className="flex items-center justify-center rounded-xl border border-sand bg-paper px-6 py-8 shadow-sm">
            <img
              src="/logo.jpg"
              alt="Eco Vibe Safari logo"
              className="mx-auto h-auto w-full max-w-[17rem] object-contain"
            />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-sunset uppercase">
              {t("Who we are", "Sisi ni nani", {
                fr: "Qui nous sommes",
                de: "Wer wir sind",
                zh: "我们是谁",
                es: "Quiénes somos",
                ru: "Кто мы",
              })}
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
              {t("A local Arusha safari house", "Nyumba ya safari ya Arusha", {
                fr: "Une maison safari à Arusha",
                de: "Ein lokales Safari-Haus in Arusha",
                zh: "阿鲁沙本地safari之家",
                es: "Una casa safari local en Arusha",
                ru: "Местный сафари-дом в Аруше",
              })}
            </h2>
            <div className="mt-3">
              <Diamond />
            </div>
            <p className="mt-5 leading-relaxed text-muted">
              {t(
                "Eco Vibe Safari is a local company in Arusha. We run responsible game drives across East and southern Africa, guided treks on Kilimanjaro and Mount Meru, and quiet days with cultural food, camps and the people who live beside the parks.",
                "Eco Vibe Safari ni kampuni ya ndani Arusha. Tunaendesha game drives zenye uwajibikaji Afrika Mashariki na Kusini, trek za Kilimanjaro na Mount Meru, na siku tulivu za chakula cha kitamaduni.",
                {
                  fr: "Eco Vibe Safari est une maison locale à Arusha. Safaris responsables, treks du Kilimandjaro et du Meru, cuisine culturelle et camps discrets.",
                  de: "Eco Vibe Safari ist ein lokales Haus in Arusha. Verantwortliche Gamedrives, Treks auf Kilimandscharo und Meru, kulturelle Küche und stille Camps.",
                  zh: "Eco Vibe Safari是阿鲁沙本地公司。我们在东非与南部非洲做负责任的巡游、乞力马扎罗与梅鲁徒步，以及文化美食与营地。",
                  es: "Eco Vibe Safari es una casa local en Arusha. Safaris responsables, treks al Kilimanjaro y Meru, comida cultural y campamentos serenos.",
                  ru: "Eco Vibe Safari — местная компания в Аруше. Ответственные сафари, треки на Килиманджаро и Меру, культурная кухня и тихие лагеря.",
                },
              )}
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-forest"
            >
              {t("Read more", "Soma zaidi", {
                fr: "Lire plus",
                de: "Mehr lesen",
                zh: "了解更多",
                es: "Leer más",
                ru: "Читать дальше",
              })}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-paper px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            kicker={t("Explore", "Gundua", { fr: "Explorer", de: "Entdecken", zh: "探索", es: "Explorar", ru: "Открыть" })}
            title={t("Destinations", "Maeneo", {
              fr: "Destinations",
              de: "Reiseziele",
              zh: "目的地",
              es: "Destinos",
              ru: "Направления",
            })}
            desc={t(
              "Tanzania, Zanzibar, Kenya, Botswana, Rwanda and Uganda.",
              "Tanzania, Zanzibar, Kenya, Botswana, Rwanda na Uganda.",
              {
                fr: "Tanzanie, Zanzibar, Kenya, Botswana, Rwanda et Ouganda.",
                de: "Tansania, Sansibar, Kenia, Botswana, Ruanda und Uganda.",
                zh: "坦桑尼亚、桑给巴尔、肯尼亚、博茨瓦纳、卢旺达与乌干达。",
                es: "Tanzania, Zanzíbar, Kenia, Botsuana, Ruanda y Uganda.",
                ru: "Танзания, Занзибар, Кения, Ботсвана, Руанда и Уганда.",
              },
            )}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((d) => (
              <Link
                key={d.key}
                to="/destinations"
                className="group overflow-hidden rounded-xl bg-cream shadow-sm transition-transform hover:-translate-y-1"
              >
                <div className="h-44 overflow-hidden">
                  <img src={d.image} alt={pair(t, d.title)} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-xl font-semibold">{pair(t, d.title)}</h3>
                  <p className="mt-1 text-sm text-muted">{pair(t, d.blurb)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            kicker={t("Northern circuit", "Mzunguko wa kaskazini", {
              fr: "Circuit nord",
              de: "Nordkreis",
              zh: "北部线路",
              es: "Circuito norte",
              ru: "Северный круг",
            })}
            title={t("Explore Tanzania", "Gundua Tanzania", {
              fr: "Explorer la Tanzanie",
              de: "Tansania entdecken",
              zh: "探索坦桑尼亚",
              es: "Explorar Tanzania",
              ru: "Открыть Танзанию",
            })}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tanzaniaParks.map((item) => (
              <Link
                key={item.key}
                to="/explore-tanzania"
                className="group overflow-hidden rounded-xl bg-paper shadow-sm transition-transform hover:-translate-y-1"
              >
                <div className="h-36 overflow-hidden">
                  <img src={item.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg font-semibold">{pair(t, item.title)}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            kicker={t("Experiences", "Uzoefu", {
              fr: "Expériences",
              de: "Erlebnisse",
              zh: "体验",
              es: "Experiencias",
              ru: "Впечатления",
            })}
            title={t("Three ways to travel", "Njia tatu za kusafiri", {
              fr: "Trois façons de voyager",
              de: "Drei Arten zu reisen",
              zh: "三种旅行方式",
              es: "Tres formas de viajar",
              ru: "Три способа путешествовать",
            })}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {experiences.map((item) => (
              <Link key={item.key} to="/experiences" className="overflow-hidden rounded-xl bg-cream shadow-sm">
                <div className="h-44 overflow-hidden">
                  <img src={item.image} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold">{pair(t, item.title)}</h3>
                  <p className="mt-2 text-sm text-muted">{pair(t, item.text)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            kicker={t("Our trips", "Safari zetu", {
              fr: "Nos voyages",
              de: "Unsere Reisen",
              zh: "行程",
              es: "Viajes",
              ru: "Поездки",
            })}
            title={t("Featured journeys", "Safari teule", {
              fr: "Voyages en avant",
              de: "Ausgewählte Reisen",
              zh: "精选行程",
              es: "Viajes destacados",
              ru: "Избранные маршруты",
            })}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {tours.slice(0, 3).map((tour) => (
              <article key={tour.title.en} className="overflow-hidden rounded-xl bg-cream shadow-sm">
                <div className="relative h-44">
                  <img src={tour.image} alt="" className="h-full w-full object-cover" />
                  <span className="absolute top-3 left-3 rounded-full bg-sunset px-3 py-1 text-xs font-semibold text-paper">
                    {pair(t, tour.badge)}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold">{pair(t, tour.title)}</h3>
                  <p className="mt-2 text-sm text-muted">{pair(t, tour.blurb)}</p>
                  <p className="mt-3 font-display text-lg text-forest">{tour.price}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/trips"
              className="inline-flex min-h-11 items-center rounded-full bg-forest px-6 text-sm font-semibold text-paper"
            >
              {t("See all trips", "Angalia safari zote", {
                fr: "Voir tous les voyages",
                de: "Alle Reisen",
                zh: "查看全部行程",
                es: "Ver todos los viajes",
                ru: "Все поездки",
              })}
            </Link>
          </div>
        </div>
      </section>

      <Reviews />

      <section className="bg-forest-deep px-4 py-16 text-center text-paper sm:px-6">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          {t("Ready to travel with us?", "Uko tayari kusafiri nasi?", {
            fr: "Prêt à voyager avec nous ?",
            de: "Bereit, mit uns zu reisen?",
            zh: "准备好与我们同行了吗？",
            es: "¿Listo para viajar con nosotros?",
            ru: "Готовы путешествовать с нами?",
          })}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sand">
          {t(
            "Tell us the dates. We sketch the parks, the camps and the meals.",
            "Tuambie tarehe. Tunachora mbuga, kambi na milo.",
            {
              fr: "Donnez-nous les dates. Nous dessinons parcs, camps et repas.",
              de: "Nenn uns die Daten. Wir skizzieren Parks, Camps und Mahlzeiten.",
              zh: "告诉我们日期。我们勾画公园、营地与餐食。",
              es: "Dinos las fechas. Trazamos parques, campamentos y comidas.",
              ru: "Назовите даты. Мы набросаем парки, лагеря и еду.",
            },
          )}
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex min-h-12 items-center rounded-full bg-cream px-7 text-sm font-semibold text-ink"
        >
          {t("Plan your journey", "Panga safari yako", {
            fr: "Planifiez le voyage",
            de: "Plane die Reise",
            zh: "规划行程",
            es: "Planifica el viaje",
            ru: "Спланировать поездку",
          })}
        </Link>
      </section>
    </SiteShell>
  );
}
