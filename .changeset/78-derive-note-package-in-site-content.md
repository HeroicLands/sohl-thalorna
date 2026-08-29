---
"sohl-thalorna": patch
---

**The site build emits pages again, carrying their package: it kept a private
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
