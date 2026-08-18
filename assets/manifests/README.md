# Vendored link manifests

One `<package>.json` per package this repository links **into** but does not
publish — the cross-package link manifest described in #1446 and #1499.

Each file is produced by that package's own build (`build/manifests/`) and
copied here. It maps a note's canonical address to everything needed to link to
it: the web `path`, the Foundry `uuid`, an item's `doc` address, and the
`anchors` its named sections compiled to.

```json
{
  "version": 4,
  "package": "sohl",
  "foundryPackage": "sohl",
  "entries": {
    "sohl-skill-lang": {
      "path": "kb/skill/language/",
      "name": "Language",
      "uuid": "Compendium.sohl.items.Item.WRboU6egxMwB6fnx",
      "doc": "sohl-docskill-lang"
    }
  }
}
```

**Do not hand-author these.** A manifest asserts that a document exists at the
address it gives; inventing one produces a link that resolves at build time and
dead-ends in Foundry.

**Re-vendor after the other package changes its content.** The `version` field
makes a stale _format_ an error, but it cannot detect stale _content_ — a note
added there is simply unlinkable here until the file is copied over again.
