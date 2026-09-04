---
"sohl-thalorna": patch
---

**Drop the inert `publish.address.landing` key.** package-build 13.0.0
(package-build#208) removed the landing concept outright — `sectionOf` is gone,
pages emit flat, and there is no `readme` or `collection` rule left to select
between. `landing` survives only as a value that is validated and then ignored:
`contentAddress` destructures it, checks it against `LANDING_RULES` (now the
single-element `["readme"]`, whose own doc comment reads _"Inert since #204"_)
and never reads it again.

The key outlived its mechanism because `content-config.mjs` has no warning
channel — every finding throws — so deleting it upstream while consumers still
declared it would have errored on a statement that was still true. This is the
middle of the three steps `package:` took: retire the value, have consumers drop
the key, then delete the key with a targeted refusal. It unblocks the last one.

**Nothing changes at build time.** `DEFAULT_ADDRESS_SCHEME` is
`{ prefix: "", landing: "readme" }`, and `normalizePublish` falls back to it when
`address.landing` is undefined, so the omitted key resolves to exactly the value
it was written with. `address:` itself stays, because it still carries
`prefix: ""` — dropping the block would leave the mount to a default rather than
to a decision.

**Evidence, before and after on the same worktree, both at 13.0.0.** Every check
is identical once log timestamps are stripped; the three this tree is
legitimately red on are red **line for line**, not merely equal in count.
`lint:format` clean (1,924 files); `lint:markdown` 146 findings (#111);
`lint:addresses` 1,983 findings across 1,852 notes; `lint:content-links` 122 link
problems (#34, #44). `build:compiledb` reports the same findings from the same
lines and emits pack JSON byte-identical across all 2,364 files.
`build/manifests/thalorna.json` (2,585 entries from 1,851 addressable notes) and
`build/stage/module.json` compare equal byte for byte. `build:site-content`
writes the same 1,863 files, and rendering them with Hugo gives a byte-identical
site — 2,578 files, `diff -r` clean.
