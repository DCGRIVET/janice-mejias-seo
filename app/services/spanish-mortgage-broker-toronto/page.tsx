import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
  preload: true,
});

/* ─── Constants ─────────────────────────────────────── */
const SITE_URL   = "https://janicemejias.ca";
const PAGE_URL   = `${SITE_URL}/services/spanish-mortgage-broker-toronto`;
const PHONE      = "416-803-5820";
const PHONE_RAW  = "4168035820";
const EMAIL      = "janicemejias@dominionlending.ca";
const AGENT      = "Janice Mejias";
const BROKERAGE  = "Dominion Lending Centres Elite Mortgage Group";
const LICENCE    = "Brokerage Licence #13669";
const RATING     = "4.9";
const REVIEW_CT  = "80";
const LENDERS    = "90";

/* ─── SEO Metadata ──────────────────────────────────── */
export const metadata: Metadata = {
  title: `Spanish Mortgage Broker Toronto · ${AGENT} · DLC`,
  description:
    "Spanish-speaking mortgage agent in Toronto. Self-employed, newcomers, and private mortgage solutions across the GTA. Access to 90+ lenders. Free consultation.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: `Spanish Mortgage Broker in Toronto — ${AGENT}`,
    description:
      "Mortgage guidance for Spanish-speaking Canadians. Self-employed, newcomers, private mortgages. 90+ lenders across the GTA.",
    locale: "en_CA",
    siteName: `${AGENT} — ${BROKERAGE}`,
    images: [
      {
        url: `${SITE_URL}/og/spanish-mortgage-toronto.png`,
        width: 1200,
        height: 630,
        alt: `${AGENT} — Spanish Mortgage Broker Toronto`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Spanish Mortgage Broker in Toronto — ${AGENT}`,
    description:
      "Mortgage guidance for Spanish-speaking Canadians across the GTA. 90+ lenders. Free consultation.",
    images: [`${SITE_URL}/og/spanish-mortgage-toronto.png`],
  },
};

/* ─── JSON-LD Schema ────────────────────────────────── */
function JsonLd() {
  const financialService = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": PAGE_URL,
    name: AGENT,
    description:
      "Bilingual mortgage agent (English and Spanish) serving the GTA. Specializes in self-employed borrowers, newcomers to Canada, and private mortgage solutions.",
    url: PAGE_URL,
    telephone: PHONE,
    email: EMAIL,
    image: `${SITE_URL}/images/janice-mejias.jpg`,
    priceRange: "Free (standard mortgages)",
    address: {
      "@type": "PostalAddress",
      streetAddress: "447 Frederick Street, 3rd Floor",
      addressLocality: "Kitchener",
      addressRegion: "ON",
      postalCode: "N2H 2P4",
      addressCountry: "CA",
    },
    areaServed: [
      "Toronto", "Mississauga", "Brampton", "Vaughan",
      "Markham", "Pickering", "Ajax", "Whitby",
      "Hamilton", "Kitchener", "Waterloo", "Cambridge",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: RATING,
      reviewCount: REVIEW_CT,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mortgage Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "First-Time Home Buyer Mortgage" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Self-Employed Mortgage" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mortgage for Newcomers to Canada" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Second Mortgage / Private Mortgage" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mortgage Renewal and Refinancing" } },
      ],
    },
    sameAs: [`${SITE_URL}`],
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AGENT,
    jobTitle: "Mortgage Agent Level 1",
    worksFor: { "@type": "Organization", name: BROKERAGE },
    telephone: PHONE,
    email: EMAIL,
    url: SITE_URL,
    knowsLanguage: ["en", "es"],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: LICENCE,
      recognizedBy: { "@type": "Organization", name: "Financial Services Regulatory Authority of Ontario (FSRA)" },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((q) => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: { "@type": "Answer", text: q.a },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",     item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Spanish Mortgage Broker Toronto", item: PAGE_URL },
    ],
  };

  return (
    <>
      {[financialService, person, faqSchema, breadcrumb].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

/* ─── Page ──────────────────────────────────────────── */
export default function SpanishMortgageBrokerTorontoPage() {
  return (
    <div className={`${cormorant.variable} min-h-screen flex flex-col bg-white`}>
      {/* Preload the agent photo — it's the likely LCP element */}
      <link rel="preload" as="image" href="/images/janice-mejias.jpg" />
      <JsonLd />
      <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
      <PageHeader />
      <main id="main" className="flex-1">
        <Hero />
        <TrustBar />
        <WhoWeHelp />
        <Testimonials />
        <ServiceArea />
        <FaqSection />
        <BookingCta />
      </main>
      <PageFooter />
      <script dangerouslySetInnerHTML={{__html:`
        (function(){
          var btns = document.querySelectorAll('.lang-btn');
          btns.forEach(function(btn){
            btn.addEventListener('click', function(){
              var l = btn.getAttribute('data-lang');
              document.documentElement.setAttribute('data-lang', l);
              btns.forEach(function(b){
                var active = b.getAttribute('data-lang') === l;
                b.classList.toggle('active', active);
                b.setAttribute('aria-pressed', active ? 'true' : 'false');
              });
            });
          });
        })();
      `}} />
    </div>
  );
}

/* ─── Header ─────────────────────────────────────────── */
function PageHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-100/80 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href={SITE_URL} className="flex items-center gap-3">
          <DlcMark />
          <span className="text-sm font-semibold text-ink-900 leading-tight">
            {AGENT}<br />
            <span className="text-xs font-normal text-ink-600">{BROKERAGE}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-ink-600 md:flex" aria-label="Page navigation">
          <a className="transition hover:text-ink-900" href="#services">
            <span className="en-only">Services</span><span className="es-only">Servicios</span>
          </a>
          <a className="transition hover:text-ink-900" href="#area">
            <span className="en-only">Service area</span><span className="es-only">Área</span>
          </a>
          <a className="transition hover:text-ink-900" href="#faq">FAQ</a>
          <a className="transition hover:text-ink-900" href="#contact">
            <span className="en-only">Contact</span><span className="es-only">Contacto</span>
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="lang-pill" role="group" aria-label="Select language">
            <button className="lang-btn active" data-lang="en" type="button" aria-pressed="true">EN</button>
            <button className="lang-btn" data-lang="es" type="button" aria-pressed="false">ES</button>
          </div>
          <a
            href={`tel:${PHONE_RAW}`}
            aria-label={`Call ${AGENT} at ${PHONE}`}
            className="rounded-full bg-[#004282] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#003060]"
          >
            <span className="en-only">Call {PHONE}</span>
            <span className="es-only">Llamar {PHONE}</span>
          </a>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-t border-ink-100/60 bg-ink-50/60">
        <ol className="mx-auto flex max-w-6xl items-center gap-1.5 px-6 py-2 text-xs text-ink-600">
          <li><a href={SITE_URL} className="hover:text-ink-700">Home</a></li>
          <li aria-hidden="true">/</li>
          <li><a href={`${SITE_URL}/services`} className="hover:text-ink-700">Services</a></li>
          <li aria-hidden="true">/</li>
          <li className="text-ink-700 font-medium" aria-current="page">Spanish Mortgage Broker Toronto</li>
        </ol>
      </nav>
    </header>
  );
}

/* ─── Hero ───────────────────────────────────────────── */

function HeroStyles() {
  return (
    <style>{`
      /* ── Language toggle ── */
      .es-only { display:none; }
      [data-lang="es"] .es-only { display:revert; }
      [data-lang="es"] .en-only { display:none; }

      .lang-pill {
        display:flex;align-items:center;
        background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18);
        border-radius:24px;padding:3px;gap:2px;
      }
      .scrolled-nav .lang-pill {
        background:var(--light,#f0f4f8);border-color:var(--border,#e5e7eb);
      }
      .lang-btn {
        padding:5px 14px;border-radius:20px;font-size:12px;font-weight:700;
        border:none;cursor:pointer;background:transparent;
        color:rgba(255,255,255,.65);transition:all .2s;font-family:inherit;
      }
      .scrolled-nav .lang-btn { color:#6B7280; }
      .lang-btn.active { background:rgba(255,255,255,.9);color:#00274e; }
      .scrolled-nav .lang-btn.active { background:#004282;color:#fff; }

      .h-scene { background: #070d16; }

      @keyframes orb-drift-a {
        0%,100% { transform: translate(0,0) scale(1); opacity:.7; }
        40%      { transform: translate(6%,-10%) scale(1.18); opacity:.9; }
        70%      { transform: translate(-5%,7%) scale(.88); opacity:.5; }
      }
      @keyframes orb-drift-b {
        0%,100% { transform: translate(0,0) scale(1); opacity:.35; }
        55%     { transform: translate(-9%,14%) scale(1.25); opacity:.55; }
      }
      @keyframes orb-drift-c {
        0%,100% { transform: translate(0,0) scale(1); opacity:.25; }
        45%     { transform: translate(10%,-7%) scale(.82); opacity:.45; }
        80%     { transform: translate(-4%,10%) scale(1.08); opacity:.2; }
      }

      @keyframes card-levitate {
        0%,100% { transform: perspective(1400px) rotateX(7deg) rotateY(-13deg) translateY(0px); }
        50%     { transform: perspective(1400px) rotateX(4deg) rotateY(-9deg) translateY(-14px); }
      }
      @keyframes card-back-levitate {
        0%,100% { transform: perspective(1400px) rotateX(11deg) rotateY(-22deg) translateX(28px) translateY(22px) translateZ(-55px); }
        50%     { transform: perspective(1400px) rotateX(8deg) rotateY(-17deg) translateX(28px) translateY(12px) translateZ(-55px); }
      }
      @keyframes card-shimmer-slide {
        0%   { transform: translateX(-120%) skewX(-18deg); }
        100% { transform: translateX(420%) skewX(-18deg); }
      }
      @keyframes chip-bob-1 {
        0%,100% { transform: translateY(0px); }
        50%     { transform: translateY(-9px); }
      }
      @keyframes chip-bob-2 {
        0%,100% { transform: translateY(0px); }
        50%     { transform: translateY(7px); }
      }
      @keyframes chip-bob-3 {
        0%,100% { transform: translateY(0px); }
        50%     { transform: translateY(-11px); }
      }
      @keyframes h-fade-up {
        from { opacity:0; transform: translateY(22px); }
        to   { opacity:1; transform: translateY(0); }
      }
      @keyframes gold-line-in {
        from { transform: scaleX(0); }
        to   { transform: scaleX(1); }
      }
      @keyframes live-pulse {
        0%,100% { opacity:1; transform:scale(1); }
        50%     { opacity:.4; transform:scale(.75); }
      }

      /* H1 lines: no delay, forwards only — visible immediately for LCP */
      .h-label   { animation: h-fade-up .5s ease 0s forwards; opacity:0; }
      .h-line1   { opacity:1; }
      .h-line2   { opacity:1; }
      .h-line3   { opacity:1; }
      .h-gold-dim-anim { animation: h-fade-up .7s ease .15s forwards; opacity:0; }
      .h-divider { transform-origin:left; animation: gold-line-in 1.0s cubic-bezier(.16,1,.3,1) .2s forwards; transform:scaleX(0); }
      .h-sub     { animation: h-fade-up .6s ease .3s forwards; opacity:0; }
      .h-body    { animation: h-fade-up .6s ease .45s forwards; opacity:0; }
      .h-ctas    { animation: h-fade-up .5s ease .6s forwards; opacity:0; }
      .h-trust   { animation: h-fade-up .5s ease .75s forwards; opacity:0; }
      .h-card    { animation: h-fade-up .8s ease .25s forwards; opacity:0; }

      .card-main   { animation: card-levitate 7s ease-in-out infinite; }
      .card-back   { animation: card-back-levitate 7s ease-in-out infinite; animation-delay:-2s; }
      .card-sheen::after {
        content:'';position:absolute;inset:0;
        background:linear-gradient(105deg,transparent 22%,rgba(255,255,255,.055) 50%,transparent 78%);
        width:45%;
        animation: card-shimmer-slide 5s ease-in-out infinite;
        animation-delay:1.4s;
        pointer-events:none;
        border-radius:inherit;
      }
      .chip-1 { animation: chip-bob-1 4.2s ease-in-out infinite; }
      .chip-2 { animation: chip-bob-2 5.1s ease-in-out infinite; animation-delay:-1.6s; }
      .chip-3 { animation: chip-bob-3 4.7s ease-in-out infinite; animation-delay:-.9s; }
      .live-dot-anim { animation: live-pulse 2s ease-in-out infinite; }

      .h-display {
        font-family:var(--font-cormorant),Georgia,serif;
        font-weight:300;
        font-size:clamp(3.2rem,5.5vw,5.2rem);
        line-height:1.0;
        letter-spacing:-.02em;
        color:rgba(255,255,255,.88);
      }
      .h-bold {
        font-family:var(--font-cormorant),Georgia,serif;
        font-weight:700;
        font-size:clamp(3.2rem,5.5vw,5.2rem);
        line-height:1.0;
        letter-spacing:-.03em;
        color:#fff;
      }
      .h-gold-italic {
        font-family:var(--font-cormorant),Georgia,serif;
        font-weight:600;
        font-style:italic;
        font-size:clamp(2.4rem,4vw,3.8rem);
        line-height:1.05;
        letter-spacing:-.02em;
        color:#d5aa41;
      }
      .h-gold-dim {
        font-family:var(--font-cormorant),Georgia,serif;
        font-weight:300;
        font-style:italic;
        font-size:clamp(2rem,3.2vw,3rem);
        line-height:1.1;
        color:rgba(213,170,65,.55);
      }
      .card-gradient-text {
        background:linear-gradient(135deg,#d5aa41 0%,#f0d070 45%,#c9943c 100%);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
        background-clip:text;
      }

      /* ── Responsive card layout ── */
      .card-stage {
        position:relative;
        width:360px;
        max-width:calc(100vw - 48px);
        height:500px;
        perspective:1400px;
        flex-shrink:0;
      }
      .card-back-el  { width:310px; }
      .card-main-el  { width:340px; }
      .card-chip     { display:block; }

      @media (max-width:1023px) {
        .card-chip    { display:none !important; }
        .card-stage   { width:100%; max-width:380px; margin:0 auto; }
        .card-back-el { width:calc(100% - 50px) !important; }
        .card-main-el { width:calc(100% - 20px) !important; }
        .h-card       { padding-top:32px; }
      }
      @media (max-width:479px) {
        .card-stage   { max-width:calc(100vw - 40px); height:480px; }
        .h-display,.h-bold { font-size:clamp(2.2rem,9vw,3.2rem) !important; }
        .h-gold-italic     { font-size:clamp(1.8rem,7vw,2.4rem) !important; }
        .h-gold-dim        { font-size:clamp(1.4rem,5.5vw,1.8rem) !important; }
      }
    `}</style>
  );
}

function Hero() {
  return (
    <section className="h-scene relative min-h-screen overflow-hidden" aria-labelledby="hero-heading">
      <HeroStyles />

      {/* ── Animated gradient orbs ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute rounded-full" style={{
          width:'72vw',height:'72vw',top:'-18%',right:'-18%',
          background:'radial-gradient(circle,rgba(0,66,130,.65) 0%,transparent 68%)',
          filter:'blur(48px)',animation:'orb-drift-a 19s ease-in-out infinite',
        }}/>
        <div className="absolute rounded-full" style={{
          width:'44vw',height:'44vw',bottom:'-12%',left:'-6%',
          background:'radial-gradient(circle,rgba(213,170,65,.28) 0%,transparent 65%)',
          filter:'blur(56px)',animation:'orb-drift-b 15s ease-in-out infinite',animationDelay:'-6s',
        }}/>
        <div className="absolute rounded-full" style={{
          width:'95vw',height:'95vw',top:'50%',left:'50%',
          transform:'translate(-50%,-50%)',
          background:'radial-gradient(circle,rgba(0,39,78,.55) 0%,transparent 65%)',
          filter:'blur(64px)',animation:'orb-drift-c 24s ease-in-out infinite',
        }}/>
      </div>

      {/* ── Main content: split layout ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6" style={{paddingTop:'148px',paddingBottom:'88px',minHeight:'100vh',display:'flex',alignItems:'center'}}>
        <div className="grid w-full items-center gap-16 lg:grid-cols-2 lg:gap-20">

          {/* LEFT: Typography */}
          <div>
            {/* Label */}
            <div className="h-label mb-8 inline-flex items-center gap-2.5 rounded-full border px-4 py-2"
              style={{borderColor:'rgba(255,255,255,.1)',background:'rgba(255,255,255,.05)',backdropFilter:'blur(8px)'}}>
              <span className="live-dot-anim h-1.5 w-1.5 rounded-full bg-emerald-400"/>
              <span className="text-xs font-medium uppercase tracking-widest" style={{color:'rgba(255,255,255,.78)'}}>
                Toronto · GTA · Bilingual EN / ES
              </span>
            </div>

            {/* H1 */}
            <h1 id="hero-heading">
              <span className="h-display h-line1 block">
                <span className="en-only">Spanish mortgage</span>
                <span className="es-only">La corredora</span>
              </span>
              <span className="h-bold h-line2 block">
                <span className="en-only">broker in Toronto.</span>
                <span className="es-only">hipotecaria en Toronto.</span>
              </span>
              <span className="h-gold-italic h-line3 block mt-1">
                <span className="en-only">The banks said no.</span>
                <span className="es-only">El banco dijo que no.</span>
              </span>
              <span className="h-gold-dim h-gold-dim-anim block">
                <span className="en-only">We find who says yes.</span>
                <span className="es-only">Nosotros encontramos quién dice sí.</span>
              </span>
            </h1>

            {/* Animated gold rule */}
            <div className="h-divider my-7 h-px"
              style={{background:'linear-gradient(90deg,#d5aa41,rgba(213,170,65,.4) 60%,transparent)'}}
            />

            {/* Subtitle */}
            <p className="h-sub mb-4 font-light italic" style={{
              fontFamily:"var(--font-cormorant),Georgia,serif",
              fontSize:'1.15rem',
              color:'rgba(255,255,255,.65)',
              letterSpacing:'.01em',
            }}>
              <span className="en-only">For the Spanish-speaking community. No matter what the bank said.</span>
              <span className="es-only">Para la comunidad hispana. Sin importar lo que dijo el banco.</span>
            </p>

            {/* Body */}
            <p className="h-body mb-8 max-w-md text-sm leading-relaxed" style={{color:'rgba(255,255,255,.72)'}}>
              <span className="en-only">{AGENT} is a licensed mortgage agent with {BROKERAGE}, serving Spanish-speaking Canadians across the GTA. Self-employed, newcomers, private mortgages — situations most brokers won&rsquo;t touch. In English and in Spanish.</span>
              <span className="es-only">{AGENT} es agente hipotecaria licenciada con {BROKERAGE}, al servicio de canadienses de habla hispana en el GTA. Trabajadores independientes, recién llegados, hipotecas privadas — situaciones que la mayoría no atienden.</span>
            </p>

            {/* CTAs */}
            <div className="h-ctas mb-8 flex flex-wrap gap-3">
              <a href={`tel:${PHONE_RAW}`}
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5"
                style={{
                  background:'linear-gradient(135deg,#d5aa41 0%,#eecf5a 50%,#d5aa41 100%)',
                  color:'#070d16',
                  boxShadow:'0 8px 32px rgba(213,170,65,.35)',
                }}>
                <span className="en-only">Call {PHONE} &rarr;</span>
                <span className="es-only">Llamar {PHONE} &rarr;</span>
              </a>
              <a href={`mailto:${EMAIL}`}
                className="inline-flex items-center rounded-full border px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:-translate-y-0.5"
                style={{borderColor:'rgba(255,255,255,.18)',background:'rgba(255,255,255,.07)'}}>
                <span className="en-only">Free consultation</span>
                <span className="es-only">Consulta gratuita</span>
              </a>
            </div>

            {/* Trust row */}
            <div className="h-trust flex flex-wrap items-center gap-3 text-xs" style={{color:'rgba(255,255,255,.62)'}}>
              <span className="font-semibold" style={{color:'rgba(213,170,65,.95)'}}>{RATING}★ Google</span>
              <span className="h-3 w-px" style={{background:'rgba(255,255,255,.12)'}}/>
              <span><span className="en-only">{REVIEW_CT}+ reviews</span><span className="es-only">{REVIEW_CT}+ reseñas</span></span>
              <span className="h-3 w-px" style={{background:'rgba(255,255,255,.12)'}}/>
              <span>{LICENCE}</span>
              <span className="h-3 w-px" style={{background:'rgba(255,255,255,.12)'}}/>
              <span><span className="en-only">FSRA regulated</span><span className="es-only">Regulada por FSRA</span></span>
            </div>
          </div>

          {/* RIGHT: 3D card stage */}
          <div className="h-card flex items-center justify-center">
            <AgentCard />
          </div>

        </div>
      </div>
    </section>
  );
}

function AgentCard() {
  return (
    <div className="card-stage">

      {/* ── Back: Bank rejection card ── */}
      <div className="card-back card-back-el absolute overflow-hidden rounded-2xl" style={{
        height:'190px',
        bottom:'32px',left:'16px',
        background:'linear-gradient(135deg,#111827 0%,#1a2035 100%)',
        border:'1px solid rgba(255,255,255,.08)',
        zIndex:0,
      }}>
        <div className="flex h-full flex-col justify-between p-5" style={{opacity:.55}}>
          <span className="text-xs font-semibold uppercase tracking-widest" style={{color:'rgba(255,255,255,.55)'}}>
            Major Bank · Mortgage Application
          </span>
          <div>
            <p className="text-2xl font-bold tracking-widest" style={{color:'rgba(239,68,68,.80)'}}>DECLINED</p>
            <p className="mt-1 text-xs" style={{color:'rgba(255,255,255,.55)'}}>
              Income does not meet standard qualification criteria.
            </p>
          </div>
        </div>
      </div>

      {/* ── Main: Pre-approval card ── */}
      <div className="card-main card-sheen card-main-el absolute overflow-hidden rounded-2xl" style={{
        top:0,left:'10px',
        background:'linear-gradient(148deg,#0d2340 0%,#00274e 42%,#003566 78%,#004282 100%)',
        border:'1px solid rgba(213,170,65,.28)',
        boxShadow:'40px 44px 80px rgba(0,0,0,.72),0 0 56px rgba(213,170,65,.1),inset 0 1px 0 rgba(255,255,255,.12)',
        zIndex:10,
        position:'relative',
      }}>
        {/* Top gold stripe */}
        <div className="absolute left-0 right-0 top-0 h-[3px]"
          style={{background:'linear-gradient(90deg,#d5aa41,#eecf5a 50%,#d5aa41)'}}/>

        <div className="flex flex-col gap-5 p-7">

          {/* Card header */}
          <div className="flex items-start justify-between">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/dlc-logo.svg"
                alt="Dominion Lending Centres" width={110} height={50}
                style={{height:'26px',width:'auto',filter:'brightness(0) invert(1)',opacity:.90}}/>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider" style={{color:'rgba(255,255,255,.68)'}}>
                Elite Mortgage Group
              </p>
            </div>
            <span className="rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wider"
              style={{background:'rgba(213,170,65,.18)',color:'#e8c55a',border:'1px solid rgba(213,170,65,.45)'}}>
              ✓ Qualified
            </span>
          </div>

          {/* Status headline */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{color:'rgba(255,255,255,.65)'}}>Application status</p>
            <p className="card-gradient-text text-[2.4rem] font-bold leading-none tracking-tight"
              style={{fontFamily:"var(--font-cormorant),Georgia,serif"}}>
              Pre-Approved
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-2.5">
            {[
              {label:'Lenders matched',val:`${LENDERS}+`},
              {label:'Your cost',val:'$0'},
              {label:'Approval time',val:'5–10 days'},
              {label:'Languages',val:'EN + ES'},
            ].map(item => (
              <div key={item.label} className="rounded-xl p-3"
                style={{background:'rgba(255,255,255,.06)',border:'1px solid rgba(255,255,255,.1)'}}>
                <p className="text-xs font-medium uppercase tracking-wider" style={{color:'rgba(255,255,255,.65)'}}>{item.label}</p>
                <p className="mt-1 text-sm font-bold text-white">{item.val}</p>
              </div>
            ))}
          </div>

          {/* Agent row */}
          <div className="flex items-center gap-3 rounded-xl p-3"
            style={{background:'rgba(213,170,65,.08)',border:'1px solid rgba(213,170,65,.22)'}}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/janice-mejias.jpg"
              alt={AGENT} width={40} height={40}
              fetchPriority="high"
              style={{width:'40px',height:'40px',borderRadius:'50%',objectFit:'cover',
                objectPosition:'center top',border:'2px solid rgba(213,170,65,.50)',flexShrink:0}}/>
            <div>
              <p className="text-sm font-semibold text-white">{AGENT}</p>
              <p className="text-xs" style={{color:'rgba(255,255,255,.65)'}}>
                Mortgage Agent Level 1 · {LICENCE}
              </p>
            </div>
          </div>

          {/* CTA button */}
          <a href={`tel:${PHONE_RAW}`}
            className="block w-full rounded-xl py-3 text-center text-sm font-bold transition hover:opacity-90"
            style={{
              background:'linear-gradient(135deg,#d5aa41 0%,#eecf5a 100%)',
              color:'#070d16',letterSpacing:'.02em',
            }}>
            Call {PHONE}
          </a>

        </div>
      </div>

      {/* ── Floating stat chips — hidden on mobile ── */}
      <div className="card-chip chip-1 absolute rounded-xl px-3 py-2" style={{
        top:'-14px',right:'-28px',zIndex:20,
        background:'rgba(0,66,130,.90)',border:'1px solid rgba(255,255,255,.18)',
        backdropFilter:'blur(12px)',boxShadow:'0 8px 32px rgba(0,0,0,.45)',
      }}>
        <p className="text-xs font-semibold uppercase tracking-wider" style={{color:'rgba(255,255,255,.72)'}}>Google</p>
        <p className="text-sm font-bold" style={{color:'#eecf5a'}}>{RATING}★ Rating</p>
      </div>

      <div className="card-chip chip-2 absolute rounded-xl px-3 py-2" style={{
        bottom:'96px',right:'-38px',zIndex:20,
        background:'rgba(0,39,78,.92)',border:'1px solid rgba(213,170,65,.28)',
        backdropFilter:'blur(12px)',boxShadow:'0 8px 32px rgba(0,0,0,.45)',
      }}>
        <p className="text-xs font-semibold uppercase tracking-wider" style={{color:'rgba(255,255,255,.70)'}}>Lenders</p>
        <p className="text-sm font-bold text-white">{LENDERS}+</p>
      </div>

      <div className="card-chip chip-3 absolute rounded-xl px-3 py-2" style={{
        bottom:'200px',left:'-16px',zIndex:20,
        background:'rgba(213,170,65,.1)',border:'1px solid rgba(213,170,65,.28)',
        backdropFilter:'blur(12px)',boxShadow:'0 8px 32px rgba(213,170,65,.1)',
      }}>
        <p className="text-xs font-semibold uppercase tracking-wider" style={{color:'rgba(213,170,65,.88)'}}>Standard fee</p>
        <p className="text-sm font-bold" style={{color:'#eecf5a'}}>$0</p>
      </div>

    </div>
  );
}

/* ─── Trust Bar ──────────────────────────────────────── */
function TrustBar() {
  return (
    <div className="border-y border-ink-100/80 bg-[#00274e]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 px-6 py-8 md:grid-cols-4">
        {[
          { num: `${LENDERS}+`, label: "Lenders available" },
          { num: `${RATING}★`,  label: "Google rating" },
          { num: "EN + ES",     label: "Bilingual service" },
          { num: "Free",        label: "Standard mortgages" },
        ].map((s) => (
          <div key={s.label} className="text-center text-white">
            <div className="text-3xl font-bold tracking-tightish">{s.num}</div>
            <div className="mt-1 text-xs text-white/60">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Who We Help ────────────────────────────────────── */
function WhoWeHelp() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-ink-50/50">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <Pill><span className="en-only">Who we help</span><span className="es-only">A quién ayudamos</span></Pill>
        <h2
          id="services-heading"
          className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tightish text-ink-900 md:text-4xl"
        >
          <span className="en-only">Mortgage situations the banks turn down</span>
          <span className="es-only">Situaciones hipotecarias que los bancos rechazan</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-ink-600">
          If you have a steady T4 job, great credit, and just want the lowest posted rate — any broker can help you.
          Where we specialize: complex income, newcomers, and the cases banks decline.
        </p>

        <div className="mt-12 grid gap-5 text-left md:grid-cols-2">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  pill, title, body, visual,
}: {
  pill: string; title: string; body: string; visual: React.ReactNode;
}) {
  return (
    <article
      className="rounded-2xl border border-ink-100 bg-white p-8 transition hover:border-ink-200 hover:shadow-sm"
    >
      <span className="inline-flex items-center gap-2 rounded-full bg-ink-50 px-3 py-1 text-xs font-semibold text-ink-800">
        <span className="h-1.5 w-1.5 rounded-full bg-[#004282]" />
        {pill}
      </span>
      <div className="mt-6">{visual}</div>
      <h3 className="mt-5 text-lg font-semibold tracking-tightish text-ink-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-600">{body}</p>
    </article>
  );
}

/* ─── Testimonials ───────────────────────────────────── */
function Testimonials() {
  return (
    <section aria-labelledby="reviews-heading" className="border-t border-ink-100/80 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Pill><span className="en-only">Client reviews</span><span className="es-only">Reseñas de clientes</span></Pill>
            <h2 id="reviews-heading" className="mt-3 text-3xl font-semibold tracking-tightish text-ink-900">
              <span className="en-only">Rated {RATING}★ on Google.</span>
              <span className="es-only">Calificación {RATING}★ en Google.</span>
            </h2>
          </div>
          <p className="text-sm text-ink-600">{REVIEW_CT}+ verified reviews</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <blockquote
              key={r.name}
              className="rounded-2xl border border-ink-100 bg-ink-50/60 p-6"
            >
              <p className="text-[#d5aa41] tracking-widest text-sm" aria-label={`${RATING} stars`}>★★★★★</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-800 italic">&ldquo;{r.text}&rdquo;</p>
              <footer className="mt-5 flex items-center gap-3">
                <div
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#004282] text-xs font-bold text-white"
                  aria-hidden="true"
                >
                  {r.initials}
                </div>
                <div>
                  <cite className="block text-xs font-semibold text-ink-900 not-italic">{r.name}</cite>
                  <span className="text-[10px] text-ink-600">{r.loc}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Service Area ───────────────────────────────────── */
function ServiceArea() {
  return (
    <section id="area" aria-labelledby="area-heading" className="border-t border-ink-100/80 bg-[#00274e]">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center text-white">
        <Pill light><span className="en-only">Service area · Ontario</span><span className="es-only">Área de servicio · Ontario</span></Pill>
        <h2 id="area-heading" className="mt-4 text-2xl font-semibold tracking-tightish">
          <span className="en-only">Serving Spanish-speaking clients across Ontario</span>
          <span className="es-only">Atendiendo a clientes de habla hispana en todo Ontario</span>
        </h2>
        <p className="mt-3 text-sm text-white/60 max-w-xl mx-auto">
          <span className="en-only">Licensed to arrange mortgages province-wide. Consultations available by phone, video, or in person in Kitchener-Waterloo.</span>
          <span className="es-only">Licenciada para gestionar hipotecas en toda la provincia. Consultas por teléfono, video o en persona en Kitchener-Waterloo.</span>
        </p>

        <div className="mt-10 grid grid-cols-3 items-center justify-items-center gap-x-8 gap-y-5 sm:grid-cols-4 md:grid-cols-6">
          {AREAS.map((area) => (
            <span
              key={area}
              className="text-sm font-semibold tracking-tight text-white/70 transition hover:text-white"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ────────────────────────────────────────────── */
function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="border-t border-ink-100/80 bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="text-center">
          <Pill>FAQ</Pill>
          <h2 id="faq-heading" className="mt-4 text-3xl font-semibold tracking-tightish text-ink-900">
            <span className="en-only">Answers before you call</span>
            <span className="es-only">Respuestas antes de llamar</span>
          </h2>
          <p className="mt-3 text-ink-600">Questions we hear every week. Answered straight.</p>
        </div>

        <dl className="mt-12 divide-y divide-ink-100">
          {FAQ_ITEMS.map((item) => (
            <div key={item.q} className="py-6">
              <dt className="text-base font-semibold text-ink-900">{item.q}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-ink-600">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ─── Booking CTA ────────────────────────────────────── */
function BookingCta() {
  return (
    <section id="contact" aria-labelledby="cta-heading" className="border-t border-ink-100/80 bg-ink-50/50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl border border-ink-100 bg-white p-10 md:p-14">
          <div className="grid items-start gap-8 md:grid-cols-[1.5fr_1fr]">
            <div>
              <h2 id="cta-heading" className="text-3xl font-semibold tracking-tightish text-ink-900 md:text-4xl">
                <span className="en-only">Not sure if you qualify?<br />Call and find out.</span>
                <span className="es-only">¿No sabes si calificas?<br />Llama y averígualo.</span>
              </h2>
              <p className="mt-4 max-w-xl text-ink-600">
                <span className="en-only">A 20-minute call covers most situations. You&rsquo;ll know where you stand on lender options, rate expectations, and next steps — with no commitment and no fee.</span>
                <span className="es-only">Una llamada de 20 minutos cubre la mayoría de situaciones. Sabrás dónde estás con opciones de prestamistas, tasas y próximos pasos — sin compromiso ni costo.</span>
              </p>
              <p className="mt-3 text-sm text-ink-500">
                <strong className="text-ink-800">{AGENT}</strong> &middot; {BROKERAGE} &middot; {LICENCE} &middot; Regulated by FSRA
              </p>

              {/* Business hours */}
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-ink-100 bg-white px-4 py-2 text-xs text-ink-600">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Mon–Sat, 9 am–7 pm &nbsp;·&nbsp; Available in English and Spanish
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={`tel:${PHONE_RAW}`}
                className="rounded-full bg-[#004282] px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#003060]"
              >
                Call {PHONE} &rarr;
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="rounded-full border border-ink-200 bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink-800 transition hover:border-ink-400"
              >
                Email {AGENT}
              </a>
              <a
                href="https://dlcapp.ca/id/430256?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-ink-200 bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink-800 transition hover:border-ink-400"
              >
                Book via DLC App
              </a>

              {/* Physical address */}
              <address className="mt-2 text-center text-xs not-italic text-ink-600 leading-relaxed">
                447 Frederick Street, 3rd Floor<br />
                Kitchener, ON &nbsp;N2H 2P4<br />
                <a href={`tel:${PHONE_RAW}`} className="text-[#004282] hover:underline">{PHONE}</a>
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────── */
function PageFooter() {
  return (
    <footer className="border-t border-ink-100/80 bg-[#fafaf9]">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-start justify-between gap-3 text-xs text-ink-500 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <DlcMark />
            <span className="font-semibold text-ink-800">{AGENT}</span>
            <span>·</span>
            <span>{BROKERAGE}</span>
            <span>·</span>
            <span>{LICENCE}</span>
          </div>
          <span>© {new Date().getFullYear()} {AGENT} · Regulated by FSRA · {PHONE}</span>
        </div>
        <p className="mt-4 text-[11px] text-ink-600 leading-relaxed max-w-3xl">
          {AGENT} is a licensed Mortgage Agent Level 1 with {BROKERAGE}, regulated by the Financial Services Regulatory Authority of Ontario (FSRA).
          Your home may be repossessed if you do not keep up repayments on your mortgage.
          For private or non-conforming mortgage solutions, a lender or broker fee may apply and will always be disclosed before commitment.
        </p>
      </div>
    </footer>
  );
}

/* ─── Shared UI ──────────────────────────────────────── */
function Pill({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold shadow-[0_1px_2px_rgba(0,0,0,0.04)] ${
      light
        ? "border-white/20 bg-white/10 text-white"
        : "border-ink-100 bg-white text-ink-800"
    }`}>
      <span className={`inline-block h-1.5 w-1.5 rounded-full ${light ? "bg-[#d5aa41]" : "bg-[#004282]"}`} />
      {children}
    </span>
  );
}

function DlcMark() {
  return (
    <div
      className="flex h-9 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-[#00274e] px-2"
      aria-label="Dominion Lending Centres"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/dlc-logo.svg"
        alt="Dominion Lending Centres"
        width={52}
        height={24}
        className="h-5 w-auto"
      />
    </div>
  );
}

/* ─── Data ───────────────────────────────────────────── */
const AREAS = [
  "Toronto", "Mississauga", "Brampton", "Vaughan", "Markham", "Richmond Hill",
  "Pickering", "Ajax", "Whitby", "Oshawa", "Hamilton", "Burlington",
  "Kitchener", "Waterloo", "Cambridge", "Guelph", "Oakville", "Milton",
];

const REVIEWS = [
  {
    initials: "MR",
    name: "Miguel R.",
    loc: "Self-employed · Kitchener",
    text: "Janice helped us when three other brokers said it was impossible. Self-employed, 2 years of books — she found a lender and we closed in 5 weeks. She explained everything in Spanish. Absolutely incredible.",
  },
  {
    initials: "LV",
    name: "Luis & Carmen V.",
    loc: "Homeowners · Hamilton",
    text: "We had property tax arrears and no idea what to do. Janice arranged a second mortgage in 10 days. Honest, fast, zero judgment. We don't know what we would have done without her.",
  },
  {
    initials: "AP",
    name: "Alejandra P.",
    loc: "First-time buyer · Mississauga",
    text: "First time buying in Canada. We were so lost. Janice walked us through everything in Spanish, step by step. She called us before our renewal too. We will never use anyone else.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Is there a Spanish-speaking mortgage broker in Toronto?",
    a: `Yes. ${AGENT} is a licensed Mortgage Agent Level 1 with ${BROKERAGE} (${LICENCE}), serving Spanish-speaking clients across Toronto and the GTA. She provides mortgage guidance in both English and Spanish — from initial consultation through to closing.`,
  },
  {
    q: "Can I get a mortgage in Canada if I'm self-employed?",
    a: "Yes. The key is finding a lender whose guidelines accommodate stated income, T4s with write-offs, or non-traditional income. Banks apply strict qualification rules. Many credit unions and private lenders do not. A broker with access to 90+ lenders can find options a bank would decline. Most self-employed approvals take 5–10 business days once documents are in.",
  },
  {
    q: "What is a second mortgage and when does it make sense?",
    a: "A second mortgage lets you borrow against the equity you've built in your home without replacing your first mortgage. Common uses: paying property tax arrears, consolidating high-interest debt, or covering urgent expenses. When CRA or municipal tax penalties are compounding, a second mortgage can stop the bleeding. Private second mortgages typically fund in 10–15 business days.",
  },
  {
    q: "Can newcomers to Canada qualify for a mortgage?",
    a: "Yes. There are programs specifically designed for newcomers, including permanent residents with limited Canadian credit history. Some lenders accept international credit reports. Others look at the full financial picture — employment, down payment size, income stability. The options vary by lender, which is why working with a broker who knows the programs matters.",
  },
  {
    q: "Does a mortgage broker in Ontario charge fees?",
    a: "For most standard residential mortgages, the broker is compensated by the lender on completion. You pay nothing out of pocket. For private mortgages, bridge financing, or non-conforming situations, a lender or broker fee may apply. This is always disclosed in writing before you commit — no surprises.",
  },
];

/* ─── Service card panels ────────────────────────────── */
const SERVICES = [
  {
    pill: "Self-employed",
    title: "Mortgage approval for self-employed Canadians",
    body: "Banks measure income from line 150 of your NOA. Most self-employed borrowers write off expenses — which lowers that number artificially. We work with lenders who use gross revenue, bank deposits, or stated income programs instead.",
    visual: <SelfEmployedPanel />,
  },
  {
    pill: "Newcomers",
    title: "First mortgage for newcomers to Canada",
    body: "You've arrived, you're working, and you want to buy. Limited Canadian credit history is not a dealbreaker. Newcomer programs exist at several lenders — we match your profile to the one that works.",
    visual: <NewcomerPanel />,
  },
  {
    pill: "Private mortgage",
    title: "Second mortgage for property tax or debt relief",
    body: "Property tax arrears trigger penalties that compound daily. A second mortgage accesses your home equity to clear the debt fast. Most private second mortgages fund in 10–15 business days. We move when you need to.",
    visual: <PrivateMortgagePanel />,
  },
  {
    pill: "Renewal",
    title: "Mortgage renewal — don't sign with your bank first",
    body: "Your bank sends a renewal offer 120 days early because early signers rarely shop. We compare your renewal across 90+ lenders. Most clients find a better rate in 48 hours. The review is free.",
    visual: <RenewalPanel />,
  },
];

function SelfEmployedPanel() {
  return (
    <div className="rounded-xl border border-ink-100 bg-ink-50 p-4">
      <div className="text-[10px] font-semibold uppercase tracking-wider text-ink-600">Income types accepted</div>
      <ul className="mt-3 space-y-1.5 text-xs">
        {[
          "T4 with write-offs",
          "Stated / gross revenue",
          "Bank deposit averaging",
          "2-year NOA average",
          "Corporation draws + dividends",
        ].map((t) => (
          <li key={t} className="flex items-center gap-2 rounded-lg border border-ink-100 bg-white px-3 py-2 text-ink-800">
            <span className="text-[#004282] font-bold">✓</span> {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

function NewcomerPanel() {
  return (
    <div className="rounded-xl border border-ink-100 bg-ink-50 p-4">
      <div className="text-[10px] font-semibold uppercase tracking-wider text-ink-600">Newcomer program highlights</div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {[
          { label: "Credit history", val: "Not required" },
          { label: "Min. down payment", val: "5–10%" },
          { label: "Int'l credit", val: "Accepted" },
          { label: "PR status needed", val: "Yes" },
        ].map((r) => (
          <div key={r.label} className="rounded-lg border border-ink-100 bg-white px-3 py-2">
            <div className="text-[9px] font-semibold uppercase tracking-wider text-ink-600">{r.label}</div>
            <div className="mt-0.5 text-sm font-bold text-ink-900">{r.val}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PrivateMortgagePanel() {
  return (
    <div className="rounded-xl border border-ink-100 bg-ink-50 p-4">
      <div className="text-[10px] font-semibold uppercase tracking-wider text-ink-600">Typical private mortgage timeline</div>
      <ul className="mt-3 space-y-1.5 text-xs">
        {[
          { step: "Day 1", desc: "Application + documents submitted" },
          { step: "Day 3", desc: "Lender approval issued" },
          { step: "Day 5", desc: "Commitment letter signed" },
          { step: "Day 10–15", desc: "Funds advanced to lawyer" },
        ].map((r) => (
          <li key={r.step} className="flex items-center gap-3 rounded-lg border border-ink-100 bg-white px-3 py-2">
            <span className="flex-shrink-0 font-mono text-[10px] font-bold text-[#004282]">{r.step}</span>
            <span className="text-ink-700">{r.desc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RenewalPanel() {
  return (
    <div className="rounded-xl border border-ink-100 bg-ink-50 p-4">
      <div className="text-[10px] font-semibold uppercase tracking-wider text-ink-600">Why shop your renewal</div>
      <div className="mt-3 space-y-2 text-xs">
        <div className="flex items-center justify-between rounded-lg border border-ink-100 bg-white px-3 py-2">
          <span className="text-ink-600">Your bank&rsquo;s posted renewal rate</span>
          <span className="font-mono font-bold text-ink-600">5.89%</span>
        </div>
        <div className="flex items-center justify-between rounded-lg border-2 border-[#004282] bg-white px-3 py-2">
          <span className="font-semibold text-ink-900">Shopped across 90+ lenders</span>
          <span className="font-mono font-bold text-[#004282]">4.99%</span>
        </div>
        <p className="px-1 text-ink-600">
          On a $500K mortgage over 5 years: 0.9% = ~$22,500 saved.
        </p>
      </div>
    </div>
  );
}
