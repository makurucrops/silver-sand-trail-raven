import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { nav } from "@/data/content";
import { useT } from "@/lib/lang";

export function SiteFooter() {
  const t = useT();
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <footer>
      <div className="bg-cream">
        <div className="relative flex min-h-56 items-center justify-center overflow-hidden px-4 py-16 sm:min-h-72">
          <img src="/footer/read-more.jpg" alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-forest-deep/40" />
          <Link
            to="/trips"
            className="relative inline-flex min-h-11 items-center bg-sunset px-8 text-xs font-semibold tracking-[0.22em] text-paper uppercase"
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

      <div className="relative overflow-hidden bg-forest-deep text-paper">
        <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-70" aria-hidden>
          <defs>
            <pattern id="footer-waves" width="140" height="26" patternUnits="userSpaceOnUse">
              <path
                d="M0 13 Q17.5 2 35 13 T70 13 T105 13 T140 13"
                fill="none"
                stroke="#2c4a33"
                strokeWidth="7"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-waves)" />
        </svg>

        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src="/logo-mark.png"
              alt="Eco Vibe Safari"
              className="size-20 rounded-full bg-paper object-cover ring-1 ring-gold"
            />
            <p className="mt-4 font-display text-xl font-semibold tracking-wide">ECO VIBE SAFARI</p>
            <p className="mt-1 font-display text-sm italic text-sand">
              {t("Feel natural · live the adventure", "Hisia ya asili · ishi adventure")}
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">
              {t("Newsletter", "Barua pepe", {
                fr: "Infolettre",
                de: "Newsletter",
                zh: "通讯",
                es: "Boletín",
                ru: "Рассылка",
              })}
            </h2>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-sand">
              {t(
                "Seasons, new journeys and park notes, straight to your inbox.",
                "Misimu, safari mpya na habari za mbuga, moja kwa moja kwako.",
                {
                  fr: "Saisons, nouveaux voyages et notes des parcs, dans votre boîte.",
                  de: "Saisons, neue Reisen und Parknotizen direkt ins Postfach.",
                  zh: "季节、新行程与公园消息，直达你的邮箱。",
                  es: "Temporadas, nuevos viajes y notas de los parques, en tu correo.",
                  ru: "Сезоны, новые маршруты и заметки о парках — прямо на почту.",
                },
              )}
            </p>
            {joined ? (
              <p className="mt-5 text-sm font-semibold text-gold">
                {t("Thank you. We will write to you.", "Asante. Tutakuandikia.", {
                  fr: "Merci. Nous vous écrirons.",
                  de: "Danke. Wir schreiben Ihnen.",
                  zh: "谢谢。我们会写信给你。",
                  es: "Gracias. Te escribiremos.",
                  ru: "Спасибо. Мы напишем вам.",
                })}
              </p>
            ) : (
              <form
                className="mt-5 flex max-w-xs flex-col gap-3"
                onSubmit={(event) => {
                  event.preventDefault();
                  if (!email.includes("@")) return;
                  setJoined(true);
                }}
              >
                <label className="sr-only" htmlFor="footer-email">
                  Email
                </label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={t("Your email", "Barua pepe yako", {
                    fr: "Votre e-mail",
                    de: "Ihre E-Mail",
                    zh: "你的邮箱",
                    es: "Tu correo",
                    ru: "Ваша почта",
                  })}
                  className="min-h-11 border border-sand/40 bg-forest-deep/80 px-3 text-sm text-paper outline-none placeholder:text-sand/70"
                />
                <button
                  type="submit"
                  className="inline-flex min-h-11 w-fit items-center bg-sunset px-6 text-xs font-semibold tracking-[0.18em] text-paper uppercase"
                >
                  {t("Subscribe", "Jiandikishe", {
                    fr: "S’inscrire",
                    de: "Abonnieren",
                    zh: "订阅",
                    es: "Suscribirse",
                    ru: "Подписаться",
                  })}
                </button>
              </form>
            )}
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase">
              {t("Get in touch", "Wasiliana", {
                fr: "Nous écrire",
                de: "Kontakt",
                zh: "联系我们",
                es: "Contacto",
                ru: "Связаться",
              })}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-paper">
              <li>Arusha, Tanzania</li>
              <li>
                <a href="tel:+255754000000" className="hover:text-gold">
                  +255 754 000 000
                </a>
              </li>
              <li>
                <a href="mailto:hello@ecovibesafari.com" className="hover:text-gold">
                  hello@ecovibesafari.com
                </a>
              </li>
              <li>
                <Link to="/contact" className="underline decoration-sand/50 underline-offset-4 hover:text-gold">
                  {t("Contact", "Wasiliana")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase">
              {t("Navigation", "Urambazaji", {
                fr: "Navigation",
                de: "Navigation",
                zh: "导航",
                es: "Navegación",
                ru: "Навигация",
              })}
            </h3>
            <ul className="mt-4 columns-2 gap-x-6 text-sm">
              {nav.map((item) => (
                <li key={item.href} className="mb-2 break-inside-avoid">
                  <Link to={item.href} className="hover:text-gold">
                    {t(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative flex flex-col items-start justify-between gap-4 border-t border-sand/20 px-5 py-4 sm:flex-row sm:items-center sm:px-6">
          <p className="max-w-3xl text-[11px] leading-relaxed text-sand sm:text-xs">
            © {new Date().getFullYear()} Eco Vibe Safari. {t("All rights reserved.", "Haki zote zimehifadhiwa.")}
          </p>
          <div className="flex gap-2">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="inline-flex size-8 items-center justify-center rounded-full bg-paper text-forest-deep"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" className="size-3.5 fill-current">
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" className="size-3.5 fill-current">
        <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.2A4.8 4.8 0 1016.8 12 4.8 4.8 0 0012 7.2zm0 7.9A3.1 3.1 0 1115.1 12 3.1 3.1 0 0112 15.1zM17.6 6.1a1.1 1.1 0 11-1.1 1.1 1.1 1.1 0 011.1-1.1z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" className="size-3.5 fill-current">
        <path d="M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C19.2 5.4 12 5.4 12 5.4s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6zM9.8 15.6V8.8l6.4 3.4-6.4 3.4z" />
      </svg>
    ),
  },
];
