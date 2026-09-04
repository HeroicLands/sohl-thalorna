---
"sohl-thalorna": patch
---

**Take `@heroiclands/package-build` 13.0.0**, crossing three majors from
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
