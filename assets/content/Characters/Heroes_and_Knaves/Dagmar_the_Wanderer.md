---
aliases:
  - Dagmar the Wanderer
tags:
  - heroes-and-knaves
  - hero
name:
  full: Dagmar the Wanderer
  title: ""
  given: Dagmar
  clan: ""
  home: Stálbrekka
  aliases:
    - the Rogue Skald
id: pTNOxSvYuw4eXF5r
folder: Ka9XqaF27b0I3Gmq
shortcode: dagmrwndrr
img: icons/person.svg
portrait: images/being/dagmrwndrr-portrait.webp
type: being
package: thalorna
sohl:
  attributes:
    str: 10
    end: 11
    dex: 13
    agl: 13
    per: 14
    cml: 13
    aur: 12
    wil: 12
    rea: 15
    cre: 17
    emp: 14
    elo: 16
    mor: 10
    voi: 16
  body:
    structure:
      parts:
        - name: Head
          shortcode: headpart
          roles:
            - vital
          canHoldItem: false
          combatArea: 1
          locations:
            - name: Skull
              shortcode: skullloc
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
              bleedingSusceptibility: high
              amputability: low
              shockValue: 5
              probWeight: 200
              protectionBase:
                blunt: 0
                edged: 0
                piercing: 0
                fire: 0
        - name: Right Arm
          shortcode: rarmpart
          roles:
            - manipulator
          canHoldItem: true
          combatArea: 2
          locations:
            - name: Right Shoulder
              shortcode: rshldloc
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
              bleedingSusceptibility: none
              amputability: high
              shockValue: 2
              probWeight: 10
              protectionBase:
                blunt: 0
                edged: 0
                piercing: 0
                fire: 0
        - name: Left Arm
          shortcode: larmpart
          roles:
            - manipulator
          canHoldItem: true
          combatArea: 2
          locations:
            - name: Left Shoulder
              shortcode: lshldloc
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
              bleedingSusceptibility: none
              amputability: high
              shockValue: 2
              probWeight: 10
              protectionBase:
                blunt: 0
                edged: 0
                piercing: 0
                fire: 0
        - name: Torso
          shortcode: torsopart
          roles:
            - core
          canHoldItem: false
          combatArea: 4
          locations:
            - name: Thorax
              shortcode: thrxloc
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
              bleedingSusceptibility: medium
              amputability: none
              shockValue: 4
              probWeight: 20
              protectionBase:
                blunt: 0
                edged: 0
                piercing: 0
                fire: 0
        - name: Right Leg
          shortcode: rlegpart
          roles:
            - locomotor
          canHoldItem: false
          combatArea: 3
          locations:
            - name: Right Thigh
              shortcode: rthghloc
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
              bleedingSusceptibility: none
              amputability: medium
              shockValue: 2
              probWeight: 20
              protectionBase:
                blunt: 0
                edged: 0
                piercing: 0
                fire: 0
        - name: Left Leg
          shortcode: llegpart
          roles:
            - locomotor
          canHoldItem: false
          combatArea: 3
          locations:
            - name: Left Thigh
              shortcode: lthghloc
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
              bleedingSusceptibility: none
              amputability: medium
              shockValue: 2
              probWeight: 20
              protectionBase:
                blunt: 0
                edged: 0
                piercing: 0
                fire: 0
      adjacent:
        - - headpart
          - torsopart
        - - headpart
          - rarmpart
        - - headpart
          - larmpart
        - - torsopart
          - rarmpart
        - - torsopart
          - larmpart
        - - torsopart
          - rlegpart
        - - torsopart
          - llegpart
        - - llegpart
          - rlegpart
    weight:
      base: 140
      calc: (9 * str) + 50
    reachBase: 0
    bodyScaleBase: 1.0
    personalFatigue: enc + 5
  currentMoveMedium: terrestrial
  movementProfiles:
    - medium: terrestrial
      feetPerRound: 50
      leaguesPerWatch: 5
      encumbrance: floor(wt/4)
      strMod: -5 * floor((str - 10) / 2)
      disabled: false
  defaultCombatGroup: null
  items:
    - shortcode: surtr
      type: affiliation
    - shortcode: cook
      type: skill
      system:
        masteryLevelBase: 28
    - shortcode: folklr
      type: skill
      system:
        masteryLevelBase: 70
    - shortcode: pysn
      type: skill
      system:
        masteryLevelBase: 15
    - shortcode: script
      type: skill
      system:
        masteryLevelBase: 75
    - shortcode: chrm
      type: skill
      system:
        masteryLevelBase: 39
    - shortcode: cmd
      type: skill
      system:
        masteryLevelBase: 28
    - shortcode: dscr
      type: skill
      system:
        masteryLevelBase: 30
    - shortcode: guil
      type: skill
      system:
        masteryLevelBase: 45
    - shortcode: intr
      type: skill
      system:
        masteryLevelBase: 56
    - shortcode: sing
      type: skill
      system:
        masteryLevelBase: 80
    - shortcode: thtcs
      type: skill
      system:
        masteryLevelBase: 17
    - shortcode: smsh
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: srvl
      type: skill
      system:
        masteryLevelBase: 26
    - shortcode: trak
      type: skill
      system:
        masteryLevelBase: 15
    - shortcode: awar
      type: skill
      system:
        masteryLevelBase: 52
    - shortcode: clmb
      type: skill
      system:
        masteryLevelBase: 39
    - shortcode: dnce
      type: skill
      system:
        masteryLevelBase: 30
    - shortcode: jump
      type: skill
      system:
        masteryLevelBase: 36
    - shortcode: ridg
      type: skill
      system:
        masteryLevelBase: 14
    - shortcode: stlth
      type: skill
      system:
        masteryLevelBase: 39
    - shortcode: swim
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: archery
      type: skill
      system:
        masteryLevelBase: 14
    - shortcode: init
      type: skill
      system:
        masteryLevelBase: 39
    - shortcode: melee
      type: skill
      system:
        masteryLevelBase: 26
    - shortcode: thro
      type: skill
      system:
        masteryLevelBase: 26
    - shortcode: draw
      type: skill
      system:
        masteryLevelBase: 15
    - shortcode: hide
      type: skill
      system:
        masteryLevelBase: 26
    - shortcode: mtlc
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: mill
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: musc
      type: skill
      system:
        masteryLevelBase: 75
    - shortcode: wood
      type: skill
      system:
        masteryLevelBase: 60
    - shortcode: Stf
      type: weapongear
    - shortcode: Dgr
      type: weapongear
    - shortcode: WShirt
      type: armorgear
    - shortcode: WBrch
      type: armorgear
    - shortcode: LtCBoot
      type: armorgear
    - shortcode: WClk
      type: armorgear
    - type: miscgear
      name: Lute (well-maintained traveler's instrument)
      system:
        weight: 1
        value: 100
        durability: 3
    - type: miscgear
      name: Traveling bedroll
      system:
        weight: 1
        value: 100
        durability: 3
    - shortcode: LiteBdrl
      type: miscgear
    - shortcode: LiteBlkt
      type: miscgear
    - shortcode: StdRtns
      type: miscgear
      system:
        quantity: 3
    - shortcode: wtrskin
      type: containergear
    - shortcode: tndrbx
      type: miscgear
    - shortcode: torch
      type: miscgear
      system:
        quantity: 3
    - type: miscgear
      name: Wax tablets for composing songs
      system:
        weight: 1
        value: 100
        durability: 3
    - shortcode: backpk
      type: containergear
thalorna:
  realm: kingdmnrgd
  region: nrdlndsrgn
social:
  occupation: Skald
  station: tradesfolk
  class: guilded
  society: ""
harnworld:
  realm: ""
  ritual: []
traits:
  gender: male
  age: 30
  birthday: 690/2/6
  height:
    m: 1.7
  weight:
    kg: 63.5
  build:
    frame: light
  appearance:
    eye_color: green
    hair_color: brown
    skin_color: light
    complexion: ""
    extra_features: []
---

# Appearance {#appearance}

Dagmar stands 5'7\" tall with a light build. He has light skin, brown hair, and green eyes. His features include a prominent nose, a firm-set mouth, heavy brows, flat cheeks.

# Dossier {#dossier}

Dagmar is a skald from the far northern reaches of Norgaad, where he wandered from clan to clan, composing songs and telling tales of great heroes and legendary battles. He is clanless, having been exiled for an unknown crime—though some whisper that he had an affair with a powerful lord’s wife, others say he was involved in a conspiracy against his clan. [[being-grosdrnrgd|Gróa]] met Dagmar at a village blót, where the skald’s sharp wit and knowledge of ancient lore impressed her. Dagmar’s songs often contain veiled warnings and prophecies, hinting at the deeper wisdom he possesses.

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
