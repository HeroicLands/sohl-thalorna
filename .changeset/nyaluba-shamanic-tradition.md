---
"sohl-thalorna": patch
---

**The Nyáluba are modelled as a shamanic tradition — one unvenerated source, venerated spirit
guides, and a council of shamans in place of the priesthood they never had.**

Both Nyáluba notes carried boilerplate that contradicted their own prose. The pantheon note
declared an Aurèldían theocracy — Excommunicate through Hierophant, with a Sacristan, an Almoner
and an Exorcist — on a page stating there is _"no formal priesthood serving a unified creed"_. The
spirits note was worse: `arcanetradition`, governed by a Magister and a Bursar, with a **Keeper of
the Grimoires**, for a people the same file says _do not write_.

- **The Nyáluba Way** (`nyalbpnthn`) becomes a `spirittradition` on `council` governance, with a
  five-step ladder — Spirit-shunned, Uninitiated, Initiate, Spirit-Speaker, Elder Shaman — and no
  hierarch. Its offices are the specialists the prose already named: griot, drum-speaker,
  _mwalimu wa roho_, elder, and a Guardian held one-shaman-one-site.
- **Five clan totems** as their own `spirittradition` cults — Lion (Mvuzi), Crocodile (Kambezi),
  Eagle (Ngonzi), Leopard (Sengala), Baobab (Bombwe) — taken from the clans the Tribal Nation note
  already defines rather than invented.
- **Five `<Spirit> Spirit Power` skills** in `Skills/Mystical/Spirit/Nyaluba/`, modelled on the
  system's `Spirit` skill with `parentSkillCode: spirit` and `initSkillMult: 0`. Each cult names
  its own in `commonSkills`.
- **Lore** for what is not practice: `Mwánga-Kúbwa`, the source that receives no offering, no song
  and no shrine; `Nyáluba Spirits`, carrying the seven kinds of guide, the three postures and the
  standing pacts; and a per-totem note for each guide _as a being_, apart from its cult.
- **Griot** (`lore`, under the system's Folklore) and **Nyáluban Drum-Speech** (`language`, under
  Nyáluban) give the two specialists that had no skill at all.

`Nyaluba_Spirits.md` is deleted as an affiliation — nothing joined it — and its prose is now the
lore note; the two inbound links move to `lore-nyalbsprts`. This is the project's first shamanic
tradition, and the shape is meant to be copied: tradition, guide, standing, being, source.
