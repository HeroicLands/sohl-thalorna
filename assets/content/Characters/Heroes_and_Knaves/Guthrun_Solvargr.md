---
tags:
  - heroes-and-knaves
  - common-folk
name:
  full: Guthrún Sólvargr
  title: ""
  given: Guthrún
  clan: Sólvargr
  home: greyfjord
  aliases: []
packFolder: ankarisnordlands
shortcode: gthrnslvrgr
img: icons/person.svg
type: being
data:
  portrait: images/being/gthrnslvrgr-portrait.webp
  templatePriority: null
  archetypes: []
  occupation: Trapper
  stations: []
  lore:
    - commonerrnk
  homes:
    - nrdlndsrgn
  affiliations:
    - kngdmnrdhm
  gender: female
  species: null
  age: 30
  birthday: 690/4/21
  height: 1.8
  weight: 76.2
  frame: light
  appearance:
    eye_color: green
    hair_color: brown
    skin_color: light
    complexion: fair
    extra_features:
      - a tattoo of a skull on the upper arm
sohl:
  templatePriority: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 17 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: freyr, type: affiliation }
    - { shortcode: brew, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: cook, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: folklr, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: pysn, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: thuravarkscript, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: chrm, type: skill, system: { masteryLevelBase: 52 } }
    - { shortcode: cmd, type: skill, system: { masteryLevelBase: 22 } }
    - { shortcode: dscr, type: skill, system: { masteryLevelBase: 24 } }
    - { shortcode: guil, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: intr, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: sing, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: thtcs, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: fish, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: smsh, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: srvl, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: trak, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: awar, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: clmb, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: dnce, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: jump, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: ridg, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: stlth, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: swim, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: archery, type: skill, system: { masteryLevelBase: 16 } }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: melee, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: thro, type: skill, system: { masteryLevelBase: 32 } }
    - { shortcode: draw, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: hide, type: skill, system: { masteryLevelBase: 48 } }
    - { shortcode: lock, type: skill, system: { masteryLevelBase: 32 } }
    - { shortcode: mtlc, type: skill, system: { masteryLevelBase: 70 } }
    - { shortcode: wood, type: skill, system: { masteryLevelBase: 56 } }
    - { shortcode: LBw75, type: weapongear }
    - { shortcode: Dgr, type: weapongear }
    - { shortcode: RhTunic, type: armorgear }
    - { shortcode: RhMntl, type: armorgear }
    - { shortcode: RhShoe, type: armorgear }
    - { shortcode: ArwStd, type: projectilegear, system: { quantity: 24 } }
    - { shortcode: torch, type: miscgear, system: { quantity: 2 } }
    - { shortcode: StdRtns, type: miscgear, system: { quantity: 4 } }
    - { shortcode: tndrbx, type: miscgear }
    - name: Trap-making materials (wire, springs, snares)
      type: miscgear
      system:
        weight: 2
        value: 100
        durability: 3
    - name: Herbal remedy bundle (healing salves)
      type: miscgear
      system:
        weight: 0.5
        value: 100
        durability: 3
    - name: Bone knife for field dressing
      type: miscgear
      system:
        weight: 1.5
        value: 100
        durability: 3
    - name: Fletching kit for arrow maintenance
      type: miscgear
      system:
        weight: 3
        value: 100
        durability: 4
    - { shortcode: backpk, type: containergear }
    - { shortcode: wtrskin, type: containergear }
    - name: Quiver (leather)
      type: containergear
      system:
        quantity: 1
        weight: 1.5
        value: 100
        durability: 3
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 1
          - name: Arms
            shortcode: armszone
            probWeight: 4
          - name: Torso
            shortcode: torsozone
            probWeight: 4
          - name: Legs
            shortcode: legszone
            probWeight: 6
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
            canHoldItem: false
            probWeight: 1
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles:
              - manipulator
            canHoldItem: true
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles:
              - manipulator
            canHoldItem: true
            probWeight: 2
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles:
              - core
            canHoldItem: false
            probWeight: 4
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 3
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 3
        locations:
          - name: Skull
            shortcode: skullloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 5
            probWeight: 500
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
      weight:
        base: null
        calc: "(9 * str) + 50"
      reachBase: 0
      bodyScaleBase: 1
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        disabled: false
    defaultCombatGroup: null
---

# Appearance {#appearance}

Guthrún stands 5'11" tall with a light build. She has light fair skin, brown hair, and green eyes. Her features include an angular face, a long nose, a strong jawline, a slightly downturned mouth, heavy brows, flat cheeks. A distinguishing mark is a tattoo of a skull on the upper arm.

