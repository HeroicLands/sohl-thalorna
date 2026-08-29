---
"sohl-thalorna": minor
---

**This repository moves to `@heroiclands/package-build@^5.0.0`, which refuses
the boolean `publish.site` this configuration declared.**

The 5.0.0 major turns `publish.site` from a boolean into a mode —
`homepage` or `content` — and **refuses** both booleans rather than mapping
them onto the nearest one (HeroicLands/package-build#55). `false` used to read
as _this package has no web presence_, which now describes no package at all:
every package publishes an authored homepage at `/<contentPackage>/`, so
`homepage` publishes that page and nothing else, and `content` publishes it plus
every page the content tree compiles to. This repository publishes a full
content site, so `site: true` becomes `site: content`.

_The break is total, not partial._ The value is read by `defineConfig`, so a
boolean fails at configuration load and every command that reads the
configuration dies with it — `lint:addresses`, `lint:content-links`,
`build:compiledb` and `build:link-manifest` alike. The site emitter resolves
`contentPackage()` at module scope, so `build:site-content` exits before writing
a page:

```text
package-build config: `publish.site` is no longer a boolean — write `site: content`. …
```

**No `site:` block accompanies it, and that was checked rather than assumed.**
`site.out` is optional in both modes — `normalizeSite(undefined)` returns an
empty block whose `out` is `""` — and it addresses `content-build site`, the
engine's own emitter. This repository does not run it. Pages here are written by
`utils/build-site-content.mjs` into `site/content`, resolved from
`site/hugo.toml`'s `baseURL` through `utils/site-config.mjs`, which is the one
place this site's address is written down. Declaring `site.out` would be inert
configuration naming a path nothing reads, so the key is documented at the
`publish.site` line instead of added.

**No code change was needed this time, which is the fact worth recording.**
Adopting 4.0.0 cost a port of the site emitter, because `assertNotePackage` had
been renamed and the named import failed to resolve — a link-time break that
killed `build:site-content` before it started (#86). All seven
`@heroiclands/package-build/engine/*` modules that emitter imports were checked
against 5.0.0 before the bump: `content-slug`, `content-tables`, `kb-manifest`,
`helpers`, `item-docs`, `content-package` and `note-package` all still export
every name it binds, and `engine/helpers.mjs` is byte-identical across the
major. The whole engine diff is four files — a new `homepage.mjs` and
`note-schemas.mjs`, and edits to `site-build.mjs`, `manifest-emit.mjs` and the
two indexes — none of which this repository's emitter reaches.

**The `type: homepage` note 5.0.0 adds is deliberately not adopted here.** It
compiles to no compendium document and publishes at the package root, which is
the page `site/layouts/index.html` assembles today from `hugo.toml`'s
`params.home` and a card per `.Site.Sections.ByTitle`. Replacing that with
authored markdown is the wrong shape: these landings carry structure a markdown
body holds badly, and the project's six package landings should render as
siblings rather than as six divergent hand-built pages. The hero, the
install-manifest block and the section cards belong in frontmatter rendered by a
layout in `@heroiclands/hugo-theme`, which does not exist yet — so the
frontmatter shape is undefined and anything authored now would be rewritten. The
root page is untouched by this change and renders exactly as before. The seven
section cards that publish a humanized directory name and no description —
Company, Concoctiongear, Mystery, Rules, Section, Skill and Weapongear, the
generated stub landings for a section no collection note claims — wait on the
same layout, where the card list becomes data rather than a template loop.

Everything else is unchanged and was checked, not assumed: `build:site-content`
writes the same 1,715 pages + 7 generated landings, byte-identical; the compiled
`build/packs-json` is byte-identical across all 2,555 files, with its 143 errors
(the sohl 0.8.2 pin, #6) reported line for line; `build:link-manifest` emits the
same 2,345 entries, byte-identical; the generated `module.json` is unchanged; the
deploy workflow's page-count guard still passes at 2,502 pages; and
`lint:markdown` (146, unchanged per rule — 120 MD001, 16 MD024, 10 MD056),
`lint:addresses` (2), `lint:content-links` (68) and `format:check` (clean, 1,771
files) report findings identical line for line.

(Closes #88.)
