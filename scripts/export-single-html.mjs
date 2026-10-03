import { readFileSync, writeFileSync } from "node:fs";

const b64 = (path) => readFileSync(path).toString("base64");
const logo = "data:image/jpeg;base64," + b64("/workspace/artifacts/eco-vibe-export/logo.jpg");
const mark = "data:image/jpeg;base64," + b64("/workspace/artifacts/eco-vibe-export/logo-mark.jpg");

const u = (id, w = 2400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=90`;

const I = {
  serengeti: u("photo-1516426122078-c23e76319801"),
  treeSun: u("photo-1547471080-7cc2caa01a7e"),
  elephant: u("photo-1564760055775-d63b17a55c44"),
  kili: u("photo-1609198092458-38a293c7ac4b"),
  kiliAlt: u("photo-1506905925346-21bda4d32df4"),
  zanzibar: u("photo-1586861635167-e5223aadc9fe"),
  mara: u("photo-1547970810-dcad79a56c1e"),
  maasai: u("photo-1523805009345-7448845a9e53"),
  forest: u("photo-1441974231531-c6227db76b6e"),
  savanna: u("photo-1501785888041-af3ef285b470"),
  lake: u("photo-1439066615861-d1af74d74000"),
  lodge: u("photo-1520250497591-112f2f40a3f4"),
  luxury: u("photo-1571896349842-33c89424de2d"),
  hotel: u("photo-1566073771259-6a8506099945"),
  mountains: u("photo-1464822759023-fed622ff2c3b"),
  hills: u("photo-1470071459604-3b5ec3a7fe05"),
  botswana: u("photo-1557050543-4d5f4e07ef46"),
};

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Eco Vibe Safari</title>
<meta name="description" content="Eco Vibe Safari — Arusha. Feel natural · live the adventure."/>
<style>
:root{--cream:#f6efe2;--paper:#fffbf4;--ink:#3c2412;--muted:#7a5c45;--forest:#2c4a33;--deep:#1c3123;--sunset:#d96b1c;--gold:#e8a317;--sand:#e4d2b0;--wa:#25d366}
*{box-sizing:border-box}html,body{margin:0;overflow-x:hidden}
body{font-family:Outfit,system-ui,sans-serif;background:var(--cream);color:var(--ink);line-height:1.5}
h1,h2,h3,h4{font-family:Fraunces,Georgia,serif;font-weight:600;text-wrap:balance;margin:0}
a{color:inherit}img,video{max-width:100%;display:block}
button,select,input,textarea{font:inherit}
.wrap{max-width:1120px;margin:0 auto;padding:0 20px}
.btn{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:0 22px;border-radius:999px;border:0;cursor:pointer;font-weight:600;text-decoration:none}
.btn-ink{background:var(--ink);color:var(--cream)}
.btn-forest{background:var(--forest);color:var(--paper)}
.btn-line{background:transparent;border:1px solid var(--ink)}
header.bar{position:fixed;inset:0 0 auto;z-index:50;padding:14px 12px 0}
.pill{max-width:1120px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:8px;background:var(--cream);border-radius:999px;padding:8px 12px;box-shadow:0 10px 30px rgba(60,36,18,.18)}
.brand{display:flex;align-items:center;gap:10px;text-decoration:none;flex-shrink:0}
.brand img{width:44px;height:44px;border-radius:50%;object-fit:cover}
.brand span{font-family:Fraunces,Georgia,serif;font-size:12px;font-weight:600;white-space:nowrap}
nav.top{display:none;gap:16px}
nav.top a{font-size:11px;letter-spacing:.12em;text-transform:uppercase;text-decoration:none;font-weight:600}
.tools{display:flex;align-items:center;gap:8px}
.lang{position:relative}
.lang>button{min-height:44px;border-radius:999px;border:1px solid var(--sand);background:var(--paper);padding:0 12px;display:flex;align-items:center;gap:8px}
.lang ul{position:absolute;right:0;top:110%;background:var(--cream);border:1px solid var(--sand);border-radius:12px;list-style:none;margin:0;padding:6px 0;min-width:160px;display:none;box-shadow:0 10px 24px rgba(0,0,0,.12)}
.lang.open ul{display:block}
.lang li button{width:100%;text-align:left;border:0;background:none;padding:10px 14px;cursor:pointer}
.menu-btn{width:44px;height:44px;border-radius:50%;border:1px solid var(--sand);background:var(--paper)}
.drawer{display:none;max-width:1120px;margin:10px auto 0;background:var(--cream);border-radius:16px;padding:12px;box-shadow:0 10px 30px rgba(0,0,0,.12);max-height:70vh;overflow:auto}
.drawer.open{display:grid;grid-template-columns:1fr 1fr;gap:4px}
.drawer a{padding:12px;text-decoration:none;font-weight:500}
.hero{position:relative;min-height:100vh;overflow:hidden;color:var(--paper)}
.hero .slide{position:absolute;inset:0;opacity:0;transition:opacity 1s}
.hero .slide.on{opacity:1}
.hero video,.hero img.bg{width:100%;height:100%;object-fit:cover}
.hero .shade{position:absolute;inset:0;background:rgba(60,36,18,.45)}
.hero .copy{position:relative;z-index:2;max-width:1120px;margin:0 auto;padding:120px 20px 90px;min-height:100vh;display:flex;flex-direction:column;justify-content:center}
.kicker{letter-spacing:.28em;text-transform:uppercase;font-size:12px;font-weight:600;color:var(--gold)}
.hero h1{font-size:clamp(1.8rem,5vw,3.6rem);margin-top:10px}
.hero .tag{font-size:clamp(1.2rem,3.4vw,2.6rem);font-style:italic;color:var(--gold);margin-top:10px}
.hero p.lead{max-width:520px;margin-top:16px}
.panel{background:var(--cream);margin-top:-40px;position:relative;z-index:3;border-radius:40px 40px 0 0;padding:56px 0;box-shadow:0 -18px 40px rgba(60,36,18,.18)}
.diamond{width:10px;height:10px;background:var(--gold);transform:rotate(45deg);margin:0 auto 28px}
.grid{display:grid;gap:20px}
.g2{grid-template-columns:1fr}.g3{grid-template-columns:1fr}.g4{grid-template-columns:1fr}
.card{background:var(--paper);border-radius:16px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.06)}
.card img{width:100%;height:180px;object-fit:cover}
.card .p{padding:16px}
.muted{color:var(--muted)}
.section{padding:64px 0}
.paper{background:var(--paper)}
.page{display:none;padding:120px 0 40px}
.page.on{display:block}
.page-hero{background:var(--deep);color:var(--paper);padding:48px 0 40px;text-align:center}
.stars{color:#fbbc04}
.wa{position:fixed;right:16px;bottom:90px;z-index:50;width:56px;height:56px;border-radius:50%;background:var(--wa);color:#fff;display:flex;align-items:center;justify-content:center;text-decoration:none;box-shadow:0 8px 20px rgba(0,0,0,.2);font-size:28px}
footer{background:var(--deep);color:var(--paper);padding:48px 0 16px}
footer a{color:var(--sand);text-decoration:none}
.logo-box{background:var(--paper);border:1px solid var(--sand);border-radius:16px;padding:28px;display:flex;align-items:center;justify-content:center}
.logo-box img{max-width:260px;width:100%}
form label{display:block;margin-bottom:14px;font-size:14px;font-weight:500}
form input,form select,form textarea{width:100%;min-height:44px;border:1px solid var(--sand);background:var(--cream);border-radius:8px;padding:8px 12px;font-size:16px;margin-top:4px}
.faq button{width:100%;text-align:left;background:var(--paper);border:1px solid var(--sand);border-radius:12px;padding:16px;margin-bottom:8px}
.rev-row{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;padding:8px 0}
.rev-card{min-width:260px;scroll-snap-align:start;background:var(--paper);border:1px solid var(--sand);border-radius:16px;padding:16px}
@media(min-width:800px){
  nav.top{display:flex}
  .g2{grid-template-columns:1fr 1fr}
  .g3{grid-template-columns:1fr 1fr 1fr}
  .g4{grid-template-columns:1fr 1fr 1fr 1fr}
  .drawer.open{grid-template-columns:1fr 1fr 1fr}
}
</style>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;600;700&family=Outfit:wght@400;500;600;700&display=swap"/>
</head>
<body>
<header class="bar">
  <div class="pill">
    <a class="brand" href="#home"><img src="${mark}" alt="Eco Vibe Safari"/><span>ECO VIBE SAFARI</span></a>
    <nav class="top">
      <a href="#home">Home</a><a href="#destinations">Destinations</a><a href="#tanzania">Tanzania</a>
      <a href="#trips">Trips</a><a href="#experiences">Experiences</a><a href="#gallery">Gallery</a>
    </nav>
    <div class="tools">
      <div class="lang" id="langBox">
        <button type="button" id="langBtn">ENG ▾</button>
        <ul id="langList"></ul>
      </div>
      <a class="btn btn-ink" href="#contact" style="display:none" id="travelBtn">Travel with us</a>
      <button class="menu-btn" id="menuBtn" type="button" aria-label="Menu">☰</button>
    </div>
  </div>
  <div class="drawer" id="drawer"></div>
</header>

<main>
<section class="page on" id="home">
  <div class="hero">
    <div class="slide on" data-i="0"><video src="maasai.mp4" poster="${I.maasai}" muted playsinline loop></video></div>
    <div class="slide" data-i="1"><video src="leopard.mp4" poster="${I.serengeti}" muted playsinline loop></video></div>
    <div class="slide" data-i="2"><img class="bg" src="${I.treeSun}" alt="Acacia and sun"/></div>
    <div class="shade"></div>
    <div class="copy">
      <p class="kicker">Arusha · Tanzania</p>
      <h1>Welcome to Eco Vibe Safari</h1>
      <p class="tag">Feel natural. Live the adventure.</p>
      <p class="lead">Wild parks, island tides, and journeys with people who know the land — that is the trip that counts.</p>
    </div>
  </div>
  <div class="panel">
    <div class="diamond"></div>
    <div class="wrap grid g2" style="align-items:center">
      <div class="logo-box"><img src="${logo}" alt="Eco Vibe Safari logo"/></div>
      <div>
        <p class="kicker" style="color:var(--sunset)">Who we are</p>
        <h2>A local Arusha safari house</h2>
        <p class="muted" style="margin-top:16px">Eco Vibe Safari is a local company in Arusha. We run responsible game drives across East and southern Africa, guided treks on Kilimanjaro and Mount Meru, and quiet days with cultural food, camps and the people who live beside the parks.</p>
        <a href="#about" style="color:var(--forest);font-weight:600">Read more →</a>
      </div>
    </div>
  </div>

  <section class="section paper"><div class="wrap">
    <p class="kicker" style="color:var(--sunset);text-align:center">Explore</p>
    <h2 style="text-align:center;margin-bottom:28px">Destinations</h2>
    <div class="grid g3" id="homeCountries"></div>
  </div></section>

  <section class="section"><div class="wrap">
    <p class="kicker" style="color:var(--sunset);text-align:center">Northern circuit</p>
    <h2 style="text-align:center;margin-bottom:28px">Explore Tanzania</h2>
    <div class="grid g4" id="homeParks"></div>
  </div></section>

  <section class="section paper"><div class="wrap">
    <p class="kicker" style="color:var(--sunset);text-align:center">Experiences</p>
    <h2 style="text-align:center;margin-bottom:28px">Three ways to travel</h2>
    <div class="grid g3" id="homeExp"></div>
  </div></section>

  <section class="section"><div class="wrap">
    <p class="kicker" style="color:var(--sunset);text-align:center">Our trips</p>
    <h2 style="text-align:center;margin-bottom:28px">Featured journeys</h2>
    <div class="grid g3" id="homeTrips"></div>
    <p style="text-align:center;margin-top:24px"><a class="btn btn-forest" href="#trips">See all trips</a></p>
  </div></section>

  <section class="section" id="reviews"><div class="wrap">
    <h2 style="color:var(--gold);font-size:clamp(1.6rem,4vw,2.6rem)">Real life stories...</h2>
    <p class="muted" style="max-width:480px">Every journey we share leaves behind its own memories. Words from guests who travelled Tanzania with Eco Vibe Safari.</p>
    <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;margin:28px 0">
      <img src="${mark}" alt="" style="width:48px;height:48px;border-radius:50%;object-fit:cover"/>
      <div><strong>Eco Vibe Safari</strong><div class="stars">★★★★★</div><small class="muted">4 Google reviews</small></div>
      <a class="btn btn-line" href="https://www.google.com/maps/search/?api=1&query=Eco+Vibe+Safari+Arusha" target="_blank" rel="noreferrer">Write a review</a>
    </div>
    <div class="rev-row" id="revRow"></div>
  </div></section>

  <section style="background:var(--deep);color:var(--paper);text-align:center;padding:64px 20px">
    <h2>Ready to travel with us?</h2>
    <p style="color:var(--sand);max-width:480px;margin:12px auto 20px">Tell us the dates. We sketch the parks, the camps and the meals.</p>
    <a class="btn" style="background:var(--gold);color:var(--ink)" href="#contact">Plan this trip</a>
  </section>
</section>

<section class="page" id="about">
  <div class="page-hero"><div class="wrap"><p class="kicker">About</p><h1>A local Arusha safari house</h1></div></div>
  <div class="wrap section grid g2" style="align-items:center">
    <div class="logo-box"><img src="${logo}" alt="logo"/></div>
    <p class="muted">We are based in Arusha. Our crews run game drives, mountain treks and cultural days with licensed local guides. We book camps and lodges, cook Tanzanian food on the road, and keep the itinerary honest — no hidden extras.</p>
  </div>
  <div class="wrap section" style="padding-top:0">
    <h2>People who run Eco Vibe Safari</h2>
    <div class="grid g2" style="margin-top:20px">
      <article class="card"><div class="p"><p class="kicker" style="color:var(--sunset)">Founder & CEO</p><h3>Kassim Ayubu</h3><p class="muted">Kassim built Eco Vibe Safari in Arusha as a local house for honest park days, mountain treks and island rest. He sets the tone for how guests are met, which camps we book, and how crews look after the land.</p></div></article>
      <article class="card"><div class="p"><p class="kicker" style="color:var(--sunset)">Tour operations</p><h3>Iren Vence</h3><p class="muted">Iren runs the day-to-day of every itinerary: vehicles, park fees, lodge rooms, mountain crews and the timing of game drives. Guests feel a quiet trip because she holds the moving parts.</p></div></article>
    </div>
  </div>
</section>

<section class="page" id="destinations"><div class="page-hero"><div class="wrap"><p class="kicker">Explore</p><h1>Destinations</h1></div></div><div class="wrap section"><div class="grid g3" id="pgCountries"></div></div></section>
<section class="page" id="tanzania"><div class="page-hero"><div class="wrap"><p class="kicker">Northern circuit</p><h1>Explore Tanzania</h1></div></div><div class="wrap section" id="pgParks"></div></section>
<section class="page" id="trips"><div class="page-hero"><div class="wrap"><p class="kicker">Our trips</p><h1>Featured journeys</h1></div></div><div class="wrap section"><div class="grid g3" id="pgTrips"></div></div></section>
<section class="page" id="experiences"><div class="page-hero"><div class="wrap"><p class="kicker">Experiences</p><h1>Three ways to travel</h1></div></div><div class="wrap section"><div class="grid g3" id="pgExp"></div></div></section>
<section class="page" id="camps"><div class="page-hero"><div class="wrap"><p class="kicker">Sleep</p><h1>Camps & lodges</h1></div></div><div class="wrap section"><div class="grid g3" id="pgCamps"></div></div></section>
<section class="page" id="stay">
  <div class="page-hero"><div class="wrap"><p class="kicker">Comfort</p><h1>Accommodation & food</h1></div></div>
  <div class="wrap section">
    <div class="grid g4" id="pgStay"></div>
    <h3 style="text-align:center;margin:40px 0 16px">Cultural food on the road</h3>
    <div class="grid g4" id="pgFood"></div>
  </div>
</section>
<section class="page" id="how">
  <div class="page-hero"><div class="wrap"><p class="kicker">Process</p><h1>How we work</h1></div></div>
  <div class="wrap section"><div class="grid g4" id="pgHow"></div></div>
</section>
<section class="page" id="offers"><div class="page-hero"><div class="wrap"><p class="kicker">Season</p><h1>Offers</h1></div></div><div class="wrap section"><div class="grid g3" id="pgOffers"></div></div></section>
<section class="page" id="partnerships"><div class="page-hero"><div class="wrap"><p class="kicker">Partnership</p><h1>Who we work with</h1></div></div><div class="wrap section"><div class="grid g3" id="pgPart"></div></div></section>
<section class="page" id="gallery"><div class="page-hero"><div class="wrap"><p class="kicker">Light</p><h1>Gallery</h1></div></div><div class="wrap section"><div class="grid g4" id="pgGal"></div></div></section>
<section class="page" id="faq"><div class="page-hero"><div class="wrap"><p class="kicker">Questions</p><h1>Frequently asked</h1></div></div><div class="wrap section faq" id="pgFaq"></div></section>
<section class="page" id="contact">
  <div class="page-hero"><div class="wrap"><p class="kicker">Plan the days</p><h1>Tell us the trip in your head</h1></div></div>
  <div class="wrap section grid g2">
    <div>
      <p class="muted">Share dates, who is travelling, and whether you want plains, crater, coast or the mountain. We reply with a clear outline.</p>
      <p style="margin-top:16px"><strong>Arusha, Tanzania</strong><br/>WhatsApp: +255 754 000 000<br/>hello@ecovibesafari.com</p>
    </div>
    <form onsubmit="event.preventDefault();alert('Asante — we will reply on WhatsApp or email.');">
      <label>Name<input required name="name"/></label>
      <label>Email<input required type="email" name="email"/></label>
      <label>Interest
        <select name="interest">
          <option>Safari circuit</option><option>Kilimanjaro climb</option>
          <option>Group package</option><option>Private safari</option>
          <option>Photographic</option><option>Custom itinerary</option>
        </select>
      </label>
      <label>Message<textarea required rows="4"></textarea></label>
      <button class="btn" style="background:var(--sunset);color:#fff" type="submit">Send</button>
    </form>
  </div>
</section>
</main>

<footer>
  <div class="wrap grid g2">
    <div>
      <div style="display:flex;gap:12px;align-items:center">
        <img src="${mark}" alt="" style="width:56px;height:56px;border-radius:50%;object-fit:cover"/>
        <div><strong>ECO VIBE SAFARI</strong><div style="font-style:italic;color:var(--sand)">Feel natural · live the adventure</div></div>
      </div>
      <p style="color:var(--sand);max-width:420px;margin-top:12px">Local Arusha guides for Serengeti, Ngorongoro, Tarangire, Kilimanjaro, Mount Meru and the quiet corners in between.</p>
    </div>
    <div>
      <h3>Explore</h3>
      <p><a href="#about">About</a> · <a href="#destinations">Destinations</a> · <a href="#trips">Trips</a> · <a href="#camps">Camps</a> · <a href="#gallery">Gallery</a> · <a href="#contact">Contact</a></p>
    </div>
  </div>
  <p style="text-align:center;color:var(--sand);font-size:12px;margin-top:28px">© Eco Vibe Safari · Arusha, Tanzania</p>
</footer>
<a class="wa" href="https://wa.me/255754000000?text=Hello%20Eco%20Vibe%20Safari" target="_blank" rel="noreferrer" aria-label="WhatsApp">☎</a>

<script>
const LANGS=[{id:"en",label:"ENG"},{id:"sw",label:"SW"},{id:"fr",label:"FRENCH"},{id:"de",label:"GERMAN"},{id:"zh",label:"CHINA"},{id:"es",label:"SPANISH"},{id:"ru",label:"RUSSIA"}];
const NAV=[
  ["home","Home"],["about","About"],["destinations","Destinations"],["tanzania","Explore Tanzania"],
  ["trips","Our trips"],["experiences","Experiences"],["camps","Camps & lodges"],["stay","Stay & food"],
  ["how","How we work"],["offers","Offers"],["partnerships","Partnership"],["gallery","Gallery"],["faq","FAQ"],["contact","Contact"]
];
const countries=[
  ["Tanzania","Serengeti, Ngorongoro, Tarangire, Kilimanjaro and the northern circuit from Arusha.","${I.serengeti}"],
  ["Zanzibar","Spice islands, Stone Town, dhow sunsets and white-sand recovery after safari.","${I.zanzibar}"],
  ["Kenya","Maasai Mara migration crossings, Amboseli elephants and Rift Valley lakes.","${I.mara}"],
  ["Botswana","Okavango Delta mokoro days, Chobe river elephants and quiet luxury camps.","${I.botswana}"],
  ["Rwanda","Volcanoes National Park gorilla trekking and misty thousand-hills landscapes.","${I.mountains}"],
  ["Uganda","Bwindi gorillas, Murchison Falls and chimpanzees in Kibale forest.","${I.forest}"]
];
const parks=[
  ["Serengeti National Park","Endless grass, the Great Migration, big cats on kopjes.","${I.serengeti}"],
  ["Ngorongoro Crater & highlights","A collapsed caldera packed with lion, elephant, flamingo and black rhino.","${I.treeSun}"],
  ["Tarangire National Park","Baobabs, the Tarangire River and one of the largest elephant gatherings.","${I.elephant}"],
  ["Tanzania overview","Also Arusha NP, Lake Manyara, Mikumi, Ruaha, Nyerere, Kilimanjaro, Meru, Zanzibar.","${I.kili}"]
];
const experiences=[
  ["Small group safaris","Departures with 4–8 guests. Shared 4×4, shared camp nights.","${I.maasai}"],
  ["Family safaris","Built for children and grandparents: shorter drives, family rooms.","${I.mara}"],
  ["Private safaris","Your vehicle, your pace, your lodges. Honeymoons and slow travel.","${I.serengeti}"]
];
const trips=[
  ["Best seller","Classic Serengeti & Crater","5 days · Serengeti · Ngorongoro","Migration plains, crater floor and the Big Five.","$1,450","${I.serengeti}"],
  ["Summit","Kilimanjaro climb","7–8 days · Kilimanjaro","Full mountain crew and the routes with the best summit chance.","$1,890","${I.kili}"],
  ["Coast","Parks then Zanzibar","8 days · Tanzania · Zanzibar","Northern circuit then spice island rest.","$2,150","${I.zanzibar}"],
  ["Trek","Mount Meru trek","4 days · Mount Meru","Wildlife on the trail and ideal training before Kili.","$950","${I.mountains}"],
  ["Cross-border","Serengeti & Mara","9 days · Tanzania · Kenya","Follow the herds across the Mara river.","$3,420","${I.mara}"],
  ["Culture","Maasai cultural day","Half / full day","Village visit, stories, dance and a shared meal.","$95","${I.maasai}"]
];
const camps=[
  ["Tanzania Safari Lodge","Karatu · Ngorongoro highlands","Lodge","${I.lodge}"],
  ["Lake Duluti Lodge","Arusha · Lake Duluti","Lodge","${I.lake}"],
  ["Four Seasons Safari Lodge","Serengeti National Park","Luxury lodge","${I.luxury}"],
  ["Serengeti grass camp","Central Serengeti","Tented camp","${I.savanna}"],
  ["Crater rim lodge","Ngorongoro","Lodge","${I.treeSun}"],
  ["Tarangire baobab camp","Tarangire","Tented camp","${I.elephant}"],
  ["Arusha garden lodge","Arusha","Lodge","${I.hotel}"],
  ["Zanzibar tide villa","East coast, Zanzibar","Beach villa","${I.zanzibar}"],
  ["Mara river camp","Maasai Mara / Kenya","Tented camp","${I.mara}"]
];
const stay=[["Luxury lodges","Park-edge lodges with views and full amenities."],["Tented camps","Canvas under the stars without giving up a real bed."],["Mid-range hotels","Clean, comfortable bases in Arusha and near the parks."],["Budget campsites","Authentic bush camping for the night sounds."]];
const foods=[["Nyama choma & ugali","Fire-grilled meat with ugali and kachumbari."],["Zanzibar spices","Pilau, coconut fish and clove tea."],["Bush breakfast","Coffee, eggs and fruit on the plains."],["Maasai homestead meal","Shared stew, stories and tea with the family."]];
const how=[["01","Tell us the dream","Dates, who is coming, parks or beach. A WhatsApp is enough."],["02","We sketch the route","Clear itinerary with camps, lodges, park fees and an honest budget."],["03","Confirm & pack","We lock vehicles, mountain crews and rooms."],["04","Travel with us","Meet in Arusha or Zanzibar. Guides stay until the last drive."]];
const offers=[["Season","Green-season Serengeti","January–March calving plains, fewer vehicles.","From $1,190"],["Bundle","Safari + Zanzibar week","Four park days then three nights on the east coast.","From $2,150"],["Honeymoon","Private crater & coast","Ngorongoro rim lodge, canvas night, then a quiet Zanzibar villa.","From $2,680"]];
const partners=[["Lodge partners","Tanzania Safari Lodge, Lake Duluti Lodge, Four Seasons Safari Lodge Serengeti and canvas camps."],["Parks & conservation","Park fees go to TANAPA and the Ngorongoro Conservation Area."],["Community & culture","Village visits and Maasai boma days arranged with host families."],["Mountain crews","Kilimanjaro and Meru with licensed guides, porters and cooks."],["Transport partners","Pop-up 4×4 fleets from Arusha and scheduled airstrips."],["Trade & agents","Overseas agents who want a local Arusha desk."]];
const gallery=["${I.serengeti}","${I.treeSun}","${I.kiliAlt}","${I.elephant}","${I.zanzibar}","${I.forest}","${I.savanna}","${I.maasai}"];
const faqs=[["What is the best time to safari in Tanzania?","Dry months — June to October and January to February — are strongest for game viewing."],["Do I need a visa?","Most passports can use an e-Visa or visa on arrival."],["Is Tanzania safe to travel?","The northern parks are well travelled. Our guides are local and licensed."],["What is included in a safari package?","Park fees, lodging, meals, game drives, a professional guide, 4×4 and drinking water."],["Can you build a private itinerary?","Yes. Tell us dates, pace, hiking interest and budget."]];
const reviews=[["Lena K.","Aug 2025","Our guide found a leopard at first light and never rushed us. Camp felt like a home, not a product."],["James & Priya","Jul 2025","Four days of dust and lions, then the Indian Ocean. Eco Vibe handled both without a seam."],["Carlos M.","Jun 2025","Beanbags, patience, and a driver who understood lenses. Best migration light I have shot."],["Amina N.","Feb 2025","The mountain crew paced us well and the safety talk was real. Summit day felt hard, never chaotic."]];

function card(img,title,text,href){
  return \`<a class="card" href="\${href||'#'}" style="text-decoration:none"><img src="\${img}" alt=""/><div class="p"><h3>\${title}</h3>\${text?\`<p class="muted">\${text}</p>\`:''}</div></a>\`;
}
document.getElementById("homeCountries").innerHTML=countries.map(c=>card(c[2],c[0],c[1],"#destinations")).join("");
document.getElementById("homeParks").innerHTML=parks.map(c=>card(c[2],c[0],"", "#tanzania")).join("");
document.getElementById("homeExp").innerHTML=experiences.map(c=>card(c[2],c[0],c[1],"#experiences")).join("");
document.getElementById("homeTrips").innerHTML=trips.slice(0,3).map(t=>\`<article class="card"><div style="position:relative"><img src="\${t[5]}" alt=""/><span style="position:absolute;top:10px;left:10px;background:var(--sunset);color:#fff;border-radius:999px;padding:4px 10px;font-size:12px">\${t[0]}</span></div><div class="p"><h3>\${t[1]}</h3><p class="muted">\${t[3]}</p><p style="color:var(--forest);font-family:Fraunces,serif;font-size:18px">\${t[4]}</p></div></article>\`).join("");
document.getElementById("pgCountries").innerHTML=countries.map(c=>card(c[2],c[0],c[1])).join("");
document.getElementById("pgParks").innerHTML=parks.map(c=>\`<article class="grid g2 card" style="margin-bottom:16px;display:grid"><img src="\${c[2]}" style="height:220px;object-fit:cover"/><div class="p"><h3>\${c[0]}</h3><p class="muted">\${c[1]}</p></div></article>\`).join("");
document.getElementById("pgTrips").innerHTML=trips.map(t=>\`<article class="card"><img src="\${t[5]}" alt=""/><div class="p"><p class="kicker" style="color:var(--sunset)">\${t[0]} · \${t[2]}</p><h3>\${t[1]}</h3><p class="muted">\${t[3]}</p><p style="color:var(--forest)">\${t[4]}</p></div></article>\`).join("");
document.getElementById("pgExp").innerHTML=experiences.map(c=>card(c[2],c[0],c[1])).join("");
document.getElementById("pgCamps").innerHTML=camps.map(c=>\`<article class="card"><img src="\${c[3]}" alt=""/><div class="p"><p class="kicker" style="color:var(--sunset)">\${c[2]}</p><h3>\${c[0]}</h3><p class="muted">\${c[1]}</p></div></article>\`).join("");
document.getElementById("pgStay").innerHTML=stay.map(s=>\`<article class="card"><div class="p" style="text-align:center"><h3>\${s[0]}</h3><p class="muted">\${s[1]}</p></div></article>\`).join("");
document.getElementById("pgFood").innerHTML=foods.map(s=>\`<article class="card"><div class="p"><h3>\${s[0]}</h3><p class="muted">\${s[1]}</p></div></article>\`).join("");
document.getElementById("pgHow").innerHTML=how.map(s=>\`<article class="card"><div class="p"><p class="kicker" style="color:var(--gold)">\${s[0]}</p><h3>\${s[1]}</h3><p class="muted">\${s[2]}</p></div></article>\`).join("");
document.getElementById("pgOffers").innerHTML=offers.map(s=>\`<article class="card"><div class="p"><p class="kicker" style="color:var(--sunset)">\${s[0]}</p><h3>\${s[1]}</h3><p class="muted">\${s[2]}</p><p style="color:var(--forest)">\${s[3]}</p></div></article>\`).join("");
document.getElementById("pgPart").innerHTML=partners.map(s=>\`<article class="card"><div class="p"><h3>\${s[0]}</h3><p class="muted">\${s[1]}</p></div></article>\`).join("");
document.getElementById("pgGal").innerHTML=gallery.map(src=>\`<img src="\${src}" alt="" style="height:160px;width:100%;object-fit:cover;border-radius:12px"/>\`).join("");
document.getElementById("pgFaq").innerHTML=faqs.map(f=>\`<button type="button" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='block'?'none':'block'"><strong>\${f[0]}</strong></button><p class="muted" style="display:none;padding:0 8px 16px">\${f[1]}</p>\`).join("");
document.getElementById("revRow").innerHTML=reviews.map(r=>\`<article class="rev-card"><strong>\${r[0]}</strong> <small class="muted">\${r[1]}</small><div class="stars">★★★★★</div><p class="muted">\${r[2]}</p></article>\`).join("");

const drawer=document.getElementById("drawer");
drawer.innerHTML=NAV.map(([id,l])=>\`<a href="#\${id}">\${l}</a>\`).join("");
document.getElementById("menuBtn").onclick=()=>drawer.classList.toggle("open");
drawer.querySelectorAll("a").forEach(a=>a.onclick=()=>drawer.classList.remove("open"));

const langList=document.getElementById("langList");
langList.innerHTML=LANGS.map(l=>\`<li><button type="button" data-l="\${l.id}">\${l.label}</button></li>\`).join("");
document.getElementById("langBtn").onclick=()=>document.getElementById("langBox").classList.toggle("open");
langList.onclick=e=>{const b=e.target.closest("button");if(!b)return;document.getElementById("langBtn").textContent=LANGS.find(x=>x.id===b.dataset.l).label+" ▾";document.getElementById("langBox").classList.remove("open");document.documentElement.lang=b.dataset.l};

function show(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.toggle("on",p.id===id));
  window.scrollTo(0,0);
  drawer.classList.remove("open");
}
function route(){show((location.hash||"#home").slice(1)||"home")}
window.addEventListener("hashchange",route);route();

let i=0;const slides=[...document.querySelectorAll(".hero .slide")];
const vids=[...document.querySelectorAll(".hero video")];
vids.forEach((v,n)=>{if(n===0)v.play().catch(()=>{});});
setInterval(()=>{
  i=(i+1)%slides.length;
  slides.forEach((s,n)=>s.classList.toggle("on",n===i));
  vids.forEach((v,n)=>{if(n===i)v.play().catch(()=>{});else{v.pause();v.currentTime=0;}});
},9000);
if(matchMedia("(min-width:800px)").matches) document.getElementById("travelBtn").style.display="inline-flex";
</script>
</body>
</html>
`;

writeFileSync("/workspace/artifacts/eco-vibe-export/eco-vibe-safari.html", html);
writeFileSync("/workspace/artifacts/eco-vibe-safari.html", html);
console.log("html bytes", html.length);
