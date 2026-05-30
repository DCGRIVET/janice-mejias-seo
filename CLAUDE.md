# Local SEO OS — Project Overview

A Next.js site optimised for local SEO. Pages are pre-rendered to static HTML at build time (SSG). Built by Woodbridge Harris AI for contractor and home-service clients in the GTA and beyond.

---

# Voice — read before writing any content

When writing **any blog post, service page, or customer-facing copy**, read the files in `./references/`:

| File | What it is |
|------|-----------|
| `references/voice.md` | Writing style, sentence rhythm, vocabulary, formatting, anti-patterns |
| `references/humour.md` | How the brand handles humour |
| `references/stats.md` | Canonical real numbers — pricing, response times, jobs, reviews |
| `references/stories.md` | Recurring anecdotes the brand uses |
| `references/opinions.md` | Hot takes and strong opinions backed by numbers |
| `references/business-context.md` | What the client does, who they serve, differentiators |

**Content rules:**

- Never use AI-tell phrases (e.g. "unlock", "leverage", "seamless", "world-class", "in today's fast-paced world"), exclamation marks, or emojis
- Start with the answer; add context after
- Use real numbers from `stats.md`, never round
- One story per post max (from `stories.md`, don't invent new ones)
- One strong opinion per post max (from `opinions.md`, backed by a number)
- Tell people when NOT to hire you — biggest voice tell

Before shipping any writing, re-read `references/voice.md` — "Tells that it's AI-written" and delete anything that matches.

---

# Skills — what this OS can do

| Command | What it runs |
|---|---|
| `/gbp-setup` | Reads `references/gbp-setup.md` · researches competitors · outputs complete `gbp-{client}.md` ready to paste into Google Business Profile |
| `/gbp-post` | Reads `references/gbp-posts.md` + voice files · generates GBP post · sends to GHL webhook · logs in `references/posts-queue.md` |
| `/blog-post [topic]` | Reads `on-page-seo.md` + voice files · generates a 1500+ word localised blog post satisfying all 80+ SEO checkpoints |
| `/service-page [service] [city]` | Reads `on-page-seo.md` + voice files · generates a conversion-optimised service page for a specific city + service combo |
| `/monthly-posts` | Generates a full month of GBP posts (8 posts · 2/week) using the monthly mix formula |
| `/keyword-research [niche] [city]` | Pulls service + blog keyword ideas · estimates volume · outputs a prioritised list |

---

# On-page SEO

When generating or editing a blog post or service page, read `on-page-seo.md` at the root. Every item applicable to the page type must be satisfied.

Required for every long-form post:
- FAQ section with FAQPage schema (JSON-LD)
- Breadcrumbs + BreadcrumbList schema
- Author byline + Person schema
- Table of contents with anchor links
- 3–5 internal links, 2–3 external links to authoritative sources
- Open Graph + Twitter Card meta
- Length within 20% of SERP top-3 for the target keyword

---

# GBP automation

- GBP setup: `references/gbp-setup.md`
- GBP posts: `references/gbp-posts.md`
- Post queue: `references/posts-queue.md`
- Webhook posts go to GHL (Potenly.ai) — see `references/gbp-posts.md` for payload format and GHL workflow setup

---

# Technical SEO

Site-wide:
- `app/sitemap.ts` — auto-generated sitemap covering all routes
- `app/robots.ts` — allows all crawlers, points to sitemap
- Canonical URLs on every page (via `metadata.alternates.canonical`)
- Open Graph images (1200×630) — `/public/og/*.png`
- Image width/height attributes for CLS
- Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`)
- Static pre-rendering — `output: 'export'`
- Mobile viewport — set in `app/layout.tsx`

---

# Design

Premium, modern, elegant. Subtle animations, proper spacing, clear visual hierarchy. No emoji icons. No generic gradients. One accent colour per client — pick one and stick to it.

---

# Development Rules

**Rule 1: Always read first** — before any action, read `CLAUDE.md` and `project_specs.md`.

**Rule 2: Define before you build** — no code before spec approval.

**Rule 3: Look before you create** — check existing files before creating new ones.

**Rule 4: Test before you respond** — run `npm run build` before saying "done".

**Core Rule** — do exactly what is asked. Nothing more, nothing less.

---

# Tech Stack

- **Language:** TypeScript
- **Framework:** Next.js 15 (App Router)
- **Rendering:** Static Site Generation via `output: 'export'`. `out/` is the deployable.
- **Styling:** Tailwind CSS
- **Content:** Flat TypeScript files in `/content/*.ts`. No database.
- **Deployment:** Vercel

**SSG constraints — do NOT break these:**
- No `cookies()`, `headers()`, or `searchParams` in server components
- No `fetch(..., { cache: 'no-store' })` or `export const dynamic = 'force-dynamic'`
- No runtime API routes
- Dynamic routes (`[slug]`) must implement `generateStaticParams`
- All data fetched at **build time**, not request time

---

# Running the Project

1. `npm install`
2. `npm run dev` — opens on `http://localhost:3000`
3. To ship: `npm run build` — the `out/` directory is the deployable site

---

# Organisation Rules

- One component per file
- Shared components live in `/components/`
- Page-specific content lives in `/content/*.ts`
- Client voice files live in `/references/`
- Don't create new top-level folders without asking

---

# Per-client setup

When onboarding a new client, populate these files before running any skill:

1. `references/business-context.md` — what they do, who they serve, service area, differentiators
2. `references/voice.md` — their writing style (pull from website, emails, sales calls)
3. `references/humour.md` — how they use humour (or don't)
4. `references/stats.md` — real numbers: pricing, years in business, jobs completed, review count
5. `references/stories.md` — 2-3 recurring customer stories
6. `references/opinions.md` — 1-2 strong takes they hold
7. `references/citations.md` — NAP master record + directory submission list

Run `/gbp-setup` first. Everything else follows from the GBP spec.

---

# Testing

Before marking any task done:
- `npm run build` completes with no errors
- Every route shows `○ (Static)` in the build log
- **View-source check:** the HTML contains the actual rendered content and any JSON-LD schema
- **Voice check** (for content changes): re-read `references/voice.md` — "Tells that it's AI-written" and delete anything that matches

Never say "done" if the build is failing, there are console errors, the voice reads as AI, or the feature hasn't been tested in the browser.

---

# Scope

Only build what's requested. If anything is unclear, ask before starting.
