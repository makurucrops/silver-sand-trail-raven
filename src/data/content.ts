import type { Copy } from "@/lib/lang";

export type Pair = Copy;

function C(en: string, sw: string, fr: string, de: string, zh: string, es: string, ru: string): Copy {
  return { en, sw, fr, de, zh, es, ru };
}
export const countries = [
  {
    key: "tanzania",
    title: C("Tanzania", "Tanzania", "Tanzanie", "Tansania", "坦桑尼亚", "Tanzania", "Танзания"),
    blurb: C("Serengeti, Ngorongoro, Tarangire, Kilimanjaro and the northern circuit from Arusha.", "Serengeti, Ngorongoro, Tarangire, Kilimanjaro na mzunguko wa kaskazini kutoka Arusha.", "Serengeti, Ngorongoro, Tarangire, Kilimandjaro et le circuit nord depuis Arusha.", "Serengeti, Ngorongoro, Tarangire, Kilimandscharo und der Nordkreis ab Arusha.", "从阿鲁沙出发的塞伦盖蒂、恩戈罗恩戈罗、塔兰吉雷、乞力马扎罗与北部线路。", "Serengeti, Ngorongoro, Tarangire, Kilimanjaro y el circuito norte desde Arusha.", "Серенгети, Нгоронгоро, Тарангире, Килиманджаро и северный маршрут из Аруши."),
    image: "/destinations/tanzania.png"
  },
  {
    key: "zanzibar",
    title: C("Zanzibar", "Zanzibar", "Zanzibar", "Sansibar", "桑给巴尔", "Zanzíbar", "Занзибар"),
    blurb: C("Spice islands, Stone Town, dhow sunsets and white-sand recovery after safari.", "Visiwa vya viungo, Stone Town, machweo ya dau na mchanga mweupe baada ya safari.", "Îles aux épices, Stone Town, couchers de soleil en boutre et plages après le safari.", "Gewürzinseln, Stone Town, Dau-Sonnenuntergänge und weißer Sand nach der Safari.", "香料群岛、石头城、独桅帆船日落，以及safari之后的白沙滩休整。", "Islas de las especias, Stone Town, atardeceres en dhow y playas después del safari.", "Острова пряностей, Стоун-таун, закаты на дау и белый песок после сафари."),
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80"
  },
  {
    key: "kenya",
    title: C("Kenya", "Kenya", "Kenya", "Kenia", "肯尼亚", "Kenia", "Кения"),
    blurb: C("Maasai Mara migration crossings, Amboseli elephants and Rift Valley lakes.", "Mito ya uhamiaji Maasai Mara, tembo wa Amboseli na maziwa ya Rift Valley.", "Traversées de la migration au Maasai Mara, éléphants d’Amboseli et lacs de la Rift.", "Migration im Maasai Mara, Elefanten in Amboseli und Seen im Rift Valley.", "马赛马拉迁徙渡河、安博塞利大象与裂谷湖泊。", "Cruce de la migración en Maasai Mara, elefantes de Amboseli y lagos del Rift.", "Переправа миграции в Масаи-Мара, слоны Амбосели и озёра Рифтовой долины."),
    image: "/destinations/kenya.png"
  },
  {
    key: "botswana",
    title: C("Botswana", "Botswana", "Botswana", "Botswana", "博茨瓦纳", "Botsuana", "Ботсвана"),
    blurb: C("Okavango Delta mokoro days, Chobe river elephants and quiet luxury camps.", "Siku za mokoro Okavango, tembo wa mto Chobe na kambi tulivu za anasa.", "Journées en mokoro dans l’Okavango, éléphants du Chobe et camps discrets.", "Mokoro-Tage im Okavango, Elefanten am Chobe und stille Luxuscamps.", "奥卡万戈三角洲独木舟、乔贝河大象与安静的奢华营地。", "Días de mokoro en el Okavango, elefantes del Chobe y campamentos serenos.", "Дни на мокоро в Окаванго, слоны на Чобе и тихие люкс-лагеря."),
    image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=80"
  },
  {
    key: "rwanda",
    title: C("Rwanda", "Rwanda", "Rwanda", "Ruanda", "卢旺达", "Ruanda", "Руанда"),
    blurb: C("Volcanoes National Park gorilla trekking and misty thousand-hills landscapes.", "Kupanda milima kuona sokwe Volcanoes NP na mandhari ya visima elfu.", "Trekking des gorilles au Parc des Volcans et collines brumeuses.", "Gorilla-Trekking im Vulkan-Nationalpark und neblige Tausend Hügel.", "火山国家公园大猩猩徒步与迷雾千丘。", "Trekking de gorilas en el Parque de los Volcanes y mil colinas.", "Треккинг к гориллам в парке вулканов и туманные тысячи холмов."),
    image: "/destinations/rwanda.png"
  },
  {
    key: "uganda",
    title: C("Uganda", "Uganda", "Ouganda", "Uganda", "乌干达", "Uganda", "Уганда"),
    blurb: C("Bwindi gorillas, Murchison Falls and chimpanzees in Kibale forest.", "Sokwe wa Bwindi, Murchison Falls na sokwe wadogo wa msitu wa Kibale.", "Gorilles de Bwindi, chutes Murchison et chimpanzés de Kibale.", "Gorillas in Bwindi, Murchison Falls und Schimpansen im Kibale-Wald.", "布温迪大猩猩、默奇森瀑布与基巴莱森林黑猩猩。", "Gorilas de Bwindi, cataratas Murchison y chimpancés de Kibale.", "Гориллы Бвинди, водопад Мерчисон и шимпанзе в Кибале."),
    image: "/destinations/uganda.png"
  }
];
export const destinations = [
  {
    key: "serengeti",
    title: C("Serengeti National Park", "Hifadhi ya Taifa ya Serengeti", "Parc national du Serengeti", "Serengeti-Nationalpark", "塞伦盖蒂国家公园", "Parque Nacional Serengeti", "Национальный парк Серенгети"),
    blurb: C("Endless golden plains and the Great Migration.", "Nyanda za dhahabu na Uhamiaji Mkuu.", "Plaines dorées infinies et Grande Migration.", "Endlose goldene Ebenen und die Große Migration.", "无尽金色草原与大迁徙。", "Llanuras doradas y la Gran Migración.", "Бескрайние золотые равнины и Великая миграция."),
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80"
  },
  {
    key: "ngorongoro",
    title: C("Ngorongoro Crater", "Crater ya Ngorongoro", "Cratère du Ngorongoro", "Ngorongoro-Krater", "恩戈罗恩戈罗火山口", "Cráter de Ngorongoro", "Кратер Нгоронгоро"),
    blurb: C("The world’s largest intact caldera — home of the Big Five.", "Caldera kubwa zaidi duniani — nyumbani kwa Big Five.", "La plus grande caldeira intacte — le Big Five.", "Die größte intakte Caldera — Heimat der Big Five.", "世界最大完整火山口——五大兽家园。", "La caldera intacta más grande — hogar de los Big Five.", "Крупнейшая целая кальдера — дом Большой пятёрки."),
    image: "/parks/ngorongoro.png"
  },
  {
    key: "tarangire",
    title: C("Tarangire National Park", "Hifadhi ya Taifa ya Tarangire", "Parc national de Tarangire", "Tarangire-Nationalpark", "塔兰吉雷国家公园", "Parque Nacional Tarangire", "Национальный парк Тарангире"),
    blurb: C("Giant baobabs and some of Tanzania’s largest elephant herds.", "Baobab na makundi makubwa ya tembo.", "Baobabs géants et grands troupeaux d’éléphants.", "Riesige Baobabs und große Elefantenherden.", "巨大猴面包树与庞大象群。", "Baobabs gigantes y grandes manadas de elefantes.", "Гигантские баобабы и огромные стада слонов."),
    image: "/parks/tarangire.png",
    pos: "top"
  },
  {
    key: "arusha-np",
    title: C("Arusha National Park", "Hifadhi ya Taifa ya Arusha", "Parc national d’Arusha", "Arusha-Nationalpark", "阿鲁沙国家公园", "Parque Nacional Arusha", "Национальный парк Аруша"),
    blurb: C("Momella Lakes, waterfalls, walking safari and views of Meru & Kilimanjaro.", "Maziwa ya Momella, maporomoko na maoni ya Meru na Kilimanjaro.", "Lacs Momella, cascades et vues sur le Meru et le Kilimandjaro.", "Momella-Seen, Wasserfälle und Blicke auf Meru und Kilimandscharo.", "莫梅拉湖、瀑布，以及梅鲁与乞力马扎罗的景色。", "Lagos Momella, cascadas y vistas de Meru y Kilimanjaro.", "Озёра Момелла, водопады и виды на Меру и Килиманджаро."),
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
  },
  {
    key: "mikumi",
    title: C("Mikumi National Park", "Hifadhi ya Taifa ya Mikumi", "Parc national de Mikumi", "Mikumi-Nationalpark", "米库米国家公园", "Parque Nacional Mikumi", "Национальный парк Микуми"),
    blurb: C("Open savannah with easy game viewing south of Arusha.", "Savanna wazi yenye kuona wanyama kusini mwa Arusha.", "Savane ouverte au sud d’Arusha, facile pour observer.", "Offene Savanne südlich von Arusha mit einfacher Wildbeobachtung.", "阿鲁沙以南开阔草原，易于观兽。", "Sabana abierta al sur de Arusha, fácil para ver fauna.", "Открытая саванна к югу от Аруши, удобная для наблюдений."),
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
  },
  {
    key: "kili",
    title: C("Mount Kilimanjaro", "Mlima Kilimanjaro", "Mont Kilimandjaro", "Kilimandscharo", "乞力马扎罗山", "Monte Kilimanjaro", "Килиманджаро"),
    blurb: C("The Roof of Africa. Machame, Lemosho, Marangu and more.", "Paa la Afrika. Machame, Lemosho, Marangu na njia nyingine.", "Le toit de l’Afrique. Machame, Lemosho, Marangu et plus.", "Das Dach Afrikas. Machame, Lemosho, Marangu und mehr.", "非洲屋脊。马查梅、莱莫肖、马兰古等路线。", "El techo de África. Machame, Lemosho, Marangu y más.", "Крыша Африки. Мачаме, Лемошо, Марангу и другие."),
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80"
  }
];
export const tours = [
  {
    badge: C("Best seller", "Inauzwa zaidi", "Meilleure vente", "Bestseller", "热门", "Más vendido", "Хит"),
    days: C("5 days", "Siku 5", "5 jours", "5 Tage", "5天", "5 días", "5 дней"),
    place: "Serengeti · Ngorongoro",
    title: C("Classic Serengeti & Crater", "Safari ya Serengeti na Crater", "Serengeti et cratère classiques", "Klassisches Serengeti & Krater", "经典塞伦盖蒂与火山口", "Serengeti y cráter clásicos", "Классика Серенгети и кратера"),
    blurb: C("Migration plains, crater floor game drive and the Big Five in one iconic circuit.", "Nyanda za uhamiaji, game drive kwenye crater na Big Five.", "Plaines de migration, game drive dans le cratère et Big Five.", "Migrationsebenen, Krater-Gamedrive und die Big Five.", "迁徙草原、火山口巡游与五大兽经典线路。", "Llanuras de migración, game drive en el cráter y Big Five.", "Равнины миграции, круиз по кратеру и Большая пятёрка."),
    price: "$1,450",
    image: "/journeys/classic.png"
  },
  {
    badge: C("Summit", "Kilele", "Sommet", "Gipfel", "登顶", "Cumbre", "Вершина"),
    days: C("7–8 days", "Siku 7–8", "7–8 jours", "7–8 Tage", "7–8天", "7–8 días", "7–8 дней"),
    place: "Kilimanjaro",
    title: C("Kilimanjaro climb", "Kupanda Kilimanjaro", "Ascension du Kilimandjaro", "Kilimandscharo-Besteigung", "乞力马扎罗登山", "Ascenso al Kilimanjaro", "Восхождение на Килиманджаро"),
    blurb: C("Full mountain crew, safety gear and the routes that give you the best summit chance.", "Wafanyakazi kamili wa mlima na njia zenye nafasi kubwa ya kilele.", "Équipe complète, matériel de sécurité et les meilleures voies pour le sommet.", "Volles Bergteam, Sicherheit und die Routen mit der besten Gipfelchance.", "完整登山团队、安全装备与登顶机会最大的路线。", "Equipo de montaña, seguridad y las rutas con más chance de cumbre.", "Полная горная команда, безопасность и лучшие маршруты к вершине."),
    price: "$1,890",
    image: "/journeys/kilimanjaro.png"
  },
  {
    badge: C("Coast", "Pwani", "Côte", "Küste", "海滨", "Costa", "Побережье"),
    days: C("8 days", "Siku 8", "8 jours", "8 Tage", "8天", "8 días", "8 дней"),
    place: "Tanzania · Zanzibar",
    title: C("Parks then Zanzibar", "Mbuga kisha Zanzibar", "Parcs puis Zanzibar", "Parks, dann Sansibar", "公园之后去桑给巴尔", "Parques y luego Zanzíbar", "Парки, затем Занзибар"),
    blurb: C("Northern circuit game drives, then spice island rest on the east coast.", "Game drives za kaskazini, kisha pumziko la kisiwa cha viungo.", "Game drives du nord, puis repos sur l’île aux épices.", "Gamedrives im Norden, dann Ruhe auf der Gewürzinsel.", "北部巡游之后，在香料岛东岸休整。", "Game drives del norte y descanso en la isla de las especias.", "Северные гейм-драйвы, затем отдых на острове пряностей."),
    price: "$2,150",
    image: "/journeys/zanzibar.png"
  },
  {
    badge: C("Trek", "Trek", "Trek", "Trek", "徒步", "Trek", "Трек"),
    days: C("4 days", "Siku 4", "4 jours", "4 Tage", "4天", "4 días", "4 дня"),
    place: "Mount Meru",
    title: C("Mount Meru trek", "Kupanda Mount Meru", "Trek du mont Meru", "Mount-Meru-Trek", "梅鲁山徒步", "Trek del monte Meru", "Трек на гору Меру"),
    blurb: C("Wildlife on the trail, crater rim views, and ideal training before Kili.", "Wanyama njiani na maandalizi bora kabla ya Kilimanjaro.", "Faune sur le sentier et préparation idéale avant le Kilimandjaro.", "Wildtiere am Weg und ideale Vorbereitung vor dem Kilimandscharo.", "沿途野生动物，火山口边缘景色，乞力马扎罗前的理想适应。", "Fauna en el camino y preparación ideal antes del Kilimanjaro.", "Животные на тропе и идеальная подготовка к Килиманджаро."),
    price: "$950",
    image: "/journeys/meru.png"
  },
  {
    badge: C("Cross-border", "Mipaka", "Transfrontalier", "Grenzüberschreitend", "跨境", "Transfronterizo", "Через границу"),
    days: C("9 days", "Siku 9", "9 jours", "9 Tage", "9天", "9 días", "9 дней"),
    place: "Tanzania · Kenya",
    title: C("Serengeti & Mara", "Serengeti na Mara", "Serengeti et Mara", "Serengeti & Mara", "塞伦盖蒂与马拉", "Serengeti y Mara", "Серенгети и Мара"),
    blurb: C("Follow the herds across the Mara river with a private 4×4 on both sides.", "Fuata makundi kuvuka mto Mara kwa 4×4 ya faragha pande zote.", "Suivez les troupeaux à travers la rivière Mara en 4×4 privé.", "Folgen Sie den Herden über den Mara-Fluss im privaten 4×4.", "乘坐私人越野车追随兽群渡过马拉河。", "Sigue las manadas cruzando el río Mara en 4×4 privado.", "Следуйте за стадами через реку Мара на частном 4×4."),
    price: "$3,420",
    image: "/journeys/mara.png"
  },
  {
    badge: C("Culture", "Utamaduni", "Culture", "Kultur", "文化", "Cultura", "Культура"),
    days: C("Half / full day", "Nusu / siku nzima", "Demi / journée", "Halb- / Ganztags", "半天 / 全天", "Medio / día completo", "Полдня / день"),
    place: "Maasai country",
    title: C("Maasai cultural day", "Siku ya utamaduni wa Maasai", "Journée culturelle maasaï", "Kulturtag bei den Maasai", "马赛文化日", "Día cultural maasái", "Культурный день масаи"),
    blurb: C("Village visit, stories, dance and a shared meal of local cultural cuisine.", "Tembeleo la kijiji, hadithi, ngoma na chakula cha kitamaduni.", "Visite de village, récits, danse et repas de cuisine locale.", "Dorfbesuch, Geschichten, Tanz und ein gemeinsames Mahl.", "村落拜访、故事、舞蹈与共享的本地餐食。", "Visita al pueblo, relatos, danza y comida local compartida.", "Визит в деревню, истории, танцы и общая трапеза."),
    price: "$95",
    image: "/journeys/maasai.png"
  }
];
export const stays = [
  {
    title: C("Luxury lodges", "Lodges za anasa", "Lodges de luxe", "Luxuslodges", "奢华小屋", "Lodges de lujo", "Люкс-лоджи"),
    text: C("Park-edge lodges with views, fine dining and full amenities.", "Lodges kando ya mbuga zenye maoni na starehe kamili.", "Lodges en lisière de parc, vues et tout le confort.", "Lodges am Parkrand mit Ausblick und vollem Komfort.", "公园边缘小屋，景观与完备设施。", "Lodges junto al parque, vistas y todo el confort.", "Лоджи у парка с видом и полным комфортом."),
    icon: "hotel" as const
  },
  {
    title: C("Tented camps", "Kambi za hema", "Camps sous tente", "Zeltcamps", "帐篷营地", "Campamentos de lona", "Палаточные лагеря"),
    text: C("Canvas under the stars without giving up a real bed.", "Hema chini ya nyota bila kuacha kitanda halisi.", "Toile sous les étoiles, avec un vrai lit.", "Leinwand unter den Sternen, mit echtem Bett.", "星空下的帆布帐篷，仍有真正的床。", "Lona bajo las estrellas sin renunciar a una cama.", "Палатка под звёздами с настоящей кроватью."),
    icon: "tent" as const
  },
  {
    title: C("Mid-range hotels", "Hoteli za kati", "Hôtels milieu de gamme", "Mittelklasse-Hotels", "中档酒店", "Hoteles de rango medio", "Отели среднего класса"),
    text: C("Clean, comfortable bases in Arusha and near the parks.", "Malazi safi na starehe Arusha na karibu na mbuga.", "Bases propres et confortables à Arusha et près des parcs.", "Saubere Basen in Arusha und nahe den Parks.", "阿鲁沙与公园附近干净舒适的落脚点。", "Bases limpias y cómodas en Arusha y junto a los parques.", "Чистые базы в Аруше и у парков."),
    icon: "home" as const
  },
  {
    title: C("Budget campsites", "Kambi za bei nafuu", "Camps économiques", "Günstige Camps", "经济营地", "Campings económicos", "Бюджетные кемпинги"),
    text: C("Authentic bush camping for travellers who want the night sounds.", "Kambi ya porini kwa wanaotaka sauti za usiku wa asili.", "Camping authentique pour entendre la nuit sauvage.", "Echtes Buschcamping für die Nachtgeräusche der Wildnis.", "想听夜间荒野声响的旅人的营地。", "Camping auténtico para oír la noche salvaje.", "Настоящий кемпинг, чтобы слышать ночь саванны."),
    icon: "camp" as const
  }
];
export const services = [
  {
    title: C("Safari transport", "Usafiri wa safari", "Transport safari", "Safari-Transport", "safari交通", "Transporte safari", "Транспорт сафари"),
    text: C("4×4 vehicles with pop-up roofs, airport transfers and private road support.", "Magari 4×4 yenye paa zinazoinuka na uhamisho wa uwanja.", "4×4 à toit ouvrant, transferts aéroport et routes privées.", "4×4 mit Aufstelldach, Flughafentransfers und private Fahrten.", "掀顶越野车、机场接送与私人道路支持。", "4×4 con techo elevable, traslados y apoyo en carretera.", "4×4 с подъёмной крышей, трансферы и частные дороги."),
    icon: "car" as const
  },
  {
    title: C("Food & cultural cuisine", "Chakula cha kitamaduni", "Cuisine culturelle", "Kulturelle Küche", "美食与文化料理", "Comida cultural", "Кухня и культура"),
    text: C("Full-board meals, bush picnics, and Tanzanian dishes cooked with local cooks.", "Milo kamili, picnic porini na vyakula vya Tanzania.", "Pension complète, pique-niques et plats tanzaniens.", "Vollpension, Bush-Picknicks und tansanische Gerichte.", "全餐、荒野野餐，以及本地厨师的坦桑尼亚菜。", "Pensión completa, picnic y platos tanzanos.", "Полный пансион, пикники и танзанийские блюда."),
    icon: "utensils" as const
  },
  {
    title: C("Hiking & trekking", "Hiking na trekking", "Randonnée", "Wandern & Trekking", "徒步", "Senderismo", "Треккинг"),
    text: C("Kilimanjaro and Mount Meru with licensed mountain crews and safety gear.", "Kilimanjaro na Mount Meru na wafanyakazi wa mlima wenye leseni.", "Kilimandjaro et Meru avec équipes licenciées.", "Kilimandscharo und Meru mit lizenzierten Bergteams.", "持证登山队与安全装备的乞力马扎罗与梅鲁。", "Kilimanjaro y Meru con equipos licenciados.", "Килиманджаро и Меру с лицензированными командами."),
    icon: "mountain" as const
  },
  {
    title: C("Game drives", "Game drives", "Game drives", "Gamedrives", "观兽巡游", "Game drives", "Гейм-драйвы"),
    text: C("Dawn, afternoon and full-day drives with guides who know every waterhole.", "Asubuhi, mchana na siku nzima na viongozi wanaojua kila dimbwi.", "Aube, après-midi et journées entières avec des guides locaux.", "Morgen, Nachmittag und Ganztagestouren mit lokalen Guides.", "黎明、午后与全日巡游，向导熟悉每一处水塘。", "Amanecer, tarde y día completo con guías locales.", "Рассвет, день и полные выезды с местными гидами."),
    icon: "binoculars" as const
  },
  {
    title: C("Cultural tours", "Safari za kitamaduni", "Visites culturelles", "Kulturreisen", "文化行程", "Tours culturales", "Культурные туры"),
    text: C("Respectful visits with Maasai and neighbouring communities around Arusha.", "Tembeleo kwa heshima kwa Maasai na jamii jirani.", "Visites respectueuses chez les Maasaï autour d’Arusha.", "Respektvolle Besuche bei Maasai und Nachbargemeinschaften.", "在阿鲁沙附近尊重地拜访马赛与邻近社区。", "Visitas respetuosas con maasái y comunidades vecinas.", "Уважительные визиты к масаи и соседним общинам."),
    icon: "users" as const
  },
  {
    title: C("Photography days", "Siku za picha", "Journées photo", "Fototage", "摄影日", "Días de foto", "Фотодни"),
    text: C("Itineraries timed for golden light, migration rivers and crater rim sunsets.", "Ratiba zenye mwanga wa dhahabu na mito ya uhamiaji.", "Itinéraires calés sur la lumière dorée et les rivières de migration.", "Routen für goldenes Licht und Migrationsflüsse.", "为金色光线、迁徙河流与火山口日落安排的行程。", "Itinerarios a la luz dorada y ríos de migración.", "Маршруты под золотой свет и реки миграции."),
    icon: "camera" as const
  }
];
export const gallery = [
  "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=900&q=80"
];

