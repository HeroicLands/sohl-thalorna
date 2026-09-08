---
tags:
  - draft
  - administration
name:
  full: Oswald Dunwell
  title: ""
  given: Oswald
  clan: Dunwell
  home: kingsholow
  aliases:
    - Sir Cedric Ashvale
packFolder: aureldiaaelwyth
shortcode: oswaldunwl
img: systems/sohl/assets/icons/game-icons/delapouite/person.svg
type: being
data:
  portrait: images/being/oswaldunwl-portrait.webp
  templatePriority: null
  archetypes: []
  occupation: Nobility (Manor Lord)
  stations: []
  lore:
    - aelwythanclt
    - commonerrnk
  homes:
    - aelwyth
  affiliations:
    - kngdmldrth
  gender: male
  species: null
  age: 33
  birthday: 691/2/4
  height: 1.83
  weight: 74
  frame: medium
  appearance:
    eye_color: gray
    hair_color: blonde
    skin_color: pale
    complexion: weathered
    extra_features: []
sohl:
  templatePriority: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: janus, type: affiliation }
    - { shortcode: cook, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: eng, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: folklr, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: hrld, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: law, type: skill, system: { masteryLevelBase: 70 } }
    - { shortcode: pysn, type: skill, system: { masteryLevelBase: 75 } }
    - { shortcode: chrm, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: cmd, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: dscr, type: skill, system: { masteryLevelBase: 52 } }
    - { shortcode: guil, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: intr, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: sing, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: thtcs, type: skill, system: { masteryLevelBase: 11 } }
    - { shortcode: agri, type: skill, system: { masteryLevelBase: 75 } }
    - { shortcode: srvl, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: timb, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: awar, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: clmb, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: dnce, type: skill, system: { masteryLevelBase: 20 } }
    - { shortcode: jump, type: skill, system: { masteryLevelBase: 55 } }
    - { shortcode: lgdm, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: ridg, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: stlth, type: skill, system: { masteryLevelBase: 44 } }
    - { shortcode: swim, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: archery, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 52 } }
    - { shortcode: melee, type: skill, system: { masteryLevelBase: 55 } }
    - { shortcode: thro, type: skill, system: { masteryLevelBase: 52 } }
    - { shortcode: draw, type: skill, system: { masteryLevelBase: 11 } }
    - { shortcode: fltch, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: musc, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: wpnc, type: skill, system: { masteryLevelBase: 22 } }
    - { shortcode: common, type: skill, system: { masteryLevelBase: 26 } }
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

Oswald Dunwell is a 33-year-old man who stands 6'0" tall and is of moderate build. He has a long face with sharp cheekbones, a high forehead, and a narrow jaw that leads to a rounded chin. His wide-set gray eyes sit beneath expressive brows, lending him an open gaze. A straight nose and firm lips complete his features. He has pale skin with a weathered complexion. His blonde hair is short and swept back.

# Dossier {#dossier}

Born in the Aelwyth region to a freeman family of Aelwythan heritage, Oswald Dunwell came into the world of the nobility (manor lord) through a combination of circumstance and aptitude.

Sir Cedric is a minor noble who oversees his family's lands and is known for his dedication to improving agricultural practices in his region. He frequently hosts events to educate local farmers on innovative techniques and sustainable farming. Cedric is respected for his practical approach to leadership and his commitment to the welfare of his tenants. His focus on agriculture often leads him to clash with other nobles who prioritize trade and industry.

Now at 33 years of age, Oswald Dunwell has established himself as a known figure among the nobility (manor lord)s of Aelwyth. His reputation, for better or worse, precedes him in the circles where such things matter.

## Psyche

### Personality

Can be overly idealistic, struggles with political maneuvering.

### Motivation

Oswald is driven by the desire to master his craft and secure a stable future. The uncertainties of life in nobility (manor lord) work keep him vigilant and adaptable.

### Strengths

Knowledgeable about agriculture, pragmatic, respected leader.

## Social

Oswald is affiliated with Local Agricultural Society.

As a Aelwythan nobility (manor lord), Oswald occupies a recognized social niche within Aelwyth society.

## Companions

### Patrons

Oswald's primary patron is Local farmers and merchants seeking fair trade.. This relationship provides both opportunity and obligation.

### Enemies

Few; respected but faces opposition from industrial-focused nobles.

## Plot Hooks

1. **The Nobility (Manor Lord)'s Dilemma** — Oswald faces a professional crisis that threatens his livelihood. A choice must be made between principle and survival, and the consequences will ripple through his community in Aelwyth.

2. **Old Grudges** — Few; respected but faces opposition from industrial-focused nobles. This conflict threatens to escalate beyond personal rivalry into something far more dangerous.

3. **Echoes of the Past** — Something from Oswald's earlier life resurfaces unexpectedly, forcing him to confront unfinished business that he thought was long buried.

4. **Shifting Winds** — Political changes in Aelwyth threaten to upend the social order that Oswald depends upon. He must decide whether to adapt, resist, or flee.

5. **The Opportunity** — A chance encounter offers Oswald the possibility of advancement beyond anything he has dared hope for — but the price may be higher than it first appears.
