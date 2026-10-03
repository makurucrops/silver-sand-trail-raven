import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { nav } from "@/data/content";
import { useT } from "@/lib/lang";

export function SiteFooter() {
  const t = useT();
  return (
    <footer className="bg-forest-deep text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src="/logo-mark.jpg"
              alt="Eco Vibe Safari"
              className="size-14 rounded-full object-cover ring-2 ring-sand"
            />
            <div>
              <p className="font-display text-lg font-semibold tracking-wide">ECO VIBE SAFARI</p>
              <p className="font-display italic text-sand">{t("Feel natural · live the adventure", "Hisia ya asili · ishi adventure")}</p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-sand">
            {t(
              "Local Arusha guides for Serengeti, Ngorongoro, Tarangire, Kilimanjaro, Mount Meru and the quiet corners in between.",
              "Viongozi wa Arusha kwa Serengeti, Ngorongoro, Tarangire, Kilimanjaro, Mount Meru na pembe tulivu katikati.",
            )}
          </p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold tracking-widest uppercase">{t("Explore", "Gundua")}</h3>
          <ul className="space-y-2 text-sm text-sand">
            {nav.slice(0, 8).map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="hover:text-paper">
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold tracking-widest uppercase">{t("Contact", "Wasiliana")}</h3>
          <ul className="space-y-3 text-sm text-sand">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              Arusha, Tanzania
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0" />
              +255 754 000 000
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0" />
              hello@ecovibesafari.com
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="inline-flex size-11 items-center justify-center rounded-full bg-forest text-paper transition-colors hover:bg-sunset"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-forest px-4 py-4 text-center text-xs text-sand">
        © {new Date().getFullYear()} Eco Vibe Safari. {t("All rights reserved.", "Haki zote zimehifadhiwa.")}
      </div>
    </footer>
  );
}

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 fill-current">
        <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.2A4.8 4.8 0 1016.8 12 4.8 4.8 0 0012 7.2zm0 7.9A3.1 3.1 0 1115.1 12 3.1 3.1 0 0112 15.1zM17.6 6.1a1.1 1.1 0 11-1.1 1.1 1.1 1.1 0 011.1-1.1z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 fill-current">
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 fill-current">
        <path d="M17.5 3h3.1l-6.8 7.8L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L2 3h6.3l4.4 5.8L17.5 3zm-1.1 16.2h1.7L7.7 4.7H5.9l10.5 14.5z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 fill-current">
        <path d="M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C19.2 5.4 12 5.4 12 5.4s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6zM9.8 15.6V8.8l6.4 3.4-6.4 3.4z" />
      </svg>
    ),
  },
];
