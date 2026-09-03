---
aliases:
  - Asbjorn Oakheart
tags:
  - demigod
  - heroes-of-asguard
name:
  full: Asbjorn Oakheart
  title: null
  given: Asbjorn
  clan: ""
  aliases:
    - Oakheart
  home: ""
id: WyeojtfzVxXJy57s
folder: Nu7AgLZEmR26u2pk
shortcode: asbjrnkhrt
img: icons/person.svg
type: being
data:
  portrait: images/being/asbjrnkhrt-portrait.webp
  templatePriority: null
  archetypes: []
  occupation: Woodsman and Guardian
  stations: []
  peoples: []
  homes:
    - vrystwald
  affiliations:
    - vrystwldtrbs
  gender: male
  species: null
  age: 50
  birthday: 670/7/14
  height: 1.98
  weight: 109
  frame: massive
  appearance:
    eye_color: blue
    hair_color: brown
    skin_color: pale
    complexion: weathered
    extra_features: []
social:
  station: clergy
  class: freeman
  society: Nordheimn
sohl:
  archetype: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 19 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 18 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 17 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 17 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 7 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 8 } }
    - { shortcode: freyr, type: affiliation }
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
      base: 240
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
---

# Appearance {#appearance}

Asbjorn stands 6'5" with a massive, towering frame, weighing well over 260 pounds. Since his transformation by Fréyr, his weathered skin has taken on a bark-like texture in places, particularly across his shoulders and forearms, and leaves sometimes sprout unbidden from his thick brown hair. His green eyes carry the deep, ancient quality of forest canopy — patient, watchful, and faintly luminous in dim light. His features are craggy and broad, with a heavy brow, a wide flat nose, a square jaw, and a mouth that has grown increasingly silent as his humanity fades. His hands are enormous, gnarled like old roots, and the scent of loam and green wood clings to him. Asbjorn wears no armor, only simple garments of rough-spun cloth and leather that seem to blend with the forest around him. He carries a staff of living oak that has begun to put out green shoots in his grip.

# Dossier {#dossier}

Asbjorn was born into a family of woodsmen, surrounded by the vast and ancient forests that his people revered as sacred. From a young age, he showed a deep connection to the trees and the creatures that dwelled within them. He spent his childhood learning the secrets of the forest — how to find water in the driest seasons, how to call to the animals, and how to heal the trees themselves. Asbjorn grew into a giant of a man, both in stature and in spirit, earning the name Oakheart for his unwavering loyalty to the forest and his people.

The saga of Asbjorn Oakheart is one of courage and sacrifice. The forest he loved was threatened by fire-worms — creatures that burrowed into the heart of the trees, setting them ablaze from within. Asbjorn called upon Fréyr and journeyed deep into the forest to the ancient Tree of Life, said to be the first tree ever planted by Fréyr. There he found the source of the fire-worms: a cursed artifact buried beneath the roots. Asbjorn knew that removing the artifact would kill him, as the roots were intertwined with his own spirit. Without hesitation, he uprooted the cursed artifact, and the fire-worms vanished. Fréyr transformed him into a guardian spirit of the forest, ensuring his presence would protect the trees for all time.

## Psyche

### Personality

Asbjorn is quiet and gentle, a towering man whose soft-spoken manner belies his immense physical strength. He is most at ease among the trees, where he can sit for hours simply listening to the forest. He is slow to anger but terrible when roused, defending the woodland with a fury that has earned comparisons to a bear protecting its cubs. He has a deep affection for all living things and will go to extraordinary lengths to avoid unnecessary harm — even to those who threaten his forest. He communicates as much through gesture and expression as through words.

### Motivation

Asbjorn exists now as something between man and spirit, bound to the forest by Fréyr's transformation. He seeks to protect the ancient woodlands from all threats while struggling with the gradual loss of his humanity. He remembers his mortal life with increasing difficulty and fears that one day he will forget entirely what it meant to be human. He also seeks to understand the cursed artifact he destroyed and whether its creator might return with something worse.

### Strengths

Since his transformation, Asbjorn can communicate with trees and forest creatures, commanding them to aid in the forest's defense. His physical strength has been amplified beyond mortal limits, and he can move through dense woodland without disturbing a single leaf. The trees of his forest respond to his emotions, growing to block paths or reveal hidden ways as needed. He is effectively immortal as long as the forest survives, regenerating from any wound within the boundaries of his domain.

## Social

## Companions

### Patrons

**The Forest of the Heartwood** — The ancient forest itself sustains Asbjorn and responds to his will. It is both his home and his charge.

**The Woodcutters' Guild** — The local woodsmen who knew Asbjorn in life still leave offerings at his shrine and follow his guidance on which trees may be harvested and which must be spared.

### Enemies

**The Iron Consortium** — A mining and logging operation that seeks to clear-cut vast tracts of ancient forest. They have hired mercenaries to deal with the 'forest spirit' that has been disrupting their operations.

**The Curse-Maker** — The unknown creator of the artifact that spawned the fire-worms. Asbjorn senses that this entity is aware of him and planning something new.

## Plot Hooks

1. **The Forest's Edge** — The Iron Consortium has brought in powerful sorcerers to counter Asbjorn's influence, and the forest is being pushed back. Asbjorn needs mortal allies who can act beyond the forest's boundaries.

2. **The Fading Man** — Asbjorn's memories of his mortal life are slipping away faster than expected. He reaches out to his descendants, hoping that reconnecting with his human family can anchor his fading identity.

3. **The Second Curse** — New fire-worms have appeared in a distant forest, and the pattern matches the original curse. Asbjorn cannot leave his forest to investigate, so he must find agents willing to travel there and stop the corruption before it reaches his domain.
