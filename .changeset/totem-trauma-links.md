---
"sohl-thalorna": patch
---

**The totem archetypes now link their trait and disorder to the real trauma pages.**

Each of the 44 notes ended with two parenthesised names — `Minor Trait (Decisive)`, `Major Disorder
(Chronic Anger)` — that were plain English. Every one of them names an actual SoHL `trauma`, and
nothing connected them: 88 references that resolved to nothing, validated by nothing, and silently
rotting if a condition were ever renamed.

The mapping turned out to be exact, with no near-misses:

- **Minor Trait — 37 of 37** are `psycond/Behavior` conditions. Not one strays outside that folder.
- **Major Disorder — 13 of 13** match, drawing from both: ten from `psycond/Behavior` and three
  (_Anxiety_, _Depression_, _Obsessive_) from `psycond/Psychosis`. The split reads as deliberate —
  a totem's disorder is usually its behaviour turned pathological, and occasionally an actual
  psychosis.

All 88 are now `[[sohl-none-doctrauma-…]]` links to the documentation pages, covering 49 distinct
conditions. Picking the Bull hands a reader
[Decisive](sohl-none-doctrauma-decisive) and [Chronic Anger](sohl-none-doctrauma-angerchr) rather
than two words in brackets to go and look up.

**The physical half is deliberately left as prose.** Testing the `Physical:` lines the same way
returns **0 of 44** — and the mismatch is categorical rather than a naming variation. The totems
describe build and bearing ("large, robust frame"); `physcond` names pathologies and marked
variations (Clubfoot, Gigantism, Vitiligo, Scoliosis). A totem shapes temperament, which the system
models; it does not inflict pathology, which is what `physcond` is for.
