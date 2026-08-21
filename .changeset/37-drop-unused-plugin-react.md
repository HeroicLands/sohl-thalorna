---
"sohl-thalorna": patch
---

**Drop the unused `@vitejs/plugin-react`, which was blocking every install.**

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
