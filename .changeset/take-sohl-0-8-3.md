---
"sohl-thalorna": patch
---

**Declare `sohl` 0.8.3 verified**, from `0.8.2`, so the actors pass resolves
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
