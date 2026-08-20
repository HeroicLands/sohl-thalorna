---
"sohl-thalorna": minor
---

**The pack compiler is now the shared `@heroiclands/content-build` package, and
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
