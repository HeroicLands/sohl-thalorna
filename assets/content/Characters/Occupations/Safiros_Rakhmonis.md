---
aliases:
  - Sàfîros Râkhmônis
  - Safiros Rakhmonis
  - being-sfrsrkhmns
tags:
  - draft
name:
  full: Sàfîros Râkhmônis
  title: ""
  given: Sàfîros
  clan: Râkhmônis
  home: Kalydria
  aliases:
    - Berwin Greenfield
id: 6rlLBO0FfEwAvuQg
folder: gpXd1anXulwRWZqn
shortcode: sfrsrkhmns
img: icons/person.svg
portrait: images/being/sfrsrkhmns-portrait.webp
type: being
package: thalorna
social:
  occupation: Yeoman Infantry
  station: soldiery
  class: freeman
  society: Helionite
traits:
  gender: male
  age: 42
  birthday: 678/2/28
  height:
    m: 1.91
  weight:
    kg: 89
  build:
    frame: heavy
  appearance:
    eye_color: hazel
    hair_color: dark_brown
    skin_color: tanned
    complexion: olive_toned
    extra_features:
      - a tattoo of a lion's mane on the chest
gear:
  weapons:
    - Battleaxe
  armor:
    - Chainmail
  misc:
    - Leather pack for rations
    - Shield
    - wpnsup
    - helmet
sohl:
  attributes:
    str: 15
    end: 14
    dex: 11
    agl: 12
    per: 13
    cml: 9
    aur: 11
    wil: 14
    rea: 12
    cre: 10
    emp: 9
    elo: 10
    mor: 12
    voi: 11
  body:
    structure:
      parts:
        - name: Head
          shortcode: headpart
          roles:
            - vital
          canHoldItem: false
          combatArea: 1
          locations:
            - name: Skull
              shortcode: skullloc
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
              bleedingSusceptibility: high
              amputability: low
              shockValue: 5
              probWeight: 200
              protectionBase:
                blunt: 0
                edged: 0
                piercing: 0
                fire: 0
        - name: Right Arm
          shortcode: rarmpart
          roles:
            - manipulator
          canHoldItem: true
          combatArea: 2
          locations:
            - name: Right Shoulder
              shortcode: rshldloc
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
              bleedingSusceptibility: none
              amputability: high
              shockValue: 2
              probWeight: 10
              protectionBase:
                blunt: 0
                edged: 0
                piercing: 0
                fire: 0
        - name: Left Arm
          shortcode: larmpart
          roles:
            - manipulator
          canHoldItem: true
          combatArea: 2
          locations:
            - name: Left Shoulder
              shortcode: lshldloc
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
              bleedingSusceptibility: none
              amputability: high
              shockValue: 2
              probWeight: 10
              protectionBase:
                blunt: 0
                edged: 0
                piercing: 0
                fire: 0
        - name: Torso
          shortcode: torsopart
          roles:
            - core
          canHoldItem: false
          combatArea: 4
          locations:
            - name: Thorax
              shortcode: thrxloc
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
              bleedingSusceptibility: medium
              amputability: none
              shockValue: 4
              probWeight: 20
              protectionBase:
                blunt: 0
                edged: 0
                piercing: 0
                fire: 0
        - name: Right Leg
          shortcode: rlegpart
          roles:
            - locomotor
          canHoldItem: false
          combatArea: 3
          locations:
            - name: Right Thigh
              shortcode: rthghloc
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
              bleedingSusceptibility: none
              amputability: medium
              shockValue: 2
              probWeight: 20
              protectionBase:
                blunt: 0
                edged: 0
                piercing: 0
                fire: 0
        - name: Left Leg
          shortcode: llegpart
          roles:
            - locomotor
          canHoldItem: false
          combatArea: 3
          locations:
            - name: Left Thigh
              shortcode: lthghloc
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
              bleedingSusceptibility: none
              amputability: medium
              shockValue: 2
              probWeight: 20
              protectionBase:
                blunt: 0
                edged: 0
                piercing: 0
                fire: 0
      adjacent:
        - - headpart
          - torsopart
        - - headpart
          - rarmpart
        - - headpart
          - larmpart
        - - torsopart
          - rarmpart
        - - torsopart
          - larmpart
        - - torsopart
          - rlegpart
        - - torsopart
          - llegpart
        - - llegpart
          - rlegpart
    weight:
      base: 196
      calc: (9 * str) + 50
    reachBase: 0
    bodyScaleBase: 1.0
    personalFatigue: enc + 5
  currentMoveMedium: terrestrial
  movementProfiles:
    - medium: terrestrial
      feetPerRound: 50
      leaguesPerWatch: 5
      encumbrance: floor(wt/4)
      strMod: -5 * floor((str - 10) / 2)
      disabled: false
  defaultCombatGroup: null
  items:
    - shortcode: taranon
      type: affiliation
    - shortcode: cook
      type: skill
      system:
        masteryLevelBase: 26
    - shortcode: folklr
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: pysn
      type: skill
      system:
        masteryLevelBase: 24
    - shortcode: shpw
      type: skill
      system:
        masteryLevelBase: 22
    - shortcode: chrm
      type: skill
      system:
        masteryLevelBase: 27
    - shortcode: cmd
      type: skill
      system:
        masteryLevelBase: 24
    - shortcode: dscr
      type: skill
      system:
        masteryLevelBase: 22
    - shortcode: guil
      type: skill
      system:
        masteryLevelBase: 36
    - shortcode: intr
      type: skill
      system:
        masteryLevelBase: 30
    - shortcode: sing
      type: skill
      system:
        masteryLevelBase: 30
    - shortcode: thtcs
      type: skill
      system:
        masteryLevelBase: 10
    - shortcode: agri
      type: skill
      system:
        masteryLevelBase: 65
    - shortcode: anmcft
      type: skill
      system:
        masteryLevelBase: 44
    - shortcode: fish
      type: skill
      system:
        masteryLevelBase: 26
    - shortcode: smsh
      type: skill
      system:
        masteryLevelBase: 28
    - shortcode: srvl
      type: skill
      system:
        masteryLevelBase: 52
    - shortcode: awar
      type: skill
      system:
        masteryLevelBase: 39
    - shortcode: clmb
      type: skill
      system:
        masteryLevelBase: 36
    - shortcode: dnce
      type: skill
      system:
        masteryLevelBase: 22
    - shortcode: jump
      type: skill
      system:
        masteryLevelBase: 39
    - shortcode: ridg
      type: skill
      system:
        masteryLevelBase: 30
    - shortcode: stlth
      type: skill
      system:
        masteryLevelBase: 39
    - shortcode: swim
      type: skill
      system:
        masteryLevelBase: 26
    - shortcode: archery
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: init
      type: skill
      system:
        masteryLevelBase: 65
    - shortcode: melee
      type: skill
      system:
        masteryLevelBase: 55
    - shortcode: thro
      type: skill
      system:
        masteryLevelBase: 24
    - shortcode: draw
      type: skill
      system:
        masteryLevelBase: 11
    - shortcode: masn
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: musc
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: wpnc
      type: skill
      system:
        masteryLevelBase: 26
    - shortcode: wood
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: tlnt
      type: skill
      system:
        masteryLevelBase: 36
