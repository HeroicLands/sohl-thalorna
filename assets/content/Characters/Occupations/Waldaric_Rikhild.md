---
aliases:
  - Waldaric Ríkhild
  - Waldaric Rikhild
  - character-wldrcrkhld
tags: []
name:
  full: Waldaric Ríkhild
  title: ""
  given: Waldaric
  clan: Ríkhild
  home: Grimholt
  aliases:
    - Edric Bannerman
id: RZzUk1D6iNIb6zLK
folder: Nu7AgLZEmR26u2pk
shortcode: wldrcrkhld
img: icons/person.svg
draft: true
portrait: images/being/wldrcrkhld-portrait.webp
type: character
package: thalorna
social:
  occupation: Tentmaker
  station: tradesfolk
  class: freeman
  society: Varokhi
traits:
  gender: male
  age: 44
  birthday: 676/3/11
  height:
    m: 1.8
  weight:
    kg: 73
  build:
    frame: medium
  appearance:
    eye_color: blue
    hair_color: black
    skin_color: light
    complexion: ruddy
    extra_features:
      - a tattoo of a fire on the leg
gear:
  weapons:
    - Small knife for cutting fabric
  armor:
    - Leather apron
  misc:
    - Wooden chest for storing fabric
    - Sewing tools
    - canvas rolls
    - leather thimbles
sohl:
  attributes:
    str: 12
    end: 14
    dex: 13
    agl: 11
    per: 14
    cml: 10
    aur: 11
    wil: 13
    rea: 12
    cre: 13
    emp: 12
    elo: 10
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
    - shortcode: freyja
      type: affiliation
    - shortcode: cook
      type: skill
      system:
        masteryLevelBase: 26
    - shortcode: folklr
      type: skill
      system:
        masteryLevelBase: 12
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
        masteryLevelBase: 22
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
        masteryLevelBase: 33
    - shortcode: thtcs
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: anmcft
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: smsh
      type: skill
      system:
        masteryLevelBase: 26
    - shortcode: srvl
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: acro
      type: skill
      system:
        masteryLevelBase: 24
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
        masteryLevelBase: 36
    - shortcode: jump
      type: skill
      system:
        masteryLevelBase: 33
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
        masteryLevelBase: 12
    - shortcode: archery
      type: skill
      system:
        masteryLevelBase: 56
    - shortcode: init
      type: skill
      system:
        masteryLevelBase: 39
    - shortcode: melee
      type: skill
      system:
        masteryLevelBase: 24
    - shortcode: thro
      type: skill
      system:
        masteryLevelBase: 26
    - shortcode: draw
      type: skill
      system:
        masteryLevelBase: 52
    - shortcode: glas
      type: skill
      system:
        masteryLevelBase: 14
    - shortcode: hide
      type: skill
      system:
        masteryLevelBase: 52
    - shortcode: jewl
      type: skill
      system:
        masteryLevelBase: 14
    - shortcode: mtlc
      type: skill
      system:
        masteryLevelBase: 26
    - shortcode: musc
      type: skill
      system:
        masteryLevelBase: 14
    - shortcode: txtl
      type: skill
      system:
        masteryLevelBase: 65
    - shortcode: wood
      type: skill
      system:
        masteryLevelBase: 65
    - shortcode: tlnt
      type: skill
      system:
        masteryLevelBase: 36
thalorna:
  realm: vrystwldtrbs
  region: vrystwald
harnworld:
  realm: Vrystwald
  ritual: []
---

# Appearance {#appearance}

Waldaric Ríkhild is a 44-year-old man who stands 5'11" tall and is of moderate build. He has an angular face with wide-set cheekbones, a high forehead, and an angular jaw that leads to a strong chin. His deep-set blue eyes sit beneath heavy brows, lending him a watchful gaze. A prominent nose and curved lips complete his features. He has light skin with a ruddy complexion. His black hair is long and gathered with a leather thong.

# Dossier {#dossier}

Born in the Vrystwald region to a freeman family of Varokhi heritage, Waldaric Ríkhild came into the world of the tentmaker through a combination of circumstance and aptitude.

Edric has been making tents and canvas goods for traveling merchants, soldiers, and wanderers for over twenty years. He runs a small workshop in the city, where he stitches and repairs tents, awnings, and other cloth items. Known for his sturdy products, Edric has a reputation for reliability, though his shop struggles to compete with larger manufacturers. He takes pride in his craftsmanship but sometimes sacrifices speed for quality.

Now at 44 years of age, Waldaric Ríkhild has established himself as a known figure among the tentmakers of Vrystwald. His reputation, for better or worse, precedes him in the circles where such things matter.

## Psyche

### Personality

Slower at completing work than larger competitors, struggles with marketing.

### Motivation

Waldaric is driven by the desire to master his craft and secure a stable future. The uncertainties of life in tentmaker work keep him vigilant and adaptable.

### Strengths

Skilled at working with heavy fabrics, experienced in crafting durable tents.

## Social

Waldaric is affiliated with Tentmakers' Guild.

As a Varokhi tentmaker, Waldaric occupies a recognized social niche within Vrystwald society.

## Companions

### Patrons

Waldaric's primary patron is Travelers and soldiers who need quality tents.. This relationship provides both opportunity and obligation.

### Enemies

Competitors who undercut his prices.

## Plot Hooks

1. **The Tentmaker's Dilemma** — Waldaric faces a professional crisis that threatens his livelihood. A choice must be made between principle and survival, and the consequences will ripple through his community in Vrystwald.

2. **Old Grudges** — Competitors who undercut his prices. This conflict threatens to escalate beyond personal rivalry into something far more dangerous.

3. **Echoes of the Past** — Something from Waldaric's earlier life resurfaces unexpectedly, forcing him to confront unfinished business that he thought was long buried.

4. **Shifting Winds** — Political changes in Vrystwald threaten to upend the social order that Waldaric depends upon. He must decide whether to adapt, resist, or flee.

5. **The Opportunity** — A chance encounter offers Waldaric the possibility of advancement beyond anything he has dared hope for — but the price may be higher than it first appears.
