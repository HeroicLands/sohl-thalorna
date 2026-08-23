---
"sohl-thalorna": minor
---

**This repository now builds on the current shared toolchain.**
`@heroiclands/content-build` moves from `^0.8.0` to `^1.4.0` and
`@heroiclands/package-build` arrives at `^0.6.0`. A caret range on a `0.x`
package does not cross a minor, so the repository had sat still through nine of
them and every mechanism added since was absent (#50).

**The configuration is YAML data.** `content-build.config.mjs` becomes
`content-build.config.yaml`, and the three keys the loader derives —
`rootDir`, `foundryPackage` and `stats.systemVersion` — are no longer authored.
`compatibility` and `relationships` move out of the manifest template and to the
top level, verbatim and stale, so that this change is provably a change of
mechanism rather than of output.

_That fixes a stamp that had frozen._ Every compiled document recorded
`_stats.systemVersion: "0.6.0"`, a value transcribed by hand. A module derives it
from the `verified` version of the system it declares a relationship with, so it
is now `0.4.3` — what this module actually targets. Across all 1,886 compiled
documents that field is the **only** difference from the previous build.

**The manifest is generated.** `assets/templates/module.template.json` is
retired; its contents move into `packageBuild.manifest`, with `id`, `version`,
the four release addresses, `compatibility`, `relationships` and `packs`
derived. Twenty of the twenty-two keys are unchanged. The two that changed are
both corrections, and both close #8:

| Was                                                        | Now                                         |
| ---------------------------------------------------------- | ------------------------------------------- |
| `packs` declared `items, actors, journals, macros, scenes` | the two the build compiles                  |
| the items pack was declared at `packs/Items`               | `packs/items`, which is where it is written |

_The second was a live defect._ Foundry was told to load an items pack at a path
differing from the real one only in case, so on any case-sensitive filesystem —
that is, any Linux host — the module's main content, 630 documents, would not
load. The path derives from the pack name now, so the two cannot disagree.
Dropping the per-pack `ownership` block changes nothing: Foundry's own default
for the field is the value the template declared.

**Every npm script runs.** The eight that invoked files which had never existed
in this repository are commands now, closing #9:

| Script                               | Was                                                   | Now                                           |
| ------------------------------------ | ----------------------------------------------------- | --------------------------------------------- |
| `push:dev` / `push:qa` / `push:prod` | `utils/push-stage.mjs`                                | `package-build deploy <stage>`                |
| `build:pack-release`                 | `utils/pack-release.mjs`                              | `package-build release`                       |
| `clean` / `distclean`                | `utils/clean.mjs`                                     | `package-build clean [--distclean]`           |
| `build:assets`                       | `utils/copy-assets.mjs`                               | `package-build assets`                        |
| `build:system`                       | `utils/build-system-json.mjs`                         | `package-build manifest`                      |
| `build:link-manifest`                | `utils/build-link-manifest.mjs`                       | `content-build manifest`                      |
| `docs:*`                             | `utils/build-docs-entry.mjs` + absent typedoc configs | deleted — this repository ships no TypeScript |

`typedoc` and `typescript`, kept back in #18 precisely for this, go with the
`docs:*` scripts. `content-build manifest` was verified byte-identical to the
300-line script it replaces, across all 2,367 link-manifest entries.

**Label syncing is the org-wide Action.** `utils/sync-labels.mjs` and
`utils/check-labels.mjs` are deleted and `.github/workflows/labels-sync.yml`
calls `HeroicLands/.github/actions/labels`. The registry in `.github/labels.yml`
stays, because it is this repository's; only the machinery was shared. A pull
request touching the registry now reports what a sync would change without
writing it.

**Sixty-nine published addresses are redirected, not dropped.** The current slug
rule abbreviates a document's own address, so pages such as
`/thalorna/polity/kingdom-of-aldorath/` now publish at `polity/kgdm-of-aldorath/`.
Each previous address is recorded in `assets/legacy-urls.json`, which is what
emits the Hugo alias — and what keeps each page's CDN artwork name, since that
is derived from the earliest address a page was published at.

`npm run lint` checks addresses (`content-build lint`) rather than labels, which
required dropping two left-behind address aliases from `Collections/Beings.md`;
nothing referenced either.
