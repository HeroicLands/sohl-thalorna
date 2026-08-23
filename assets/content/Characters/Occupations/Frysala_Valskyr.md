---
aliases:
  - Frýsala Válskyr
  - Frysala Valskyr
tags:
  - draft
name:
  full: Frýsala Válskyr
  title: ""
  given: Frýsala
  clan: Válskyr
  home: Fiòrdaure
  aliases:
    - Sigrid Frostholm
id: MeR3pzh84KpLMcNf
folder: J9R0fnGUTBY5z4pd
shortcode: fryslvlskyr
img: icons/person.svg
portrait: images/being/fryslvlskyr-portrait.webp
type: being
package: thalorna
social:
  occupation: Chieftain
  station: administration
  class: noble
  society: Provenzian
traits:
  gender: female
  age: 42
  birthday: 678/5/30
  height:
    m: 1.78
  weight:
    kg: 78
  build:
    frame: medium
  appearance:
    eye_color: hazel
    hair_color: chestnut
    skin_color: fair
    complexion: clear
    extra_features:
      - a tattoo of an eagle on the back
gear:
  weapons:
    - Spear and round shield
  armor:
    - Leather armor with metal reinforcements
  misc:
    - Woolen satchel
    - Tribal necklace
    - hunting knife
    - map of the territory
sohl:
  attributes:
    str: 14
    end: 13
    dex: 12
    agl: 13
    per: 15
    cml: 12
    aur: 14
    wil: 15
    rea: 14
    cre: 13
    emp: 9
    elo: 12
    mor: 11
    voi: 13
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
      base: 172
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
    - shortcode: janus
      type: affiliation
    - shortcode: cook
      type: skill
      system:
        masteryLevelBase: 30
    - shortcode: folklr
      type: skill
      system:
        masteryLevelBase: 42
    - shortcode: law
      type: skill
      system:
        masteryLevelBase: 70
    - shortcode: pysn
      type: skill
      system:
        masteryLevelBase: 14
    - shortcode: chrm
      type: skill
      system:
        masteryLevelBase: 44
    - shortcode: cmd
      type: skill
      system:
        masteryLevelBase: 70
    - shortcode: dscr
      type: skill
      system:
        masteryLevelBase: 26
    - shortcode: guil
      type: skill
      system:
        masteryLevelBase: 33
    - shortcode: intr
      type: skill
      system:
        masteryLevelBase: 55
    - shortcode: lang
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: sing
      type: skill
      system:
        masteryLevelBase: 33
    - shortcode: thtcs
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: herb
      type: skill
      system:
        masteryLevelBase: 28
    - shortcode: srvl
      type: skill
      system:
        masteryLevelBase: 15
    - shortcode: awar
      type: skill
      system:
        masteryLevelBase: 45
    - shortcode: clmb
      type: skill
      system:
        masteryLevelBase: 52
    - shortcode: dnce
      type: skill
      system:
        masteryLevelBase: 52
    - shortcode: jump
      type: skill
      system:
        masteryLevelBase: 39
    - shortcode: ridg
      type: skill
      system:
        masteryLevelBase: 22
    - shortcode: stlth
      type: skill
      system:
        masteryLevelBase: 42
    - shortcode: swim
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: archery
      type: skill
      system:
        masteryLevelBase: 14
    - shortcode: init
      type: skill
      system:
        masteryLevelBase: 45
    - shortcode: melee
      type: skill
      system:
        masteryLevelBase: 24
    - shortcode: thro
      type: skill
      system:
        masteryLevelBase: 26
    - shortcode: cmcs
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: draw
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: fltch
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: hide
      type: skill
      system:
        masteryLevelBase: 26
    - shortcode: masn
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: tlnt
      type: skill
      system:
        masteryLevelBase: 42
thalorna:
  realm: kngdmprvnz
  region: provenzrgn
harnworld:
  realm: Provenzia
  ritual: []
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
