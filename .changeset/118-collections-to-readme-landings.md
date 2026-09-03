---
"sohl-thalorna": patch
---

**Section landings are `README.md` notes now, and the twelve index pages that
landed nowhere publish again.** `publish.address.landing` moves from
`collection` to `readme`, retiring this package's use of the second landing
mechanism ahead of package-build deleting `section:`, the `collection` landing
rule and the `collection` subType from the content format. A landing is a
directory's `README.md` declaring `type: doc` and the `subType` that **is** its
section, so `Characters/README.md` (`subType: being`) lands `/thalorna/being/`
where `Collections/Beings.md` (`subType: collection`, `section: being`) did.

**Six of the eighteen collection notes were landings; twelve were not** (#118).
A section can be landed once, and Settlements, Locations, Regions, Continents
and Worlds are all views over `place`, Polities and Companies over
`affiliation`, Peoples over `lore` — so no value of `section:` could ever have
made them addressable, and none of them declared one. They were not "falling
back to a slug": `landingOf` read `fm.slug`, which no note in this tree carries,
so each was reported _"collection note declares no `section`, so it lands
nowhere"_ and published no page at all. The site build failed on the eighteen
wikilinks that cited three of them.

They are index pages, not front doors, so they declare `subType: reference` and
address flat as `doc-<shortcode>` like any other page. That gives all twelve an
address for the first time and resolves those eighteen links, which now point at
real pages. The eight filed under `Collections/` move to the directory whose
section they index — `Affiliations/`, `Lore/`, `Regions/` — and `Collections/`
is gone.

**No published address moves.** The link manifest gains exactly the twelve
entries and loses none; every one of the 2,573 existing entries keeps its path,
including all six landings (`being/`, `affiliation/`, `lore/`,
`mysticalability/`, `reference/`, `scenario/`). The recorded URL history is
untouched, so `/thalorna/character/` and `/thalorna/creature/` still redirect to
the Beings landing; `/thalorna/section/companies/` and `/thalorna/section/`,
dead while Companies published nothing, answer again.

**`build/packs-json` differs in exactly one document** — the `References`
journal, whose table now lists the twelve reference pages. No document is added,
removed, renamed or refoldered: 717 items, 719 journals and 642 actors before
and after, ids and `folder:` unchanged by the file moves.

The site emitter is a local fork of the engine's (#85), so it carries the same
flip: a landing is a `README.md` and its segment is `sectionOf(fm)`. Only that
rule changed there; aligning the fork wholesale is still #85's.

`content-build links` reports the same 122 problems as `main` (65 unlabelled
wikilinks, 57 non-addresses) and `content-build markdown` the same 146, both
pre-existing. `content-build lint` drops from 2,001 findings to 1,988: the
eighteen `subType: collection` rejections become five READMEs whose subType is a
section rather than a `doc` genre, which is package-build#197 and is fixed
there.
