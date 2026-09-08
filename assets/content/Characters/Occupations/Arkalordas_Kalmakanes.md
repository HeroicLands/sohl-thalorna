---
tags:
  - draft
  - common-folk
name:
  full: Arkálòrdâs Kâlmâkanês
  title: ""
  given: Arkálòrdâs
  clan: Kâlmâkanês
  home: aelissium
  aliases:
    - Darrin Wavebreaker
packFolder: midhalionvylaria
shortcode: arklrdsklmkns
img: systems/sohl/assets/icons/game-icons/delapouite/person.svg
type: being
data:
  portrait: images/being/arklrdsklmkns-portrait.webp
  templatePriority: null
  archetypes: []
  occupation: Common Seaman
  stations: []
  lore:
    - vylarianclt
    - commonerrnk
  homes:
    - vylariargn
  affiliations:
    - vylarinmpr
  gender: male
  species: null
  age: 37
  birthday: 687/4/10
  height: 1.93
  weight: 89
  frame: heavy
  appearance:
    eye_color: gray
    hair_color: black
    skin_color: tanned
    complexion: olive_toned
    extra_features:
      - a scar on the right calf and a Seaman's Guild tatoo on his right arm
sohl:
  templatePriority: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 17 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 9 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: murkir, type: affiliation }
    - { shortcode: cook, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: eng, type: skill, system: { masteryLevelBase: 22 } }
    - { shortcode: folklr, type: skill, system: { masteryLevelBase: 48 } }
    - { shortcode: pysn, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: shpw, type: skill, system: { masteryLevelBase: 22 } }
    - { shortcode: chrm, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: cmd, type: skill, system: { masteryLevelBase: 24 } }
    - { shortcode: dscr, type: skill, system: { masteryLevelBase: 22 } }
    - { shortcode: guil, type: skill, system: { masteryLevelBase: 27 } }
    - { shortcode: intr, type: skill, system: { masteryLevelBase: 40 } }
    - { shortcode: sing, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: thtcs, type: skill, system: { masteryLevelBase: 10 } }
    - { shortcode: agri, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: fish, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: herb, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: pilt, type: skill, system: { masteryLevelBase: 52 } }
    - { shortcode: smsh, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: srvl, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: awar, type: skill, system: { masteryLevelBase: 56 } }
    - { shortcode: clmb, type: skill, system: { masteryLevelBase: 55 } }
    - { shortcode: dnce, type: skill, system: { masteryLevelBase: 20 } }
    - { shortcode: jump, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: ridg, type: skill, system: { masteryLevelBase: 9 } }
    - { shortcode: stlth, type: skill, system: { masteryLevelBase: 33 } }
    - { shortcode: swim, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: archery, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: melee, type: skill, system: { masteryLevelBase: 22 } }
    - { shortcode: thro, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: cmcs, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: draw, type: skill, system: { masteryLevelBase: 11 } }
    - { shortcode: mill, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: wood, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: vylarilng, type: skill, system: { masteryLevelBase: 50 } }
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

Arkálòrdâs Kâlmâkanês is a 37-year-old man who stands 6'4" tall and is broad and solidly built. He has a diamond face with broad cheekbones, a smooth forehead, and a square jaw that leads to a strong chin. His narrow gray eyes sit beneath straight brows, lending him a keen gaze. An aquiline nose and narrow lips complete his features. He has tanned skin with an olive-toned complexion. His black hair is receding at the temples.

# Dossier {#dossier}

Born in the Vylaría region to a freeman family of Vylarian heritage, Arkálòrdâs Kâlmâkanês came into the world of the common seaman through a combination of circumstance and aptitude.

Darrin is a seasoned sailor with many tales of the sea. He has faced storms and adventures, earning a reputation as a fearless seaman. Known for his strength and experience, Darrin often takes on leadership roles aboard the ship, assisting the captain in decision-making. He is a mentor to younger sailors, sharing his knowledge of seamanship and safety at sea.

Now at 37 years of age, Arkálòrdâs Kâlmâkanês has established himself as a known figure among the common seamans of Vylaria. His reputation, for better or worse, precedes him in the circles where such things matter.

## Psyche

### Personality

Can be stubborn, struggles with change.

### Motivation

Arkálòrdâs is driven by the desire to master his craft and secure a stable future. The uncertainties of life in common seaman work keep him vigilant and adaptable.

### Strengths

Highly experienced, strong leadership skills, excellent sailor.

## Social

Arkálòrdâs is affiliated with None; works as a hired hand..

As a Vylarian common seaman, Arkálòrdâs occupies a recognized social niche within Vylaria society.

## Companions

### Patrons

Arkálòrdâs's primary patron is Ship captains and crew members who respect his experience.. This relationship provides both opportunity and obligation.

### Enemies

Few; generally well-respected, though some may see him as too traditional.

## Plot Hooks

1. **The Common Seaman's Dilemma** — Arkálòrdâs faces a professional crisis that threatens his livelihood. A choice must be made between principle and survival, and the consequences will ripple through his community in Vylaria.

2. **Old Grudges** — Few; generally well-respected, though some may see him as too traditional. This conflict threatens to escalate beyond personal rivalry into something far more dangerous.

3. **Echoes of the Past** — Something from Arkálòrdâs's earlier life resurfaces unexpectedly, forcing him to confront unfinished business that he thought was long buried.

4. **Shifting Winds** — Political changes in Vylaria threaten to upend the social order that Arkálòrdâs depends upon. He must decide whether to adapt, resist, or flee.

5. **The Opportunity** — A chance encounter offers Arkálòrdâs the possibility of advancement beyond anything he has dared hope for — but the price may be higher than it first appears.
