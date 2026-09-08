---
tags:
  - draft
  - common-folk
name:
  full: Godwin Adwell
  title: ""
  given: Godwin
  clan: Adwell
  home: caerwynd
  aliases:
    - Bronn Hillstride
packFolder: aureldiaaelwyth
shortcode: godwinadwl
img: systems/sohl/assets/icons/game-icons/delapouite/person.svg
type: being
data:
  portrait: images/being/godwinadwl-portrait.webp
  templatePriority: null
  archetypes: []
  occupation: Herder
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
  age: 38
  birthday: 682/6/27
  height: 1.85
  weight: 83
  frame: medium
  appearance:
    eye_color: hazel
    hair_color: gray
    skin_color: pale
    complexion: ruddy
    extra_features: []
sohl:
  templatePriority: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 9 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: florania, type: affiliation }
    - { shortcode: cook, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: embl, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: folklr, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: law, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: pysn, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: chrm, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: cmd, type: skill, system: { masteryLevelBase: 24 } }
    - { shortcode: dscr, type: skill, system: { masteryLevelBase: 22 } }
    - { shortcode: guil, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: intr, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: sing, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: thtcs, type: skill, system: { masteryLevelBase: 10 } }
    - { shortcode: agri, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: anmcft, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: fish, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: pilt, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: srvl, type: skill, system: { masteryLevelBase: 65 } }
    - { shortcode: trak, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: awar, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: clmb, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: dnce, type: skill, system: { masteryLevelBase: 24 } }
    - { shortcode: jump, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: ridg, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: stlth, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: swim, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: archery, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: melee, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: thro, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: draw, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: glas, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: hide, type: skill, system: { masteryLevelBase: 70 } }
    - { shortcode: jewl, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: wood, type: skill, system: { masteryLevelBase: 39 } }
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

Godwin Adwell is a 38-year-old man who stands 6'1" tall and is of moderate build. He has a long face with sharp cheekbones, a high forehead, and a rounded jaw that leads to a delicate chin. His bright hazel eyes sit beneath straight brows, lending him a lively gaze. A straight nose and thin lips complete his features. He has pale skin with a ruddy complexion. His gray hair is combed neatly to one side.

# Dossier {#dossier}

Born in the Aelwyth region to a freeman family of Aelwythan heritage, Godwin Adwell came into the world of the herder through a combination of circumstance and aptitude.

Bronn comes from a long line of herders, spending his life tending sheep and goats in the hills. He knows the land like the back of his hand and can navigate even the most treacherous paths. His quiet, calm demeanor makes him well-suited to the solitary life of a herder, though he can be protective when necessary. Bronn is deeply connected to his animals and believes in treating them with care and respect.

Now at 38 years of age, Godwin Adwell has established himself as a known figure among the herders of Aelwyth. His reputation, for better or worse, precedes him in the circles where such things matter.

## Psyche

### Personality

Prefers solitude, struggles with social interactions, stubborn about traditional methods.

### Motivation

Godwin is driven by the desire to master his craft and secure a stable future. The uncertainties of life in herder work keep him vigilant and adaptable.

### Strengths

Skilled in animal husbandry, knowledgeable about local terrain, calm under pressure.

## Social

Godwin is affiliated with None; works independently..

As a Aelwythan herder, Godwin occupies a recognized social niche within Aelwyth society.

## Companions

### Patrons

Godwin's primary patron is Local farmers who buy his wool and cheese.. This relationship provides both opportunity and obligation.

### Enemies

Few, though some nearby farmers have disputes over grazing rights.

## Plot Hooks

1. **The Herder's Dilemma** — Godwin faces a professional crisis that threatens his livelihood. A choice must be made between principle and survival, and the consequences will ripple through his community in Aelwyth.

2. **Old Grudges** — Few, though some nearby farmers have disputes over grazing rights. This conflict threatens to escalate beyond personal rivalry into something far more dangerous.

3. **Echoes of the Past** — Something from Godwin's earlier life resurfaces unexpectedly, forcing him to confront unfinished business that he thought was long buried.

4. **Shifting Winds** — Political changes in Aelwyth threaten to upend the social order that Godwin depends upon. He must decide whether to adapt, resist, or flee.

5. **The Opportunity** — A chance encounter offers Godwin the possibility of advancement beyond anything he has dared hope for — but the price may be higher than it first appears.
