import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { VENUES } from "../top-10-wedding-venues-in-toronto/venues";

export const metadata = {
  title: "What Are the Best Wedding Venues in Toronto? (Honestly)",
  description:
    "What are the best wedding venues in Toronto? Here are the 10 couples actually book — capacity, real Saturday price, the thing each one gets wrong. Plus dad jokes.",
};

export default function BlogPostV2() {
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
              What are the best wedding venues in Toronto?
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              tl;dr: ten venues couples actually book in 2026, with capacity,
              what the cheapest weekend slot really costs, and the one thing
              each place gets wrong. Also dad jokes. My 14-year-old would be
              mortified. Anyway &mdash; <em>[switches to serious face]</em>{" "}
              let&rsquo;s get into it.
            </p>
            <p className="mt-4 text-sm text-ink-400">
              ~1,650 word read · v2 (voice file applied · humour: maximum dad)
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1600&q=70"
              alt="Toronto wedding venue hero"
              className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover"
            />
          </header>

          <section>
            <Intro />
            <Verdicts />
            <FAQ />
            <Close />
          </section>
        </article>

        <CompareCallout />
      </main>

      <SiteFooter />
    </div>
  );
}

function Intro() {
  return (
    <div className="space-y-4 text-base leading-relaxed text-ink-800">
      <h2 className="!mt-12 text-2xl font-semibold tracking-tightish text-ink-900">
        How I picked these 10
      </h2>
      <p>
        I&rsquo;ve got 99 problems but the Toronto wedding venue scene ain&rsquo;t
        one. (Okay it&rsquo;s a little bit one. Have you{" "}
        <em>seen</em> what people are paying for a Saturday in June?)
      </p>
      <p>
        Eight of these venues appear on every serious shortlist in the city. Two
        are personal calls. None of them are your aunt&rsquo;s backyard, despite
        her continued lobbying. The cut is brutal on purpose &mdash; you&rsquo;re
        getting the venues planners and photographers actually whisper to each
        other about, not a 30-venue dump that wastes a Saturday.
      </p>
      <p>
        Same game, different wrapper for each one: a ballroom or a converted
        building, a city or a garden, a hotel or a stand-alone venue. The job
        of this post is not to make you fall in love &mdash; that&rsquo;s your
        partner&rsquo;s job, and frankly they should have started earlier. The
        job here is to save you the four weekends of touring it would
        otherwise take.
      </p>
      <p>Here&rsquo;s a few details for each:</p>
      <ul className="!mt-2 list-disc space-y-1 pl-6">
        <li>
          <strong>Capacity</strong> &mdash; the realistic ceiling, not the
          marketing number. (Marketing numbers and wedding numbers are like dad
          jokes and good jokes: technically the same category, wildly
          different result.)
        </li>
        <li>
          <strong>Starting price</strong> &mdash; Saturday night, 100 guests,
          peak season, all-in. The number that makes your spreadsheet weep.
        </li>
        <li>
          <strong>The thing they get wrong</strong> &mdash; the part no one
          tells you on a tour because they&rsquo;re busy pointing at
          chandeliers.
        </li>
      </ul>
      <p>
        <em>[Switches to serious face]</em> Right. Pencils down, no more
        nonsense, here are the venues.
      </p>
      <p>
        <em>[Switches back]</em> I lied. There will be more nonsense. We just
        crossed the threshold &mdash; this is who I am now.
      </p>
    </div>
  );
}

