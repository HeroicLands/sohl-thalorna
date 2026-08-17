---
aliases:
  - Kólrith Delvánor
  - Kolrith Delvanor
  - character-klrthdlvnr
tags: []
name:
  full: Kólrith Delvánor
  title: ""
  given: Kólrith
  clan: Delvánor
  home: Eskárath
  aliases:
    - Tobias Skyfury
id: 9pnLwddsFM41PREs
folder: 9t9O4iB5cYJtSaTG
shortcode: klrthdlvnr
img: icons/person.svg
draft: true
portrait: images/being/klrthdlvnr-portrait.webp
type: character
package: thalorna
social:
  occupation: Pilot
  station: tradesfolk
  class: freeman
  society: Tarvénan
traits:
  gender: male
  age: 29
  birthday: 695/2/22
  height:
    m: 1.8
  weight:
    kg: 72
  build:
    frame: medium
  appearance:
    eye_color: dark_brown
    hair_color: black
    skin_color: olive
    complexion: bronzed
    extra_features:
      - a scar on the lower abdomen
gear:
  weapons: []
  armor:
    - Flight suit suitable for racing
  misc:
    - Small bag for personal items
    - Flight logbook
    - speedometer
    - racing maps
sohl:
  attributes:
    str: 12
    end: 14
    dex: 17
    agl: 16
    per: 15
    cml: 11
    aur: 12
    wil: 13
    rea: 10
    cre: 12
    emp: 9
    elo: 10
    mor: 12
    voi: 11
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
      base: 159
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
    - shortcode: murkir
      type: affiliation
    - shortcode: cook
      type: skill
      system:
        masteryLevelBase: 39
    - shortcode: folklr
      type: skill
      system:
        masteryLevelBase: 11
    - shortcode: math
      type: skill
      system:
        masteryLevelBase: 22
    - shortcode: mrcn
      type: skill
      system:
        masteryLevelBase: 24
    - shortcode: pysn
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: script
      type: skill
      system:
        masteryLevelBase: 24
    - shortcode: shpw
      type: skill
      system:
        masteryLevelBase: 55
    - shortcode: chrm
      type: skill
      system:
        masteryLevelBase: 30
    - shortcode: cmd
      type: skill
      system:
        masteryLevelBase: 24
    - shortcode: dscr
      type: skill
      system:
        masteryLevelBase: 20
    - shortcode: guil
      type: skill
      system:
        masteryLevelBase: 40
    - shortcode: intr
      type: skill
      system:
        masteryLevelBase: 27
    - shortcode: sing
      type: skill
      system:
        masteryLevelBase: 33
    - shortcode: thtcs
      type: skill
      system:
        masteryLevelBase: 11
    - shortcode: agri
      type: skill
      system:
        masteryLevelBase: 14
    - shortcode: pilt
      type: skill
      system:
        masteryLevelBase: 60
    - shortcode: smsh
      type: skill
      system:
        masteryLevelBase: 70
    - shortcode: srvl
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: timb
      type: skill
      system:
        masteryLevelBase: 13
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
        masteryLevelBase: 28
    - shortcode: jump
      type: skill
      system:
        masteryLevelBase: 56
    - shortcode: lgdm
      type: skill
      system:
        masteryLevelBase: 16
    - shortcode: ridg
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: stlth
      type: skill
      system:
        masteryLevelBase: 45
    - shortcode: swim
      type: skill
      system:
        masteryLevelBase: 15
    - shortcode: archery
      type: skill
      system:
        masteryLevelBase: 16
    - shortcode: init
      type: skill
      system:
        masteryLevelBase: 36
    - shortcode: melee
      type: skill
      system:
        masteryLevelBase: 34
    - shortcode: thro
      type: skill
      system:
        masteryLevelBase: 32
    - shortcode: draw
      type: skill
      system:
        masteryLevelBase: 45
    - shortcode: fltch
      type: skill
      system:
        masteryLevelBase: 32
    - shortcode: tlnt
      type: skill
      system:
        masteryLevelBase: 36
    - shortcode: lang
      type: skill
      system:
        masteryLevelBase: 30
thalorna:
  realm: kingdmtrvn
  region: tarvenirgn
harnworld:
  realm: Tarvénia
  ritual: []
---

# Appearance {#appearance}

Kólrith Delvánor is a 29-year-old man who stands 5'11" tall and is of moderate build. He has an oval face with prominent cheekbones, a high forehead, and an angular jaw that leads to a prominent chin. His hooded dark brown eyes sit beneath prominent brows, lending him a guarded gaze. A strong nose and narrow lips complete his features. He has olive skin with a bronzed complexion. His black hair is cropped short.

# Dossier {#dossier}

Born in the Tarvénia region to a freeman family of Tarvénan heritage, Kólrith Delvánor came into the world of the pilot through a combination of circumstance and aptitude.

Tobias is a daring pilot known for his adventurous spirit and quick reflexes. He often takes on challenging routes and is not afraid to push the limits of his airship. With a background in racing, he enjoys the thrill of speed and competition. While his boldness can lead to risky situations, Tobias has a knack for finding innovative solutions in the air, making him a respected figure among his peers.

Now at 29 years of age, Kólrith Delvánor has established himself as a known figure among the pilots of Tarvénia. His reputation, for better or worse, precedes him in the circles where such things matter.

## Psyche

### Personality

Can be reckless, struggles with authority.

### Motivation

Kólrith is driven by the desire to master his craft and secure a stable future. The uncertainties of life in pilot work keep him vigilant and adaptable.

### Strengths

Fast reflexes, skilled at maneuvers, resourceful in challenging situations.

## Social

Kólrith is affiliated with Local Pilots' Guild.

As a Tarvénan pilot, Kólrith occupies a recognized social niche within Tarvénia society.

## Companions

### Patrons

Kólrith's primary patron is Adventurers and thrill-seekers looking for exciting flights.. This relationship provides both opportunity and obligation.

### Enemies

Few; generally well-liked, but some competitors may resent his success.

## Plot Hooks

1. **The Pilot's Dilemma** — Kólrith faces a professional crisis that threatens his livelihood. A choice must be made between principle and survival, and the consequences will ripple through his community in Tarvénia.

2. **Old Grudges** — Few; generally well-liked, but some competitors may resent his success. This conflict threatens to escalate beyond personal rivalry into something far more dangerous.

3. **Echoes of the Past** — Something from Kólrith's earlier life resurfaces unexpectedly, forcing him to confront unfinished business that he thought was long buried.

4. **Shifting Winds** — Political changes in Tarvénia threaten to upend the social order that Kólrith depends upon. He must decide whether to adapt, resist, or flee.

5. **The Opportunity** — A chance encounter offers Kólrith the possibility of advancement beyond anything he has dared hope for — but the price may be higher than it first appears.
