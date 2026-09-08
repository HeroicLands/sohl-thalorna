---
"sohl-thalorna": patch
---

**The First Gods are a spirit tradition with no clergy, and a dangling reference is repaired.**

The Áelendan pantheon carried Excommunicate → Hierophant with a Sacristan, an Almoner and a Lector,
over a body containing **zero** occurrences of the word "priest" and four of "shaman" — and which
states of the Two Powers that they _"are not petitioned, are not invoked by name in ceremony, and do
not receive offerings of their own."_ A pantheon nobody petitions cannot have a priesthood, and the
Áelendan do not have one.

- `subType` becomes `spirittradition`, and the ranks are the Old Way's: **Exiled → Untaught →
  Marked → Apprentice → Shaman → Elder Shaman**. One tradition, one ladder — the pantheon has no
  standing of its own to confer, only the standing the Old Way confers.
- **`relations.thekindred` is repaired.** When the Kindred became a `lore` note, the First Gods'
  affiliation-relation to it was left dangling — a relation can only address an affiliation. The
  Kindred now appear in `lore`, where they belong.

The Áelendan structure is now consistent end to end: two Powers too vast to petition, the Kindred
who are actually venerated, the Old Way that does the venerating, and the Kindred Pact the Wardens
enforce.
