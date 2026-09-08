---
tags:
  - draft
  - administration
name:
  full: Lamûshar Damrûnî
  title: ""
  given: Lamûshar
  clan: Damrûnî
  home: qadhirun
  aliases:
    - Cedric Ashwood
packFolder: midhalionharad
shortcode: lamshrdmrn
img: systems/sohl/assets/icons/game-icons/delapouite/person.svg
type: being
data:
  portrait: images/being/lamshrdmrn-portrait.webp
  templatePriority: null
  archetypes: []
  occupation: Litigant
  stations: []
  lore:
    - haradianclt
    - landedlordrnk
  homes:
    - haradregin
  affiliations:
    - cnfdrtnhrdnstts
  gender: male
  species: null
  age: 45
  birthday: 679/10/12
  height: 1.7
  weight: 64
  frame: medium
  appearance:
    eye_color: dark_brown
    hair_color: dark_brown
    skin_color: medium
    complexion: weathered
    extra_features: []
sohl:
  templatePriority: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 9 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 18 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: menerva, type: affiliation }
    - { shortcode: cook, type: skill, system: { masteryLevelBase: 48 } }
    - { shortcode: folklr, type: skill, system: { masteryLevelBase: 16 } }
    - { shortcode: law, type: skill, system: { masteryLevelBase: 80 } }
    - { shortcode: pfmy, type: skill, system: { masteryLevelBase: 32 } }
    - { shortcode: pysn, type: skill, system: { masteryLevelBase: 17 } }
    - { shortcode: hazarscrpt, type: skill, system: { masteryLevelBase: 68 } }
    - { shortcode: shpw, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: chrm, type: skill, system: { masteryLevelBase: 33 } }
    - { shortcode: cmd, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: dscr, type: skill, system: { masteryLevelBase: 85 } }
    - { shortcode: guil, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: intr, type: skill, system: { masteryLevelBase: 75 } }
    - { shortcode: sing, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: thtcs, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: anmcft, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: pilt, type: skill, system: { masteryLevelBase: 34 } }
    - { shortcode: srvl, type: skill, system: { masteryLevelBase: 16 } }
    - { shortcode: awar, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: clmb, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: dnce, type: skill, system: { masteryLevelBase: 20 } }
    - { shortcode: jump, type: skill, system: { masteryLevelBase: 27 } }
    - { shortcode: ridg, type: skill, system: { masteryLevelBase: 11 } }
    - { shortcode: stlth, type: skill, system: { masteryLevelBase: 33 } }
    - { shortcode: swim, type: skill, system: { masteryLevelBase: 10 } }
    - { shortcode: archery, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 48 } }
    - { shortcode: melee, type: skill, system: { masteryLevelBase: 20 } }
    - { shortcode: thro, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: draw, type: skill, system: { masteryLevelBase: 22 } }
    - { shortcode: musc, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: txtl, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: wood, type: skill, system: { masteryLevelBase: 11 } }
    - { shortcode: haradilng, type: skill, system: { masteryLevelBase: 80 } }
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

Lamûshar Damrûnî is a 45-year-old man who stands 5'7" tall and is of moderate build. He has a heart-shaped face with prominent cheekbones, a narrow forehead, and an angular jaw that leads to a pointed chin. His large dark brown eyes sit beneath heavy brows, lending him an expressive gaze. A strong nose and curved lips complete his features. He has medium-toned skin with a weathered complexion. His dark brown hair is kept practical and short.

# Dossier {#dossier}

Born in the Harad region to a noble family of Haradian heritage, Lamûshar Damrûnî came into the world of the litigant through a combination of circumstance and aptitude.

Cedric has spent decades as a litigator, focusing on commercial law and trade disputes. His extensive experience and sharp legal mind have earned him a prominent position within the Litigant's Guild. Cedric is respected for his analytical approach and ability to navigate complex legal systems. He is known to mentor young litigants and is passionate about upholding the law.

Now at 45 years of age, Lamûshar Damrûnî has established himself as a known figure among the litigants of Harad. His reputation, for better or worse, precedes him in the circles where such things matter.

## Psyche

### Personality

Can be overly critical, sometimes dismisses unconventional methods.

### Motivation

Lamûshar is driven by the desire to master his craft and secure a stable future. The uncertainties of life in litigant work keep him vigilant and adaptable.

### Strengths

Highly knowledgeable in commercial law, good strategist, respected mentor.

## Social

Lamûshar is affiliated with Litigant's Guild.

As a Haradian litigant, Lamûshar occupies a recognized social niche within Harad society.

## Companions

### Patrons

Lamûshar's primary patron is Merchants and business owners seeking legal representation.. This relationship provides both opportunity and obligation.

### Enemies

Few; generally respected but occasionally challenged by ambitious newcomers.

## Plot Hooks

1. **The Litigant's Dilemma** — Lamûshar faces a professional crisis that threatens his livelihood. A choice must be made between principle and survival, and the consequences will ripple through his community in Harad.

2. **Old Grudges** — Few; generally respected but occasionally challenged by ambitious newcomers. This conflict threatens to escalate beyond personal rivalry into something far more dangerous.

3. **Echoes of the Past** — Something from Lamûshar's earlier life resurfaces unexpectedly, forcing him to confront unfinished business that he thought was long buried.

4. **Shifting Winds** — Political changes in Harad threaten to upend the social order that Lamûshar depends upon. He must decide whether to adapt, resist, or flee.

5. **The Opportunity** — A chance encounter offers Lamûshar the possibility of advancement beyond anything he has dared hope for — but the price may be higher than it first appears.
