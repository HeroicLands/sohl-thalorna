# `utils/packs/` — a vendored copy, and why it is one

Every `.mjs` here except `content-package.mjs` is a **copy of the same file in
`Song-of-Heroic-Lands-FoundryVTT/utils/packs/`**, taken at commit `4094ed5ad9`.
`utils/content-tables.mjs` and `utils/content-slug.mjs` come from that
repository's `utils/`, and `default-item-art.mjs` from its `src/utils/`.

## Vendored, not packaged

Issue #1441 asks for the compiler to be "shared rather than forked — extracted
to a package both repositories depend on, or reduced to a single copy by another
agreed means." This change takes the second option, deliberately.

Extracting a package would mean publishing a build tool to a registry (or wiring
a workspace across two repositories that are cloned independently), versioning
it, and releasing it — and then every compiler change would land as a release
before either repository could use it. That is a lot of moving parts to remove
one `cp`, and it buys nothing until there is a third consumer.

What a fork actually costs is _undetectable drift_: two copies diverging quietly
because nobody can see that they have. A vendored copy taken wholesale at a named
commit does not have that problem, because the divergence is a `diff` away:

```sh
diff -ru ../Song-of-Heroic-Lands-FoundryVTT/utils/packs utils/packs
```

The previous arrangement was a fork in the bad sense. #1441 described these files
as byte-identical copies; by the time it was picked up they were not — `items.mjs`
differed by 814 lines, `journals.mjs` by 501, `helpers.mjs` by 351 — and the two
had become different architectures (vault → committed `_source/` here, content
tree → disposable `build/packs-json/` there). Nothing had reported that.

Packaging remains the better end state, and this leaves it strictly easier: the
copies are identical again, so extracting one is now a mechanical move rather
than a merge.

## Deltas from upstream

Kept as small and as few as possible, so the `diff` above stays readable.

1. **`content-package.mjs`** (new). Names the package this repository compiles.
   `items.mjs`, `journals.mjs`, and `actors.mjs` import `CONTENT_PACKAGE` where
   upstream hardcodes the string `"sohl"`. This is the difference the vendoring
   exists to express.

2. **`helpers.mjs` — `resolveRelation` accepts an empty sequence.** Obsidian's
   property editor renders an empty map as `relation: []`, which says exactly
   what `{}` says. Upstream has no such case and throws. This is a _local fix
   that predates the vendoring_ and is ahead of upstream, not behind it —
   dropping it fails 43 affiliation notes. It belongs upstream; until it lands
   there, it stays here.

3. **`build-compendiums.mjs` reads `module.template.json`.** Thalorna ships as a
   Foundry _module_, so the pack list is in the module manifest; there is no
   `system.template.json` here.

4. **`generate.mjs` does not compile the actors pack.** A Thalorna actor's
   nested items are addressed by shortcode (`attribute:str`, `skill:awar`) and
   almost all of them are defined by the **`sohl`** package, which this
   repository does not hold — a trial run compiled 145 actors while reporting
   14,087 unresolved item references. The pack has always shipped empty (the
   retired vault exporter did not compile actors either), so nothing regresses.
   `actors.mjs` and `assets/content/actor-folders.yaml` are kept in place: once
   the `sohl` catalog is available at build time, re-enabling it is one entry in
   `DEFERRED_PACK_CONFIGS` and nothing else.

Doc comments were adjusted where they described the retired vault export or
named the wrong package. Those are comment-only and carry no behaviour.

## Updating the copy

Re-copy the files, re-apply the four deltas above, then run
`npm run build:compiledb` and check the document counts against the previous
build. The compilers are strict, and a note that stops compiling is reported by
name.
