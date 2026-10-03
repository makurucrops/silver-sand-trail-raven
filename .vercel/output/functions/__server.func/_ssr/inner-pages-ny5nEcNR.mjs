import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as Binoculars, a as Trees, b as Car, h as Handshake, l as Mountain, m as Hotel, n as UtensilsCrossed, o as Tent, p as House, r as Users, t as X, v as ChevronDown, x as Camera, y as Check } from "../_libs/lucide-react.mjs";
import { A as useT, C as pricingUgandaRwanda, D as team, E as tanzaniaParks, S as pricingOptional, T as stays, _ as pair, a as camps, b as pricingGroups, c as destinations, d as foods, f as gallery, g as offers, h as howWeWork, k as tours, l as experiences, m as hikingMountains, n as PageHero, o as cn, p as hikingIncluded, r as SectionHead, s as countries, t as Diamond, u as faqs, v as partnerships, w as services, x as pricingIncluded, y as pricingExcluded } from "./site-shell-C-IXlnDv.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/inner-pages-ny5nEcNR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactForm() {
	const t = useT();
	function onContact(e) {
		e.preventDefault();
		toast.success(t("Asante — we received your message and will reply soon.", "Asante — tumepokea ujumbe wako, tutajibu hivi karibuni."));
		e.currentTarget.reset();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: onContact,
		className: "rounded-xl bg-paper p-6 shadow-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mb-4 block text-sm font-medium",
				children: [t("Name", "Jina"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					name: "name",
					className: "mt-1 min-h-11 w-full rounded-md border border-sand bg-cream px-3 text-base text-ink outline-none focus:border-forest"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mb-4 block text-sm font-medium",
				children: [t("Email", "Barua pepe"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					type: "email",
					name: "email",
					className: "mt-1 min-h-11 w-full rounded-md border border-sand bg-cream px-3 text-base text-ink outline-none focus:border-forest"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mb-4 block text-sm font-medium",
				children: [t("Interest", "Unachotaka"), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					name: "interest",
					className: "mt-1 min-h-11 w-full rounded-md border border-sand bg-cream px-3 text-base text-ink outline-none focus:border-forest",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("Safari circuit", "Mzunguko wa safari") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("Kilimanjaro climb", "Kupanda Kilimanjaro") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("Group package", "Kifurushi cha kikundi") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("Private safari", "Safari ya faragha") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("Photographic", "Picha") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("Custom itinerary", "Ratiba maalum") })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mb-4 block text-sm font-medium",
				children: [t("Message", "Ujumbe"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					required: true,
					name: "message",
					rows: 4,
					className: "mt-1 w-full rounded-md border border-sand bg-cream px-3 py-2 text-base text-ink outline-none focus:border-forest"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "inline-flex min-h-11 w-full items-center justify-center rounded-full bg-sunset text-sm font-semibold text-paper hover:bg-sunset/90",
				children: t("Send message", "Tuma ujumbe")
			})
		]
	});
}
var stayIcons = {
	hotel: Hotel,
	tent: Tent,
	home: House,
	camp: Trees
};
var serviceIcons = {
	car: Car,
	utensils: UtensilsCrossed,
	mountain: Mountain,
	binoculars: Binoculars,
	users: Users,
	camera: Camera
};
function AboutPage() {
	const t = useT();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: t("About", "Sisi", {
			fr: "À propos",
			de: "Über uns",
			zh: "关于",
			es: "Nosotros",
			ru: "О нас"
		}),
		title: t("A local Arusha safari house", "Nyumba ya safari ya Arusha", {
			fr: "Une maison safari à Arusha",
			de: "Ein lokales Safari-Haus in Arusha",
			zh: "阿鲁沙本地safari之家",
			es: "Una casa safari local en Arusha",
			ru: "Местный сафари-дом в Аруше"
		}),
		desc: t("Feel natural · live the adventure — parks, peaks, islands and people.", "Hisia ya asili · ishi adventure — mbuga, milima, visiwa na watu.", {
			fr: "Feel natural · live the adventure — parcs, sommets, îles et gens.",
			de: "Feel natural · live the adventure — Parks, Gipfel, Inseln und Menschen.",
			zh: "Feel natural · live the adventure — 公园、山峰、岛屿与人。",
			es: "Feel natural · live the adventure — parques, cumbres, islas y gente.",
			ru: "Feel natural · live the adventure — парки, вершины, острова и люди."
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-10 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-center rounded-xl border border-sand bg-paper px-6 py-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo.jpg",
						alt: "Eco Vibe Safari",
						className: "h-auto w-full max-w-[18rem] object-contain"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "leading-relaxed text-muted",
					children: t("We are based in Arusha. Our crews run game drives, mountain treks and cultural days with licensed local guides. We book camps and lodges, cook Tanzanian food on the road, and keep the itinerary honest — no hidden extras.", "Tuko Arusha. Timu zetu zinaendesha game drives, trek za milima na siku za utamaduni na viongozi wenye leseni. Tunahifadhi kambi na lodges, tunapika chakula cha Tanzania, na ratiba iko wazi.", {
						fr: "Nous sommes à Arusha. Guides locaux licenciés, camps et lodges, cuisine tanzanienne, itinéraires sans frais cachés.",
						de: "Wir sitzen in Arusha. Lizenzierte lokale Guides, Camps und Lodges, tansanische Küche, ehrliche Routen.",
						zh: "我们在阿鲁沙。持证本地向导、营地与小屋、坦桑尼亚美食、行程透明无隐藏费用。",
						es: "Estamos en Arusha. Guías locales con licencia, campamentos y lodges, comida tanzana e itinerarios honestos.",
						ru: "Мы в Аруше. Лицензированные местные гиды, лагеря и лоджи, танзанийская кухня, честные маршруты."
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-3 gap-4",
					children: [
						["1500+", t("Travellers", "Wasafiri", {
							fr: "Voyageurs",
							de: "Gäste",
							zh: "旅客",
							es: "Viajeros",
							ru: "Гости"
						})],
						["12+", t("Years", "Miaka", {
							fr: "Ans",
							de: "Jahre",
							zh: "年",
							es: "Años",
							ru: "Лет"
						})],
						["98%", t("Would return", "Wangerudi", {
							fr: "Reviendraient",
							de: "Kämen wieder",
							zh: "愿意再来",
							es: "Volverían",
							ru: "Вернулись бы"
						})]
					].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-paper p-3 text-center shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl font-semibold text-forest",
							children: n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: l
						})]
					}, String(l)))
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					kicker: t("The house", "Nyumba", {
						fr: "La maison",
						de: "Das Haus",
						zh: "团队",
						es: "La casa",
						ru: "Дом"
					}),
					title: t("People who run Eco Vibe Safari", "Watu wanaoendesha Eco Vibe Safari", {
						fr: "Les gens d’Eco Vibe Safari",
						de: "Die Menschen hinter Eco Vibe Safari",
						zh: "运营 Eco Vibe Safari 的人",
						es: "Quiénes llevan Eco Vibe Safari",
						ru: "Кто ведёт Eco Vibe Safari"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-2",
					children: team.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-paper p-6 shadow-sm md:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold tracking-[0.22em] text-sunset uppercase",
								children: pair(t, person.role)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-2xl font-semibold",
								children: person.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 leading-relaxed text-muted",
								children: pair(t, person.bio)
							})
						]
					}, person.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: services.map((s) => {
					const Icon = serviceIcons[s.icon];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-paper p-6 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-6 text-forest" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-lg font-semibold",
								children: pair(t, s.title)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: pair(t, s.text)
							})
						]
					}, s.title.en);
				})
			})
		]
	})] });
}
function DestinationsPage() {
	const t = useT();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: t("Explore", "Gundua"),
		title: t("Destinations", "Maeneo"),
		desc: t("East and southern Africa from our Arusha house — countries first, then the Tanzania parks.", "Afrika Mashariki na Kusini kutoka Arusha — nchi kwanza, kisha mbuga za Tanzania.", {
			fr: "Afrique de l’Est et australe depuis Arusha.",
			de: "Ost- und Südliches Afrika ab Arusha.",
			zh: "从阿鲁沙出发的东非与南部非洲。",
			es: "África oriental y austral desde Arusha.",
			ru: "Восточная и южная Африка из Аруши."
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: countries.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "overflow-hidden rounded-xl bg-paper shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: d.image,
						alt: pair(t, d.title),
						className: "h-52 w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-semibold",
							children: pair(t, d.title)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: pair(t, d.blurb)
						})]
					})]
				}, d.key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-16 text-center font-display text-2xl font-semibold",
				children: t("Tanzania parks & peaks", "Mbuga na milima ya Tanzania")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: destinations.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "overflow-hidden rounded-xl border border-sand bg-cream",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: d.image,
						alt: pair(t, d.title),
						className: "h-40 w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold",
							children: pair(t, d.title)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: pair(t, d.blurb)
						})]
					})]
				}, d.key))
			})
		]
	})] });
}
function TripsPage() {
	const t = useT();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: t("Our trips", "Safari zetu"),
		title: t("Ready-made journeys", "Safari zilizoandaliwa"),
		desc: t("Parks, peaks, islands — or we rewrite every day around you.", "Mbuga, milima, visiwa — au tunaandika kila siku kwa ajili yako.")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-3",
		children: tours.map((tour) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "flex flex-col overflow-hidden rounded-xl bg-paper shadow-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-48",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: tour.image,
					alt: "",
					className: "h-full w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-3 left-3 rounded-full bg-sunset px-3 py-1 text-xs font-semibold text-paper",
					children: pair(t, tour.badge)
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-medium tracking-wide text-muted uppercase",
						children: [
							pair(t, tour.days),
							" · ",
							tour.place
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-xl font-semibold",
						children: pair(t, tour.title)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 flex-1 text-sm text-muted",
						children: pair(t, tour.blurb)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl font-semibold text-forest",
							children: tour.price
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "inline-flex min-h-11 items-center rounded-full bg-forest px-4 text-sm font-semibold text-paper",
							children: t("Book", "Weka nafasi", {
								fr: "Réserver",
								de: "Buchen",
								zh: "预订",
								es: "Reservar",
								ru: "Бронь"
							})
						})]
					})
				]
			})]
		}, tour.title.en))
	})] });
}
function ExperiencesPage() {
	const t = useT();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: t("Experiences", "Uzoefu"),
		title: t("Small group, family, private", "Kikundi kidogo, familia, faragha")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-6xl space-y-10 px-4 py-16 sm:px-6",
		children: experiences.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "grid overflow-hidden rounded-xl bg-paper shadow-sm md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: item.image,
				alt: "",
				className: "h-64 w-full object-cover md:h-full"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold",
						children: pair(t, item.title)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 leading-relaxed text-muted",
						children: pair(t, item.text)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "mt-6 inline-flex min-h-11 w-fit items-center rounded-full bg-forest px-5 text-sm font-semibold text-paper",
						children: t("Plan this style", "Panga mtindo huu")
					})
				]
			})]
		}, item.key))
	})] });
}
function ExploreTanzaniaPage() {
	const t = useT();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: t("Explore Tanzania", "Gundua Tanzania"),
		title: t("Parks, crater, peaks and tide", "Mbuga, crater, milima na pwani"),
		desc: t("The northern circuit first — then Arusha NP, Manyara, Mikumi, Ruaha, Nyerere, Kilimanjaro, Meru and the islands.", "Mzunguko wa kaskazini kwanza — kisha Arusha NP, Manyara, Mikumi, Ruaha, Nyerere, Kilimanjaro, Meru na visiwa.")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-6xl space-y-10 px-4 py-16 sm:px-6",
		children: tanzaniaParks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "grid overflow-hidden rounded-xl bg-paper shadow-sm md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: item.image,
				alt: "",
				className: "h-64 w-full object-cover md:h-full"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold",
						children: pair(t, item.title)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 leading-relaxed text-muted",
						children: pair(t, item.text)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "mt-6 inline-flex min-h-11 w-fit items-center rounded-full bg-forest px-5 text-sm font-semibold text-paper",
						children: t("Ask for this park", "Ulizia hifadhi hii")
					})
				]
			})]
		}, item.key))
	})] });
}
function CampsPage() {
	const t = useT();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: t("Sleep", "Lala"),
		title: t("Camps & lodges", "Kambi na lodges"),
		desc: t("Canvas, lodges and beach villas we book on your behalf.", "Hema, lodges na villa za pwani tunazohifadhi kwa niaba yako.")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 sm:grid-cols-2 lg:grid-cols-3",
		children: camps.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "overflow-hidden rounded-xl bg-paper shadow-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: c.image,
				alt: "",
				className: "h-48 w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-sunset uppercase",
						children: pair(t, c.kind)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-xl font-semibold",
						children: pair(t, c.title)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: pair(t, c.place)
					})
				]
			})]
		}, c.title.en))
	})] });
}
function StayPage() {
	const t = useT();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: t("Comfort", "Starehe"),
		title: t("Accommodation & food", "Malazi na chakula")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: stays.map((s) => {
					const Icon = stayIcons[s.icon];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl border border-sand bg-paper p-6 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "mx-auto size-8 text-forest" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-lg font-semibold",
								children: pair(t, s.title)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: pair(t, s.text)
							})
						]
					}, s.title.en);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-16 text-center font-display text-2xl font-semibold",
				children: t("Cultural food on the road", "Chakula cha kitamaduni njiani")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: foods.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-paper p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UtensilsCrossed, { className: "size-5 text-sunset" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mt-3 font-display text-lg font-semibold",
							children: pair(t, f.title)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: pair(t, f.text)
						})
					]
				}, f.title.en))
			})
		]
	})] });
}
function HowWeWorkPage() {
	const t = useT();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: t("Process", "Mchakato"),
		title: t("How we work", "Jinsi tunavyofanya kazi")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid max-w-6xl gap-5 px-4 py-16 sm:px-6 sm:grid-cols-2 lg:grid-cols-4",
		children: howWeWork.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-xl bg-paper p-6 shadow-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl text-sunset",
					children: step.n
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-xl font-semibold",
					children: pair(t, step.title)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: pair(t, step.text)
				})
			]
		}, step.n))
	})] });
}
function OffersPage() {
	const t = useT();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: t("Offers", "Ofa"),
		title: t("This season", "Msimu huu")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-3",
		children: offers.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-xl bg-paper p-6 shadow-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-semibold tracking-widest text-sunset uppercase",
					children: pair(t, o.tag)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-2xl font-semibold",
					children: pair(t, o.title)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: pair(t, o.text)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 font-display text-xl text-forest",
					children: pair(t, o.price)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "mt-4 inline-flex min-h-11 items-center rounded-full bg-forest px-4 text-sm font-semibold text-paper",
					children: t("Ask for dates", "Uliza tarehe")
				})
			]
		}, o.title.en))
	})] });
}
function PricingPage() {
	const t = useT();
	const from = t("From", "Kuanzia", {
		fr: "Dès",
		de: "Ab",
		zh: "起价",
		es: "Desde",
		ru: "От"
	});
	const pp = t("pp", "kwa mtu", {
		fr: "/ pers.",
		de: "p. P.",
		zh: "/人",
		es: "/ pers.",
		ru: "/ чел."
	});
	const tiers = [
		{
			key: "comfort",
			label: t("Comfort", "Starehe", {
				fr: "Confort",
				de: "Comfort",
				zh: "舒适",
				es: "Comfort",
				ru: "Комфорт"
			})
		},
		{
			key: "luxury",
			label: t("Luxury", "Anasa", {
				fr: "Luxe",
				de: "Luxus",
				zh: "奢华",
				es: "Lujo",
				ru: "Люкс"
			})
		},
		{
			key: "vip",
			label: t("VIP Luxury", "VIP Luxury", {
				fr: "VIP Luxe",
				de: "VIP-Luxus",
				zh: "VIP奢华",
				es: "VIP Lujo",
				ru: "VIP люкс"
			})
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: t("Pricing", "Bei"),
		title: t("Packages from Arusha", "Vifurushi kutoka Arusha"),
		desc: t("Feel natural, live the adventure. All prices are from, per person, and shift with season, rooms and group size.", "Hisia ya asili, ishi adventure. Bei zote ni kuanzia, kwa mtu, na zinabadilika kwa msimu, vyumba na idadi ya wageni.")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl space-y-14 px-4 py-14 sm:px-6",
		children: [
			pricingGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-6 overflow-hidden rounded-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-36 sm:h-44",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: group.image,
							alt: "",
							className: "h-full w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/45" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-0 flex flex-col justify-end p-5 text-paper",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm",
									children: group.flag
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl font-semibold sm:text-3xl",
									children: pair(t, group.region)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 max-w-xl text-sm text-sand",
									children: pair(t, group.intro)
								})
							]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: group.packages.map((pkg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-paper p-5 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-semibold",
							children: pair(t, pkg.title)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid gap-2 sm:grid-cols-3",
							children: tiers.map((tier) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: cn("rounded-lg border px-3 py-3 text-center", tier.key === "vip" ? "border-gold bg-cream" : "border-sand"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] font-semibold tracking-widest text-sunset uppercase",
										children: tier.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 font-display text-lg font-semibold text-forest",
										children: [
											from,
											" ",
											pkg[tier.key]
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted",
										children: pp
									})
								]
							}, tier.key))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-forest",
							children: t("Request this itinerary", "Omba ratiba hii", {
								fr: "Demander cet itinéraire",
								de: "Diese Route anfragen",
								zh: "申请此行程",
								es: "Pedir este itinerario",
								ru: "Запросить маршрут"
							})
						})
					]
				}, pkg.title.en))
			})] }, group.key)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-paper p-6 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-semibold",
							children: t("What’s included", "Nini kimo ndani", {
								fr: "Ce qui est inclus",
								de: "Inklusivleistungen",
								zh: "包含内容",
								es: "Qué incluye",
								ru: "Что включено"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: t("Depending on the selected itinerary and package.", "Kulingana na ratiba na kifurushi ulichochagua.")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2",
							children: pricingIncluded.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-forest" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: pair(t, item) })]
							}, item.en))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 font-display text-lg font-semibold",
							children: t("Uganda & Rwanda packages", "Vifurushi vya Uganda na Rwanda")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: t("Where applicable. Permits are included only when specifically stated in the selected itinerary.", "Inapohitajika. Vizia vimo tu vikiwa vimeandikwa wazi kwenye ratiba.")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2",
							children: pricingUgandaRwanda.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-forest" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: pair(t, item) })]
							}, item.en))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-paper p-6 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold",
						children: t("What’s excluded", "Nini hakimo", {
							fr: "Non inclus",
							de: "Nicht enthalten",
							zh: "不含内容",
							es: "Qué no incluye",
							ru: "Что не входит"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2",
						children: pricingExcluded.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "mt-0.5 size-4 shrink-0 text-sunset" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: pair(t, item) })]
						}, item.en))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				kicker: t("Add-ons", "Nyongeza"),
				title: t("Optional experiences", "Uzoefu wa hiari"),
				desc: t("Available at an additional cost.", "Inapatikana kwa gharama ya ziada.")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: pricingOptional.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "rounded-xl bg-paper px-4 py-3 text-sm font-medium shadow-sm",
					children: pair(t, item)
				}, item.en))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-xl border border-sand bg-paper px-5 py-4 text-sm leading-relaxed text-muted",
				children: t("All prices are “From” prices per person and may vary according to travel season, accommodation availability, number of guests, selected activities, flight arrangements and itinerary customization. For VIP Luxury, accommodation, private transport, premium dining and exclusive experiences can be customized to the guest’s preferences.", "Bei zote ni “Kuanzia” kwa mtu na zinaweza kubadilika kwa msimu, upatikanaji wa malazi, idadi ya wageni, shughuli, ndege na marekebisho ya ratiba. Kwa VIP Luxury, malazi, usafiri wa faragha, milo na uzoefu maalum vinaweza kubadilishwa kwa mapenzi ya mgeni.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-forest-deep px-6 py-10 text-center text-paper",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold sm:text-3xl",
						children: t("Ready to lock a departure?", "Uko tayari kufunga tarehe?")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-3 max-w-lg text-sand",
						children: t("Tell us dates and which category — Comfort, Luxury or VIP Luxury — and we sketch the parks and camps.", "Tuambie tarehe na kundi — Comfort, Luxury au VIP Luxury — tunaandaa mbuga na kambi.")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "mt-6 inline-flex min-h-11 items-center rounded-full bg-gold px-6 text-sm font-semibold text-ink",
						children: t("Plan this trip", "Panga safari")
					})
				]
			})
		]
	})] });
}
function HikingPage() {
	const t = useT();
	const from = t("From", "Kuanzia", {
		fr: "Dès",
		de: "Ab",
		zh: "起价",
		es: "Desde",
		ru: "От"
	});
	const pp = t("pp", "kwa mtu", {
		fr: "/ pers.",
		de: "p. P.",
		zh: "/人",
		es: "/ pers.",
		ru: "/ чел."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: t("Hiking", "Kupanda milima"),
		title: t("Three peaks from Arusha", "Milima mitatu kutoka Arusha"),
		desc: t("Kilimanjaro, Mount Meru and Ol Doinyo Lengai — licensed crews, honest loads, and prices from per person.", "Kilimanjaro, Mount Meru na Ol Doinyo Lengai — timu zenye leseni, mizigo ya haki, na bei kuanzia kwa mtu.")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl space-y-10 px-4 py-14 sm:px-6",
		children: [
			hikingMountains.map((peak) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
				className: "overflow-hidden rounded-xl bg-paper shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative min-h-52",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: peak.image,
							alt: "",
							className: "h-full w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-3 left-3 rounded-full bg-sunset px-3 py-1 text-xs font-semibold text-paper",
							children: peak.height
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5 sm:p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold tracking-[0.18em] text-sunset uppercase",
								children: pair(t, peak.tag)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-2xl font-semibold sm:text-3xl",
								children: pair(t, peak.name)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted",
								children: pair(t, peak.text)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-3",
								children: peak.routes.map((route) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center justify-between gap-3 rounded-lg border border-sand px-3 py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium",
										children: pair(t, route.title)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "shrink-0 text-right",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-display text-lg font-semibold text-forest",
											children: [
												from,
												" ",
												route.price
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-1 text-xs text-muted",
											children: pp
										})]
									})]
								}, route.title.en))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "mt-5 inline-flex min-h-11 items-center rounded-full bg-forest px-5 text-sm font-semibold text-paper",
								children: t("Book this climb", "Weka nafasi ya kupanda", {
									fr: "Réserver cette ascension",
									de: "Diese Tour buchen",
									zh: "预订此次登山",
									es: "Reservar esta cumbre",
									ru: "Забронировать восхождение"
								})
							})
						]
					})]
				})
			}, peak.key)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl bg-paper p-6 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold",
					children: t("What’s included on the mountain", "Nini kimo mlimani")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-2 sm:grid-cols-2",
					children: hikingIncluded.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-forest" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: pair(t, item) })]
					}, item.en))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-xl border border-sand bg-paper px-5 py-4 text-sm leading-relaxed text-muted",
				children: t("All hiking prices are “From” prices per person. They shift with season, group size, route and extra nights. Tips, personal gear, visas and travel insurance are not included.", "Bei za hiking ni “Kuanzia” kwa mtu. Zinabadilika kwa msimu, idadi ya wageni, njia na usiku wa ziada. Tips, vifaa binafsi, visa na bima havimo.")
			})
		]
	})] });
}
function GalleryPage() {
	const t = useT();
	const [lightbox, setLightbox] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: t("Light", "Mwanga"),
			title: t("Gallery", "Matunzio")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3 md:grid-cols-4",
				children: gallery.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setLightbox(src),
					className: cn("overflow-hidden rounded-lg", i === 0 ? "md:col-span-2 md:row-span-2" : ""),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src,
						alt: t("Safari photograph", "Picha ya safari"),
						className: cn("w-full object-cover", i === 0 ? "h-full min-h-52 md:min-h-80" : "h-36 md:h-44")
					})
				}, src))
			})
		}),
		lightbox ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4",
			onClick: () => setLightbox(null),
			"aria-label": t("Close image", "Funga picha"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: lightbox,
				alt: "",
				className: "max-h-[90vh] max-w-full rounded-lg object-contain"
			})
		}) : null
	] });
}
function PartnershipsPage() {
	const t = useT();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: t("Partnership", "Ushirika"),
		title: t("Who we work with", "Tunafanya kazi na nani"),
		desc: t("Lodges, parks, mountain crews, communities and agents — a local Arusha desk that holds the moving parts.", "Lodges, mbuga, timu za milima, jamii na mawakala — dawati la Arusha linaloshika kila sehemu.")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
			children: partnerships.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl bg-paper p-6 shadow-sm md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handshake, { className: "size-6 text-forest" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-xl font-semibold",
						children: pair(t, item.title)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: pair(t, item.text)
					})
				]
			}, item.title.en))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 rounded-xl bg-forest px-6 py-10 text-center text-paper md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl font-semibold",
					children: t("Work with Eco Vibe Safari", "Fanya kazi na Eco Vibe Safari")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-3 max-w-2xl text-sand",
					children: t("Agents, lodges and conservation desks — send a note. We reply with how we partner, net rates and a named operations contact.", "Mawakala, lodges na ofisi za uhifadhi — tuma ujumbe. Tunajibu namna tunavyoshirikiana, bei na mtu wa operations.")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "mt-6 inline-flex min-h-11 items-center rounded-full bg-cream px-6 text-sm font-semibold text-ink",
					children: t("Start a partnership", "Anza ushirika")
				})
			]
		})]
	})] });
}
function FaqPage() {
	const t = useT();
	const [openFaq, setOpenFaq] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: t("Questions", "Maswali"),
		title: t("Frequently asked", "Maswali ya mara kwa mara")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-3xl space-y-3 px-4 py-16 sm:px-6",
		children: faqs.map((f, i) => {
			const open = openFaq === i;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-sand bg-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "flex min-h-12 w-full items-center justify-between gap-4 px-5 py-4 text-left",
					onClick: () => setOpenFaq(open ? null : i),
					"aria-expanded": open,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: pair(t, f.q)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-5 shrink-0 text-forest transition-transform", open && "rotate-180") })]
				}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-5 pb-4 text-sm leading-relaxed text-muted",
					children: pair(t, f.a)
				}) : null]
			}, f.q.en);
		})
	})] });
}
function ContactPage() {
	const t = useT();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: t("Plan the days", "Panga siku"),
		title: t("Tell us the trip in your head", "Tuambie safari iliyo kichwani")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Diamond, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted",
				children: t("Share dates, who is travelling, and whether you want plains, crater, coast or the mountain. We reply with a clear outline.", "Tuambie tarehe, nani anasafiri, na kama unataka nyanda, crater, pwani au mlima.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-sm text-muted",
				children: [
					"WhatsApp · +255 754 000 000",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"hello@ecovibesafari.com",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Arusha, Tanzania"
				]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})]
	})] });
}
//#endregion
export { ExperiencesPage as a, GalleryPage as c, OffersPage as d, PartnershipsPage as f, TripsPage as h, DestinationsPage as i, HikingPage as l, StayPage as m, CampsPage as n, ExploreTanzaniaPage as o, PricingPage as p, ContactPage as r, FaqPage as s, AboutPage as t, HowWeWorkPage as u };
