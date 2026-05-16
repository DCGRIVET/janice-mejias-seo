import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL = "https://acmeplumbing.example";
const PAGE_URL = `${SITE_URL}/services/plumbing-service-toronto`;
const PHONE = "(416) 555-0142";
const BRAND = "Acme Plumbing Co.";

export const metadata: Metadata = {
  title: "Plumbing Service Toronto · 24/7 Licensed Plumbers · Acme",
  description:
    "Toronto plumbing service that shows up fast. Burst pipes, water heaters, drain repair across the GTA. Licensed, insured, fixed-price quotes.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Plumbing Service Toronto · 24/7 Licensed Plumbers",
    description:
      "Toronto plumbing service. Burst pipes, water heaters, drains. Licensed, insured, fixed-price quotes.",
    locale: "en_CA",
    siteName: BRAND,
  },
};

function JsonLd() {
  const plumberSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: BRAND,
    image: `${SITE_URL}/logo.png`,
    "@id": PAGE_URL,
    url: PAGE_URL,
    telephone: PHONE,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 King St W",
      addressLocality: "Toronto",
      addressRegion: "ON",
      postalCode: "M5H 1A4",
      addressCountry: "CA",
    },
    areaServed: [
      "Toronto",
      "Mississauga",
      "North York",
      "Scarborough",
      "Etobicoke",
      "East York",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "184",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(plumberSchema) }}
    />
  );
}

export default function PlumbingServiceTorontoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <JsonLd />
      <PlumbingHeader />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <WhatWeDo />
        <CallToAction />
      </main>
      <PlumbingFooter />
    </div>
  );
}

function PlumbingHeader() {
  return (
    <header className="border-b border-ink-100/80 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/services/plumbing-service-toronto" className="flex items-center gap-2.5">
          <LogoMark />
          <span className="text-sm font-semibold tracking-tightish text-ink-900">
            {BRAND}
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-ink-700 md:flex">
          <a className="transition hover:text-ink-900" href="#services">Services</a>
          <a className="transition hover:text-ink-900" href="#area">Service area</a>
          <a className="transition hover:text-ink-900" href="#contact">Contact</a>
        </nav>
        <a
          href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
          className="rounded-full bg-ink-900 px-4 py-2 text-xs font-medium text-white transition hover:bg-ink-800"
        >
          Call {PHONE}
        </a>
      </div>
    </header>
  );
}

function PlumbingFooter() {
  return (
    <footer className="border-t border-ink-100/80 bg-[#fafaf9]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-8 text-xs text-ink-500 md:flex-row md:items-center">
        <div className="flex items-center gap-2.5">
          <LogoMark />
          <span className="font-semibold text-ink-800">{BRAND}</span>
          <span>·</span>
          <span>Licensed Toronto Plumber #2876541</span>
        </div>
        <span>
          © {new Date().getFullYear()} {BRAND} · 123 King St W, Toronto · {PHONE}
        </span>
      </div>
    </footer>
  );
}

function LogoMark() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-ink-900"
      aria-hidden="true"
    >
      <path d="M3 12h4l2-3h6l2 3h4" />
      <path d="M9 9V6" />
      <path d="M15 9V6" />
      <path d="M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(253,230,138,0.45)_0%,_transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-20 pb-12 text-center">
        <Pill>Toronto · 24/7 · Licensed</Pill>

        <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tightish text-ink-900 md:text-6xl">
          Plumbing service in Toronto. Same-day. Fixed price.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-600">
          Burst pipes, water heaters, drain repair across the GTA. Licensed,
          insured, on time. We quote before we start &mdash; no surprises on
          the invoice.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
            className="rounded-full bg-ink-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-ink-800"
          >
            Call {PHONE} <span className="ml-1">&rarr;</span>
          </a>
          <Link
            href="/feedback"
            className="rounded-full border border-ink-200 bg-white px-6 py-3 text-sm font-medium text-ink-800 transition hover:border-ink-400"
          >
            Book a free quote
          </Link>
        </div>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
          Average response · 38 min &middot; 4.9★ from 184 Toronto reviews
        </p>

        <div className="mx-auto mt-14 max-w-5xl">
          <PlumbingDashboard />
        </div>
      </div>
    </section>
  );
}

