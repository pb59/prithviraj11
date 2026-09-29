# Personal-brand SEO and job-search alignment

## Goal

Reposition the published site around **“Prithviraj Bagchi — AI & Data Architect”** for remote senior AI/Data architecture opportunities, while preserving the current visual style and useful product content. All claims will stay conservative: 18+ years only, no rankings, invented outcomes, ratings, testimonials, or identity variants.

## Changes

### 1. Clean and consolidate site metadata
- Replace the current duplicated, conflicting head tags with one consistent set using the requested title and a concise 18+ years description.
- Use `https://prithviraj11.lovable.app/` for canonical, Open Graph, Twitter, Person, and WebSite URLs.
- Remove the keyword-stuffed tag, alternate-name spellings, broken image metadata, duplicate social tags, and unsupported search-action metadata.
- Replace the many conflicting schema blocks with valid, focused Person and WebSite JSON-LD plus an accurate list of the products already shown on the site.
- Include confirmed LinkedIn, YouTube, GitHub, Hugging Face, X, portfolio, and ScienceDirect links where semantically appropriate.

### 2. Align visible homepage positioning
- Change the single homepage H1 to **“Prithviraj Bagchi — AI & Data Architect.”**
- Add the supporting line **“Enterprise GenAI | Agentic AI | Data Architecture | Cloud Data Platforms.”**
- Rewrite the introductory copy around 18+ years in enterprise technology and the bridge from data/cloud architecture to AI-enabled systems.
- Update About and Experience language to the same factual positioning, removing 20+ years, unsupported client names, outcomes, ratings, and project/user metrics.
- Remove the unverified testimonials/results section from the homepage and its navigation link.

### 3. Add research and verified profile links
- Add a crawlable homepage **Research & Publications** section for the supplied ScienceDirect chapter, naming Prithviraj Bagchi and using only the supplied subject tags: Generative AI, Agentic AI, Healthcare AI.
- Add a **Profiles & Publications** link group with descriptive anchor labels for LinkedIn, YouTube, ScienceDirect, GitHub, Hugging Face, X, and the supplied portfolio.
- Replace the LinkedIn discovery/follow URL everywhere with the personal profile URL.

### 4. Correct supporting public content
- Change remaining incorrect author-name variants and 20+ references in rendered pages.
- Remove unsupported quantitative claims from product/project copy and blog text where encountered.
- Preserve existing products, routes, pricing content, videos, comments, and overall design unless a section is based on unverified testimonials or metrics.

### 5. Fix crawler files
- Keep crawling open in `robots.txt` and point its sitemap directive to the published Lovable host.
- Rebuild `sitemap.xml` with only the implemented routes: `/`, `/products`, `/pricing`, and `/blog`.

## Technical details

- Create a focused reusable homepage publication/profile section using existing tokens and styling.
- Keep exactly one H1 on the homepage and use H2 headings for major sections.
- Keep links as standard accessible anchors with descriptive labels and external-link handling.
- Record the canonical-host and conservative-claims architecture rules in `AGENTS.md`.
- Validate the resulting metadata/schema, scan the codebase for prohibited claims and old URLs, check the preview at desktop and mobile sizes, and run the fast SEO review.

## After the update

- The source will be ready, but the metadata reaches the public URL only after publishing again.
- After publishing, use Google Search Console URL Inspection for the homepage and request indexing; submit the corrected sitemap if needed.