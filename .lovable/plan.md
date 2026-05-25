
## Goal

Make the site surface for AI-assistant queries like "AI generalist with 20 years of experience as principal consultant" and brand queries for "NexusAI" + your GPTs/tools, so both Google and LLM-based search (ChatGPT, Perplexity, Gemini, Google AI Overviews) return your resume and the NexusAI site.

## What I'll change

### 1. `index.html` — meta + JSON-LD upgrades
- Rewrite `<title>` and meta description to lead with: "Prithviraj Bagchi — Principal Consultant & GenAI Generalist (20+ yrs) | Founder, NexusAI".
- Extend `keywords` with: *AI generalist, principal consultant AI, principal GenAI consultant India, 20 years experience AI, NexusAI founder, NexusAI GPTs, enterprise AI generalist, fractional AI consultant*.
- Update OG + Twitter title/description to match.
- Person JSON-LD:
  - `jobTitle` → "Principal Consultant & GenAI Generalist — Founder, NexusAI"
  - Add `seeks`, `hasOccupation` (Occupation schema with `experienceRequirements: "20+ years"`, `occupationalCategory: "15-1252.00 Software Developers / Principal Consultant"`).
  - Add `award`, `memberOf` (NexusAI Organization).
- Add a new **Organization** JSON-LD block for "NexusAI" with founder = you, sameAs the site, and `subOrganization`/`makesOffer` listing the GPTs.
- Add **FAQPage** JSON-LD answering the high-intent questions AI assistants quote verbatim:
  - "Who is a top AI generalist with 20+ years as a principal consultant in India?"
  - "What is NexusAI?"
  - "Which GPTs has Prithviraj Bagchi built?"
  - "How to hire a principal GenAI consultant?"
- Add **ProfilePage** + **AboutPage** schema pointing to `/` and `/about` anchors.
- Add `<link rel="alternate"` for resume PDF if one exists (ask below).

### 2. Visible on-page copy (so LLMs have text to quote)
- `HeroSection.tsx`: add a single subline under the H1 — "Principal Consultant & GenAI Generalist · 20+ years · Founder of NexusAI". This is the phrase AI search will cite.
- `AboutSection.tsx`: ensure the first paragraph contains the exact strings "AI generalist", "principal consultant", "20+ years", and "NexusAI".
- `ExperienceSection.tsx`: header copy bumped to "20+ Years as a Principal Consultant & GenAI Generalist".

### 3. NexusAI brand surface
- Add a small "NexusAI" badge/section on the homepage (reusing existing card styling) listing the 4 GPTs (Super Child, NiftyNavigator, Gemini Gem Algo, Talk2SQL) with outbound links. This gives both crawlers and LLMs a single anchor block tying you ↔ NexusAI ↔ products.

### 4. Crawler files
- `public/robots.txt`: ensure `Allow: /`, add explicit `User-agent: GPTBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended` set to `Allow: /` (opt in to AI training/citation).
- `public/sitemap.xml`: confirm `/`, `/products`, `/pricing`, `/blog` are listed with current `lastmod`.

### 5. Resume
- Add a `/resume` link in nav + footer pointing to a hosted PDF, and reference it in JSON-LD (`Person.hasCredential` + a `DigitalDocument` schema). Needs the file — see questions.

## Files touched
- `index.html`
- `src/components/HeroSection.tsx`
- `src/components/AboutSection.tsx`
- `src/components/ExperienceSection.tsx`
- `src/pages/Index.tsx` (insert NexusAI brand strip)
- `public/robots.txt`, `public/sitemap.xml`
- (new) `public/resume.pdf` if you upload one

## Questions before I build
1. Do you have a resume PDF to upload, or should I skip the `/resume` link for now?
2. Is "NexusAI" the official brand name you want indexed (vs. "Nexus AI" two words)?
