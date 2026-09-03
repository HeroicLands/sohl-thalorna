---
tags:
  - paragon
  - heroes-of-asguard
  - administration
name:
  full: Bjorn Stormborn
  title: null
  given: Bjorn
  clan: null
  aliases:
    - Stormborn
  home: null
id: IQJpaW7lB8mYgiWK
folder: Ka9XqaF27b0I3Gmq
shortcode: bjrnstrmbrn
img: icons/person.svg
type: being
data:
  portrait: images/being/bjrnstrmbrn-portrait.webp
  templatePriority: null
  archetypes: []
  occupation: Warrior and Clan Leader
  stations: []
  lore:
    - nordheimnclt
    - landedlordrnk
  homes:
    - nrdlndsrgn
  affiliations:
    - kngdmnrdhm
  gender: male
  species: null
  age: 46
  birthday: 674/1/6
  height: 1.81
  weight: 103
  frame: heavy
  appearance:
    eye_color: blue
    hair_color: dark_blonde
    skin_color: fair
    complexion: weathered
    extra_features: []
sohl:
  archetype: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 17 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: thorr, type: affiliation }
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
      base: 227
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
---

# Appearance {#appearance}

Bjorn stands 6'1" with a heavy, solid frame, weighing around 220 pounds. His fair skin is weathered from decades of northern campaigning, and his dark blonde hair is worn long and braided in the fashion of a northern chieftain. His blue eyes carry quiet authority, and a faint haze of static seems to cling to him, causing his hair to rise slightly in dry weather. His features are strong and commanding, with a broad forehead, a straight nose, a heavy jaw shadowed with stubble, and deep-set eyes framed by crow's feet. His bearing is that of a man accustomed to being obeyed — not through bluster, but through the steady confidence of proven leadership. He wears a fine mail hauberk beneath a heavy fur cloak pinned with a silver thunderbolt brooch, and carries a warhammer and a round shield bearing his clan's emblem.

# Dossier {#dossier}

Bjorn was born to a warrior clan that had long worshiped Thórr as their protector. From a young age, he was taught the ways of battle, learning to wield a hammer and shield in honor of the thunder god. Bjorn was known for his indomitable spirit and his ability to rally his fellow warriors even in the face of overwhelming odds. His connection to Thórr was evident to all who knew him; lightning seemed to follow him wherever he went, and his war cry was said to echo like thunder across the battlefield.

The saga of Bjorn Stormborn is one of endurance and unwavering faith. During a brutal winter, Bjorn's village was beset by devastating storms that threatened to destroy everything they held dear. The people, fearing that Thórr had forsaken them, turned to Bjorn for guidance. Bjorn, believing that Thórr was testing their faith, led his people in a desperate journey to the sacred mountain of Hammersfjall, where it was said Thórr had struck the earth with Mjolnir. Through blizzards and freezing winds, Bjorn led his people, never faltering in his belief that Thórr would protect them. At the peak of the mountain, Bjorn called out to Thórr, and in response, the storms ceased, and the skies cleared.

## Psyche

### Personality

Bjorn is the epitome of a northern leader — charismatic, decisive, and unyielding in adversity. He leads by example, always the first into danger and the last to retreat. He carries himself with a quiet confidence that inspires trust, though he can be stubborn to the point of recklessness when he believes he is right. He is deeply devoted to his clan and considers their welfare his sacred responsibility. In private moments, he worries constantly about living up to the expectations placed upon him.

### Motivation

Bjorn seeks to unite the fractious northern clans under a common purpose, believing that their constant feuding weakens them all. He draws inspiration from the ancient alliance that Hrafnleif's wisdom once forged and dreams of creating something lasting. He also struggles with the burden of leadership — every decision he makes affects his people's lives, and the weight of that responsibility grows heavier with each passing year.

### Strengths

Bjorn is a natural leader whose presence on the battlefield can turn the tide of a fight. His tactical skill in both open field and defensive warfare is widely respected. The lightning that accompanies him in battle is more than superstition — his strikes genuinely carry an electrical force that can stun and disorient opponents. His reputation as the man who walked to Hammersfjall and brought back the sun makes him a legend among the common folk.

## Social

## Companions

### Patrons

**The Council of Elders** — The governing body of his clan, who support Bjorn's leadership and provide him with warriors, resources, and political backing.

**Hrafnleif the Wise** — The renowned seer serves as Bjorn's advisor, providing prophetic guidance and diplomatic counsel that complements Bjorn's martial approach.

### Enemies

**Jarl Skarpi Wolfson** — A rival clan leader who views Bjorn's unification efforts as a threat to his own power. Skarpi has been building alliances with other jarls to oppose Bjorn.

**The Winter Witch** — A mysterious sorceress who claims the storms that beset Bjorn's village were her doing, not Thórr's test. She hints at darker plans for the northern lands.

## Plot Hooks

1. **The Great Moot** — Bjorn has called a gathering of all the northern jarls to discuss unification. Political intrigue, assassination attempts, and old grudges threaten to derail the proceedings. The party must help navigate the dangerous politics and keep Bjorn alive.

2. **The Winter Witch** — The sorceress who claims responsibility for the devastating storms has issued a challenge to Bjorn. She offers peace in exchange for something Bjorn cannot give — and war if he refuses.

3. **The Lightning Mark** — Bjorn's son has been born with a lightning-shaped birthmark, and both the Storm Temple and rival clans interpret this as an omen. Some see it as a sign of divine favor; others as a curse that must be eliminated.
