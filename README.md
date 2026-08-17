# Thalorna Module for Song of Heroic Lands

This module provides the necessary items, actors, and assets needed to play in the Thalorna setting for Song of Heroic Lands

## Building

```sh
npm install
npm run build:compiledb      # assets/content/ → build/stage/packs/{items,journals}
npm run build:link-manifest  # assets/content/ → build/manifests/thalorna.json
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
