import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { VENUES } from "./venues";

export const metadata = {
  title: "What Are the Best Wedding Venues in Toronto? (2026 Guide)",
  description:
    "What are the best wedding venues in Toronto? Our 2026 guide answers the question with 10 top venues — from historic castles like Casa Loma to luxury waterfront ballrooms.",
};

export default function BlogPostV1() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9]">
      <SiteHeader />

      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 py-16">
          <header className="mb-12">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
              <span>Toronto</span>
              <span>·</span>
              <span>Wedding venues</span>
              <span>·</span>
              <span>Updated May 2026</span>
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tightish text-ink-900 md:text-5xl">
              What Are the Best Wedding Venues in Toronto? (2026 Guide)
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              What are the best wedding venues in Toronto? It is one of the
              most common questions asked by couples planning their special
              day. With so many options ranging from historic castles to
              elegant waterfront ballrooms and contemporary industrial
              spaces, every couple wants to find a celebration space that
              perfectly matches their vision. To help you in your search, we
              have curated a comprehensive guide to the best wedding venues
              in Toronto for 2026, complete with capacity details, key
              features, and pricing information for each location.
            </p>
            <p className="mt-4 text-sm text-ink-400">
              {Math.round(WORD_COUNT)} word read · v1 (baseline)
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1600&q=70"
              alt="Toronto wedding venue hero"
              className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover"
            />
          </header>

          <section className="prose-base">
            <Intro />
            <VenueList />
            <FAQ />
            <Conclusion />
          </section>
        </article>

        <CompareCallout />
      </main>

      <SiteFooter />
    </div>
  );
}

const WORD_COUNT = 1500;

function Intro() {
  return (
    <div className="space-y-4 text-base leading-relaxed text-ink-800">
      <h2 className="!mt-12 text-2xl font-semibold tracking-tightish text-ink-900">
        Answering: what are the best wedding venues in Toronto?
      </h2>
      <p>
        Toronto is one of Canada&rsquo;s most sought-after wedding
        destinations, offering an incredible variety of unique wedding venues
        for every style and budget. When curating this list of the top 10
        wedding venues in Toronto, we considered a number of important factors
        including venue capacity, location, architectural beauty, available
        amenities, catering quality, and overall guest experience. Each of the
        wedding venues featured in this comprehensive guide has been carefully
        selected based on its reputation, versatility, and ability to
        accommodate weddings of various sizes and styles, from intimate
        gatherings to grand celebrations.
      </p>
      <p>
        Whether you are dreaming of a romantic castle wedding, an elegant
        downtown ballroom celebration with stunning city views, or a modern
        industrial-chic venue with exposed brick and natural light, this
        ultimate guide has you covered. Read on to discover the very best
        wedding venues in Toronto for your special day in 2026.
      </p>
    </div>
  );
}

function VenueList() {
  return (
    <div className="!mt-12 space-y-10">
      {VENUES.map((v, idx) => (
        <div
          key={v.name}
          id={v.slug}
          className="rounded-2xl border border-ink-100 bg-white p-8"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-900 font-mono text-sm font-bold text-white">
              {idx + 1}
            </span>
            <h3 className="text-xl font-semibold tracking-tightish text-ink-900 md:text-2xl">
              {v.name}
            </h3>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={v.image}
            alt={v.imageAlt}
            loading="lazy"
            className="mt-5 aspect-[16/9] w-full rounded-xl object-cover"
          />

          <div className="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
            <Stat label="Capacity" value={v.capacity} />
            <Stat label="Style" value={v.style} />
            <Stat label="Neighborhood" value={v.neighborhood} />
            <Stat label="Starting from" value={v.priceFrom} />
          </div>

          <p className="mt-5 leading-relaxed text-ink-800">{v.description}</p>

          <ul className="mt-4 space-y-2 text-sm text-ink-600">
            {v.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ink-900" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-ink-100 bg-[#fafaf9] px-3 py-2">
      <div className="text-[10px] font-semibold uppercase tracking-wider text-ink-400">
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold text-ink-900">{value}</div>
    </div>
  );
}

function FAQ() {
  return (
    <div className="!mt-16">
      <h2 className="text-2xl font-semibold tracking-tightish text-ink-900">
        Frequently asked questions about Toronto wedding venues
      </h2>
      <div className="mt-6 space-y-4">
        {FAQS.map((f) => (
          <details
            key={f.q}
            className="group rounded-xl border border-ink-100 bg-white p-5"
          >
            <summary className="cursor-pointer list-none text-base font-semibold text-ink-900">
              {f.q}
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

function Conclusion() {
  return (
    <div className="!mt-16 rounded-2xl border border-ink-100 bg-white p-8">
      <h2 className="text-2xl font-semibold tracking-tightish text-ink-900">
        Final thoughts
      </h2>
      <p className="mt-4 leading-relaxed text-ink-800">
        Toronto offers an incredible array of wedding venues to suit every
        couple&rsquo;s unique vision and budget. From the historic grandeur of
        Casa Loma to the contemporary luxury of the Four Seasons, the
        industrial charm of Steam Whistle Brewery, and the timeless elegance
        of the Eglinton Grand, there truly is a perfect venue for every kind
        of celebration. We hope this comprehensive guide to the top 10 wedding
        venues in Toronto helps you in your search for the perfect setting
        for your special day. Be sure to book your venue early — the most
        sought-after wedding venues in Toronto often book up 12 to 18 months
        in advance.
      </p>
    </div>
  );
}

function CompareCallout() {
  return (
    <section className="border-t border-ink-100/80 bg-white">
      <div className="mx-auto max-w-3xl px-6 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
          For the YouTube video
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tightish text-ink-900">
          Same post. Different writer.
        </h2>
        <p className="mt-3 text-ink-600">
          This is version 1 — written in the default AI tone. Now read{" "}
          <Link
            href="/blog/top-10-wedding-venues-in-toronto-v2"
            className="font-semibold text-ink-900 underline decoration-[#fde68a] decoration-4 underline-offset-4"
          >
            version 2 →
          </Link>{" "}
          rewritten with a voice file and matched against the top 3 ranking
          posts.
        </p>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "What is the average cost of a wedding venue in Toronto?",
    a: "The average cost of a wedding venue in Toronto ranges from $5,000 to $25,000+ depending on the venue, guest count, and time of year. Luxury venues like the Four Seasons or Casa Loma typically start at $15,000, while more affordable options like community halls and outdoor spaces can be booked for under $5,000.",
  },
  {
    q: "How far in advance should I book a wedding venue in Toronto?",
    a: "Most popular Toronto wedding venues book up 12 to 18 months in advance, especially for peak wedding season (May through October). For the most sought-after venues like Casa Loma or Liberty Grand, you may need to book 18 to 24 months ahead.",
  },
  {
    q: "What is the largest wedding venue in Toronto?",
    a: "Liberty Grand Entertainment Complex is one of Toronto's largest wedding venues, with three grand ballrooms that can accommodate up to 2,000 guests combined. The Fairmont Royal York and the Four Seasons Hotel Toronto are also among the largest hotel-based wedding venues in the city.",
  },
  {
    q: "Are there outdoor wedding venues in Toronto?",
    a: "Yes, Toronto has many beautiful outdoor wedding venues including the Berkeley Field House, Evergreen Brick Works, Casa Loma's gardens, and various waterfront locations along Lake Ontario. Most outdoor venues offer indoor backup options in case of inclement weather.",
  },
];