function PlumbingDashboard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-[0_30px_80px_-30px_rgba(10,16,24,0.25)]">
      <div className="flex items-center justify-between border-b border-ink-100 px-5 py-3">
        <div className="flex items-center gap-2">
          <LogoMark />
          <span className="text-sm font-semibold tracking-tightish text-ink-900">
            Service Dashboard
          </span>
        </div>
        <div className="hidden items-center gap-3 text-xs text-ink-400 md:flex">
          <span>Today · {new Date().toLocaleDateString("en-CA")}</span>
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-bold text-emerald-700">
            ● 12 trucks live
          </span>
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-full bg-ink-900 text-center text-[10px] font-bold leading-6 text-[#fde68a]">
              MK
            </span>
            <span className="font-semibold text-ink-800">Mike K.</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-0 bg-[#fafaf9]">
        <aside className="col-span-3 hidden flex-col gap-1 border-r border-ink-100 bg-white px-3 py-5 text-sm md:flex">
          {[
            { label: "Dispatch", active: true },
            { label: "Active jobs" },
            { label: "Quotes" },
            { label: "Customers" },
            { label: "Trucks" },
            { label: "Invoices" },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center justify-between rounded-md px-3 py-2 ${
                item.active
                  ? "bg-ink-900 text-white"
                  : "text-ink-600 hover:bg-ink-50"
              }`}
            >
              <span className="font-medium">{item.label}</span>
              {item.active && (
                <span className="text-xs text-[#fde68a]">&rarr;</span>
              )}
            </div>
          ))}
        </aside>

        <div className="col-span-12 flex flex-col gap-4 p-5 md:col-span-9">
          <div className="flex items-center justify-between">
            <div className="text-left">
              <h3 className="text-lg font-semibold tracking-tightish text-ink-900">
                Live dispatch · Toronto + GTA
              </h3>
              <p className="text-xs text-ink-400">
                3 emergency calls in queue · avg response 38 min
              </p>
            </div>
            <button className="rounded-full bg-ink-900 px-4 py-2 text-xs font-medium text-[#fde68a]">
              + Dispatch truck
            </button>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Active jobs", val: "12", delta: "now" },
              { label: "Avg response", val: "38m", delta: "-12m" },
              { label: "Jobs today", val: "47", delta: "+18%" },
              { label: "Customer rating", val: "4.9★", delta: "184 rev" },
            ].map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-xl border border-ink-100 bg-white px-4 py-3 text-left"
              >
                <div className="text-[10px] font-semibold uppercase tracking-wider text-ink-400">
                  {kpi.label}
                </div>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="font-mono text-2xl font-bold text-ink-900">
                    {kpi.val}
                  </span>
                  <span className="text-xs font-bold text-emerald-600">
                    {kpi.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-ink-100 bg-white p-4 md:col-span-2">
              <div className="flex items-center justify-between text-xs font-semibold text-ink-400">
                <span>Active service area · GTA</span>
                <span>12 trucks live</span>
              </div>
              <ServiceAreaMap />
            </div>

            <div className="rounded-xl border border-ink-100 bg-white p-4">
              <div className="text-xs font-semibold text-ink-400 text-left">
                Live job queue
              </div>
              <ul className="mt-3 space-y-2 text-left text-xs">
                {[
                  { who: "Sarah K.", area: "Riverdale", type: "Burst pipe", status: "EN ROUTE", color: "bg-red-100 text-red-700" },
                  { who: "David M.", area: "North York", type: "Water heater", status: "ON SITE", color: "bg-amber-100 text-amber-800" },
                  { who: "Priya R.", area: "Etobicoke", type: "Drain clog", status: "QUEUED", color: "bg-ink-100 text-ink-700" },
                ].map((r) => (
                  <li
                    key={r.who}
                    className="flex flex-col gap-1 rounded-lg border border-ink-100 px-3 py-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-ink-900">
                        {r.who}
                      </span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[9px] font-bold tracking-wider ${r.color}`}
                      >
                        {r.status}
                      </span>
                    </div>
                    <span className="text-ink-600">
                      {r.area} · {r.type}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceAreaMap() {
  const cells = Array.from({ length: 49 }, (_, i) => i);
  const intensity = (i: number) => {
    const row = Math.floor(i / 7);
    const col = i % 7;
    const dist = Math.abs(row - 3) + Math.abs(col - 3);
    if (dist <= 1) return "hot";
    if (dist <= 2) return "warm";
    if (dist <= 3) return "cool";
    return "outer";
  };
  const color = (key: string) => {
    if (key === "hot") return "bg-ink-900 text-[#fde68a]";
    if (key === "warm") return "bg-ink-700 text-white";
    if (key === "cool") return "bg-ink-300 text-ink-900";
    return "bg-ink-100 text-ink-400";
  };
  return (
    <div className="mt-3 grid grid-cols-7 gap-1">
      {cells.map((i) => {
        const key = intensity(i);
        return (
          <div
            key={i}
            className={`flex aspect-square items-center justify-center rounded font-mono text-[9px] font-bold ${color(key)}`}
            aria-hidden="true"
          >
            {key === "hot" ? "●" : ""}
          </div>
        );
      })}
    </div>
  );
}

function TrustedBy() {
  return (
    <section id="area" className="border-t border-ink-100/80 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        <Pill>Service area</Pill>
        <h2 className="mt-4 text-2xl font-semibold tracking-tightish text-ink-900">
          On call across the GTA
        </h2>

        <div className="mt-10 grid grid-cols-2 items-center justify-items-center gap-x-10 gap-y-8 text-ink-400 sm:grid-cols-3 md:grid-cols-6">
          {AREAS.map((area) => (
            <span
              key={area}
              className="text-lg font-semibold tracking-tight text-ink-400 transition hover:text-ink-800"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section id="services" className="bg-[#fafaf9]">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <Pill>What we fix</Pill>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tightish text-ink-900 md:text-4xl">
          The 4 things Toronto homeowners call us for
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-ink-600">
          Same-day for emergencies. Booked in 48 hours for everything else.
          One fixed price. No call-out fee if we don&rsquo;t fix it.
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
  pill,
  title,
  body,
  visual,
}: {
  pill: string;
  title: string;
  body: string;
  visual: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-8 transition hover:border-ink-200">
      <div className="flex items-center justify-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-ink-50 px-3 py-1 text-xs font-semibold text-ink-800">
          <span className="text-base leading-none">&#9733;</span> {pill}
        </span>
      </div>
      <div className="mt-6">{visual}</div>
      <h3 className="mt-6 text-lg font-semibold tracking-tightish text-ink-900">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-600">{body}</p>
    </div>
  );
}

function CallToAction() {
  return (
    <section id="contact" className="border-t border-ink-100/80">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl border border-ink-100 bg-white p-10 md:p-14">
          <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tightish text-ink-900 md:text-4xl">
                Got water where it shouldn&rsquo;t be?
              </h2>
              <p className="mt-3 max-w-xl text-ink-600">
                Call us before it spreads. 24/7 dispatch across Toronto and
                the GTA. We&rsquo;ll be there in under an hour for emergencies,
                with a fixed-price quote before any work starts.
              </p>
            </div>
            <div className="flex flex-col items-stretch gap-3">
              <a
                href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
                className="rounded-full bg-ink-900 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-ink-800"
              >
                Call now &middot; {PHONE}
              </a>
              <Link
                href="/feedback"
                className="rounded-full border border-ink-200 bg-white px-6 py-3 text-center text-sm font-medium text-ink-800 transition hover:border-ink-400"
              >
                Book a free quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-ink-100 bg-white px-3 py-1 text-xs font-semibold text-ink-800 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink-900" />
      {children}
    </span>
  );
}

const AREAS = [
  "Toronto",
  "Mississauga",
  "North York",
  "Scarborough",
  "Etobicoke",
  "East York",
];

const SERVICES = [
  {
    pill: "Emergency",
    title: "Burst pipe + water leak repair",
    body:
      "On-site in under an hour anywhere in Toronto. We isolate the line, find the leak, and patch it before your floors swell. 24/7, including holidays.",
    visual: <EmergencyPanel />,
  },
  {
    pill: "Water heater",
    title: "Water heater install + repair",
    body:
      "Tankless or tank. Installed in 4 hours, 12-year warranty, same-day quotes across the GTA. Same-day swap if yours died this morning.",
    visual: <HeaterPanel />,
  },
  {
    pill: "Drain",
    title: "Drain cleaning + camera inspection",
    body:
      "Backed-up basement? We snake it, scope it with a camera, and show you the footage. Quoted per job, not per hour &mdash; you see the price before we start.",
    visual: <DrainPanel />,
  },
  {
    pill: "Renovation",
    title: "Bathroom + kitchen rough-in",
    body:
      "Working with your contractor or solo. Permits pulled, code-compliant, inspected. Toronto-licensed master plumber on every job.",
    visual: <RenoPanel />,
  },
];

function EmergencyPanel() {
  return (
    <div className="rounded-xl border border-ink-100 bg-[#fafaf9] p-4">
      <div className="flex items-center justify-between text-xs font-semibold text-ink-400">
        <span>Average response</span>
        <span className="rounded-full bg-ink-900 px-2 py-0.5 text-[10px] text-[#fde68a]">
          24/7
        </span>
      </div>
      <div className="mt-3 flex items-baseline gap-3">
        <span className="font-mono text-4xl font-bold text-ink-900">38</span>
        <span className="text-sm font-semibold text-ink-600">min</span>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-ink-600">
        Median across <span className="font-semibold text-ink-900">184 Toronto calls</span> in the last 90 days.
      </p>
    </div>
  );
}

function HeaterPanel() {
  return (
    <div className="rounded-xl border border-ink-100 bg-[#fafaf9] p-4">
      <ul className="space-y-2 text-sm">
        {[
          { label: "Tankless install", time: "4 hrs" },
          { label: "Tank swap", time: "2 hrs" },
          { label: "Warranty included", time: "12 yrs" },
        ].map((r) => (
          <li
            key={r.label}
            className="flex items-center justify-between rounded-lg border border-ink-100 bg-white px-3 py-2"
          >
            <span className="text-ink-800">{r.label}</span>
            <span className="font-mono text-xs font-bold text-ink-900">
              {r.time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DrainPanel() {
  return (
    <div className="rounded-xl border border-ink-100 bg-[#fafaf9] p-4">
      <div className="text-xs font-semibold text-ink-400">Fixed-price jobs</div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
        {[
          { job: "Snake", price: "$189" },
          { job: "Camera scope", price: "$249" },
          { job: "Hydro-jet", price: "$489" },
          { job: "Line locate", price: "$179" },
        ].map((j) => (
          <div
            key={j.job}
            className="rounded-lg border border-ink-100 bg-white px-3 py-2"
          >
            <div className="text-ink-600">{j.job}</div>
            <div className="font-mono text-base font-bold text-ink-900">
              {j.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RenoPanel() {
  return (
    <div className="rounded-xl border border-ink-100 bg-[#fafaf9] p-4">
      <ul className="space-y-2 text-sm text-ink-800">
        {[
          "Toronto-licensed master plumber",
          "Permits pulled · code compliant",
          "Insured to $5M",
          "Works direct with your GC",
        ].map((t) => (
          <li
            key={t}
            className="flex items-start gap-2 rounded-lg border border-ink-100 bg-white px-3 py-2"
          >
            <span className="mt-0.5 text-[#fde68a]">&#10003;</span>
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
