import { Link } from "@tanstack/react-router";
import { countries, experiences, tanzaniaParks, tours } from "@/data/content";
import { useT } from "@/lib/lang";
import { SectionHead, pair } from "./section-head";
import { HeroStage } from "./hero-stage";
import { Reviews } from "./reviews";
import { SiteShell } from "./site-shell";

export function HomePage() {
  const t = useT();

  return (
    <SiteShell>
      <HeroStage />

      <section className="grid md:grid-cols-2">
        <div className="relative min-h-[26rem] sm:min-h-[32rem] md:min-h-[40rem]">
          <img
            src="/intro/camp.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/20" />
          <p className="absolute inset-x-0 top-8 text-center text-xs font-semibold tracking-[0.42em] text-paper uppercase sm:top-12 sm:text-sm">
            {t("Introducing", "Tunakuleta", {
              fr: "Présentation",
              de: "Vorstellung",
              zh: "介绍",
              es: "Presentamos",
              ru: "Представляем",
            })}
          </p>
          <div className="absolute top-1/2 left-1/2 flex size-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper px-4 text-center shadow-lg sm:size-48">
            <p className="font-display text-lg leading-tight font-semibold text-ink sm:text-2xl">
              {t("The Eco Vibe way.", "Njia ya Eco Vibe.", {
                fr: "La voie Eco Vibe.",
                de: "Der Eco-Vibe-Weg.",
                zh: "Eco Vibe 方式。",
                es: "El modo Eco Vibe.",
                ru: "Путь Eco Vibe.",
              })}
            </p>
          </div>
          <p className="absolute inset-x-0 bottom-7 text-center text-[11px] font-semibold tracking-[0.32em] text-paper uppercase sm:bottom-10 sm:text-sm">
            {t("Safari camp", "Kambi ya safari", {
              fr: "Camp safari",
              de: "Safaricamp",
              zh: "游猎营地",
              es: "Campamento safari",
              ru: "Сафари-лагерь",
            })}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#c8922a] px-8 py-14 text-center text-paper sm:px-14 md:py-20">
          <h2 className="max-w-lg font-display text-3xl leading-tight font-semibold sm:text-5xl">
            {t(
              "Feel natural. A local way to travel East Africa.",
              "Hisia ya asili. Njia ya ndani ya kusafiri Afrika Mashariki.",
              {
                fr: "Ressentez la nature. Une façon locale de voyager en Afrique de l’Est.",
                de: "Natürlich fühlen. Eine lokale Art, Ostafrika zu bereisen.",
                zh: "感受自然。一种本地方式游览东非。",
                es: "Siéntete natural. Una forma local de viajar por África Oriental.",
                ru: "Чувствуй природу. Местный способ путешествовать по Восточной Африке.",
              },
            )}
          </h2>
          <p className="mt-5 font-display text-2xl italic sm:text-3xl">
            {t("Ready. Set. Safari.", "Tayari. Anza. Safari.", {
              fr: "Prêts. Partez. Safari.",
              de: "Bereit. Los. Safari.",
              zh: "准备。出发。Safari。",
              es: "Listos. Ya. Safari.",
              ru: "На старт. Внимание. Сафари.",
            })}
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/95 sm:text-base">
            {t(
              "Private safaris, group safaris and safari with kids. Planned from our house in Arusha.",
              "Safari za faragha, za kikundi na za watoto. Zinapangwa kutoka nyumba yetu Arusha.",
              {
                fr: "Safaris privés, en groupe et avec enfants. Préparés depuis notre maison à Arusha.",
                de: "Private Safaris, Gruppensafaris und Safari mit Kindern. Geplant von unserem Haus in Arusha.",
                zh: "私人、团体与亲子safari。由我们在阿鲁沙的团队安排。",
                es: "Safaris privados, en grupo y con niños. Planificados desde nuestra casa en Arusha.",
                ru: "Частные, групповые сафари и сафари с детьми. Из нашего дома в Аруше.",
              },
            )}
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex min-h-11 items-center rounded-full border border-paper px-6 text-xs font-semibold tracking-[0.18em] text-paper uppercase"
          >
            {t("Join the journey", "Jiunge na safari", {
              fr: "Rejoindre le voyage",
              de: "Reise beginnen",
              zh: "加入旅程",
              es: "Únete al viaje",
              ru: "В путь",
            })}
          </Link>
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
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={d.image} alt={pair(t, d.title)} className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
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
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${"pos" in item && item.pos === "bottom" ? "object-[center_70%]" : "pos" in item && item.pos === "top" ? "object-[center_28%]" : "object-center"}`}
                  />
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
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={item.image} alt="" className="h-full w-full object-cover object-center" />
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
                <div className="relative aspect-[4/5]">
                  <img src={tour.image} alt="" className="h-full w-full object-cover object-center" />
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

      <section className="relative overflow-hidden px-4 py-24 text-center text-paper sm:px-6 sm:py-28">
        <img src="/parks/ngorongoro.png" alt="" className="absolute inset-0 h-full w-full object-cover object-[center_35%]" />
        <div className="absolute inset-0 bg-forest-deep/65" />
        <div className="relative">
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
        </div>
      </section>
    </SiteShell>
  );
}