export const posts = [
  {
    topic: C("Climbing", "Kupanda", "Escalade", "Bergsteigen", "登山", "Escalada", "Восхождения"),
    title: C("Climbing Kilimanjaro, Meru and Lengai", "Kupanda Kilimanjaro, Meru na Lengai", "Gravir le Kilimandjaro, le Meru et le Lengai", "Kilimandscharo, Meru und Lengai besteigen", "攀登乞力马扎罗、梅鲁与伦盖", "Escalar el Kilimanjaro, el Meru y el Lengai", "Восхождения на Килиманджаро, Меру и Ленгай"),
    body: C("Three peaks from Arusha. Kilimanjaro is the Roof of Africa — Marangu from $1,650, Machame from $1,890, Lemosho from $2,180, Rongai from $1,980. Mount Meru is the training climb inside Arusha National Park, from $780 for three days. Ol Doinyo Lengai, the Mountain of God, is a night climb from $320, or two days with Lake Natron from $540. Licensed guides, measured porter loads and a safety briefing before every trail.", "Milima mitatu kutoka Arusha. Kilimanjaro ni paa la Afrika — Marangu kuanzia $1,650, Machame $1,890, Lemosho $2,180, Rongai $1,980. Mlima Meru ni mazoezi ndani ya Hifadhi ya Arusha, kuanzia $780 kwa siku tatu. Ol Doinyo Lengai, Mlima wa Mungu, ni kupanda usiku kuanzia $320, au siku mbili na Ziwa Natron kuanzia $540.", "Trois sommets depuis Arusha. Kilimandjaro dès 1 650 $, Meru dès 780 $, Lengai de nuit dès 320 $. Guides licenciés et charges mesurées.", "Drei Gipfel ab Arusha. Kilimandscharo ab 1.650 $, Meru ab 780 $, Lengai bei Nacht ab 320 $. Lizenzierte Guides.", "从阿鲁沙出发的三座山。乞力马扎罗、梅鲁与夜间攀登伦盖。持证向导，合理负重。", "Tres cumbres desde Arusha. Kilimanjaro, Meru y Lengai de noche, con guías con licencia.", "Три вершины из Аруши. Килиманджаро, Меру и ночной Ленгай. Лицензированные гиды."),
    image: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    topic: C("Safari", "Safari", "Safari", "Safari", "游猎", "Safari", "Сафари"),
    title: C("A safari on the northern circuit", "Safari kwenye mzunguko wa kaskazini", "Un safari sur le circuit nord", "Safari auf dem Nordkreis", "北部线路上的safari", "Un safari en el circuito norte", "Сафари по северному кругу"),
    body: C("From Arusha the classic loop is Tarangire, Ngorongoro and the Serengeti. Dawn drives, a picnic on the crater floor, and evenings when the light goes gold. Private safaris use your own 4×4. Group safaris share the vehicle. Safari with kids keeps the drives shorter. An 8-day migration trip starts from $6,998 per person in Comfort.", "Kutoka Arusha mzunguko wa kawaida ni Tarangire, Ngorongoro na Serengeti. Drives za alfajiri, picnic kwenye crater, na jioni za dhahabu. Safari ya faragha ni 4×4 yako. Safari ya kikundi ni gari pamoja. Safari na watoto hufupisha drives. Safari ya uhamiaji ya siku 8 inaanza kuanzia $6,998 kwa mtu, Comfort.", "Depuis Arusha : Tarangire, Ngorongoro et Serengeti. Safari privé, en groupe, ou avec enfants. Migration 8 jours dès 6 998 $ en Comfort.", "Ab Arusha: Tarangire, Ngorongoro und Serengeti. Privat, Gruppe oder mit Kindern. 8-Tage-Migration ab 6.998 $ Comfort.", "从阿鲁沙出发：塔兰吉雷、恩戈罗恩戈罗与塞伦盖蒂。私人、团体或亲子。8日迁徙舒适级起价6,998美元。", "Desde Arusha: Tarangire, Ngorongoro y Serengeti. Privado, en grupo o con niños. Migración de 8 días desde 6.998 $ Comfort.", "Из Аруши: Тарангире, Нгоронгоро и Серенгети. Частное, групповое или с детьми. 8 дней миграции от 6 998 $ Comfort."),
    image: "/blog/northern.png",
    fit: "aspect-[4/5] w-full object-cover object-[center_68%] sm:aspect-[3/2]",
  },
  {
    topic: C("About Tanzania", "Kuhusu Tanzania", "À propos de la Tanzanie", "Über Tansania", "关于坦桑尼亚", "Sobre Tanzania", "О Танзании"),
    title: C("What to know before you land in Tanzania", "Cha kujua kabla ya kutua Tanzania", "À savoir avant d’atterrir en Tanzanie", "Was man vor der Landung in Tansania wissen sollte", "抵达坦桑尼亚前要知道的事", "Qué saber antes de aterrizar en Tanzania", "Что знать до прилёта в Танзанию"),
    body: C("Tanzania holds the Serengeti, the Ngorongoro Crater, Kilimanjaro and a long Indian Ocean coast. Dry months — June to October and January to February — are strongest for game. Most passports can use an e-Visa or visa on arrival. We meet you in Arusha or on Zanzibar, and the northern parks are run by local licensed guides. Beyond the north we also go to Lake Manyara, Mikumi, Ruaha and Nyerere.", "Tanzania ina Serengeti, Crater ya Ngorongoro, Kilimanjaro na pwani ndefu ya Bahari ya Hindi. Miezi ya kiangazi — Juni hadi Oktoba na Januari hadi Februari — ni bora kwa wanyama. Pasipoti nyingi zinaweza kutumia e-Visa au visa palipofika. Tunakutana Arusha au Zanzibar. Zaidi ya kaskazini tunaenda Manyara, Mikumi, Ruaha na Nyerere.", "Serengeti, Ngorongoro, Kilimandjaro et une longue côte. Mois secs de juin à octobre et de janvier à février. E-visa ou visa à l’arrivée. Rencontre à Arusha ou Zanzibar.", "Serengeti, Ngorongoro, Kilimandscharo und eine lange Küste. Trockenmonate Juni–Oktober und Januar–Februar. E-Visum oder Visum bei Ankunft.", "塞伦盖蒂、恩戈罗恩戈罗、乞力马扎罗与漫长海岸。旱季观兽最佳。电子签或落地签。在阿鲁沙或桑给巴尔见面。", "Serengeti, Ngorongoro, Kilimanjaro y una costa larga. Meses secos de junio a octubre y de enero a febrero. E-visa o visado a la llegada.", "Серенгети, Нгоронгоро, Килиманджаро и длинное побережье. Сухие месяцы — июнь–октябрь и январь–февраль. Электронная виза или по прибытии."),
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    topic: C("Birdwatching", "Kuangalia ndege", "Observation des oiseaux", "Vogelbeobachtung", "观鸟", "Observación de aves", "Наблюдение за птицами"),
    title: C("Birdwatching on lakes, crater and coast", "Kuangalia ndege kwenye maziwa, crater na pwani", "Observer les oiseaux : lacs, cratère et côte", "Vögel an Seen, im Krater und an der Küste", "湖泊、火山口与海岸观鸟", "Aves en lagos, cráter y costa", "Птицы на озёрах, в кратере и на побережье"),
    body: C("Lake Manyara and the Momella Lakes in Arusha National Park are flamingo country. The Ngorongoro floor adds more at the soda shore. Tarangire holds hornbills, eagles and weavers in the baobabs. On Zanzibar and Pemba the mangroves and tidal creeks bring shorebirds. We slow the vehicle, keep a quiet window, and time the morning for the light — private and group vehicles both work for a birding day.", "Ziwa Manyara na maziwa ya Momella katika Hifadhi ya Arusha ni nchi ya flamingo. Sakafu ya Ngorongoro inaongeza zaidi ufukweni. Tarangire ina hornbills na tai kwenye mibuyu. Zanzibar na Pemba zinaleta ndege wa pwani kwenye mikoko. Tunapunguza kasi ya gari na kuweka dirisha tulivu.", "Manyara et les lacs Momella pour les flamants, le cratère, les calaos de Tarangire, puis les mangroves de Zanzibar et Pemba.", "Manyara und die Momella-Seen für Flamingos, der Krater, Nashornvögel in Tarangire, Mangroven auf Sansibar und Pemba.", "马尼亚拉湖与莫梅拉湖的火烈鸟、火山口、塔兰吉雷的犀鸟，以及桑给巴尔与奔巴的红树林。", "Manyara y los lagos Momella para flamencos, el cráter, cálaos en Tarangire y manglares en Zanzíbar y Pemba.", "Маньяра и озёра Момелла — фламинго, кратер, птицы-носороги в Тарангире, мангры Занзибара и Пембы."),
    image: "https://images.unsplash.com/photo-1497206365907-f5e630693df0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    topic: C("Islands", "Visiwa", "Îles", "Inseln", "岛屿", "Islas", "Острова"),
    title: C("Zanzibar, Pemba and Mafia after the parks", "Zanzibar, Pemba na Mafia baada ya mbuga", "Zanzibar, Pemba et Mafia après les parcs", "Sansibar, Pemba und Mafia nach den Parks", "游猎之后的桑给巴尔、奔巴与马菲亚", "Zanzíbar, Pemba y Mafia después de los parques", "Занзибар, Пемба и Мафия после парков"),
    body: C("After the dust, the islands. Stone Town, spice farms, dhow sunsets and white sand on the east coast of Zanzibar. A 7-day Zanzibar stay starts from $3,645 per person in Comfort. Pemba is quieter, with reefs and clove hills. Mafia is for whale sharks in season and empty sandbanks. We arrange the flight or ferry from the northern circuit, and a beach villa or a Stone Town house for the last nights.", "Baada ya vumbi, visiwa. Stone Town, mashamba ya viungo, machweo ya dau na mchanga mweupe mashariki mwa Zanzibar. Siku 7 Zanzibar kuanzia $3,645 kwa mtu, Comfort. Pemba ni tulivu, na miamba. Mafia ni kwa papa nyumbu na mchanga mtupu. Tunapanga ndege au feri kutoka mzunguko wa kaskazini.", "Après la poussière, les îles. Stone Town, épices, dhow et sable blanc. Zanzibar 7 jours dès 3 645 $ en Comfort. Pemba plus calme, Mafia pour les requins-baleines.", "Nach dem Staub die Inseln. Stone Town, Gewürze, Dau und weißer Sand. Sansibar 7 Tage ab 3.645 $ Comfort. Pemba ruhiger, Mafia für Walhaie.", "尘土之后是岛屿。石头城、香料、独桅船与白沙。桑给巴尔7日起价3,645美元。奔巴更安静，马菲亚可看鲸鲨。", "Después del polvo, las islas. Stone Town, especias, dhow y arena blanca. Zanzíbar 7 días desde 3.645 $ Comfort.", "После пыли — острова. Стоун-таун, специи, дау и белый песок. 7 дней Занзибара от 3 645 $ Comfort."),
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=80",
  },
];

