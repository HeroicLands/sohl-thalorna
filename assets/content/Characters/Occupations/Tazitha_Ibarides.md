---
aliases:
  - Tázîtha Ibârîdês
  - Tazitha Ibarides
  - being-tazithbrds
tags: []
name:
  full: Tázîtha Ibârîdês
  title: ""
  given: Tázîtha
  clan: Ibârîdês
  home: Pelagora
  aliases:
    - Mirna Woodsong
id: JQTFjmsn9dLVIdVu
folder: gpXd1anXulwRWZqn
shortcode: tazithbrds
img: icons/person.svg
draft: true
portrait: images/being/tazithbrds-portrait.webp
type: being
package: thalorna
social:
  occupation: Charcoaler
  station: common_folk
  class: freeman
  society: Helionite
traits:
  gender: female
  age: 29
  birthday: 691/2/23
  height:
    m: 1.85
  weight:
    kg: 79
  build:
    frame: light
  appearance:
    eye_color: hazel
    hair_color: brown
    skin_color: olive
    complexion: olive_toned
    extra_features:
      - a scar on the right wrist
gear:
  weapons:
    - Wooden staff
  armor:
    - Woolen cloak
  misc:
    - Leather sacks for carrying charcoal
    - Kiln tools
    - herbs
    - tndrbx
sohl:
  attributes:
    str: 12
    end: 15
    dex: 11
    agl: 12
    per: 14
    cml: 11
    aur: 12
    wil: 13
    rea: 11
    cre: 10
    emp: 9
    elo: 8
    mor: 13
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
      base: 174
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
    - shortcode: karnavos
      type: affiliation
    - shortcode: cook
      type: skill
      system:
        masteryLevelBase: 26
    - shortcode: folklr
      type: skill
      system:
        masteryLevelBase: 24
    - shortcode: pysn
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: chrm
      type: skill
      system:
        masteryLevelBase: 40
    - shortcode: cmd
      type: skill
      system:
        masteryLevelBase: 22
    - shortcode: dscr
      type: skill
      system:
        masteryLevelBase: 20
    - shortcode: guil
      type: skill
      system:
        masteryLevelBase: 27
    - shortcode: intr
      type: skill
      system:
        masteryLevelBase: 30
    - shortcode: sing
      type: skill
      system:
        masteryLevelBase: 30
    - shortcode: thtcs
      type: skill
      system:
        masteryLevelBase: 9
    - shortcode: fish
      type: skill
      system:
        masteryLevelBase: 28
    - shortcode: srvl
      type: skill
      system:
        masteryLevelBase: 60
    - shortcode: timb
      type: skill
      system:
        masteryLevelBase: 65
    - shortcode: trak
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: awar
      type: skill
      system:
        masteryLevelBase: 42
    - shortcode: clmb
      type: skill
      system:
        masteryLevelBase: 36
    - shortcode: dnce
      type: skill
      system:
        masteryLevelBase: 22
    - shortcode: jump
      type: skill
      system:
        masteryLevelBase: 48
    - shortcode: ridg
      type: skill
      system:
        masteryLevelBase: 10
    - shortcode: stlth
      type: skill
      system:
        masteryLevelBase: 36
    - shortcode: swim
      type: skill
      system:
        masteryLevelBase: 26
    - shortcode: archery
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: init
      type: skill
      system:
        masteryLevelBase: 48
    - shortcode: melee
      type: skill
      system:
        masteryLevelBase: 22
    - shortcode: thro
      type: skill
      system:
        masteryLevelBase: 24
    - shortcode: draw
      type: skill
      system:
        masteryLevelBase: 11
    - shortcode: fltch
      type: skill
      system:
        masteryLevelBase: 24
    - shortcode: mtlc
      type: skill
      system:
        masteryLevelBase: 22
    - shortcode: wood
      type: skill
      system:
        masteryLevelBase: 33
    - shortcode: tlnt
      type: skill
      system:
        masteryLevelBase: 36
thalorna:
  realm: pelagora
  region: helionis
harnworld:
  realm: Bethua
  ritual: []
---

# Appearance {#appearance}

Tázîtha Ibârîdês is a 29-year-old woman who stands 6'1" tall and is slender. She has an angular face with prominent cheekbones, a smooth forehead, and a sharp jaw that leads to a firm chin. Her almond-shaped hazel eyes sit beneath straight brows, lending her a measured gaze. A prominent nose and firm lips complete her features. She has olive skin with an olive-toned complexion. Her brown hair is gathered in a practical bun. A notable feature is calloused hands from years of hard work.

# Dossier {#dossier}

Born in the Heliónis region to a freeman family of Helionite heritage, Tázîtha Ibârîdês came into the world of the charcoaler through a combination of circumstance and aptitude.

Mirna is one of the few female charcoalers in her area, having learned the trade from her uncle. She enjoys the solitude of the forest and takes great care in her work. Her charcoal is known for being exceptionally clean-burning, and she often supplies local forges as well as herbalists who use it in remedies.

Now at 29 years of age, Tázîtha Ibârîdês has established herself as a known figure among the charcoalers of Heliónis. Her reputation, for better or worse, precedes her in the circles where such things matter.

## Psyche

### Personality

Can be overly reclusive, sometimes avoids people for weeks at a time.

### Motivation

Tázîtha is driven by the desire to master her craft and secure a stable future. The uncertainties of life in charcoaler work keep her vigilant and adaptable.

### Strengths

Highly skilled at producing high-quality charcoal, enjoys the physical work.

## Social

Tázîtha is affiliated with None; prefers to work independently..

As a Helionite charcoaler, Tázîtha occupies a recognized social niche within Heliónis society.

## Companions

### Patrons

Tázîtha's primary patron is Local forges and herbalists who value the quality of her charcoal.. This relationship provides both opportunity and obligation.

### Enemies

Rival charcoalers who think the trade should be left to men.

## Plot Hooks

1. **The Charcoaler's Dilemma** — Tázîtha faces a professional crisis that threatens her livelihood. A choice must be made between principle and survival, and the consequences will ripple through her community in Heliónis.

2. **Old Grudges** — Rival charcoalers who think the trade should be left to men. This conflict threatens to escalate beyond personal rivalry into something far more dangerous.

3. **Echoes of the Past** — Something from Tázîtha's earlier life resurfaces unexpectedly, forcing her to confront unfinished business that she thought was long buried.

4. **Shifting Winds** — Political changes in Heliónis threaten to upend the social order that Tázîtha depends upon. She must decide whether to adapt, resist, or flee.

5. **The Opportunity** — A chance encounter offers Tázîtha the possibility of advancement beyond anything she has dared hope for — but the price may be higher than it first appears.
