# On-Page SEO Checklist

> **15 categories · 80+ items** — the complete on-page SEO spec for blog posts and service pages.
> Technical SEO (sitemaps, robots.txt, Core Web Vitals) is covered separately in `CLAUDE.md`.
>
> Point Claude Code at this file, then say "generate a blog post about X" — it will satisfy every item on this list automatically. That's the whole point.

---

## 1 · HEAD & METADATA — What Google indexes first

- [ ] Title tag — 50–60 chars, primary keyword near the start
- [ ] Meta description — 150–160 chars, keyword + benefit + soft CTA
- [ ] Canonical URL set to prevent duplicates
- [ ] Open Graph — `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `og:type`
- [ ] Twitter Card — `summary_large_image`, title, description, image
- [ ] Language attribute on `<html>` (e.g. `lang="en"`)
- [ ] Viewport meta tag for responsive rendering
- [ ] Favicon + `apple-touch-icon`
- [ ] Charset meta — `<meta charset="utf-8">`

---

## 2 · URL STRUCTURE — Clean, readable, keyword-forward

- [ ] Short slug — under 60 chars
- [ ] Primary keyword in the slug
- [ ] Hyphens only — never underscores
- [ ] Lowercase only
- [ ] No stop words ("the", "a", "of") unless necessary
- [ ] Logical hierarchy — `/services/[slug]`, `/blog/[slug]`

---

## 3 · HEADINGS — Structure for skimmers & bots

- [ ] Exactly one H1 per page, contains primary keyword
- [ ] Logical H2 + H3 hierarchy — never skip levels
- [ ] H2s use supporting keywords + questions from the cluster
- [ ] No keyword stuffing — write naturally

---

## 4 · COPY & BODY — Answer the query, fast

- [ ] Primary keyword in the first 100 words
- [ ] Direct answer to the query in the first paragraph
- [ ] Length matches SERP appearance (within 20% of top-3)
- [ ] Short paragraphs (1–4 sentences)
- [ ] Readability — 8th–10th grade level
- [ ] Active voice preferred
- [ ] Bold key phrases — sparingly
- [ ] Bullets & numbered lists where appropriate

---

## 5 · FAQ SECTION — Every blog post

- [ ] 4–8 questions from SEMRush Questions tab + "People Also Ask"
- [ ] Direct answers — 2–4 sentences each
- [ ] FAQPage schema (JSON-LD) applied

---

## 6 · IMAGES — Every image is a ranking signal

- [ ] Alt text describes image + keyword where natural
- [ ] Filenames — descriptive, hyphens, e.g. `emergency-plumber-toronto.webp`
- [ ] WebP format, compressed under 200 KB
- [ ] Width/height attributes specified — prevents CLS
- [ ] Lazy loading (`loading="lazy"`) for below-fold images
- [ ] Responsive `srcset` where needed
- [ ] Featured/hero image for social sharing

---

## 7 · INTERNAL LINKS — Pass authority across the site

- [ ] 3–5 internal links per post
- [ ] Link to related blog posts & relevant service pages
- [ ] Descriptive anchor text — never "click here" or "read more"
- [ ] Contextually placed in body copy
- [ ] Breadcrumbs on every page

---

## 8 · EXTERNAL LINKS — Cite authority, don't hoard it

- [ ] 2–3 external links to authoritative sources (.gov, .edu, major industry)
- [ ] Relevant to the topic
- [ ] Open in new tab with `rel="noopener"`
- [ ] `rel="nofollow"` for sponsored links

---

## 9 · SCHEMA MARKUP — JSON-LD in `<head>`

- [ ] Article schema on blog posts
- [ ] LocalBusiness schema — most specific subtype (Plumber, Dentist, Contractor...)
- [ ] Service schema on service pages
- [ ] FAQPage schema wherever FAQ section exists
- [ ] BreadcrumbList schema on every page
- [ ] Organization schema site-wide
- [ ] Author/Person schema for bylines

---

## 10 · E-E-A-T SIGNALS — Experience · Expertise · Authority · Trust

- [ ] Author byline with name on every blog post
- [ ] Author bio with credentials (years, qualifications)
- [ ] Link to author's dedicated page
- [ ] Published date displayed
- [ ] "Last updated" date when refreshed
- [ ] Real stories, numbers, opinions from the business voice file
- [ ] Cite authoritative sources
- [ ] About page with full company credentials
- [ ] Contact page — real address, phone, hours

---

## 11 · ACCESSIBILITY — A11y signals = SEO signals

- [ ] Semantic HTML5 — `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`
- [ ] ARIA labels on interactive elements where needed
- [ ] Color contrast meets WCAG AA (4.5:1 body text)
- [ ] Focus indicators visible on interactive elements
- [ ] Alt text on all images (empty `alt=""` for decorative)
- [ ] Descriptive link text
- [ ] Skip-to-content link for keyboard users

---

## 12 · MOBILE & RESPONSIVE — Mobile-first indexing

- [ ] Responsive layout (Tailwind handles this)
- [ ] Touch targets minimum 48×48 px
- [ ] Body font minimum 16 px
- [ ] No horizontal scroll at any viewport
- [ ] No intrusive interstitials

---

## 13 · SOCIAL PREVIEW — Shareable card

- [ ] OG image optimized — 1200×630, under 1 MB
- [ ] Twitter Card image — 1200×600
- [ ] Compelling `og:description` — different from meta if valuable

---

## 14 · CONVERSION ELEMENTS — Capture the lead *(service pages only)*

- [ ] Primary CTA above the fold
- [ ] Phone number with click-to-call (`tel:`)
- [ ] Multiple CTA placements throughout the page
- [ ] Trust signals — reviews, ratings, licenses, years in business
- [ ] Testimonials with names (photos where possible)
- [ ] Service-area coverage listed
- [ ] Business hours displayed
- [ ] Physical address with embedded map

---

## 15 · LONG-FORM CONTENT — 1500+ word posts

- [ ] Table of contents with anchor links at the top
- [ ] Jump links for each H2
- [ ] Back-to-top button

---

## Quick reference

| Page type | Min word count | FAQ required | Conversion elements |
|---|---|---|---|
| Blog post | 1500+ | Yes (4–8 Qs) | No |
| Service page | 800+ | Optional | Yes |
| Location page | 600+ | Optional | Yes |

## Contractor/home-service specific notes

- LocalBusiness subtype: use the most specific available — `Plumber`, `GeneralContractor`, `RoofingContractor`, `LandscapingBusiness`, `HVACBusiness`, etc.
- Service area markup: use `areaServed` with city names, not radius
- License numbers and insurance: include in E-E-A-T section + schema where possible
- Review schema: pull from Google or HomeStars — cite count + average rating
- Seasonal content: timestamp with `dateModified` each season to stay fresh