export const faqs = [
  {
    q: C("What is the best time to safari in Tanzania?", "Ni wakati gani bora wa safari Tanzania?", "Quelle est la meilleure période pour un safari en Tanzanie ?", "Wann ist die beste Safari-Zeit in Tansania?", "坦桑尼亚safari的最佳时间？", "¿Cuál es la mejor época para un safari en Tanzania?", "Когда лучше всего ехать на сафари в Танзанию?"),
    a: C("Dry months — June to October and January to February — are strongest for game viewing. Migration timing shifts by region from December through July.", "Miezi ya kiangazi — Juni hadi Oktoba na Januari hadi Februari — ni bora kwa kuona wanyama.", "Les mois secs — juin à octobre et janvier–février — sont les meilleurs pour observer. La migration se déplace de décembre à juillet.", "Trockenmonate — Juni bis Oktober und Januar/Februar — sind am besten. Die Migration wandert von Dezember bis Juli.", "旱季（6–10月与1–2月）观兽最佳。迁徙随地区在12月至7月间移动。", "Los meses secos — junio a octubre y enero–febrero — son los mejores. La migración se mueve de diciembre a julio.", "Сухие месяцы — июнь–октябрь и январь–февраль — лучшие для наблюдений. Миграция смещается с декабря по июль.")
  },
  {
    q: C("Do I need a visa?", "Je, ninahitaji visa?", "Ai-je besoin d’un visa ?", "Brauche ich ein Visum?", "需要签证吗？", "¿Necesito visado?", "Нужна ли виза?"),
    a: C("Most passports can use an e-Visa or visa on arrival. We send a simple checklist once you book.", "Pasipoti nyingi zinaweza kutumia e-Visa au visa palipofika.", "La plupart des passeports peuvent utiliser un e-Visa ou un visa à l’arrivée.", "Die meisten Pässe nutzen e-Visa oder Visum bei Ankunft.", "多数护照可用电子签证或落地签。预订后我们会发清单。", "La mayoría de pasaportes usan e-Visa o visado a la llegada.", "Большинство паспортов — e-Visa или виза по прибытии.")
  },
  {
    q: C("Is Tanzania safe to travel?", "Je, Tanzania ni salama kusafiri?", "La Tanzanie est-elle sûre ?", "Ist Tansania sicher?", "坦桑尼亚旅行安全吗？", "¿Es seguro viajar a Tanzania?", "Безопасно ли ехать в Танзанию?"),
    a: C("The northern parks are well travelled. Our guides are local, licensed, and we run conservative driving and camp protocols.", "Mbuga za kaskazini zinasafiriwa sana. Viongozi wetu ni wa hapa na wenye leseni.", "Les parcs du nord sont très fréquentés. Nos guides sont locaux et licenciés.", "Die Nordparks sind gut bereist. Unsere Guides sind lokal und lizenziert.", "北部公园游客众多。向导为本地持证人员，驾驶与营地规程稳健。", "Los parques del norte son muy transitados. Guías locales y con licencia.", "Северные парки хорошо освоены. Гиды местные и с лицензией.")
  },
  {
    q: C("What is included in a safari package?", "Nini kimo ndani ya kifurushi cha safari?", "Que comprend un forfait safari ?", "Was ist im Safari-Paket enthalten?", "safari套餐包含什么？", "¿Qué incluye un paquete safari?", "Что входит в пакет сафари?"),
    a: C("Park fees, lodging, meals, game drives, a professional guide, 4×4 transport and drinking water. International flights and personal extras are separate.", "Ada za mbuga, malazi, milo, game drives, kiongozi, usafiri wa 4×4 na maji.", "Frais de parc, hébergement, repas, game drives, guide, 4×4 et eau. Vols internationaux à part.", "Parkgebühren, Unterkunft, Mahlzeiten, Gamedrives, Guide, 4×4 und Wasser. Internationale Flüge extra.", "公园费、住宿、餐食、巡游、专业向导、越野车与饮用水。国际机票另计。", "Tasas de parque, alojamiento, comidas, game drives, guía, 4×4 y agua. Vuelos internacionales aparte.", "Сборы парков, жильё, питание, выезды, гид, 4×4 и вода. Международные рейсы отдельно.")
  },
  {
    q: C("Can you build a private itinerary?", "Je, mnaweza kutengeneza ratiba ya faragha?", "Pouvez-vous créer un itinéraire privé ?", "Könnt ihr eine private Route bauen?", "可以定制私人行程吗？", "¿Podéis armar un itinerario privado?", "Можно ли собрать частный маршрут?"),
    a: C("Yes. Tell us dates, pace, hiking interest and budget — we tailor parks, lodges and walking days around you.", "Ndiyo. Tuambie tarehe, kasi, hiking na bajeti — tunapanga mbuga na malazi kwa ajili yako.", "Oui. Dates, rythme, trekking et budget — nous ajustons parcs et lodges autour de vous.", "Ja. Daten, Tempo, Wandern und Budget — wir bauen Parks und Lodges um dich.", "可以。告诉我们日期、节奏、徒步与预算，我们按你来安排公园与住宿。", "Sí. Fechas, ritmo, trekking y presupuesto — armamos parques y lodges a tu medida.", "Да. Даты, темп, треккинг и бюджет — парки и лоджи под вас.")
  },
  {
    q: C("Can children come on safari?", "Je, watoto wanaweza kuja safari?", "Les enfants peuvent-ils venir en safari ?", "Können Kinder mit auf Safari?", "孩子可以参加safari吗？", "¿Pueden venir niños al safari?", "Можно ли брать детей на сафари?"),
    a: C("Yes. Family safaris use shorter game drives, family rooms or connecting tents, and guides who like questions. Tell us the ages when you enquire.", "Ndiyo. Safari za familia zina game drives fupi, vyumba vya familia, na viongozi wanaopenda maswali. Tuambie umri wanapouliza.", "Oui. Les safaris famille ont des drives plus courts, des chambres familiales et des guides patients. Indiquez les âges.", "Ja. Familiensafaris mit kürzeren Drives, Familienzimmern und geduldigen Guides. Nennt uns die Alter.", "可以。亲子safari行程较短，有家庭房，向导乐意回答问题。询价时请告知年龄。", "Sí. Los safaris familiares tienen drives más cortos, habitaciones familiares y guías pacientes. Dinos las edades.", "Да. Семейные сафари короче, с семейными номерами и гидами, которым нравятся вопросы. Напишите возраст.")
  },
  {
    q: C("How fit do I need to be for the mountains?", "Nihitaji nguvu kiasi gani kupanda milima?", "Quelle forme faut-il pour les montagnes ?", "Wie fit muss ich für die Berge sein?", "登山需要怎样的体能？", "¿Qué forma física hace falta para las montañas?", "Какая подготовка нужна для гор?"),
    a: C("Kilimanjaro and Meru need steady walking fitness, not technical climbing. Lengai is a steep night climb. We match the route and pace to you, and send a packing and training note after booking.", "Kilimanjaro na Meru zinahitaji kutembea kwa utulivu, si kupanda kwa kamba. Lengai ni kupanda usiku kwa mwinuko. Tunachagua njia na kasi kwako.", "Le Kilimandjaro et le Meru demandent une marche régulière, pas d’escalade technique. Le Lengai est une montée de nuit raide.", "Kilimandscharo und Meru brauchen Ausdauer beim Gehen, kein technisches Klettern. Lengai ist ein steiler Nachtaufstieg.", "乞力马扎罗和梅鲁需要稳定步行能力，不是技术攀登。伦盖是陡峭夜攀。", "Kilimanjaro y Meru piden caminar con constancia, no escalada técnica. Lengai es una subida nocturna empinada.", "Килиманджаро и Меру — ровная ходьба, не техническое восхождение. Ленгай — крутой ночной подъём.")
  },
  {
    q: C("What is not included?", "Nini hakijajumuishwa?", "Qu’est-ce qui n’est pas inclus ?", "Was ist nicht enthalten?", "不包含什么？", "¿Qué no está incluido?", "Что не включено?"),
    a: C("International flights, visas, travel insurance, tips, laundry, alcoholic drinks and optional extras such as a balloon or gorilla permit, unless that permit is written into the itinerary you chose.", "Ndege za kimataifa, visa, bima, tips, kufua nguo, vinywaji vya kileo na shughuli za ziada kama balloon au kibali cha gorilla, isipokuwa kibali hicho kimeandikwa kwenye ratiba uliyochagua.", "Vols internationaux, visas, assurance, pourboires, lessive, alcool et options comme le ballon ou le permis gorille, sauf s’il est écrit dans l’itinéraire choisi.", "Internationale Flüge, Visa, Versicherung, Trinkgeld, Wäsche, Alkohol und Extras wie Ballon oder Gorilla-Permit, außer es steht im gewählten Programm.", "国际机票、签证、保险、小费、洗衣、酒精饮品，以及热气球或大猩猩许可等可选项，除非行程写明已含许可。", "Vuelos internacionales, visados, seguro, propinas, lavandería, alcohol y extras como el globo o el permiso de gorilas, salvo que figure en el itinerario elegido.", "Международные рейсы, визы, страховка, чаевые, стирка, алкоголь и доп. опции вроде шара или разрешения на горилл, если оно не вписано в маршрут.")
  },
  {
    q: C("How far ahead should I book?", "Niandikishe mapema kiasi gani?", "Combien de temps à l’avance réserver ?", "Wie früh soll ich buchen?", "需要提前多久预订？", "¿Con cuánta antelación reservo?", "За сколько бронировать?"),
    a: C("Dry-season lodges and Kilimanjaro crews fill months ahead. Six to nine months is comfortable for July to October. Shorter trips can often be arranged closer to the date.", "Malazi ya kiangazi na timu za Kilimanjaro hujaa miezi mapema. Miezi sita hadi tisa inatosha kwa Julai hadi Oktoba.", "Les lodges de saison sèche et les équipes du Kilimandjaro se remplissent des mois à l’avance. Six à neuf mois conviennent de juillet à octobre.", "Lodges der Trockenzeit und Kilimandscharo-Teams sind Monate vorher voll. Sechs bis neun Monate passen für Juli bis Oktober.", "旱季小屋和乞力马扎罗团队会提前数月订满。7至10月建议提前六到九个月。", "Los lodges de seca y los equipos del Kilimanjaro se llenan con meses. De seis a nueve meses va bien de julio a octubre.", "Лоджи сухого сезона и команды Килиманджаро заполняются за месяцы. Для июля–октября удобно за шесть–девять месяцев.")
  },
  {
    q: C("Can I add Zanzibar or gorilla trekking?", "Naweza kuongeza Zanzibar au gorilla?", "Puis-je ajouter Zanzibar ou les gorilles ?", "Kann ich Sansibar oder Gorillas ergänzen?", "可以加桑给巴尔或大猩猩追踪吗？", "¿Puedo añadir Zanzíbar o gorilas?", "Можно добавить Занзибар или горилл?"),
    a: C("Yes. Many journeys finish on the Zanzibar coast. Uganda and Rwanda gorilla days can be added, and the permit is included only when the itinerary says so.", "Ndiyo. Safari nyingi huishia pwani ya Zanzibar. Siku za gorilla Uganda na Rwanda zinaweza kuongezwa, na kibali kinajumuishwa tu ratiba inaposema hivyo.", "Oui. Beaucoup de voyages finissent sur la côte de Zanzibar. Les jours gorilles en Ouganda et au Rwanda s’ajoutent, permis inclus seulement si l’itinéraire le dit.", "Ja. Viele Reisen enden an der Küste Sansibars. Gorilla-Tage in Uganda und Ruanda sind möglich, Permit nur wenn es im Programm steht.", "可以。很多行程在桑给巴尔海岸结束。可加乌干达和卢旺达大猩猩日，仅当行程写明时才含许可。", "Sí. Muchos viajes terminan en la costa de Zanzíbar. Se pueden añadir días de gorilas en Uganda y Ruanda; el permiso va incluido solo si el itinerario lo dice.", "Да. Многие маршруты заканчиваются на побережье Занзибара. Дни с гориллами в Уганде и Руанде можно добавить; разрешение включено, только если это написано в программе.")
  }
];
export const experiences = [
  {
    key: "private",
    title: C("Private safaris", "Safari za faragha", "Safaris privés", "Private Safaris", "私人safari", "Safaris privados", "Частные сафари"),
    text: C("Your vehicle, your pace, your lodges. Honeymoons, slow travel and custom routes — we move when you are ready, and we stop when the light is good.", "Gari lako, kasi yako, malazi yako. Honeymoon, safari tulivu na njia maalum — tunaenda unapokuwa tayari.", "Votre véhicule, votre rythme, vos lodges. Lunes de miel et voyages lents, on avance quand vous êtes prêts.", "Dein Fahrzeug, dein Tempo, deine Lodges. Flitterwochen und langsames Reisen — wir fahren, wenn ihr bereit seid.", "你的车、你的节奏、你的小屋。蜜月与慢旅行，准备好才出发。", "Tu vehículo, tu ritmo, tus lodges. Lunas de miel y viaje lento: nos movemos cuando estés listo.", "Ваша машина, ваш темп, ваши лоджи. Медовый месяц и медленное путешествие — едем, когда вы готовы."),
    image: "/experiences/private.png"
  },
  {
    key: "group",
    title: C("Group safaris", "Safari za kikundi", "Safaris de groupe", "Gruppensafaris", "团体safari", "Safaris en grupo", "Групповые сафари"),
    text: C("Shared departures for friends, clubs and travellers who like company. A shared 4×4, camp nights together and a fair price, without losing the wild.", "Safari za pamoja kwa marafiki, vilabu na wasafiri wanaopenda kuwa na wengine. Gari 4×4 na kambi pamoja, bei nafuu, pori lilelile.", "Départs partagés pour amis, clubs et voyageurs qui aiment la compagnie. 4×4 et camps ensemble, prix juste, savane intacte.", "Gemeinsame Abfahrten für Freunde, Vereine und Reisende, die Gesellschaft mögen. Geteiltes 4×4, gemeinsame Campnächte, fairer Preis.", "适合朋友、俱乐部和喜欢结伴的旅客。共享越野车与营地，价格公道，荒野不减。", "Salidas compartidas para amigos, clubes y viajeros que quieren compañía. 4×4 y campamentos juntos, precio justo.", "Общие выезды для друзей, клубов и тех, кому нужна компания. Общий 4×4, ночи в лагере, честная цена."),
    image: "/experiences/group.png"
  },
  {
    key: "kids",
    title: C("Safari with kids", "Safari na watoto", "Safari avec enfants", "Safari mit Kindern", "亲子safari", "Safari con niños", "Сафари с детьми"),
    text: C("Shorter game drives, family rooms or connecting tents, picnic lunches and guides who like questions. Built so children stay curious, not tired.", "Game drives fupi, vyumba vya familia, picnic na viongozi wanaopenda maswali. Ili watoto wabaki wadadisi, si wachovu.", "Drives plus courts, chambres familiales, pique-niques et guides patients. Pour que les enfants restent curieux, pas fatigués.", "Kürzere Drives, Familienzimmer, Picknicks und geduldige Guides. Damit Kinder neugierig bleiben, nicht müde.", "较短巡游、家庭房、野餐，以及爱回答问题的向导。让孩子保持好奇，而不是疲惫。", "Drives más cortos, habitaciones familiares, picnic y guías pacientes. Para que los niños sigan curiosos, no cansados.", "Короче выезды, семейные номера, пикники и гиды, которым нравятся вопросы. Чтобы дети оставались любопытными, а не уставшими."),
    image: "/experiences/kids.png"
  }
];


