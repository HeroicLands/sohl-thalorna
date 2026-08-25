---
aliases:
  - Chýnara Kórisvar
  - Chynara Korisvar
tags:
  - draft
name:
  full: Chýnara Kórisvar
  title: ""
  given: Chýnara
  clan: Kórisvar
  home: Chastèlclair
  aliases:
    - Mabel Seafoam
id: 5z0BGufzQgliEu7p
folder: J9R0fnGUTBY5z4pd
shortcode: chynrkrsvr
img: icons/person.svg
portrait: images/being/chynrkrsvr-portrait.webp
type: being
package: thalorna
social:
  occupation: Salter
  station: common_folk
  class: freeman
  society: Provenzian
traits:
  gender: female
  age: 33
  birthday: 691/3/20
  height:
    m: 1.85
  weight:
    kg: 79
  build:
    frame: medium
  appearance:
    eye_color: dark_brown
    hair_color: dark_brown
    skin_color: fair
    complexion: clear
    extra_features:
      - a scar on the lower abdomen
gear:
  weapons: []
  armor:
    - Simple work clothes suitable for the saltworks
  misc:
    - Leather pouch for personal items
    - Evaporation pans
    - wooden ladles
    - barrels for storage
sohl:
  attributes:
    str: 12
    end: 15
    dex: 11
    agl: 10
    per: 14
    cml: 13
    aur: 11
    wil: 12
    rea: 10
    cre: 12
    emp: 10
    elo: 9
    mor: 14
    voi: 10
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
      base: 174
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
    - shortcode: venusia
      type: affiliation
    - shortcode: cook
      type: skill
      system:
        masteryLevelBase: 48
    - shortcode: folklr
      type: skill
      system:
        masteryLevelBase: 33
    - shortcode: pysn
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: chrm
      type: skill
      system:
        masteryLevelBase: 36
    - shortcode: cmd
      type: skill
      system:
        masteryLevelBase: 22
    - shortcode: dscr
      type: skill
      system:
        masteryLevelBase: 20
    - shortcode: guil
      type: skill
      system:
        masteryLevelBase: 44
    - shortcode: intr
      type: skill
      system:
        masteryLevelBase: 30
    - shortcode: sing
      type: skill
      system:
        masteryLevelBase: 33
    - shortcode: thtcs
      type: skill
      system:
        masteryLevelBase: 11
    - shortcode: anmcft
      type: skill
      system:
        masteryLevelBase: 44
    - shortcode: fish
      type: skill
      system:
        masteryLevelBase: 65
    - shortcode: herb
      type: skill
      system:
        masteryLevelBase: 60
    - shortcode: mnrl
      type: skill
      system:
        masteryLevelBase: 48
    - shortcode: smsh
      type: skill
      system:
        masteryLevelBase: 26
    - shortcode: srvl
      type: skill
      system:
        masteryLevelBase: 33
    - shortcode: acro
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: awar
      type: skill
      system:
        masteryLevelBase: 39
    - shortcode: clmb
      type: skill
      system:
        masteryLevelBase: 30
    - shortcode: dnce
      type: skill
      system:
        masteryLevelBase: 33
    - shortcode: jump
      type: skill
      system:
        masteryLevelBase: 33
    - shortcode: ridg
      type: skill
      system:
        masteryLevelBase: 10
    - shortcode: stlth
      type: skill
      system:
        masteryLevelBase: 33
    - shortcode: swim
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: archery
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: init
      type: skill
      system:
        masteryLevelBase: 33
    - shortcode: melee
      type: skill
      system:
        masteryLevelBase: 22
    - shortcode: thro
      type: skill
      system:
        masteryLevelBase: 24
    - shortcode: draw
      type: skill
      system:
        masteryLevelBase: 11
    - shortcode: fltch
      type: skill
      system:
        masteryLevelBase: 24
    - shortcode: lock
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: txtl
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: wpnc
      type: skill
      system:
        masteryLevelBase: 11
thalorna:
  realm: kngdmprvnz
  region: provenzrgn
harnworld:
  realm: Provenzia
  ritual: []
---

# Appearance {#appearance}

Chýnara Kórisvar is a 33-year-old woman who stands 6'1" tall and is of moderate build. She has a long face with wide-set cheekbones, a lined forehead, and an angular jaw that leads to a strong chin. Her large dark brown eyes sit beneath expressive brows, lending her an expressive gaze. A narrow nose and firm lips complete her features. She has fair skin with a clear complexion. Her dark brown hair is twisted into an elaborate arrangement.

# Dossier {#dossier}

Born in the Provènzia region to a freeman family of Provenzian heritage, Chýnara Kórisvar came into the world of the salter through a combination of circumstance and aptitude.

Mabel has been working as a salter since she was a child, learning the trade from her parents. She operates a small saltworks near the coast, where she collects seawater and evaporates it to produce salt. Mabel is known for her dedication to quality and often sells her salt to local fishermen and merchants. She is a resilient and hardworking individual who takes pride in her work and the role she plays in her community.

Now at 33 years of age, Chýnara Kórisvar has established herself as a known figure among the salters of Provènzia. Her reputation, for better or worse, precedes her in the circles where such things matter.

## Psyche

### Personality

Can be overly focused on work, struggles with self-care.

### Motivation

Chýnara is driven by the desire to master her craft and secure a stable future. The uncertainties of life in salter work keep her vigilant and adaptable.

### Strengths

Knowledgeable about salt production, hardworking, resourceful.

## Social

Chýnara is affiliated with None; operates independently..

As a Provenzian salter, Chýnara occupies a recognized social niche within Provènzia society.

## Companions

### Patrons

Chýnara's primary patron is Local fishermen and merchants seeking high-quality salt.. This relationship provides both opportunity and obligation.

### Enemies

Few; generally well-respected, but some may compete for trade.

## Plot Hooks

1. **The Salter's Dilemma** — Chýnara faces a professional crisis that threatens her livelihood. A choice must be made between principle and survival, and the consequences will ripple through her community in Provènzia.

2. **Old Grudges** — Few; generally well-respected, but some may compete for trade. This conflict threatens to escalate beyond personal rivalry into something far more dangerous.

3. **Echoes of the Past** — Something from Chýnara's earlier life resurfaces unexpectedly, forcing her to confront unfinished business that she thought was long buried.

4. **Shifting Winds** — Political changes in Provènzia threaten to upend the social order that Chýnara depends upon. She must decide whether to adapt, resist, or flee.

5. **The Opportunity** — A chance encounter offers Chýnara the possibility of advancement beyond anything she has dared hope for — but the price may be higher than it first appears.
