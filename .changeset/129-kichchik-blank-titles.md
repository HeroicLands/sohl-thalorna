---
"sohl-thalorna": patch
---

**Give the fifteen K'ich'chik polities their names back (#129).**

Each of the fifteen authored `title: ""` while carrying its real name only in
`name.full`, so each published as an empty anchor and the fifteen sorted to the
front of `/thalorna/affiliation/`, above every named entry. The pages were
always wrong; declaring `listType` in #128 only made the section landing display
them.

The site emitter builds a page's title as `fm.title ?? name`. `??` is nullish
coalescing, so an authored `""` is a value and wins, while an **absent** `title`
falls through to `name` — which is `fm.name?.full` for a content page. Removing
the key is therefore the whole fix, and it keeps the name in one place rather
than copying it into a second one to be kept correct.

The key is removed rather than set to `null` because on an `affiliation` note
`title` is not only the page title: it is also a declared item field — _the
style of address the office carries_, a string defaulting to `""` — and the
compiler reads it from the note's top level. Absent, it compiles to that
default and `build/packs-json` is byte-identical; written as `null` it compiles
to the literal string `"null"`. The compendium documents, the published link
manifest, and all 2,125 rendered page addresses are unchanged.
