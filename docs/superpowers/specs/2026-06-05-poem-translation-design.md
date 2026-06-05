# Poem Translation Toggle Design

## Summary

Add a curated English translation feature for poems whose original body text is in Bikolano. The poem detail page will keep the original poem visible as the primary version and will reveal the English translation only when the reader opens a `Show English translation` toggle. Poems whose original body text is already in English will not show any translation UI.

## Goals

- Add an English translation per Bikolano poem.
- Do not add translation UI for English poems.
- Keep the original poem as the default visible version.
- Keep translations stable, accurate, respectful, and conservative in tone.
- Preserve the current visual style of the poem detail page.

## Non-Goals

- No machine-generated or runtime-generated translations.
- No global site language switch.
- No side-by-side bilingual layout.
- No translation controls on the poem list page.

## Current Context

- Poem data is defined in `src/app/poems.service.ts`.
- The poem detail page renders a poem from `PoemDetailService` into `src/app/poem-detail/poem-detail.component.html`.
- Stanza grouping is derived from blank lines through `buildStanzas`.
- Some poems have English titles even when the poem body is in Bikolano, so translation eligibility must depend on the poem body metadata rather than the title alone.

## Design Decisions

### Data Model

Extend the `Poem` model with:

- `language`: the language of the original poem body, expected to be either Bikolano or English.
- `translationLines?`: optional curated English translation lines for Bikolano poems only.

Keep translations in the same poem record rather than in a separate map. This keeps the source text and translated text attached to the same object, reduces the chance of mismatches, and makes poem-by-poem review easier.

### Translation Scope

Add translations only for poems whose original body text is in Bikolano. Based on the current set, this includes poems whose lines are Bikolano even if the title is English. English-body poems will not receive `translationLines`.

### Rendering Behavior

On the poem detail page:

- Always render the original poem body first.
- Show a translation toggle only when `translationLines` exists.
- The default state is collapsed.
- The toggle label should make it clear that the hidden content is the English translation.
- When opened, the translation renders below the original poem using the same stanza grouping logic as the original lines.

### Detail Service Changes

`PoemDetailService` should expose:

- whether the current poem has a translation
- stanza-grouped translation lines for rendering
- local UI state for whether the translation is expanded

The service should keep the toggle state predictable when navigating between poems. The safe default is to reset the translation panel to collapsed when the current poem changes.

### UI And Styling

The translation section should fit the existing poem detail card rather than create a second competing card. The toggle should look intentional within the current aesthetic, with subdued treatment that does not overpower the poem title or navigation. The translation body should remain visually secondary to the original poem while still being readable.

## Content Guidelines

Translations must be:

- accurate to the original meaning first
- lightly poetic in English where that does not distort meaning
- conservative in tone
- free from added possessiveness, aggression, or stronger romantic implications than the source text

Where a Bikolano phrase has multiple possible English readings, prefer the more neutral faithful wording over a more dramatic interpretation.

## Testing And Verification

Add automated coverage for:

- Bikolano poems exposing translation metadata
- English poems not exposing translation UI conditions
- stanza grouping working for translated lines the same way it works for original lines
- poem detail template conditions that only render the toggle when a translation exists

Verification after implementation:

- run project checks already used in the repo
- manually inspect the detail page for at least one Bikolano poem and one English poem
- confirm the toggle starts collapsed and resets correctly when navigating between poems

## Risks

- The largest practical risk is translation drift if poem text changes later. Keeping translation content adjacent to the source poem reduces that risk.
- The data file will become larger. This is acceptable because the feature is content-driven and the extra content remains tightly coupled to each poem entry.

## Out Of Scope Follow-Up

If the poem collection grows significantly, the translation content can later be moved into a dedicated content module without changing the UI contract introduced by this feature.
