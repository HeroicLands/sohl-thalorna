---
aliases:
  - Zálren Lýskal
  - Zalren Lyskal
  - character-zalrnlyskl
tags: []
name:
  full: Zálren Lýskal
  title: ""
  given: Zálren
  clan: Lýskal
  home: Chastèlclair
  aliases:
    - Harvin Greenbark
id: kaACSMEscosTsS3D
folder: J9R0fnGUTBY5z4pd
shortcode: zalrnlyskl
img: icons/person.svg
draft: true
portrait: images/being/zalrnlyskl-portrait.webp
type: character
package: thalorna
social:
  occupation: Woodcrafter
  station: tradesfolk
  class: freeman
  society: Provenzian
traits:
  gender: male
  age: 54
  birthday: 666/2/26
  height:
    m: 1.83
  weight:
    kg: 80
  build:
    frame: medium
  appearance:
    eye_color: blue
    hair_color: gray
    skin_color: medium
    complexion: olive_toned
    extra_features:
      - a tattoo of a butterfly on the neck
gear:
  weapons:
    - Woodcutting axe
  armor:
    - Heavy leather apron
  misc:
    - Large wooden chest for tools
    - Saw
    - wood glue
    - planing tools
sohl:
  attributes:
    str: 14
    end: 13
    dex: 12
    agl: 11
    per: 14
    cml: 10
    aur: 12
    wil: 14
    rea: 13
    cre: 11
    emp: 12
    elo: 10
    mor: 12
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
      base: 176
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
    - shortcode: sacredforge
      type: affiliation
    - shortcode: cook
      type: skill
      system:
        masteryLevelBase: 70
    - shortcode: folklr
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: pysn
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: chrm
      type: skill
      system:
        masteryLevelBase: 33
    - shortcode: cmd
      type: skill
      system:
        masteryLevelBase: 24
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
        masteryLevelBase: 36
    - shortcode: sing
      type: skill
      system:
        masteryLevelBase: 30
    - shortcode: thtcs
      type: skill
      system:
        masteryLevelBase: 22
    - shortcode: agri
      type: skill
      system:
        masteryLevelBase: 28
    - shortcode: anmcft
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: srvl
      type: skill
      system:
        masteryLevelBase: 14
    - shortcode: timb
      type: skill
      system:
        masteryLevelBase: 28
    - shortcode: awar
      type: skill
      system:
        masteryLevelBase: 42
    - shortcode: clmb
      type: skill
      system:
        masteryLevelBase: 33
    - shortcode: dnce
      type: skill
      system:
        masteryLevelBase: 22
    - shortcode: jump
      type: skill
      system:
        masteryLevelBase: 36
    - shortcode: ridg
      type: skill
      system:
        masteryLevelBase: 24
    - shortcode: stlth
      type: skill
      system:
        masteryLevelBase: 48
    - shortcode: swim
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: archery
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: init
      type: skill
      system:
        masteryLevelBase: 42
    - shortcode: melee
      type: skill
      system:
        masteryLevelBase: 24
    - shortcode: thro
      type: skill
      system:
        masteryLevelBase: 39
    - shortcode: draw
      type: skill
      system:
        masteryLevelBase: 48
    - shortcode: hide
      type: skill
      system:
        masteryLevelBase: 39
    - shortcode: jewl
      type: skill
      system:
        masteryLevelBase: 39
    - shortcode: masn
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: mtlc
      type: skill
      system:
        masteryLevelBase: 65
    - shortcode: mill
      type: skill
      system:
        masteryLevelBase: 14
    - shortcode: wood
      type: skill
      system:
        masteryLevelBase: 52
    - shortcode: tlnt
      type: skill
      system:
        masteryLevelBase: 39
thalorna:
  realm: kngdmprvnz
  region: provenzrgn
harnworld:
  realm: Provenzia
  ritual: []
---

# Appearance {#appearance}

Zálren Lýskal is a 54-year-old man who stands 6'0" tall and is of moderate build. He has an angular face with high cheekbones, a wide forehead, and a strong jaw that leads to a strong chin. His deep-set blue eyes sit beneath straight brows, lending him a watchful gaze. A narrow nose and full lips complete his features. He has medium-toned skin with an olive-toned complexion. His gray hair is combed neatly to one side.

# Dossier {#dossier}

Born in the Provènzia region to a freeman family of Provenzian heritage, Zálren Lýskal came into the world of the woodcrafter through a combination of circumstance and aptitude.

Harvin has been a woodcrafter for over thirty years, known for his craftsmanship in building sturdy furniture and everyday items. He learned the craft from his grandfather, who instilled in him a love for woodworking and a dedication to quality. Harvin's workshop is filled with tools and half-finished projects, reflecting his preference for practicality over aesthetics. Although his work lacks decorative flair, it is highly valued for its durability.

Now at 54 years of age, Zálren Lýskal has established himself as a known figure among the woodcrafters of Provènzia. His reputation, for better or worse, precedes him in the circles where such things matter.

## Psyche

### Personality

Uninterested in decorative work, prefers traditional methods over innovation.

### Motivation

Zálren is driven by the desire to master his craft and secure a stable future. The uncertainties of life in woodcrafter work keep him vigilant and adaptable.

### Strengths

Skilled at creating sturdy, functional items, highly experienced, practical.

## Social

Zálren is affiliated with Rural Craftsmen's Guild.

As a Provenzian woodcrafter, Zálren occupies a recognized social niche within Provènzia society.

## Companions

### Patrons

Zálren's primary patron is Local farmers and townspeople who need durable wooden goods.. This relationship provides both opportunity and obligation.

### Enemies

None; respected for his consistency and reliability.

## Plot Hooks

1. **The Woodcrafter's Dilemma** — Zálren faces a professional crisis that threatens his livelihood. A choice must be made between principle and survival, and the consequences will ripple through his community in Provènzia.

2. **Old Grudges** — None; respected for his consistency and reliability. This conflict threatens to escalate beyond personal rivalry into something far more dangerous.

3. **Echoes of the Past** — Something from Zálren's earlier life resurfaces unexpectedly, forcing him to confront unfinished business that he thought was long buried.

4. **Shifting Winds** — Political changes in Provènzia threaten to upend the social order that Zálren depends upon. He must decide whether to adapt, resist, or flee.

5. **The Opportunity** — A chance encounter offers Zálren the possibility of advancement beyond anything he has dared hope for — but the price may be higher than it first appears.
