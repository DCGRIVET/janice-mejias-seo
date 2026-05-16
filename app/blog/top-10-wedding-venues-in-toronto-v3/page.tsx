import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { VENUES } from "../top-10-wedding-venues-in-toronto/venues";

// ---------------------------------------------------------------------------
// On-page SEO markers — every one of them
// ---------------------------------------------------------------------------

const SITE_URL = "https://localseo.example";
const POST_URL = `${SITE_URL}/blog/top-10-wedding-venues-in-toronto-v3`;
const POST_PUBLISHED = "2026-05-15T09:00:00-04:00";
const POST_MODIFIED = "2026-05-15T09:00:00-04:00";
const POST_AUTHOR = "Jordan Kilpatrick";
const POST_HERO =
  "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1600&q=70";

// External links — official venue websites + authority sources
const VENUE_WEBSITES: Record<string, string> = {
  "casa-loma": "https://casaloma.ca/weddings/",
  "liberty-grand": "https://libertygrand.com/",
  "four-seasons": "https://www.fourseasons.com/toronto/weddings/",
  "hotel-x": "https://www.hotelxtoronto.com/weddings/",
  "steam-whistle": "https://steamwhistle.ca/private-events/",
  "eglinton-grand": "https://eglintongrand.com/weddings/",
  "fairmont-royal-york": "https://www.fairmont.com/royal-york-toronto/meetings-weddings/",
  "evergreen-brick-works": "https://www.evergreen.ca/evergreen-brick-works/venue-rentals/",
  "old-mill": "https://www.oldmilltoronto.com/weddings/",
  "globe-and-mail-centre": "https://www.globeandmailcentre.com/",
};

const AUTHORITY_SOURCES = [
  { name: "Toronto.com — Wedding venues guide", url: "https://www.toronto.com/things-to-do/" },
  { name: "WeddingWire — Toronto venues directory", url: "https://www.weddingwire.ca/wedding-venues/ontario/toronto" },
  { name: "The Knot — Toronto wedding venues", url: "https://www.theknot.com/marketplace/wedding-venues/toronto-on" },
  { name: "Ontario Wedding Network", url: "https://www.ontarioweddingnetwork.com/" },
];

