---
"sohl-thalorna": minor
---

**Thalorna derives its own website content.** This repository now builds the
`/thalorna` pages from the content tree it owns, instead of `heroiclands-site`
deriving them from the HeroicLands vault.

- `npm run build:site-content` turns `assets/content/` into a Hugo-ready tree
  under `build/site/content/`: a section directory per published type, a page per
  note, `dataview` tables expanded, and wikilinks resolved to site-local hrefs.
  It reuses the URL rule the link manifest already applies, so the manifest and
  the pages it names cannot disagree about where a page is.
- `assets/legacy-urls.json` records the URLs each page published at before, as
  append-only history. It becomes the page's Hugo `aliases` — so old links still
  land — and its `artwork` name, which is the filename the character and creature
  sidebars ask the CDN for. An authored (Obsidian) `aliases` is a list of _names_
  and is never published as a redirect.
- Twenty-eight `Heroes of Asguard` notes carried `sohl.items` twice, the second
  an empty list appended after `defaultCombatGroup`. YAML rejects the duplicate
  key, so every build that walks the content tree skipped those notes without
  failing — they were missing from the packs, the link manifest, and their own
  embedded items on the website. The spurious line is removed.

The output was verified page for page against the tree `heroiclands-site`
publishes today: 1,472 pages match, eight more are notes renamed or added since
that tree was last exported, and every wikilink that resolved before still
resolves.
