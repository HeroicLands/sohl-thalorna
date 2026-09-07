---
tags:
  - draft
  - tradesfolk
name:
  full: Leofric Barnwell
  title: ""
  given: Leofric
  clan: Barnwell
  home: ashford
  aliases:
    - Dr. Alaric Hawthorne
packFolder: aureldiaaelwyth
shortcode: lefrcbrnwl
img: icons/person.svg
type: being
data:
  portrait: images/being/lefrcbrnwl-portrait.webp
  templatePriority: null
  archetypes: []
  occupation: Physician
  stations: []
  lore:
    - aelwythanclt
    - landedlordrnk
  homes:
    - aelwyth
  affiliations:
    - kngdmldrth
  gender: male
  species: null
  age: 42
  birthday: 682/3/15
  height: 1.7
  weight: 64
  frame: medium
  appearance:
    eye_color: blue
    hair_color: brown
    skin_color: fair
    complexion: freckled
    extra_features: []
sohl:
  templatePriority: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 18 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 18 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: florania, type: affiliation }
    - { shortcode: brew, type: skill, system: { masteryLevelBase: 54 } }
    - { shortcode: cook, type: skill, system: { masteryLevelBase: 72 } }
    - { shortcode: eng, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: folklr, type: skill, system: { masteryLevelBase: 32 } }
    - { shortcode: math, type: skill, system: { masteryLevelBase: 75 } }
    - { shortcode: pfmy, type: skill, system: { masteryLevelBase: 18 } }
    - { shortcode: pysn, type: skill, system: { masteryLevelBase: 72 } }
    - { shortcode: thrvrdhscrpt, type: skill, system: { masteryLevelBase: 54 } }
    - { shortcode: shpw, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: chrm, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: cmd, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: dscr, type: skill, system: { masteryLevelBase: 85 } }
    - { shortcode: guil, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: intr, type: skill, system: { masteryLevelBase: 51 } }
    - { shortcode: aelendlng, type: skill, system: { masteryLevelBase: 16 } }
    - { shortcode: sing, type: skill, system: { masteryLevelBase: 33 } }
    - { shortcode: thtcs, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: herb, type: skill, system: { masteryLevelBase: 72 } }
    - { shortcode: mnrl, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: srvl, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: awar, type: skill, system: { masteryLevelBase: 64 } }
    - { shortcode: clmb, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: dnce, type: skill, system: { masteryLevelBase: 22 } }
    - { shortcode: jump, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: ridg, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: stlth, type: skill, system: { masteryLevelBase: 33 } }
    - { shortcode: swim, type: skill, system: { masteryLevelBase: 11 } }
    - { shortcode: archery, type: skill, system: { masteryLevelBase: 16 } }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: melee, type: skill, system: { masteryLevelBase: 48 } }
    - { shortcode: thro, type: skill, system: { masteryLevelBase: 32 } }
    - { shortcode: draw, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: wpnc, type: skill, system: { masteryLevelBase: 24 } }
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

Leofric Barnwell is a 42-year-old man who stands 5'7" tall and is of moderate build. He has an oval face with defined cheekbones, a smooth forehead, and a rounded jaw that leads to a pointed chin. His sharp blue eyes sit beneath arched brows, lending him an incisive gaze. A narrow nose and curved lips complete his features. He has fair skin with a lightly freckled complexion. His brown hair is short and swept back.

# Dossier {#dossier}

Born in the Aelwyth region to a noble family of Aelwythan heritage, Leofric Barnwell came into the world of the physician through a combination of circumstance and aptitude.

Dr. Alaric Hawthorne is a respected physician known for his extensive knowledge of medicine and healing practices. He has spent many years studying both traditional remedies and modern techniques, making him a trusted figure in the community. Alaric is dedicated to helping his patients and often volunteers his services to the less fortunate. His calm demeanor and empathetic nature have made him a beloved doctor.

Now at 42 years of age, Leofric Barnwell has established himself as a known figure among the physicians of Aelwyth. His reputation, for better or worse, precedes him in the circles where such things matter.

## Psyche

### Personality

Can be overly focused on work, struggles with the emotional toll of his profession.

### Motivation

Leofric is driven by the desire to master his craft and secure a stable future. The uncertainties of life in physician work keep him vigilant and adaptable.

### Strengths

Highly knowledgeable, excellent bedside manner, skilled in diagnosis.

## Social

Leofric is affiliated with Local Physicians' Guild.

As a Aelwythan physician, Leofric occupies a recognized social niche within Aelwyth society.

## Companions

### Patrons

Leofric's primary patron is Nobles and common folk alike seeking his medical expertise.. This relationship provides both opportunity and obligation.

### Enemies

Few; respected but has faced criticism from some traditionalists.

## Plot Hooks

1. **The Physician's Dilemma** — Leofric faces a professional crisis that threatens his livelihood. A choice must be made between principle and survival, and the consequences will ripple through his community in Aelwyth.

2. **Old Grudges** — Few; respected but has faced criticism from some traditionalists. This conflict threatens to escalate beyond personal rivalry into something far more dangerous.

3. **Echoes of the Past** — Something from Leofric's earlier life resurfaces unexpectedly, forcing him to confront unfinished business that he thought was long buried.

4. **Shifting Winds** — Political changes in Aelwyth threaten to upend the social order that Leofric depends upon. He must decide whether to adapt, resist, or flee.

5. **The Opportunity** — A chance encounter offers Leofric the possibility of advancement beyond anything he has dared hope for — but the price may be higher than it first appears.