export const tanzaniaParks = [
  {
    key: "serengeti",
    title: C("Serengeti National Park", "Hifadhi ya Taifa ya Serengeti", "Parc national du Serengeti", "Serengeti-Nationalpark", "塞伦盖蒂国家公园", "Parque Nacional Serengeti", "Национальный парк Серенгети"),
    text: C("Endless grass, the Great Migration, big cats on kopjes and golden evenings that feel like the first morning of the world. We run central, western and northern circuits depending on the month.", "Nyasi zisizoisha, Uhamiaji Mkuu, paka wakubwa kwenye kopjes na jioni za dhahabu. Tunaendesha mzunguko wa kati, magharibi na kaskazini kulingana na mwezi.", "Herbe infinie, Grande Migration, grands félins sur les kopjes. Circuits centre, ouest et nord selon le mois.", "Endlose Gräser, Große Migration, Großkatzen auf Kopjes. Zentral-, West- und Nordkreis je nach Monat.", "无尽草原、大迁徙、岩石上的大型猫科。按月份走中、西、北线路。", "Hierba infinita, Gran Migración, grandes felinos en kopjes. Circuitos centro, oeste y norte según el mes.", "Бесконечная трава, Великая миграция, большие кошки на копье. Центральный, западный и северный круги по месяцам."),
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1400&q=80"
  },
  {
    key: "ngorongoro",
    title: C("Ngorongoro Crater & highlights", "Crater ya Ngorongoro na vivutio", "Cratère du Ngorongoro et temps forts", "Ngorongoro-Krater & Highlights", "恩戈罗恩戈罗火山口与亮点", "Cráter de Ngorongoro y lo más destacado", "Кратер Нгоронгоро и главные места"),
    text: C("A collapsed caldera packed with lion, elephant, flamingo and black rhino. We drop to the floor at first light, picnic by the hippo pool, then climb to the rim for the view that stays with you. Nearby: Olduvai Gorge, Empakaai and a Maasai boma visit.", "Caldera yenye simba, tembo, flamingo na faru mweusi. Tunashuka asubuhi, picnic kwenye hippo pool, kisha kupanda rim. Karibu: Olduvai, Empakaai na tembeleo la boma ya Maasai.", "Caldeira dense : lions, éléphants, flamants, rhinocéros noir. Descente à l’aube, pique-nique, puis le rebord. Tout près : Olduvai, Empakaai, boma maasaï.", "Caldera voll Löwen, Elefanten, Flamingos und Spitzmaulnashorn. Abstieg im ersten Licht, Picknick, dann der Kraterrand. Nahe: Olduvai, Empakaai, Maasai-Boma.", "塌陷火山口里有狮、象、火烈鸟与黑犀。清晨下到底部，河马池野餐，再登上边缘。附近：奥杜威、恩帕凯与马赛村落。", "Caldera con leones, elefantes, flamencos y rinoceronte negro. Bajamos al alba, picnic y el borde. Cerca: Olduvai, Empakaai y un boma maasái.", "Кальдера со львами, слонами, фламинго и чёрным носорогом. Спуск на рассвете, пикник, затем кромка. Рядом: Олдувай, Эмпакаи и бома масаи."),
    image: "/parks/ngorongoro.png"
  },
  {
    key: "tarangire",
    title: C("Tarangire National Park", "Hifadhi ya Taifa ya Tarangire", "Parc national de Tarangire", "Tarangire-Nationalpark", "塔兰吉雷国家公园", "Parque Nacional Tarangire", "Национальный парк Тарангире"),
    text: C("Baobabs, the Tarangire River and one of the largest elephant gatherings in East Africa. Quiet in the green season, busy with herds when the water concentrates. A gentle first or last park day from Arusha.", "Mibuyu, mto Tarangire na kundi kubwa la tembo Afrika Mashariki. Tulivu msimu wa mvua, makundi mengi maji yanapokusanyika. Siku nzuri ya kwanza au ya mwisho kutoka Arusha.", "Baobabs, la rivière Tarangire et l’un des plus grands rassemblements d’éléphants. Doux comme premier ou dernier parc depuis Arusha.", "Baobabs, der Tarangire-Fluss und eine der größten Elefantenansammlungen. Sanfter erster oder letzter Parktag ab Arusha.", "猴面包树、塔兰吉雷河，以及东非最大象群之一。适合从阿鲁沙出发的第一天或最后一天。", "Baobabs, el río Tarangire y una de las mayores reuniones de elefantes. Un primer o último día suave desde Arusha.", "Баобабы, река Тарангире и одно из крупнейших скоплений слонов. Мягкий первый или последний день из Аруши."),
    image: "/parks/tarangire.png",
    pos: "top"
  },
  {
    key: "overview",
    title: C("Tanzania overview", "Muhtasari wa Tanzania", "Aperçu de la Tanzanie", "Tansania im Überblick", "坦桑尼亚概览", "Tanzania de un vistazo", "Танзания обзор"),
    text: C("Beyond the northern circuit we also run Arusha National Park, Lake Manyara, Mikumi, Ruaha and Nyerere (Selous). Add Kilimanjaro or Mount Meru for the peaks, then rest on Zanzibar, Pemba or Mafia. One country, parks, mountains and tide.", "Zaidi ya mzunguko wa kaskazini tunaendesha Arusha NP, Ziwa Manyara, Mikumi, Ruaha na Nyerere (Selous). Ongeza Kilimanjaro au Mount Meru, kisha pumzika Zanzibar, Pemba au Mafia.", "Au-delà du nord : Arusha NP, Manyara, Mikumi, Ruaha, Nyerere. Ajoutez le Kilimandjaro ou le Meru, puis Zanzibar, Pemba ou Mafia.", "Neben dem Nordkreis: Arusha NP, Manyara, Mikumi, Ruaha, Nyerere. Plus Kilimandscharo oder Meru, dann Sansibar, Pemba oder Mafia.", "北部线路之外还有阿鲁沙公园、马尼亚拉湖、米库米、鲁阿哈与涅雷尔。可加乞力马扎罗或梅鲁，再到桑给巴尔、奔巴或马afia休息。", "Más allá del norte: Arusha NP, Manyara, Mikumi, Ruaha y Nyerere. Suma Kilimanjaro o Meru, luego Zanzíbar, Pemba o Mafia.", "Кроме севера: парк Аруша, Маньяра, Микуми, Руаха и Ньерере. Плюс Килиманджаро или Меру, затем Занзибар, Пемба или Мафия."),
    image: "/parks/overview.png",
    pos: "bottom"
  }
];

