---
---

No release of its own: this adds the machinery that cuts releases, and changes
nothing the module ships.

This repository has accumulated changesets since `0.0.1` with nothing to consume
them, because it had no release workflow — only `labels-sync` and
`no-attribution`. `build:pack-release` could package a module, but a person had
to run it and cut the tag by hand, so an unreleased state was an absence nobody
could see.

The workflow mirrors the system repository's: merging a pull request opens or
updates a **Version Packages** pull request, and merging _that_ builds,
packages, tags `v<version>` and creates the GitHub Release carrying
`module.zip` and the `module.json` an installed module updates against.

Two script corrections come with it:

- `changeset:check` ran `changeset status`, spelled `changeset check` — not a
  command. It exits 1 with _"Invalid command check was provided"_, so it failed
  loudly rather than silently, but it has never once reported on a changeset.
- `changeset:version` now refreshes the lockfile, so `package-lock.json`'s root
  `version` follows `package.json` instead of trailing a release behind.
