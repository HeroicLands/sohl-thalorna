---
tags:
  - draft
  - tradesfolk
name:
  full: Kashnûra Arshûmû
  title: ""
  given: Kashnûra
  clan: Arshûmû
  home: Qadhirun
  aliases:
    - Edda Buckley
packFolder: midhalionharad
shortcode: kashnrrshm
img: icons/person.svg
type: being
data:
  portrait: images/being/kashnrrshm-portrait.webp
  templatePriority: null
  archetypes: []
  occupation: Chandler
  stations: []
  lore:
    - haradianclt
    - commonerrnk
  homes:
    - haradregin
  affiliations:
    - cnfdrtnhrdnstts
  gender: female
  species: null
  age: 47
  birthday: 673/4/11
  height: 1.68
  weight: 61
  frame: medium
  appearance:
    eye_color: hazel
    hair_color: dark_brown
    skin_color: olive
    complexion: weathered
    extra_features: []
sohl:
  templatePriority: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 9 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: sacredforge, type: affiliation }
    - { shortcode: brew, type: skill, system: { masteryLevelBase: 22 } }
    - { shortcode: cook, type: skill, system: { masteryLevelBase: 33 } }
    - { shortcode: folklr, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: law, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: math, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: mrcn, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: pysn, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: hazarscrpt, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: chrm, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: cmd, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: dscr, type: skill, system: { masteryLevelBase: 24 } }
    - { shortcode: guil, type: skill, system: { masteryLevelBase: 33 } }
    - { shortcode: intr, type: skill, system: { masteryLevelBase: 33 } }
    - { shortcode: sing, type: skill, system: { masteryLevelBase: 33 } }
    - { shortcode: thtcs, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: fish, type: skill, system: { masteryLevelBase: 24 } }
    - { shortcode: herb, type: skill, system: { masteryLevelBase: 48 } }
    - { shortcode: mnrl, type: skill, system: { masteryLevelBase: 24 } }
    - { shortcode: srvl, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: trak, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: awar, type: skill, system: { masteryLevelBase: 48 } }
    - { shortcode: clmb, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: dnce, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: jump, type: skill, system: { masteryLevelBase: 33 } }
    - { shortcode: ridg, type: skill, system: { masteryLevelBase: 22 } }
    - { shortcode: stlth, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: swim, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: archery, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 52 } }
    - { shortcode: melee, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: thro, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: draw, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: hide, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: lock, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: mtlc, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: wood, type: skill, system: { masteryLevelBase: 48 } }
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

Kashnûra Arshûmû is a 47-year-old woman who stands 5'6" tall and is of moderate build. She has an oval face with wide-set cheekbones, a lined forehead, and a narrow jaw that leads to a pointed chin. Her large hazel eyes sit beneath prominent brows, lending her an expressive gaze. An aquiline nose and firm lips complete her features. She has olive skin with a weathered complexion. Her dark brown hair is falling in dark cascades.

# Dossier {#dossier}

Born in the Harad region to a freeman family of Haradian heritage, Kashnûra Arshûmû came into the world of the chandler through a combination of circumstance and aptitude.

Edda has been making candles for over twenty years in her small village. She learned the craft from her mother and now runs a small shop, supplying candles to the local community and nearby towns. Edda takes pride in her work, using only the best tallow and beeswax, and her candles are known for their quality and long burn times.

Now at 47 years of age, Kashnûra Arshûmû has established herself as a known figure among the chandlers of Harad. Her reputation, for better or worse, precedes her in the circles where such things matter.

## Psyche

### Personality

Set in her ways and resistant to adopting new techniques.

### Motivation

Kashnûra is driven by the desire to master her craft and secure a stable future. The uncertainties of life in chandler work keep her vigilant and adaptable.

### Strengths

Skilled at making high-quality candles and soap.

## Social

Kashnûra is affiliated with Village Craft Guild.

As a Haradian chandler, Kashnûra occupies a recognized social niche within Harad society.

## Companions

### Patrons

Kashnûra's primary patron is Local villagers and merchants who appreciate her craftsmanship.. This relationship provides both opportunity and obligation.

### Enemies

A younger chandler who tries to undercut her prices.

## Plot Hooks

1. **The Chandler's Dilemma** — Kashnûra faces a professional crisis that threatens her livelihood. A choice must be made between principle and survival, and the consequences will ripple through her community in Harad.

2. **Old Grudges** — A younger chandler who tries to undercut her prices. This conflict threatens to escalate beyond personal rivalry into something far more dangerous.

3. **Echoes of the Past** — Something from Kashnûra's earlier life resurfaces unexpectedly, forcing her to confront unfinished business that she thought was long buried.

4. **Shifting Winds** — Political changes in Harad threaten to upend the social order that Kashnûra depends upon. She must decide whether to adapt, resist, or flee.

5. **The Opportunity** — A chance encounter offers Kashnûra the possibility of advancement beyond anything she has dared hope for — but the price may be higher than it first appears.
