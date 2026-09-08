---
"sohl-thalorna": patch
---

**The Aediles become an affiliation, and Magnápolis links to them again.**

They were one of the sixty-seven targets unlinked in the previous commit for naming no note — three
references in `Magnapolis_City.md`. They now have one.

**An anchor was the first choice and did not work.** `affiliation-curiaurbis` documents the Aediles
in full under `## The Civic Courts`, so linking there would have avoided duplicating anything — but
the anchor does not land. A heading is only addressable when it declares an explicit `{#slug}`, and
that one does not, so `lint:content-links` rejected it. Hence a note.

It earns its place regardless: an affiliation is something a character can belong to, which an anchor
into someone else's prose is not. The Aediles get a four-rank ladder built from what the existing text
already says about them:

| Rank                     |                                                                                                                         |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| **Aedile**               | Magistrate of a ward — markets and licenses, weights and measures, building and sanitation, nuisance and petty disorder |
| **Inspector**            | Walks the quarter and applies the law at the door; shutters, fines, condemns                                            |
| **Ward Clerk**           | Keeps the registers, and sees every transaction the ward makes                                                          |
| **Struck from the Roll** | Dismissed with the record endorsed, which closes every civic office in the city                                         |

`oligarchy`, not `council`: each Aedile holds one quarter and answers upward to the Curator of Law
rather than to his colleagues. There is no bench to appeal to — which is the structural reason the
office is worth buying.

The note takes seriously that they are, in the corpus's own words, _"famously bribable"_ and that
bribing them is _"one of the city's oldest and most reliable industries"_. That is treated as a
property of the design rather than a lapse: the district law is dense enough that almost any premises
is in breach of something, the inspection is the instrument that finds it, and the inspector who
schedules it has a great deal to sell. What the money buys is rarely acquittal — it is the inspection
that does not happen.

Parented to `curiaurbis`, seated at `magnapolis`, allied to the City Watch that supplies the muscle
behind its rulings.
