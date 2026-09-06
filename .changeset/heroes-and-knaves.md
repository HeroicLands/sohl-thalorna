---
"sohl-thalorna": patch
---

**The `Heroes and Knaves` folder no longer shows as `Heros and Knaves` in the
journals compendium** (#155).

Folder `34iLZ9ZqAMnkSQhA` was declared in two folder files with two spellings —
`Heroes and Knaves` in `actor-folders.yaml` and the typo `Heros and Knaves` in
`journal-folders.yaml` — so the same folder read differently depending on which
compendium you were browsing.

Nothing compares the two folder files, which is the defect class
HeroicLands/package-build#257 closes by deriving a folder's materialisation from
a single note.
