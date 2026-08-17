---
aliases:
  - Nílara Tólgen
  - Nilara Tolgen
  - character-nilaratlgn
tags: []
name:
  full: Nílara Tólgen
  title: ""
  given: Nílara
  clan: Tólgen
  home: Lunacòrte
  aliases:
    - Maelis Oakhand
id: uquhXz3G0aQ3IDAd
folder: J9R0fnGUTBY5z4pd
shortcode: nilaratlgn
img: icons/person.svg
draft: true
portrait: images/being/nilaratlgn-portrait.webp
type: character
package: thalorna
social:
  occupation: Yeoman Archer
  station: soldiery
  class: freeman
  society: Provenzian
traits:
  gender: female
  age: 27
  birthday: 693/3/22
  height:
    m: 1.78
  weight:
    kg: 73
  build:
    frame: light
  appearance:
    eye_color: hazel
    hair_color: chestnut
    skin_color: olive_tanned
    complexion: weathered
    extra_features:
      - a tattoo of a spider on the shoulder
gear:
  weapons:
    - Shortbow
  armor:
    - Leather armor
  misc:
    - Quiver for arrows
    - Hunting knife
    - spare arrows
    - map of the local area
sohl:
  attributes:
    str: 12
    end: 12
    dex: 17
    agl: 16
    per: 15
    cml: 12
    aur: 11
    wil: 13
    rea: 12
    cre: 13
    emp: 11
    elo: 12
    mor: 14
    voi: 13
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
    - shortcode: taranon
      type: affiliation
    - shortcode: brew
      type: skill
      system:
        masteryLevelBase: 28
    - shortcode: cook
      type: skill
      system:
        masteryLevelBase: 28
    - shortcode: folklr
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: law
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: pysn
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: shpw
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: chrm
      type: skill
      system:
        masteryLevelBase: 36
    - shortcode: cmd
      type: skill
      system:
        masteryLevelBase: 26
    - shortcode: dscr
      type: skill
      system:
        masteryLevelBase: 24
    - shortcode: guil
      type: skill
      system:
        masteryLevelBase: 36
    - shortcode: intr
      type: skill
      system:
        masteryLevelBase: 33
    - shortcode: sing
      type: skill
      system:
        masteryLevelBase: 33
    - shortcode: thtcs
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: agri
      type: skill
      system:
        masteryLevelBase: 70
    - shortcode: anmcft
      type: skill
      system:
        masteryLevelBase: 36
    - shortcode: fish
      type: skill
      system:
        masteryLevelBase: 28
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
        masteryLevelBase: 48
    - shortcode: dnce
      type: skill
      system:
        masteryLevelBase: 30
    - shortcode: jump
      type: skill
      system:
        masteryLevelBase: 42
    - shortcode: ridg
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: stlth
      type: skill
      system:
        masteryLevelBase: 60
    - shortcode: swim
      type: skill
      system:
        masteryLevelBase: 14
    - shortcode: archery
      type: skill
      system:
        masteryLevelBase: 64
    - shortcode: init
      type: skill
      system:
        masteryLevelBase: 52
    - shortcode: melee
      type: skill
      system:
        masteryLevelBase: 68
    - shortcode: thro
      type: skill
      system:
        masteryLevelBase: 32
    - shortcode: cmcs
      type: skill
      system:
        masteryLevelBase: 16
    - shortcode: draw
      type: skill
      system:
        masteryLevelBase: 15
    - shortcode: fltch
      type: skill
      system:
        masteryLevelBase: 80
    - shortcode: mtlc
      type: skill
      system:
        masteryLevelBase: 15
    - shortcode: tlnt
      type: skill
      system:
        masteryLevelBase: 36
thalorna:
  realm: kngdmprvnz
  region: provenzrgn
harnworld:
  realm: Provenzia
  ritual: []
---

# Appearance {#appearance}

Nílara Tólgen is a 27-year-old woman who stands 5'10" tall and is slender. She has a long face with soft cheekbones, a wide forehead, and an angular jaw that leads to a firm chin. Her wide-set hazel eyes sit beneath straight brows, lending her an open gaze. An aquiline nose and thin lips complete her features. She has olive-tanned skin with a weathered complexion. Her chestnut hair is twisted into an elaborate arrangement.

# Dossier {#dossier}

Born in the Provènzia region to a freeman family of Provenzian heritage, Nílara Tólgen came into the world of the yeoman archer through a combination of circumstance and aptitude.

Maelis grew up on the outskirts of the village, where her father taught her to use a bow for hunting. Her skills caught the eye of a local militia leader, who recruited her as a yeoman archer. Maelis is known for her speed and agility, allowing her to quickly reposition during battles. She is highly regarded for her ability to hit moving targets.

Now at 27 years of age, Nílara Tólgen has established herself as a known figure among the yeoman archers of Provènzia. Her reputation, for better or worse, precedes her in the circles where such things matter.

## Psyche

### Personality

Lacks strength for melee combat, can be overly reliant on her speed.

### Motivation

Nílara is driven by the desire to master her craft and secure a stable future. The uncertainties of life in yeoman archer work keep her vigilant and adaptable.

### Strengths

Skilled archer, quick and agile, excellent at tracking.

## Social

Nílara is affiliated with Local Militia.

As a Provenzian yeoman archer, Nílara occupies a recognized social niche within Provènzia society.

## Companions

### Patrons

Nílara's primary patron is Local hunters and militia who have seen her skill firsthand.. This relationship provides both opportunity and obligation.

### Enemies

Poachers who encroach on her territory.

## Plot Hooks

1. **The Yeoman Archer's Dilemma** — Nílara faces a professional crisis that threatens her livelihood. A choice must be made between principle and survival, and the consequences will ripple through her community in Provènzia.

2. **Old Grudges** — Poachers who encroach on her territory. This conflict threatens to escalate beyond personal rivalry into something far more dangerous.

3. **Echoes of the Past** — Something from Nílara's earlier life resurfaces unexpectedly, forcing her to confront unfinished business that she thought was long buried.

4. **Shifting Winds** — Political changes in Provènzia threaten to upend the social order that Nílara depends upon. She must decide whether to adapt, resist, or flee.

5. **The Opportunity** — A chance encounter offers Nílara the possibility of advancement beyond anything she has dared hope for — but the price may be higher than it first appears.