export const howWeWork = [
  {
    n: "01",
    title: C("Tell us the dream", "Tuambie ndoto", "Parlez-nous du rêve", "Erzähl uns den Traum", "告诉我们你的梦想", "Cuéntanos el sueño", "Расскажите мечту"),
    text: C("Dates, who is coming, parks or beach, hiking or slow game drives. A WhatsApp is enough.", "Tarehe, nani anakuja, mbuga au pwani. WhatsApp inatosha.", "Dates, qui vient, parcs ou plage. Un WhatsApp suffit.", "Daten, wer kommt, Parks oder Strand. WhatsApp reicht.", "日期、同行者、公园或海滩。一条WhatsApp就够。", "Fechas, quién viene, parques o playa. Un WhatsApp basta.", "Даты, кто едет, парки или пляж. Достаточно WhatsApp.")
  },
  {
    n: "02",
    title: C("We sketch the route", "Tunachora njia", "Nous dessinons l’itinéraire", "Wir skizzieren die Route", "我们勾画路线", "Trazamos la ruta", "Чертим маршрут"),
    text: C("A clear itinerary with camps, lodges, park fees and an honest budget — no hidden extras.", "Ratiba wazi yenye kambi, lodges na bajeti ya kweli.", "Un itinéraire clair, camps, lodges, frais de parc, budget honnête.", "Klarer Plan mit Camps, Lodges, Parkgebühren, ehrlichem Budget.", "清晰行程：营地、小屋、公园费与诚实预算。", "Itinerario claro, campamentos, lodges, tasas y presupuesto honesto.", "Понятный план: лагеря, лоджи, сборы и честный бюджет.")
  },
  {
    n: "03",
    title: C("Confirm & pack", "Thibitisha na panga", "Confirmez et préparez", "Bestätigen & packen", "确认与收拾", "Confirma y empaca", "Подтвердить и собрать"),
    text: C("We lock vehicles, mountain crews and rooms. You get a packing list and visa notes.", "Tunahifadhi magari, timu za mlima na vyumba.", "Nous bloquons véhicules, équipes et chambres. Liste et visa suivent.", "Wir sichern Fahrzeuge, Bergteams und Zimmer. Packliste und Visumhinweise folgen.", "锁定车辆、登山队与房间。你会收到行李清单与签证说明。", "Reservamos vehículos, equipos y habitaciones. Lista y visado siguen.", "Бронируем машины, команды и комнаты. Список и виза следом.")
  },
  {
    n: "04",
    title: C("Travel with us", "Safiri nasi", "Voyagez avec nous", "Reise mit uns", "与我们同行", "Viaja con nosotros", "Путешествуйте с нами"),
    text: C("Meet in Arusha or Zanzibar. Guides stay with you until the last game drive or last tide.", "Tukutane Arusha au Zanzibar. Viongozi wako nawe hadi mwisho.", "Rendez-vous à Arusha ou Zanzibar. Les guides restent jusqu’au bout.", "Treffen in Arusha oder Sansibar. Guides bleiben bis zum Schluss.", "在阿鲁沙或桑给巴尔会合。向导陪你到最后一次巡游或潮汐。", "Encuentro en Arusha o Zanzíbar. Los guías se quedan hasta el final.", "Встреча в Аруше или Занзибаре. Гиды до последнего выезда.")
  }
];
export const offers = [
  {
    tag: C("Season", "Msimu", "Saison", "Saison", "季节", "Temporada", "Сезон"),
    title: C("Green-season Serengeti", "Serengeti ya majani", "Serengeti en saison verte", "Serengeti in der Grünsaison", "绿季塞伦盖蒂", "Serengeti en temporada verde", "Серенгети зелёного сезона"),
    text: C(
      "January to March on the southern plains, when the herds drop their calves and the camps are quieter. The grass is green, the light is soft, and lodge rates leave room for an extra night.",
      "Januari hadi Machi kwenye nyanda za kusini, wakati makundi yanazaa na kambi ziko tulivu. Nyasi ni kijani, mwanga ni laini, na bei ya lodge inaacha nafasi ya usiku wa ziada.",
      "De janvier à mars dans les plaines du sud, quand les troupeaux mettent bas et que les camps sont plus calmes. L’herbe est verte et les tarifs laissent place à une nuit de plus.",
      "Januar bis März in den südlichen Ebenen, wenn die Herden kalben und die Camps ruhiger sind. Grünes Gras, weiches Licht, und die Raten lassen eine zusätzliche Nacht zu.",
      "1月至3月在南部草原，兽群产仔，营地更安静。青草、柔光，房价也留得出多住一晚。",
      "De enero a marzo en las llanuras del sur, cuando las manadas paren y los campamentos están más tranquilos. Hierba verde y tarifas que dejan sitio a una noche extra.",
      "Январь–март на южных равнинах, когда стада телятся и лагеря тише. Зелёная трава и цены, в которые умещается лишняя ночь.",
    ),
    points: [
      C("4 days, private 4×4 and a guide who stays with you", "Siku 4, 4×4 ya faragha na kiongozi anayebaki nawe", "4 jours, 4×4 privé et un guide qui reste avec vous", "4 Tage, privates 4×4 und ein Guide, der bei euch bleibt", "4天，私人越野车与全程向导", "4 días, 4×4 privado y un guía que se queda contigo", "4 дня, частный 4×4 и гид, который остаётся с вами"),
      C("Southern Serengeti, focused on the calving plains", "Serengeti ya kusini, kwenye nyanda za watoto", "Serengeti sud, centré sur les plaines de mise bas", "Südliches Serengeti, auf den Kalbeebenen", "南部塞伦盖蒂，专注产仔草原", "Serengeti sur, centrado en las llanuras de cría", "Южный Серенгети, равнины отёла"),
      C("Park fees, breakfast and dinner at a comfort camp", "Ada za mbuga, kifungua kinywa na chakula cha jioni kwenye kambi ya starehe", "Frais de parc, petit-déjeuner et dîner dans un camp confort", "Parkgebühren, Frühstück und Abendessen im Comfort-Camp", "公园费，舒适营的早餐与晚餐", "Tasas del parque, desayuno y cena en un campamento comfort", "Сборы парка, завтрак и ужин в комфорт-лагере"),
      C("Fewer vehicles than the July–October rush", "Magari machache kuliko haraka ya Julai–Oktoba", "Moins de véhicules que la ruée de juillet à octobre", "Weniger Fahrzeuge als im Juli–Oktober-Andrang", "车辆少于7至10月旺季", "Menos vehículos que la avalancha de julio a octubre", "Меньше машин, чем в пике июля–октября"),
    ],
    price: C("From $1,190 pp", "Kuanzia $1,190 kwa mtu", "Dès 1 190 $ / pers.", "Ab 1.190 $ p. P.", "起价 $1,190 /人", "Desde $1,190 / pers.", "От $1,190 / чел."),
  },
  {
    tag: C("Bundle", "Kifurushi", "Formule", "Paket", "组合", "Paquete", "Пакет"),
    title: C("Safari + Zanzibar week", "Wiki ya safari + Zanzibar", "Semaine safari + Zanzibar", "Safari + Sansibar Woche", "safari + 桑给巴尔一周", "Semana safari + Zanzíbar", "Неделя сафари + Занзибар"),
    text: C(
      "A full week that does not rush the parks or the beach. Four days on the northern circuit, then three nights on the east coast of Zanzibar, with the spice farms and the sea after the dust.",
      "Wiki nzima isiyokimbiza mbuga wala pwani. Siku nne kwenye mzunguko wa kaskazini, kisha usiku tatu pwani ya mashariki ya Zanzibar, na mashamba ya viungo baada ya vumbi.",
      "Une semaine entière, sans presser les parcs ni la plage. Quatre jours sur le circuit nord, puis trois nuits sur la côte est de Zanzibar, épices et mer après la poussière.",
      "Eine volle Woche, ohne Parks oder Strand zu hetzen. Vier Tage auf dem Nordkreis, dann drei Nächte an der Ostküste Sansibars, Gewürze und Meer nach dem Staub.",
      "一整周，公园和海滩都不赶。北部线路四天，再到桑给巴尔东岸三晚，尘土之后是香料园与大海。",
      "Una semana entera, sin apurar parques ni playa. Cuatro días en el circuito norte y tres noches en la costa este de Zanzíbar, especias y mar después del polvo.",
      "Полная неделя без спешки. Четыре дня северного круга, затем три ночи на восточном берегу Занзибара — специи и море после пыли.",
    ),
    points: [
      C("Tarangire or Manyara, Ngorongoro, and a Serengeti day", "Tarangire au Manyara, Ngorongoro, na siku ya Serengeti", "Tarangire ou Manyara, Ngorongoro et une journée au Serengeti", "Tarangire oder Manyara, Ngorongoro und ein Serengeti-Tag", "塔兰吉雷或马尼亚拉、恩戈罗恩戈罗，以及一天塞伦盖蒂", "Tarangire o Manyara, Ngorongoro y un día en el Serengeti", "Тарангире или Маньяра, Нгоронгоро и день в Серенгети"),
      C("Three nights in a beach villa on the east coast", "Usiku tatu kwenye villa ya pwani mashariki", "Trois nuits dans une villa de la côte est", "Drei Nächte in einer Strandvilla an der Ostküste", "东岸海滩别墅三晚", "Tres noches en una villa de la costa este", "Три ночи на пляжной вилле восточного берега"),
      C("Mainland transfers and a guided spice-farm visit", "Usafiri wa bara na matembezi ya shamba la viungo", "Transferts sur le continent et visite guidée d’une ferme aux épices", "Festlandtransfers und ein geführter Gewürzfarmbesuch", "大陆接送与香料园导览", "Traslados en el continente y visita guiada a una granja de especias", "Трансферы на материке и экскурсия на плантацию пряностей"),
      C("The flight to Zanzibar is quoted with the plan, not hidden inside the from-price", "Ndege ya Zanzibar inaandikwa kwenye mpango, haifichwi ndani ya bei ya kuanzia", "Le vol pour Zanzibar est indiqué dans le plan, pas caché dans le prix « dès »", "Der Flug nach Sansibar steht im Plan, nicht versteckt im Ab-Preis", "飞往桑给巴尔的航班写在计划里，不藏在起价中", "El vuelo a Zanzíbar va en el plan, no escondido en el precio «desde»", "Перелёт на Занзибар указан в плане, а не спрятан в цене «от»"),
    ],
    price: C("From $2,150 pp", "Kuanzia $2,150 kwa mtu", "Dès 2 150 $ / pers.", "Ab 2.150 $ p. P.", "起价 $2,150 /人", "Desde $2,150 / pers.", "От $2,150 / чел."),
  },
  {
    tag: C("Honeymoon", "Honeymoon", "Lune de miel", "Flitterwochen", "蜜月", "Luna de miel", "Медовый месяц"),
    title: C("Private crater & coast", "Crater na pwani ya faragha", "Cratère et côte en privé", "Privater Krater & Küste", "私人火山口与海岸", "Cráter y costa privados", "Частный кратер и побережье"),
    text: C(
      "A private week for two. One night on the Ngorongoro rim, one night under canvas, then a quiet villa on Zanzibar with breakfast and the sea in front of you. The vehicle does not share the day with anyone else.",
      "Wiki ya faragha kwa watu wawili. Usiku mmoja ukingoni mwa Ngorongoro, usiku mmoja hemani, kisha villa tulivu Zanzibar yenye kifungua kinywa na bahari mbele yenu. Gari halishiriki siku na mtu mwingine.",
      "Une semaine privée pour deux. Une nuit sur le rebord du Ngorongoro, une nuit sous toile, puis une villa calme à Zanzibar, petit-déjeuner et mer devant vous. Le véhicule ne partage la journée avec personne.",
      "Eine private Woche zu zweit. Eine Nacht am Ngorongoro-Rand, eine Nacht unter Canvas, dann eine ruhige Villa auf Sansibar mit Frühstück und Meer. Das Fahrzeug teilt den Tag mit niemandem.",
      "两人的私人一周。恩戈罗恩戈罗边缘一晚，帐篷一晚，再到桑给巴尔安静别墅，含早餐，海就在面前。车辆不与他人共用。",
      "Una semana privada para dos. Una noche en el borde de Ngorongoro, una noche bajo lona y luego una villa tranquila en Zanzíbar con desayuno y el mar delante. El vehículo no comparte el día.",
      "Частная неделя для двоих. Ночь на кромке Нгоронгоро, ночь под парусиной, затем тихая вилла на Занзибаре с завтраком и морем. Машина ни с кем не делится.",
    ),
    points: [
      C("Private 4×4 and guide, paced for two", "4×4 na kiongozi wa faragha, kwa kasi ya watu wawili", "4×4 et guide privés, au rythme de deux", "Privates 4×4 und Guide, im Tempo von zwei", "私人越野车与向导，按两人的节奏", "4×4 y guía privados, al ritmo de dos", "Частный 4×4 и гид, в темпе двоих"),
      C("Ngorongoro rim lodge and one night in a tented camp", "Lodge ya ukingo wa Ngorongoro na usiku mmoja kwenye kambi ya hema", "Lodge du rebord du Ngorongoro et une nuit en camp sous tente", "Lodge am Kraterrand und eine Nacht im Zeltcamp", "恩戈罗恩戈罗边缘小屋，帐篷营一晚", "Lodge del borde de Ngorongoro y una noche en campamento", "Лодж на кромке Нгоронгоро и ночь в палаточном лагере"),
      C("Three nights in a Zanzibar villa, breakfast included", "Usiku tatu kwenye villa ya Zanzibar, kifungua kinywa pamoja", "Trois nuits dans une villa à Zanzibar, petit-déjeuner inclus", "Drei Nächte in einer Sansibar-Villa, Frühstück inklusive", "桑给巴尔别墅三晚，含早餐", "Tres noches en una villa de Zanzíbar, desayuno incluido", "Три ночи на вилле Занзибара, завтрак включён"),
      C("One bush dinner or sundowner, arranged with the camp", "Chakula kimoja cha porini au sundowner, kupangwa na kambi", "Un dîner en brousse ou un sundowner, organisé avec le camp", "Ein Buschdinner oder Sundowner, mit dem Camp abgesprochen", "一次丛林晚餐或日落酒会，由营地安排", "Una cena en el bush o un sundowner, con el campamento", "Один ужин в буше или сандаунер, с лагерем"),
    ],
    price: C("From $2,680 pp", "Kuanzia $2,680 kwa mtu", "Dès 2 680 $ / pers.", "Ab 2.680 $ p. P.", "起价 $2,680 /人", "Desde $2,680 / pers.", "От $2,680 / чел."),
  },
];
export const camps = [
  {
    title: C("Tanzania Safari Lodge", "Tanzania Safari Lodge", "Tanzania Safari Lodge", "Tanzania Safari Lodge", "坦桑尼亚Safari Lodge", "Tanzania Safari Lodge", "Tanzania Safari Lodge"),
    place: C("Arusha · Tengeru", "Arusha · Tengeru", "Arusha · Tengeru", "Arusha · Tengeru", "阿鲁沙 · 滕盖鲁", "Arusha · Tengeru", "Аруша · Тенгеру"),
    kind: C("Lodge", "Lodge", "Lodge", "Lodge", "小屋", "Lodge", "Лодж"),
    image: "/camps/tanzania-safari.jpg"
  },
  {
    title: C("Lake Duluti Lodge", "Lake Duluti Lodge", "Lake Duluti Lodge", "Lake Duluti Lodge", "杜卢蒂湖Lodge", "Lake Duluti Lodge", "Лодж озера Дулути"),
    place: C("Arusha · Lake Duluti", "Arusha · Ziwa Duluti", "Arusha · lac Duluti", "Arusha · Duluti-See", "阿鲁沙 · 杜卢蒂湖", "Arusha · lago Duluti", "Аруша · озеро Дулути"),
    kind: C("Lodge", "Lodge", "Lodge", "Lodge", "小屋", "Lodge", "Лодж"),
    image: "/camps/duluti.jpg"
  },
  {
    title: C("Four Seasons Safari Lodge", "Four Seasons Safari Lodge", "Four Seasons Safari Lodge", "Four Seasons Safari Lodge", "四季Safari Lodge", "Four Seasons Safari Lodge", "Four Seasons Safari Lodge"),
    place: C("Serengeti National Park", "Hifadhi ya Taifa ya Serengeti", "Parc national du Serengeti", "Serengeti-Nationalpark", "塞伦盖蒂国家公园", "Parque Nacional Serengeti", "Национальный парк Серенгети"),
    kind: C("Luxury lodge", "Lodge ya starehe", "Lodge de luxe", "Luxus-Lodge", "奢华小屋", "Lodge de lujo", "Люкс-лодж"),
    image: "/camps/four-seasons.jpg"
  },
  {
    title: C("Serengeti grass camp", "Kambi ya nyasi Serengeti", "Camp d’herbe du Serengeti", "Serengeti-Grascamp", "塞伦盖蒂草原营地", "Campamento de hierba Serengeti", "Травяной лагерь Серенгети"),
    place: C("Central Serengeti", "Serengeti ya kati", "Serengeti central", "Zentrales Serengeti", "塞伦盖蒂中部", "Serengeti central", "Центральный Серенгети"),
    kind: C("Tented camp", "Kambi ya hema", "Camp sous tente", "Zeltcamp", "帐篷营", "Campamento de lona", "Палаточный лагерь"),
    image: "/camps/serengeti.jpg"
  },
  {
    title: C("Crater rim lodge", "Lodge ya crater rim", "Lodge du rebord du cratère", "Krater-Rand-Lodge", "火山口边缘小屋", "Lodge del borde del cráter", "Лодж на кромке кратера"),
    place: C("Ngorongoro", "Ngorongoro", "Ngorongoro", "Ngorongoro", "恩戈罗恩戈罗", "Ngorongoro", "Нгоронгоро"),
    kind: C("Lodge", "Lodge", "Lodge", "Lodge", "小屋", "Lodge", "Лодж"),
    image: "/camps/crater.jpg"
  },
  {
    title: C("Tarangire baobab camp", "Kambi ya baobab Tarangire", "Camp baobab de Tarangire", "Tarangire-Baobab-Camp", "塔兰吉雷猴面包营地", "Campamento baobab Tarangire", "Лагерь баобабов Тарангире"),
    place: C("Tarangire", "Tarangire", "Tarangire", "Tarangire", "塔兰吉雷", "Tarangire", "Тарангире"),
    kind: C("Tented camp", "Kambi ya hema", "Camp sous tente", "Zeltcamp", "帐篷营", "Campamento de lona", "Палаточный лагерь"),
    image: "/camps/tarangire.jpg"
  },
  {
    title: C("Arusha garden lodge", "Lodge ya bustani Arusha", "Lodge jardin d’Arusha", "Arusha-Gartenlodge", "阿鲁沙花园小屋", "Lodge jardín de Arusha", "Садовый лодж Аруши"),
    place: C("Arusha", "Arusha", "Arusha", "Arusha", "阿鲁沙", "Arusha", "Аруша"),
    kind: C("Lodge", "Lodge", "Lodge", "Lodge", "小屋", "Lodge", "Лодж"),
    image: "/camps/arusha.jpg"
  },
  {
    title: C("Zanzibar tide villa", "Villa ya wimbi Zanzibar", "Villa de marée à Zanzibar", "Sansibar-Gezeiten-Villa", "桑给巴尔潮汐别墅", "Villa de marea en Zanzíbar", "Вилла прилива Занзибар"),
    place: C("East coast, Zanzibar", "Pwani mashariki, Zanzibar", "Côte est, Zanzibar", "Ostküste, Sansibar", "桑给巴尔东岸", "Costa este, Zanzíbar", "Восточный берег, Занзибар"),
    kind: C("Beach villa", "Villa ya pwani", "Villa de plage", "Strandvilla", "海滨别墅", "Villa de playa", "Пляжная вилла"),
    image: "/camps/zanzibar.jpg"
  },
  {
    title: C("Mara river camp", "Kambi ya mto Mara", "Camp de la rivière Mara", "Mara-Fluss-Camp", "马拉河营地", "Campamento del río Mara", "Лагерь реки Мара"),
    place: C("Maasai Mara / Kenya", "Maasai Mara / Kenya", "Maasai Mara / Kenya", "Maasai Mara / Kenia", "马赛马拉 / 肯尼亚", "Maasai Mara / Kenia", "Масаи-Мара / Кения"),
    kind: C("Tented camp", "Kambi ya hema", "Camp sous tente", "Zeltcamp", "帐篷营", "Campamento de lona", "Палаточный лагерь"),
    image: "/camps/mara.jpg"
  }
];
export const foods = [
  {
    title: C("Nyama choma & ugali", "Nyama choma na ugali", "Nyama choma et ugali", "Nyama choma & Ugali", "烤肉与乌加利", "Nyama choma y ugali", "Ньяма чома и угали"),
    text: C("Fire-grilled meat with ugali, kachumbari and a cold drink after the afternoon drive.", "Nyama ya moto na ugali, kachumbari na kinywaji baada ya drive.", "Viande grillée, ugali, kachumbari et une boisson froide.", "Gegrilltes Fleisch mit Ugali, Kachumbari und einem kalten Drink.", "炭火烤肉配乌加利、卡琼巴里与冷饮。", "Carne a la brasa con ugali, kachumbari y una bebida fría.", "Мясо на огне, угали, качумбари и холодный напиток."),
    image: "/food/nyama-choma.png"
  },
  {
    title: C("Zanzibar spices", "Viungo vya Zanzibar", "Épices de Zanzibar", "Sansibar-Gewürze", "桑给巴尔香料", "Especias de Zanzíbar", "Пряности Занзибара"),
    text: C("Pilau, coconut fish and clove tea — island flavours after the parks.", "Pilau, samaki wa nazi na chai ya karafuu.", "Pilau, poisson à la coco et thé au clou de girofle.", "Pilau, Kokosfisch und Nelkentee.", "抓饭、椰汁鱼与丁香茶——公园之后的岛屿风味。", "Pilau, pescado al coco y té de clavo.", "Пилау, рыба в кокосе и чай с гвоздикой."),
    image: "/food/zanzibar.png"
  },
  {
    title: C("Bush breakfast", "Breakfast porini", "Petit-déjeuner dans le bush", "Bush-Frühstück", "荒野早餐", "Desayuno en el bush", "Завтрак в саванне"),
    text: C("Coffee, eggs and fruit set out on the plains while the light is still gold.", "Kahawa, mayai na matunda kwenye nyanda wakati mwanga bado ni wa dhahabu.", "Café, œufs et fruits sur la plaine, lumière encore dorée.", "Kaffee, Eier und Obst auf der Ebene im goldenen Licht.", "咖啡、鸡蛋与水果摆在草原上，光线仍是金色。", "Café, huevos y fruta en la llanura con luz dorada.", "Кофе, яйца и фрукты на равнине в золотом свете."),
    image: "/food/bush-breakfast.png",
    pos: "bottom"
  },
  {
    title: C("Maasai homestead meal", "Chakula cha kaya ya Maasai", "Repas dans un foyer maasaï", "Mahlzeit im Maasai-Gehöft", "马赛家园餐", "Comida en un hogar maasái", "Еда в усадьбе масаи"),
    text: C("Shared stew, stories and tea in a village visit arranged with the family.", "Mchuzi, hadithi na chai katika tembeleo la kijiji.", "Ragoût partagé, récits et thé chez une famille.", "Geteilter Eintopf, Geschichten und Tee bei der Familie.", "与家庭分享炖菜、故事与茶。", "Guiso compartido, relatos y té en una visita familiar.", "Общее рагу, истории и чай в гостях у семьи."),
    image: "/food/maasai-meal.png"
  }
];
export const testimonials = [
  {
    name: "Lena K.",
    rating: 5,
    date: "Aug 2025",
    title: C("A leopard at first light", "Chui asubuhi na mapema", "Un léopard à l’aube", "Ein Leopard im ersten Licht", "第一缕光下的豹子", "Un leopardo al alba", "Леопард на рассвете"),
    place: C("Berlin · private safari", "Berlin · safari ya faragha", "Berlin · safari privé", "Berlin · private Safari", "柏林 · 私人safari", "Berlín · safari privado", "Берлин · частное сафари"),
    quote: C("Our guide found a leopard at first light and never rushed us. Camp felt like a home, not a product.", "Kiongozi alitupatia chui asubuhi na hakutukimbiza. Kambi ilikuwa kama nyumbani.", "Notre guide a trouvé un léopard à l’aube et n’a jamais pressé. Le camp était une maison.", "Unser Guide fand einen Leoparden im ersten Licht und hetzte uns nie. Das Camp fühlte sich wie Zuhause an.", "向导在第一缕光找到豹子，从不催促。营地像家，不像商品。", "Nuestro guía halló un leopardo al alba y nunca nos apuró. El campamento se sintió como casa.", "Гид нашёл леопарда на рассвете и никуда не торопил. Лагерь был как дом.")
  },
  {
    name: "James & Priya",
    rating: 5,
    date: "Jul 2025",
    title: C("Parks then the Indian Ocean", "Mbuga kisha Bahari Hindi", "Les parcs, puis l’océan", "Parks, dann der Ozean", "公园之后是印度洋", "Parques y luego el Índico", "Парки, затем океан"),
    place: C("London · safari + Zanzibar", "London · safari + Zanzibar", "Londres · safari + Zanzibar", "London · Safari + Sansibar", "伦敦 · safari + 桑给巴尔", "Londres · safari + Zanzíbar", "Лондон · сафари + Занзибар"),
    quote: C("Four days of dust and lions, then the Indian Ocean. Eco Vibe handled both without a seam.", "Siku nne za vumbi na simba, kisha Bahari Hindi. Eco Vibe ilishughulikia vyote bila pengo.", "Quatre jours de poussière et de lions, puis l’océan Indien. Eco Vibe a tout lié sans couture.", "Vier Tage Staub und Löwen, dann der Indische Ozean. Eco Vibe hat beides nahtlos verbunden.", "四天尘土与狮子，然后是印度洋。Eco Vibe把两端衔接得没有缝。", "Cuatro días de polvo y leones, luego el Índico. Eco Vibe unió ambos sin costura.", "Четыре дня пыли и львов, затем Индийский океан. Eco Vibe связала всё без шва.")
  },
  {
    name: "Carlos M.",
    rating: 5,
    date: "Jun 2025",
    title: C("Best migration light I have shot", "Mwanga bora wa uhamiaji niliowahi piga", "La meilleure lumière de migration", "Bestes Migrationslicht", "我拍过最好的迁徙光线", "La mejor luz de migración", "Лучший свет миграции"),
    place: C("Madrid · photographic", "Madrid · photographic", "Madrid · photographique", "Madrid · Fotografie", "马德里 · 摄影", "Madrid · fotográfico", "Мадрид · фото"),
    quote: C("Beanbags, patience, and a driver who understood lenses. Best migration light I have shot.", "Beanbags, subira, na dereva anayeelewa lens. Mwanga bora wa uhamiaji niliowahi piga.", "Sacs de grains, patience, et un chauffeur qui comprend les optiques. Meilleure lumière de migration.", "Bohnensäcke, Geduld und ein Fahrer, der Objektive versteht. Bestes Migrationslicht.", "豆袋、耐心，以及懂镜头的司机。我拍过最好的迁徙光线。", "Sacos, paciencia y un conductor que entiende lentes. La mejor luz de migración.", "Мешки, терпение и водитель, который понимает оптику. Лучший свет миграции.")
  },
  {
    name: "Amina N.",
    rating: 5,
    date: "Feb 2025",
    title: C("Uhuru Peak with a calm crew", "Uhuru Peak na timu tulivu", "Uhuru Peak, équipe calme", "Uhuru Peak mit ruhigem Team", "与从容团队登顶 Uhuru Peak", "Uhuru Peak con un equipo sereno", "Uhuru Peak со спокойной командой"),
    place: C("Dar es Salaam · Kilimanjaro", "Dar es Salaam · Kilimanjaro", "Dar es Salaam · Kilimandjaro", "Daressalam · Kilimandscharo", "达累斯萨拉姆 · 乞力马扎罗", "Dar es Salaam · Kilimanjaro", "Дар-эс-Салам · Килиманджаро"),
    quote: C("The mountain crew paced us well and the safety talk was real. Summit day felt hard, never chaotic.", "Timu ya mlima ilitupa kasi nzuri na usalama ulikuwa wa kweli. Siku ya kilele ilikuwa ngumu, si fujo.", "L’équipe a géré le rythme et la sécurité. Le jour du sommet était dur, jamais chaotique.", "Das Bergteam hat das Tempo und die Sicherheit ernst genommen. Gipfeltag hart, nie chaotisch.", "登山队节奏稳、安全说明认真。登顶日辛苦，但不乱。", "El equipo midió el ritmo y la seguridad. El día de cumbre fue duro, nunca caótico.", "Горная команда держала темп и безопасность. День вершины был тяжёлым, но не хаосом.")
  }
];
export const team = [{
  name: "Kassim Ayubu",
  initials: "KA",
  role: C("Founder & CEO", "Mwanzilishi na Mkurugenzi", "Fondateur et PDG", "Gründer & CEO", "创始人兼首席执行官", "Fundador y CEO", "Основатель и CEO"),
  bio: C("Kassim built Eco Vibe Safari in Arusha as a local house for honest park days, mountain treks and island rest. He sets the tone for how guests are met, which camps we book, and how crews look after the land.", "Kassim alianzisha Eco Vibe Safari Arusha kama nyumba ya ndani ya safari za kweli: mbuga, milima na visiwa. Yeye huongoza jinsi wageni wanavyopokelewa, kambi tunazohifadhi, na jinsi timu inavyotunza mazingira.", "Kassim a fondé Eco Vibe Safari à Arusha pour des safaris honnêtes, des treks et le repos insulaire. Il fixe l’accueil, les camps et le soin de la terre.", "Kassim gründete Eco Vibe Safari in Arusha für ehrliche Parktage, Bergtreks und Inselruhe. Er prägt Empfang, Camps und den Umgang mit dem Land.", "Kassim在阿鲁沙创立Eco Vibe Safari，做诚实的公园行程、登山与海岛休整。他决定如何接待客人、预订哪些营地，以及团队如何照顾这片土地。", "Kassim fundó Eco Vibe Safari en Arusha para días honestos de parque, treks y descanso en isla. Marca cómo se recibe a los huéspedes, qué campamentos reservamos y cómo se cuida la tierra.", "Кассим основал Eco Vibe Safari в Аруше — честные дни в парках, горные треки и отдых на островах. Он задаёт приём гостей, выбор лагерей и заботу о земле.")
}, {
  name: "Iren Vence",
  initials: "IV",
  role: C("Tour operations", "Uendeshaji wa safari", "Opérations tours", "Tour-Operation", "行程运营", "Operaciones de tours", "Туроператор"),
  bio: C("Iren runs the day-to-day of every itinerary: vehicles, park fees, lodge rooms, mountain crews and the timing of game drives. Guests feel a quiet trip because she holds the moving parts.", "Iren huendesha kila ratiba: magari, ada za mbuga, vyumba, timu za mlima na muda wa game drives. Wageni wanahisi safari tulivu kwa sababu yeye anashika sehemu zote zinazotembea.", "Iren gère le quotidien de chaque itinéraire : véhicules, frais de parc, chambres, équipes de montagne et horaires des game drives.", "Iren führt den Alltag jeder Route: Fahrzeuge, Parkgebühren, Zimmer, Bergteams und die Taktung der Gamedrives.", "Iren负责每个行程的日常：车辆、公园费、房间、登山队与巡游时间。客人感到从容，是因为她抓住了所有环节。", "Iren lleva el día a día de cada itinerario: vehículos, tasas, habitaciones, equipos de montaña y el ritmo de los game drives.", "Ирен ведёт каждый маршрут: машины, сборы парков, номера, горные команды и расписание выездов.")
}];
export const partnerships = [
  {
    title: C("Lodge partners", "Washirika wa lodges", "Partenaires lodges", "Lodge-Partner", "小屋合作", "Socios de lodges", "Партнёры-лоджи"),
    text: C("We book Tanzania Safari Lodge, Lake Duluti Lodge, Four Seasons Safari Lodge Serengeti and canvas camps across the northern circuit — rooms held in your name, not a generic allotment.", "Tunahifadhi Tanzania Safari Lodge, Lake Duluti Lodge, Four Seasons Safari Lodge Serengeti na kambi za hema kwenye mzunguko wa kaskazini.", "Nous réservons Tanzania Safari Lodge, Lake Duluti Lodge, Four Seasons Serengeti et des camps sous toile du circuit nord.", "Wir buchen Tanzania Safari Lodge, Lake Duluti Lodge, Four Seasons Serengeti und Canvas-Camps im Nordkreis.", "我们预订 Tanzania Safari Lodge、Lake Duluti Lodge、四季塞伦盖蒂与北部线路帐篷营。", "Reservamos Tanzania Safari Lodge, Lake Duluti Lodge, Four Seasons Serengeti y campamentos de lona del norte.", "Бронируем Tanzania Safari Lodge, Lake Duluti Lodge, Four Seasons Серенгети и палаточные лагеря севера.")
  },
  {
    title: C("Parks & conservation", "Mbuga na uhifadhi", "Parcs et conservation", "Parks & Naturschutz", "公园与保护", "Parques y conservación", "Парки и охрана"),
    text: C("Park fees go to TANAPA and the Ngorongoro Conservation Area. We keep vehicle numbers honest and stay on designated tracks so the land stays wild for the next season.", "Ada za mbuga huenda TANAPA na Ngorongoro Conservation Area. Tunadumisha idadi ya magari na njia zilizoruhusiwa.", "Les frais de parc vont à TANAPA et à la NCAA. Nous limitons les véhicules et restons sur les pistes.", "Parkgebühren gehen an TANAPA und die NCAA. Wenige Fahrzeuge, markierte Spuren.", "公园费交给 TANAPA 与恩戈罗恩戈罗保护区。车辆数量诚实，只走指定路线。", "Las tasas van a TANAPA y la NCAA. Pocos vehículos, pistas señaladas.", "Сборы парков — TANAPA и NCAA. Честное число машин, только разрешённые пути.")
  },
  {
    title: C("Community & culture", "Jamii na utamaduni", "Communauté et culture", "Gemeinde & Kultur", "社区与文化", "Comunidad y cultura", "Община и культура"),
    text: C("Village visits, Maasai boma days and cultural meals are arranged with families who host — not as a roadside show. Fees stay with the homestead.", "Tembeleo la kijiji, boma ya Maasai na milo ya kitamaduni hupangwa na familia wanaokaribisha. Ada inabaki kaya.", "Visites de village, boma maasaï et repas culturels avec les familles hôtes. Les frais restent au foyer.", "Dorfgänge, Maasai-Boma und Kulturmahlzeiten mit Gastfamilien. Gebühren bleiben im Gehöft.", "村落、马赛家园与文化餐与接待家庭安排，费用留在家园。", "Visitas de pueblo, boma maasái y comidas culturales con las familias. Las tarifas quedan en el hogar.", "Визиты в деревни, бома масаи и культурная еда с семьями. Плата остаётся в усадьбе.")
  },
  {
    title: C("Mountain crews", "Timu za milima", "Équipes de montagne", "Bergteams", "登山队", "Equipos de montaña", "Горные команды"),
    text: C("Kilimanjaro and Mount Meru treks run with licensed local guides, porters and cooks. Fair wages, measured loads and a medical kit on every climb.", "Trek za Kilimanjaro na Mount Meru na viongozi, wabebaji na wapishi wenye leseni. Mishahara ya haki na vifaa vya dharura.", "Treks du Kilimandjaro et du Meru avec guides, porteurs et cuisiniers licenciés. Salaires justes, charges mesurées.", "Treks auf Kilimandscharo und Meru mit lizenzierten Guides, Trägern und Köchen. Faire Löhne, klare Lasten.", "乞力马扎罗与梅鲁徒步由持证向导、背夫与厨师执行。公平工资、限重与急救包。", "Treks al Kilimanjaro y Meru con guías, porteadores y cocineros con licencia. Salarios justos.", "Треки на Килиманджаро и Меру с лицензированными гидами, носильщиками и поварами. Честная оплата.")
  },
  {
    title: C("Transport partners", "Washirika wa usafiri", "Partenaires transport", "Transportpartner", "交通合作", "Socios de transporte", "Транспортные партнёры"),
    text: C("Pop-up 4×4 fleets from Arusha, scheduled airstrips into the Serengeti and Zanzibar, and private transfers when a family needs the whole vehicle.", "Magari 4×4 kutoka Arusha, ndege za mbuga na Zanzibar, na transfer za faragha familia inapohitaji gari zima.", "Flottes 4×4 depuis Arusha, pistes d’atterrissage Serengeti et Zanzibar, transferts privés.", "4×4-Flotten ab Arusha, Landepisten im Serengeti und Sansibar, private Transfers.", "阿鲁沙掀顶越野车、塞伦盖蒂与桑给巴尔机场、以及家庭包车。", "Flotas 4×4 desde Arusha, pistas en Serengeti y Zanzíbar, traslados privados.", "Парк 4×4 из Аруши, полосы в Серенгети и Занзибаре, частные трансферы.")
  },
  {
    title: C("Trade & agents", "Biashara na mawakala", "Commerce et agences", "Handel & Agenturen", "同行与代理", "Agencias y comercio", "Агентства и торговля"),
    text: C("We work with overseas agents and planners who want a local Arusha desk — clear net rates, WhatsApp updates, and a named operations contact for every file.", "Tunafanya kazi na mawakala nje ya nchi wanaotaka dawati la Arusha — bei wazi, WhatsApp, na mtu wa operations kwa kila faili.", "Nous travaillons avec des agences qui veulent un bureau local à Arusha — tarifs nets, WhatsApp, contact opérations nommé.", "Wir arbeiten mit Agenturen, die ein Büro in Arusha wollen — Nettoraten, WhatsApp, fester Operationskontakt.", "我们与需要阿鲁沙本地柜台的海外代理合作：净价、WhatsApp、每个档案都有运营对接人。", "Trabajamos con agencias que quieren un escritorio local en Arusha: tarifas netas, WhatsApp y un contacto de operaciones.", "Работаем с агентствами, которым нужен стол в Аруше: нетто-цены, WhatsApp и именной контакт.")
  }
];
export const pricingGroups = [
  {
    key: "tanzania",
    flag: "🇹🇿",
    region: C("Tanzania safaris", "Safari za Tanzania", "Safaris Tanzanie", "Tansania-Safaris", "坦桑尼亚safari", "Safaris de Tanzania", "Сафари Танзании"),
    intro: C("Migration circuits and a Zanzibar week from Arusha.", "Mizunguko ya uhamiaji na wiki ya Zanzibar kutoka Arusha.", "Circuits de migration et une semaine à Zanzibar.", "Migrationsrouten und eine Sansibar-Woche ab Arusha.", "迁徙线路与从阿鲁沙出发的桑给巴尔一周。", "Circuitos de migración y una semana en Zanzíbar.", "Миграционные маршруты и неделя на Занзибаре."),
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1400&q=80",
    packages: [
      {
        title: C("8 days Tanzania Migration", "Siku 8 — Uhamiaji Tanzania", "8 jours Migration Tanzanie", "8 Tage Tansania-Migration", "8天坦桑尼亚迁徙", "8 días Migración Tanzania", "8 дней миграции Танзании"),
        comfort: "$6,998",
        luxury: "$8,748",
        vip: "$11,543",
      },
      {
        title: C("9 days Tanzania Migration", "Siku 9 — Uhamiaji Tanzania", "9 jours Migration Tanzanie", "9 Tage Tansania-Migration", "9天坦桑尼亚迁徙", "9 días Migración Tanzania", "9 дней миграции Танзании"),
        comfort: "$7,727",
        luxury: "$9,720",
        vip: "$12,758",
      },
      {
        title: C("7 days Zanzibar", "Siku 7 — Zanzibar", "7 jours Zanzibar", "7 Tage Sansibar", "7天桑给巴尔", "7 días Zanzíbar", "7 дней Занзибар"),
        comfort: "$3,645",
        luxury: "$4,860",
        vip: "$6,683",
      },
    ],
  },
  {
    key: "kenya",
    flag: "🇹🇿🇰🇪",
    region: C("Kenya + Tanzania", "Kenya + Tanzania", "Kenya + Tanzanie", "Kenia + Tansania", "肯尼亚 + 坦桑尼亚", "Kenia + Tanzania", "Кения + Танзания"),
    intro: C("Cross-border herds, Mara river and the northern circuit.", "Makundi kuvuka mipaka, mto Mara na mzunguko wa kaskazini.", "Troupeaux transfrontaliers, rivière Mara et circuit nord.", "Grenzüberschreitende Herden, Mara-Fluss und Nordkreis.", "跨境兽群、马拉河与北部线路。", "Manadas transfronterizas, río Mara y circuito norte.", "Стада через границу, река Мара и северный круг."),
    image: "https://images.unsplash.com/photo-1547970810-dcad79a56c1e?auto=format&fit=crop&w=1400&q=80",
    packages: [
      {
        title: C("10 days Kenya & Tanzania safari", "Siku 10 — Kenya na Tanzania", "10 jours Kenya et Tanzanie", "10 Tage Kenia & Tansania", "10天肯尼亚与坦桑尼亚", "10 días Kenia y Tanzania", "10 дней Кения и Танзания"),
        comfort: "$10,206",
        luxury: "$12,758",
        vip: "$16,403",
      },
    ],
  },
  {
    key: "uganda",
    flag: "🇹🇿🇺🇬",
    region: C("Tanzania + Uganda", "Tanzania + Uganda", "Tanzanie + Ouganda", "Tansania + Uganda", "坦桑尼亚 + 乌干达", "Tanzania + Uganda", "Танзания + Уганда"),
    intro: C("Plains then primates — gorilla and chimpanzee country.", "Nyanda kisha sokwe — nchi ya gorilla na chimpanzee.", "Plaines puis primates — gorilles et chimpanzés.", "Ebenen, dann Primaten — Gorillas und Schimpansen.", "草原之后是灵长类——大猩猩与黑猩猩。", "Llanuras y luego primates — gorilas y chimpancés.", "Равнины, затем приматы — гориллы и шимпанзе."),
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80",
    packages: [
      {
        title: C("10 days Tanzania & Uganda", "Siku 10 — Tanzania na Uganda", "10 jours Tanzanie et Ouganda", "10 Tage Tansania & Uganda", "10天坦桑尼亚与乌干达", "10 días Tanzania y Uganda", "10 дней Танзания и Уганда"),
        comfort: "$10,328",
        luxury: "$13,973",
        vip: "$18,225",
      },
      {
        title: C("12 days Tanzania & Uganda", "Siku 12 — Tanzania na Uganda", "12 jours Tanzanie et Ouganda", "12 Tage Tansania & Uganda", "12天坦桑尼亚与乌干达", "12 días Tanzania y Uganda", "12 дней Танзания и Уганда"),
        comfort: "$13,973",
        luxury: "$17,618",
        vip: "$21,870",
      },
      {
        title: C("14 days Tanzania & Uganda", "Siku 14 — Tanzania na Uganda", "14 jours Tanzanie et Ouganda", "14 Tage Tansania & Uganda", "14天坦桑尼亚与乌干达", "14 días Tanzania y Uganda", "14 дней Танзания и Уганда"),
        comfort: "$17,618",
        luxury: "$21,263",
        vip: "$25,515",
      },
      {
        title: C("16 days Tanzania & Uganda", "Siku 16 — Tanzania na Uganda", "16 jours Tanzanie et Ouganda", "16 Tage Tansania & Uganda", "16天坦桑尼亚与乌干达", "16 días Tanzania y Uganda", "16 дней Танзания и Уганда"),
        comfort: "$19,440",
        luxury: "$22,478",
        vip: "$27,945",
      },
    ],
  },
  {
    key: "rwanda",
    flag: "🇷🇼",
    region: C("Tanzania + Rwanda", "Tanzania + Rwanda", "Tanzanie + Rwanda", "Tansania + Ruanda", "坦桑尼亚 + 卢旺达", "Tanzania + Ruanda", "Танзания + Руанда"),
    intro: C("Savannah days, then mist and gorilla trekking in the volcanoes.", "Siku za savanna, kisha ukungu na trek ya sokwe milimani.", "Jours de savane, puis brume et trekking des gorilles.", "Savannentage, dann Nebel und Gorilla-Trekking.", "草原之后是薄雾与火山大猩猩徒步。", "Días de sabana, luego niebla y trekking de gorilas.", "Дни саванны, затем туман и треккинг к гориллам."),
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80",
    packages: [
      {
        title: C("10 days Tanzania & Rwanda", "Siku 10 — Tanzania na Rwanda", "10 jours Tanzanie et Rwanda", "10 Tage Tansania & Ruanda", "10天坦桑尼亚与卢旺达", "10 días Tanzania y Ruanda", "10 дней Танзания и Руанда"),
        comfort: "$11,543",
        luxury: "$15,795",
        vip: "$20,655",
      },
      {
        title: C("12 days Tanzania & Rwanda", "Siku 12 — Tanzania na Rwanda", "12 jours Tanzanie et Rwanda", "12 Tage Tansania & Ruanda", "12天坦桑尼亚与卢旺达", "12 días Tanzania y Ruanda", "12 дней Танзания и Руанда"),
        comfort: "$15,188",
        luxury: "$19,440",
        vip: "$25,515",
      },
      {
        title: C("14 days Tanzania & Rwanda", "Siku 14 — Tanzania na Rwanda", "14 jours Tanzanie et Rwanda", "14 Tage Tansania & Ruanda", "14天坦桑尼亚与卢旺达", "14 días Tanzania y Ruanda", "14 дней Танзания и Руанда"),
        comfort: "$18,225",
        luxury: "$23,085",
        vip: "$30,375",
      },
      {
        title: C("16 days Tanzania & Rwanda", "Siku 16 — Tanzania na Rwanda", "16 jours Tanzanie et Rwanda", "16 Tage Tansania & Ruanda", "16天坦桑尼亚与卢旺达", "16 días Tanzania y Ruanda", "16 дней Танзания и Руанда"),
        comfort: "$20,655",
        luxury: "$26,730",
        vip: "$34,020",
      },
    ],
  },
];

