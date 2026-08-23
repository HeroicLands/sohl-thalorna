---
aliases:
  - Garlîndris Korâzênis
  - Garlindris Korazenis
tags:
  - draft
name:
  full: Garlîndris Korâzênis
  title: ""
  given: Garlîndris
  clan: Korâzênis
  home: Tyrellan
  aliases:
    - Sir Cedric Loudvale
id: 1FNA88rcSxnCC8p2
folder: UFBfgKZUF0bAE7gG
shortcode: grlndrskrzns
img: icons/person.svg
portrait: images/being/grlndrskrzns-portrait.webp
type: being
package: thalorna
social:
  occupation: Herald
  station: administration
  class: freeman
  society: Vylarian
traits:
  gender: male
  age: 45
  birthday: 675/10/3
  height:
    m: 1.75
  weight:
    kg: 73
  build:
    frame: medium
  appearance:
    eye_color: hazel
    hair_color: black
    skin_color: fair
    complexion: weathered
    extra_features:
      - a tattoo of a lion on the thigh
gear:
  weapons:
    - Ceremonial mace
  armor:
    - Embroidered tunic bearing his family’s coat of arms
  misc:
    - Leather satchel for scrolls
    - Scrolls of announcements
    - family signet ring
    - writing quill
sohl:
  attributes:
    str: 12
    end: 14
    dex: 13
    agl: 11
    per: 15
    cml: 12
    aur: 13
    wil: 14
    rea: 13
    cre: 12
    emp: 12
    elo: 16
    mor: 12
    voi: 17
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
      base: 161
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
        masteryLevelBase: 42
    - shortcode: folklr
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: hrld
      type: skill
      system:
        masteryLevelBase: 52
    - shortcode: math
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: pysn
      type: skill
      system:
        masteryLevelBase: 14
    - shortcode: script
      type: skill
      system:
        masteryLevelBase: 56
    - shortcode: chrm
      type: skill
      system:
        masteryLevelBase: 36
    - shortcode: cmd
      type: skill
      system:
        masteryLevelBase: 30
    - shortcode: dscr
      type: skill
      system:
        masteryLevelBase: 70
    - shortcode: guil
      type: skill
      system:
        masteryLevelBase: 60
    - shortcode: intr
      type: skill
      system:
        masteryLevelBase: 60
    - shortcode: sing
      type: skill
      system:
        masteryLevelBase: 33
    - shortcode: thtcs
      type: skill
      system:
        masteryLevelBase: 14
    - shortcode: agri
      type: skill
      system:
        masteryLevelBase: 15
    - shortcode: mnrl
      type: skill
      system:
        masteryLevelBase: 14
    - shortcode: srvl
      type: skill
      system:
        masteryLevelBase: 14
    - shortcode: timb
      type: skill
      system:
        masteryLevelBase: 14
    - shortcode: awar
      type: skill
      system:
        masteryLevelBase: 45
    - shortcode: clmb
      type: skill
      system:
        masteryLevelBase: 48
    - shortcode: dnce
      type: skill
      system:
        masteryLevelBase: 22
    - shortcode: jump
      type: skill
      system:
        masteryLevelBase: 33
    - shortcode: lgdm
      type: skill
      system:
        masteryLevelBase: 14
    - shortcode: ridg
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: stlth
      type: skill
      system:
        masteryLevelBase: 36
    - shortcode: swim
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: archery
      type: skill
      system:
        masteryLevelBase: 14
    - shortcode: init
      type: skill
      system:
        masteryLevelBase: 42
    - shortcode: melee
      type: skill
      system:
        masteryLevelBase: 24
    - shortcode: thro
      type: skill
      system:
        masteryLevelBase: 28
    - shortcode: draw
      type: skill
      system:
        masteryLevelBase: 65
    - shortcode: musc
      type: skill
      system:
        masteryLevelBase: 42
    - shortcode: txtl
      type: skill
      system:
        masteryLevelBase: 14
    - shortcode: wood
      type: skill
      system:
        masteryLevelBase: 52
    - shortcode: tlnt
      type: skill
      system:
        masteryLevelBase: 39
    - shortcode: common
      type: skill
      system:
        masteryLevelBase: 15
    - shortcode: lang
      type: skill
      system:
        masteryLevelBase: 75
thalorna:
  realm: vylarinmpr
  region: vylariargn
harnworld:
  realm: Azeryàn
  ritual: []
---

# Appearance {#appearance}

Garlîndris Korâzênis is a 45-year-old man who stands 5'9" tall and is of moderate build. He has a square face with high cheekbones, a narrow forehead, and a sharp jaw that leads to a firm chin. His large hazel eyes sit beneath heavy brows, lending him an expressive gaze. A hawkish nose and thin lips complete his features. He has fair skin with a weathered complexion. His black hair is receding at the temples.

# Dossier {#dossier}

Born in the Vylaría region to a freeman family of Vylarian heritage, Garlîndris Korâzênis came into the world of the herald through a combination of circumstance and aptitude.

Sir Cedric Loudvale comes from a long line of minor nobility who have served as heralds for generations. Trained from a young age in the intricacies of heraldry, he is known for his commanding voice and meticulous attention to the details of protocol. He takes great pride in upholding the dignity of his family’s legacy and is often tasked with announcing important decrees and leading ceremonial events for the city’s nobility. Cedric's adherence to tradition sometimes makes him appear rigid, but his dedication to his craft is unquestionable.

Now at 45 years of age, Garlîndris Korâzênis has established himself as a known figure among the heralds of Vylaria. His reputation, for better or worse, precedes him in the circles where such things matter.

## Psyche

### Personality

Inflexible, struggles to adapt to informal or modern events.

### Motivation

Garlîndris is driven by the desire to master his craft and secure a stable future. The uncertainties of life in herald work keep him vigilant and adaptable.

### Strengths

Strong, clear voice, knowledgeable in heraldry, experienced in formal ceremonies.

## Social

Garlîndris is affiliated with City Heralds' Guild.

As a Vylarian herald, Garlîndris occupies a recognized social niche within Vylaria society.

## Companions

### Patrons

Garlîndris's primary patron is High-ranking nobles who value his skill and adherence to tradition.. This relationship provides both opportunity and obligation.

### Enemies

Younger, more modern heralds who see him as outdated.

## Plot Hooks

1. **The Herald's Dilemma** — Garlîndris faces a professional crisis that threatens his livelihood. A choice must be made between principle and survival, and the consequences will ripple through his community in Vylaria.

2. **Old Grudges** — Younger, more modern heralds who see him as outdated. This conflict threatens to escalate beyond personal rivalry into something far more dangerous.

3. **Echoes of the Past** — Something from Garlîndris's earlier life resurfaces unexpectedly, forcing him to confront unfinished business that he thought was long buried.

4. **Shifting Winds** — Political changes in Vylaria threaten to upend the social order that Garlîndris depends upon. He must decide whether to adapt, resist, or flee.

5. **The Opportunity** — A chance encounter offers Garlîndris the possibility of advancement beyond anything he has dared hope for — but the price may be higher than it first appears.
