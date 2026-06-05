# Private Poetry Collection

Private Angular web app for browsing a password-protected collection of long-form poems in a polished reading layout.

## Current State

This project is no longer a generic UI sandbox. It currently ships as a private poetry experience with:

- a password-gated entry screen
- a home page that presents a 12-poem collection
- poem detail pages with previous and next navigation
- curated English translation toggles for poems written in Bikolano
- ambient motion, layered visuals, and responsive reading layouts

English-only poems do not show translation controls.

## Stack

- Angular 19
- Angular Router
- Angular Animations
- SCSS

## Local Development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run typecheck
npm run build
```

## Project Structure

- `src/app/` contains the application views, routes, and poem data
- `public/` contains static assets and the generated sitemap
- `scripts/` contains local development and build helper scripts

## Notes

- The poem collection currently includes both English and Bikolano entries.
- Bikolano poems can include a manually written English translation shown behind a toggle on the detail page.
- The app content is private in intent and is structured for a focused reading experience rather than public publishing workflows.