export const pricingIncluded = [
  C("Private 4×4 safari vehicle", "Gari la safari 4×4 la faragha", "Véhicule safari 4×4 privé", "Privates 4×4-Safarifahrzeug", "私人掀顶越野车", "Vehículo safari 4×4 privado", "Частный сафари 4×4"),
  C("Professional English-speaking safari guide", "Kiongozi wa safari anayezungumza Kiingereza", "Guide safari anglophone", "Englischsprachiger Safariguide", "专业英语safari向导", "Guía safari de habla inglesa", "Англоязычный сафари-гид"),
  C("Accommodation according to selected category", "Malazi kulingana na kundi ulilochagua", "Hébergement selon la catégorie", "Unterkunft laut gewählter Kategorie", "按所选等级住宿", "Alojamiento según la categoría", "Проживание по выбранной категории"),
  C("Daily breakfast, lunch and dinner as specified", "Breakfast, lunch na dinner kama ilivyoelezwa", "Petit-déjeuner, déjeuner et dîner selon le programme", "Frühstück, Mittag- und Abendessen laut Programm", "按行程的每日早午晚餐", "Desayuno, almuerzo y cena según el itinerario", "Завтрак, обед и ужин по программе"),
  C("National park and conservation fees", "Ada za mbuga na uhifadhi", "Frais de parcs nationaux et de conservation", "Nationalpark- und Naturschutzgebühren", "国家公园与保护费", "Tasas de parques y conservación", "Сборы нацпарков и охраны"),
  C("Game drives as included in the itinerary", "Game drives zilizo kwenye ratiba", "Game drives inclus dans l’itinéraire", "Gamedrives laut Reiseplan", "行程内的观兽巡游", "Game drives del itinerario", "Гейм-драйвы по маршруту"),
  C("Airport and hotel transfers", "Uhamisho wa uwanja na hoteli", "Transferts aéroport et hôtel", "Flughafen- und Hoteltransfers", "机场与酒店接送", "Traslados aeropuerto y hotel", "Трансферы аэропорт и отель"),
  C("Bottled drinking water during safari", "Maji ya chupa wakati wa safari", "Eau en bouteille pendant le safari", "Flaschenwasser während der Safari", "safari期间瓶装饮用水", "Agua embotellada durante el safari", "Бутилированная вода на сафари"),
  C("All activities specifically listed in the itinerary", "Shughuli zote zilizoandikwa kwenye ratiba", "Toutes les activités listées", "Alle im Plan genannten Aktivitäten", "行程明确列出的全部活动", "Todas las actividades del itinerario", "Все активности из маршрута"),
  C("Border-crossing assistance where applicable", "Msaada wa kuvuka mpaka inapohitajika", "Aide aux passages de frontière", "Hilfe an der Grenze wo nötig", "适用时的过境协助", "Asistencia en cruces de frontera", "Помощь на границе при необходимости"),
  C("Government taxes and applicable service charges", "Kodi za serikali na ada za huduma", "Taxes et frais de service", "Steuern und Servicegebühren", "政府税与服务费", "Impuestos y cargos de servicio", "Налоги и сервисные сборы"),
  C("Emergency assistance during the safari", "Msaada wa dharura wakati wa safari", "Assistance d’urgence pendant le safari", "Notfallhilfe während der Safari", "safari期间紧急协助", "Asistencia de emergencia durante el safari", "Экстренная помощь на сафари"),
];