# Dossier {#dossier}

## Background

### The Trapper's Daughter

Guthrún was born in Nordheim's northern reaches to **Sólvi Sólvargr**, a legendary trapper whose knowledge of wilderness survival and animal behavior was unmatched in three kingdoms. Her mother died bringing her into the world, and Sólvi raised his daughter in a solitary trapping settlement far from the comforts of civilization. He taught her not through formal instruction but through living—showing her how to read animal signs in snow and mud, how to construct traps that worked through understanding prey rather than brute force, how to harvest the creatures she caught with respect for the gift of their bodies.

### The Inheritance of Knowledge

At her twentieth year, during a harsh winter, Sólvi attempted to cross a frozen river while pursuing unusual game tracks and fell through ice that should have held his weight. Guthrún found his body downstream, and that same day inherited not only his trapping territory but the profound isolation that came with it. For the next decade, she became what her father had been—a solitary genius of the wilderness, an expert whose traps and snares were sought by fur traders across three kingdoms. Her work was exceptional not merely because it was effective but because it demonstrated genuine knowledge of animal behavior. She never trapped more than necessary, never wasted what she took, and grew increasingly troubled by the ease with which she could kill.

### Present Searching

At thirty years old, Guthrún stands at a crossroads of her own making. Her skills are in higher demand than ever—fur traders offer increasing wages, nobles contract her for estate management, and wealthy merchants seek her knowledge of herbalism and wilderness lore. Yet she has begun to experience profound doubt about the morality of her work. The line between necessary harvesting and casual slaughter has blurred in her mind, and she finds herself setting fewer traps and spending longer periods simply moving through wild places, observing rather than exploiting. Her reputation remains stellar, but her heart has begun to rebel against the killing that sustains her.

## Psyche

### Personality

Guthrún is a woman of few words who speaks only when communication serves necessary purpose. In the wilderness, she becomes almost meditative—absorbed in the work with philosophical depth that suggests her mind operates on planes beyond ordinary human concern. Civilization makes her visibly uncomfortable; she shifts her weight as though the ground is unstable and her eyes track exits and threats with predatory precision. Despite this apparent coldness, those who have worked with her closely recognize a surprising well of compassion and genuine care for other living beings.

She possesses an unusual moral framework forged in isolation and harsh necessity. She will kill an animal to survive or to prevent suffering, but regards casual violence as a spiritual transgression. This principle extends to human beings; she is capable of ruthless efficiency when genuinely threatened, but abhors killing for profit or convenience. Her tattoo—a skull—represents her acceptance of mortality's permanence, not a glorification of death, but rather a meditation on the truth that all life ends.

Her intellectual life is rich despite her outward simplicity. She is literate, though she reads rarely in books preferring the "text" of nature and weather. She understands the deeper philosophical implications of her work and has begun to grapple with questions of sustainability and spiritual ecology that few in the industrial world even recognize exist.

### Motivation

Guthrún seeks only to live with integrity in a world that grows increasingly disconnected from consequence. She wishes to practice her craft—trapping, tracking, wilderness survival—but only in ways that respect the web of life her father taught her is sacred. Increasingly, she finds herself drawn toward a larger purpose: becoming a guardian of wilderness places against those who would exploit them without understanding or respect. This motivation conflicts directly with her need for income and her reputation as a tool for fur traders and hunters. She feels trapped between her inherited identity and an emerging sense of calling toward something greater than herself.

### Strengths

- **Master Trapper**: Possesses legendary skill in creating snares, traps, and pitfalls that work through understanding prey psychology rather than mere mechanical force; nearly all her traps succeed without causing unnecessary suffering
- **Wilderness Mastery**: Can navigate, survive, and thrive in wild places where others perish; reads weather, animal behavior, and environmental signs with near-mystical precision
- **Herbal Knowledge**: Possesses extensive understanding of plant lore, medicinal herbs, and their applications; could rival many healers in specific domains of botanical knowledge
- **Ethical Hunting**: When killing is necessary, accomplishes it with minimal suffering and maximum respect; can process game animals completely, wasting no usable portion
- **Perceptive Wisdom**: Demonstrates unusual insight into moral and philosophical questions; conversations with her often leave others with surprising clarity about complex issues

### Weaknesses

