import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as BadgeCheck, _ as ChevronLeft, g as ChevronRight, s as Star } from "../_libs/lucide-react.mjs";
import { A as useT, E as tanzaniaParks, O as testimonials, _ as pair, i as SiteShell, k as tours, l as experiences, o as cn, r as SectionHead, s as countries, t as Diamond } from "./site-shell-C-IXlnDv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C-pL4kzK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var slides = [
	{
		kind: "video",
		src: "/hero/maasai.mp4",
		poster: "/hero/poster-maasai.jpg"
	},
	{
		kind: "video",
		src: "/hero/leopard.mp4",
		poster: "/hero/poster-leopard.jpg"
	},
	{
		kind: "image",
		src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1920&q=80"
	}
];
function HeroStage() {
	const t = useT();
	const [index, setIndex] = (0, import_react.useState)(0);
	const videoRefs = (0, import_react.useRef)([]);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const id = window.setInterval(() => {
			setIndex((i) => (i + 1) % slides.length);
		}, 9e3);
		return () => window.clearInterval(id);
	}, []);
	(0, import_react.useEffect)(() => {
		videoRefs.current.forEach((video, i) => {
			if (!video) return;
			if (i === index) video.play().catch(() => {});
			else {
				video.pause();
				video.currentTime = 0;
			}
		});
	}, [index]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative min-h-screen overflow-hidden",
		children: [
			slides.map((slide, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("absolute inset-0 transition-opacity duration-1000", i === index ? "opacity-100" : "opacity-0"),
				"aria-hidden": i !== index,
				children: slide.kind === "video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					ref: (el) => {
						videoRefs.current[i] = el;
					},
					className: "h-full w-full object-cover",
					src: slide.src,
					poster: slide.poster,
					muted: true,
					playsInline: true,
					loop: true,
					preload: i === 0 ? "auto" : "metadata"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: slide.src,
					alt: "",
					className: "h-full w-full object-cover"
				})
			}, slide.src)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/45" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pb-20 pt-28 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.28em] text-gold uppercase",
						children: "Arusha · Tanzania"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-3xl font-display text-[1.85rem] font-semibold leading-snug text-paper sm:text-6xl",
						children: t("Welcome to Eco Vibe Safari", "Karibu Eco Vibe Safari", {
							fr: "Bienvenue chez Eco Vibe Safari",
							de: "Willkommen bei Eco Vibe Safari",
							zh: "欢迎来到 Eco Vibe Safari",
							es: "Bienvenido a Eco Vibe Safari",
							ru: "Добро пожаловать в Eco Vibe Safari"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-xl italic text-gold sm:text-5xl",
						children: t("Feel natural. Live the adventure.", "Hisia ya asili. Ishi adventure.", {
							fr: "Feel natural. Live the adventure.",
							de: "Feel natural. Live the adventure.",
							zh: "Feel natural. Live the adventure.",
							es: "Feel natural. Live the adventure.",
							ru: "Feel natural. Live the adventure."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-base leading-relaxed text-paper/90 sm:text-lg",
						children: t("Wild parks, island tides, and journeys with people who know the land — that is the trip that counts.", "Mbuga pori, mawimbi ya visiwa, na safari na watu wanaojua nchi — ndiyo safari inayojali.", {
							fr: "Parcs sauvages, marées des îles, et des voyages avec des gens qui connaissent le pays.",
							de: "Wilde Parks, Inselgezeiten und Reisen mit Menschen, die das Land kennen.",
							zh: "荒野公园、岛屿潮汐，以及与真正了解这片土地的人同行。",
							es: "Parques salvajes, mareas de isla y viajes con gente que conoce la tierra.",
							ru: "Дикие парки, островные приливы и путь с людьми, которые знают эту землю."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/contact",
							className: "inline-flex min-h-12 items-center rounded-full border-2 border-paper px-7 text-sm font-semibold tracking-wide text-paper uppercase transition-colors hover:bg-paper hover:text-ink",
							children: t("Customize your journey", "Panga safari yako")
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-3 sm:flex",
				children: socials.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: s.href,
					"aria-label": s.label,
					className: "inline-flex size-11 items-center justify-center rounded-full border border-paper/70 bg-paper/10 text-paper backdrop-blur-sm transition-colors hover:bg-paper hover:text-ink",
					children: s.icon
				}, s.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2",
				children: slides.map((slide, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": t(`Show scene ${i + 1}`, `Onyesha eneo ${i + 1}`),
					onClick: () => setIndex(i),
					className: cn("h-2 rounded-full transition-all", i === index ? "w-7 bg-paper" : "w-2 bg-paper/50")
				}, slide.src))
			})
		]
	});
}
var socials = [
	{
		label: "Instagram",
		href: "https://instagram.com",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "size-4 fill-current",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.2A4.8 4.8 0 1016.8 12 4.8 4.8 0 0012 7.2zm0 7.9A3.1 3.1 0 1115.1 12 3.1 3.1 0 0112 15.1zM17.6 6.1a1.1 1.1 0 11-1.1 1.1 1.1 1.1 0 011.1-1.1z" })
		})
	},
	{
		label: "Facebook",
		href: "https://facebook.com",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "size-4 fill-current",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z" })
		})
	},
	{
		label: "TikTok",
		href: "https://tiktok.com",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "size-4 fill-current",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14.5 3c.4 2.4 1.8 4.2 4.2 4.6v2.4c-1.5 0-2.9-.5-4.1-1.4v6.6a6.2 6.2 0 11-6.2-6.2c.3 0 .7 0 1 .1v2.6a3.6 3.6 0 00-1-.1 3.6 3.6 0 103.6 3.6V3h2.5z" })
		})
	},
	{
		label: "YouTube",
		href: "https://youtube.com",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "size-4 fill-current",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C19.2 5.4 12 5.4 12 5.4s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6zM9.8 15.6V8.8l6.4 3.4-6.4 3.4z" })
		})
	}
];
var GOOGLE_REVIEW_URL = "https://www.google.com/maps/search/?api=1&query=Eco+Vibe+Safari+Arusha";
var AVATAR_COLORS = [
	"#7c3aed",
	"#0f766e",
	"#b45309",
	"#be185d",
	"#1d4ed8",
	"#047857"
];
function Stars({ value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex gap-0.5",
		"aria-label": `${value} / 5`,
		children: [
			1,
			2,
			3,
			4,
			5
		].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("size-3.5", n <= value ? "fill-[#fbbc04] text-[#fbbc04]" : "fill-sand text-sand") }, n))
	});
}
function GoogleMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: "size-5",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#4285F4",
				d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.56c2.08-1.92 3.28-4.74 3.28-8.1Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#34A853",
				d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#FBBC05",
				d: "M5.84 14.09A6.97 6.97 0 0 1 5.5 12c0-.72.13-1.41.34-2.09V7.07H2.18A11 11 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#EA4335",
				d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z"
			})
		]
	});
}
function initials(name) {
	return name.replace(/[^A-Za-z ]/g, " ").split(/\s+/).filter(Boolean).map((part) => part[0]).join("").slice(0, 2);
}
function WildlifeRow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 flex w-full max-w-md items-center justify-between gap-2 rounded-full bg-[#f3e6c8] px-4 py-2.5 sm:mt-8 sm:gap-4 sm:px-6 sm:py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 64 40",
				className: "h-6 w-9 text-ink sm:h-8 sm:w-12",
				fill: "currentColor",
				"aria-hidden": true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "22",
						cy: "26",
						rx: "14",
						ry: "9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M34 22c8-2 16 2 22 8-8 2-16 1-22-2v-6Z" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "14",
						cy: "16",
						r: "6"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 14c-4-6-6-8-7-8 2 4 3 8 4 10h3Z" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 40 48",
				className: "h-8 w-6 text-ink sm:h-10 sm:w-7",
				fill: "currentColor",
				"aria-hidden": true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "16",
						y: "8",
						width: "8",
						height: "22",
						rx: "2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "20",
						cy: "8",
						rx: "7",
						ry: "8"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 30h16l2 14H10L12 30Z" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 4h3l1 6h-3zM23 4h3l-1 6h-3z" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 48 40",
				className: "h-6 w-8 text-ink sm:h-8 sm:w-10",
				fill: "currentColor",
				"aria-hidden": true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 28c0-8 6-14 14-16 2-6 8-10 10-10-2 6-2 10 2 14 6 2 10 8 10 14H10Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 28v8h-3v-8M30 28v8h3v-8" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 56 32",
				className: "h-5 w-9 text-ink sm:h-7 sm:w-12",
				fill: "currentColor",
				"aria-hidden": true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "6",
						y: "12",
						width: "36",
						height: "10",
						rx: "2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 12 V6 h16 v6" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "16",
						cy: "24",
						r: "5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "38",
						cy: "24",
						r: "5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "42",
						y: "14",
						width: "8",
						height: "6"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 48 40",
				className: "h-7 w-8 text-ink sm:h-9 sm:w-10",
				fill: "currentColor",
				"aria-hidden": true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 4c2 8 10 12 14 20H10C14 16 22 12 24 4Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 24c8 0 12 8 12 12H12c0-4 4-12 12-12Z" })]
			})
		]
	});
}
function Reviews() {
	const t = useT();
	const count = testimonials.length;
	const scroller = (0, import_react.useRef)(null);
	const [openQuote, setOpenQuote] = (0, import_react.useState)(null);
	const scrollByCard = (dir) => {
		const el = scroller.current;
		if (!el) return;
		el.scrollBy({
			left: dir * Math.min(280, el.clientWidth * .85),
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "overflow-x-hidden bg-cream px-5 py-12 sm:px-6 sm:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-8 lg:grid-cols-2 lg:gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-[1.75rem] leading-snug font-semibold text-gold sm:text-4xl lg:text-5xl",
						children: t("Real life stories...", "Hadithi za kweli...", {
							fr: "Histoires vraies...",
							de: "Wahre Geschichten...",
							zh: "真实故事...",
							es: "Historias reales...",
							ru: "Живые истории..."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-md text-[15px] leading-relaxed text-muted sm:mt-4 sm:text-base",
						children: t("Every journey we share leaves behind its own memories. Here are a few words from guests who travelled Tanzania with Eco Vibe Safari — wildlife, culture, and days that stayed with them.", "Kila safari inaacha kumbukumbu. Haya ni maneno ya wageni waliosafiri Tanzania na Eco Vibe Safari — pori, utamaduni, na siku zilizobaki nao.", {
							fr: "Chaque voyage laisse une mémoire. Quelques mots d’invités partis en Tanzanie avec Eco Vibe Safari.",
							de: "Jede Reise hinterlässt Erinnerungen. Worte von Gästen, die mit Eco Vibe Safari Tansania erlebten.",
							zh: "每一次旅程都会留下记忆。以下是与 Eco Vibe Safari 同行坦桑尼亚的旅客的话。",
							es: "Cada viaje deja recuerdos. Palabras de viajeros que recorrieron Tanzania con Eco Vibe Safari.",
							ru: "Каждое путешествие оставляет память. Слова гостей, ездивших по Танзании с Eco Vibe Safari."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WildlifeRow, {})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
						alt: "",
						className: "h-52 w-full object-cover sm:h-72"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-3 flex items-center justify-center rounded-xl border border-white/40 bg-cream/85 p-4 text-center backdrop-blur-sm sm:inset-6 sm:rounded-2xl sm:p-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg leading-snug font-semibold text-ink sm:text-2xl lg:text-3xl",
							children: t("Real experiences & memories.", "Uzoefu na kumbukumbu za kweli.", {
								fr: "Vraies expériences et souvenirs.",
								de: "Echte Erlebnisse und Erinnerungen.",
								zh: "真实体验与记忆。",
								es: "Experiencias y recuerdos reales.",
								ru: "Настоящие впечатления и память."
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs leading-relaxed text-muted sm:mt-3 sm:text-sm",
							children: t("A journey shaped by comfort, trust, wildlife, culture, and heartfelt hospitality.", "Safari yenye starehe, imani, pori, utamaduni na ukarimu wa kweli.", {
								fr: "Un voyage de confort, de confiance, de faune et d’hospitalité sincère.",
								de: "Eine Reise aus Komfort, Vertrauen, Wildnis und ehrlicher Gastfreundschaft.",
								zh: "由舒适、信任、野生动物、文化与真诚款待构成的旅程。",
								es: "Un viaje de confort, confianza, fauna, cultura y hospitalidad.",
								ru: "Путешествие из комфорта, доверия, дикой природы и искреннего гостеприимства."
							})
						})] })
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-col gap-6 sm:mt-12 lg:flex-row lg:items-start lg:gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "shrink-0 lg:w-56",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo-mark.jpg",
							alt: "",
							className: "size-12 rounded-full object-cover ring-1 ring-sand sm:size-14"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold sm:text-base",
								children: "Eco Vibe Safari"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, { value: 5 }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted",
								children: t(`${count} Google reviews`, `Maoni ${count} ya Google`, {
									fr: `${count} avis Google`,
									de: `${count} Google-Bewertungen`,
									zh: `${count} 条 Google 评价`,
									es: `${count} reseñas de Google`,
									ru: `${count} отзыва Google`
								})
							})
						] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: GOOGLE_REVIEW_URL,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-4 inline-flex min-h-11 items-center justify-center rounded-full border border-ink px-5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-cream sm:mt-5",
						children: t("Write a review", "Andika maoni", {
							fr: "Écrire un avis",
							de: "Bewertung schreiben",
							zh: "写评价",
							es: "Escribir una reseña",
							ru: "Написать отзыв"
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => scrollByCard(-1),
							className: "absolute top-1/2 left-0 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-sand bg-paper text-ink shadow-sm sm:-left-3 sm:size-10",
							"aria-label": t("Previous reviews", "Maoni yaliyopita"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							ref: scroller,
							className: "flex snap-x snap-mandatory gap-3 overflow-x-auto px-10 pb-2 sm:gap-4 sm:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
							children: testimonials.map((item, i) => {
								const quote = pair(t, item.quote);
								const long = quote.length > 140;
								const open = openQuote === item.name;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "relative w-[min(17rem,calc(100vw-5.5rem))] shrink-0 snap-start rounded-2xl border border-sand bg-paper p-4 shadow-sm sm:w-[16.5rem] sm:p-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex min-w-0 items-center gap-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white sm:size-10",
													style: { background: AVATAR_COLORS[i % AVATAR_COLORS.length] },
													children: initials(item.name)
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "truncate text-sm font-semibold",
														children: item.name
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[11px] text-muted",
														children: item.date
													})]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleMark, {})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, { value: item.rating }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "size-3.5 fill-[#1a73e8] text-paper" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: cn("mt-3 text-[13px] leading-relaxed text-muted sm:text-sm", !open && "line-clamp-4"),
											children: quote
										}),
										long ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setOpenQuote(open ? null : item.name),
											className: "mt-2 text-xs font-semibold text-forest",
											children: open ? t("Show less", "Ficha") : t("Read more", "Soma zaidi", {
												fr: "Lire plus",
												de: "Mehr lesen",
												zh: "阅读更多",
												es: "Leer más",
												ru: "Читать дальше"
											})
										}) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute right-4 bottom-3 font-display text-3xl leading-none text-gold/50",
											children: "”"
										})
									]
								}, item.name);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => scrollByCard(1),
							className: "absolute top-1/2 right-0 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-sand bg-paper text-ink shadow-sm sm:-right-3 sm:size-10",
							"aria-label": t("Next reviews", "Maoni yajayo"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
						})
					]
				})]
			})]
		})
	});
}
function HomePage() {
	const t = useT();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroStage, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative z-10 -mt-10 rounded-t-[2.5rem] bg-cream px-4 pt-14 pb-16 shadow-[0_-18px_40px_rgba(60,36,18,0.18)] sm:-mt-14 sm:px-6 sm:pt-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-10 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Diamond, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-center rounded-xl border border-sand bg-paper px-6 py-8 shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo.jpg",
						alt: "Eco Vibe Safari logo",
						className: "mx-auto h-auto w-full max-w-[17rem] object-contain"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.22em] text-sunset uppercase",
						children: t("Who we are", "Sisi ni nani", {
							fr: "Qui nous sommes",
							de: "Wer wir sind",
							zh: "我们是谁",
							es: "Quiénes somos",
							ru: "Кто мы"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-semibold sm:text-4xl",
						children: t("A local Arusha safari house", "Nyumba ya safari ya Arusha", {
							fr: "Une maison safari à Arusha",
							de: "Ein lokales Safari-Haus in Arusha",
							zh: "阿鲁沙本地safari之家",
							es: "Una casa safari local en Arusha",
							ru: "Местный сафари-дом в Аруше"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Diamond, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 leading-relaxed text-muted",
						children: t("Eco Vibe Safari is a local company in Arusha. We run responsible game drives across East and southern Africa, guided treks on Kilimanjaro and Mount Meru, and quiet days with cultural food, camps and the people who live beside the parks.", "Eco Vibe Safari ni kampuni ya ndani Arusha. Tunaendesha game drives zenye uwajibikaji Afrika Mashariki na Kusini, trek za Kilimanjaro na Mount Meru, na siku tulivu za chakula cha kitamaduni.", {
							fr: "Eco Vibe Safari est une maison locale à Arusha. Safaris responsables, treks du Kilimandjaro et du Meru, cuisine culturelle et camps discrets.",
							de: "Eco Vibe Safari ist ein lokales Haus in Arusha. Verantwortliche Gamedrives, Treks auf Kilimandscharo und Meru, kulturelle Küche und stille Camps.",
							zh: "Eco Vibe Safari是阿鲁沙本地公司。我们在东非与南部非洲做负责任的巡游、乞力马扎罗与梅鲁徒步，以及文化美食与营地。",
							es: "Eco Vibe Safari es una casa local en Arusha. Safaris responsables, treks al Kilimanjaro y Meru, comida cultural y campamentos serenos.",
							ru: "Eco Vibe Safari — местная компания в Аруше. Ответственные сафари, треки на Килиманджаро и Меру, культурная кухня и тихие лагеря."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						className: "mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-forest",
						children: t("Read more", "Soma zaidi", {
							fr: "Lire plus",
							de: "Mehr lesen",
							zh: "了解更多",
							es: "Leer más",
							ru: "Читать дальше"
						})
					})
				] })]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper px-4 py-16 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					kicker: t("Explore", "Gundua", {
						fr: "Explorer",
						de: "Entdecken",
						zh: "探索",
						es: "Explorar",
						ru: "Открыть"
					}),
					title: t("Destinations", "Maeneo", {
						fr: "Destinations",
						de: "Reiseziele",
						zh: "目的地",
						es: "Destinos",
						ru: "Направления"
					}),
					desc: t("Tanzania, Zanzibar, Kenya, Botswana, Rwanda and Uganda.", "Tanzania, Zanzibar, Kenya, Botswana, Rwanda na Uganda.", {
						fr: "Tanzanie, Zanzibar, Kenya, Botswana, Rwanda et Ouganda.",
						de: "Tansania, Sansibar, Kenia, Botswana, Ruanda und Uganda.",
						zh: "坦桑尼亚、桑给巴尔、肯尼亚、博茨瓦纳、卢旺达与乌干达。",
						es: "Tanzania, Zanzíbar, Kenia, Botsuana, Ruanda y Uganda.",
						ru: "Танзания, Занзибар, Кения, Ботсвана, Руанда и Уганда."
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: countries.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/destinations",
						className: "group overflow-hidden rounded-xl bg-cream shadow-sm transition-transform hover:-translate-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-44 overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: d.image,
								alt: pair(t, d.title),
								className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-semibold",
								children: pair(t, d.title)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: pair(t, d.blurb)
							})]
						})]
					}, d.key))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-4 py-16 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					kicker: t("Northern circuit", "Mzunguko wa kaskazini", {
						fr: "Circuit nord",
						de: "Nordkreis",
						zh: "北部线路",
						es: "Circuito norte",
						ru: "Северный круг"
					}),
					title: t("Explore Tanzania", "Gundua Tanzania", {
						fr: "Explorer la Tanzanie",
						de: "Tansania entdecken",
						zh: "探索坦桑尼亚",
						es: "Explorar Tanzania",
						ru: "Открыть Танзанию"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: tanzaniaParks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/explore-tanzania",
						className: "group overflow-hidden rounded-xl bg-paper shadow-sm transition-transform hover:-translate-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-36 overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.image,
								alt: "",
								className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-semibold",
								children: pair(t, item.title)
							})
						})]
					}, item.key))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper px-4 py-16 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					kicker: t("Experiences", "Uzoefu", {
						fr: "Expériences",
						de: "Erlebnisse",
						zh: "体验",
						es: "Experiencias",
						ru: "Впечатления"
					}),
					title: t("Three ways to travel", "Njia tatu za kusafiri", {
						fr: "Trois façons de voyager",
						de: "Drei Arten zu reisen",
						zh: "三种旅行方式",
						es: "Tres formas de viajar",
						ru: "Три способа путешествовать"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: experiences.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/experiences",
						className: "overflow-hidden rounded-xl bg-cream shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-44 overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.image,
								alt: "",
								className: "h-full w-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-semibold",
								children: pair(t, item.title)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: pair(t, item.text)
							})]
						})]
					}, item.key))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-4 py-16 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						kicker: t("Our trips", "Safari zetu", {
							fr: "Nos voyages",
							de: "Unsere Reisen",
							zh: "行程",
							es: "Viajes",
							ru: "Поездки"
						}),
						title: t("Featured journeys", "Safari teule", {
							fr: "Voyages en avant",
							de: "Ausgewählte Reisen",
							zh: "精选行程",
							es: "Viajes destacados",
							ru: "Избранные маршруты"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 md:grid-cols-3",
						children: tours.slice(0, 3).map((tour) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "overflow-hidden rounded-xl bg-cream shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative h-44",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: tour.image,
									alt: "",
									className: "h-full w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute top-3 left-3 rounded-full bg-sunset px-3 py-1 text-xs font-semibold text-paper",
									children: pair(t, tour.badge)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-semibold",
										children: pair(t, tour.title)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted",
										children: pair(t, tour.blurb)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 font-display text-lg text-forest",
										children: tour.price
									})
								]
							})]
						}, tour.title.en))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/trips",
							className: "inline-flex min-h-11 items-center rounded-full bg-forest px-6 text-sm font-semibold text-paper",
							children: t("See all trips", "Angalia safari zote", {
								fr: "Voir tous les voyages",
								de: "Alle Reisen",
								zh: "查看全部行程",
								es: "Ver todos los viajes",
								ru: "Все поездки"
							})
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reviews, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "bg-forest-deep px-4 py-16 text-center text-paper sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-semibold sm:text-4xl",
					children: t("Ready to travel with us?", "Uko tayari kusafiri nasi?", {
						fr: "Prêt à voyager avec nous ?",
						de: "Bereit, mit uns zu reisen?",
						zh: "准备好与我们同行了吗？",
						es: "¿Listo para viajar con nosotros?",
						ru: "Готовы путешествовать с нами?"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-3 max-w-xl text-sand",
					children: t("Tell us the dates. We sketch the parks, the camps and the meals.", "Tuambie tarehe. Tunachora mbuga, kambi na milo.", {
						fr: "Donnez-nous les dates. Nous dessinons parcs, camps et repas.",
						de: "Nenn uns die Daten. Wir skizzieren Parks, Camps und Mahlzeiten.",
						zh: "告诉我们日期。我们勾画公园、营地与餐食。",
						es: "Dinos las fechas. Trazamos parques, campamentos y comidas.",
						ru: "Назовите даты. Мы набросаем парки, лагеря и еду."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "mt-8 inline-flex min-h-12 items-center rounded-full bg-cream px-7 text-sm font-semibold text-ink",
					children: t("Plan your journey", "Panga safari yako", {
						fr: "Planifiez le voyage",
						de: "Plane die Reise",
						zh: "规划行程",
						es: "Planifica el viaje",
						ru: "Спланировать поездку"
					})
				})
			]
		})
	] });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePage, {});
}
//#endregion
export { Home as component };
