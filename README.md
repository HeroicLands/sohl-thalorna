# Thalorna Module for Song of Heroic Lands

This module provides the necessary items, actors, and assets needed to play in the Thalorna setting for Song of Heroic Lands

## Building

```sh
npm install
npm run build:compiledb      # assets/content/ → build/stage/packs/{items,journals}
npm run build:link-manifest  # assets/content/ → build/manifests/thalorna.json
npm run build:site-content   # assets/content/ → build/dist/content/
```

A plain checkout is all that is needed. There is no sibling repository to clone
and no `HEROICLANDS_VAULT` to set — as of #1441 this repository owns its content
outright, and everything it ships is generated from it.

## Content

Thalorna's 1,740 notes are **source**, in [`assets/content/`](assets/content/README.md).
That README is the one to read before adding or editing a note: it covers the
frontmatter fields that carry identity, what makes a note compile into an item
rather than a journal, and how to write a link into another package.

Everything built from those notes — the compendium packs and the link manifest —
lands under `build/`, which is gitignored. No compiled output is committed.

The pack compiler in [`utils/packs/`](utils/packs/README.md) is a vendored copy
of the Song of Heroic Lands system repository's, kept deliberately identical so
that the two cannot drift unnoticed; that README lists the few differences and
why each exists.

## Publishing to the website

This repository owns exactly one path on heroiclands.org — **`/thalorna`** — and
publishes it as **markdown, not as a website** (#1451). `npm run
build:site-content` turns `assets/content/` into a Hugo-ready tree under
`build/dist/content/`, and `.github/workflows/deploy-dist.yml` force-pushes that
tree to the **`dist`** branch on every push to `main` that touches the content or
the build that derives it. `heroiclands-site` checks `dist` out into
`_dist/thalorna/` and mounts `content/` at `content/thalorna` (#1453).

Nothing here runs Hugo, holds a theme, or deploys anything, and nothing else
writes to `/thalorna`. The `dist` branch is output: it is force-replaced on every
publish and has no history worth keeping — `main` is the source.

What the build does to a note:

- **Routes** it to `<section>/<slug>.md`, where the section is its `type` (a
  `type: doc` routes by its `category`) and the slug is derived from `name.full`
  by the shared rule in `utils/content-slug.mjs`. A `category: collection` note
  _is_ a section's landing and writes that section's `_index.md`.
- **Expands** its fenced `dataview` table directives against every published note.
- **Resolves** its wikilinks to site-local hrefs — the same authored links the
  pack compiler turns into Foundry `@UUID` enrichers.
- **Carries forward** the URLs it published at before, as Hugo `aliases`, and the
  name its CDN artwork was uploaded under, as `artwork`.

That last record is [`assets/legacy-urls.json`](assets/legacy-urls.json), keyed
by a note's `type:shortcode`. It is **append-only history**: never edit an entry,
and add one only when a page's URL changes again. Some of its entries name
shortcodes that no longer exist, because a note was renamed after the URL was
recorded — those simply never fire, and re-pointing one at the note that now owns
the address is a hand edit, not something to derive.

Because `aliases` means two unrelated things — alternative _names_ in Obsidian,
_URL redirects_ in Hugo — a note's authored `aliases` is dropped rather than
published. Only the recorded history above becomes a redirect.
