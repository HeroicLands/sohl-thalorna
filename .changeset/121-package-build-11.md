---
"sohl-thalorna": minor
---

**This repository moves to `@heroiclands/package-build@^11.0.0`, whose major
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
