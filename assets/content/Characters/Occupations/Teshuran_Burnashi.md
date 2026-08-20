---
aliases:
  - Teshûran Bûrnashî
  - Teshuran Burnashi
  - being-tshrnbrnsh
tags: []
name:
  full: Teshûran Bûrnashî
  title: ""
  given: Teshûran
  clan: Bûrnashî
  home: Kethara
  aliases:
    - Galen Stonehart
id: u5IfijoySjTneAAv
folder: PuQFDMkRM9i60i5Z
shortcode: tshrnbrnsh
img: icons/person.svg
draft: true
portrait: images/being/tshrnbrnsh-portrait.webp
type: being
package: thalorna
social:
  occupation: Swordmaster
  station: soldiery
  class: freeman
  society: Haradian
traits:
  gender: male
  age: 50
  birthday: 670/2/4
  height:
    m: 1.83
  weight:
    kg: 84
  build:
    frame: heavy
  appearance:
    eye_color: dark_brown
    hair_color: gray
    skin_color: medium
    complexion: weathered
    extra_features:
      - a scar running down the back
gear:
  weapons:
    - Bastard sword
  armor:
    - Chainmail
  misc:
    - Leather scabbard
    - wpnsup
    - wooden practice swords
    - eye patch
sohl:
  attributes:
    str: 15
    end: 14
    dex: 13
    agl: 12
    per: 11
    cml: 9
    aur: 11
    wil: 15
    rea: 12
    cre: 11
    emp: 10
    elo: 11
    mor: 11
    voi: 12
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
      base: 185
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
    - shortcode: taranon
      type: affiliation
    - shortcode: cook
      type: skill
      system:
        masteryLevelBase: 22
    - shortcode: folklr
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: hrld
      type: skill
      system:
        masteryLevelBase: 52
    - shortcode: pysn
      type: skill
      system:
        masteryLevelBase: 24
    - shortcode: script
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: chrm
      type: skill
      system:
        masteryLevelBase: 27
    - shortcode: cmd
      type: skill
      system:
        masteryLevelBase: 26
    - shortcode: dscr
      type: skill
      system:
        masteryLevelBase: 48
    - shortcode: guil
      type: skill
      system:
        masteryLevelBase: 30
    - shortcode: intr
      type: skill
      system:
        masteryLevelBase: 33
    - shortcode: sing
      type: skill
      system:
        masteryLevelBase: 30
    - shortcode: thtcs
      type: skill
      system:
        masteryLevelBase: 22
    - shortcode: anmcft
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: fish
      type: skill
      system:
        masteryLevelBase: 26
    - shortcode: herb
      type: skill
      system:
        masteryLevelBase: 24
    - shortcode: srvl
      type: skill
      system:
        masteryLevelBase: 14
    - shortcode: timb
      type: skill
      system:
        masteryLevelBase: 11
    - shortcode: awar
      type: skill
      system:
        masteryLevelBase: 39
    - shortcode: clmb
      type: skill
      system:
        masteryLevelBase: 36
    - shortcode: dnce
      type: skill
      system:
        masteryLevelBase: 48
    - shortcode: jump
      type: skill
      system:
        masteryLevelBase: 39
    - shortcode: ridg
      type: skill
      system:
        masteryLevelBase: 11
    - shortcode: stlth
      type: skill
      system:
        masteryLevelBase: 52
    - shortcode: swim
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: archery
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: init
      type: skill
      system:
        masteryLevelBase: 70
    - shortcode: melee
      type: skill
      system:
        masteryLevelBase: 52
    - shortcode: thro
      type: skill
      system:
        masteryLevelBase: 48
    - shortcode: draw
      type: skill
      system:
        masteryLevelBase: 24
    - shortcode: fltch
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: mtlc
      type: skill
      system:
        masteryLevelBase: 14
    - shortcode: mill
      type: skill
      system:
        masteryLevelBase: 26
    - shortcode: wpnc
      type: skill
      system:
        masteryLevelBase: 70
    - shortcode: tlnt
      type: skill
      system:
        masteryLevelBase: 39
    - shortcode: lang
      type: skill
      system:
        masteryLevelBase: 33
thalorna:
  realm: cnfdrtnhrdnstts
  region: haradregin
harnworld:
  realm: Helionis
  ritual: []
---

# Appearance {#appearance}

Teshûran Bûrnashî is a 50-year-old man who stands 6'0" tall and is broad and solidly built. He has a diamond face with soft cheekbones, a lined forehead, and a sharp jaw that leads to a pointed chin. His round dark brown eyes sit beneath prominent brows, lending him a candid gaze. A prominent nose and thin lips complete his features. He has medium-toned skin with a weathered complexion. His gray hair is tied in a low tail.

# Dossier {#dossier}

Born in the Harad region to a freeman family of Haradian heritage, Teshûran Bûrnashî came into the world of the swordmaster through a combination of circumstance and aptitude.

Galen was a mercenary who spent most of his life fighting in various skirmishes and wars. After losing his left eye in a battle, he retired from mercenary life and settled in a small village, where he teaches swordsmanship to young men and women seeking to defend their homeland. Galen's experience in real combat sets him apart from other swordmasters, but his past haunts him, and he struggles with guilt over the lives he took.

Now at 50 years of age, Teshûran Bûrnashî has established himself as a known figure among the swordmasters of Harad. His reputation, for better or worse, precedes him in the circles where such things matter.

## Psyche

### Personality

Haunted by his past, struggles with the morality of his former life.

### Motivation

Teshûran's driving force is the search that defines his life — a quest that shapes every decision he makes and every risk he takes.

### Strengths

Combat experience, skilled in practical sword techniques, tough and resilient.

## Social

Teshûran is affiliated with None; works independently in the village..

As a Haradian swordmaster, Teshûran occupies a recognized social niche within Harad society.

## Companions

### Patrons

Teshûran's primary patron is Local villagers who seek his instruction for defense.. This relationship provides both opportunity and obligation.

### Enemies

Former mercenary comrades who hold grudges from past conflicts.

## Plot Hooks

1. **The Swordmaster's Dilemma** — Teshûran faces a professional crisis that threatens his livelihood. A choice must be made between principle and survival, and the consequences will ripple through his community in Harad.

2. **Old Grudges** — Former mercenary comrades who hold grudges from past conflicts. This conflict threatens to escalate beyond personal rivalry into something far more dangerous.

3. **Echoes of the Past** — Something from Teshûran's earlier life resurfaces unexpectedly, forcing him to confront unfinished business that he thought was long buried.

4. **Shifting Winds** — Political changes in Harad threaten to upend the social order that Teshûran depends upon. He must decide whether to adapt, resist, or flee.

5. **The Opportunity** — A chance encounter offers Teshûran the possibility of advancement beyond anything he has dared hope for — but the price may be higher than it first appears.
