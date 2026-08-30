---
"sohl-thalorna": minor
---

**This repository moves to `@heroiclands/package-build@^6.0.0`, which stops
emitting `isEquipped` on compiled gear and reports that the `actors` pack was
outside the `Thalorna` folder.**

The declared range becomes `^6.0.0` and the lockfile resolves 6.0.0. That is the
only entry the lockfile moves; nothing transitive changes. A caret does not cross
a major, so Dependabot would never have offered it.

**`isEquipped` is gone from what this build compiles — and mostly still present
in what it inherits.** The pack builder emitted `system.isEquipped: false` on
every gear item, and no SoHL data model has declared that field since worn and
equipped became armour-only (HeroicLands/package-build#68). `build/packs-json`
was compiled at 5.0.0 and at 6.0.0 from the same tree and compared
**key-ordered** — every leaf flattened to an ordered `path=value` sequence and
the sequences compared, rather than by deep equality — so ordering is proven
preserved rather than assumed:

|                                             | Before (5.0.0) | After (6.0.0)                    |
| ------------------------------------------- | -------------- | -------------------------------- |
| Files                                       | 2,555          | 2,555 — none added, none removed |
| Leaf keys                                   | 922,278        | 922,181                          |
| Keys removed                                | —              | **97**, every value `false`      |
| Keys added                                  | —              | **0**                            |
| Values changed                              | —              | **0**                            |
| Documents whose surviving-key order changed | —              | **0**                            |

Every one of the 97 is an `isEquipped`: 96 at `system.isEquipped` in the `items`
pack, and one at `items[].system.isEquipped` on the Talwar carried by _Eshe wa
Magara_ — an item this repository authors.

_**2,018 `isEquipped` keys went into the compile and 1,921 are still there, and
that is not a failed fix.**_ This package's beings resolve their embedded items
against the pinned `sohl@0.8.2` release packs through `itemCatalog`, and those
documents were compiled by an older package-build and are copied through
verbatim. Of the 189 distinct `(type, shortcode)` items still carrying the key
after the bump, 188 are in the cached `sohl@0.8.2` catalogue by that exact
address, and the 189th — `armorgear:WSplSkirt` on _Elyse Skyrn_ — is the
catalogue's `WSkirt` with its shortcode overridden in frontmatter. Not one is
authored here. **They will clear when `sohl` cuts a release built with 6.0.0 and
`relationships.systems[].compatibility.verified` is bumped to it**, and not
before, so a grep for `isEquipped` in `build/packs-json` after this change still
returns 1,921 hits by design.

**The `actors` pack now sits inside the `Thalorna` folder (#95).**
`packFolders` is compared against the packs a package ships
(HeroicLands/package-build#81), and of the six HeroicLands packages this is the
only one it reported:

```text
package-build.config.yaml:100:13: warning: packFolders: pack "actors" is named by no folder,
  so it ships outside every folder this package declares                            (exit 0)
```

That is an omission rather than an arrangement, and the history says so. The
folder was written naming `items` and `journals` under a comment reading "names
only the packs this build compiles", which was true then; #69 turned the actors
pack on and re-added it to `packs:` without extending the folder, and nothing
compared the two until now. So `actors` joins the folder, everything this package
ships appears together in the compendium sidebar, and the config comment states
the rule that keeps them in step. The generated `module.json` is otherwise
unchanged — 22 keys, 3 packs, one folder — and the warning is gone.

Because a clean run prints nothing, the check was confirmed to actually fire
rather than merely be silent, by a throwaway edit to the config, reverted:

```text
package-build.config.yaml:106:21: error: packFolders: folder "Thalorna" names pack
  "nosuchpack", which this package does not ship (packs: items, journals, actors)   (exit 1)
```

Both severities behave as documented: an unresolvable name is fatal and no
manifest is written; an ungrouped pack warns and the build continues.

**"Order is load-bearing" is no longer true, and the one place that said so is
corrected.** Compile order is derived from what each pass reads
(HeroicLands/package-build#73), so the declared order of `packs:` stops
mattering. The claim appears exactly once in this repository, in the comment
above `packs:`; the dependency it describes is still real, and what changed is
that the toolchain enforces it rather than the list. Proven by declaring
`actors` first in a throwaway edit, reverted: the build logged

```text
Pass order: items, actors, journals — a pass that reads another's output compiles after it,
whatever order `packs:` declares.
```

and emitted `build/packs-json` byte-identical to the declared order, with the
same 143 pre-existing errors. The adjacent claim in the same comment — that a
cold catalogue cache "fails saying so" — was re-checked and still holds:

```text
[ERROR]: sohl declares `itemCatalog: true` but has not been fetched.
         Run `content-build deps fetch` first.
```

**The homepage's own links are checked now** (HeroicLands/package-build#54), and
`assets/content/homepage.md` passes. This one needed forcing too, because the
page carries no addresses at all — its body is empty and its `landing:` is
`cards: {source: sections}` — so passing proves nothing on its own. Two throwaway
edits, reverted, confirmed both halves of the rule reach this file:

```text
assets/content/homepage.md:39:3: error: body: wikilink [[doc-nosuchnote|dead wikilink]] on the
  package homepage — a homepage is published verbatim in every publishing mode, so nothing
  resolves it; write a markdown link, package-relative
assets/content/homepage.md:36:12: error: landing.cards[0].url: url "/thalorna/Regions/" is
  root-relative, but a landing's url: is resolved against the site — write "Regions/", or
  href: for an address that is already resolved
```

**The TypeDoc symbol map (HeroicLands/package-build#75) cannot reach this
repository**, and that was checked rather than assumed: it lives in
`sohl/kb-passes.mjs`, read only by `content-build site` from
`site.passOptions.symbolMap`. This repository runs neither — it declares no
`site:` block, and its pages are written by `utils/build-site-content.mjs`.

**The local site emitter was checked against the major before the bump.** Of the
nine `@heroiclands/package-build/engine/*` modules `utils/build-site-content.mjs`
and `utils/site-wikilinks.mjs` import, seven are byte-identical across the major
and the two that changed — `homepage.mjs` and `pack-config.mjs` — changed by
addition only: `homepageAddresses` / `HOMEPAGE_ADDRESS_KEYS` and
`packConfigPath`, none of which this repository binds. Every name the two
emitters import still resolves. The engine's own homepage writer in
`site-build.mjs` changed by comment alone, so both emitters still publish the
homepage verbatim, exactly as they did at 5.0.0.

Everything else is unchanged and was measured, not assumed, on a clean build of
each version: the compiled `build/packs-json` differs only in the 97 keys above,
with its 143 pre-existing errors (the `sohl` 0.8.2 pin, #6) reported line for
line; `build:link-manifest` emits the same 2,345 entries, byte-identical;
`build:site-content` writes the same 1,721 files; the rendered site is
byte-identical across all 2,510 files, 2,502 of them pages, the two live landings
included; the build stage is byte-identical; and `lint:format` (clean, 1,775
files), `lint:markdown` (146), `lint:addresses` (2) and `lint:content-links` (68)
report findings identical line for line.
