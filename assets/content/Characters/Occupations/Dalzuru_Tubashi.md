---
aliases:
  - Dalzûru Tûbashî
  - Dalzuru Tubashi
  - character-dalzurtbsh
tags: []
name:
  full: Dalzûru Tûbashî
  title: ""
  given: Dalzûru
  clan: Tûbashî
  home: Kethara
  aliases:
    - Sigurd Ravensong
id: RWUXQR1iOg5OPctY
folder: PuQFDMkRM9i60i5Z
shortcode: dalzurtbsh
img: icons/person.svg
draft: true
portrait: images/being/dalzurtbsh-portrait.webp
type: character
package: thalorna
social:
  occupation: Skald
  station: tradesfolk
  class: freeman
  society: Haradian
traits:
  gender: male
  age: 43
  birthday: 677/5/16
  height:
    m: 1.78
  weight:
    kg: 73
  build:
    frame: medium
  appearance:
    eye_color: hazel
    hair_color: dark_brown
    skin_color: medium
    complexion: olive_toned
    extra_features:
      - a tattoo of a falcon on the right arm
gear:
  weapons:
    - Short sword
  armor:
    - Thick fur cloak
  misc:
    - Leather satchel for scrolls
    - Carved runestones
    - drinking horn
    - hand drum
sohl:
  attributes:
    str: 13
    end: 14
    dex: 12
    agl: 11
    per: 15
    cml: 10
    aur: 13
    wil: 14
    rea: 12
    cre: 16
    emp: 12
    elo: 17
    mor: 13
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
      base: 161
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
    - shortcode: lusinia
      type: affiliation
    - shortcode: brew
      type: skill
      system:
        masteryLevelBase: 42
    - shortcode: cook
      type: skill
      system:
        masteryLevelBase: 28
    - shortcode: folklr
      type: skill
      system:
        masteryLevelBase: 52
    - shortcode: pysn
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: script
      type: skill
      system:
        masteryLevelBase: 39
    - shortcode: shpw
      type: skill
      system:
        masteryLevelBase: 14
    - shortcode: chrm
      type: skill
      system:
        masteryLevelBase: 33
    - shortcode: cmd
      type: skill
      system:
        masteryLevelBase: 30
    - shortcode: dscr
      type: skill
      system:
        masteryLevelBase: 28
    - shortcode: guil
      type: skill
      system:
        masteryLevelBase: 42
    - shortcode: intr
      type: skill
      system:
        masteryLevelBase: 60
    - shortcode: sing
      type: skill
      system:
        masteryLevelBase: 65
    - shortcode: thtcs
      type: skill
      system:
        masteryLevelBase: 16
    - shortcode: srvl
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: awar
      type: skill
      system:
        masteryLevelBase: 75
    - shortcode: clmb
      type: skill
      system:
        masteryLevelBase: 44
    - shortcode: dnce
      type: skill
      system:
        masteryLevelBase: 26
    - shortcode: jump
      type: skill
      system:
        masteryLevelBase: 48
    - shortcode: ridg
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: stlth
      type: skill
      system:
        masteryLevelBase: 36
    - shortcode: swim
      type: skill
      system:
        masteryLevelBase: 24
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
        masteryLevelBase: 36
    - shortcode: thro
      type: skill
      system:
        masteryLevelBase: 26
    - shortcode: cmcs
      type: skill
      system:
        masteryLevelBase: 26
    - shortcode: draw
      type: skill
      system:
        masteryLevelBase: 14
    - shortcode: glas
      type: skill
      system:
        masteryLevelBase: 14
    - shortcode: mtlc
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
    - shortcode: tlnt
      type: skill
      system:
        masteryLevelBase: 39
    - shortcode: common
      type: skill
      system:
        masteryLevelBase: 75
thalorna:
  realm: cnfdrtnhrdnstts
  region: haradregin
harnworld:
  realm: Helionis
  ritual: []
---

# Appearance {#appearance}

Dalzûru Tûbashî is a 43-year-old man who stands 5'10" tall and is of moderate build. He has an angular face with prominent cheekbones, a high forehead, and a narrow jaw that leads to a strong chin. His large hazel eyes sit beneath arched brows, lending him an expressive gaze. A straight nose and curved lips complete his features. He has medium-toned skin with an olive-toned complexion. His dark brown hair is cropped short.

# Dossier {#dossier}

Born in the Harad region to a freeman family of Haradian heritage, Dalzûru Tûbashî came into the world of the skald through a combination of circumstance and aptitude.

Sigurd was raised in a warrior's family but found his true calling as a skald, weaving tales of valor and tragedy in the mead halls. He is renowned for his vivid storytelling and deep, resonant voice, often recounting the sagas of ancient heroes. Though he can wield a sword, he prefers to wield words and music to inspire others.

Now at 43 years of age, Dalzûru Tûbashî has established himself as a known figure among the skalds of Harad. His reputation, for better or worse, precedes him in the circles where such things matter.

## Psyche

### Personality

Sometimes perceived as aloof, struggles to adapt stories for different audiences.

### Motivation

Dalzûru is driven by the desire to master his craft and secure a stable future. The uncertainties of life in skald work keep him vigilant and adaptable.

### Strengths

Skilled storyteller, powerful voice, knowledgeable in Normen history.

## Social

Dalzûru is affiliated with Nordic Skalds' Guild.

As a Haradian skald, Dalzûru occupies a recognized social niche within Harad society.

## Companions

### Patrons

Dalzûru's primary patron is Local chieftains and warriors who appreciate his tales of heroism.. This relationship provides both opportunity and obligation.

### Enemies

Rival skalds who envy his skill and fame.

## Plot Hooks

1. **The Skald's Dilemma** — Dalzûru faces a professional crisis that threatens his livelihood. A choice must be made between principle and survival, and the consequences will ripple through his community in Harad.

2. **Old Grudges** — Rival skalds who envy his skill and fame. This conflict threatens to escalate beyond personal rivalry into something far more dangerous.

3. **Echoes of the Past** — Something from Dalzûru's earlier life resurfaces unexpectedly, forcing him to confront unfinished business that he thought was long buried.

4. **Shifting Winds** — Political changes in Harad threaten to upend the social order that Dalzûru depends upon. He must decide whether to adapt, resist, or flee.

5. **The Opportunity** — A chance encounter offers Dalzûru the possibility of advancement beyond anything he has dared hope for — but the price may be higher than it first appears.
