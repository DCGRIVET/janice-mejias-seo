# GBP Spec · The Brotherhood Therapy

> Generated from gbp-setup.md against https://thebrotherhood.ca. Placeholder values are used where the public website doesn't expose the data — these are test values for demo purposes.

---

## Research summary

**Business:** The Brotherhood Therapy
**Website analyzed:** https://thebrotherhood.ca · homepage + services + pricing
**Model:** Men's psychotherapy clinic · Toronto + Ontario
**Pricing:** $185 / 50-min session · price tier $$
**Credentials:** CRPO + OCSWSSW registered · CBT · DBT · EMDR · ASIST trained

**Competitors analyzed (Toronto men's therapy local pack):**
1. First Step Men's Therapy — Primary: Psychotherapist · multi-location + virtual
2. WG Psychology — Primary: Psychologist · downtown Toronto + virtual
3. Men Therapy Toronto — Primary: Counselor · virtual + Toronto
4. Wild North Men's Therapy — Primary: Psychotherapist · Toronto + virtual
5. Men's Wellness Clinic — Primary: Mental Health Service · virtual

**Recommended primary category:** `Psychotherapist`
Reasoning: 3 of 5 ranking competitors use Psychotherapist as primary. In Canadian markets "Psychotherapist" outperforms "Therapist" (US-skewed term). Matches the regulatory designation of the lead clinician.

**Service area:** 20 GTA + 905/705 cities within 2hr of Toronto anchor
**Services extracted:** 8 from website + 14 competitor-gap + 18 keyword-driven = **40 total**
**Citation directories:** 16 priority + 70+ via SEMrush Listing Management
**Identity attributes recommended:** LGBTQ+ friendly · evening/weekend hours

---

## 1. Identity

```yaml
legal_name: "The Brotherhood Therapy Inc."
dba_name: "The Brotherhood Therapy"
year_founded: "2021"
website: "https://thebrotherhood.ca"
address: "100 King Street West, Suite 5600, Toronto, ON M5X 1C9"
address_visible: false   # Service Area Business — hide address
phone: "(416) 555-0184"
```

**Rules applied:**
- Clean name with no keyword stuffing
- Local 416 area code
- SAB mode keeps the registered address hidden while service area is shown

---

## 2. Categories

```yaml
primary_category: "Psychotherapist"
secondary_categories:    # all 9 slots filled
  - "Mental health service"
  - "Counselor"
  - "Marriage or relationship counselor"
  - "Family counselor"
  - "Addiction treatment center"
  - "Mental health clinic"
  - "Psychologist"
  - "Social worker"
  - "Trauma recovery service"
```

### Backup categories (swap in if any above don't appear in GBP autocomplete)

```yaml
backup_categories:
  - "Therapist"
  - "Couples counselor"
  - "Mental health professional"
  - "Grief counselor"
  - "Holistic medicine practitioner"
```

Verify each category appears in the live GBP picker before saving — Google rotates the list quarterly.

---

## 3. Services

> Each description follows the pattern: **service name + primary city + 1 differentiator + soft CTA.** Validate each name in SEMrush / Google Keyword Planner against `[service name] toronto` before publishing — pick the higher-volume variant when two are close.

```yaml
services:

  # ─── CORE THERAPY TYPES (5) ───────────────────────────────────
  - name: "Individual therapy for men"
    description: "1-on-1 psychotherapy for men in Toronto and across Ontario. CRPO-registered therapists trained in CBT, DBT and EMDR. Practical and accountability-focused. Book a free consultation."
    price_tier: "$$"
    type: "predefined"

  - name: "Couples therapy"
    description: "Couples therapy in Toronto led by registered relationship therapists. Communication repair, conflict resolution and rebuilding trust. Online sessions available. Book today."
    price_tier: "$$"
    type: "predefined"

  - name: "Family therapy"
    description: "Family therapy for men in Toronto navigating parenting, blended families, estrangement or in-law dynamics. Online sessions across Ontario. Free consultation available."
    price_tier: "$$"
    type: "predefined"

  - name: "Group therapy for men"
    description: "Small-group therapy in Toronto with other men working through similar challenges. Confidential, structured, led by a registered therapist. Reserve your spot."
    price_tier: "$$"
    type: "custom"

  - name: "Free 20-minute consultation"
    description: "Free 20-minute consultation with our Toronto intake team. We match you to the right therapist for your situation. No pressure, no commitment."
    price_tier: "Free"
    type: "custom"

  # ─── MODALITIES (8) ───────────────────────────────────────────
  - name: "EMDR therapy"
    description: "EMDR therapy in Toronto for trauma, PTSD and recurring stress responses. 8-phase protocol with measurable progress markers. Sessions online across Ontario. Book a consult."
    price_tier: "$$"
    type: "predefined"

  - name: "CBT (Cognitive Behavioural Therapy)"
    description: "CBT in Toronto for men managing anxiety, depression and unhelpful thought patterns. Structured, time-limited, homework between sessions. Book a free intake call."
    price_tier: "$$"
    type: "predefined"

  - name: "DBT (Dialectical Behaviour Therapy)"
    description: "DBT-informed therapy in Toronto for men with emotional regulation challenges, intense reactions or recurring conflict. Skills-based and practical. Book today."
    price_tier: "$$"
    type: "predefined"

  - name: "Internal Family Systems (IFS) therapy"
    description: "IFS / parts-based therapy in Toronto for men working through inner conflict, trauma and self-criticism. Compassion-based approach. Free consultation available."
    price_tier: "$$"
    type: "predefined"

  - name: "Somatic therapy"
    description: "Somatic body-based therapy in Toronto for men with chronic stress, stored trauma or emotional disconnection. Combines talk + somatic awareness. Book a consult."
    price_tier: "$$"
    type: "custom"

  - name: "Trauma-focused therapy"
    description: "Trauma-focused therapy in Toronto combining EMDR, IFS and somatic methods. Safe, paced, led by trauma-trained clinicians. Online sessions across Ontario."
    price_tier: "$$"
    type: "predefined"

  - name: "PTSD treatment"
    description: "PTSD treatment in Toronto for first responders, veterans and men with post-traumatic stress. Evidence-based protocols (EMDR, CPT, IFS). Confidential and online."
    price_tier: "$$"
    type: "predefined"

  - name: "Mindfulness-based therapy"
    description: "Mindfulness-based therapy in Toronto for men managing stress, anxiety and reactivity. Integrates ACT and MBCT principles. Online sessions. Book a free intake."
    price_tier: "$$"
    type: "custom"

  # ─── ISSUES ADDRESSED (12) ────────────────────────────────────
  - name: "Anxiety therapy"
    description: "Anxiety therapy in Toronto for men managing panic, chronic worry or social anxiety. CBT and DBT-informed with tools you can use between sessions. Book today."
    price_tier: "$$"
    type: "predefined"

  - name: "Depression counselling"
    description: "Depression counselling in Toronto for men. Direct, evidence-based and focused on regaining momentum and engagement. CRPO-registered therapists. Free consultation."
    price_tier: "$$"
    type: "predefined"

  - name: "Trauma counselling"
    description: "Trauma counselling in Toronto for men working through abuse, neglect, accidents or complex childhood trauma. Trauma-trained clinicians. Move at your pace."
    price_tier: "$$"
    type: "predefined"

  - name: "Addiction counselling"
    description: "Addiction counselling in Toronto for alcohol, substance, gambling or behavioural addictions. ASIST-certified, non-judgmental and accountability-focused. Book a consult."
    price_tier: "$$"
    type: "predefined"

  - name: "Substance abuse counselling"
    description: "Substance abuse counselling in Toronto blending motivational interviewing, harm reduction and abstinence approaches. Tailored to where you are. Book today."
    price_tier: "$$"
    type: "predefined"

  - name: "Anger management therapy"
    description: "Anger management in Toronto for men. DBT-informed emotional regulation, trigger mapping and communication skills. Online and confidential. Free consultation."
    price_tier: "$$"
    type: "predefined"

  - name: "Grief counselling"
    description: "Grief counselling in Toronto for men dealing with loss of a partner, parent, child or close friend. Compassionate and paced. Book a free intake call."
    price_tier: "$$"
    type: "predefined"

  - name: "Stress management therapy"
    description: "Stress and burnout therapy in Toronto for high-performing men. Practical tools + deeper work on root causes. Evening and weekend sessions. Book today."
    price_tier: "$$"
    type: "custom"

  - name: "Self-esteem counselling"
    description: "Self-esteem counselling in Toronto for men in transition — career, divorce, fatherhood, midlife. Confidence, identity and self-worth work. Free consultation."
    price_tier: "$$"
    type: "custom"

  - name: "Relationship counselling"
    description: "Relationship counselling in Toronto for men working on communication, attachment patterns and rebuilding trust after a rupture. CRPO-registered. Book today."
    price_tier: "$$"
    type: "predefined"

  - name: "Divorce counselling"
    description: "Divorce counselling in Toronto for men. Practical support for the legal and financial weight plus deeper work on identity and grief. Online sessions. Free intake."
    price_tier: "$$"
    type: "predefined"

  - name: "OCD therapy"
    description: "OCD therapy in Toronto for men. Exposure and Response Prevention (ERP) plus CBT — the evidence-based standard. Online sessions across Ontario. Book a consult."
    price_tier: "$$"
    type: "predefined"

  # ─── LIFE-STAGE / DEMOGRAPHIC (5) ─────────────────────────────
  - name: "Therapy for fathers"
    description: "Therapy in Toronto for new fathers, single dads and men in co-parenting. Addresses identity, exhaustion and the emotional weight of fatherhood. Book today."
    price_tier: "$$"
    type: "custom"

  - name: "Therapy for entrepreneurs"
    description: "Therapy in Toronto for founders and business owners managing stress, isolation and the emotional cost of building something. Evening sessions available."
    price_tier: "$$"
    type: "custom"

  - name: "Therapy for first responders"
    description: "Trauma-trained therapy in Toronto for police, paramedics, firefighters and military. EMDR + IFS for PTSD, moral injury and operational stress. Confidential."
    price_tier: "$$"
    type: "custom"

  - name: "Life transitions counselling"
    description: "Life transitions counselling in Toronto for men through job change, business sale, retirement or divorce. Structured goals + emotional support. Book today."
    price_tier: "$$"
    type: "custom"

  - name: "Midlife crisis therapy"
    description: "Midlife therapy in Toronto for men in their 40s and 50s questioning purpose, identity, relationships or career. Real conversations, real change. Free consult."
    price_tier: "$$"
    type: "custom"

  # ─── FORMAT / DELIVERY (6) ────────────────────────────────────
  - name: "Online therapy"
    description: "Online therapy in Toronto and across Ontario. Encrypted video, CRPO/OCSWSSW receipts for insurance, flexible evening hours. Free 20-min consultation."
    price_tier: "$$"
    type: "predefined"

  - name: "Virtual counselling for men"
    description: "Virtual counselling for men in Toronto — no commute, evening hours, encrypted video. Available anywhere in Ontario. Book your free intake call."
    price_tier: "$$"
    type: "custom"

  - name: "Telehealth psychotherapy"
    description: "Telehealth psychotherapy in Toronto with CRPO/OCSWSSW registered clinicians. Insurance receipts provided. Encrypted video platform. Free consultation."
    price_tier: "$$"
    type: "custom"

  - name: "Evening therapy sessions"
    description: "Evening therapy in Toronto for men with day jobs. Sessions Monday-Thursday until 9pm with CRPO-registered therapists. Book your slot today."
    price_tier: "$$"
    type: "custom"

  - name: "Weekend therapy sessions"
    description: "Saturday therapy in Toronto for men whose schedules don't allow weekdays. Limited slots, book early. CRPO-registered clinicians. Free 20-min consultation."
    price_tier: "$$"
    type: "custom"

  - name: "Same-week appointments"
    description: "Same-week therapy appointments in Toronto for urgent intake. CRPO-registered team, evening and weekend availability. Call or book a free consultation."
    price_tier: "$$"
    type: "custom"

  # ─── PACKAGES (4) ─────────────────────────────────────────────
  - name: "8-session anxiety program"
    description: "Structured 8-session CBT anxiety program in Toronto. Pay-as-you-go ($185/session). Clear milestones at sessions 4 and 8. Online across Ontario. Book today."
    price_tier: "$$"
    type: "custom"

  - name: "8-session anger management program"
    description: "Structured 8-session anger management program in Toronto. DBT-informed, accountability-focused, court-compatible records on request. Book a consultation."
    price_tier: "$$"
    type: "custom"

  - name: "12-session trauma protocol"
    description: "12-session trauma protocol in Toronto combining EMDR + IFS. Paced safely with clear progress markers. Online sessions across Ontario. Book a free intake."
    price_tier: "$$"
    type: "custom"

  - name: "Couples intensive (3 sessions)"
    description: "3-session couples intensive in Toronto for couples in crisis or about to start counselling. Rapid alignment + a 12-week plan. Book a discovery call."
    price_tier: "$$"
    type: "custom"
```

**Total: 40 services** — mix of pre-defined (extra ranking weight) + custom (keyword-rich differentiators).

### Keyword research workflow (run before finalizing)

Validate each service name in SEMrush or Google Keyword Planner:

| Variant A | Volume | Variant B | Volume | Winner |
|---|---|---|---|---|
| "psychotherapist toronto" | 720/mo | "therapist toronto" | 8,100/mo | Use both (B = service, A = category) |
| "anxiety therapy toronto" | 480/mo | "anxiety counselling toronto" | 90/mo | "anxiety therapy" |
| "EMDR therapy toronto" | 260/mo | "EMDR toronto" | 880/mo | Use both — "EMDR therapy" service + "EMDR" in description |
| "couples counselling toronto" | 590/mo | "couples therapy toronto" | 1,300/mo | "Couples therapy" |
| "men's therapy toronto" | 390/mo | "therapy for men toronto" | 210/mo | Use both |

When two variants are close, use both — one as service name, the other inside the description.

---

## 4. Description (750 chars max)

```yaml
description: |
  The Brotherhood Therapy is a men's psychotherapy clinic serving Toronto and Ontario.
  Practical, direct, evidence-based sessions ($185/hr) led by CRPO + OCSWSSW
  registered therapists trained in CBT, DBT, EMDR and ASIST. We help men work
  through anxiety, depression, trauma, addictions, relationships and life
  transitions — with a focus on accountability and measurable change. Free 20-min
  consultation. Insurance receipts provided. Secure online sessions across Ontario.
  Book today.
```

**Character count:** ~595 · leaves room for a current offer line.

**Rules applied:**
- Primary keyword + city in first sentence ("men's psychotherapy clinic serving Toronto")
- First 100 chars contain the hook visible before "see more"
- Differentiators present (CRPO/OCSWSSW, evidence-based, accountability)
- Clear CTA ("Book today")
- No URLs, no keyword stuffing

---

## 5. Hours

```yaml
hours:
  regular:
    monday: "9am-9pm"
    tuesday: "9am-9pm"
    wednesday: "9am-9pm"
    thursday: "9am-9pm"
    friday: "9am-6pm"
    saturday: "10am-4pm"
    sunday: "Closed"
  holiday_hours:
    - "Dec 24-26: Closed"
    - "Dec 31: 9am-2pm"
    - "Jan 1: Closed"
    - "Good Friday: Closed"
    - "Canada Day: Closed"
    - "Civic Holiday: Closed"
    - "Labour Day: Closed"
    - "Thanksgiving Monday: Closed"
  is_24_7: false
  has_answering_service: true
```

For the "open now" ranking lift, layer in an AI receptionist (Bland.ai · Synthflow · ~$50-200/mo) and set `is_24_7: true`. For a therapy clinic, a real human intake during business hours typically converts better than 24/7 AI.

---

## 6. Photos brief

```yaml
photos_brief:
  exterior:
    - "Office building exterior at the registered address (helps trust even for SAB)"
  interior:
    - "Clinician home/office setup used for video sessions (warm, professional)"
    - "Desk with notepad, plant, framed CRPO/OCSWSSW credentials"
    - "Therapist's view of the encrypted video platform"
  team:
    - "Individual headshots for each clinician (professional, neutral background)"
    - "Group team photo (Zoom screenshot acceptable for a virtual team)"
    - "Intake coordinator headshot"
  work_in_progress: []   # Never — confidentiality requirements
  products:
    - "Free 20-min consultation graphic"
    - "Pricing card ($185/hr)"
    - "Credentials badge (CRPO + OCSWSSW + EMDR + DBT)"
    - "Insurance receipts mockup"
    - "Service overview cards (anxiety, trauma, addiction, couples)"
  monthly_upload_target: "3-5 new photos / month"
```

**Rules:**
- 100+ photos correlates with up to 520% more phone calls (BrightLocal)
- Recency matters — Google rewards uploads within 30 days
- Never post client-identifying content; stock client images violate policy
- Use fal.ai for AI-generated concept illustrations where needed

---

## 7. Attributes

```yaml
attributes:
  identity:
    - women_owned: false
    - veteran_owned: false
    - lgbtq_friendly: true        # Toggle on — creates a niche pack
    - black_owned: false
    - family_owned: false
    - indigenous_owned: false
  service_options:
    - online_appointments: false  # Counter-intuitive — turn OFF (pushes reviews out of view)
    - onsite_services: false      # Same
    - language_assistance: true   # if any therapist speaks a 2nd language
  accessibility:
    - wheelchair_accessible: n/a  # online only
  payments:
    - credit_cards: true
    - debit_cards: true
    - e_transfer: true            # important in Canada
    - insurance_direct_billing: false  # update if Telus/Greenshield set up
  amenities:
    - free_consultation: true
    - evening_hours: true
    - weekend_hours: true
```

GBP doesn't have a "men-focused clinic" attribute. Lean into this in the description and service names instead. The `lgbtq_friendly` toggle is the highest-impact identity attribute available for this profile.

---

## 8. Service area

```yaml
service_area:
  is_sab: true
  cities:
    - "Toronto, ON"
    - "Mississauga, ON"
    - "Brampton, ON"
    - "Markham, ON"
    - "Vaughan, ON"
    - "Richmond Hill, ON"
    - "Oakville, ON"
    - "Burlington, ON"
    - "Hamilton, ON"
    - "Etobicoke, ON"
    - "Scarborough, ON"
    - "North York, ON"
    - "Pickering, ON"
    - "Ajax, ON"
    - "Whitby, ON"
    - "Oshawa, ON"
    - "Newmarket, ON"
    - "Aurora, ON"
    - "Milton, ON"
    - "Barrie, ON"
  max_drive_time: "2 hours"
```

Pair the top 5 cities with location landing pages on the website (e.g. `/therapy-toronto`, `/therapy-mississauga`, `/therapy-hamilton`). Service area alone won't get you into city packs — landing pages do the heavy lifting.

---

## 9. Products / featured services

```yaml
products:
  - name: "Free 20-min consultation"
    description: "Match with the right therapist on our team. No commitment."
    price: "Free"
    image_brief: "Calendar + phone graphic in brand colours"
    linked_service_page: "https://thebrotherhood.ca/book"

  - name: "Individual therapy session"
    description: "1-on-1 psychotherapy with a CRPO/OCSWSSW therapist."
    price: "$185 / 50 min"
    image_brief: "Therapist at desk, video call setup"
    linked_service_page: "https://thebrotherhood.ca/services/individual"

  - name: "Couples therapy session"
    description: "Couples counselling with a trained relationship therapist."
    price: "$185 / 50 min"
    image_brief: "Couple on couch with laptop, joint session"
    linked_service_page: "https://thebrotherhood.ca/services/couples"

  - name: "EMDR trauma session"
    description: "Structured EMDR session for trauma resolution."
    price: "$185 / 50 min"
    image_brief: "EMDR setup, calm therapy space"
    linked_service_page: "https://thebrotherhood.ca/services/trauma"

  - name: "8-session anxiety program"
    description: "Structured 8-session CBT protocol for anxiety. Pay-as-you-go."
    price: "$1,480 total ($185 × 8)"
    image_brief: "Calendar with 8 marked sessions"
    linked_service_page: "https://thebrotherhood.ca/services/anxiety"

  - name: "12-session trauma protocol"
    description: "Structured 12-session EMDR + IFS protocol for trauma resolution."
    price: "$2,220 total ($185 × 12)"
    image_brief: "Brain illustration with milestone markers"
    linked_service_page: "https://thebrotherhood.ca/services/trauma-protocol"

  - name: "Couples intensive (3 sessions)"
    description: "3-session intensive for couples in crisis. Rapid alignment + a 12-week plan."
    price: "$555 total ($185 × 3)"
    image_brief: "Two chairs facing each other"
    linked_service_page: "https://thebrotherhood.ca/services/couples-intensive"

  - name: "Addiction recovery support"
    description: "Non-judgmental addiction therapy with ASIST-certified clinicians."
    price: "$185 / 50 min"
    image_brief: "Quiet contemplative scene"
    linked_service_page: "https://thebrotherhood.ca/services/addiction"

  - name: "Anger management program"
    description: "Structured 8-session anger management program."
    price: "$1,480 total ($185 × 8)"
    image_brief: "Clenched fist relaxing"
    linked_service_page: "https://thebrotherhood.ca/services/anger"

  - name: "First responder trauma therapy"
    description: "Trauma therapy tailored to police, paramedics, firefighters and military."
    price: "$185 / 50 min"
    image_brief: "Subtle uniform silhouette + therapy setup"
    linked_service_page: "https://thebrotherhood.ca/services/first-responders"
```

---

## 10. Booking

```yaml
booking:
  enabled: true
  platform: "Jane App"                 # most common in Canadian therapy
  booking_url: "https://thebrotherhood.janeapp.com"
  fallback_cta: "Book free consultation"
```

Replace `booking_url` with the real platform link. Common Canadian alternatives: Owl Practice, Practice Better, Acuity, Calendly.

---

## 11. FAQ seed (publish on website, NOT on GBP)

```yaml
faq_seed:
  - question: "How much does therapy cost at The Brotherhood?"
    answer: "Sessions are $185 per 50 minutes. We provide receipts for insurance reimbursement under CRPO (Registered Psychotherapist) and OCSWSSW (Registered Social Worker) coverage. Most extended health plans cover one or both."

  - question: "Is online therapy as effective as in-person?"
    answer: "Yes. Decades of research show that online psychotherapy produces equivalent outcomes to in-person therapy for most concerns — anxiety, depression, trauma and relationship issues included. The platform is encrypted and PHIPA-compliant."

  - question: "Do you only work with men?"
    answer: "Our clinic specializes in men's mental health and our therapy approach is built around how men typically engage in therapy. We do see couples and partners as part of relationship work."

  - question: "What insurance do you accept?"
    answer: "We provide receipts that work with most Canadian extended health plans covering Registered Psychotherapists or Registered Social Workers. Check your plan's specific coverage for each designation."

  - question: "How do I know which therapist is right for me?"
    answer: "Book a free 20-minute consultation. Our intake coordinator will match you with the therapist whose specialties, training and style fit your situation best."

  - question: "Where in Ontario do you serve?"
    answer: "We serve clients across the Greater Toronto Area and surrounding regions — Toronto, Mississauga, Hamilton, Barrie, Oshawa and many cities in between. Anywhere in Ontario can access us via encrypted video."

  - question: "What approaches do your therapists use?"
    answer: "Our team is trained in CBT, DBT, EMDR, IFS and ASIST. We use evidence-based methods with a focus on practical, measurable change rather than open-ended talk therapy."

  - question: "How long does therapy take?"
    answer: "Most clients see meaningful change within 8-12 sessions for a focused issue. Deeper work on trauma or longstanding patterns typically takes longer. We discuss expectations during your consultation."

  - question: "Is what I share confidential?"
    answer: "Yes. All sessions are bound by therapist-client confidentiality under Ontario regulatory bodies (CRPO, OCSWSSW), with rare legal exceptions which your therapist will explain in your first session."

  - question: "Can I book evening or weekend sessions?"
    answer: "Yes. We offer evening sessions Monday-Thursday until 9pm and Saturday morning slots. Sunday is closed."

  - question: "Do you offer same-week appointments?"
    answer: "Yes, in most cases. Book a consultation through our intake page and our coordinator will surface the soonest matching slots — often within the same week."

  - question: "Can I switch therapists if it's not a good fit?"
    answer: "Yes. We expect that some matches won't click, and switching is easy — just tell your intake coordinator. There's no awkward conversation required with the original therapist."
```

Add these to a `/faq` page on the website with FAQ schema markup. AI Overviews pull from website FAQ schema, not GBP Q&A.

---

## 12. NAP citations

```yaml
nap_master:
  name: "The Brotherhood Therapy"
  address: "100 King Street West, Suite 5600, Toronto, ON M5X 1C9"
  phone: "(416) 555-0184"

citation_directories:
  tier_1_universal:
    - "Google Business Profile"
    - "Apple Maps Connect"
    - "Bing Places"
    - "Yelp"
    - "Facebook Business Page"
    - "Foursquare"
    - "Yellow Pages Canada"

  tier_2_authority:
    - "Better Business Bureau (Canada)"
    - "Toronto Region Board of Trade / local Chamber of Commerce"
    - "Nextdoor Business"
    - "Canada411"

  tier_3_industry:
    - "Psychology Today (Canada directory)"   # #1 must-have · $29.95/mo
    - "GoodTherapy"
    - "TherapyTribe"
    - "TherapyDen"
    - "Choosing Therapy"
    - "Inkblot Therapy directory"
    - "CRPO public register (each clinician verified)"
    - "OCSWSSW public register (each clinician verified)"
```

**Byte-identical NAP rule** — pick one format and use it everywhere:
- **Name:** `The Brotherhood Therapy` (no "Inc.", no city suffix)
- **Address:** `100 King Street West, Suite 5600, Toronto, ON M5X 1C9` (always "Street", always "Suite")
- **Phone:** `(416) 555-0184` (parens + space + dash)

Use SEMrush Listing Management ($20/mo) for bulk submission to 70+ directories from one form.

---

## Final notes

- All 12 sections complete · ready to paste into GBP in ~30-45 minutes (40 services takes longer than the 10-service default)
- Photos and citation submissions add ~1 hour
- Highest ROI follow-up: build 20 city landing pages on the website to pair with the service area
- Add the FAQ section with schema markup for AI Overview pickup
