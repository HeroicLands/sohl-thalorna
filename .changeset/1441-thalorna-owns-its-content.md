---
"sohl-thalorna": minor
---

**Thalorna owns its content, and builds without the vault.** The 1,740
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
