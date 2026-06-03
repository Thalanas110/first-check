# Password Wall SEO Design

## Summary

This site will keep the existing password wall as the only public entry page. SEO improvements will focus on that locked page rather than exposing any of the 12 poems or their excerpts before unlock.

The public page should rank for queries around:

- `annah claire first`
- `annah claire first monthsary`
- `annah claire first monthsary poems`

The page should still read as a romantic dedication first, with search relevance blended into visible copy and metadata instead of keyword stuffing.

## Goals

- Keep the password wall intact.
- Keep all 12 poems hidden before unlock.
- Make the locked page the indexable SEO surface.
- Strengthen relevance for Annah Claire and first-monthsary searches.
- Preserve the current romantic tone and visual identity.

## Non-Goals

- Making poem titles, excerpts, or poem routes public.
- Removing the password gate.
- Adding spammy keyword blocks or hidden text.
- Reworking the overall app structure beyond what is needed for metadata and locked-page copy.

## Current State

- The Angular app renders either the unlocked routed experience or the locked password screen.
- Search engines can crawl the locked page, but the current metadata and copy are too thin to strongly match the target queries.
- The sitemap and robots configuration already point crawlers at the site, but the locked page is the only reliable public SEO surface while the gate remains active.

## Proposed Approach

### 1. Treat the Locked Page as the Public Landing Page

The password page becomes the intentional, indexable landing page for the whole site. It should clearly state that the site is a private first-monthsary gift for Annah Claire and that the full poems and letters unlock only after entering the password.

This makes the crawlable page semantically honest: public visitors and crawlers see the same high-level description, while the private content stays protected.

### 2. Strengthen Visible Copy Without Revealing Content

The locked page copy will be updated to include:

- Annah Claire's name in a prominent visible line.
- A hero headline that naturally includes "first monthsary".
- A short romantic paragraph explaining that the site is a private first-monthsary collection of poems and letters made for Annah Claire.
- A secondary short line clarifying that the 12 poems remain locked until the password is entered.

The page must not show:

- poem titles
- poem excerpts
- poem summaries
- poem previews
- any list of the 12 poems

### 3. Improve Metadata for Search and Sharing

The document head should be updated so the locked page has stronger SEO and social signals:

- page title containing `Annah Claire` and `First Monthsary`
- meta description with romantic but explicit context
- canonical URL pointing to the live site
- Open Graph title, description, URL, and image
- Twitter card metadata mirroring the same positioning

Optional structured data can be added only if it stays minimal and accurate, such as a `WebSite` entity. No misleading content schema should be introduced.

## Content Design

### Public Copy Principles

- Romantic first, searchable second
- Natural phrasing over repeated keyword strings
- Explicit enough for search engines to understand what the site is
- Honest about the fact that the real content is gated

### Suggested Content Shape

- Eyebrow: directly references Annah Claire
- Hero title: romantic first-monthsary framing
- Supporting paragraph: describes the site as a private first-monthsary poem and letter collection for Annah Claire
- Privacy paragraph: states that the 12 poems remain hidden until unlock
- Password form: remains the primary CTA

## Architecture and Component Impact

### Password Component

The password component remains the public surface and receives the visible-copy changes needed for SEO. Styling changes should be limited to supporting the expanded copy cleanly on desktop and mobile.

### App Shell

The app shell continues to enforce the existing locked-versus-unlocked rendering model. No private content should leak into the locked state through hidden DOM, prerendered text, or off-screen sections.

### Document Metadata

Metadata can be set statically in `index.html` if the whole site shares the same public landing-page identity, or programmatically at app startup if the team wants cleaner separation between locked and unlocked states. For the current scope, the simplest maintainable option should be preferred.

## Data Flow

1. Visitor or crawler requests the root URL.
2. The locked page renders by default unless the site is already unlocked in local state.
3. Search engines index the locked page's visible copy and metadata.
4. Human visitors may unlock the site by entering the password.
5. Only after unlock does the routed poem experience appear.

This preserves privacy while making the root page understandable to search engines.

## Error Handling and Privacy Guarantees

- Incorrect passwords continue to show the current error state.
- If local storage is unavailable, the current in-memory unlock behavior remains acceptable.
- No SEO enhancement may expose hidden poem content in HTML, metadata, JSON-LD, or static files beyond what is already intentionally public.
- The locked page should not imply that poem content is visible publicly when it is not.

## Testing Strategy

### Content Verification

- Confirm the locked page visibly contains Annah Claire and first-monthsary phrasing.
- Confirm none of the 12 poem titles or excerpts appear in the locked state.

### Metadata Verification

- Confirm the built HTML contains the updated title, meta description, canonical tag, and social tags.
- Confirm the metadata uses the same production URL as the sitemap.

### Regression Verification

- Confirm password unlock still works.
- Confirm the unlocked experience still renders after successful entry.
- Confirm the sitemap and robots output remain valid after SEO changes.

## Risks

- Over-optimizing the public copy could make the page feel forced or less personal.
- Static metadata may be enough now, but later route-specific SEO needs would require a more dynamic setup.
- If the production domain changes, metadata, sitemap, and robots must be updated together to avoid mixed canonical signals.

## Recommendation

Implement the locked page as a romantic public landing page with stronger visible copy and metadata, while keeping all poem content private until unlock. This is the best balance between privacy, tone, and search discoverability for the current site.
