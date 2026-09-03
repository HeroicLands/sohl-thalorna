---
tags:
  - paragon
  - heroes-of-asguard
  - clergy
name:
  full: Inga Harvest-Blessed
  title: null
  given: Inga
  clan: null
  aliases:
    - Harvest-Blessed
  home: null
id: GhSo3e8vrKA459Us
folder: Ka9XqaF27b0I3Gmq
shortcode: inghrvstblsd
img: icons/person.svg
type: being
data:
  portrait: images/being/inghrvstblsd-portrait.webp
  templatePriority: null
  archetypes: []
  occupation: Priest
  stations: []
  lore:
    - nordheimnclt
    - commonerrnk
  homes:
    - nrdlndsrgn
  affiliations:
    - kngdmnrdhm
  gender: female
  species: null
  age: 36
  birthday: 684/2/17
  height: 1.64
  weight: 64
  frame: medium
  appearance:
    eye_color: gray
    hair_color: brown
    skin_color: medium
    complexion: smooth
    extra_features: []
sohl:
  archetype: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 15 } }
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
      base: 141
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

Inga stands 5'7" with a sturdy, strong-limbed frame, weighing about 165 pounds. Her fair skin is sun-darkened and freckled across the nose and cheeks, and her dark blonde hair is kept in a practical braid wound around her head to keep it out of her way while working. Her brown eyes are shrewd and appraising, the eyes of a woman who judges people by what they produce. Her features are plain and honest, with a round face, a snub nose, a firm chin, full lips, and sun-bleached brows. Her forearms are strong and brown from fieldwork, and her calloused hands are rarely idle. Inga dresses in practical homespun — a linen tunic, a heavy apron, leather shoes worn thin at the soles — with dried herbs hanging from her belt, filling the air around her with the scent of lavender and thyme. She carries a pruning knife and a leather pouch of seeds as naturally as a warrior carries a sword.

# Dossier {#dossier}

Inga was born during a bountiful harvest, a time of great prosperity for her village. Her birth was seen as an omen of continued plenty, and from a young age, Inga showed a remarkable talent for agriculture. Under her care, crops grew larger and more plentiful, and the animals of the village thrived. Inga believed that her abilities were a gift from Fréyr, and she devoted herself to the god, performing rituals and ceremonies to honor him and ensure the continued prosperity of her people.

The saga of Inga Harvest-Blessed tells of how she saved her village from a terrible famine. After several years of prosperity, the rains failed and the crops withered. Inga journeyed to the ancient standing stones of Hjartaland, where Fréyr himself had blessed the earth. There, she performed a ritual of renewal, offering the last of her village's grain to the earth and praying for Fréyr's mercy. A great wind arose, the skies darkened, and rain began to fall. Under her guidance, the villagers replanted their fields, and the harvest that followed was the largest and most bountiful in memory.

## Psyche

### Personality

Inga is practical and no-nonsense, with the calloused hands and weather-beaten face of someone who works the land every day. She has little patience for pretension or laziness and judges people by what they produce rather than what they say. Despite her bluntness, she possesses a deep generosity and will share her last crust of bread with a hungry stranger. She has a rich, hearty laugh and an earthy sense of humor that can make even the grimmest warrior blush. She sings while she works, and her voice is surprisingly beautiful.

### Motivation

Inga's goal is simple and profound: to ensure that no one goes hungry. She seeks to spread Fréyr's agricultural blessings to every settlement in the north, teaching improved farming techniques alongside the sacred rituals that she believes make the land fertile. She is particularly concerned about the growing frequency of failed harvests and suspects that something is deliberately attacking the fertility of the northern lands.

### Strengths

Inga's agricultural knowledge combines practical expertise with divine blessing; crops she tends grow faster, stronger, and more abundant. She can sense the health of soil and diagnose blight before it becomes visible. Her standing at the stones of Hjartaland gave her the ability to call rain once per season, a power she uses sparingly and only in genuine emergencies. Her practical skills make her invaluable to any settlement, and her network of farming communities gives her access to food, shelter, and information across the north.

## Social

## Companions

### Patrons

**The Standing Stones of Hjartaland** — This sacred site and its keepers provide Inga with spiritual power and a place to perform her most important rituals.

**The Northern Farmers' Alliance** — A cooperative of farming communities that funds Inga's travels and implements her agricultural innovations across their lands.

### Enemies

**The Blight-Bringer** — A mysterious entity or person responsible for the increasing frequency of crop failures across the north. Inga has been investigating and is getting dangerously close to the truth.

**Jarl Grimbeard's Tax Collectors** — A lord who imposes crushing taxes on the villages Inga serves, deliberately keeping them dependent and hungry. He views Inga's efforts to improve their harvests as a threat to his control.

## Plot Hooks

1. **The Poisoned Harvest** — A village's entire harvest has been tainted with a magical poison that causes madness in those who eat it. Inga must find the source and a cure before the stored grain runs out and starvation sets in.

2. **The Famine War** — Two starving settlements are on the verge of war over a limited food supply. Inga must find a way to feed both communities before violence erupts.

3. **The Blight's Source** — Inga has finally traced the spreading crop failures to their origin: a corrupted ley line deep underground. Reaching it will require delving into ancient tunnels that are home to something far worse than blight.
