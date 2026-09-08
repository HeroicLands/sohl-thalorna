---
tags:
  - draft
  - common-folk
name:
  full: Ghârîdos Mûrâdês
  title: ""
  given: Ghârîdos
  clan: Mûrâdês
  home: korinthea2
  aliases:
    - Marcus Tidebreaker
packFolder: helladhelionis
shortcode: ghardsmrds
img: systems/sohl/assets/icons/game-icons/delapouite/person.svg
type: being
data:
  portrait: images/being/ghardsmrds-portrait.webp
  templatePriority: null
  archetypes: []
  occupation: Longshoreman
  stations: []
  lore:
    - helioniteclt
    - commonerrnk
  homes:
    - helionis
  affiliations:
    - korinthea
  gender: male
  species: null
  age: 30
  birthday: 694/6/25
  height: 1.91
  weight: 93
  frame: heavy
  appearance:
    eye_color: hazel
    hair_color: brown
    skin_color: medium
    complexion: bronzed
    extra_features: []
sohl:
  templatePriority: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 17 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 9 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: murkir, type: affiliation }
    - { shortcode: cook, type: skill, system: { masteryLevelBase: 48 } }
    - { shortcode: eng, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: folklr, type: skill, system: { masteryLevelBase: 11 } }
    - { shortcode: law, type: skill, system: { masteryLevelBase: 11 } }
    - { shortcode: pysn, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: chrm, type: skill, system: { masteryLevelBase: 44 } }
    - { shortcode: cmd, type: skill, system: { masteryLevelBase: 24 } }
    - { shortcode: dscr, type: skill, system: { masteryLevelBase: 20 } }
    - { shortcode: guil, type: skill, system: { masteryLevelBase: 33 } }
    - { shortcode: intr, type: skill, system: { masteryLevelBase: 44 } }
    - { shortcode: sing, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: thtcs, type: skill, system: { masteryLevelBase: 9 } }
    - { shortcode: smsh, type: skill, system: { masteryLevelBase: 52 } }
    - { shortcode: srvl, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: acro, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: awar, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: clmb, type: skill, system: { masteryLevelBase: 55 } }
    - { shortcode: dnce, type: skill, system: { masteryLevelBase: 20 } }
    - { shortcode: jump, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: ridg, type: skill, system: { masteryLevelBase: 11 } }
    - { shortcode: stlth, type: skill, system: { masteryLevelBase: 33 } }
    - { shortcode: swim, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: archery, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: melee, type: skill, system: { masteryLevelBase: 22 } }
    - { shortcode: thro, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: cmcs, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: draw, type: skill, system: { masteryLevelBase: 22 } }
    - { shortcode: mtlc, type: skill, system: { masteryLevelBase: 56 } }
    - { shortcode: wood, type: skill, system: { masteryLevelBase: 42 } }
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

Ghârîdos Mûrâdês is a 30-year-old man who stands 6'3" tall and is broad and solidly built. He has an oval face with angular cheekbones, a lined forehead, and a square jaw that leads to a square chin. His narrow hazel eyes sit beneath prominent brows, lending him a keen gaze. A prominent nose and firm lips complete his features. He has medium-toned skin with a bronzed complexion. His brown hair is falling in loose waves.

# Dossier {#dossier}

Born in the Heliónis region to a freeman family of Helionite heritage, Ghârîdos Mûrâdês came into the world of the longshoreman through a combination of circumstance and aptitude.

Marcus has spent the last decade working on the docks, where he has become a vital part of the shipping and cargo handling operations. Known for his strength and reliability, he often takes on the heaviest loads and is responsible for ensuring that cargo is loaded and unloaded safely and efficiently. Marcus enjoys the camaraderie of his fellow workers and takes pride in the essential role he plays in trade.

Now at 30 years of age, Ghârîdos Mûrâdês has established himself as a known figure among the longshoremans of Heliónis. His reputation, for better or worse, precedes him in the circles where such things matter.

## Psyche

### Personality

Can be overly stubborn, struggles with more technical aspects of shipping.

### Motivation

Ghârîdos is driven by the desire to master his craft and secure a stable future. The uncertainties of life in longshoreman work keep him vigilant and adaptable.

### Strengths

Physically strong, dependable, good at teamwork.

## Social

Ghârîdos is affiliated with Local Longshoremen's Union.

As a Helionite longshoreman, Ghârîdos occupies a recognized social niche within Heliónis society.

## Companions

### Patrons

Ghârîdos's primary patron is Ship captains and cargo merchants.. This relationship provides both opportunity and obligation.

### Enemies

Few; generally well-liked among peers.

## Plot Hooks

1. **The Longshoreman's Dilemma** — Ghârîdos faces a professional crisis that threatens his livelihood. A choice must be made between principle and survival, and the consequences will ripple through his community in Heliónis.

2. **Old Grudges** — Few; generally well-liked among peers. This conflict threatens to escalate beyond personal rivalry into something far more dangerous.

3. **Echoes of the Past** — Something from Ghârîdos's earlier life resurfaces unexpectedly, forcing him to confront unfinished business that he thought was long buried.

4. **Shifting Winds** — Political changes in Heliónis threaten to upend the social order that Ghârîdos depends upon. He must decide whether to adapt, resist, or flee.

5. **The Opportunity** — A chance encounter offers Ghârîdos the possibility of advancement beyond anything he has dared hope for — but the price may be higher than it first appears.