// 1. Title tag (≤ 60 chars, primary keyword first)
// 2. Meta description (≤ 160 chars, keyword + CTA)
// 3. Canonical URL
// 4. OpenGraph + Twitter cards
// 5. robots / language / locale
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "What Are the Best Wedding Venues in Toronto? (2026)",
  description:
    "What are the best wedding venues in Toronto? The 10 venues couples actually book in 2026 — capacity, real Saturday prices, and what each one gets wrong.",
  alternates: { canonical: POST_URL },
  keywords: [
    "what are the best wedding venues toronto",
    "best wedding venues toronto",
    "wedding venues toronto",
    "toronto wedding venues 2026",
    "casa loma wedding",
    "liberty grand wedding",
  ],
  authors: [{ name: POST_AUTHOR }],
  openGraph: {
    type: "article",
    url: POST_URL,
    title: "What Are the Best Wedding Venues in Toronto? (2026)",
    description:
      "What are the best wedding venues in Toronto? 10 venues couples actually book — capacity, real prices, what each one gets wrong.",
    siteName: "Local SEO",
    locale: "en_CA",
    publishedTime: POST_PUBLISHED,
    modifiedTime: POST_MODIFIED,
    authors: [POST_AUTHOR],
    images: [
      {
        url: POST_HERO,
        width: 1600,
        height: 900,
        alt: "Toronto wedding venues — skyline at sunset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Are the Best Wedding Venues in Toronto? (2026)",
    description:
      "What are the best wedding venues in Toronto? 10 venues couples actually book — capacity, real prices, what each one gets wrong.",
    images: [POST_HERO],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

// 6. JSON-LD — Article + ItemList + FAQPage + BreadcrumbList
// (Google reads this for rich snippets in the SERP.)
function JsonLd() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Are the Best Wedding Venues in Toronto? (2026)",
    description:
      "What are the best wedding venues in Toronto? 10 venues couples actually book in 2026, with capacity, price and what each one gets wrong.",
    image: [POST_HERO],
    datePublished: POST_PUBLISHED,
    dateModified: POST_MODIFIED,
    author: { "@type": "Person", name: POST_AUTHOR },
    publisher: {
      "@type": "Organization",
      name: "Local SEO",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": POST_URL },
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: VENUES.length,
    itemListElement: VENUES.map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: v.name,
      url: `${POST_URL}#${v.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.aPlain },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "What Are the Best Wedding Venues in Toronto?",
        item: POST_URL,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

export default function BlogPostV3() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9]">
      <JsonLd />
      <SiteHeader />

      <main className="flex-1">
        <article
          className="mx-auto max-w-3xl px-6 py-16"
          itemScope
          itemType="https://schema.org/Article"
        >
          {/* 7. Breadcrumbs — visible + microdata */}
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-ink-400">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-ink-800">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog" className="hover:text-ink-800">
                  Blog
                </Link>
              </li>
              <li>/</li>
              <li className="text-ink-800">Best Wedding Venues in Toronto</li>
            </ol>
          </nav>

          <header className="mb-10">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-600">
              <span>Toronto</span>
              <span aria-hidden>·</span>
              <span>Wedding venues</span>
              <span aria-hidden>·</span>
              {/* 8. Published + modified dates, machine-readable */}
              <time
                dateTime={POST_PUBLISHED}
                itemProp="datePublished"
                className="text-ink-600"
              >
                Updated May 15, 2026
              </time>
            </div>

            {/* 9. Single H1, primary keyword in first 60 chars */}
            <h1
              className="mt-5 text-4xl font-semibold tracking-tightish text-ink-900 md:text-5xl"
              itemProp="headline"
            >
              What Are the Best Wedding Venues in Toronto? (2026)
            </h1>

            <p
              className="mt-5 text-lg leading-relaxed text-ink-700"
              itemProp="description"
            >
              tl;dr: ten venues couples actually book in 2026, with capacity,
              what the cheapest Saturday slot really costs, and the one thing
              each place gets wrong. Also dad jokes. My 14-year-old would be
              mortified. Anyway &mdash; <em>[switches to serious face]</em>{" "}
              let&rsquo;s get into it.
            </p>

            {/* 10. Byline with author microdata */}
            <p
              className="mt-4 text-sm text-ink-600"
              itemProp="author"
              itemScope
              itemType="https://schema.org/Person"
            >
              By <span itemProp="name">{POST_AUTHOR}</span> · ~1,650 word read
              · v3 (SEO-optimized)
            </p>

            {/* 11. Hero image — Next/Image with priority for LCP, sized correctly */}
            <Image
              src={POST_HERO}
              alt="Toronto skyline at sunset — wedding venue guide hero image"
              width={1600}
              height={900}
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover"
              itemProp="image"
            />
          </header>

          {/* 12. Table of contents — internal linking + dwell time */}
          <TableOfContents />

          <section>
            <Intro />
            <Verdicts />
            <FAQ />
            <Close />
            <Sources />
            <RelatedReading />
          </section>
        </article>

        <CompareCallout />
      </main>

      <SiteFooter />
    </div>
  );
}

function TableOfContents() {
  return (
    <aside
      aria-labelledby="toc-heading"
      className="!mt-4 mb-10 rounded-2xl border border-ink-100 bg-white p-6"
    >
      <h2
        id="toc-heading"
        className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400"
      >
        On this page
      </h2>
      <ol className="mt-4 grid gap-2 sm:grid-cols-2">
        {VENUES.map((v, i) => (
          <li key={v.slug}>
            <a
              href={`#${v.slug}`}
              className="text-sm text-ink-700 hover:text-ink-900 hover:underline"
            >
              <span className="font-mono text-xs text-ink-400">
                {String(i + 1).padStart(2, "0")}
              </span>{" "}
              {v.name}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}

function Intro() {
  return (
    <div className="space-y-4 text-base leading-relaxed text-ink-800">
      <h2 className="!mt-12 text-2xl font-semibold tracking-tightish text-ink-900">
        What are the best wedding venues in Toronto? Here are 10.
      </h2>
      <p>
        I&rsquo;ve got 99 problems but the Toronto wedding venue scene ain&rsquo;t
        one. (Okay it&rsquo;s a little bit one. Have you{" "}
        <em>seen</em> what people are paying for a Saturday in June?)
      </p>
      <p>
        Eight of these <strong>wedding venues in Toronto</strong> appear on every
        serious shortlist in the city. Two are personal calls. None of them are
        your aunt&rsquo;s backyard, despite her continued lobbying. The cut is
        brutal on purpose &mdash; you&rsquo;re getting the venues planners and
        photographers actually whisper to each other about, not a 30-venue dump
        that wastes a Saturday.
      </p>
      <p>
        Big-list highlights: a literal castle (
        <a href="#casa-loma" className="font-semibold text-ink-900 underline decoration-ink-200 underline-offset-2 hover:decoration-ink-400">
          Casa Loma
        </a>
        ), three ballrooms under one roof (
        <a href="#liberty-grand" className="font-semibold text-ink-900 underline decoration-ink-200 underline-offset-2 hover:decoration-ink-400">
          Liberty Grand
        </a>
        ), the best skyline shots in the city (
        <a href="#hotel-x" className="font-semibold text-ink-900 underline decoration-ink-200 underline-offset-2 hover:decoration-ink-400">
          Hotel X
        </a>
        ), and the most underrated value play in town (
        <a href="#steam-whistle" className="font-semibold text-ink-900 underline decoration-ink-200 underline-offset-2 hover:decoration-ink-400">
          Steam Whistle
        </a>
        ).
      </p>
      <p>Here&rsquo;s a few details for each:</p>
      <ul className="!mt-2 list-disc space-y-1 pl-6">
        <li>
          <strong>Capacity</strong> &mdash; the realistic ceiling, not the
          marketing number. (Marketing numbers and wedding numbers are like
          dad jokes and good jokes: technically the same category, wildly
          different result.)
        </li>
        <li>
          <strong>Starting price</strong> &mdash; Saturday night, 100 guests,
          peak season, all-in.
        </li>
        <li>
          <strong>The thing they get wrong</strong> &mdash; the part no one
          tells you on a tour.
        </li>
      </ul>
      <p>
        <em>[Switches to serious face]</em> Right. Pencils down. Here are the
        venues.
      </p>
    </div>
  );
}

function Verdicts() {
  return (
    <div className="!mt-12 space-y-10">
      {VENUES.map((v, i) => (
        <section
          key={v.slug}
          id={v.slug}
          aria-labelledby={`${v.slug}-heading`}
          className="rounded-2xl border border-ink-100 bg-white p-8"
        >
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-900 font-mono text-sm font-bold text-[#fde68a]"
            >
              {i + 1}
            </span>
            {/* 13. H2 for every venue, contains entity + primary keyword variation */}
            <h2
              id={`${v.slug}-heading`}
              className="text-xl font-semibold tracking-tightish text-ink-900 md:text-2xl"
            >
              {i + 1}. {v.name}
            </h2>
          </div>

          {/* 14. Next/Image with explicit dimensions + lazy-loading for non-LCP */}
          <Image
            src={v.image}
            alt={`${v.name} — ${v.imageAlt}`}
            width={1200}
            height={675}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 700px"
            className="mt-5 aspect-[16/9] w-full rounded-xl object-cover"
          />

          <dl className="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
            <Stat label="Capacity" value={v.capacity} />
            <Stat label="Vibe" value={v.style} />
            <Stat label="Where" value={v.neighborhood} />
            <Stat label="Saturday from" value={v.priceFrom} />
          </dl>

          <p
            className="mt-5 leading-relaxed text-ink-800"
            dangerouslySetInnerHTML={{ __html: VERDICTS[i].body }}
          />

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-emerald-300 bg-emerald-50 p-4">
              <h3 className="text-[10px] font-semibold uppercase tracking-wider text-emerald-800">
                Book it if
              </h3>
              <p
                className="mt-1 text-sm leading-relaxed text-emerald-900"
                dangerouslySetInnerHTML={{ __html: VERDICTS[i].bookIf }}
              />
            </div>
            <div className="rounded-lg border border-amber-300 bg-amber-50 p-4">
              <h3 className="text-[10px] font-semibold uppercase tracking-wider text-amber-800">
                What they get wrong
              </h3>
              <p
                className="mt-1 text-sm leading-relaxed text-amber-900"
                dangerouslySetInnerHTML={{ __html: VERDICTS[i].getsWrong }}
              />
            </div>
          </div>

          {VENUE_WEBSITES[v.slug] && (
            <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-ink-100 pt-4 text-xs">
              <a
                href={VENUE_WEBSITES[v.slug]}
                target="_blank"
                rel="noopener nofollow"
                className="inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-3 py-1.5 font-semibold text-white transition hover:bg-ink-800"
              >
                Visit {v.name} <span aria-hidden>&rarr;</span>
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.name + " Toronto")}`}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1.5 font-semibold text-ink-700 transition hover:border-ink-400"
              >
                View on Google Maps
              </a>
              <a
                href={`#${v.slug === "casa-loma" ? "liberty-grand" : v.slug === "globe-and-mail-centre" ? "casa-loma" : VENUES[(i + 1) % VENUES.length].slug}`}
                className="ml-auto text-ink-500 hover:text-ink-900 hover:underline"
              >
                Next: {VENUES[(i + 1) % VENUES.length].name} &darr;
              </a>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-ink-100 bg-[#fafaf9] px-3 py-2">
      {/* 15. dt/dd semantic markup for stats */}
      <dt className="text-[10px] font-semibold uppercase tracking-wider text-ink-600">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-semibold text-ink-900">{value}</dd>
    </div>
  );
}

function FAQ() {
  return (
    <div className="!mt-16">
      <h2
        id="faq"
        className="text-2xl font-semibold tracking-tightish text-ink-900"
      >
        FAQ — Toronto wedding venues
      </h2>
      <div className="mt-6 space-y-4">
        {FAQS.map((f) => (
          <details
            key={f.q}
            className="group rounded-xl border border-ink-100 bg-white p-5"
          >
            {/* 16. Question as <summary> → matches FAQPage schema */}
            <summary className="cursor-pointer list-none text-base font-semibold text-ink-900">
              {f.q}
            </summary>
            <p
              className="mt-3 text-sm leading-relaxed text-ink-700"
              dangerouslySetInnerHTML={{ __html: f.aHtml }}
            />
          </details>
        ))}
      </div>
    </div>
  );
}

function Close() {
  return (
    <div className="!mt-16 rounded-2xl border border-ink-100 bg-white p-8">
      <h2 className="text-2xl font-semibold tracking-tightish text-ink-900">
        Pick three. Tour them in one Saturday.
      </h2>
      <p className="mt-4 leading-relaxed text-ink-800">
        <em>[Switches to serious face]</em> Touring 10 venues is 40 hours you
        don&rsquo;t have. Touring 3 of these is one Saturday. Pick the three
        that match the &ldquo;Book it if&rdquo; line, book the tours
        back-to-back, and you&rsquo;ll have an answer before dinner.
      </p>
      <p className="mt-4 leading-relaxed text-ink-800">
        Old way: tour 12 venues over 3 months, get tired, settle for whatever
        has availability. New way: read this, book 3 tours, sign by Sunday.
      </p>
    </div>
  );
}

function Sources() {
  return (
    <aside
      aria-labelledby="sources-heading"
      className="!mt-16 rounded-2xl border border-ink-100 bg-white p-6"
    >
      <h2
        id="sources-heading"
        className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-600"
      >
        Sources &amp; further reading
      </h2>
      <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
        {AUTHORITY_SOURCES.map((s) => (
          <li key={s.url} className="flex items-start gap-2">
            <span aria-hidden className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ink-900" />
            <a
              href={s.url}
              target="_blank"
              rel="noopener"
              className="text-ink-700 hover:text-ink-900 hover:underline"
            >
              {s.name}{" "}
              <span aria-hidden className="text-ink-400">&#8599;</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-ink-500">
        Capacity and pricing reflect public venue listings as of May 2026 &mdash; confirm directly with each venue before booking.
      </p>
    </aside>
  );
}

function RelatedReading() {
  // 17. Internal linking → topical authority + lower bounce rate
  return (
    <nav aria-labelledby="related-heading" className="!mt-12">
      <h2
        id="related-heading"
        className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-600"
      >
        Related reading
      </h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        <li className="rounded-xl border border-ink-100 bg-white p-4">
          <Link
            href="/blog/top-10-wedding-venues-in-toronto"
            className="text-sm font-semibold text-ink-900 hover:underline"
          >
            v1 of this post (baseline AI tone) &rarr;
          </Link>
          <p className="mt-1 text-xs text-ink-600">
            Same 10 venues, no voice file applied.
          </p>
        </li>
        <li className="rounded-xl border border-ink-100 bg-white p-4">
          <Link
            href="/blog/top-10-wedding-venues-in-toronto-v2"
            className="text-sm font-semibold text-ink-900 hover:underline"
          >
            v2 of this post (dad-joke voice) &rarr;
          </Link>
          <p className="mt-1 text-xs text-ink-600">
            Same content, voice file applied, no SEO layer.
          </p>
        </li>
        <li className="rounded-xl border border-ink-100 bg-white p-4">
          <Link
            href="/services/plumbing-service-toronto"
            className="text-sm font-semibold text-ink-900 hover:underline"
          >
            Plumbing service in Toronto &rarr;
          </Link>
          <p className="mt-1 text-xs text-ink-600">
            Burst pipe before the wedding? Same-day service across the GTA.
          </p>
        </li>
        <li className="rounded-xl border border-ink-100 bg-white p-4">
          <Link
            href="/feedback"
            className="text-sm font-semibold text-ink-900 hover:underline"
          >
            Share your feedback &rarr;
          </Link>
          <p className="mt-1 text-xs text-ink-600">
            Booked one of these venues? Tell us how it went.
          </p>
        </li>
      </ul>
    </nav>
  );
}

function CompareCallout() {
  return (
    <section className="border-t border-ink-100/80 bg-white">
      <div className="mx-auto max-w-3xl px-6 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-600">
          For the YouTube video
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tightish text-ink-900">
          v1 → v2 → v3: the same post, three times.
        </h2>
        <p className="mt-3 text-ink-700">
          <Link
            href="/blog/top-10-wedding-venues-in-toronto"
            className="font-semibold text-ink-900 underline decoration-ink-200 decoration-4 underline-offset-4"
          >
            v1 (baseline)
          </Link>{" "}
          ·{" "}
          <Link
            href="/blog/top-10-wedding-venues-in-toronto-v2"
            className="font-semibold text-ink-900 underline decoration-ink-200 decoration-4 underline-offset-4"
          >
            v2 (voice file)
          </Link>{" "}
          ·{" "}
          <strong className="text-ink-900">v3 (voice file + full SEO)</strong>
        </p>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Content — same humour as v2, kept verbatim
// ---------------------------------------------------------------------------

const VERDICTS = [
  {
    body:
      "It&rsquo;s a literal castle. Inside the city. People will lose their minds &mdash; including the friend who insists they &ldquo;don&rsquo;t do weddings&rdquo; but will absolutely show up for this one. The Conservatory is the photo your aunt will print, frame, and put on the mantle next to the cat. The gardens carry the whole event if the weather holds. Five acres of grounds means guests will walk, and someone will lose a heel &mdash; statistically speaking, it&rsquo;s in the contract.",
    bookIf:
      "you want the &ldquo;wait, you&rsquo;re getting married at Casa Loma?&rdquo; reaction the second the invites go out. That reaction alone is worth $3,000 in social capital.",
    getsWrong:
      "the food. In-house catering is fine. (&ldquo;Fine&rdquo; is the most damning word in food.) Bring your A-list DJ &mdash; that&rsquo;s where the night actually lives or dies.",
  },
  {
    body:
      "Three ballrooms under one roof, so you can host 200 or 1,200 and it still looks intentional. The 27-foot ceilings do most of the work &mdash; a single uplighter and you&rsquo;re basically done with decor. Sus? Maybe. Effective? Absolutely. Parking is right there, which sounds boring until you&rsquo;ve had a 300-guest wedding without it &mdash; at which point parking becomes the most romantic thing in the world.",
    bookIf:
      "the guest list is over 250 and you don&rsquo;t want to compromise on either ceremony or reception space. Or your extended family is in a phase where they&rsquo;re all bringing plus-ones.",
    getsWrong:
      "the entrance. The exterior is unremarkable &mdash; technically a building. Your photographer will start outside, sigh, and finish indoors.",
  },
  {
    body:
      "If you have the budget, this is the venue. The service is the actual product &mdash; the room is almost incidental. Out-of-town guests get to stay onsite, which kills 80% of your logistics overnight. (The other 20% is your uncle asking what time breakfast is. There is no breakfast that early, Greg.) $20K starting is real; expect $40K+ all-in for 120 guests in peak season &mdash; a number that should be illegal but is in fact extremely legal.",
    bookIf:
      "money isn&rsquo;t the constraint and half the guest list is flying in. Bonus points if anyone in the wedding party has the words &ldquo;status match&rdquo; in their vocabulary.",
    getsWrong:
      "the &ldquo;wedding feel.&rdquo; This is a 5-star hotel that hosts weddings, not a wedding venue. Bring strong personal touches or the day will feel like a very expensive board meeting with cake.",
  },
  {
    body:
      "Best skyline shots in the city, full stop. The rooftop terrace at sunset does the entire wedding album in 20 minutes. Modern, clean, no historic character &mdash; that&rsquo;s the bet. Either you love the contemporary look or you&rsquo;ll feel like you got married in a very expensive lobby. (Hot take: lobbies are underrated. I will die on this hill. Or get married on it.)",
    bookIf:
      "you want the lake-and-skyline photos and you&rsquo;re sick of every Toronto wedding looking like every other Toronto wedding.",
    getsWrong:
      "the wind on the rooftop in shoulder season. Plan the ceremony indoors and move outside for cocktails. Otherwise your vows become improv as your veil joins the Maritimes.",
  },
  {
    body:
      "Industrial, exposed brick, the kind of wedding people actually remember 5 years later. The roundhouse architecture is the entire decor budget done for you. Smaller than it looks &mdash; comfortably 300, awkward beyond that. The brewery part isn&rsquo;t a gimmick; the beer is actually good. (I am contractually obligated to make a hops pun here and I&rsquo;m choosing not to. You&rsquo;re welcome.)",
    bookIf:
      "you want personality, can keep the list under 300, and don&rsquo;t want to spend $25K on draping a room you&rsquo;re going to leave at midnight anyway.",
    getsWrong:
      "acoustics. High ceilings sound great empty and like a slow-motion car alarm during speeches. Mic everything; don&rsquo;t wing it. (Hops pun avoided again. Two for two.)",
  },
  {
    body:
      "Art Deco theatre, stage, drapery, chandeliers &mdash; the whole thing is dramatic by default. Great if your couple aesthetic is &ldquo;old Hollywood&rdquo; and not great if your couple aesthetic is &ldquo;we met at a CrossFit.&rdquo; In-house catering and event coordination means you get one point of contact instead of seven. Parking is free, which in Toronto matters more than romance. (I said what I said.)",
    bookIf:
      "you want one venue that handles ceremony, dinner, and dancing without flipping rooms. Also if you&rsquo;ve always secretly wanted to make an entrance down a staircase. (Be honest.)",
    getsWrong:
      "natural light. There is none. Your daytime photos will all happen offsite &mdash; factor that into the timeline or your album will be a series of beautifully lit photos of you arriving at the same building.",
  },
  {
    body:
      "The grand hotel. Like, capital-G Grand. The Imperial Room has 1929 details no one is recreating in 2026 because it would cost more than a mid-size house. If you have a multi-cultural wedding or a guest list that spans generations, this venue handles both without anyone feeling out of place &mdash; including the great-aunt who hasn&rsquo;t been to anything &ldquo;proper&rdquo; since 1987.",
    bookIf:
      "you want a wedding your grandmother and your tech-bro cousin both call &ldquo;classy.&rdquo; (A rare alignment. Treasure it.)",
    getsWrong:
      "the price moves. Sticker prices are misleading &mdash; F&amp;B minimums and service charges put the realistic number 60% higher than the quote. The math is mathing, and the math is rude.",
  },
  {
    body:
      "The only venue on this list where the venue itself is part of the entertainment. Guests wander the ravine and trails between courses, which is great until they don&rsquo;t come back &mdash; you will physically have to round up your uncle. Industrial bones, eco-conscious operation, real farm-to-table food. The vibe is &ldquo;wedding in a national park, but with cocktails.&rdquo; That is, in my opinion, the correct vibe.",
    bookIf:
      "outdoor matters more than indoor backup and your guests are the &ldquo;walking around with a drink&rdquo; type. (Translation: 30+, can hold their alcohol, will not lose a shoe.)",
    getsWrong:
      "weather contingency. The indoor backup is real but small. If it rains heavily on a 200-person wedding, it gets tight. Like, &ldquo;hi I haven&rsquo;t met you before, we&rsquo;re sharing this chair now&rdquo; tight.",
  },
  {
    body:
      "Tudor architecture, stone arches, ravine setting in the West End. The most romantic venue on this list and not in a hyped-up way &mdash; actually romantic. The kind of place where guests text &ldquo;wow&rdquo; before the ceremony starts. Smaller capacity is a feature, not a bug. The on-site hotel rooms are average; book your suite elsewhere and use the hotel for the guest blocks who&rsquo;ll be too sloshed to drive home.",
    bookIf:
      "you want intimate, you want photos that don&rsquo;t look like every other Toronto wedding, and your list is under 200. Bonus if your relationship started with the words &ldquo;I love a fireplace.&rdquo;",
    getsWrong:
      "getting there. Transit access is poor for a downtown wedding. Shuttle from a central hotel or budget for everyone to Uber &mdash; otherwise the group chat will become a logistics nightmare 48 hours before the day.",
  },
  {
    body:
      "The view is the venue. 17th floor, floor-to-ceiling windows, city and lake. Modern and minimalist &mdash; exactly what you want if your existing aesthetic is clean. Almost the opposite of Casa Loma. Day-of staff are excellent. The building is shared with other tenants, so timing matters &mdash; you don&rsquo;t want your first kiss to coincide with a fire drill from the law firm on 14.",
    bookIf:
      "you want a venue that looks like the city you live in, not a movie set. Or you work in media and want the bragging rights of getting married at, you know, &ldquo;the Globe.&rdquo;",
    getsWrong:
      "competition with the view. Anything you add &mdash; flowers, drapery, candles &mdash; fights for attention with the skyline and loses. Restraint wins here. (A sentence I never thought I&rsquo;d type about a wedding.)",
  },
];

const FAQS = [
  {
    q: "What does a Toronto wedding actually cost in 2026?",
    aPlain:
      "All-in for 100 guests on a Saturday in peak season: $25K floor, $60K average, $150K+ at the Four Seasons or Royal York. The venue itself is usually 30-40% of total spend. The other 60% goes to food, alcohol, photo/video, flowers, and the things you don't budget for. Build a 10% buffer into your budget — you will spend it.",
    aHtml:
      "All-in for 100 guests on a Saturday in peak season: $25K floor, $60K average, $150K+ at the Four Seasons or Royal York. The venue itself is usually 30&ndash;40% of total spend. The other 60% goes to food, alcohol, photo/video, flowers, and the things you don&rsquo;t budget for &mdash; vendor meals, tips, day-of hair touch-ups, the &ldquo;oh god we need a backup boutonniere&rdquo; expenses. <em>[Switches to serious face]</em> Build a 10% buffer into your budget. <em>[Switches back]</em> You will spend it. I&rsquo;m sorry.",
  },
  {
    q: "How far in advance should I book a Toronto wedding venue?",
    aPlain:
      "Casa Loma, Liberty Grand, Four Seasons: 18 months for a Saturday in May-October. Everything else on this list: 12 months. Off-season Fridays and Sundays open up at 6-9 months. If you're 4 months out and unbooked, look at Tuesdays.",
    aHtml:
      "Casa Loma, Liberty Grand, Four Seasons: 18 months for a Saturday in May&ndash;October. Everything else on this list: 12 months. Off-season Fridays and Sundays at any of these venues open up at 6&ndash;9 months. If you&rsquo;re reading this 4 months before your target date and you haven&rsquo;t booked &mdash; yeah. You are in fact past the deadline. There&rsquo;s a special wedding rate for panic; it&rsquo;s called &ldquo;a Tuesday.&rdquo;",
  },
  {
    q: "Which Toronto wedding venue is the best value?",
    aPlain:
      "Steam Whistle Brewery and Evergreen Brick Works. Both deliver $20K-looking weddings for $8-12K because the venue itself looks finished — you spend almost nothing on decor.",
    aHtml:
      "Steam Whistle and Evergreen Brick Works. Both deliver $20K-looking weddings for $8&ndash;12K because the venue already looks finished &mdash; you spend almost nothing on decor. Your florist will be sad. Your bank account will be very happy. Marriage, like comedy, is about timing.",
  },
  {
    q: "Are there outdoor wedding venues in Toronto?",
    aPlain:
      "Real outdoor options: Casa Loma gardens, Hotel X rooftop, Evergreen Brick Works, Old Mill grounds. All four have indoor backups, but only Evergreen and Casa Loma can fully run the day outside.",
    aHtml:
      "Real outdoor: Casa Loma gardens, Hotel X rooftop, Evergreen Brick Works, Old Mill grounds. All four have indoor backups, but only Evergreen and Casa Loma can fully run the day outside. If you book outdoor without a backup and it rains, you will pay $4,000 for a tent the morning of and you will not enjoy it. Ask me how I know.",
  },
];
