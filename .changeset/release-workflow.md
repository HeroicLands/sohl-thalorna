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

**This is a Foundry module, not an npm package**, and nothing said so: it was
the only one of the three that did not declare `private: true` — the system and
`sohl-kethira-basic` both do. It does now.

That flag is not free-standing. Changesets 3 versions a private package **only**
if told to: `privatePackages.version` defaults to `false`, so a private package
with no declaration is bumped by nothing and the run reports success. Verified
against this repository's own twelve changesets — without the declaration,
`changeset status` prints _"Packages to be bumped:"_ and lists nothing. So
`.changeset/config.json` declares it, matching the other two.

The `@changesets/cli` bump from `^2.28.1` to `^3` is what makes that
load-bearing rather than defensive. Changesets 2 versioned private packages by
default, which is why the flag could have been added on its own without
anything appearing to break — and why it would then have broken silently on the
next major. Every other repository in the project is already on 3.

Two script corrections come with it:

- `changeset:check` ran `changeset status`, spelled `changeset check` — not a
  command. It exits 1 with _"Invalid command check was provided"_, so it failed
  loudly rather than silently, but it has never once reported on a changeset.
- `changeset:version` now refreshes the lockfile, so `package-lock.json`'s root
  `version` follows `package.json` instead of trailing a release behind.
