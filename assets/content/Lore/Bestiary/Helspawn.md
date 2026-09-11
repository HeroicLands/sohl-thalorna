---
tags: []
name:
  full: Helspawn
  aliases:
    - The Undead
    - Undead
description: "The undead — the dead made animate by necrotic spiritual force, found wherever a tradition holds the authority to call them back."
shortcode: helspawncrtr
type: lore
subType: bestiary
---

# Helspawn

A creeping dread fills the air as the Helspawn emerge from the shadows — a host of ghastly figures summoned from the underworld by dark priests. Their appearances vary from grotesque and decayed to eerily beautiful, a testament to the fell energhy that binds them. Some retain a semblance of their former selves but with a chill touch of death, while others are twisted and malformed, their bodies marred by necrotic energy. Each Helspawn exudes an unsettling aura, a tangible sense of the unnatural that makes one's skin crawl and breath catch in the throat.

When they move, it is with a graceless, relentless determination for some, and a terrifying, fluid elegance for others. Their hollow eyes, whether ablaze with malevolent intelligence or empty and vacant, speak of an unholy existence bound to serve their necromantic masters. The mere presence of Helspawn can dampen light, casting an oppressive gloom that chills the soul and foretells doom.

Helspawn are the undead — the dead made animate through the power of gods, celestial agents, or mortals who have been granted necromantic authority. They are found across all the world, wherever the right kind of necromantic power holds sway, and the phenomenon is not limited to any single pantheon. "Helspawn" is a generic term for "undead". Every major religious tradition that touches on death or chaos has its own theological explanation for why the dead sometimes walk, and every such tradition has those who can — or who dare to — call them back.

Every Helspawn is, at root, a vessel imbued with necrotic spiritual force. Details are unclear, but it seems clear that this necrotic force is associated with the destruction or perversion of the living spirit, or soul, that previously inhabited the body. This conversion of the spirit seems to always involve coercion or arrangement: once spirits leave their deceased bodies they do not naturally return. Something — a necromancer, a ritual, a creator-Helspawn, a divine agent — must act as a catalyst to the binding.

One important distinction is between Helspawn and Spirits. The spirits of dead beings may from time to time remain connected to places in the material realm; ghosts and similar beings. But those creatures are not Helspawn; those are immaterial spirits from the spirit realm that persist usually near where they died.

## The Undead Hierarchy

Helspawn exist on a spectrum defined by the completeness of the soul bound to the body. At one extreme are the [[being-nghtwght|Nightwights]] — intelligent, powerful, and semi-permanent, created through deliberate ritual from willing and powerful subjects whose souls, often already perverted, were violently transformed to produce powerful undead beings. At the other extreme are the [[being-hlthrls|Helthraals]] in their most degraded state — mindless, shambling, rotting corpses animated by the barest fragments of spiritual energy.

Between these poles lies the full range of undead existence. A soul ripped back from the afterlife and forced into its deceased body arrives damaged by the process, the more so if unwilling — incomplete, diminished by the passage. How much of the original person remains depends on how long the body had been dead, how violently the spirit was coerced back, and the skill of whomever performed the reanimation. In some cases the recently dead, especially if the death was not violent, pulled back quickly, might return confused but retaining speech, memory, and personality, although with significant confusion about their situation, and significant memmory gaps. So long as the fact of their death can be hidden fron them, they might be able to persist for a short time as if nothing had happened. But quickly the body begins to decay, the mind to degenerate, and often a great hunger for living flesh and blood blossoms. All Helspawn below the Nightwight tier degrade over time — the soul fragments eroding, the body decaying, identity slipping away week by week until nothing remains but the mindless hunger.

```sql
SELECT address.slug                   AS _ref,
       name.full                      AS "Name",
       shortcode                      AS "Shortcode",
       sohl.system.body.weight.base   AS "Weight",
       sohl.system.body.bodyScaleBase AS "BodyScale",
       description                    AS "Description"
FROM notes
WHERE type = 'being'
  AND sohl.kbcat = 'helspawn'
```
