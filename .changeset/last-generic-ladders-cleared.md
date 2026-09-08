---
"sohl-thalorna": patch
---

**The last thirteen affiliations come off the generic ladder — and two of the three cases turn out to
be about traditions that have no priesthood at all.**

This clears the boilerplate theocracy ladder (Excommunicate → Hierophant, with Sacristan/Almoner/
Lector offices) from the whole tree. **Affiliations still on it: 13 → 0.**

**The eleven Varṇakan notes were wrong twice over.** They carried a priest ladder, and Varṇaka has no
priesthood attached to any god: ordination is into a **sampradāya**, a school, which then serves
whichever gods its doctrine requires. That is why the four traditions name their clergy precisely and
the eleven deities name none — the pantheon organises by school, not by god.

So what a devotee holds toward a Varṇakan god is the household observance, and beyond it that god's
**Ordeal for Favour**. Three ranks: **Patita** ("Fallen"), **Upāsaka** (the lay devotee — for most of
the faithful, the whole of it), and **Vratin** ("one under vow"), who has completed an ordeal. Since
there is no priesthood, the ordeal is the only standing the devotion confers, and it is held for
life.

The **offices are the ordeals themselves**, taken verbatim from each note's `## Ordeals for Favour`
section — The Fair Measure, The Vigil of Final Breath, The Walk of Coals, The Perfect Stone, The Walk
of the Empty House, and so on. In a cult with no clergy there is no other role to hold, and this
makes the affiliation usable for a character: _rank Vratin, office The Fair Measure_.

**Two gaps found along the way, both now closed:**

- The four _sampradāya_ I did in the previous commit got their Key Skills wired but **not their own
  ritual skill**. Added: `agnipantha`, `svapnasarisamaja`, `trimurtisampradaya`, `vyalendravada`.
- **Svapnadēvas has no ritual skill** and I did not invent one — it is a Spiritual Court rather than
  a god, so its absence may well be correct, but flagging it in case it is an oversight.

**Thári'vaan** documents its ladder fully in a `### Ranks and Formation` section, four ranks _"each
defined less by hierarchy than by the kind of responsibility held"_ — hence `council`, not
`theocracy`:

| Rank         | Gloss                            | Standing                                                    |
| ------------ | -------------------------------- | ----------------------------------------------------------- |
| kaan'sili    | "one who watches"                | Selected at 8–12; fifteen to twenty years of formation      |
| kaan'vaar    | "one who holds"                  | The working rank, taken for life; retirement not recognised |
| kaan'thári   | "one who keeps what came before" | ~200 exist; the memory of the tradition                     |
| sílhari'kaan | "clear-seer of the keepers"      | ~a dozen; convenes the councils                             |

Level 0 is **Unkept** — put outside the keeping of the Keepers of What Was Left, which in a society
whose whole institutional life is custodial leaves nothing else to belong to. The office **Bearer of
the Crisis** is the one worth noting: the sílhari'kaan carry, in strict confidence, how far the
structural failure has actually gone, and that knowledge does not descend.

**Nüszōk Rëit** is leaderless by doctrine, so it takes `confederation` and only three ranks. Its own
note is careful about this: _"no central leadership council exists — or if one exists, no member taken
into imperial custody has ever revealed its composition, which after decades of interrogation begins
to support the hypothesis that none exists."_ Ranks are **Lapsed**, **Approached** (under recruitment)
and **Committed** — the last defined by the act of irreversible commitment the cult deliberately
builds its recruitment toward, after which standing in the mainstream order cannot be recovered.
There is no rank above it that anyone has ever confirmed. Offices are Cell Operator, Intermediary
(purely message-bearing, knowing no operational detail, which is what survives interrogation) and
Recruiter.

I left Nüszōk Rëit as `faithtradition`. It could reasonably be `criminal` like the Yokveng — it is a
terrorist cult rather than a religion in any ordinary sense — but that is a call worth making
deliberately rather than as a side-effect of a ladder pass.