export const pricingUgandaRwanda = [
  C("Gorilla trekking permit", "Kibali cha trek ya sokwe", "Permis de trekking gorille", "Gorilla-Trekking-Permit", "大猩猩徒步许可证", "Permiso de trekking de gorilas", "Разрешение на треккинг к гориллам"),
  C("Chimpanzee trekking permit", "Kibali cha trek ya chimpanzee", "Permis de trekking chimpanzé", "Schimpansen-Trekking-Permit", "黑猩猩徒步许可证", "Permiso de trekking de chimpancés", "Разрешение на треккинг к шимпанзе"),
  C("Wildlife park fees", "Ada za mbuga za wanyama", "Frais de parcs fauniques", "Wildparkgebühren", "野生动物园费用", "Tasas de parques de fauna", "Сборы парков дикой природы"),
  C("Local trekking / ranger services", "Huduma za trek na ranger za hapa", "Services de trekking et rangers locaux", "Lokale Trekking- und Rangerdienste", "本地徒步/护林服务", "Servicios locales de trekking y ranger", "Местные треккинг и рейнджеры"),
];

export const pricingExcluded = [
  C("International flights", "Ndege za kimataifa", "Vols internationaux", "Internationale Flüge", "国际机票", "Vuelos internacionales", "Международные рейсы"),
  C("Visa fees", "Ada za visa", "Frais de visa", "Visagebühren", "签证费", "Tasas de visado", "Визовые сборы"),
  C("Travel insurance", "Bima ya safari", "Assurance voyage", "Reiseversicherung", "旅行保险", "Seguro de viaje", "Страховка"),
  C("Personal expenses", "Gharama binafsi", "Dépenses personnelles", "Persönliche Ausgaben", "个人开销", "Gastos personales", "Личные расходы"),
  C("Alcoholic drinks and premium beverages", "Vinywaji vya kilevi na vya bei ya juu", "Boissons alcoolisées et premium", "Alkohol und Premium-Getränke", "酒精与高端饮品", "Bebidas alcohólicas y premium", "Алкоголь и премиум-напитки"),
  C("Laundry services", "Huduma ya kufulia", "Blanchisserie", "Wäscheservice", "洗衣服务", "Lavandería", "Прачечная"),
  C("Tips and gratuities", "Tips na zawadi", "Pourboires", "Trinkgelder", "小费", "Propinas", "Чаевые"),
  C("Personal shopping and souvenirs", "Ununuzi binafsi na kumbukumbu", "Shopping et souvenirs", "Einkäufe und Souvenirs", "个人购物与纪念品", "Compras y souvenirs", "Покупки и сувениры"),
  C("Optional activities not listed as included", "Shughuli za hiari zisizo kwenye included", "Activités optionnelles non incluses", "Optionale Aktivitäten, die nicht enthalten sind", "未列入包含项的可选活动", "Actividades opcionales no incluidas", "Опции, не указанные как включённые"),
  C("Private charter flights unless specifically included", "Ndege za charter isipokuwa zimeandikwa", "Vols charter privés sauf mention", "Private Charterflüge, außer ausdrücklich enthalten", "除非明确包含的私人包机", "Vuelos chárter privados salvo inclusión", "Частные чартеры, если не указано"),
  C("Additional accommodation caused by itinerary changes", "Malazi ya ziada kwa sababu ya mabadiliko ya ratiba", "Hébergement supplémentaire dû aux changements", "Zusätzliche Unterkunft bei Planänderungen", "因行程变更产生的额外住宿", "Alojamiento extra por cambios de itinerario", "Доп. проживание из‑за смены маршрута"),
  C("Medical or evacuation expenses not covered by insurance", "Gharama za matibabu au evacuation zisizo kwenye bima", "Frais médicaux ou d’évacuation hors assurance", "Medizin- oder Evakuierungskosten ohne Versicherung", "保险未覆盖的医疗或撤离费用", "Gastos médicos o de evacuación no cubiertos", "Медицина и эвакуация вне страховки"),
  C("Any services not specifically mentioned under What’s Included", "Huduma zozote zisizotajwa kwenye What’s Included", "Tout service non listé dans What’s Included", "Leistungen, die nicht unter What’s Included stehen", "未在包含项中明确列出的任何服务", "Cualquier servicio no citado en What’s Included", "Любые услуги не из раздела What’s Included"),
];

