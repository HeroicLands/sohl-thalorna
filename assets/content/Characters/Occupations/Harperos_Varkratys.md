---
tags:
  - draft
  - soldiery
name:
  full: Harpêros Vârkrâtys
  title: ""
  given: Harpêros
  clan: Vârkrâtys
  home: corvinus
  aliases:
    - Orin Swiftbow
packFolder: midhalionvylaria
shortcode: hrprsvrkrtys
img: systems/sohl/assets/icons/game-icons/delapouite/person.svg
type: being
data:
  portrait: images/being/hrprsvrkrtys-portrait.webp
  templatePriority: null
  archetypes: []
  occupation: Yeoman Archer
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
  age: 39
  birthday: 681/5/18
  height: 1.8
  weight: 78
  frame: medium
  appearance:
    eye_color: hazel
    hair_color: auburn
    skin_color: medium
    complexion: tanned
    extra_features:
      - a scar along the jawline
sohl:
  templatePriority: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: taranon, type: affiliation }
    - { shortcode: brew, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: cook, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: eng, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: folklr, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: pysn, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: chrm, type: skill, system: { masteryLevelBase: 33 } }
    - { shortcode: cmd, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: dscr, type: skill, system: { masteryLevelBase: 24 } }
    - { shortcode: guil, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: intr, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: sing, type: skill, system: { masteryLevelBase: 40 } }
    - { shortcode: thtcs, type: skill, system: { masteryLevelBase: 11 } }
    - { shortcode: agri, type: skill, system: { masteryLevelBase: 75 } }
    - { shortcode: anmcft, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: herb, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: smsh, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: srvl, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: timb, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: awar, type: skill, system: { masteryLevelBase: 75 } }
    - { shortcode: clmb, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: dnce, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: jump, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: ridg, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: stlth, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: swim, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: archery, type: skill, system: { masteryLevelBase: 64 } }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 65 } }
    - { shortcode: melee, type: skill, system: { masteryLevelBase: 48 } }
    - { shortcode: thro, type: skill, system: { masteryLevelBase: 32 } }
    - { shortcode: draw, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: fltch, type: skill, system: { masteryLevelBase: 64 } }
    - { shortcode: wpnc, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: wood, type: skill, system: { masteryLevelBase: 15 } }
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

Harpêros Vârkrâtys is a 39-year-old man who stands 5'11" tall and is of moderate build. He has a square face with prominent cheekbones, a wide forehead, and a strong jaw that leads to a square chin. His hooded hazel eyes sit beneath arched brows, lending him a guarded gaze. An aquiline nose and narrow lips complete his features. He has medium-toned skin with a sun-tanned complexion. His auburn hair is receding at the temples.

# Dossier {#dossier}

Born in the Vylaría region to a freeman family of Vylarian heritage, Harpêros Vârkrâtys came into the world of the yeoman archer through a combination of circumstance and aptitude.

Orin has served as a yeoman archer for most of his adult life. He has extensive experience in both hunting and military service, making him a valuable asset to the local militia. Orin prefers to stay out of the limelight, quietly doing his duty and teaching younger archers. His calm demeanor makes him a natural leader, though he rarely seeks the role.

Now at 39 years of age, Harpêros Vârkrâtys has established himself as a known figure among the yeoman archers of Vylaria. His reputation, for better or worse, precedes him in the circles where such things matter.

## Psyche

### Personality

Reluctant to take leadership roles, sometimes overly cautious.

### Motivation

Harpêros's driving force is the search that defines his life — a quest that shapes every decision he makes and every risk he takes.

### Strengths

Experienced archer, skilled tracker, calm under pressure.

## Social

Harpêros is affiliated with Local Militia.

As a Vylarian yeoman archer, Harpêros occupies a recognized social niche within Vylaria society.

## Companions

### Patrons

Harpêros's primary patron is The local lord who values his consistency and reliability.. This relationship provides both opportunity and obligation.

### Enemies

Rival soldiers who have lost to him in archery competitions.

## Plot Hooks

1. **The Yeoman Archer's Dilemma** — Harpêros faces a professional crisis that threatens his livelihood. A choice must be made between principle and survival, and the consequences will ripple through his community in Vylaria.

2. **Old Grudges** — Rival soldiers who have lost to him in archery competitions. This conflict threatens to escalate beyond personal rivalry into something far more dangerous.

3. **Echoes of the Past** — Something from Harpêros's earlier life resurfaces unexpectedly, forcing him to confront unfinished business that he thought was long buried.

4. **Shifting Winds** — Political changes in Vylaria threaten to upend the social order that Harpêros depends upon. He must decide whether to adapt, resist, or flee.

5. **The Opportunity** — A chance encounter offers Harpêros the possibility of advancement beyond anything he has dared hope for — but the price may be higher than it first appears.
