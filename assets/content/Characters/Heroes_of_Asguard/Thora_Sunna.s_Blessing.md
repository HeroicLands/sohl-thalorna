---
aliases:
  - Thora Sunna's Blessing
tags:
  - paragon
  - heroes-of-asguard
name:
  full: Thora Sunna's Blessing
  title: null
  given: Thora
  clan: null
  aliases:
    - Sunna's Blessing
  home: null
id: IJjbnGBvpektfbZ4
folder: Ka9XqaF27b0I3Gmq
shortcode: thrsnsblsng
img: icons/person.svg
portrait: images/being/thrsnsblsng-portrait.webp
type: being
social:
  occupation: Priest
  station: clergy
  class: freeman
  society: Nordheimn
traits:
  gender: female
  age: 34
  birthday: 686/9/13
  height:
    m: 1.76
  weight:
    kg: 89
  build:
    frame: massive
  appearance:
    eye_color: green
    hair_color: red
    skin_color: fair
    complexion: freckled
    extra_features: []
sohl:
  archetype: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 9 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 17 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 18 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: freyr, type: affiliation }
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
thalorna:
  realm: kngdmnrdhm
  region: nrdlndsrgn
harnworld:
  realm: Orbaal
  ritual: []
---

# Appearance {#appearance}

Thora stands 5'6" with a medium, graceful frame, weighing about 140 pounds. Her fair skin has a warm, radiant quality, as though lit faintly from within, and her red hair falls in loose waves past her shoulders, catching the light like copper. Her green eyes are gentle and perceptive, the kind that notice suffering before it is spoken. Her features are soft and pleasant, with a round face, a scattering of freckles across a small nose, full lips quick to offer comfort, and delicate brows that arch expressively. Her hands bear the gentle calluses of an herbalist, stained faintly green from years of working with plants and poultices. Thora dresses in layered robes of warm gold and cream, with a healer's satchel at her hip stuffed with dried herbs, bandages, and small clay vials. A crystal phial of sacred water from Blómstjarna hangs from a cord at her neck, catching the light with an inner radiance.

# Dossier {#dossier}

Thora was born during a solar eclipse, a sign of both great power and great responsibility. Her mother, a priestess of Fréyr, believed that Thora was chosen by the god to be a healer and bringer of light. As a child, Thora was taught the ways of healing, learning to use herbs, chants, and rituals to cure the sick and soothe the wounded. Her touch was said to bring warmth and life, and as she grew, she became known as Sunna's Blessing, a name that reflected her radiant presence. Thora dedicated her life to serving Fréyr by healing both people and the land.

The saga of Thora Sunna's Blessing tells of her quest to heal a land blighted by war. After a long and bloody conflict, the once fertile fields had turned to ash and the rivers ran dry. Thora embarked on a perilous journey to the sacred mountain of Blómstjarna, where the waters of life were said to flow from the earth itself. Upon reaching the summit, she discovered the sacred waters guarded by a powerful spirit of the mountain. The spirit tested her resolve, and Thora, with humility and wisdom, offered her own life in exchange for the renewal of the land. Moved by her selflessness, the spirit allowed Thora to take the waters without harm. She returned to restore the land, and the fields bloomed once more.

## Psyche

### Personality

Thora radiates a quiet warmth that puts even the most troubled souls at ease. She is compassionate without being naive, and her years of tending to the wounded and dying have given her a realistic understanding of suffering. She is deeply empathetic but has learned to maintain emotional boundaries to avoid being consumed by others' pain. She has a gentle humor that surfaces at unexpected moments and a stubborn streak that reveals itself when someone tries to prevent her from reaching those who need healing.

### Motivation

Thora seeks to heal not just individuals but the deep wounds that war and hatred have inflicted on the northern lands. She believes that Fréyr's power of renewal can mend even the most devastated landscapes and shattered communities. She is particularly driven to find ways to heal those affected by dark magic and Helspawn corruption, having seen too many people left beyond the reach of ordinary healing.

### Strengths

Thora's healing abilities are extraordinary, combining deep knowledge of herblore and medicine with a divine blessing that accelerates natural healing. She can purify tainted water and soil, and her presence seems to encourage growth in plants and calm in animals. Her reputation as a healer grants her safe passage even through hostile territories, as most warriors fear harming a healer of her renown. She carries sacred water from Blómstjarna that retains some of its restorative power.

## Social

## Companions

### Patrons

**The Temple of Fréyr at Blómstjarna** — The temple at the sacred mountain considers Thora their most gifted healer and provides her with supplies, training, and access to their most closely guarded healing knowledge.

**The Widows' Circle** — An informal network of women across the northern settlements who have lost family to war. They shelter and supply Thora during her travels in exchange for her healing services.

### Enemies

**Mörkvidr the Deathmage** — The necromancer views Thora's healing power as a direct threat to his Helspawn legions and has specifically targeted her for destruction.

**The Blood Cult of Súrtr** — An extremist faction within Súrtr's faith that believes healing the land prevents the necessary purification by fire. They consider Thora a heretic against the natural order.

## Plot Hooks

1. **The Plague Bearer** — A mysterious illness is spreading through the northern settlements, and Thora's healing powers are the only thing slowing its advance. The disease has an unnatural origin, and tracking it to its source will require venturing into dangerous territory.

2. **The Corrupted Waters** — The sacred waters of Blómstjarna have been poisoned, and the temple's healing power is fading. Thora must ascend the mountain again and confront whatever force has tainted the source.

3. **The Healer's Dilemma** — A notorious war criminal lies dying, and only Thora can save him. Healing him would infuriate his many victims; letting him die would betray her oath as a healer. The situation is further complicated by what the criminal knows about an impending attack.
