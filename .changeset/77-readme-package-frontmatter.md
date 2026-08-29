---
"sohl-thalorna": patch
---

**`assets/content/README.md` no longer teaches the retired `package:` field.**
The frontmatter example that page shows every new note author declared
`package: thalorna`, and the prose below it listed the field among "four fields
load-bearing and easy to get wrong", explaining that "the compilers select on
it".

None of that is true any more. `@heroiclands/package-build@3.3.0` derives a
note's package from `contentPackage` in `package-build.config.yaml`, #75 stripped
the key from all 1,716 notes here, and step 3 of HeroicLands/package-build#56
makes authoring it a hard build error. The README is not a note — no frontmatter
of its own, and the example sits inside a code fence — so the compiler never read
it and nothing failed. It simply survived the sweep, teaching authors to write a
field that will shortly break their build.

The `package:` line is gone from the example, the load-bearing list is three
fields rather than four, and a new paragraph says where the package actually
comes from and that it must not be added back. The `shortcode` comment still
reads "unique within (type, package)" — that constraint is unchanged, the package
is simply no longer authored on the note — and the new paragraph names it
explicitly so the term has a referent without the field.

Documentation only (#77). No note frontmatter, no build behaviour, and nothing
compiled changes.
