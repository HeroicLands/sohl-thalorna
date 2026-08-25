---
"sohl-thalorna": patch
---

Restore the required `archetype` on the totems, and give Astrokýklos an item
folder.

Both are regressions from #62, and together they broke the pack build on `main`:
`content-build package compile` reported 45 errors and refused to compile.

`sohl.archetype` is required — a number, or `null` for "not an archetype" — and
the affiliation block that replaced the totems' mystery block did not carry it.
It had been there, as `archetype: null`, on all 44.

`Astrokýklos` moved from `doc` to `affiliation` in the same change, which moves
the document from a JournalEntry to an Item — and its `folder` still named a
**journal** folder, which no longer resolves. It now uses the item folder of the
same name, `22zncJuZCvjO7YSY`, where its own twelve birthsigns already live.
