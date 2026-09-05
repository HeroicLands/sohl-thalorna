# sohl-thalorna

## 0.1.0

### Minor Changes

- 80140ba: **This repository moves to `@heroiclands/package-build@^11.0.0`, whose major
  makes a page's URL its address, makes the homepage an ordinary addressed note,
  and makes an address naming no note fail every build.**

  The declared range becomes `^11.0.0` and the lockfile resolves 11.0.0. That is
  the only entry the lockfile moves; nothing transitive changes. A caret does not
  cross a major, so Dependabot would never have offered it.

  **Three authored changes, and every one of them is the major's.**

  - **The homepage declares `shortcode: root`** (HeroicLands/package-build#182).
    `shortcode` moved from _refused_ to **required**: a homepage is addressed like
    every other note now, and without one it has no address at all. Both
    `content-build lint` and the site build refuse it, located at the `type:`
    value that makes it necessary.
  - **The site emitter follows the moved API** (#181, #182).
    `utils/build-site-content.mjs` binds `addressSlug(fm)` where it bound
    `contentSlug(name)`, and `homepageDestination(fm)` /
    `homepageFrontmatter(fm, { base })` where it bound the deleted
    `HOMEPAGE_DESTINATION`. This is a **link-time** break, not a silent one — the
    named import failed to resolve and `build:site-content` did not start.
  - **`utils/build-site-root.mjs` writes a `_redirects`** sending `/thalorna/` to
    `/thalorna/homepage-root/`, in both raw forms, with a pinned
    `Cache-Control: max-age=3600` in `_headers`. Cloudflare Pages sets no
    `Cache-Control` on a redirect it generates, and an unpinned 301 is cacheable
    indefinitely under RFC 9111 — a browser persists one to disk and stops asking,
    so a scheme that moved again would strand every returning reader on this
    package's most-linked URL. `HEADERS` splits into `NOINDEX_HEADERS` (host
    scoped) and `CACHE_HEADERS` (path scoped), and `build-site-root.test.mjs`
    gains four cases: it still asserts that exactly three rules are host-scoped
    and that none can match the canonical host, and now also asserts the redirect
    targets, that it cannot loop, and that both redirected paths carry the pin.

  **Every published page URL moves**, which is the major's headline and costs no
  content edit here: `/thalorna/affiliation/the-aerarium-imperii/` becomes
  `/thalorna/affiliation-aerarium/`. A page is still **filed** under its section —
  Hugo derives a section from the directory, not the URL, and that is what supplies
  the section landings — and now carries a front-matter `url:` publishing it at its
  address: `site/content/skill/skill-aelendlng.md` states
  `url: /thalorna/skill-aelendlng/`. 1,845 files are written.

  **The alias index is gone, and 24 findings go with it** (#180). `content-build
links` reported 146 findings at 10.0.0 (81 errors, 65 warnings) and reports 122
  at 11.0.0, every one an error. The delta is exact and was diffed by
  `file:line:column`:

  | class                                  | 10.0.0      | 11.0.0        |
  | -------------------------------------- | ----------- | ------------- |
  | alias claimed by two notes of one type | 24 errors   | **0** — gone  |
  | bare `[[Name]]` with no label          | 65 warnings | 65 errors     |
  | `"X"` piped but not an address         | 57 errors   | 57 errors     |
  | bare `[[#Anchor]]` in `Bethuan.md`     | 0           | 2 → **fixed** |

  The 24 were the price of folding every `name.full` into one namespace: two
  notes of one type could not share a display name. They cease to exist with no
  note renamed and no address moved. **`name.aliases` is untouched** — the field
  is retained, reserved, and read by nothing.

  **The two anchors are the one content edit, and they are the major's too.**
  `[[#slug|Text]]` still resolves; it is the **label** that is now required, and
  `Skills/Languages/Bethuan.md` carried two `[[#The Kheperi Superstrate]]` without
  one. Written as the self-address the rest of the tree already uses in 44 files,
  they improve the compiled journal: the enricher label was literally
  `{#The Kheperi Superstrate}`, stray `#` and all, and is now
  `{The Kheperi Superstrate}` against the same UUID.

  **202 `lint:addresses` findings clear, and none of them was ever real.**
  `content-build lint` reported 2,203 findings and reports 2,001. Every one of the
  202 was ``sohl.assocSkillCode` names skill "X", and no note or vendored manifest
declares it`, across 7 distinct shortcodes — and all 7 have a local `type: skill`
  note. They were false positives of the collision-aware index: `kentra` is
  claimed by a `lore` note and a `skill` note, and the lookup could not tell them
  apart. The pure `(type, shortcode)` index #181 leaves behind resolves them.
  The remaining 2,001 are pre-existing and unmoved, class for class.

  **The compiled packs change in exactly two ways, and both were diffed
  document by document.** 2,368 files at 10.0.0, 2,364 at 11.0.0:

  - **828 insertions across 16 documents**, every one a
    `<span class="sohl-draft-link" title="Draft — not yet written">` wrapper —
    the draft marking a resolvable-but-drafted address now renders with. Additive:
    no UUID, name, id or system value changed anywhere.
  - **Four documents are no longer compiled** — `The_Twilight_House` and
    `The_Merchant_Collective_of_Vedyara`, as an item and a journal each. Both
    carry a bare `[[Thieves' Guild of Vedyara]]`, which was a **warning** in the
    10.0.0 pack build and is an **error** in 11.0.0 (#184). No such note exists,
    so this is the content gap surfacing, not a compile regression.

  **What stays red, and why it is meant to.** `lint:content-links` fails with 122
  findings and the site build fails with the same 18 unresolved addresses it failed
  with at 10.0.0 — `doc-lnggsthlrn`, `doc-thlbestiary` and `doc-companies` name no
  note. These are addresses for notes nobody has written (#34, #44), and #184's
  whole point is that they are now stated as errors rather than tolerated. Closing
  them is content work, not part of this bump: nothing here weakens a rule,
  deletes a citation, or invents a note to satisfy an address.

  **The local site emitter is now further behind the engine, not closer** (#85).
  `utils/site-wikilinks.mjs` still reports `"broken type/shortcode"` where #184
  renamed every resolver's vocabulary to `unresolved`, still consults a
  `manifestsComplete` the engine's resolver now ignores, and still carries the
  `typeAlias` / `typeCollide` fallbacks — including a `name.aliases` reader —
  that #180 deleted. Only the API breaks are followed here; aligning the fork is
  that issue's.

  Everything else is unchanged and was measured, not assumed, on a clean run of
  each version: `lint:format` is clean, `lint:markdown` reports the same 146
  findings **line for line**, `build:link-manifest` exits 0 with the same 12
  findings line for line, the 2,001 surviving `lint:addresses` findings are
  line-for-line identical to the 10.0.0 set with the 202 removed, and
  `utils/*.test.mjs` passes 9 of 9.

  (Closes #121.)

- e13afb5: **Thalorna owns its content, and builds without the vault.** The 1,740
  `package: thalorna` notes are now source in `assets/content/`, and every surface
  is generated from them. `npm run build` works from a plain checkout: no sibling
  HeroicLands checkout, no `HEROICLANDS_VAULT`, and no committed pack JSON.

  - `assets/content/` holds the notes, laid out as the vault's `Setting/` tree was
    (plus `Types/`, from `Types/Thalorna/`), so the move is auditable file for
    file. `assets/content/README.md` documents that it is source, how to add a
    note, and how to write a cross-package link.
  - `utils/packs/export.mjs` and `utils/packs/clean-sources.mjs` are gone, with the
    `packs:export` / `packs:clean` / `packs:rebuild` scripts and the 1,264
    committed JSON files under `assets/packs/*/_source/`. The per-entry JSON is now
    a disposable intermediate under `build/packs-json/`.
  - The pack compiler is a straight vendored copy of the SoHL system repository's,
    rather than a fork that had quietly drifted 1,600 lines from it. The one
    behavioural difference is named in one file (`utils/packs/content-package.mjs`);
    the rest is documented in `utils/packs/README.md`.
  - `npm run build:link-manifest` emits `build/manifests/thalorna.json`, naming
    every page this package publishes by its `type/shortcode` address, so links
    from other packages resolve and can be checked.

  Both compendiums are unchanged in membership: the same 708 item documents and
  every one of the 556 journal documents the previous pipeline produced, plus 611
  new journal pages carrying item prose.

- bfb38dc: **Thalorna derives its own website content.** This repository now builds the
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

- 965ad86: **Thalorna builds and deploys its own website.** This repository now renders the
  whole of `/thalorna` and publishes it itself, rather than handing content to
  another repository to render. A checkout, the theme submodule, Node and Hugo are
  the entire build, and the deploy uses credentials scoped to this package's own
  hosting project — so a successor inheriting only this repository can still
  publish it.

  - `site/` is a Hugo project: its configuration, this site's own home-page
    layout, and the shared `heroiclands-hugo-theme` as a submodule. The pages are
    generated beneath it by `npm run build:site` and are not committed.
    `npm run serve:site` previews them.
  - `.github/workflows/deploy-site.yml` builds the site on every push touching the
    content or the build deriving it, checks that it carries a `404.html` and a
    complete tree, and deploys it to Cloudflare Pages. The hosting project and the
    routing that puts it at `www.heroiclands.org/thalorna` are separate work; until
    its credentials are set the workflow still builds and verifies, and skips the
    upload.

  **The site's address is written down once.** `baseURL` in `site/hugo.toml` is
  the only place it appears: the content build reads it and spells every href,
  redirect and link-manifest entry against it. Pointing that one line at another
  prefix, or at an origin of this package's own, moves the site — verified by
  rebuilding at `https://thalorna.example.org/` and
  `https://example.org/setting/thalorna/`, each with all 28,201 internal links
  resolving.

  **Two addresses no longer assume where this package lives.** A note linked
  `/thalorna/character/` and `/thalorna/creature/` by hand; both are now wikilinks
  to the collection notes that own those landings. And the content build, which
  previously wrote the manifest without a base, was left failing outright by the
  package-relative manifest change — it now supplies the base it publishes at.

  The published pages are unchanged: every page and every redirect the site
  publishes today is reproduced, page for page, plus the tag pages the content's
  own tag links point at.

- f2b9a80: **The pack compiler is now the shared `@heroiclands/content-build` package, and
  the vendored copy is gone.** `utils/packs/` — thirteen modules and its README —
  is deleted, along with `utils/content-slug.mjs`, `utils/content-tables.mjs` and
  `utils/kb-manifest.mjs`, which were copies of the same files. What remains is
  one `content-build.config.mjs` naming what is genuinely this repository's: the
  content package it compiles (`thalorna`), the Foundry package it ships
  (`sohl-thalorna`, a _module_), its `_stats` identity, its pack list, and its
  publishing switches.

  - `build:compiledb` / `build:unpackdb` run the package's `content-build` binary.
    `@foundryvtt/foundryvtt-cli` is no longer a direct dependency here; the
    toolchain brings its own, at 3.0.4 (1.x silently dropped Scene Levels).
  - The four deltas the vendored tree carried are gone as deltas: the content
    package and the Foundry module id are configuration, the module-manifest
    lookup is the toolchain's (it resolves either manifest kind), and the
    deliberately-uncompiled `actors` pack is simply absent from the pack list.
  - **Compiled item art now resolves into this module, not into the SoHL system.**
    A note's bare `img: icons/…` / `images/…` is rewritten to
    `modules/sohl-thalorna/assets/…`; the vendored copy hardcoded
    `systems/sohl/assets/…`, which was an unadapted line in the copy rather than a
    decision. All 94 distinct paths it produced are absent from the SoHL system —
    Thalorna's deity sigils and totem art are this module's to ship — so every one
    of those 444 items pointed at a file that does not exist. Nothing else about
    the compiled output changed: 1,431 of 1,875 emitted documents are byte-for-byte
    what they were, and the 444 differ in that single line.
  - The module manifest declares `compatibility.minimum: "14"`. It said `"12"`,
    which no longer described anything — the packs have always stamped
    `_stats.coreVersion: "14"`, and the toolchain reads that stamp from the
    manifest rather than repeating it.
  - 44 affiliation notes carried `relation: []`, Obsidian's rendering of an empty
    map, which the toolchain reads only as a map. They now say `relation: {}`, as
    55 of their siblings already did. Compiled output is unchanged.
  - Three region landing notes — Vylaría, Harad and Byzaría — carry no body at
    all, and the toolchain now refuses to ship packs generated with errors instead
    of warning and continuing. They are marked `draft: true`, which is what they
    are; the compiled packs are unaffected (they never compiled), and their three
    pages leave the website until they are written.

- d3f8e89: **One content type for actors: `character` and `creature` are now `being`.** Both
  already compiled to the same Foundry `being` and nothing in the toolchain branched
  on which name a note declared — but the type is also a wikilink qualifier and this
  site's URL segment, so the split meant two addresses for one kind of thing.

  All 644 actor notes move, along with the 262 `[[character-…]]` / `[[creature-…]]`
  wikilinks that address them and each note's own `type-shortcode` alias — the
  string that makes `[[type-shortcode]]` resolve in Obsidian.

  **387 published URLs move**, from `/thalorna/character/…` and
  `/thalorna/creature/…` to `/thalorna/being/…`. Every one of them redirects from
  the address it really had: the addresses were captured from a build of the tree
  as it stood, rather than re-derived, so the recorded history is what the site
  actually served.

  **CDN artwork is unaffected.** `artwork` is the name a portrait was uploaded
  under, taken from the earliest address on record — so the new rows are appended,
  never prepended, and the ten pages that already carried older history keep
  pointing at the same files.

  The two collection landings merge with their sections: `Characters` and
  `Creatures` become one `Beings` at `/thalorna/being/`, redirecting from both old
  landing addresses, keeping the journal id so the compiled document does not move,
  and carrying `doc-characters` and `doc-creatures2` as aliases so links written to
  either still resolve.

  **Beings still show their profile sidebar.** The site build gated its sidebar
  derivation — the flattened `skills` map, grouped `gear`, `spells` and `talents`
  the theme reads — on the retired type names, and the shared theme chose between a
  character and a creature partial the same way. Both now key on `being`
  (HeroicLands/heroiclands-hugo-theme#17).

  Requires `@heroiclands/content-build` 0.4.0 (HeroicLands/content-build#5), which
  retires the two names and reports a note or link left on either rather than
  quietly routing it to the items pack. That release also carries the lazy-config
  change, so `build-site-content` and `build-link-manifest` read `contentPackage()`
  and `foundryPackageId()` through the accessors that replaced the constants.

  Nothing in the compiled packs changes: this repository declares no `actors` pack,
  so its actor notes compiled to nothing before and after.

  (Closes #20.)

- 2d828f4: **This repository now builds on the current shared toolchain.**
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

- 45cd889: **This repository moves to `@heroiclands/package-build@^4.0.0`, and deletes the
  local `draft:` guard the major makes dead.**

  The 4.0.0 major carries two retirements, and this tree was already swept for
  both, so neither costs an authoring change here:

  - **`package:` is rejected outright** (HeroicLands/package-build#56, step 3).
    3.3.0 made the field optional and refused a _disagreeing_ one; 4.0.0 refuses
    the field's **presence**, because no value makes writing it correct and a field
    tolerated while it agrees grows back one note at a time. #76 swept all 1,716
    notes, so nothing here declares it.
  - **`draft:` is removed entirely** (HeroicLands/package-build#69). The field
    moved a note from _published_ to _unresolvable_ in silence: the compile loop,
    the link-manifest walk and the scenes pass all skipped it, while
    `content-links`, `site-index` and `content-lint` never read it — so a wikilink
    into a drafted note was indistinguishable from a link to a note that does not
    exist. #43 turned it into a `draft` tag here. The **tag** is untouched: 268
    notes carry it, the build ignores tags, and a `FROM #draft` query still finds
    them.

  **The dead guard.** `utils/build-site-content.mjs` still carried

  ```js
  // A draft is not published, and a link to an unpublished page is a dead link.
  if (fm.draft === true) continue;
  ```

  which is now unreachable — a note declaring `draft:` fails the pack build
  outright, so the site build can never be handed one. Left in place it is a lie
  about where enforcement lives: it reads as though the site emitter still has to
  defend against a drafted note, which tells its next reader that `draft:` is a
  field that still works.

  **The site emitter follows the renamed API.** `assertNotePackage` is gone;
  4.0.0 exports `assertNoDeclaredPackage`, which asserts the field's _absence_
  rather than answering which package a note belongs to, and returns nothing. The
  walk therefore takes its package from `CONTENT_PACKAGE` — the derivation it was
  already using for every consumer downstream — and calls the assertion for its
  refusal alone. This is a link-time break, not a silent one: the named import
  failed to resolve and `build:site-content` did not start.

  _One behaviour changes with it._ A note declaring `package: thalorna` — the
  configured value, which 3.3.0 accepted — is now refused by the site build too,
  with the position of the offending line:

  ```text
  assets/content/Reference/Terran_Analogs.md:2:1: error: `package: thalorna` is a retired frontmatter field — delete it. …
  ```

  **One thing moved in the compiled output, and it is not from the major.** The
  range was `^3.3.0` with 3.3.0 locked, so the bump crosses 3.4.0, which stopped
  emitting `assocMysteryCode` on a compiled mystical ability
  (HeroicLands/package-build#35). `MysticalAbilityDataModel` never declared the
  field, so Foundry discarded it when the document was constructed and the value
  was thrown away at load with nothing saying so. Recompiling removes exactly
  those lines and touches nothing else: **222 occurrences across 222 documents**
  — 221 items and one embedded on an actor — no document added, removed or
  otherwise changed. That is the first of the four dead fields #54 enumerates, and
  the one it calls the costly one; `affiliation.relation`,
  `mystery.skillAptitudes` and `isEquipped` remain.

  Everything else is unchanged and was checked, not assumed:
  `build:site-content` writes the same 1,715 pages + 7 generated landings,
  byte-identical; `build:link-manifest` emits the same 2,345 entries,
  byte-identical; and `lint:markdown` (146), `lint:addresses` (2),
  `lint:content-links` (68) and the pack-JSON compile (143, the sohl 0.8.2 pin)
  report findings identical line for line.

  (Closes #86.)

- 161bbf7: **This repository moves to `@heroiclands/package-build@^5.0.0`, which refuses
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

- 9ed27c3: **This repository moves to `@heroiclands/package-build@^6.0.0`, which stops
  emitting `isEquipped` on compiled gear and reports that the `actors` pack was
  outside the `Thalorna` folder.**

  The declared range becomes `^6.0.0` and the lockfile resolves 6.0.0. That is the
  only entry the lockfile moves; nothing transitive changes. A caret does not cross
  a major, so Dependabot would never have offered it.

  **`isEquipped` is gone from what this build compiles — and mostly still present
  in what it inherits.** The pack builder emitted `system.isEquipped: false` on
  every gear item, and no SoHL data model has declared that field since worn and
  equipped became armour-only (HeroicLands/package-build#68). `build/packs-json`
  was compiled at 5.0.0 and at 6.0.0 from the same tree and compared
  **key-ordered** — every leaf flattened to an ordered `path=value` sequence and
  the sequences compared, rather than by deep equality — so ordering is proven
  preserved rather than assumed:

  |                                             | Before (5.0.0) | After (6.0.0)                    |
  | ------------------------------------------- | -------------- | -------------------------------- |
  | Files                                       | 2,555          | 2,555 — none added, none removed |
  | Leaf keys                                   | 922,278        | 922,181                          |
  | Keys removed                                | —              | **97**, every value `false`      |
  | Keys added                                  | —              | **0**                            |
  | Values changed                              | —              | **0**                            |
  | Documents whose surviving-key order changed | —              | **0**                            |

  Every one of the 97 is an `isEquipped`: 96 at `system.isEquipped` in the `items`
  pack, and one at `items[].system.isEquipped` on the Talwar carried by _Eshe wa
  Magara_ — an item this repository authors.

  _**2,018 `isEquipped` keys went into the compile and 1,921 are still there, and
  that is not a failed fix.**_ This package's beings resolve their embedded items
  against the pinned `sohl@0.8.2` release packs through `itemCatalog`, and those
  documents were compiled by an older package-build and are copied through
  verbatim. Of the 189 distinct `(type, shortcode)` items still carrying the key
  after the bump, 188 are in the cached `sohl@0.8.2` catalogue by that exact
  address, and the 189th — `armorgear:WSplSkirt` on _Elyse Skyrn_ — is the
  catalogue's `WSkirt` with its shortcode overridden in frontmatter. Not one is
  authored here. **They will clear when `sohl` cuts a release built with 6.0.0 and
  `relationships.systems[].compatibility.verified` is bumped to it**, and not
  before, so a grep for `isEquipped` in `build/packs-json` after this change still
  returns 1,921 hits by design.

  **The `actors` pack now sits inside the `Thalorna` folder (#95).**
  `packFolders` is compared against the packs a package ships
  (HeroicLands/package-build#81), and of the six HeroicLands packages this is the
  only one it reported:

  ```text
  package-build.config.yaml:100:13: warning: packFolders: pack "actors" is named by no folder,
    so it ships outside every folder this package declares                            (exit 0)
  ```

  That is an omission rather than an arrangement, and the history says so. The
  folder was written naming `items` and `journals` under a comment reading "names
  only the packs this build compiles", which was true then; #69 turned the actors
  pack on and re-added it to `packs:` without extending the folder, and nothing
  compared the two until now. So `actors` joins the folder, everything this package
  ships appears together in the compendium sidebar, and the config comment states
  the rule that keeps them in step. The generated `module.json` is otherwise
  unchanged — 22 keys, 3 packs, one folder — and the warning is gone.

  Because a clean run prints nothing, the check was confirmed to actually fire
  rather than merely be silent, by a throwaway edit to the config, reverted:

  ```text
  package-build.config.yaml:106:21: error: packFolders: folder "Thalorna" names pack
    "nosuchpack", which this package does not ship (packs: items, journals, actors)   (exit 1)
  ```

  Both severities behave as documented: an unresolvable name is fatal and no
  manifest is written; an ungrouped pack warns and the build continues.

  **"Order is load-bearing" is no longer true, and the one place that said so is
  corrected.** Compile order is derived from what each pass reads
  (HeroicLands/package-build#73), so the declared order of `packs:` stops
  mattering. The claim appears exactly once in this repository, in the comment
  above `packs:`; the dependency it describes is still real, and what changed is
  that the toolchain enforces it rather than the list. Proven by declaring
  `actors` first in a throwaway edit, reverted: the build logged

  ```text
  Pass order: items, actors, journals — a pass that reads another's output compiles after it,
  whatever order `packs:` declares.
  ```

  and emitted `build/packs-json` byte-identical to the declared order, with the
  same 143 pre-existing errors. The adjacent claim in the same comment — that a
  cold catalogue cache "fails saying so" — was re-checked and still holds:

  ```text
  [ERROR]: sohl declares `itemCatalog: true` but has not been fetched.
           Run `content-build deps fetch` first.
  ```

  **The homepage's own links are checked now** (HeroicLands/package-build#54), and
  `assets/content/homepage.md` passes. This one needed forcing too, because the
  page carries no addresses at all — its body is empty and its `landing:` is
  `cards: {source: sections}` — so passing proves nothing on its own. Two throwaway
  edits, reverted, confirmed both halves of the rule reach this file:

  ```text
  assets/content/homepage.md:39:3: error: body: wikilink [[doc-nosuchnote|dead wikilink]] on the
    package homepage — a homepage is published verbatim in every publishing mode, so nothing
    resolves it; write a markdown link, package-relative
  assets/content/homepage.md:36:12: error: landing.cards[0].url: url "/thalorna/Regions/" is
    root-relative, but a landing's url: is resolved against the site — write "Regions/", or
    href: for an address that is already resolved
  ```

  **The TypeDoc symbol map (HeroicLands/package-build#75) cannot reach this
  repository**, and that was checked rather than assumed: it lives in
  `sohl/kb-passes.mjs`, read only by `content-build site` from
  `site.passOptions.symbolMap`. This repository runs neither — it declares no
  `site:` block, and its pages are written by `utils/build-site-content.mjs`.

  **The local site emitter was checked against the major before the bump.** Of the
  nine `@heroiclands/package-build/engine/*` modules `utils/build-site-content.mjs`
  and `utils/site-wikilinks.mjs` import, seven are byte-identical across the major
  and the two that changed — `homepage.mjs` and `pack-config.mjs` — changed by
  addition only: `homepageAddresses` / `HOMEPAGE_ADDRESS_KEYS` and
  `packConfigPath`, none of which this repository binds. Every name the two
  emitters import still resolves. The engine's own homepage writer in
  `site-build.mjs` changed by comment alone, so both emitters still publish the
  homepage verbatim, exactly as they did at 5.0.0.

  Everything else is unchanged and was measured, not assumed, on a clean build of
  each version: the compiled `build/packs-json` differs only in the 97 keys above,
  with its 143 pre-existing errors (the `sohl` 0.8.2 pin, #6) reported line for
  line; `build:link-manifest` emits the same 2,345 entries, byte-identical;
  `build:site-content` writes the same 1,721 files; the rendered site is
  byte-identical across all 2,510 files, 2,502 of them pages, the two live landings
  included; the build stage is byte-identical; and `lint:format` (clean, 1,775
  files), `lint:markdown` (146), `lint:addresses` (2) and `lint:content-links` (68)
  report findings identical line for line.

- 7b581bd: **Every build now emits this package's content index.** `build:db` gains
  `build:content-index`, so `build/content-index/thalorna.jsonl` is produced
  whenever the content is built rather than whenever someone remembers to run the
  command by hand.

  Nothing generated it before — in this repository or any other — so the artifact
  existed only where a person had run `content-build content-index` themselves,
  and was as fresh as the last time they did. The editor tooling reads it, and
  compiled JournalEntry links resolve through it, so "as fresh as someone
  remembered" is not a state it can be in.

  1,854 notes, and the file lands under `build/`, which is gitignored.

- fb85cee: **This repository moves to `@heroiclands/package-build@^16.0.0`, whose major
  refuses two embedded items on one actor sharing `(type, shortcode)`.**

  The declared range becomes `^16.0.0` and the lockfile resolves 16.0.0. That is
  the only entry the lockfile moves; nothing transitive changes. A caret does not
  cross a major, so Dependabot would never have offered it.

  `(type, shortcode)` is a logical identity — two documents of one type bearing
  one shortcode denote _the same entity_ — and it is unique within an actor's own
  items. Nothing checked it before: the compiler resolves each entry
  independently and distinguishes the two only when seeding `_id`, so a collision
  compiled to two documents with distinct ids and shipped unremarked.

  This tree carries **18 such collisions across 15 actors**, so
  `lint:addresses` gains 18 findings — 1,983 to 2,001. Every one is pre-existing
  content, now visible. Four are gear an author clearly meant to duplicate and
  never gave distinct keys — `Skathilda Fródban`'s `Dagger 1` and `Dagger 2` are
  the textbook case, needing `system.shortcode: Dgr1`/`Dgr2` — and the rest are
  repeated skills, mostly `skill:script` two and three times over with identical
  values.

  The major also drops `contentAddress` in favour of `packageAddress` and
  publishes a content index; neither is imported here.

- be2c5dd: **This repository moves to `@heroiclands/package-build@^17.2.0`**, the version
  whose content-index records carry a `foundry` block.

  Each record gains the UUID and anchor map the link manifest holds, and an item
  note emits a second record for its documentation journal — a document in its own
  right, with its own canonical address, so it is addressable by the same lookup
  as anything else rather than nested inside the item's record.

  `build/content-index/thalorna.jsonl` is already emitted on every build; this is
  what makes it carry Foundry addresses as well as content.

  Verified: 2,588 records — 1,854 notes and 734 documentation records.

- d54024b: **This repository moves to `@heroiclands/package-build@^17.0.0`, whose major
  implements the content format the package publishes.**

  The declared range becomes `^17.0.0` and the lockfile resolves it; nothing
  transitive moves.

  `lint:addresses` goes from **2,001 findings to 20**, and none of the 1,981 was
  a content defect. `docs/content-format.md` and the linter had drifted in both
  directions, and this tree authors more of the format than any other, so it
  carried nearly all of the consequence:

  - `place`, `lore` and `scenario` reached no schema, so each of those 450 notes
    was reported as having no schema **and then skipped entirely** — its `data:`,
    `subType`, references and system block all went unexamined.
  - `lore`, `epithet` and `symbol` reached no vocabulary, so 1,531 notes that
    followed the specification exactly were told their property did not exist,
    and the value was dropped from the closed `data:` container rather than
    reaching the page.

  The 20 that remain are real: 18 embedded shortcode collisions (#144 fixes the
  four gear ones) and two stale keys on one note, `birthsign` and
  `bodyStructure` (#141).

### Patch Changes

- 5e0f16c: **Section landings are `README.md` notes now, the twelve index pages that landed
  nowhere publish again, and six landing tables that rendered empty list their
  sections.** `publish.address.landing` moves from
  `collection` to `readme`, retiring this package's use of the second landing
  mechanism ahead of package-build deleting `section:`, the `collection` landing
  rule and the `collection` subType from the content format. A landing is a
  directory's `README.md` declaring `type: doc` and the `subType` that **is** its
  section, so `Characters/README.md` (`subType: being`) lands `/thalorna/being/`
  where `Collections/Beings.md` (`subType: collection`, `section: being`) did.

  **Six of the eighteen collection notes were landings; twelve were not** (#118).
  A section can be landed once, and Settlements, Locations, Regions, Continents
  and Worlds are all views over `place`, Polities and Companies over
  `affiliation`, Peoples over `lore` — so no value of `section:` could ever have
  made them addressable, and none of them declared one. They were not "falling
  back to a slug": `landingOf` read `fm.slug`, which no note in this tree carries,
  so each was reported _"collection note declares no `section`, so it lands
  nowhere"_ and published no page at all. The site build failed on the eighteen
  wikilinks that cited three of them.

  They are index pages, not front doors, so they declare `subType: reference` and
  address flat as `doc-<shortcode>` like any other page. That gives all twelve an
  address for the first time and resolves those eighteen links, which now point at
  real pages. The eight filed under `Collections/` move to the directory whose
  section they index — `Affiliations/`, `Lore/`, `Regions/` — and `Collections/`
  is gone.

  **No published address moves.** The link manifest gains exactly the twelve
  entries and loses none; every one of the 2,573 existing entries keeps its path,
  including all six landings (`being/`, `affiliation/`, `lore/`,
  `mysticalability/`, `reference/`, `scenario/`). The recorded URL history is
  untouched, so `/thalorna/character/` and `/thalorna/creature/` still redirect to
  the Beings landing; `/thalorna/section/companies/` and `/thalorna/section/`,
  dead while Companies published nothing, answer again.

  **Six landing tables rendered empty, and now do not.** Three retired
  vocabularies had left 42 Dataview clauses matching nothing, on pages that looked
  plausible because a table with only a header row is indistinguishable from a
  section that is genuinely empty:

  | Retired thing                                            | Clauses | Notes on the old path/value | Notes on the new one              |
  | -------------------------------------------------------- | ------- | --------------------------- | --------------------------------- |
  | `sohl.subType` → top-level `subType`                     | 28      | 0                           | 1180                              |
  | affiliation subTypes `divine`/`arcane`/`spirit`/`social` | 4       | 0                           | 204 across the 11 declared values |
  | `type: creature` / `type: character` → `being`           | 10      | 0                           | 646                               |

  Rendered rows, before → after: Affiliations 0 → 204, Mystical Abilities 0 → 221,
  Hex Hodai Incantations 0 → 202, Thalorna Bestiary 0 → 141, Heroes and Knaves
  0 → 193, Heroes of Asguard 0 → 28. The affiliation clauses partition the section
  exactly — 103 + 9 + 45 + 47 = 204, plus the 91 polities the `Polities` index
  lists = all 295 affiliation notes, none orphaned. Only the retired token changed
  in each clause; no column, `SORT` or other condition was touched. The
  `package = "thalorna"` clauses are left alone: `searchableFrontmatter`
  synthesises the field, so they match everything and were never the cause.

  **`build/packs-json` differs in six documents**, all of them tables that were
  empty and now list their section — `References` (the twelve reference pages),
  `Affiliations`, `Mystical_Abilities`, `Thalorna_Bestiary`, `Heroes_and_Knaves`
  and `Heroes_of_Asguard`. `Hex_Hodai_Incantations` is fixed on the site but
  absent here, because no configured pack claims a `type: lore` note — pre-existing
  and unrelated. No document is added, removed, renamed or refoldered: 717 items,
  719 journals and 642 actors before and after, ids and `folder:` unchanged by the
  file moves.

  The site emitter is a local fork of the engine's (#85), so it carries the same
  flip: a landing is a `README.md` and its segment is `sectionOf(fm)`. Only that
  rule changed there; aligning the fork wholesale is still #85's.

  `content-build links` reports the same 122 problems as `main` (65 unlabelled
  wikilinks, 57 non-addresses) and `content-build markdown` the same 146, both
  pre-existing. `content-build lint` drops from 2,001 findings to 1,988: the
  eighteen `subType: collection` rejections become five READMEs whose subType is a
  section rather than a `doc` genre. That is package-build#197, whose fix merged
  as #198; the case this package hits — no `site:` block, so `scenario`,
  `affiliation`, `being`, `lore` and `mysticalability` are still refused — is the
  follow-up now in flight, and 5 becomes 0 when it lands.

- ad53d6a: **Give the fifteen K'ich'chik polities their names back (#129).**

  Each of the fifteen authored `title: ""` while carrying its real name only in
  `name.full`, so each published as an empty anchor and the fifteen sorted to the
  front of `/thalorna/affiliation/`, above every named entry. The pages were
  always wrong; declaring `listType` in #128 only made the section landing display
  them.

  The site emitter builds a page's title as `fm.title ?? name`. `??` is nullish
  coalescing, so an authored `""` is a value and wins, while an **absent** `title`
  falls through to `name` — which is `fm.name?.full` for a content page. Removing
  the key is therefore the whole fix, and it keeps the name in one place rather
  than copying it into a second one to be kept correct.

  The key is removed rather than set to `null` because on an `affiliation` note
  `title` is not only the page title: it is also a declared item field — _the
  style of address the office carries_, a string defaulting to `""` — and the
  compiler reads it from the note's top level. Absent, it compiles to that
  default and `build/packs-json` is byte-identical; written as `null` it compiles
  to the literal string `"null"`. The compendium documents, the published link
  manifest, and all 2,125 rendered page addresses are unchanged.

- 7010c2a: **Publish every content page at the address the link manifest advertises (#130).**

  `site.base` was absent, which meant `/<contentPackage>/`, and the site emitter
  writes that value into each page's Hugo `url:` front matter. Hugo reads `url` as
  site-root-relative, and this site's root already _is_ `/thalorna/` —
  `site/hugo.toml` sets `baseURL` to `https://www.heroiclands.org/thalorna/` and
  `publishDir` to `../build/site/thalorna`, which the deployment serves at
  `/thalorna/`. The prefix was therefore written twice, and all 1,852 content
  pages plus the package homepage published at `/thalorna/thalorna/<address>/`
  while every link addressing them said `/thalorna/<address>/`.

  Setting `site.base: "/"` leaves the prefix to Hugo alone. Every content page,
  the homepage, `sitemap.xml`, the section-landing listings and every inbound
  cross-package link now resolve; the 2,585 entries the published link manifest
  carries all name a page that exists.

  The eleven section landings were never affected and are unchanged — they take
  their address from their path rather than from front matter, which is why the
  site's own navigation worked while every address anyone else held was dead.

- 8b5121d: Say "no art authored" as `img: null` in the forty-five notes that said `""`.

  `resolveImg` tests its raw argument for falsiness — `if (!raw) return ""` — and
  every caller applies its own default to that result
  (`resolveImg(fm.img) || itemArt(type)`). So `""`, `null` and an absent key are
  indistinguishable today, and all three land on the type's default art. These
  forty-five notes were authored under that reading.

  They are about to stop meaning the same thing. `title` and `img` are moving to the
  convention the project already holds for an optional "not specified" string —
  `nullable, initial: null`, so "unset" is one honest value rather than two — under
  which **`null` falls back and `""` is a deliberate blank**. Left as they are, these
  notes would quietly stop asking for their default art: nineteen `affiliation`
  items, which today compile with `systems/sohl/assets/icons/noun/shield.svg`, would
  ship iconless, with no error and no warning, because a blank `img` is a legal
  document field. So the corpus moves first, while the two spellings still mean the
  same thing and the sweep can be proven inert.

  **Nothing here wants a deliberate blank**, and the corpus says so rather than the
  author. Of the forty-six `place/region` notes, twenty omit `img:` and twenty-six
  write `""`; of the 295 `affiliation` notes, 202 omit it, seventy-four give a path,
  and nineteen write `""`. No note of either type ships blank art on purpose — `""`
  and absent are used interchangeably for "none authored yet".

  The other twenty-six are `place` notes, which compile into journals, and the
  journal builder never reads `img` at all. They are inert whichever spelling they
  carry, but they are the same authoring mistake and are swept with the rest rather
  than left as a second reading of the field.

  **Verified inert on the current toolchain.** Compiled packs (2,364 files) are
  byte-identical before and after, and so is the rendered site HTML — `img` reaches
  the site only as pass-through Hugo front matter, and the one layout that reads it
  (`partials/infobox/affiliation.html`) guards with `with`, which declines `''` and
  `nil` alike. Lint is unmoved, line for line: 1,983 address findings across 1,852
  notes, 122 link problems, 146 markdown findings, formatting clean.

  **Merge before** the `package-build` change that makes `""` meaningful. Reversing
  the order is what these notes would have been the regression of.

- 4e27687: **Link same-package pages at the address they are served from (#135).**

  Every wikilink rendered into a page body pointed one path segment too shallow —
  `href=/affiliation-ordoarcanis/` for a page served at
  `/thalorna/affiliation-ordoarcanis/` — so 8,814 links across 1,662 distinct
  targets 404'd. Section landings and every cross-package inbound link were
  unaffected, so the site's own navigation worked while the prose was dead end to
  end.

  The emitter wrote `site.base` into two quantities that need opposite framings:
  Hugo's `url:` front matter, which Hugo already resolves under `baseURL`
  (`.../thalorna/`), and the `href`s and manifest base, which are site-absolute and
  must carry the prefix themselves. No single value was right for both — absent
  (`/thalorna/`) published every page at `/thalorna/thalorna/<address>/` (#130), and
  the `site.base: "/"` stopgap bought the addresses back at the cost of the body
  links.

  `@heroiclands/package-build` 15.0.0 stops writing `base` into `url:`
  (package-build#217, #219), so the default is right for both halves; taking it and
  deleting the stopgap is one change. `publish.address.prefix: ""` is untouched. All
  2,125 rendered pages keep their address, all 2,585 link-manifest entries still
  name a page that exists, and no `/thalorna/thalorna/` directory is produced. The
  39 site-absolute links still unresolved in this tree are the ones it does not
  build: 35 into `/sohl/`, at two retired section-style addresses this tree still
  cites, and four `/thalorna/tags/` links Hugo emits no page for.

  The release's other two majors are inert here. `resolveImg` now distinguishes an
  unset art path from a deliberately blank one (package-build#218, #221) — #134
  already swept the forty-five `img: ""` notes to `null`, and none is left. And a
  note's own `title` no longer fills an `affiliation` item's `system.title`
  (package-build#218, #222) — the fifteen affiliation notes that declare a top-level
  `title` all declare it empty, which fed the field an empty string under the old
  rule and takes the same empty default under the new one. Those fifteen blank
  headings remain #129's, untouched here.

- aafb260: **Address 13 piped wikilinks that cited a display name or a filename (#137).**

  Fifty-seven link findings were piped links — the `|` says an address was meant —
  whose left side was a note's old filename or its display text rather than its
  `type-shortcode` address. Thirteen of them resolved mechanically to a note that
  already exists: `Sebeq_Sut`, `Kenbet_Pat` and `Magnapolis_Grand_Orrery` name a
  note's file directly; `Magnapolis_Inner_City`, `Magnum_Collegium_Haradicum`,
  `Sinalo` and `Dunhara_Tribes_Region` carry a label the tree already addresses
  exactly one way; and the campaign's `Part 1` heading is the one of three that
  was never converted. Label text is unchanged in every case.

  Three notes — _The Aerarium Imperii_, _The Delta Nomes_ and _The Nome of
  Per-Ankhet_ — carried no other bad link, so they now compile into the
  affiliation and journal packs instead of being dropped. The remaining 44
  findings name notes that do not exist, or are ambiguous between several, and are
  reported on the issue rather than guessed at.

- 4af9093: **This module now carries the same dual license as the system, and says so.** The
  repository's `LICENSE` stated Keléstia Productions' Hârn fan-material terms —
  copied from `sohl-kethira-basic`, where they are correct, and wrong here.
  Thalorna is original content and is licensed exactly as Song of Heroic Lands is:
  **GPL-3.0-or-later** for code, **CC-BY-SA-4.0** for documentation and creative
  content.

  The layout matches the system repository's, so the two read identically:
  `LICENSE.md` explains the split and reserves the Heroic Lands marks, `src/LICENSE`
  carries the GPL text, and `assets/LICENSE` carries the CC-BY-SA text. All three
  ship in the built module, at the paths `LICENSE.md` points at, and the module
  manifest's `license` field names `LICENSE.md` rather than the deleted `LICENSE`.

  `package.json` declares `GPL-3.0-or-later AND CC-BY-SA-4.0`, replacing a bare
  `CC-BY-SA-4.0` that covered only half of what the repository holds.

- 848a6b5: **Drop 23 devDependencies this repository never loads, taking 737 packages out of the tree.**

  The `devDependencies` block was copied from the system repository when this one
  was scaffolded, and most of the toolchain it describes was never wired up here.
  Every entry still gets resolved, audited and bumped, so each one costs a
  Dependabot pull request, a review and a CI cycle for tooling nobody runs — two
  such pull requests were open against `@babel/preset-env` and
  `@vitest/coverage-v8` when this was written, neither package being reachable
  from any tracked file.

  The whole of this repository's tracked code imports four bare specifiers —
  `@heroiclands/content-build`, `@rollup/plugin-terser`, `vite` and `yaml` — plus
  Node builtins. Everything removed below is referenced by no source file, no
  configuration file, no workflow and no `scripts` entry:

  | Cluster        | Removed                                                                                                | Why it was never used                                                                                       |
  | -------------- | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
  | Test stack     | `vitest`, `@vitest/coverage-v8`, `@vitest/ui`, `cypress`                                               | No test script, no vitest or cypress config, no test files                                                  |
  | Docs plugins   | `typedoc-github-theme`, `typedoc-plugin-markdown`, `documentation`                                     | No typedoc config file exists for either plugin to be named in                                              |
  | Transpilation  | `@babel/preset-env`                                                                                    | No babel config and no browserslist; `vite` targets es2020 directly                                         |
  | TypeScript     | `@types/file-saver`, `@types/json-schema`                                                              | This repository ships no `.ts` file and has no `tsconfig.json`                                              |
  | Styling        | `sass`                                                                                                 | No `.scss` source; `styles/sohl-thalorna.css` is copied verbatim                                            |
  | Build helpers  | `archiver`, `@octokit/rest`, `vite-plugin-banner`, `madge`                                             | The banner is written inline in `vite.config.mjs`; the rest belong to scripts whose files do not exist (#9) |
  | Misc utilities | `dotenv`, `glob`, `handlebars`, `ix`, `loglevel`, `loglevel-plugin-prefix`, `markdown-it`, `unidecode` | Imported nowhere; `utils/sync-labels.mjs` reads `process.env` directly, without `dotenv`                    |

  Ten entries stay, each demonstrably reachable: `@heroiclands/content-build`,
  `@rollup/plugin-terser`, `vite` and `yaml` are imported; `@changesets/cli`,
  `npm-run-all` and `prettier` back `scripts` entries; and
  `@heroiclands/hugo-theme` is consumed by Hugo through
  `themesDir = "../node_modules/@heroiclands"` in `site/hugo.toml` — a reference
  no dependency checker sees, and one that only the site build proves.

  `typedoc` and `typescript` are also kept, deliberately. The `docs:*` scripts do
  name the `typedoc` binary, so removing it would turn today's missing-config
  failure into a missing-command one. Those scripts cannot run regardless — every
  file they invoke is absent — and whether they get implemented or deleted is #9's
  decision to make; the two packages should go with it.

  The lockfile drops from 1125 entries to 388. `npm ci`, `npm run build:noci` and
  `npm run build:site` are green, and the built module is byte-for-byte what it
  was.

  (Closes #18.)

- 6a4f57a: **The six section landings are ordinary notes now, addressed `doc-<type>` like
  every other page.** A page that introduces the notes of a type is a note named
  by convention — `type: doc`, `subType: reference`, `shortcode: <type>` — and is
  reached by a link, not by owning a URL mount. This is step 1 of
  HeroicLands/package-build#204, done here first: package-build still requires a
  landing's frontmatter to be a `README.md` declaring a `subType` that _is_ a
  section, so the content has to stop depending on that before the engine drops
  `README` landings, the `section:` key, `publish.address.landing`,
  `writeSectionLandings`, `_index.md` synthesis and `sectionOf`.

  | Old note                       | New note                                   | Old address        | New address            |
  | ------------------------------ | ------------------------------------------ | ------------------ | ---------------------- |
  | `Adventures/README.md`         | `Adventures/Adventures.md`                 | `scenario/`        | `doc-scenario/`        |
  | `Affiliations/README.md`       | `Affiliations/Affiliations.md`             | `affiliation/`     | `doc-affiliation/`     |
  | `Characters/README.md`         | `Characters/Beings.md`                     | `being/`           | `doc-being/`           |
  | `Lore/README.md`               | `Lore/Lore.md`                             | `lore/`            | `doc-lore/`            |
  | `Mystical_Abilities/README.md` | `Mystical_Abilities/Mystical_Abilities.md` | `mysticalability/` | `doc-mysticalability/` |
  | `Reference/README.md`          | `Reference/References.md`                  | `reference/`       | `doc-reference/`       |

  **Six previously stable addresses move.** #118 was explicit that no published
  address changed — each landing kept the exact URL its collection note had. This
  change moves all six, deliberately: a landing that is addressed by a section is
  the thing being retired, and an address is `(type, shortcode)` or it is not an
  address. `/thalorna/affiliation/`, `/thalorna/being/`, `/thalorna/lore/`,
  `/thalorna/mysticalability/`, `/thalorna/reference/` and `/thalorna/scenario/`
  each stop serving the authored page and begin serving Hugo's generated listing
  of that section — five of the eleven sections were already such a stub, so the
  shape is not new. No redirect is recorded: nothing is added to
  `assets/legacy-urls.json`.

  **Each shortcode is the type the page introduces**, which is the convention the
  issue settles: `scenario`, `affiliation`, `being`, `lore`, `mysticalability`,
  `reference`. Only `lore` was already spelled that way; the other five were
  abbreviations of a display name (`adventures`, `affiliatns`, `beings`,
  `mystclblts2`, `references`) — the derivation #181 took out of the addressing
  path. All six are `^[A-Za-z0-9]+$`, so `doc-affiliation` parses on the hyphen
  the way every other address does, and none collides with the fifteen `doc`
  shortcodes already in the tree.

  **One inbound citation was repointed**: `Lore/Thalorna.md` cites the beings
  catalogue twice, `[[doc-beings|…]]` → `[[doc-being|…]]`. No other note, and no
  note in `sohl` or `sohl-kethira-basic`, names any of the six.

  **`assets/legacy-urls.json` gains nothing and loses nothing.** Two existing keys
  follow their notes' shortcodes — `doc:affiliatns` → `doc:affiliation` and
  `doc:beings` → `doc:being` — because the file is keyed `type:shortcode`, and
  leaving the old spellings would silently strand six historical redirects
  (`/thalorna/arcane-domain/`, `/thalorna/faith/`, `/thalorna/organization/`,
  `/thalorna/pantheon/`, `/thalorna/character/`, `/thalorna/creature/`) and change
  both pages' `artwork` name. The recorded URLs themselves are untouched, and the
  site publishes the same 446 aliases as before.

  **The link manifest keeps all 2,585 entries.** Five keys are re-spelled and one
  path moves (`thalorna-doc-lore`); every `uuid` and `$lead` anchor is unchanged,
  so nothing that resolves through Foundry moves at all. The vendored copy in the
  system repository (`assets/manifests/thalorna.json`) is a snapshot and needs
  refreshing there.

  **`build/packs-json` differs in one document.** `References` lists five more
  rows — Adventures, Affiliations, Beings, Lore and Mystical Abilities are `doc`
  notes of `subType: reference` now, so its own query finds them. Counts are
  identical either side: 849 items, 822 journals, 693 actors, ids, folders and
  page ids unchanged, and `content-build package compile` reports the same 620
  errors as `main` (sohl 0.8.2 predates ~100 addresses these beings name).

  **The site emitter is a local fork of the engine's (#85) and needed no change.**
  Its README-landing branch is simply never taken now; the six notes route through
  the ordinary path and the stub generator covers all eleven sections instead of
  five. Aligning the fork wholesale — and the double `/thalorna/` prefix every
  `url:`-bearing page is published under, which predates this change and affects
  all 1,851 of them — is still #85's.

  **Rendered rows are unchanged where the query is**: Affiliations 204, Beings
  646, Mystical Abilities 221, Lore 180, Adventures 20. References goes 16 → 21,
  which is the five pages above joining the genre they now declare.

  `content-build links` reports the same 122 problems as `main`, line for line (65
  unlabelled wikilinks, 57 non-addresses), and `content-build markdown` the same 146. `content-build lint` drops 1,988 → 1,983: exactly the five READMEs whose
  `subType` was a section rather than a `doc` genre, which is the defect this
  change exists to remove.

- 78a34ac: **Refuse a wikilink authored inside a frontmatter value, and fix the one there was.**

  The site content build walks a note's **body** and copies its frontmatter through
  verbatim, so a `[[…]]` written in a `description`, a `government.summary`, or any
  other prose-bearing field is never resolved. It reaches the reader as literal
  brackets, in whatever the theme renders that field as, and nothing downstream
  notices — the value is a perfectly good string, so the page builds and the defect
  is visible only to someone who looks at the rendered field.

  Grukarhölm's polity infobox showed its Government row as
  `[[being-grkrahk|Grukar-ahk]]` at `/thalorna/polity/grukarholm/`, while the same
  link twice in the note's body resolved correctly. The row now reads as prose. It
  was the only occurrence in the tree.

  `build-site-content` now reports every wikilink it finds in frontmatter — naming
  the file, the dotted key path, and the link as written — and fails before it
  writes a single page.

  The form is refused rather than resolved on purpose. Resolving it would mean
  choosing an output syntax for a field whose renderer this build does not know — a
  markdown link is inert in a Hugo template that prints the value as text, and an
  `<a>` is unusable in one that escapes it — and it would bless an authoring habit
  the pack compilers have no way to honour at all. Frontmatter carries data; a link
  belongs in the prose the field summarises.

  Values are read from the _parsed_ frontmatter, so a `[[` inside a YAML comment is
  not a hit, and nested maps and lists are walked.

  The SoHL system repository guards its own knowledgebase export the same way
  (HeroicLands/Song-of-Heroic-Lands-FoundryVTT#1428), where the rule is written down
  for content authors.

  (Closes #35.)

- 8319801: **Drop the unused `@vitejs/plugin-react`, which was blocking every install.**

  `npm ci` and `npm install` both failed on `main` with `ERESOLVE`:
  `@vitejs/plugin-react@6.0.5` declares a peer dependency on `vite@^8`, while the
  tree holds `vite@6.4.2` — pinned there by `vitest` and its siblings
  (`@vitest/mocker`, `vite-node`), which accept `^5 || ^6 || ^7.0.0-0` and not 8.
  Installing from the lockfile is no escape: `npm ci` verifies peer dependencies
  too, so the deploy workflow died at its `Install dependencies` step and the site
  stopped publishing.

  The bump that caused it moved one half of a pair. A plugin whose whole purpose is
  to pair with a particular Vite major cannot advance without Vite advancing too,
  and the two are versioned independently, so nothing in the update itself showed
  that it had split them.

  Neither obvious repair was the right one. Holding the plugin at `^4` keeps a
  dependency this repository never loads, and moving `vite` to 8 drags `vitest` and
  `@vitest/{coverage-v8,ui}` along with it — a test-toolchain migration undertaken
  to satisfy a plugin nobody uses. `--legacy-peer-deps` would accept a resolution
  npm is explicitly reporting as wrong, and would go on hiding the same class of
  conflict on every future bump.

  So the entry is removed instead. This repository ships no React: there is no
  `.jsx` or `.tsx` file, nothing imports `react`, and `vite.config.mjs` builds a
  single ESM module with `@rollup/plugin-terser` as its only plugin. The package
  was inherited from the system repository when this one was scaffolded, and is one
  of the entries #18 lists as never wired up here.

  `vite` stays at 6.4.2 and the lockfile loses exactly two packages — the plugin
  and its `@rolldown/pluginutils` dependency. Nothing else moves.

  (Closes #37.)

- 814e98b: **Resolve cross-package wikilinks again: the vendored manifest was being read with a key shape it stopped using.**

  No `[[type-shortcode]]` addressing another package resolved anywhere in this
  build — not one of the 2,683 entries the vendored `sohl` manifest publishes.

  `loadForeignManifests` indexes by the **canonical** key, package included
  (`sohl-skill-lang`), and has since manifest v3 made keys fully qualified: a
  manifest has to survive two packages claiming the same `type-shortcode`. The site
  build looked that index up with the **unqualified** address the v2 format used
  (`skill/lang`). The two shapes never collide, so the lookup could not succeed on
  any input.

  A second instance of the same drift sat beside it. The foreign packages' content
  types were seeded by splitting each key on `/`; a canonical key contains none, so
  not one foreign type was seeded, and `readQualifier` did not recognise a
  foreign-only type as an address at all — such a link was read as prose.

  Neither was visible from the output. An unresolved address renders as its own
  display text, so `[[skill-lang|Language]]` read correctly as the word "Language"
  with no href: nothing missing on the page, just a link quietly gone. It surfaced
  only when vendoring the `sohl` manifest completed the package set and turned on
  the dead-link guard, which then failed the build on 54 links — 35 of them
  correct content addressing published pages, reported as if they were typos.

  The two shapes are now bridged once, at the call site that loads the manifests,
  using the package's own `readCanonicalKey` rather than a second hand-rolled
  parse. Wikilink resolution looks up one shape for local and foreign hits alike —
  what its `{ url, name }` contract already promised — and the type seeding reads
  the same re-keyed map, so the two cannot drift apart again.

  A manifest that loads entries but yields no addressable key now fails the build
  by name. That is the shape this defect took, and a lookup that cannot match
  anything reports nothing, so nothing else would catch the next format change.

  `[[skill-lang]]` resolves to `/sohl/kb/skill/language/` and `[[doc-brthsgn]]` to
  `/sohl/kb/rules/birthsign/`; all 2,683 manifest entries are addressable. The 19
  failures that remain are unrelated — published prose citing notes that are
  `draft: true` or were never written.

  (Closes #40.)

- cdc97e0: **Publish the notes that other notes link to: `draft:` becomes a `draft` tag.**

  The site content build skips a `draft: true` note, so a link to one resolves
  nowhere and renders as bare text — the reader sees a name where the author wrote
  a link, and nothing says so. Once the dead-link guard armed, those links stopped
  being invisible and started failing the build instead: 19 of them, from eight
  published notes.

  A dropped link is the worse failure of the two. It is silent, it is invisible in
  the rendered page, and finding it again means knowing it was ever there. An
  unfinished page is at least honest about being unfinished, and the link into it
  keeps working the day it is written.

  So the flag that hid them is gone. All 267 notes that carried `draft: true` now
  carry `draft` in `tags:` instead, and the 36 that carried a redundant
  `draft: false` simply lose it. The tag is a source-side marker — it is not
  emitted to Hugo and creates no taxonomy page — so a note is still identifiable as
  unfinished while authoring, without that state deciding whether anything may link
  to it.

  Two addresses could not be resolved this way, because no note exists to publish:
  `being-quetzal` (a bird named in Ba'alam Tza'ku's export list, beside an unlinked
  "macaw") and `being-brunjarskathhel` (the only one of the six Blackpine Wolves
  with no note). Both are unlinked here and recorded in #42 rather than left to
  fail the build.

  Two consequences of publishing the rest, both fixed here:

  - `okharis-tribes-placeholder` named a `folder` id that was never declared, and
    its body was empty, so the journals compiler had nothing to build. The folder —
    Tribes, under Okháris, alongside City States — is declared, and the body reads
    `TBD`.
  - The pack build was already failing on `main` for the two unresolvable
    addresses above, so unlinking them fixes `npm run build:db` as well.

  The site now publishes 1,737 notes rather than 1,471, and every wikilink in them
  resolves.

  (Closes #42.)

- 4cde681: **The retired `assocMysteryCode` is gone from every mystical ability.** All 221
  `mysticalability` notes authored it, and all 221 authored the same value — the
  empty string. No SoHL DataModel has received the field since
  HeroicLands/Song-of-Heroic-Lands-FoundryVTT#973 removed it, so Foundry discarded
  the key when the document was constructed and nothing at compile or at load time
  said so (#54).

  _It was retired, not renamed._ It is **not** the earlier spelling of
  `assocAffiliationCode`: SoHL#973 deleted `assocMysteryCode` as dead plumbing —
  it resolved to an `assocMystery` getter production never read — and SoHL#1012
  added `assocAffiliationCode` later and separately, as the credential seam #1000
  needed. Rewriting these notes to the newer field would assert an affiliation none
  of them claims, so the key is deleted rather than migrated.

  **Nothing compiled changes.** `build/packs-json` was built before and after the
  sweep and the two trees are byte-identical across all 2,555 documents. The
  installed `@heroiclands/package-build` still declares the field on the
  `mysticalability` builder with `default: ""`, so an authored `""` and an absent
  key emit the same document. What the sweep buys is the next dependency bump:
  HeroicLands/package-build#63 drops the declaration, and from that release on a
  note authoring the field is an `npm run lint:addresses` finding — 221 of them,
  had they stayed.

  _Two neighbouring fields in the same report are deliberately left alone._
  `affiliation.relation` and `mystery.skillAptitudes` are defined on the system's
  `main` and merely unreleased; this package pins `verified: 0.8.2`. They are
  version skew, not authoring debt, and removing them would delete data the next
  system release reads.

- 847e949: **The retired `package:` frontmatter is gone from every content note.** All 1,716
  notes under `assets/content/` declared `package: thalorna` — the same value every
  time, because this repository authors exactly one package's content. A note's
  package is the repository's configured `contentPackage`, so the field was
  redundant (#75).

  _It was also a trap._ The field was a **selector**: the compile loop skipped any
  note whose declared value did not match the configured package, silently and
  bucketed as "belongs to another pass". A tree whose notes named a package no
  configuration answered to compiled zero notes and exited 0.

  `@heroiclands/package-build` moves from `^3.0.0` to `^3.3.0`, which is what makes
  the sweep safe: step 1 of HeroicLands/package-build#56 derives the package from
  `contentPackage`, accepts an absent `package:`, and refuses a note that names a
  different one. On `3.2.0` and earlier a note lacking the field was skipped, so
  stripping it would have filtered out this entire tree — still exiting 0. The
  dependency bump and the sweep have to land together.

  **Nothing compiled changes.** `build/packs-json` was built before and after the
  sweep and the two trees are byte-identical across all 2,555 documents — same
  files, same bytes. This is a frontmatter deletion, not a content change: no other
  frontmatter key, note body, or file was touched.

- 05db85b: **`assets/content/README.md` no longer teaches the retired `package:` field.**
  The frontmatter example that page shows every new note author declared
  `package: thalorna`, and the prose below it listed the field among "four fields
  load-bearing and easy to get wrong", explaining that "the compilers select on
  it".

  None of that is true any more. `@heroiclands/package-build@3.3.0` derives a
  note's package from `contentPackage` in `package-build.config.yaml`, #75 stripped
  the key from all 1,716 notes here, and step 3 of HeroicLands/package-build#56
  makes authoring it a hard build error. The README is not a note — no frontmatter
  of its own, and the example sits inside a code fence — so the compiler never read
  it and nothing failed. It simply survived the sweep, teaching authors to write a
  field that will shortly break their build.

  The `package:` line is gone from the example, the load-bearing list is three
  fields rather than four, and a new paragraph says where the package actually
  comes from and that it must not be added back. The `shortcode` comment still
  reads "unique within (type, package)" — that constraint is unchanged, the package
  is simply no longer authored on the note — and the new paragraph names it
  explicitly so the term has a referent without the field.

  Documentation only (#77). No note frontmatter, no build behaviour, and nothing
  compiled changes.

- 0270634: **The site build emits pages again, carrying their package: it kept a private
  copy of the `package:` selector the toolchain had already retired.**

  `npm run build:site-content` wrote **0 page(s)** on `main`, and the deploy
  workflow's own guard — _"Verify the tree is a complete site"_, `test "$pages" -gt
1000` — is the only reason `/thalorna` was not replaced with an empty site.

  `utils/build-site-content.mjs` opened its walk with
  `if (!fm || fm.package !== CONTENT_PACKAGE) continue;`. That is the predicate
  `@heroiclands/package-build` removed in HeroicLands/package-build#56: a note's
  package is **derived** from the repository's configured `contentPackage`, because
  every package is single-sourced in the repository that ships it, so an absent
  `package:` is normal. #75 swept the field out of all 1,716 notes, the local copy
  of the predicate never got the upstream fix, and every note failed it. The build
  exited 0 while publishing nothing.

  **Four sites read the field; all four now read the derivation** the package
  exports — `assertNotePackage` and `searchableFrontmatter` from
  `engine/note-package`:

  - **The walk.** A note that declares nothing compiles; a note declaring the
    configured package still compiles, so an unswept tree is unaffected; a note
    declaring a **different** package fails the build by name, listing every
    offender. The silent skip is the whole defect class this came from — it is what
    let a tree compile to nothing and report success — so it is not preserved
    anywhere.
  - **`localPackages`.** `new Set(entries.map((e) => e.fm.package))` yielded
    `Set { undefined }`, so foreign-manifest resolution ran against a bogus
    local-package set and cross-package address checking silently switched itself
    off. It now reads the package resolved once during the walk, and resolves to
    `thalorna`.
  - **Generated tables**, which had the same trap one step further on: a `dataview`
    query scoping itself with `WHERE … and package = "thalorna"` resolves `package`
    like any other field, so a swept note matched nothing and the page would have
    published an **empty table** in silence. The table universe now carries the
    derived package, so the two spellings stay equivalent.
  - **The emitted page's frontmatter.** A page is written from its note's `fm`, so
    a swept tree published 1,715 pages carrying no `package` at all. The shared
    theme reads it: `partials/breadcrumbs.html` builds the middle crumb from
    `.Params.package`, and without it the crumb degrades from a linked, labelled
    section to a bare, unlinked type slug. The page now carries the package the
    build derived — the same defect, and the same fix, as
    HeroicLands/package-build#65 for `content-build site`, which cannot reach here
    because this script emits its own pages. The generated stub landings have
    always written the field; only the pages built from a note relied on the
    frontmatter carrying it.

  **The published site is byte-identical to before the sweep.** Rendering the
  pre-sweep tree with the previous script and the swept tree with this one gives
  **2,502 pages with zero differences** — not one file added, removed or changed.
  The intermediate markdown differs in 1,714 of 1,722 files, and in exactly one
  way: the line `package: thalorna` sits lower in the frontmatter block. Parsed as
  YAML, frontmatter and body are equal in every file; the sweep deleted the
  authored position along with the field, and a YAML mapping is unordered, so Hugo
  renders the two identically.

  `build:site` now produces 2,502 pages, against the 2 that failed the deploy
  guard.

  The deeper fix is to stop hand-rolling the walk and filter altogether and call
  the package's own site builder, so the next upstream change reaches this
  repository without a second edit — HeroicLands/package-build#36. That is a
  refactor of the whole parse phase, not an urgent-fix change, and is left for it.

  (Closes #78.)

- 50ac884: **`assets/content/README.md` documents the `draft` tag.** The paragraph telling
  authors how to mark an unfinished note described a mechanism this repository
  stopped using at #42, which converted all 267 such notes to a `draft` tag. The
  README is not a note — no frontmatter of its own — so no build or lint read it,
  and it went on describing the old shape.

  It now shows the tag, and says what the tag does: nothing. No build reads
  `tags`, so a tagged note compiles into its pack, appears in the link manifest,
  publishes to the site, and may be linked to exactly as any other note does. It
  marks the note as unfinished for the person reading the tree, and a generated
  content table can select on it (`FROM #draft`).

  Documentation only (#82). No note frontmatter, no `draft` tags, no build
  behaviour, and nothing compiled changes.

- 4bb3555: **The site emitter is deleted. `content-build site` is the whole of it (#85).**
  `utils/build-site-content.mjs` (907 lines) and `utils/site-wikilinks.mjs` (281
  lines) were a copy of `@heroiclands/package-build`'s `engine/site-build.mjs` and
  `engine/web-wikilinks.mjs`, and `utils/site-config.mjs` (89 lines) existed only
  to feed them. All three are gone, along with `assets/legacy-urls.json`. There is
  no local site code left and no seam for any: a gap in the emitter is fixed in
  `@heroiclands/package-build`, where every package gets the fix.

  **Four upstream fixes had failed to reach this repository through that copy**, in
  four months. One made the site emit zero pages and exit 0 (#78). One left every
  generated collection table empty (#79). One broke the breadcrumb on all 1,715
  pages (package-build#65). And one — recorded on #85 rather than as its own issue
  — stripped the published link manifest: both `content-build manifest` and the
  local emitter wrote `build/manifests/thalorna.json` through the same
  `writeManifests`, but the copy passed three arguments where upstream passes four,
  so `foundryPackage` arrived `undefined` and two guards fired. Whichever ran last
  decided what the file contained.

  | `build/manifests/thalorna.json` | `foundryPackage` | entries with `uuid` | size   |
  | ------------------------------- | ---------------- | ------------------- | ------ |
  | after the old `build:site`      | absent           | 0 of 1,851          | 204 KB |
  | after `build:link-manifest`     | `sohl-thalorna`  | 2,585 of 2,585      | 627 KB |
  | now, after either               | `sohl-thalorna`  | 2,585 of 2,585      | 627 KB |

  The second writer is gone, not corrected: `content-build site` writes no manifest
  at all, so there is one writer and nothing to disagree with.

  **What replaces it is configuration.** `package-build.config.yaml` gains a
  `site:` block — `out: site/content`, and the eleven sections this package
  publishes. Since package-build#204 a section is a Hugo directory the note format
  does not carry, so pages emit **flat** and `site.sections` is the only thing that
  makes `/thalorna/<section>/` exist at all. `publish.address` keeps only
  `prefix: ""`, which is a declared decision rather than a default; `landing` went
  with the `README` convention package-build 13.0.0 retired (#127).

  **No page moved.** The published address set is identical, note for note: 1,852
  `url:` values, zero differences, and every one of the 2,125 rendered pages
  resolves at the address it did before. What changed is where the _file_ sits —
  `site/content/being/being-xyz.md` is now `site/content/being-xyz.md` — which
  Hugo does not publish by, because each page states its own `url`.

  **What no longer publishes.** `assets/legacy-urls.json` recorded the addresses
  each page had published at before, and became 446 Hugo `aliases` — redirect stubs
  at `/thalorna/character/…`, `/thalorna/creature/…`, `/thalorna/section/…` and the
  rest. Those addresses stop answering. Its second job, `artwork`, was already dead:
  the shared theme composes a portrait URL as
  `images/being/<shortcode>-portrait.webp` from the page's own `shortcode`, and
  reads no `artwork` key — a filename follows identity, and `(type, shortcode)`
  never moved.

  **Where the pages read differently**, all of it the engine doing what the copy had
  stopped doing: 51 pages render a wikilink as an unresolved-link span, because the
  copy still honoured the bare `[[Name]]` alias form that package-build#180 retired
  — the same 122 findings `npm run lint:content-links` already reports, so the site
  build is now red for exactly the content gap the linter is. 20 pages mark a link
  to a draft note. 4 correct a heading anchor the copy mangled. 2 fill in a link
  label the copy emitted empty.

- 303b00c: **`Companies` is a section landing again, not a section called "Section".**
  `assets/content/Companies/Companies.md` declared `category: section` — the only
  note in the tree that did, against 14 that declare `category: collection`. This
  package's address scheme is `publish.address.landing: collection`, so `section`
  made the note not a landing at all: it routed by its category like any other
  `doc` and minted a section named after the literal string, publishing
  `/thalorna/section/` (a section titled "Section", holding one page) and
  `/thalorna/section/companies/` — while the seven `category: company` notes got
  only the auto-generated stub landing Hugo names "Company" (#90).

  Nothing reported it. A section with one page looks to the build exactly like a
  section that genuinely has one page, so it surfaced only as a card reading
  "Section" in the list on `/thalorna/`.

  The note now declares `category: collection` and `section: company`, and moves
  to `assets/content/Collections/` alongside the other 14 — it was the only
  landing filed outside that directory. It gains the `description` every other
  landing carries, so its card on `/thalorna/` reads "Companies" with a summary
  rather than a bare "Section".

  **The old addresses redirect.** `/thalorna/section/companies/` and
  `/thalorna/section/` were both live, so `assets/legacy-urls.json` records them
  under `doc:companies` and Hugo emits a redirect at each to `/thalorna/company/`.
  The second is the spurious section index rather than an address the note itself
  published at; it is recorded here because the note is the only page that can own
  the redirect, and a 404 was the alternative.

  **The Iron Wolves Company joins the list.** The landing's authored list named
  six of the seven company notes. That omission was invisible while the note was
  not a landing; as one, the theme's gap-filler correctly flagged the seventh under
  an "Orphaned Pages" heading on the page. Filing it into the list is the response
  that heading asks for.

  **Verified against the rendered site, not the source.** Building
  `site/content` + Hugo before and after, 13 of 1,932 pages differ: the homepage
  card list (loses "Section", gains "Companies" with its description), the company
  landing, the seven company pages and `the-magnum-collegium` (whose
  `[[doc-companies]]` link and backlinks now resolve to `/thalorna/company/`), the
  two old addresses (now redirect stubs) and the sitemap, which loses exactly those
  two URLs. `build/packs-json` differs in exactly one document — the `Companies`
  journal, by the added Iron Wolves bullet; the frontmatter change compiles to
  nothing, and the file move changes neither the note's `id` nor its `folder`. The
  link manifest keeps its 2,345 entries, with `thalorna-doc-companies` moving from
  `section/companies/` to `company/`. `lint:format` is clean, and
  `lint:markdown` / `lint:addresses` / `lint:content-links` report the same
  146 / 2 / 68 pre-existing findings as `main`.

- 3612d2c: **`/thalorna/` is authored content rendered by the shared landing layout, not a
  hand-built layout override.** `site/layouts/index.html` was 47 lines shadowing
  the theme's own `layouts/index.html` to render a hero band and a list of the
  site's sections. Building that page here meant it could only resemble the other
  five package landings by being kept in step with them by hand, which is the
  divergence the shared layout was added to prevent. The whole file is deleted.

  The page is now `assets/content/homepage.md` — a `type: homepage` note — rendered
  by `@heroiclands/hugo-theme`'s `layouts/partials/landing.html`. Its front matter
  is four values: `title`, `description` and `banner` for the hero band, and
  `landing.cards.source: sections` for the grid. The theme moves to `^0.2.0`, the
  release that ships that layout and the landing classes; the pin has to be
  widened by hand, since on `0.x` a caret range never crosses a minor and
  Dependabot will never offer the bump.

  **The cards are derived, not listed.** `source: sections` builds one card per
  top-level section from the site's own `.Site.Sections.ByTitle` — the same list,
  in the same order, with the same descriptions the deleted layout read. So this
  package's landing still gains and loses a card as its content build emits and
  retires a section, and nothing here has to be remembered.

  **What the reader gets is the same page.** The site was built three times — at
  theme 0.1.2, at 0.2.0 with nothing else changed, and with the port — so the
  minor bump and the port could be told apart. The bare bump changes **no rendered
  page at all**: across all 2,510 built files its only effect is `css/style.css`,
  purely additive at 163 lines added and none removed. The port then changes
  exactly one file, `thalorna/index.html`. The hero band is byte-identical, and
  all 21 cards carry the same title, address and description as the list items
  they replace.

  Two differences are real and deliberate:

  - The section list is a card grid. `<ul class="page-list">` becomes the theme's
    `.doors` / `.door` cards — the same shape every other package landing renders.
  - The page supplies its own `description`, so `<meta name="description">` is the
    hero standfirst rather than the site-wide default from `params.description`.

  No install block was authored. Every other package landing carries one, but this
  repository has cut no release, so a `releases/latest/download/module.json`
  address would be a dead link on the page whose job is to send readers somewhere.

  `utils/build-site-content.mjs` gained the routing a homepage note needs: it is
  addressed by the **package** rather than by its own name, so it takes no section
  and no slug and writes the site root's `_index.md`, reusing package-build's
  `engine/homepage.mjs`. `build/packs-json` and `build/manifests/thalorna.json` are
  byte-identical with and without the note — a `type: homepage` note compiles to a
  page and to no compendium document and no manifest entry.

- 91e91fc: **The `/thalorna/` deployment is no longer indexable at its `pkg` origin
  address.** A Cloudflare Pages project answers at three families of host-assigned
  address besides its canonical path, and the `_headers` this repository generates
  covered only two: `<project>.pages.dev` and `<deployment>.<project>.pages.dev`.
  The third, `thalorna.pkg.heroiclands.org`, is the custom domain the project
  carries so `heroiclands-site`'s router has an origin to fetch — the newest of the
  three, and the only one a reader is plausibly handed.
  `utils/build-site-root.mjs` now emits a rule for it as well.

  Measured at the edge on 2026-08-30, before the change:

  | Address                                      | Status | `X-Robots-Tag` |
  | -------------------------------------------- | ------ | -------------- |
  | `sohl-thalorna.pages.dev/thalorna/`          | 200    | `noindex`      |
  | `9d284709.sohl-thalorna.pages.dev/thalorna/` | 200    | `noindex`      |
  | `thalorna.pkg.heroiclands.org/thalorna/`     | 200    | _absent_       |
  | `www.heroiclands.org/thalorna/`              | 200    | _absent_       |

  All four bodies hash identically
  (`a128de53490f6f57b5803e83ffbc6a124a839e0cdad509f4641174d693e973e4`), so that was
  one deployment answering on four addresses and setting the header on only two.

  **The canonical site stays indexable, by two independent guards.** The new rule
  is `https://:package.pkg.heroiclands.org/*`, and Cloudflare's `:name`
  placeholders match exactly one label — the delimiter inside a host is the period
  — so the pattern requires four labels with a literal `pkg` third from the end.
  The three-label `www.heroiclands.org` cannot match it under any binding. That a
  four-label pattern binds at all is measured rather than assumed: the existing
  `:version.:project.pages.dev` rule is four labels with two placeholders, and
  `9d284709.sohl-thalorna.pages.dev` carries the header today. On top of that, the
  router strips `X-Robots-Tag` when it proxies (`canonicalHeaders` in
  `heroiclands-site`, `worker/src/router.js`), which its suite asserts both as a
  pure function and end to end through the handler.

  **The negative is now asserted, not observed.** `utils/build-site-root.test.mjs`
  models Cloudflare's single-label placeholder semantics rather than
  pattern-matching the rule text, so two things become assertions: every
  host-assigned address is covered by exactly one rule, and `www.heroiclands.org`
  — with the bare apex, `api.`, `kb.` and `pkg.heroiclands.org` itself — is covered
  by none. That second case passes against the old two-rule payload too; it is a
  standing regression guard rather than a test of this change. The deploy workflow
  runs it before it builds anything.

  **The payload is this repository's, whatever workflow deploys it.** The reusable
  workflow in `HeroicLands/.github` writes the same three rules as a default, but
  only when the build produced none, and `utils/build-site-root.mjs` writes one
  unconditionally — so migrating would not have inherited the rule. That is
  recorded next to the check in `.github/workflows/deploy-site.yml`. Whether to
  migrate the deploy later is a separate question and is not decided here.

- d69bb8a: **Take `@heroiclands/package-build` 13.0.0**, crossing three majors from
  `^11.0.0`. Nothing in the content tree changes: the bump is `package.json` and
  the lockfile, and every emitted artifact is byte-identical.

  Each change was checked against this tree rather than assumed inert.

  **11.1.0 — a `README` landing's `subType` is an address** (package-build#197,
  #200), checked against declared sections rather than `doc`'s genre list. It
  reaches nothing here: #123 and #124 already turned the twelve index pages and
  the six section landings into ordinary `doc-<type>` notes, and the only
  `README.md` under `assets/content/` is the tree's own documentation, which
  carries no frontmatter and is not a note.

  **12.0.0 — `section:`, the `collection` landing rule and the `collection`
  subtype are retired** (package-build#202), refused by name rather than ignored.
  No note declares `section:` and none writes `subType: collection`. This
  repository's `publish.address.landing: readme` is explicitly still accepted;
  13.0.0 makes it inert but keeps it, so it is left as written rather than swept
  ahead of the release that deletes the key.

  **12.0.0 — `type` and `subType` are held to the address charset**
  (package-build#206), and the `doc` subtype `user-guide` becomes `userguide`.
  **No note here carries `user-guide` in any position**, and no `type` or
  `subType` in the tree contains a hyphen, so there was nothing to sweep and no
  retired-spelling warning is emitted.

  **13.0.0 — a section is a Hugo directory the note format no longer carries**
  (package-build#204). `sectionOf`, the `README.md` landing convention and the
  `<section>/` routing are removed from the engine, and pages emit flat. **This
  repository does not run the engine's site emitter** — `utils/build-site-content.mjs`
  is a local fork (#85) carrying its own `sectionOf` — so its pages still emit
  under `<section>/` and its eleven section landings still exist. The two agree
  about addresses because a section was never in one: the fork's link manifest
  and the engine's `content-build manifest` output are byte-identical, both 2,585
  entries.

  **Evidence, before and after on the same worktree.** `lint:format` is clean
  (1,923 files) both ways. The three red checks are **red line for line**, not
  merely equal in count: `lint:markdown` 146 findings, `lint:addresses` 1,983
  across 1,852 notes, `lint:content-links` 122 — each finding set sorted and
  diffed, zero lines of difference. `build:compiledb` reports the same 620
  findings from the same lines and refuses to compile packs for the same reason,
  and its emitted pack JSON is byte-identical across all 2,364 files.
  `build/manifests/thalorna.json` and `build/stage/module.json` are byte-identical.
  `build:site-content` writes the same 1,863 files, and the rendered Hugo site is
  byte-identical page for page — 2,127 pages and 446 aliases, `diff -r` clean.

- 3d48117: **Take package-build 14.0.0 and hugo-theme 0.4.0**, the two halves of the fix
  for empty section landings. package-build#212 added the `site.sections.<name>`
  keys `listType` and `listSubType`; heroiclands-hugo-theme#50 made
  `_default/list.html` read them. Neither does anything until this repository
  declares them, which the following change does.

  package-build's other major, #216, deletes `publish.address.landing` outright
  and refuses the key. That is inert here: PR #127 already dropped it, and
  `publish.address` still carries its `prefix: ""` — a stated decision rather than
  a default, and the thing every address is derived from. Emitted content is
  identical across the bump: the same 1,863 files, the same 2,125 rendered
  addresses, and a byte-identical `sitemap.xml`.

  **The theme bump is two minors and it does change rendering — correctly.** 0.3.0
  added `data/banners.yaml` (heroiclands-hugo-theme#36), an allowlist of the
  banner artwork that actually exists; a resolved name absent from it falls back
  to `default.webp` and warns once. This repository resolves banners by content
  type, and none of `being`, `affiliation`, `place`, `mysticalability`, `lore`,
  `skill`, `concoctiongear`, `weapongear`, `scenario`, `mystery` or `reference`
  has ever been drawn — every one of them answers 404 on `cdn.heroiclands.org`
  today. So 1,750 pages were emitting a dead `background-image` in silence, which
  is precisely what that allowlist exists to surface; they now render the default
  band and the build says so. Drawing the artwork is separate work.

  Nothing else moves. All eleven section landings render byte-identically across
  the bump — the theme's new fallback fires only for a landing that declares a
  `listType`, and none does yet. The three checks this tree is legitimately red on
  are red line for line: `lint:markdown` 146 findings (#111), `lint:addresses`
  1,983 findings across 1,852 notes, `lint:content-links` 122 link problems (#34,
  #44); `lint:format` is clean.

- 419885e: Adopt package-build 7.0.0.

  `stats.systemId` was removed from this repository's configuration because
  7.0.0 derives it (HeroicLands/package-build#48) — but the pin was still
  `^6.1.0`, where the key is merely _optional_. Under 6 the deletion resolves
  to `systemId: null` beside a real `systemVersion`: a version stamped with no
  id, silently, which is the "plausible lie" the upstream change exists to
  prevent.

  ```text
  under ^6.1.0, systemId deleted: { "systemId": null, "systemVersion": "0.8.2" }
  ```

  Bumping the pin closes the window. Verified: every pack stamps exactly the
  `systemId` and `systemVersion` it stamped before the deletion.

- 420c7d1: Declare the heading anchors 68 links were addressing (#101).

  `content-build links` reported **68 dead anchors**, and the tree's link check has
  been red on them. They were not 68 mistakes: sixteen notes were authored as
  though a heading's text were addressable on its own.

  **The links were already correct.** `auditLinks` compares `slugify(anchor)`, so
  an author may write the heading's prose and it is slugified for them. An anchor
  is only _addressable_, though, when its heading declares one — `anchorsOf`
  matches `{#slug}` and nothing else. Across the sixteen destination files there
  were **229 headings and not one `{#slug}` between them**.

  **Not solved by deriving a slug for every heading.** A slugged heading starts its
  own JournalEntryPage, whose id is derived from the note id and the slug so that
  link and page agree without shared state — Foundry UUIDs cannot address a
  position _inside_ a page. Marking a heading is a decision about page boundaries,
  so auto-deriving 229 of them would silently split sixteen notes into dozens of
  pages. 27 headings are marked here: exactly those something links to.

  **The two that named no heading at all.** `#Northern Fertile Crescent` and
  `#Southern Savannahs` are **bold phrases** inside `## Geography` in
  `Xerathia_Continent.md`, not headings. Each also has a note of its own, already
  cited that way elsewhere in the tree, so both links now address the note instead
  of a section of the continent overview:

  ```diff
  -[[doc-xerathia#Northern Fertile Crescent|Northern Fertile Crescent]]
  +[[doc-nrthrnfrtlrgn|Northern Fertile Crescent]]
  -[[doc-xerathia#Southern Savannahs|Southern Savannahs]]
  +[[doc-sthrnsvnhs|Southern Savannahs]]
  ```

  That is better than inventing an anchor on `Xerathia_Continent.md`: the reader
  lands on the page about the place rather than on a paragraph mentioning it.

  **Verified.**

  ```text
  before: 68 link problem(s) across 1716 note(s)
  after:  1720 notes: every anchor link lands and every qualified address resolves
          (2 cross-package reference(s) via manifest), no wikilink in frontmatter,
          every homepage address resolvable.
  ```

  `content-build lint` reports the same **15** findings before and after — all of
  them the pre-existing `birthsign`/`bodyStructure` class
  (HeroicLands/package-build#60), neither introduced nor fixed here.

  **No prose moves.** 29 insertions and 29 deletions across 16 files: 27 headings
  gain a slug on the end, and two link targets change. Every heading's text is
  untouched.

- 3d48117: **Declare what each section landing lists.** package-build#204/#208 made a
  content page emit flat — a page is addressed `(type, shortcode)` and written at
  the root of the content mount — so a section directory holds nothing but its own
  generated `_index.md`, Hugo's `.Pages` is empty, and every one of this
  repository's eleven landings rendered _"Nothing here yet."_ The relationship
  between a section and its members survived only in this file, and it cannot be
  recovered from the section's name: a section name is a URL its owner chose, and
  a type is what a note declares.

  So each entry under `site.sections` now says what it lists, in the two keys
  package-build#212 added and heroiclands-hugo-theme#50 reads —
  `listType`, matched against the page's `type`, and `listSubType` alongside it
  where one type holds several genres. The theme's query is site-wide
  (`where site.RegularPages "Type" …`), so it asks what a page _is_ rather than
  where its file sits, and is indifferent to flat emission.

  **Every mapping was read off the notes' own front matter**, not inferred from
  the directory name. Ten of the eleven coincide with their section name;
  `reference` is the one that does not — its notes are `type: doc, subType:
reference`, and because every doc genre shares `type: doc`, `listType` alone
  would sweep the whole tree into it.

  **Evidence, before and after on the same worktree.** Rows per landing, against
  the top-level `type:`/`subType:` counts in `assets/content/`, every one of them
  0 before:

  | Section           | Declares                                | Rows |
  | ----------------- | --------------------------------------- | ---: |
  | `being`           | `listType: being`                       |  646 |
  | `affiliation`     | `listType: affiliation`                 |  295 |
  | `place`           | `listType: place`                       |  249 |
  | `mysticalability` | `listType: mysticalability`             |  221 |
  | `lore`            | `listType: lore`                        |  180 |
  | `skill`           | `listType: skill`                       |  110 |
  | `concoctiongear`  | `listType: concoctiongear`              |   71 |
  | `weapongear`      | `listType: weapongear`                  |   25 |
  | `reference`       | `listType: doc, listSubType: reference` |   21 |
  | `scenario`        | `listType: scenario`                    |   21 |
  | `mystery`         | `listType: mystery`                     |   12 |

  **No published address moved.** `build:site-content` writes the same 1,863
  files, with exactly the eleven `_index.md` differing; rendering them gives the
  same 2,125 addresses and a byte-identical `sitemap.xml`, with exactly the eleven
  landing pages differing and no file added or removed. The three checks this tree
  is legitimately red on are red line for line: `lint:markdown` 146 findings
  (#111), `lint:addresses` 1,983 findings across 1,852 notes, `lint:content-links`
  122 link problems (#34, #44); `lint:format` is clean.

  **Fifteen rows render with a blank label**, all of them K'ich'chik polities
  under `assets/content/Regions/K.ich.chik/` that author `title: ""` and carry
  their real name only in `name.full` — `Ba'alam Ki'ahk`, `K'ixim Tzul`, and
  thirteen more. They sort to the front of `/thalorna/affiliation/`. It was
  invisible while that landing listed nothing; it is authoring debt, not a
  consequence of this change, and is left for its own fix.

- 5c65a6e: Stop authoring `stats.systemId`; it is derived.

  package-build 7.0.0 refuses `stats.systemId` and `stats.systemVersion`:
  authoring a derived value is an error rather than an override, because a
  transcribed copy is free to drift from what it copied — which is how
  `stats.systemVersion` came to sit at `0.6.0` for four releases
  (HeroicLands/package-build#48).

  Here a module with one declared system relationship derives `sohl` from it, so deleting the line changes nothing:

  ```diff
   stats:
  -    systemId: sohl
       lastModifiedBy: …
  ```

  **Verified.** Every pack in this package stamps exactly the `systemId` and
  `systemVersion` it stamped before — resolved with the configuration loader
  and compared pack by pack.

- c6dcb12: **Drop the inert `publish.address.landing` key.** package-build 13.0.0
  (package-build#208) removed the landing concept outright — `sectionOf` is gone,
  pages emit flat, and there is no `readme` or `collection` rule left to select
  between. `landing` survives only as a value that is validated and then ignored:
  `contentAddress` destructures it, checks it against `LANDING_RULES` (now the
  single-element `["readme"]`, whose own doc comment reads _"Inert since #204"_)
  and never reads it again.

  The key outlived its mechanism because `content-config.mjs` has no warning
  channel — every finding throws — so deleting it upstream while consumers still
  declared it would have errored on a statement that was still true. This is the
  middle of the three steps `package:` took: retire the value, have consumers drop
  the key, then delete the key with a targeted refusal. It unblocks the last one.

  **Nothing changes at build time.** `DEFAULT_ADDRESS_SCHEME` is
  `{ prefix: "", landing: "readme" }`, and `normalizePublish` falls back to it when
  `address.landing` is undefined, so the omitted key resolves to exactly the value
  it was written with. `address:` itself stays, because it still carries
  `prefix: ""` — dropping the block would leave the mount to a default rather than
  to a decision.

  **Evidence, before and after on the same worktree, both at 13.0.0.** Every check
  is identical once log timestamps are stripped; the three this tree is
  legitimately red on are red **line for line**, not merely equal in count.
  `lint:format` clean (1,924 files); `lint:markdown` 146 findings (#111);
  `lint:addresses` 1,983 findings across 1,852 notes; `lint:content-links` 122 link
  problems (#34, #44). `build:compiledb` reports the same findings from the same
  lines and emits pack JSON byte-identical across all 2,364 files.
  `build/manifests/thalorna.json` (2,585 entries from 1,851 addressable notes) and
  `build/stage/module.json` compare equal byte for byte. `build:site-content`
  writes the same 1,863 files, and rendering them with Hugo gives a byte-identical
  site — 2,578 files, `diff -r` clean.

- 66692e0: Stop bundling the module's entry point, and drop `vite` with
  `@rollup/plugin-terser`.

  The source imports nothing. It is a licence header, a `const MODULE_ID` and one
  `Hooks.once("init")` that logs a version — so there was nothing for a bundler to
  resolve, and `vite build` was taking one self-contained file and emitting one
  self-contained file. It is copied into the stage now, through the same
  `packageBuild.assets` list that already carries `lang`, `styles` and the
  licences.

  Nothing needs bundling to reach the system either: SoHL publishes itself as
  `globalThis.sohl`, `.hbs` templates are loaded by Foundry from a path, and a
  browser resolves relative imports between `.mjs` files natively from the single
  `esmodules` entry. A bundler earns its place here only when a module takes a
  runtime dependency on an npm package.

  What the staged module loses is minification — 284 bytes becomes 1,453 — plus
  name mangling and a source map that mapped a ten-line file onto itself.

  What it gains is the removal of two dependencies, ~90 lines of `vite.config.mjs`
  — more code than the module it built — and the two open Dependabot majors
  against them, along with every future one. That config also encoded three
  non-obvious hazards that no longer have to be maintained or repeated per module:
  `emptyOutDir: false`, or the build deletes the packs that `build:prepare` has
  already staged; `formats: ["es"]`, or top-level bindings collide with `window`
  at parse time; and a workaround for vite ignoring `build.minify` in library
  mode, which vite 8 has since fixed and thereby invalidated.

  `sohl-kethira-basic` already builds this way, so this is the outlier joining the
  convention rather than a new one.

- 550dc01: **Four actors no longer embed two gear items under one key.** Skathilda
  Fródban's two daggers, Angelides Patrikios' two gambeson coats, Snorri
  Járnskel's two homespun tunics and Ranthor Pardalen's two waterskins each
  selected one template twice without overriding `system.shortcode`, so both
  instances inherited the template's key.

  `(type, shortcode)` is a logical identity, unique within an actor's own items,
  so the two denoted one entity and every lookup resolving by that key —
  compendium↔world reconciliation, archetype shadowing,
  `fvttFindItemByShortcode`, cohort membership, expression and effect references
  — was ambiguous.

  Both items are kept in every case; only the key is added, so nothing an author
  wrote is removed. Skathilda's already carried distinct names, `Dagger 1` and
  `Dagger 2`, so both take matching keys (`Dgr1`, `Dgr2`) — the specification's
  own worked example. The other three distinguish nothing but the repetition, so
  the first keeps the template's key and the second takes its own.

  Refused by `content-build lint` since `@heroiclands/package-build` 16.0.0. The
  remaining fourteen findings from that rule are repeated _skills_ and are a
  separate authoring question.

- e79f708: Point the three Northern Fertile Region links at the notes that already exist.

  `[[Bethua_Region]]`, `[[Okharis_Region]]` and `[[Takheperu_Region]]` — 11 links
  across five notes — resolved to nothing. All three notes exist:

  | link target        | the note it meant                         |
  | ------------------ | ----------------------------------------- |
  | `Bethua_Region`    | `Bethua/Bethua_Region.md` (`doc`)         |
  | `Okharis_Region`   | `Okharis/Okharis_Region.md` (`doc`)       |
  | `Takheperu_Region` | `Ta.Kheperu/Ta.Kheperu_Region.md` (`doc`) |

  **Two separate reasons they missed, and only the second is obvious.** The
  filename alias a note carries is its basename with underscores turned into
  spaces, so `Bethua_Region.md` registers as "Bethua Region" — and nothing turns
  the underscores in a _link_ back into spaces, so the underscore spelling matched
  nothing. `Takheperu_Region` missed for a plainer reason: the file is
  `Ta.Kheperu_Region.md`, and the link dropped the stop.

  **Fixed as qualified addresses, not as corrected names.** The proper-name form
  (`[[Bethûa Region]]`, which each note declares as an alias and as its
  `name.full`) resolves only from a note of the **same type** — that is what the
  bare form means: _"it resolves against the aliases of the source's own type"_.
  Four of the five citing notes are `type: affiliation` and the regions are
  `type: doc`, so no spelling of the name could ever have reached them from there.
  Measured rather than assumed: rewriting to the proper names first fixed 3 of the
  11 — the three in `Vylarian_Currency.md`, the one citing note that is itself a
  `doc`.

  `type-shortcode` resolves from anywhere, and is already the house form in these
  very sentences, which carry `[[affiliation-permesnu|Per'Mesnu]]` and
  `[[doc-vylarinmpr|Vylaria]]` alongside. The three region links were the only ones
  not written that way.

  Display text is unchanged, so no rendered page moves: `[[doc-bethuargn|Bethûa]]`
  still reads "Bethûa".

  **Verified.** Placeholder links that resolve to nothing fall from 161 to 150 and
  distinct unresolved targets from 99 to 96 — exactly these 11 uses and 3 targets,
  with no other link affected. The 68 dead _anchors_ this tree also carries are a
  separate defect and are untouched (#101).

- 5d48e5b: Fold `sohl.attributes` into `sohl.items`, and restyle every item entry.

  `sohl.attributes` was a compact map the exporter expanded into `attribute`
  documents, so a character's stats were the one part of a note spelled in a form
  nothing else used. They are now ordinary entries at the top of `sohl.items`:

  ```yaml
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 16 } }
  ```

  Output-preserving by construction: `sohl/actors.mjs` builds each attribute as
  `{system: {scoreBase: Number(value) || 0}}` with type `attribute` and the map key
  as shortcode, and pushes them _before_ the `sohl.items` entries — so entries at
  the head of the array emit the same documents in the same order.

  This tree is also why the special case was worth removing: its attribute set is
  **not fixed**, ranging from 3 to 14 per note and carrying a `pal` key that no
  other tree has. A map is the wrong shape for a variable-length homogeneous
  collection, and the compact form could express only `scoreBase` where
  `Item.attribute` declares four fields.

  Every entry in `sohl.items` is now flow style when it fits in 100 columns and
  block style otherwise, which is what lets the compact form go without losing
  reviewability — an attribute is still one line.

  Also adopts `@heroiclands/package-build` 9.0.0, whose shared `printWidth` is 100.

  **Verification.** Every file parsed before and after, with the whole frontmatter
  compared against the intended result and any other difference refusing the write
  — zero refusals. `content-build links` passes: 1,720 notes, every anchor landing
  and every qualified address resolving. `content-build lint` reports the same 15
  pre-existing findings as `main`, unchanged in kind and count.

  **Bump**

  _Patch._ Authoring form only. The compiled documents are identical.

- 434e3ad: **Declare `sohl` 0.8.3 verified**, from `0.8.2`, so the actors pass resolves
  against that release's item catalogue. Only
  `relationships.systems[].compatibility.verified` moves; the top-level
  `compatibility` still names the Foundry core build (`14.359`/`14.364`) and is a
  different claim entirely.

  **The eight combat techniques resolve.** `bflkbite`, `bflkgrab`, `bflkheadbutt`,
  `bflkkick`, `bflkpunch`, `limbblock`, `press` and `trip` existed only on sohl
  `main` and ship in `0.8.3`. Seven beings cite each, so all **56** of those
  errors are gone.

  **The pass is still red, and the packs still do not build.** Errors fall from
  **614 to 519** — the 56 above plus 40 other addresses the new catalogue
  supplies. What remains is this repository's own authoring debt, which the
  config comment beside `packs:` already predicted: 249 notes typed `place`, a
  type no build knows; 233 malformed wikilinks and unknown folder ids; 36
  addresses that exist nowhere, 38 of the original 76 being `miscgear:torch`.
  Each is tracked separately.

  **One error is new, and it is a real find** (#139). `0.8.3` is the first sohl
  release to ship a `schema.json` descriptor, so package-build's
  emitted-vs-declared schema check now has something to compare against and grades
  emitted-but-not-declared as an error. It reports that 496 beings compile a
  `system.body.structure.adjacent` adjacency graph that **no sohl release has ever
  defined** — Foundry has been discarding it at load all along. Visible now, not
  newly wrong.

  **Evidence.** `content-build package compile` at `0.8.2` reports 614 errors and
  642 actors compiled to JSON with no LevelDB pack; at `0.8.3`, 519 and the same 642. The eight techniques go 56 → **0**. The repository's own red state is
  untouched: `content-build lint` reports the same **1,983** content findings and
  `content-build links` the same **109**, both byte-identical line for line
  against a pristine `origin/main` baseline. Lint gains 26 findings on top of
  those 1,983 — all `declared, not emitted` **warnings** from the newly readable
  `schema.json`, the benign direction, where a field simply takes its `initial`.

  **Two of #54's four fields are now declared.** `affiliation.relation` (281
  items) and `mystery.skillAptitudes` (12) are defined at `0.8.3`; this repository
  no longer emits `assocMysteryCode` or `isEquipped`. No compiled _item_ carries a
  key `0.8.3` does not define.

- 4f25d19: Restore the required `archetype` on the totems, and give Astrokýklos an item
  folder.

  Both are regressions from #62, and together they broke the pack build on `main`:
  `content-build package compile` reported 45 errors and refused to compile.

  `sohl.archetype` is required — a number, or `null` for "not an archetype" — and
  the affiliation block that replaced the totems' mystery block did not carry it.
  It had been there, as `archetype: null`, on all 44.

  `Astrokýklos` moved from `doc` to `affiliation` in the same change, which moves
  the document from a JournalEntry to an Item — and its `folder` still named a
  **journal** folder, which no longer resolves. It now uses the item folder of the
  same name, `22zncJuZCvjO7YSY`, where its own twelve birthsigns already live.
