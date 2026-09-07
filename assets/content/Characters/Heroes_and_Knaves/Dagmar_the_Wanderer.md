---
tags:
  - heroes-and-knaves
  - hero
  - guilded
  - tradesfolk
name:
  full: Dagmar the Wanderer
  title: ""
  given: Dagmar
  clan: ""
  home: Stálbrekka
  aliases:
    - the Rogue Skald
packFolder: ankarisnordlands
shortcode: dagmrwndrr
img: icons/person.svg
type: being
data:
  portrait: images/being/dagmrwndrr-portrait.webp
  templatePriority: null
  archetypes: []
  occupation: Skald
  stations: []
  lore:
    - commonerrnk
  homes:
    - nrdlndsrgn
  affiliations:
    - kingdmnrgd
  gender: male
  species: null
  age: 30
  birthday: 690/2/6
  height: 1.7
  weight: 63.5
  frame: light
  appearance:
    eye_color: green
    hair_color: brown
    skin_color: light
    complexion: null
    extra_features: []
sohl:
  templatePriority: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 17 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: surtr, type: affiliation }
    - { shortcode: cook, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: folklr, type: skill, system: { masteryLevelBase: 70 } }
    - { shortcode: pysn, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: thuravarkscript, type: skill, system: { masteryLevelBase: 75 } }
    - { shortcode: chrm, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: cmd, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: dscr, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: guil, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: intr, type: skill, system: { masteryLevelBase: 56 } }
    - { shortcode: sing, type: skill, system: { masteryLevelBase: 80 } }
    - { shortcode: thtcs, type: skill, system: { masteryLevelBase: 17 } }
    - { shortcode: smsh, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: srvl, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: trak, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: awar, type: skill, system: { masteryLevelBase: 52 } }
    - { shortcode: clmb, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: dnce, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: jump, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: ridg, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: stlth, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: swim, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: archery, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: melee, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: thro, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: draw, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: hide, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: mtlc, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: mill, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: musc, type: skill, system: { masteryLevelBase: 75 } }
    - { shortcode: wood, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: Stf, type: weapongear }
    - { shortcode: Dgr, type: weapongear }
    - { shortcode: WShirt, type: armorgear }
    - { shortcode: WBrch, type: armorgear }
    - { shortcode: LtCBoot, type: armorgear }
    - { shortcode: WClk, type: armorgear }
    - name: Lute (well-maintained traveler's instrument)
      type: miscgear
      system:
        weight: 1
        value: 100
        durability: 3
    - { name: Traveling bedroll, type: miscgear, system: { weight: 1, value: 100, durability: 3 } }
    - { shortcode: LiteBdrl, type: miscgear }
    - { shortcode: LiteBlkt, type: miscgear }
    - { shortcode: StdRtns, type: miscgear, system: { quantity: 3 } }
    - { shortcode: wtrskin, type: containergear }
    - { shortcode: tndrbx, type: miscgear }
    - { shortcode: torch, type: miscgear, system: { quantity: 3 } }
    - name: Wax tablets for composing songs
      type: miscgear
      system:
        weight: 1
        value: 100
        durability: 3
    - { shortcode: backpk, type: containergear }
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

Dagmar stands 5'7\" tall with a light build. He has light skin, brown hair, and green eyes. His features include a prominent nose, a firm-set mouth, heavy brows, flat cheeks.

# Dossier {#dossier}

Dagmar is a skald from the far northern reaches of Norgaad, where he wandered from clan to clan, composing songs and telling tales of great heroes and legendary battles. He is clanless, having been exiled for an unknown crime—though some whisper that he had an affair with a powerful lord’s wife, others say he was involved in a conspiracy against his clan. [[being-grosdrnrgd|Gróa]] met Dagmar at a village blót, where the skald’s sharp wit and knowledge of ancient lore impressed her. Dagmar’s songs often contain veiled warnings and prophecies, hinting at the deeper wisdom he possesses.

## Background

### Skills and Abilities

- **Strength**: Not particularly strong, relies more on wit than brawn.
- **Endurance**: Can handle long travels but not extreme physical strain.
- **Dexterity**: Skilled with his lute and adept at sleight of hand.
- **Agility**: Moves gracefully, useful for performance and quick escapes.
- **Perception**: Keen observer, essential for storytelling and staying safe.
- **Comeliness**: His charm adds to his appeal as a skald.
- **Aura**: Has a presence that engages his audience.
- **Will**: Persistent in pursuing his own interests.
- **Reasoning**: Quick-thinking and strategic in social situations.
- **Creativity**: Exceptionally creative, a master of tales and songs.
- **Empathy**: Reads people well, aiding his storytelling.
- **Eloquence**: Gifted speaker and performer.
- **Morality**: As a rogue skald, Dagmar enjoys his freedom and has a loose relationship with the mores of his culture. He’s willing to take advantage of situations as long as it benefits him.
- **Voice**: As a rogue skald, Dagmar’s voice is one of his greatest assets. He can captivate an audience with his melodious tone, turning his songs and stories into unforgettable performances.

## Psyche

### Personality

Cynical and secretive, Dagmar is a skilled manipulator and strategist. He is not above bending the truth or playing both sides to his advantage, but his loyalty to [[being-grosdrnrgd|Gróa]] is genuine. Dagmar sees the Seiðr as a kindred spirit, both outcasts who walk between worlds.

### Motivation

Dagmar’s interest in [[being-grosdrnrgd|Gróa]] lies in the Seiðr’s connection to the spirit world, which fascinates him. She sees [[being-grosdrnrgd|Gróa]]’s journey as an opportunity to witness something truly extraordinary and to compose the greatest saga ever told.

### Strengths

- **Storytelling**: Expert skald, crafting stories and songs.
- **Sleight of Hand**: Skilled at manipulating objects.
- **Lore**: Deep knowledge of ancient tales and prophecies.

## Social

### Patrons

Local clans

## Plot Hooks

1. **The Song of Unwritten Fates**: Dagmar is approached by a mysterious figure who claims to have an ancient saga meant to be sung only once, at a time when fate hangs in the balance. The figure insists Dagmar is the only one worthy of delivering it, but as Dagmar deciphers the verses, he realizes the saga predicts events that could destroy his companions—or save them. The choice of how and when to use it rests with him.

2. **The Jarl’s Last Tale**: A dying jarl summons Dagmar to record his life’s story, offering the promise of wealth and renown. However, Dagmar soon discovers dark truths hidden within the jarl’s deeds—secrets that, if revealed, could fracture alliances in Norgaad. Dagmar must decide whether to sing a sanitized version of history or risk exposing the jarl’s sins to the world.

3. **The Festival of Forgotten Voices**: Dagmar learns of a remote village where, once every generation, a skald must perform to appease spirits bound to the land. The last skald to attempt the feat vanished without a trace, leaving the village cursed by endless storms. Dagmar’s reputation compels him to accept the challenge, but he must unravel the truth behind the ritual while ensuring his own survival.

4. **The Tale That Never Ends**: Dagmar encounters an old skald who tells him a captivating story, only to vanish before finishing it. The incomplete tale haunts Dagmar, who begins to hear whispers of its continuation in dreams and rumors. As he chases the story’s threads, he realizes the tale may hold a clue to a greater threat—or an opportunity to craft a saga of his own.
