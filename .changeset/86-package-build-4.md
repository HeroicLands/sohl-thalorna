---
"sohl-thalorna": minor
---

**This repository moves to `@heroiclands/package-build@^4.0.0`, and deletes the
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