export const pricingOptional = [
  C("Gorilla trekking", "Trek ya sokwe", "Trekking gorille", "Gorilla-Trekking", "大猩猩徒步", "Trekking de gorilas", "Треккинг к гориллам"),
  C("Chimpanzee trekking", "Trek ya chimpanzee", "Trekking chimpanzé", "Schimpansen-Trekking", "黑猩猩徒步", "Trekking de chimpancés", "Треккинг к шимпанзе"),
  C("Hot air balloon safari", "Safari ya balloon", "Safari en montgolfière", "Heißluftballon-Safari", "热气球safari", "Safari en globo", "Сафари на воздушном шаре"),
  C("Night game drive", "Game drive ya usiku", "Game drive de nuit", "Nacht-Gamedrive", "夜间观兽", "Game drive nocturno", "Ночной гейм-драйв"),
  C("Walking safari", "Safari ya kutembea", "Safari à pied", "Walking Safari", "步行safari", "Safari a pie", "Пешее сафари"),
  C("Sundowner experience", "Sundowner", "Sundowner", "Sundowner", "日落酒会", "Sundowner", "Сандаунер"),
  C("Maasai cultural experience", "Uzoefu wa utamaduni wa Maasai", "Expérience culturelle maasaï", "Maasai-Kulturerlebnis", "马赛文化体验", "Experiencia cultural maasái", "Культура масаи"),
  C("Zanzibar dolphin experience", "Pomboo wa Zanzibar", "Dauphins de Zanzibar", "Delfine auf Sansibar", "桑给巴尔海豚", "Delfines de Zanzíbar", "Дельфины Занзибара"),
  C("Sunset dhow cruise", "Safari ya dau machweo", "Croisière en boutre au coucher", "Dau-Fahrt zum Sonnenuntergang", "日落独桅帆船", "Paseo en dhow al atardecer", "Круиз на дау на закате"),
  C("Scuba diving", "Kupiga mbizi", "Plongée", "Tauchen", "潜水", "Buceo", "Дайвинг"),
  C("Private beach dinner", "Chakula cha pwani cha faragha", "Dîner privé sur la plage", "Privates Abendessen am Strand", "私人海滩晚餐", "Cena privada en la playa", "Ужин на пляже"),
  C("Coffee farm experience", "Tembeleo la shamba la kahawa", "Visite de plantation de café", "Kaffeeplantagen-Erlebnis", "咖啡农场体验", "Experiencia en finca de café", "Кофейная ферма"),
];

export const hikingMountains = [
  {
    key: "kilimanjaro",
    name: C("Mount Kilimanjaro", "Mlima Kilimanjaro", "Mont Kilimandjaro", "Kilimandscharo", "乞力马扎罗山", "Monte Kilimanjaro", "Килиманджаро"),
    height: "5,895 m",
    tag: C("Roof of Africa", "Paa la Afrika", "Toit de l’Afrique", "Dach Afrikas", "非洲屋脊", "Techo de África", "Крыша Африки"),
    text: C(
      "Uhuru Peak on Kibo — the highest point in Africa. We run licensed crews, measured porter loads and the routes with the best summit chance.",
      "Uhuru Peak juu ya Kibo — sehemu ya juu kabisa Afrika. Tunaendesha timu zenye leseni na njia zenye nafasi kubwa ya kilele.",
      "Uhuru Peak sur le Kibo — le plus haut sommet d’Afrique. Équipes licenciées et les meilleures voies pour le sommet.",
      "Uhuru Peak auf dem Kibo — der höchste Punkt Afrikas. Lizenzierte Teams und die Routen mit der besten Gipfelchance.",
      "乞力马扎罗 Kibо 的 Uhuru Peak——非洲最高点。持证团队与登顶机会最大的路线。",
      "Uhuru Peak en Kibo — el punto más alto de África. Equipos con licencia y las rutas con más chance de cumbre.",
      "Ухуру-пик на Кибо — высшая точка Африки. Лицензированные команды и лучшие маршруты к вершине.",
    ),
    image: "/peaks/kilimanjaro.png",
    routes: [
      {
        title: C("Marangu route · 5–6 days", "Njia ya Marangu · siku 5–6", "Voie Marangu · 5–6 jours", "Marangu-Route · 5–6 Tage", "马兰古路线 · 5–6天", "Ruta Marangu · 5–6 días", "Маршрут Марангу · 5–6 дней"),
        price: "$1,650",
      },
      {
        title: C("Machame route · 6–7 days", "Njia ya Machame · siku 6–7", "Voie Machame · 6–7 jours", "Machame-Route · 6–7 Tage", "马查梅路线 · 6–7天", "Ruta Machame · 6–7 días", "Маршрут Мачаме · 6–7 дней"),
        price: "$1,890",
      },
      {
        title: C("Lemosho route · 7–8 days", "Njia ya Lemosho · siku 7–8", "Voie Lemosho · 7–8 jours", "Lemosho-Route · 7–8 Tage", "莱莫肖路线 · 7–8天", "Ruta Lemosho · 7–8 días", "Маршрут Лемошо · 7–8 дней"),
        price: "$2,180",
      },
      {
        title: C("Rongai route · 6–7 days", "Njia ya Rongai · siku 6–7", "Voie Rongai · 6–7 jours", "Rongai-Route · 6–7 Tage", "龙盖路线 · 6–7天", "Ruta Rongai · 6–7 días", "Маршрут Ронгаи · 6–7 дней"),
        price: "$1,980",
      },
    ],
  },
  {
    key: "meru",
    name: C("Mount Meru", "Mlima Meru", "Mont Meru", "Mount Meru", "梅鲁山", "Monte Meru", "Гора Меру"),
    height: "4,566 m",
    tag: C("Arusha National Park", "Hifadhi ya Taifa ya Arusha", "Parc national d’Arusha", "Arusha-Nationalpark", "阿鲁沙国家公园", "Parque Nacional Arusha", "Национальный парк Аруша"),
    text: C(
      "A steep, beautiful peak above Arusha. Wildlife on the trail, crater rim views, and the best training climb before Kilimanjaro.",
      "Kilele kirefu juu ya Arusha. Wanyama njiani, maoni ya crater rim, na mazoezi bora kabla ya Kilimanjaro.",
      "Un sommet raide au-dessus d’Arusha. Faune sur le sentier, vue du cratère, et la meilleure préparation avant le Kilimandjaro.",
      "Steiler Gipfel über Arusha. Wildtiere am Weg, Kraterrand, ideale Vorbereitung vor dem Kilimandscharo.",
      "阿鲁沙上方的陡峭高峰。沿途野生动物、火山口边缘景色，乞力马扎罗前的最佳适应。",
      "Cumbre empinada sobre Arusha. Fauna en el camino, borde del cráter y la mejor preparación antes del Kilimanjaro.",
      "Крутая вершина над Арушей. Животные на тропе, кромка кратера и лучшая подготовка к Килиманджаро.",
    ),
    image: "/peaks/meru.png",
    routes: [
      {
        title: C("3-day trek", "Trek ya siku 3", "Trek 3 jours", "3-Tage-Trek", "3天徒步", "Trek de 3 días", "3-дневный трек"),
        price: "$780",
      },
      {
        title: C("4-day trek", "Trek ya siku 4", "Trek 4 jours", "4-Tage-Trek", "4天徒步", "Trek de 4 días", "4-дневный трек"),
        price: "$950",
      },
    ],
  },
  {
    key: "lengai",
    name: C("Ol Doinyo Lengai", "Ol Doinyo Lengai", "Ol Doinyo Lengai", "Ol Doinyo Lengai", "奥尔多伊尼奥·伦盖", "Ol Doinyo Lengai", "Ол-Доиньо-Ленгай"),
    height: "2,962 m",
    tag: C("Mountain of God · Lake Natron", "Mlima wa Mungu · Ziwa Natron", "Montagne de Dieu · lac Natron", "Berg Gottes · Natronsee", "神山 · 纳特龙湖", "Montaña de Dios · lago Natron", "Гора Бога · озеро Натрон"),
    text: C(
      "An active volcano sacred to the Maasai. We climb at night so you stand on the crater at sunrise, then rest by Lake Natron.",
      "Volcano hai takatifu kwa Maasai. Tunapanda usiku ili kufika crater asubuhi, kisha kupumzika Ziwa Natron.",
      "Volcan actif, sacré pour les Maasaï. On gravit la nuit pour le cratère à l’aube, puis le lac Natron.",
      "Aktiver Vulkan, den Maasai heilig. Nachtaufstieg, Kraterrand im ersten Licht, dann der Natronsee.",
      "马赛圣地、活火山。夜间攀登，日出站在火山口，再到纳特龙湖休息。",
      "Volcán activo, sagrado para los maasái. Subida de noche, cráter al amanecer y descanso en el lago Natron.",
      "Действующий вулкан, священный для масаи. Ночной подъём, кратер на рассвете, затем озеро Натрон.",
    ),
    image: "/peaks/lengai.png",
    routes: [
      {
        title: C("Night climb · 1 day", "Kupanda usiku · siku 1", "Ascension de nuit · 1 jour", "Nachtaufstieg · 1 Tag", "夜攀 · 1天", "Ascenso nocturno · 1 día", "Ночной подъём · 1 день"),
        price: "$320",
      },
      {
        title: C("Lake Natron + Lengai · 2 days", "Ziwa Natron + Lengai · siku 2", "Lac Natron + Lengai · 2 jours", "Natronsee + Lengai · 2 Tage", "纳特龙湖 + 伦盖 · 2天", "Lago Natron + Lengai · 2 días", "Натрон + Ленгай · 2 дня"),
        price: "$540",
      },
    ],
  },
];

export const hikingIncluded = [
  C("Park and rescue fees", "Ada za mbuga na uokoaji", "Frais de parc et de sauvetage", "Park- und Rettungsgebühren", "公园与救援费", "Tasas de parque y rescate", "Сборы парка и спасения"),
  C("Licensed mountain guide", "Kiongozi wa mlima mwenye leseni", "Guide de montagne licencié", "Lizenzierter Bergführer", "持证登山向导", "Guía de montaña con licencia", "Лицензированный горный гид"),
  C("Porters and cook (Kilimanjaro & Meru)", "Wabebaji na mpishi (Kilimanjaro na Meru)", "Porteurs et cuisinier (Kilimandjaro et Meru)", "Träger und Koch (Kilimandscharo & Meru)", "背夫与厨师（乞力马扎罗与梅鲁）", "Porteadores y cocinero (Kilimanjaro y Meru)", "Носильщики и повар (Килиманджаро и Меру)"),
  C("Mountain tents or hut fees as per route", "Hema za mlima au ada za vibanda kulingana na njia", "Tentes ou frais de cabanes selon la voie", "Bergzelte oder Hüttengebühren je Route", "按路线的高山帐篷或小屋费", "Tiendas de montaña o cabañas según la ruta", "Палатки или хижины по маршруту"),
  C("All meals on the mountain", "Milo yote mlimani", "Tous les repas en montagne", "Alle Mahlzeiten am Berg", "山上全部餐食", "Todas las comidas en la montaña", "Все приёмы пищи в горах"),
  C("Transfers from Arusha", "Usafiri kutoka Arusha", "Transferts depuis Arusha", "Transfers ab Arusha", "阿鲁沙接送", "Traslados desde Arusha", "Трансферы из Аруши"),
  C("Drinking water and safety briefing", "Maji ya kunywa na maelekezo ya usalama", "Eau et briefing sécurité", "Trinkwasser und Sicherheitsbriefing", "饮用水与安全说明", "Agua y briefing de seguridad", "Питьевая вода и инструктаж"),
];

export const nav = [

  {
    href: "/about",
    label: C("About us", "Kuhusu sisi", "À propos de nous", "Über uns", "关于我们", "Sobre nosotros", "О нас")
  },
  {
    href: "/destinations",
    label: C("Destinations", "Maeneo", "Destinations", "Reiseziele", "目的地", "Destinos", "Направления")
  },
  {
    href: "/explore-tanzania",
    label: C("Explore Tanzania", "Gundua Tanzania", "Explorer la Tanzanie", "Tansania entdecken", "探索坦桑尼亚", "Explorar Tanzania", "Открыть Танзанию")
  },
  {
    href: "/trips",
    label: C("Our trips", "Safari zetu", "Nos voyages", "Unsere Reisen", "行程", "Viajes", "Поездки")
  },
  {
    href: "/pricing",
    label: C("Pricing", "Bei", "Tarifs", "Preise", "价格", "Precios", "Цены")
  },
  {
    href: "/hiking",
    label: C("Hiking", "Kupanda milima", "Randonnée", "Wandern", "徒步", "Senderismo", "Треккинг")
  },
  {
    href: "/experiences",
    label: C("Experiences", "Uzoefu", "Expériences", "Erlebnisse", "体验", "Experiencias", "Впечатления")
  },
  {
    href: "/camps",
    label: C("Camps & lodges", "Kambi na lodges", "Camps et lodges", "Camps & Lodges", "营地与小屋", "Campamentos y lodges", "Лагеря и лоджи")
  },
  {
    href: "/stay",
    label: C("Stay & food", "Malazi na chakula", "Séjour et cuisine", "Unterkunft & Essen", "住宿与美食", "Alojamiento y comida", "Жильё и еда")
  },
  {
    href: "/how-we-work",
    label: C("How we work", "Jinsi tunavyofanya", "Comment nous travaillons", "So arbeiten wir", "我们如何工作", "Cómo trabajamos", "Как мы работаем")
  },
  {
    href: "/offers",
    label: C("Offers", "Ofa", "Offres", "Angebote", "优惠", "Ofertas", "Предложения")
  },
  {
    href: "/partnerships",
    label: C("Partnership", "Ushirika", "Partenariat", "Partnerschaft", "合作伙伴", "Alianzas", "Партнёрство")
  },
  {
    href: "/gallery",
    label: C("Gallery", "Picha", "Galerie", "Galerie", "图库", "Galería", "Галерея")
  },
  {
    href: "/blog",
    label: C("Blog", "Blogu", "Blog", "Blog", "博客", "Blog", "Блог")
  },
  {
    href: "/faq",
    label: C("FAQ", "Maswali", "FAQ", "FAQ", "常见问题", "FAQ", "Вопросы")
  },
  {
    href: "/contact",
    label: C("Contact", "Wasiliana", "Contact", "Kontakt", "联系", "Contacto", "Контакты")
  }
];
