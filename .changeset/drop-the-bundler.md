---
"sohl-thalorna": patch
---

Stop bundling the module's entry point, and drop `vite` with
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
