---
"sohl-thalorna": patch
---

**The six section landings are ordinary notes now, addressed `doc-<type>` like
every other page.** A page that introduces the notes of a type is a note named
by convention — `type: doc`, `subType: reference`, `shortcode: <type>` — and is
reached by a link, not by owning a URL mount. This is step 1 of
HeroicLands/package-build#204, done here first: package-build still requires a
landing's frontmatter to be a `README.md` declaring a `subType` that _is_ a
section, so the content has to stop depending on that before the engine drops
`README` landings, the `section:` key, `publish.address.landing`,
`writeSectionLandings`, `_index.md` synthesis and `sectionOf`.

| Old note                       | New note                                   | Old address        | New address            |
| ------------------------------ | ------------------------------------------ | ------------------ | ---------------------- |
| `Adventures/README.md`         | `Adventures/Adventures.md`                 | `scenario/`        | `doc-scenario/`        |
| `Affiliations/README.md`       | `Affiliations/Affiliations.md`             | `affiliation/`     | `doc-affiliation/`     |
| `Characters/README.md`         | `Characters/Beings.md`                     | `being/`           | `doc-being/`           |
| `Lore/README.md`               | `Lore/Lore.md`                             | `lore/`            | `doc-lore/`            |
| `Mystical_Abilities/README.md` | `Mystical_Abilities/Mystical_Abilities.md` | `mysticalability/` | `doc-mysticalability/` |
| `Reference/README.md`          | `Reference/References.md`                  | `reference/`       | `doc-reference/`       |

**Six previously stable addresses move.** #118 was explicit that no published
address changed — each landing kept the exact URL its collection note had. This
change moves all six, deliberately: a landing that is addressed by a section is
the thing being retired, and an address is `(type, shortcode)` or it is not an
address. `/thalorna/affiliation/`, `/thalorna/being/`, `/thalorna/lore/`,
`/thalorna/mysticalability/`, `/thalorna/reference/` and `/thalorna/scenario/`
each stop serving the authored page and begin serving Hugo's generated listing
of that section — five of the eleven sections were already such a stub, so the
shape is not new. No redirect is recorded: nothing is added to
`assets/legacy-urls.json`.

**Each shortcode is the type the page introduces**, which is the convention the
issue settles: `scenario`, `affiliation`, `being`, `lore`, `mysticalability`,
`reference`. Only `lore` was already spelled that way; the other five were
abbreviations of a display name (`adventures`, `affiliatns`, `beings`,
`mystclblts2`, `references`) — the derivation #181 took out of the addressing
path. All six are `^[A-Za-z0-9]+$`, so `doc-affiliation` parses on the hyphen
the way every other address does, and none collides with the fifteen `doc`
shortcodes already in the tree.

**One inbound citation was repointed**: `Lore/Thalorna.md` cites the beings
catalogue twice, `[[doc-beings|…]]` → `[[doc-being|…]]`. No other note, and no
note in `sohl` or `sohl-kethira-basic`, names any of the six.

**`assets/legacy-urls.json` gains nothing and loses nothing.** Two existing keys
follow their notes' shortcodes — `doc:affiliatns` → `doc:affiliation` and
`doc:beings` → `doc:being` — because the file is keyed `type:shortcode`, and
leaving the old spellings would silently strand six historical redirects
(`/thalorna/arcane-domain/`, `/thalorna/faith/`, `/thalorna/organization/`,
`/thalorna/pantheon/`, `/thalorna/character/`, `/thalorna/creature/`) and change
both pages' `artwork` name. The recorded URLs themselves are untouched, and the
site publishes the same 446 aliases as before.

**The link manifest keeps all 2,585 entries.** Five keys are re-spelled and one
path moves (`thalorna-doc-lore`); every `uuid` and `$lead` anchor is unchanged,
so nothing that resolves through Foundry moves at all. The vendored copy in the
system repository (`assets/manifests/thalorna.json`) is a snapshot and needs
refreshing there.

**`build/packs-json` differs in one document.** `References` lists five more
rows — Adventures, Affiliations, Beings, Lore and Mystical Abilities are `doc`
notes of `subType: reference` now, so its own query finds them. Counts are
identical either side: 849 items, 822 journals, 693 actors, ids, folders and
page ids unchanged, and `content-build package compile` reports the same 620
errors as `main` (sohl 0.8.2 predates ~100 addresses these beings name).

**The site emitter is a local fork of the engine's (#85) and needed no change.**
Its README-landing branch is simply never taken now; the six notes route through
the ordinary path and the stub generator covers all eleven sections instead of
five. Aligning the fork wholesale — and the double `/thalorna/` prefix every
`url:`-bearing page is published under, which predates this change and affects
all 1,851 of them — is still #85's.

**Rendered rows are unchanged where the query is**: Affiliations 204, Beings
646, Mystical Abilities 221, Lore 180, Adventures 20. References goes 16 → 21,
which is the five pages above joining the genre they now declare.

`content-build links` reports the same 122 problems as `main`, line for line (65
unlabelled wikilinks, 57 non-addresses), and `content-build markdown` the same 146. `content-build lint` drops 1,988 → 1,983: exactly the five READMEs whose
`subType` was a section rather than a `doc` genre, which is the defect this
change exists to remove.