- **Excessive Compassion**: Her increasing reluctance to kill has begun to undermine her effectiveness as a trapper; major contracts sometimes go unfulfilled because she cannot overcome moral resistance
- **Social Dysfunction**: Severely uncomfortable in civilized settings; struggles with basic courtesies and often comes across as hostile when she merely feels anxious
- **Communication Difficulty**: Expressed herself poorly in human language; struggles to articulate complex thoughts verbally and tends toward monosyllabic responses that frustrate interaction
- **Moral Paralysis**: Her increasing philosophical opposition to killing has created a paralyzing conflict with her livelihood; unable to reconcile income-generation with emerging ethical stance
- **Isolation Dependency**: Thrives only in solitude; relationships are profoundly difficult for her and extended time around other humans creates measurable psychological distress

## Social

### Patrons

- **House Nordthorne**: A noble family that has maintained standing contracts with Guthrún for exceptional furs and wilderness supplies; they pay well and respect her expertise
- **Harvin's Fur Trading Company**: The primary commercial outlet for Guthrún's work, run by an aging merchant named **Harvin Coldwater** who has worked with her for over a decade and views her as indispensable
- **Priest Aldwin of the Fréyr's Temple**: A spiritual authority who has taken interest in Guthrún's deepening moral philosophy and occasionally contracts her for wilderness-based spiritual retreats and teachings

### Enemies

- **The Blackpelt Poachers**: A criminal organization that kills game indiscriminately for quick profit; Guthrún actively interferes with their operations and has destroyed snares and traps to prevent their predatory harvesting
- **Duke Hroarsson**: A noble of the neighboring realm who believes all wilderness should be exploited for maximum profit; he has openly declared his intention to destroy Guthrún's trapping territories and industrialize hunting in Nordheim
- **Merchant Jorvik the Merciless**: A fur trader who views Guthrún's recent reluctance to fulfill contracts as betrayal; he has begun spreading rumors that she has gone mad from isolation and is stealing from her patrons

### Affiliations

- **The Fréyr's Circle**: An informal fellowship of individuals devoted to the fertility aspect of Fréyr and the preservation of natural abundance; Guthrún has recently begun attending their gatherings and exploring deeper spiritual connection

## Plot Hooks

1. **The Illegal Hunt**: Guthrún discovers that **Duke Hroarsson** has contracted poachers working under the command of **Merchant Jorvik** to slaughter entire herds of the rare silver elk—creatures that appear in Nordheim's territories only once per decade—in order to eliminate her competitive advantage and her trapping livelihood simultaneously. The slaughter is beginning, and Guthrún must choose whether to respond with force, attempt covert intervention, or accept the loss as inevitably part of a changing world.

2. **The Sacred Sanctuary**: A mysterious priestess of the old faith, representing an ancient order dedicated to preserving wild places, approaches Guthrún with a revelation: she is the reincarnation of the order's founder, a legendary trapper named **Sólvi the Wildborn** (her father's name is no coincidence). The order wishes to recruit her as a guardian of a hidden sanctuary—a place of extraordinary biodiversity and spiritual power that must be protected from industrial exploitation. Accepting means abandoning her current life and dedicating herself entirely to this new purpose.

3. **The Fur Merchant's Fall**: **Harvin Coldwater**, Guthrún's longtime patron, approaches her with a request born of desperation. His business is failing due to competition from **Merchant Jorvik**, and he has fallen into debt with dangerous people. He asks Guthrún to deliver an enormous, unsustainable harvest within a short timeframe—a request that directly contradicts her emerging moral framework. He promises it will be the last time he asks, and that afterward, he will retire and allow Guthrún to pursue whatever path she chooses. Refuse and abandon a man who has treated her fairly; accept and violate her conscience.

4. **The Wounded Creature**: Guthrún discovers an injured creature—neither entirely wolf nor entirely human—caught in a trap of her own making in a remote forest valley. The creature possesses human intelligence and can speak, though its language is ancient and nearly forgotten. It bears marks suggesting it has been hunted for generations by those who view it as abomination. Freeing it and nursing it to health makes Guthrún an accomplice to whatever the creature is, but refusing to help the wounded violates everything her moral framework has recently solidified around.

5. **The Winter's Reckoning**: In the depths of a particularly harsh winter, food becomes scarce and the settlement nearest Guthrún's territory faces starvation. She is approached by the settlement's leaders with a desperate request: trap and kill every large animal she can, creating a meat store sufficient to ensure survival through the remaining season. The request is legitimate, the need genuine, yet fulfilling it would require unsustainable harvesting that would take years to recover from. Guthrún must choose between emergency compassion toward her own kind and long-term stewardship of the wilderness she has come to revere.