function Verdicts() {
  return (
    <div className="!mt-12 space-y-10">
      {VENUES.map((v, i) => (
        <div
          key={v.slug}
          id={v.slug}
          className="rounded-2xl border border-ink-100 bg-white p-8"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-900 font-mono text-sm font-bold text-[#fde68a]">
              {i + 1}
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
            <Stat label="Vibe" value={v.style} />
            <Stat label="Where" value={v.neighborhood} />
            <Stat label="Saturday from" value={v.priceFrom} />
          </div>

          <p
            className="mt-5 leading-relaxed text-ink-800"
            dangerouslySetInnerHTML={{ __html: VERDICTS[i].body }}
          />

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
                Book it if
              </div>
              <p
                className="mt-1 text-sm leading-relaxed text-emerald-900"
                dangerouslySetInnerHTML={{ __html: VERDICTS[i].bookIf }}
              />
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-amber-700">
                What they get wrong
              </div>
              <p
                className="mt-1 text-sm leading-relaxed text-amber-900"
                dangerouslySetInnerHTML={{ __html: VERDICTS[i].getsWrong }}
              />
            </div>
          </div>
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
        Questions couples actually ask (and the answers they actually need)
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
            <p
              className="mt-3 text-sm leading-relaxed text-ink-600"
              dangerouslySetInnerHTML={{ __html: f.a }}
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
        One last thing (a serious one, I promise)
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
      <p className="mt-4 leading-relaxed text-ink-800">
        <em>[Switches back]</em> And remember &mdash; the only thing more
        expensive than the wrong venue is a second wedding, so let&rsquo;s try
        to nail this one. My 14-year-old is rolling his eyes from three rooms
        away. Mission: accomplished.
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
          This is the same post &mdash; rewritten.
        </h2>
        <p className="mt-3 text-ink-600">
          Read{" "}
          <Link
            href="/blog/top-10-wedding-venues-in-toronto"
            className="font-semibold text-ink-900 underline decoration-ink-200 decoration-4 underline-offset-4"
          >
            version 1
          </Link>{" "}
          first, then come back. Same venues, same length, same SERP keywords
          &mdash; completely different writer.
        </p>
      </div>
    </section>
  );
}

const VERDICTS = [
  // 1. Casa Loma
  {
    body:
      "It&rsquo;s a literal castle. Inside the city. People will lose their minds &mdash; including the friend who insists they &ldquo;don&rsquo;t do weddings&rdquo; but will absolutely show up for this one. The Conservatory is the photo your aunt will print, frame, and put on the mantle next to the cat. The gardens carry the whole event if the weather holds. Five acres of grounds means guests will walk, and someone will lose a heel &mdash; statistically speaking, it&rsquo;s in the contract.",
    bookIf:
      "you want the &ldquo;wait, you&rsquo;re getting married at Casa Loma?&rdquo; reaction the second the invites go out. That reaction alone is worth $3,000 in social capital.",
    getsWrong:
      "the food. In-house catering is fine. (&ldquo;Fine&rdquo; is the most damning word in food.) Bring your A-list DJ &mdash; that&rsquo;s where the night actually lives or dies.",
  },
  // 2. Liberty Grand
  {
    body:
      "Three ballrooms under one roof, so you can host 200 or 1,200 and it still looks intentional. The 27-foot ceilings do most of the work &mdash; a single uplighter and you&rsquo;re basically done with decor. Sus? Maybe. Effective? Absolutely. Parking is right there, which sounds boring until you&rsquo;ve had a 300-guest wedding without it &mdash; at which point parking becomes the most romantic thing in the world.",
    bookIf:
      "the guest list is over 250 and you don&rsquo;t want to compromise on either ceremony or reception space. Or your extended family is in a phase where they&rsquo;re all bringing plus-ones.",
    getsWrong:
      "the entrance. The exterior is unremarkable &mdash; technically a building. Your photographer will start outside, sigh, and finish indoors.",
  },
  // 3. Four Seasons
  {
    body:
      "If you have the budget, this is the venue. The service is the actual product &mdash; the room is almost incidental. Out-of-town guests get to stay onsite, which kills 80% of your logistics overnight. (The other 20% is your uncle asking what time breakfast is. There is no breakfast that early, Greg.) $20K starting is real; expect $40K+ all-in for 120 guests in peak season &mdash; a number that should be illegal but is in fact extremely legal.",
    bookIf:
      "money isn&rsquo;t the constraint and half the guest list is flying in. Bonus points if anyone in the wedding party has the words &ldquo;status match&rdquo; in their vocabulary.",
    getsWrong:
      "the &ldquo;wedding feel.&rdquo; This is a 5-star hotel that hosts weddings, not a wedding venue. Bring strong personal touches or the day will feel like a very expensive board meeting with cake.",
  },
  // 4. Hotel X
  {
    body:
      "Best skyline shots in the city, full stop. The rooftop terrace at sunset does the entire wedding album in 20 minutes. Modern, clean, no historic character &mdash; that&rsquo;s the bet. Either you love the contemporary look or you&rsquo;ll feel like you got married in a very expensive lobby. (Hot take: lobbies are underrated. I will die on this hill. Or get married on it.)",
    bookIf:
      "you want the lake-and-skyline photos and you&rsquo;re sick of every Toronto wedding looking like every other Toronto wedding.",
    getsWrong:
      "the wind on the rooftop in shoulder season. Plan the ceremony indoors and move outside for cocktails. Otherwise your vows become improv as your veil joins the Maritimes.",
  },
  // 5. Steam Whistle
  {
    body:
      "Industrial, exposed brick, the kind of wedding people actually remember 5 years later. The roundhouse architecture is the entire decor budget done for you. Smaller than it looks &mdash; comfortably 300, awkward beyond that. The brewery part isn&rsquo;t a gimmick; the beer is actually good. (I am contractually obligated to make a hops pun here and I&rsquo;m choosing not to. You&rsquo;re welcome.)",
    bookIf:
      "you want personality, can keep the list under 300, and don&rsquo;t want to spend $25K on draping a room you&rsquo;re going to leave at midnight anyway.",
    getsWrong:
      "acoustics. High ceilings sound great empty and like a slow-motion car alarm during speeches. Mic everything; don&rsquo;t wing it. (Hops pun avoided again. Two for two.)",
  },
  // 6. Eglinton Grand
  {
    body:
      "Art Deco theatre, stage, drapery, chandeliers &mdash; the whole thing is dramatic by default. Great if your couple aesthetic is &ldquo;old Hollywood&rdquo; and not great if your couple aesthetic is &ldquo;we met at a CrossFit.&rdquo; In-house catering and event coordination means you get one point of contact instead of seven. Parking is free, which in Toronto matters more than romance. (I said what I said.)",
    bookIf:
      "you want one venue that handles ceremony, dinner, and dancing without flipping rooms. Also if you&rsquo;ve always secretly wanted to make an entrance down a staircase. (Be honest.)",
    getsWrong:
      "natural light. There is none. Your daytime photos will all happen offsite &mdash; factor that into the timeline or your album will be a series of beautifully lit photos of you arriving at the same building.",
  },
  // 7. Royal York
  {
    body:
      "The grand hotel. Like, capital-G Grand. The Imperial Room has 1929 details no one is recreating in 2026 because it would cost more than a mid-size house. If you have a multi-cultural wedding or a guest list that spans generations, this venue handles both without anyone feeling out of place &mdash; including the great-aunt who hasn&rsquo;t been to anything &ldquo;proper&rdquo; since 1987.",
    bookIf:
      "you want a wedding your grandmother and your tech-bro cousin both call &ldquo;classy.&rdquo; (A rare alignment. Treasure it.)",
    getsWrong:
      "the price moves. Sticker prices are misleading &mdash; F&amp;B minimums and service charges put the realistic number 60% higher than the quote. The math is mathing, and the math is rude.",
  },
  // 8. Evergreen Brick Works
  {
    body:
      "The only venue on this list where the venue itself is part of the entertainment. Guests wander the ravine and trails between courses, which is great until they don&rsquo;t come back &mdash; you will physically have to round up your uncle. Industrial bones, eco-conscious operation, real farm-to-table food. The vibe is &ldquo;wedding in a national park, but with cocktails.&rdquo; That is, in my opinion, the correct vibe.",
    bookIf:
      "outdoor matters more than indoor backup and your guests are the &ldquo;walking around with a drink&rdquo; type. (Translation: 30+, can hold their alcohol, will not lose a shoe.)",
    getsWrong:
      "weather contingency. The indoor backup is real but small. If it rains heavily on a 200-person wedding, it gets tight. Like, &ldquo;hi I haven&rsquo;t met you before, we&rsquo;re sharing this chair now&rdquo; tight.",
  },
  // 9. Old Mill
  {
    body:
      "Tudor architecture, stone arches, ravine setting in the West End. The most romantic venue on this list and not in a hyped-up way &mdash; actually romantic. The kind of place where guests text &ldquo;wow&rdquo; before the ceremony starts. Smaller capacity is a feature, not a bug. The on-site hotel rooms are average; book your suite elsewhere and use the hotel for the guest blocks who&rsquo;ll be too sloshed to drive home.",
    bookIf:
      "you want intimate, you want photos that don&rsquo;t look like every other Toronto wedding, and your list is under 200. Bonus if your relationship started with the words &ldquo;I love a fireplace.&rdquo;",
    getsWrong:
      "getting there. Transit access is poor for a downtown wedding. Shuttle from a central hotel or budget for everyone to Uber &mdash; otherwise the group chat will become a logistics nightmare 48 hours before the day.",
  },
  // 10. Globe and Mail Centre
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
    a: "All-in for 100 guests on a Saturday in peak season: $25K floor, $60K average, $150K+ at the Four Seasons or Royal York. The venue itself is usually 30&ndash;40% of total spend. The other 60% goes to food, alcohol, photo/video, flowers, and the things you don&rsquo;t budget for &mdash; vendor meals, tips, day-of hair touch-ups, the &ldquo;oh god we need a backup boutonniere&rdquo; expenses. <em>[Switches to serious face]</em> Build a 10% buffer into your budget. <em>[Switches back]</em> You will spend it. I&rsquo;m sorry.",
  },
  {
    q: "How far ahead do I need to book?",
    a: "Casa Loma, Liberty Grand, Four Seasons: 18 months for a Saturday in May&ndash;October. Everything else on this list: 12 months. Off-season Fridays and Sundays at any of these venues open up at 6&ndash;9 months. If you&rsquo;re reading this 4 months before your target date and you haven&rsquo;t booked &mdash; yeah. You are in fact past the deadline. There&rsquo;s a special wedding rate for panic; it&rsquo;s called &ldquo;a Tuesday.&rdquo;",
  },
  {
    q: "Which of these venues is the best value?",
    a: "Steam Whistle and Evergreen Brick Works. Both deliver $20K-looking weddings for $8&ndash;12K because the venue already looks finished &mdash; you spend almost nothing on decor. Your florist will be sad. Your bank account will be very happy. Marriage, like comedy, is about timing.",
  },
  {
    q: "Are there outdoor wedding venues in Toronto?",
    a: "Real outdoor: Casa Loma gardens, Hotel X rooftop, Evergreen Brick Works, Old Mill grounds. All four have indoor backups, but only Evergreen and Casa Loma can fully run the day outside. If you book outdoor without a backup and it rains, you will pay $4,000 for a tent the morning of and you will not enjoy it. Ask me how I know.",
  },
];
