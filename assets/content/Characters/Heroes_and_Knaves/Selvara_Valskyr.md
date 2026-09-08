---
tags:
  - tamzir-crew
  - tradesfolk
name:
  full: Sélvara Válskyr
  title: ""
  given: Sélvara
  clan: Válskyr
  aliases: []
packFolder: aureldiatarvenia
shortcode: slvrvlskyr
banner: banners/tamzir-banner.webp
img: images/beings/characters/slvrvlskyr-portrait.webp
type: being
data:
  portrait: images/being/slvrvlskyr-portrait.webp
  templatePriority: null
  archetypes: []
  occupation: First Mate
  stations: []
  lore:
    - commonerrnk
  homes:
    - tarvenirgn
  affiliations:
    - thetamzir
    - kingdmtrvn
  gender: female
  species: null
  age: 34
  birthday: 685/2/26
  height: 1.78
  weight: 72.6
  frame: medium
  appearance:
    eye_color: hazel
    hair_color: brown
    skin_color: dark
    complexion: weathered
    extra_features:
      - a commanding presence
      - moves with quiet precision
sohl:
  templatePriority: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: dge, type: skill, system: { masteryLevelBase: 75 } }
    - { shortcode: melee, type: skill, system: { masteryLevelBase: 84 } }
    - { shortcode: dscr, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: draw, type: skill, system: { masteryLevelBase: 22 } }
    - { shortcode: chrm, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: swim, type: skill, system: { masteryLevelBase: 34 } }
    - { shortcode: intr, type: skill, system: { masteryLevelBase: 44 } }
    - { shortcode: sing, type: skill, system: { masteryLevelBase: 35 } }
    - { shortcode: shok, type: skill, system: { masteryLevelBase: 74 } }
    - { shortcode: pysn, type: skill, system: { masteryLevelBase: 46 } }
    - { shortcode: folklr, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: thro, type: skill, system: { masteryLevelBase: 61 } }
    - { shortcode: stlth, type: skill, system: { masteryLevelBase: 64 } }
    - { shortcode: ridg, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: srvl, type: skill, system: { masteryLevelBase: 62 } }
    - { shortcode: cmd, type: skill, system: { masteryLevelBase: 62 } }
    - { shortcode: guil, type: skill, system: { masteryLevelBase: 51 } }
    - { shortcode: clmb, type: skill, system: { masteryLevelBase: 69 } }
    - { shortcode: cook, type: skill, system: { masteryLevelBase: 52 } }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 90 } }
    - { shortcode: thtcs, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: archery, type: skill, system: { masteryLevelBase: 74 } }
    - { shortcode: dnce, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: jump, type: skill, system: { masteryLevelBase: 59 } }
    - { shortcode: awar, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: fish, type: skill, system: { masteryLevelBase: 52 } }
    - { shortcode: hrld, type: skill, system: { masteryLevelBase: 35 } }
    - { shortcode: pilt, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: smsh, type: skill, system: { masteryLevelBase: 62 } }
    - { shortcode: shpw, type: skill, system: { masteryLevelBase: 27 } }
    - { shortcode: wpnc, type: skill, system: { masteryLevelBase: 58 } }
    - { shortcode: ShrtSwd, type: weapongear }
    - { shortcode: Dgr, type: weapongear }
    - { shortcode: BAxe, type: weapongear }
    - { shortcode: RndSh, type: weapongear }
    - { shortcode: CTunic, type: armorgear }
    - { shortcode: CLeg, type: armorgear }
    - { shortcode: LtShoe, type: armorgear }
    - { shortcode: LtGlove, type: armorgear }
    - { shortcode: LtVest, type: armorgear }
    - { shortcode: PlGrvs, type: armorgear }
    - { shortcode: PlHHelm, type: armorgear }
    - { shortcode: bpchmd, type: containergear }
    - { shortcode: pence, type: miscgear, system: { quantity: 34 } }
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

Sélvara Válskyr is a striking woman — tall, dark-skinned, and built with the lean, hard muscle of a career soldier. Her brown hair is kept short and practical, and her hazel eyes hold a steady, assessing gaze that has unnerved far larger opponents. She moves with the quiet precision of someone who has spent years navigating both battlefields and heaving ship decks, and her bearing carries an unmistakable military authority. She dresses practically in a leather vest over simple cloth, with a short sword and battleaxe within easy reach. A fine roundshield, battered but well-maintained, hangs from a strap across her back when trouble is expected.

