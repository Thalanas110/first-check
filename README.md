# Angular Motion Sandbox

Private Angular prototype for testing animated page transitions, content-card interactions, and long-form layout behavior across desktop and mobile breakpoints.

## Status

This repository is currently being used as an internal UI experiment. The present copy, imagery, and naming inside the app should be treated as temporary placeholder material used to tune spacing, typography, animation timing, and page flow.

## Focus Areas

- standalone Angular component patterns
- route-based page transition timing
- grid-to-detail interaction flows
- layered backgrounds and ambient motion
- responsive typography and reading layout polish

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

## Project Notes

- App source lives in `src/`
- Shared static assets live in `public/`
- The current content set is only being used for presentation calibration and does not represent final product direction

## Roadmap

- clean up component boundaries
- refine motion choreography
- improve content abstraction
- finalize production-facing copy and structure
