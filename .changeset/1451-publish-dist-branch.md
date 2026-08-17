---
"sohl-thalorna": minor
---

**Thalorna publishes its own path on the website.** This repository now builds
the `/thalorna` pages itself and publishes them to a `dist` branch, instead of
`heroiclands-site` deriving them from the HeroicLands vault. It publishes
markdown, not a website — nothing here runs Hugo, holds a theme, or deploys
anything, and nothing else writes to `/thalorna`.

- `npm run build:site-content` turns `assets/content/` into a Hugo-ready tree
  under `build/dist/content/`: a section directory per published type, a page per
  note, `dataview` tables expanded, and wikilinks resolved to site-local hrefs.
  It reuses the URL rule the link manifest already applies, so the manifest and
  the pages it names cannot disagree about where a page is.
- `.github/workflows/deploy-dist.yml` force-pushes that tree to the `dist` branch
  on every push to `main` that touches the content or the build deriving it, then
  asks `heroiclands-site` to rebuild. The dispatch skips cleanly while
  `SITE_DISPATCH_TOKEN` is unset, so this lands before the site can consume it.
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
