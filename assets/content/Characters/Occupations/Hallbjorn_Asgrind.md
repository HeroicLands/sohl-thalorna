---
tags:
  - draft
  - tradesfolk
name:
  full: Hallbjǫrn Ásgrind
  title: ""
  given: Hallbjǫrn
  clan: Ásgrind
  home: thrymstead
  aliases:
    - Eadric Hawke
packFolder: ankarisnordlands
shortcode: hlbjrnsgrnd
img: systems/sohl/assets/icons/game-icons/delapouite/person.svg
type: being
data:
  portrait: images/being/hlbjrnsgrnd-portrait.webp
  templatePriority: null
  archetypes: []
  occupation: Hunter
  stations: []
  lore:
    - nordheimnclt
    - commonerrnk
  homes:
    - nrdlndsrgn
  affiliations:
    - kngdmnrdhm
  gender: male
  species: null
  age: 34
  birthday: 690/4/15
  height: 1.85
  weight: 82
  frame: medium
  appearance:
    eye_color: blue
    hair_color: auburn
    skin_color: pale
    complexion: rough
    extra_features:
      - a scar on the back of the left arm
sohl:
  templatePriority: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 17 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: freyr, type: affiliation }
    - { shortcode: cook, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: eng, type: skill, system: { masteryLevelBase: 11 } }
    - { shortcode: folklr, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: law, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: pysn, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: chrm, type: skill, system: { masteryLevelBase: 33 } }
    - { shortcode: cmd, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: dscr, type: skill, system: { masteryLevelBase: 22 } }
    - { shortcode: guil, type: skill, system: { masteryLevelBase: 44 } }
    - { shortcode: intr, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: sing, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: thtcs, type: skill, system: { masteryLevelBase: 10 } }
    - { shortcode: agri, type: skill, system: { masteryLevelBase: 16 } }
    - { shortcode: anmcft, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: fish, type: skill, system: { masteryLevelBase: 16 } }
    - { shortcode: herb, type: skill, system: { masteryLevelBase: 56 } }
    - { shortcode: srvl, type: skill, system: { masteryLevelBase: 52 } }
    - { shortcode: trak, type: skill, system: { masteryLevelBase: 70 } }
    - { shortcode: awar, type: skill, system: { masteryLevelBase: 48 } }
    - { shortcode: clmb, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: dnce, type: skill, system: { masteryLevelBase: 22 } }
    - { shortcode: jump, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: ridg, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: stlth, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: swim, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: archery, type: skill, system: { masteryLevelBase: 75 } }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: melee, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: thro, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: cmcs, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: draw, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: fltch, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: hide, type: skill, system: { masteryLevelBase: 30 } }
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

Hallbjǫrn Ásgrind is a 34-year-old man who stands 6'1" tall and is of moderate build. He has an oval face with wide-set cheekbones, a narrow forehead, and a heavy jaw that leads to a strong chin. His deep-set blue eyes sit beneath thick brows, lending him a watchful gaze. A strong nose and firm lips complete his features. He has pale skin with a rough complexion. His auburn hair is long and gathered with a leather thong. A notable feature is a web of fine scars on the knuckles.

# Dossier {#dossier}

Born in the Nordheim region to a freeman family of Nordheimn heritage, Hallbjǫrn Ásgrind came into the world of the huntsman through a combination of circumstance and aptitude.

Eadric serves as the head huntsman for Lord Gwendolyn of Ashenwood Manor. He is responsible for managing the lord's hunting grounds and ensuring that the game population is maintained sustainably. Eadric has a keen eye for tracking and a deep knowledge of the local wildlife. His loyalty to the lord is unwavering, and he is often called upon to lead hunting parties during the lord's feasts.

Now at 34 years of age, Hallbjǫrn Ásgrind has established himself as a known figure among the huntsmans of Nordheim. His reputation, for better or worse, precedes him in the circles where such things matter.

## Psyche

### Personality

Can be overly cautious, struggles to communicate with those outside the hunting party.

### Motivation

Hallbjǫrn is driven by the desire to master his craft and secure a stable future. The uncertainties of life in huntsman work keep him vigilant and adaptable.

### Strengths

Excellent tracker, knowledgeable about local fauna, strong leadership skills.

## Social

Hallbjǫrn is affiliated with Lord Gwendolyn’s retinue.

As a Nordheimn huntsman, Hallbjǫrn occupies a recognized social niche within Nordheim society.

## Companions

### Patrons

Hallbjǫrn's primary patron is Lord Gwendolyn and other members of the manor's household.. This relationship provides both opportunity and obligation.

### Enemies

None; respected by the local community.

## Plot Hooks

1. **The Huntsman's Dilemma** — Hallbjǫrn faces a professional crisis that threatens his livelihood. A choice must be made between principle and survival, and the consequences will ripple through his community in Nordheim.

2. **Old Grudges** — None; respected by the local community. This conflict threatens to escalate beyond personal rivalry into something far more dangerous.

3. **Echoes of the Past** — Something from Hallbjǫrn's earlier life resurfaces unexpectedly, forcing him to confront unfinished business that he thought was long buried.

4. **Shifting Winds** — Political changes in Nordheim threaten to upend the social order that Hallbjǫrn depends upon. He must decide whether to adapt, resist, or flee.

5. **The Opportunity** — A chance encounter offers Hallbjǫrn the possibility of advancement beyond anything he has dared hope for — but the price may be higher than it first appears.