thalorna:
  realm: kalydria
  region: helionis
harnworld:
  realm: Bethua
  ritual: []
---

# Appearance {#appearance}

Sàfîros Râkhmônis is a 42-year-old man who stands 6'3" tall and is broad and solidly built. He has an angular face with sharp cheekbones, a prominent forehead, and an angular jaw that leads to a prominent chin. His piercing hazel eyes sit beneath heavy brows, lending him a penetrating gaze. A strong nose and firm lips complete his features. He has tanned skin with an olive-toned complexion. His dark brown hair is tied in a low tail.

# Dossier {#dossier}

Born in the Heliónis region to a freeman family of Helionite heritage, Sàfîros Râkhmônis came into the world of the yeoman infantry through a combination of circumstance and aptitude.

Berwin is a seasoned veteran who has fought in numerous skirmishes and battles. He is tough and resilient, respected for his leadership on the battlefield. Berwin often trains younger yeomen in the arts of melee combat and defense. Despite his gruff demeanor, he cares deeply for those who fight beside him.

Now at 42 years of age, Sàfîros Râkhmônis has established himself as a known figure among the yeoman infantrys of Heliónis. His reputation, for better or worse, precedes him in the circles where such things matter.

## Psyche

### Personality

Gruff and demanding, struggles with delegating tasks.

### Motivation

Sàfîros is driven by the desire to master his craft and secure a stable future. The uncertainties of life in yeoman infantry work keep him vigilant and adaptable.

### Strengths

Strong, resilient, skilled in melee and defensive tactics.

## Social

Sàfîros is affiliated with Local Militia.

As a Helionite yeoman infantry, Sàfîros occupies a recognized social niche within Heliónis society.

## Companions

### Patrons

Sàfîros's primary patron is The local lord who values his experience in training new recruits.. This relationship provides both opportunity and obligation.

### Enemies

Rival soldiers and mercenaries who have clashed with him in the past.

## Plot Hooks

1. **The Yeoman Infantry's Dilemma** — Sàfîros faces a professional crisis that threatens his livelihood. A choice must be made between principle and survival, and the consequences will ripple through his community in Heliónis.

2. **Old Grudges** — Rival soldiers and mercenaries who have clashed with him in the past. This conflict threatens to escalate beyond personal rivalry into something far more dangerous.

3. **Echoes of the Past** — Something from Sàfîros's earlier life resurfaces unexpectedly, forcing him to confront unfinished business that he thought was long buried.

4. **Shifting Winds** — Political changes in Heliónis threaten to upend the social order that Sàfîros depends upon. He must decide whether to adapt, resist, or flee.

5. **The Opportunity** — A chance encounter offers Sàfîros the possibility of advancement beyond anything he has dared hope for — but the price may be higher than it first appears.
