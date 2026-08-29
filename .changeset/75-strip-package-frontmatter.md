---
"sohl-thalorna": patch
---

**The retired `package:` frontmatter is gone from every content note.** All 1,716
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
