---
aliases:
  - Rísàkós Ibârìthôs
  - Risakos Ibarithos
  - being-risksbrths
tags:
  - draft
name:
  full: Rísàkós Ibârìthôs
  title: ""
  given: Rísàkós
  clan: Ibârìthôs
  home: Korinthea
  aliases:
    - Osbert Kett
id: do0cZuzren68K4Tu
folder: gpXd1anXulwRWZqn
shortcode: risksbrths
img: icons/person.svg
portrait: images/being/risksbrths-portrait.webp
type: being
package: thalorna
social:
  occupation: Apothecary
  station: tradesfolk
  class: freeman
  society: Helionite
traits:
  gender: male
  age: 46
  birthday: 674/2/11
  height:
    m: 1.73
  weight:
    kg: 66
  build:
    frame: medium
  appearance:
    eye_color: brown
    hair_color: black
    skin_color: olive
    complexion: clear
    extra_features:
      - a scar on the left calf
gear:
  weapons:
    - Dagger
  armor:
    - Thick leather gloves
  misc:
    - Belt pouch with vials
    - Poison samples
    - antidote recipes
    - medical toolkit
sohl:
  attributes:
    str: 11
    end: 13
    dex: 12
    agl: 10
    per: 14
    cml: 8
    aur: 12
    wil: 13
    rea: 14
    cre: 11
    emp: 9
    elo: 11
    mor: 8
    voi: 10
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
      base: 146
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
    - shortcode: florania
      type: affiliation
    - shortcode: brew
      type: skill
      system:
        masteryLevelBase: 14
    - shortcode: cook
      type: skill
      system:
        masteryLevelBase: 28
    - shortcode: folklr
      type: skill
      system:
        masteryLevelBase: 14
    - shortcode: math
      type: skill
      system:
        masteryLevelBase: 26
    - shortcode: mrcn
      type: skill
      system:
        masteryLevelBase: 28
    - shortcode: pysn
      type: skill
      system:
        masteryLevelBase: 28
    - shortcode: script
      type: skill
      system:
        masteryLevelBase: 56
    - shortcode: chrm
      type: skill
      system:
        masteryLevelBase: 32
    - shortcode: cmd
      type: skill
      system:
        masteryLevelBase: 24
    - shortcode: dscr
      type: skill
      system:
        masteryLevelBase: 26
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
        masteryLevelBase: 11
    - shortcode: herb
      type: skill
      system:
        masteryLevelBase: 70
    - shortcode: mnrl
      type: skill
      system:
        masteryLevelBase: 56
    - shortcode: srvl
      type: skill
      system:
        masteryLevelBase: 39
    - shortcode: awar
      type: skill
      system:
        masteryLevelBase: 42
    - shortcode: clmb
      type: skill
      system:
        masteryLevelBase: 55
    - shortcode: dnce
      type: skill
      system:
        masteryLevelBase: 40
    - shortcode: jump
      type: skill
      system:
        masteryLevelBase: 30
    - shortcode: lgdm
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: ridg
      type: skill
      system:
        masteryLevelBase: 9
    - shortcode: stlth
      type: skill
      system:
        masteryLevelBase: 33
    - shortcode: swim
      type: skill
      system:
        masteryLevelBase: 33
    - shortcode: archery
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: init
      type: skill
      system:
        masteryLevelBase: 39
    - shortcode: melee
      type: skill
      system:
        masteryLevelBase: 22
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
        masteryLevelBase: 12
    - shortcode: musc
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: txtl
      type: skill
      system:
        masteryLevelBase: 26
    - shortcode: tlnt
      type: skill
      system:
        masteryLevelBase: 36
thalorna:
  realm: korinthea
  region: helionis
harnworld:
  realm: Bethua
  ritual: []
---

# Appearance {#appearance}

Rísàkós Ibârìthôs is a 46-year-old man who stands 5'8" tall and is of moderate build. He has a long face with prominent cheekbones, a high forehead, and a square jaw that leads to a square chin. His bright brown eyes sit beneath heavy brows, lending him a lively gaze. A straight nose and firm lips complete his features. He has olive skin with a clear complexion. His black hair is tied in a low tail.

# Dossier {#dossier}

Born in the Heliónis region to a freeman family of Helionite heritage, Rísàkós Ibârìthôs came into the world of the apothecary through a combination of circumstance and aptitude.

Osbert began as an assistant to an apothecary who dealt with both legitimate medicine and more questionable practices. He learned a wide variety of skills, from crafting remedies to mixing poisons. He now runs a small apothecary shop on the outskirts of town, where he serves both the desperate and the morally dubious.

Now at 46 years of age, Rísàkós Ibârìthôs has established himself as a known figure among the apothecarys of Heliónis. His reputation, for better or worse, precedes him in the circles where such things matter.

## Psyche

### Personality

Morally flexible and willing to bend the rules for the right price.

### Motivation

Rísàkós is driven by the desire to master his craft and secure a stable future. The uncertainties of life in apothecary work keep him vigilant and adaptable.

### Strengths

Extensive knowledge of toxins and antidotes.

## Social

Rísàkós is affiliated with Underground Apothecaries.

As a Helionite apothecary, Rísàkós occupies a recognized social niche within Heliónis society.

## Companions

### Patrons

Rísàkós's primary patron is Criminals, mercenaries, and desperate people.. This relationship provides both opportunity and obligation.

### Enemies

The city watch, who are suspicious of his dealings.

## Plot Hooks

1. **The Apothecary's Dilemma** — Rísàkós faces a professional crisis that threatens his livelihood. A choice must be made between principle and survival, and the consequences will ripple through his community in Heliónis.

2. **Old Grudges** — The city watch, who are suspicious of his dealings. This conflict threatens to escalate beyond personal rivalry into something far more dangerous.

3. **Echoes of the Past** — Something from Rísàkós's earlier life resurfaces unexpectedly, forcing him to confront unfinished business that he thought was long buried.

4. **Shifting Winds** — Political changes in Heliónis threaten to upend the social order that Rísàkós depends upon. He must decide whether to adapt, resist, or flee.

5. **The Opportunity** — A chance encounter offers Rísàkós the possibility of advancement beyond anything he has dared hope for — but the price may be higher than it first appears.
