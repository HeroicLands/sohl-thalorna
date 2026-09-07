---
tags:
  - draft
  - common-folk
name:
  full: Wystan Osgood
  title: ""
  given: Wystan
  clan: Osgood
  home: Brynhallow
  aliases:
    - Finn the Ratcatcher
packFolder: aureldiaaelwyth
shortcode: wystanosgd
img: icons/person.svg
type: being
data:
  portrait: images/being/wystanosgd-portrait.webp
  templatePriority: null
  archetypes: []
  occupation: Ratter
  stations: []
  lore:
    - aelwythanclt
    - commonerrnk
  homes:
    - aelwyth
  affiliations:
    - kngdmldrth
  gender: male
  species: null
  age: 34
  birthday: 690/3/21
  height: 1.75
  weight: 73
  frame: medium
  appearance:
    eye_color: green
    hair_color: blonde
    skin_color: light
    complexion: clear
    extra_features: []
sohl:
  templatePriority: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 17 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 9 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: morvana, type: affiliation }
    - { shortcode: cook, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: folklr, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: math, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: pysn, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: thrvrdhscrpt, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: chrm, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: cmd, type: skill, system: { masteryLevelBase: 22 } }
    - { shortcode: dscr, type: skill, system: { masteryLevelBase: 24 } }
    - { shortcode: guil, type: skill, system: { masteryLevelBase: 33 } }
    - { shortcode: intr, type: skill, system: { masteryLevelBase: 55 } }
    - { shortcode: sing, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: thtcs, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: anmcft, type: skill, system: { masteryLevelBase: 50 } }
    - { shortcode: herb, type: skill, system: { masteryLevelBase: 75 } }
    - { shortcode: smsh, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: srvl, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: trak, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: awar, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: clmb, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: dnce, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: jump, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: ridg, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: stlth, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: swim, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: archery, type: skill, system: { masteryLevelBase: 17 } }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: melee, type: skill, system: { masteryLevelBase: 80 } }
    - { shortcode: thro, type: skill, system: { masteryLevelBase: 48 } }
    - { shortcode: draw, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: hide, type: skill, system: { masteryLevelBase: 48 } }
    - { shortcode: lock, type: skill, system: { masteryLevelBase: 16 } }
    - { shortcode: wood, type: skill, system: { masteryLevelBase: 42 } }
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

Wystan Osgood is a 34-year-old man who stands 5'9" tall and is of moderate build. He has a heart-shaped face with wide-set cheekbones, a high forehead, and a rounded jaw that leads to a delicate chin. His hooded green eyes sit beneath straight brows, lending him a guarded gaze. A straight nose and narrow lips complete his features. He has light skin with a clear complexion. His blonde hair is shoulder-length and loose.

# Dossier {#dossier}

Born in the Aelwyth region to a freeman family of Aelwythan heritage, Wystan Osgood came into the world of the ratter through a combination of circumstance and aptitude.

Finn has spent most of his life catching rats in the bustling streets of the city. Known for his quick reflexes and keen sense of smell, he uses a combination of traps and trained ferrets to control rodent populations. Finn is a familiar figure in his neighborhood, often seen with his loyal ferret companion, Squeak. His skills are in high demand, especially in homes and markets plagued by infestations.

Now at 34 years of age, Wystan Osgood has established himself as a known figure among the ratters of Aelwyth. His reputation, for better or worse, precedes him in the circles where such things matter.

## Psyche

### Personality

Can be overly obsessed with his work, struggles with social interactions outside his profession.

### Motivation

Wystan is driven by the desire to master his craft and secure a stable future. The uncertainties of life in ratter work keep him vigilant and adaptable.

### Strengths

Skilled in trapping and rodent behavior, good at navigating urban environments, resourceful.

## Social

Wystan is affiliated with None; works independently..

As a Aelwythan ratter, Wystan occupies a recognized social niche within Aelwyth society.

## Companions

### Patrons

Wystan's primary patron is Local merchants and households seeking to control rat populations.. This relationship provides both opportunity and obligation.

### Enemies

Few; generally well-respected, but some rats may evade his traps.

## Plot Hooks

1. **The Ratter's Dilemma** — Wystan faces a professional crisis that threatens his livelihood. A choice must be made between principle and survival, and the consequences will ripple through his community in Aelwyth.

2. **Old Grudges** — Few; generally well-respected, but some rats may evade his traps. This conflict threatens to escalate beyond personal rivalry into something far more dangerous.

3. **Echoes of the Past** — Something from Wystan's earlier life resurfaces unexpectedly, forcing him to confront unfinished business that he thought was long buried.

4. **Shifting Winds** — Political changes in Aelwyth threaten to upend the social order that Wystan depends upon. He must decide whether to adapt, resist, or flee.

5. **The Opportunity** — A chance encounter offers Wystan the possibility of advancement beyond anything he has dared hope for — but the price may be higher than it first appears.
