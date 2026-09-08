---
tags:
  - draft
  - administration
name:
  full: Frýsala Válskyr
  title: ""
  given: Frýsala
  clan: Válskyr
  home: fiordaure
  aliases:
    - Sigrid Frostholm
packFolder: aureldiaprovenzia
shortcode: fryslvlskyr
img: systems/sohl/assets/icons/game-icons/delapouite/person.svg
type: being
data:
  portrait: images/being/fryslvlskyr-portrait.webp
  templatePriority: null
  archetypes: []
  occupation: Chieftain
  stations: []
  lore:
    - provenzianclt
    - landedlordrnk
  homes:
    - provenzrgn
  affiliations:
    - kngdmprvnz
  gender: female
  species: null
  age: 42
  birthday: 678/5/30
  height: 1.78
  weight: 78
  frame: medium
  appearance:
    eye_color: hazel
    hair_color: chestnut
    skin_color: fair
    complexion: clear
    extra_features:
      - a tattoo of an eagle on the back
sohl:
  templatePriority: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 9 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: janus, type: affiliation }
    - { shortcode: cook, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: folklr, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: law, type: skill, system: { masteryLevelBase: 70 } }
    - { shortcode: pysn, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: chrm, type: skill, system: { masteryLevelBase: 44 } }
    - { shortcode: cmd, type: skill, system: { masteryLevelBase: 70 } }
    - { shortcode: dscr, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: guil, type: skill, system: { masteryLevelBase: 33 } }
    - { shortcode: intr, type: skill, system: { masteryLevelBase: 55 } }
    - { shortcode: provnzlng, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: sing, type: skill, system: { masteryLevelBase: 33 } }
    - { shortcode: thtcs, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: herb, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: srvl, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: awar, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: clmb, type: skill, system: { masteryLevelBase: 52 } }
    - { shortcode: dnce, type: skill, system: { masteryLevelBase: 52 } }
    - { shortcode: jump, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: ridg, type: skill, system: { masteryLevelBase: 22 } }
    - { shortcode: stlth, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: swim, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: archery, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: melee, type: skill, system: { masteryLevelBase: 24 } }
    - { shortcode: thro, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: cmcs, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: draw, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: fltch, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: hide, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: masn, type: skill, system: { masteryLevelBase: 13 } }
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

Frýsala Válskyr is a 42-year-old woman who stands 5'10" tall and is of moderate build. She has a heart-shaped face with wide-set cheekbones, a smooth forehead, and an angular jaw that leads to a strong chin. Her hooded hazel eyes sit beneath thin brows, lending her a guarded gaze. A delicate nose and expressive lips complete her features. She has fair skin with a clear complexion. Her chestnut hair is pinned in an elegant twist.

# Dossier {#dossier}

Born in the Provènzia region to a noble family of Provenzian heritage, Frýsala Válskyr came into the world of the chieftain through a combination of circumstance and aptitude.

Sigrid became chieftain after her father's death in battle, leading her clan with a mix of tradition and innovation. Known for her strategic mind, she has strengthened her tribe's alliances and fortified their lands. Though some elders question her methods, Sigrid's victories against raiders have earned her respect.

Now at 42 years of age, Frýsala Válskyr has established herself as a known figure among the chieftains of Provènzia. Her reputation, for better or worse, precedes her in the circles where such things matter.

## Psyche

### Personality

Distrusted by some elders who view her as too unorthodox.

### Motivation

Frýsala is driven by the desire to master her craft and secure a stable future. The uncertainties of life in chieftain work keep her vigilant and adaptable.

### Strengths

Strategic thinker, skilled at forming alliances, capable warrior.

## Social

Frýsala is affiliated with Tribal Council.

As a Provenzian chieftain, Frýsala occupies a recognized social niche within Provènzia society.

## Companions

### Patrons

Frýsala's primary patron is Clan warriors and young leaders who support her rule.. This relationship provides both opportunity and obligation.

### Enemies

Neighboring clan leaders threatened by her growing power.

## Plot Hooks

1. **The Chieftain's Dilemma** — Frýsala faces a professional crisis that threatens her livelihood. A choice must be made between principle and survival, and the consequences will ripple through her community in Provènzia.

2. **Old Grudges** — Neighboring clan leaders threatened by her growing power. This conflict threatens to escalate beyond personal rivalry into something far more dangerous.

3. **Echoes of the Past** — Something from Frýsala's earlier life resurfaces unexpectedly, forcing her to confront unfinished business that she thought was long buried.

4. **Shifting Winds** — Political changes in Provènzia threaten to upend the social order that Frýsala depends upon. She must decide whether to adapt, resist, or flee.

5. **The Opportunity** — A chance encounter offers Frýsala the possibility of advancement beyond anything she has dared hope for — but the price may be higher than it first appears.