# Dossier {#dossier}

## Background

### Origin

Sélvara was born in a coastal village in northern Tarvénia, the daughter of fishermen. Life was hard but stable until she was fourteen, when Vylarian imperial forces raided her village searching for Tarvénan rebels. Eshârum Tarûzî — then a young rebel scout — was hiding in her father's boathouse. When Sélvara went to warn him, an imperial soldier followed. What happened next forged a bond between them that neither war nor the years since have broken. She killed the soldier with a gutting knife. She was fourteen years old.

### The War

Sélvara joined the Haradian rebellion the same night, following Shâ into a conflict that would consume the next four years of her life. She proved to be a natural warrior — disciplined, fearless, and relentlessly competent. Where Shâ led with charisma and tactical cunning, Sélvara was the steady hand that turned his plans into reality. She fought in the brutal Battle of Tamzîr Shoals, where she earned a reputation for cold-blooded efficiency under fire. By the war's end, she was a hardened veteran at eighteen.

### After the War

When the merchant guilds seized power and the revolution's ideals collapsed, Sélvara followed Shâ without hesitation. She had no illusions about politics and never had — she fought for people, not causes. When Shâ bought the Tamzîr and offered her the position of first mate, she accepted with a single nod. She has held the position for twelve years, running the ship with quiet authority and serving as the crew's anchor when Shâ's temper or recklessness threatens to capsize them all.

### Marriage

Three years ago, Sélvara married Féthar Dhárel, the Tamzîr's pilot, in a dockside ceremony in Provènzia. The match surprised everyone except Shâ, who had seen it coming for years. Féthar's irreverent humor and warmth complement Sélvara's reserve, and the marriage is a genuinely happy one — a rare point of softness in her otherwise hard-edged life.

## Psyche

### Personality

Sélvara is calm, competent, and economical with words. She does not waste time on speeches, pleasantries, or hand-wringing. She gives orders with quiet authority and expects them to be followed. She is loyal to a fault — once she commits to someone, she will walk through fire for them — but her loyalty must be earned, and she does not suffer fools. Behind the soldier's exterior is a deeply perceptive woman who reads people with unsettling accuracy.

### Motivation

Sélvara's motivations are simple and fierce: protect the people she loves. The Tamzîr's crew is her family, and Shâ is the closest thing she has to a brother. She does not care about causes, ideologies, or grand ambitions. She cares about keeping her people alive and fed and free.

### Strengths

She is one of the finest fighters on the Vylarian Sea — a devastating close-quarters combatant with sword, axe, or bare hands. Her tactical awareness is superb, and she manages the crew with an efficiency that keeps the Tamzîr running. She is virtually unshakeable under pressure.

### Weaknesses

Sélvara's emotional reserve can shade into coldness. She struggles to express vulnerability and sometimes fails to notice when her crew needs compassion rather than competence. Her absolute loyalty to Shâ occasionally blinds her to his flaws, and she can be ruthless when she perceives a threat to her people — a ruthlessness that sometimes crosses lines others would not.

## Social

### Patrons

None. Sélvara answers to Shâ and to herself.

### Enemies

The same enemies as the Tamzîr's crew: Haradian guild enforcers, Vylarian imperial agents, and — increasingly — agents of the Ordo Arcanis.

### Affiliations

First Mate of the **Tamzîr**. Wife of **Féthar Dhárel**. Wartime comrade and most trusted ally of **Captain Eshârum Tarûzî**.

## Plot Hooks

1. **The Village Returns**: Word reaches Sélvara that her home village in Tarvénia is under threat again — this time from Haradian guild agents who want to establish a trading post on the coast. Her surviving family is among those who would be displaced. Returning to help would mean sailing into contested waters and confronting the same power structures she and Shâ have spent years avoiding.

2. **The Soldier's Reckoning**: A former imperial officer who participated in the raid on Sélvara's village has been identified living comfortably in a Vylarian port city. Sélvara must decide whether old debts are worth the risk of pursuing — and whether vengeance or justice is what she truly wants.

3. **Divided Loyalty**: When Shâ makes a decision that Sélvara believes will get the crew killed, she faces the impossible choice between her loyalty to her captain and her responsibility to the people under her care. For the first time in their long partnership, the two find themselves on opposite sides of an argument with no easy resolution.
