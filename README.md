# Thalorna Module for Song of Heroic Lands

This module provides the necessary items, actors, and assets needed to play in the Thalorna setting for Song of Heroic Lands

## Building

```sh
npm install
npm run build:compiledb      # assets/content/ → build/stage/packs/{items,journals}
npm run build:link-manifest  # assets/content/ → build/manifests/thalorna.json
npm run build:site-content   # assets/content/ → site/content/
npm run build:site           # the above, then Hugo → build/site/thalorna/
```

A plain checkout is all that is needed. There is no sibling repository to clone
and no `HEROICLANDS_VAULT` to set — as of #1441 this repository owns its content
outright, and everything it ships is generated from it.

## Content

Thalorna's 1,740 notes are **source**, in [`assets/content/`](assets/content/README.md).
That README is the one to read before adding or editing a note: it covers the
frontmatter fields that carry identity, what makes a note compile into an item
rather than a journal, and how to write a link into another package.

Everything built from those notes — the compendium packs, the link manifest, and
the website — is generated output: the packs and the manifest land under
`build/`, the site under `site/content/` and `build/site/thalorna/`. All of it is
gitignored, and no compiled output is committed.

The pack compiler in [`utils/packs/`](utils/packs/README.md) is a vendored copy
of the Song of Heroic Lands system repository's, kept deliberately identical so
that the two cannot drift unnoticed; that README lists the few differences and
why each exists.

## Publishing to the website

This repository owns exactly one path on heroiclands.org — **`/thalorna`** — and
builds, renders and deploys the whole of it. Nothing else writes to that prefix,
and no other repository is in the path between these pages and their readers.

```sh
npm run build:site   # assets/content/ → site/content/ → build/site/thalorna/
npm run serve:site   # the same, then `hugo server` for a local preview
```

`site/` is the Hugo project: its configuration, this site's own home-page
layout, and the shared `heroiclands-hugo-theme` as a submodule (so clone with
`--recurse-submodules`, or run `git submodule update --init`). The pages
themselves are generated beneath it and are not committed.
`.github/workflows/deploy-site.yml` builds the site on every push that touches
the content or the build deriving it, and deploys it to this package's own
Cloudflare Pages project. That project and the routing that puts it at
`www.heroiclands.org/thalorna` are #1468; until its credentials are set here the
workflow builds and verifies the site, and skips the upload.

### The address is written down once

`baseURL` in [`site/hugo.toml`](site/hugo.toml) is the only place the site's
address appears. The content build reads it (`utils/site-config.mjs`) and spells
every href, redirect and link-manifest entry against it, so pointing that line at
another prefix — or at an origin of this package's own — moves the whole site
with one edit. Both cases are verified rather than assumed: the site rebuilds at
`https://thalorna.example.org/` and at `https://example.org/setting/thalorna/`
with all 28,201 internal links resolving.

That is what the arrangement is for. A successor inheriting this repository and
nothing else can publish Thalorna wherever they like, without inheriting the rest
of the project to do it.

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
