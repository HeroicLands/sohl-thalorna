---
tags:
  - draft
  - tradesfolk
name:
  full: Hârlak Válskyr
  title: ""
  given: Hârlak
  clan: Válskyr
  home: Aurèliane
  aliases:
    - Braden Hask
packFolder: aureldiaprovenzia
shortcode: hrlkvlskyr
img: icons/person.svg
type: being
data:
  portrait: images/being/hrlkvlskyr-portrait.webp
  templatePriority: null
  archetypes: []
  occupation: Animal Trainer
  stations: []
  lore:
    - provenzianclt
    - commonerrnk
  homes:
    - provenzrgn
  affiliations:
    - kngdmprvnz
  gender: male
  species: null
  age: 38
  birthday: 682/8/6
  height: 1.85
  weight: 79
  frame: heavy
  appearance:
    eye_color: dark_brown
    hair_color: brown
    skin_color: medium
    complexion: clear
    extra_features:
      - a scar on the back of the left arm
sohl:
  templatePriority: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 8 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 9 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 7 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: florania, type: affiliation }
    - { shortcode: brew, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: cook, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: eng, type: skill, system: { masteryLevelBase: 10 } }
    - { shortcode: folklr, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: pfmy, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: pysn, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: ritual, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: chrm, type: skill, system: { masteryLevelBase: 33 } }
    - { shortcode: cmd, type: skill, system: { masteryLevelBase: 22 } }
    - { shortcode: dscr, type: skill, system: { masteryLevelBase: 18 } }
    - { shortcode: guil, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: intr, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: sing, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: thtcs, type: skill, system: { masteryLevelBase: 8 } }
    - { shortcode: anmcft, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: srvl, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: trak, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: awar, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: clmb, type: skill, system: { masteryLevelBase: 33 } }
    - { shortcode: dnce, type: skill, system: { masteryLevelBase: 20 } }
    - { shortcode: jump, type: skill, system: { masteryLevelBase: 48 } }
    - { shortcode: ridg, type: skill, system: { masteryLevelBase: 65 } }
    - { shortcode: stlth, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: swim, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: archery, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: melee, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: slng, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: thro, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: draw, type: skill, system: { masteryLevelBase: 11 } }
    - { shortcode: hide, type: skill, system: { masteryLevelBase: 52 } }
    - { shortcode: lock, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: mtlc, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: wood, type: skill, system: { masteryLevelBase: 24 } }
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

Hârlak Válskyr is a 38-year-old man who stands 6'1" tall and is broad and solidly built. He has a heart-shaped face with prominent cheekbones, a smooth forehead, and a narrow jaw that leads to a pointed chin. His round dark brown eyes sit beneath straight brows, lending him a candid gaze. An aquiline nose and expressive lips complete his features. He has medium-toned skin with a clear complexion. His brown hair is tied in a low tail.

# Dossier {#dossier}

Born in the Provènzia region to a freeman family of Provenzian heritage, Hârlak Válskyr came into the world of the animal trainer through a combination of circumstance and aptitude.

A rugged animal trainer who works with hunting dogs. Braden has a talent for taming wild beasts and often participates in local hunts.

Now at 38 years of age, Hârlak Válskyr has established himself as a known figure among the animal trainers of Provènzia. His reputation, for better or worse, precedes him in the circles where such things matter.

## Psyche

### Personality

Distrustful of people, hard to communicate with.

### Motivation

Hârlak is driven by the desire to master his craft and secure a stable future. The uncertainties of life in animal trainer work keep him vigilant and adaptable.

### Strengths

Great rapport with animals, strong endurance.

## Social

Hârlak is affiliated with Hunter's Guild.

As a Provenzian animal trainer, Hârlak occupies a recognized social niche within Provènzia society.

## Companions

### Patrons

Hârlak's primary patron is Local lord who provides animals for training.. This relationship provides both opportunity and obligation.

### Enemies

Rival animal trainer who sabotages his efforts.

## Plot Hooks

1. **The Animal Trainer's Dilemma** — Hârlak faces a professional crisis that threatens his livelihood. A choice must be made between principle and survival, and the consequences will ripple through his community in Provènzia.

2. **Old Grudges** — Rival animal trainer who sabotages his efforts. This conflict threatens to escalate beyond personal rivalry into something far more dangerous.

3. **Echoes of the Past** — Something from Hârlak's earlier life resurfaces unexpectedly, forcing him to confront unfinished business that he thought was long buried.

4. **Shifting Winds** — Political changes in Provènzia threaten to upend the social order that Hârlak depends upon. He must decide whether to adapt, resist, or flee.

5. **The Opportunity** — A chance encounter offers Hârlak the possibility of advancement beyond anything he has dared hope for — but the price may be higher than it first appears.
