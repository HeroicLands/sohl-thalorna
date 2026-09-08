---
"sohl-thalorna": patch
---

**The Kemetían cults take the temple hierarchy, which is one hierarchy for all twelve gods — and
Ápōphis, which has none.**

I had this pantheon down as having no documented clergy. That was wrong: `Kemetian_Pantheon.md`
carries a `## Temple Hierarchy` section giving the whole thing, and every faith note's
`## Organization` section elaborates it in that cult's own terms. Nothing here was invented.

Like the Āsháians and unlike the Aurèldían Twelve, Ta'Kheperu has **one** hierarchy, _"so ancient
that the Kheperi consider it divinely ordained"_ — **Wab** ("Purified One") → **Hem'Netjer**
("Servant of the God") → **Wer'Hekau** ("Great of Sacred Power"). The **Per-Aá** stands above all
three as nominal supreme priest of every god, so it takes level 5 on the pantheon note: _"all temple
authority flows downward from this claim"_, which is the throne's leverage over the cults.

Level 0 is **Rite-Denied**, and Ánubís's note supplies the weight — _"essentially every human being
eventually requires these priests' services"_ — so exclusion from the rites reaches past the end of
the life it is passed in.

Offices are each cult's own practice, and several were already named in the prose:

| Cult  | Offices taken from its own text                                                        |
| ----- | -------------------------------------------------------------------------------------- |
| Hâpi  | Keeper of the Wine Vaults, of the Granaries, of the Festival Calendar                  |
| Thōth | Keeper of the Astronomical Tables, of the Medical Texts, of the Architectural Plans    |
| Íšét  | **Sesh** (healer), **Hem'Netjer Djem** (male priest), Keeper of the Sacred Gardens     |
| Sēker | **Wer'Khat** (master embalmer), Warden of a Mortuary Temple                            |
| Sét   | Storm-Strategist, Keeper of the Scorch-Records, Channel-Warden                         |
| Rā    | Keeper of the Observatory, Initiate of the Hidden Names, Keeper of the Ápōphis Records |

Two of those are worth noting as a **lateral track**: Íšét's Sesh and Sēker's Wer'Khat are acolytes
who never advance to ordination and become accomplished healers and master embalmers instead —
offices, not ranks, since they are a way out of the ladder rather than a rung on it. Hâpi's chefs and
brewmasters and Thōth's secular scribes work the same way.

**Ápōphis refuses the pattern entirely.** _"There is no organized priesthood of Ápōphis; such a thing
is unthinkable within the orthodoxy of Ta'Kheperu."_ So it gets a three-rank structure of its own,
and it is not a ladder anyone climbs:

- **Denounced** (level 0) — discovered. Maintaining a shrine is capital; there is no penitence.
- **Warded** (level 1) — the frontier shamans and wise folk who treat the god as storm, earthquake
  and drought and work protections against him, outside the official priesthood but under _"a kind of
  implicit sanction"_.
- **Devotee** (level 2) — actual worship, entirely secret, with no structure above it to belong to.

Note that the formal knowledge of Ápōphis is _not_ held by this affiliation at all: it sits in the
higher echelons of Rā's and Thōth's temples, which is why those two cults gained offices for it.

I kept Ápōphis as `faithtradition` rather than `criminal`. The Yokveng took `criminal` because they
are organised enterprises; this is proscribed religion with no organisation whatsoever, which is a
different thing. Easy to overrule if you disagree.

`commonSkills` wire each cult's existing ritual skill plus what its prose actually has priests doing
— `law` and `khprsshscrpt` for Má'át's judges and scribes, `eng`/`masn`/`draw` for Ptā'h's building
priests, `pysn`/`herb` for the mortuary and healing cults, `melee`/`draw`/`srvl` for Sét's strategists
and roof-climbers.

Affiliations still on the generic ladder fall from 26 to 13.
