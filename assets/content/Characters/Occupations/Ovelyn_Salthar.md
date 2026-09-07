---
tags:
  - draft
  - tradesfolk
name:
  full: Óvelyn Sálthar
  title: ""
  given: Óvelyn
  clan: Sálthar
  home: Liranel
  aliases:
    - Gwyneth Vane
packFolder: aureldiaelavendre
shortcode: ovlynslthr
img: icons/person.svg
type: being
data:
  portrait: images/being/ovlynslthr-portrait.webp
  templatePriority: null
  archetypes: []
  occupation: Chandler
  stations: []
  lore:
    - elavendriclt
    - commonerrnk
  homes:
    - elavendre
  affiliations:
    - kngdmlvndr
  gender: female
  species: null
  age: 29
  birthday: 691/3/6
  height: 1.6
  weight: 56
  frame: light
  appearance:
    eye_color: brown
    hair_color: blonde
    skin_color: fair
    complexion: smooth
    extra_features: []
sohl:
  templatePriority: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 8 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: sacredforge, type: affiliation }
    - { shortcode: cook, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: folklr, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: mrcn, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: pysn, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: thrvrdhscrpt, type: skill, system: { masteryLevelBase: 48 } }
    - { shortcode: chrm, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: cmd, type: skill, system: { masteryLevelBase: 24 } }
    - { shortcode: dscr, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: guil, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: intr, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: sing, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: thtcs, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: anmcft, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: fish, type: skill, system: { masteryLevelBase: 24 } }
    - { shortcode: herb, type: skill, system: { masteryLevelBase: 24 } }
    - { shortcode: mnrl, type: skill, system: { masteryLevelBase: 24 } }
    - { shortcode: srvl, type: skill, system: { masteryLevelBase: 11 } }
    - { shortcode: acro, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: awar, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: clmb, type: skill, system: { masteryLevelBase: 56 } }
    - { shortcode: dnce, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: jump, type: skill, system: { masteryLevelBase: 33 } }
    - { shortcode: ridg, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: stlth, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: swim, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: archery, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 33 } }
    - { shortcode: melee, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: thro, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: draw, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: lock, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: mtlc, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: mill, type: skill, system: { masteryLevelBase: 10 } }
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

Óvelyn Sálthar is a 29-year-old woman who stands 5'3" tall and is slender. She has a diamond face with wide-set cheekbones, a narrow forehead, and a sharp jaw that leads to a narrow chin. Her round brown eyes sit beneath thin brows, lending her a candid gaze. A delicate nose and thin lips complete her features. She has fair skin with a smooth complexion. Her blonde hair is swept up and held with carved combs.

# Dossier {#dossier}

Born in the Élavendre region to a freeman family of Élavendri heritage, Óvelyn Sálthar came into the world of the chandler through a combination of circumstance and aptitude.

Gwyneth is a young chandler who recently started her own business after apprenticing with a skilled candle maker. She specializes in creating decorative and scented candles for special occasions and religious ceremonies. Her unique designs have begun attracting attention, though she still struggles to gain a foothold in the market.

Now at 29 years of age, Óvelyn Sálthar has established herself as a known figure among the chandlers of Élavendre. Her reputation, for better or worse, precedes her in the circles where such things matter.

## Psyche

### Personality

Inexperienced in running a business, struggles with pricing and supply management.

### Motivation

Óvelyn is driven by the desire to master her craft and secure a stable future. The uncertainties of life in chandler work keep her vigilant and adaptable.

### Strengths

Creative and skilled at crafting aesthetically pleasing candles.

## Social

Óvelyn is affiliated with None yet, but interested in joining a craft guild..

As a Élavendri chandler, Óvelyn occupies a recognized social niche within Élavendre society.

## Companions

### Patrons

Óvelyn's primary patron is Local clergy and townsfolk who buy her candles for special events.. This relationship provides both opportunity and obligation.

### Enemies

Established chandlers who view her as competition.

## Plot Hooks

1. **The Chandler's Dilemma** — Óvelyn faces a professional crisis that threatens her livelihood. A choice must be made between principle and survival, and the consequences will ripple through her community in Élavendre.

2. **Old Grudges** — Established chandlers who view her as competition. This conflict threatens to escalate beyond personal rivalry into something far more dangerous.

3. **Echoes of the Past** — Something from Óvelyn's earlier life resurfaces unexpectedly, forcing her to confront unfinished business that she thought was long buried.

4. **Shifting Winds** — Political changes in Élavendre threaten to upend the social order that Óvelyn depends upon. She must decide whether to adapt, resist, or flee.

5. **The Opportunity** — A chance encounter offers Óvelyn the possibility of advancement beyond anything she has dared hope for — but the price may be higher than it first appears.
