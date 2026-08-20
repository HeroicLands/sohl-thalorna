---
"sohl-thalorna": minor
---

**One content type for actors: `character` and `creature` are now `being`.** Both
already compiled to the same Foundry `being` and nothing in the toolchain branched
on which name a note declared — but the type is also a wikilink qualifier and this
site's URL segment, so the split meant two addresses for one kind of thing.

All 644 actor notes move, along with the 262 `[[character-…]]` / `[[creature-…]]`
wikilinks that address them and each note's own `type-shortcode` alias — the
string that makes `[[type-shortcode]]` resolve in Obsidian.

**387 published URLs move**, from `/thalorna/character/…` and
`/thalorna/creature/…` to `/thalorna/being/…`. Every one of them redirects from
the address it really had: the addresses were captured from a build of the tree
as it stood, rather than re-derived, so the recorded history is what the site
actually served.

**CDN artwork is unaffected.** `artwork` is the name a portrait was uploaded
under, taken from the earliest address on record — so the new rows are appended,
never prepended, and the ten pages that already carried older history keep
pointing at the same files.

The two collection landings merge with their sections: `Characters` and
`Creatures` become one `Beings` at `/thalorna/being/`, redirecting from both old
landing addresses, keeping the journal id so the compiled document does not move,
and carrying `doc-characters` and `doc-creatures2` as aliases so links written to
either still resolve.

**Beings still show their profile sidebar.** The site build gated its sidebar
derivation — the flattened `skills` map, grouped `gear`, `spells` and `talents`
the theme reads — on the retired type names, and the shared theme chose between a
character and a creature partial the same way. Both now key on `being`
(HeroicLands/heroiclands-hugo-theme#17).

Requires `@heroiclands/content-build` 0.4.0 (HeroicLands/content-build#5), which
retires the two names and reports a note or link left on either rather than
quietly routing it to the items pack. That release also carries the lazy-config
change, so `build-site-content` and `build-link-manifest` read `contentPackage()`
and `foundryPackageId()` through the accessors that replaced the constants.

Nothing in the compiled packs changes: this repository declares no `actors` pack,
so its actor notes compiled to nothing before and after.

(Closes #20.)
