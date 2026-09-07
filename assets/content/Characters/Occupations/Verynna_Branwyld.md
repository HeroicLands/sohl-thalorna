---
tags:
  - draft
  - clergy
name:
  full: Vérynna Brânwyld
  title: ""
  given: Vérynna
  clan: Brânwyld
  home: aureliane
  aliases:
    - Mira Whisperwind
packFolder: aureldiaprovenzia
shortcode: vrynbrnwyld
img: icons/person.svg
type: being
data:
  portrait: images/being/vrynbrnwyld-portrait.webp
  templatePriority: null
  archetypes: []
  occupation: Shaman
  stations: []
  lore:
    - provenzianclt
    - commonerrnk
  homes:
    - provenzrgn
  affiliations:
    - kngdmprvnz
  gender: female
  species: null
  age: 34
  birthday: 690/8/22
  height: 1.7
  weight: 65
  frame: light
  appearance:
    eye_color: blue
    hair_color: dark_brown
    skin_color: medium
    complexion: fair
    extra_features:
      - a scar on the left thigh
sohl:
  templatePriority: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: aetheria, type: affiliation }
    - { shortcode: brew, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: cook, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: folklr, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: pysn, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: ritual, type: skill, system: { masteryLevelBase: 52 } }
    - { shortcode: chrm, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: cmd, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: dscr, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: guil, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: intr, type: skill, system: { masteryLevelBase: 56 } }
    - { shortcode: sing, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: thtcs, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: herb, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: smsh, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: srvl, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: acro, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: awar, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: clmb, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: dnce, type: skill, system: { masteryLevelBase: 70 } }
    - { shortcode: jump, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: lgdm, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: ridg, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: stlth, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: swim, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: archery, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: melee, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: thro, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: cmcs, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: draw, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: fltch, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: hide, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: mill, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: wood, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: trnc, type: mysticalability, system: { masteryLevelBase: 75 } }
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

Vérynna Brânwyld is a 34-year-old woman who stands 5'7" tall and is slender. She has a heart-shaped face with soft cheekbones, a wide forehead, and a strong jaw that leads to a pointed chin. Her round blue eyes sit beneath straight brows, lending her a candid gaze. A straight nose and narrow lips complete her features. She has medium-toned skin with a fair complexion. Her dark brown hair is twisted into an elaborate arrangement.

# Dossier {#dossier}

Born in the Provènzia region to a freeman family of Provenzian heritage, Vérynna Brânwyld came into the world of the shaman through a combination of circumstance and aptitude.

Mira was chosen at a young age to train as a shaman, believed to possess a strong connection to the spirit world. She has served her tribe for over a decade, performing rituals, divining omens, and healing the sick. Despite her abilities, she often feels the weight of responsibility and struggles to balance her duties with her desire for a more ordinary life.

Now at 34 years of age, Vérynna Brânwyld has established herself as a known figure among the shamans of Provènzia. Her reputation, for better or worse, precedes her in the circles where such things matter.

## Psyche

### Personality

Sometimes doubts her abilities and is hesitant to make decisions.

### Motivation

Vérynna is driven by the desire to master her craft and secure a stable future. The uncertainties of life in shaman work keep her vigilant and adaptable.

### Strengths

Skilled in divination, experienced in herbal medicine, strong spiritual connection.

## Social

Vérynna is affiliated with Tribal Shamanic Circle.

As a Provenzian shaman, Vérynna occupies a recognized social niche within Provènzia society.

## Companions

### Patrons

Vérynna's primary patron is Tribal elders who mentor her in the shamanic traditions.. This relationship provides both opportunity and obligation.

### Enemies

Skeptics within the tribe who challenge her authority.

## Plot Hooks

1. **The Shaman's Dilemma** — Vérynna faces a professional crisis that threatens her livelihood. A choice must be made between principle and survival, and the consequences will ripple through her community in Provènzia.

2. **Old Grudges** — Skeptics within the tribe who challenge her authority. This conflict threatens to escalate beyond personal rivalry into something far more dangerous.

3. **Echoes of the Past** — Something from Vérynna's earlier life resurfaces unexpectedly, forcing her to confront unfinished business that she thought was long buried.

4. **Shifting Winds** — Political changes in Provènzia threaten to upend the social order that Vérynna depends upon. She must decide whether to adapt, resist, or flee.

5. **The Opportunity** — A chance encounter offers Vérynna the possibility of advancement beyond anything she has dared hope for — but the price may be higher than it first appears.
