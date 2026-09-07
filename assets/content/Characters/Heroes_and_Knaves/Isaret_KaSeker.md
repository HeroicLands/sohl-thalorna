---
tags:
  - heroes-and-knaves
  - hero
  - underworld
name:
  full: Isaret Ka'Seker
  title: ""
  given: Isaret
  clan: Ka'Seker
  home: khensuret
  aliases:
    - Whispers
    - The Dancing Shadow
packFolder: northernfertileregiontakheperu
banner: banners/ta-kheperu-banner.webp
shortcode: isaretkskr
img: icons/person.svg
type: being
data:
  portrait: images/being/isaretkskr-portrait.webp
  templatePriority: null
  archetypes: []
  occupation: Intelligence Agent
  stations: []
  lore:
    - commonerrnk
  homes:
    - takheperurgn
  affiliations:
    - empirtkhpr
  gender: female
  species: null
  age: 28
  birthday: 692/2/2
  height: 1.68
  weight: 63.5
  frame: light
  appearance:
    eye_color: dark_brown
    hair_color: black
    skin_color: tawny
    complexion: null
    extra_features: []
sohl:
  templatePriority: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 9 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 17 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: iset, type: affiliation }
    - { shortcode: brew, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: cook, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: folklr, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: hrld, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: pfmy, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: pysn, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: demtkscrpt, type: skill, system: { masteryLevelBase: 56 } }
    - { shortcode: chrm, type: skill, system: { masteryLevelBase: 33 } }
    - { shortcode: cmd, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: dscr, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: guil, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: intr, type: skill, system: { masteryLevelBase: 55 } }
    - { shortcode: sing, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: thtcs, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: srvl, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: timb, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: acro, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: awar, type: skill, system: { masteryLevelBase: 75 } }
    - { shortcode: clmb, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: dnce, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: jump, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: lgdm, type: skill, system: { masteryLevelBase: 75 } }
    - { shortcode: ridg, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: stlth, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: swim, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: archery, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: melee, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: thro, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: cmcs, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: draw, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: lock, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: mtlc, type: skill, system: { masteryLevelBase: 24 } }
    - { shortcode: Dgr, type: weapongear }
    - { shortcode: SlkShirt, type: armorgear }
    - { shortcode: SgBrch, type: armorgear }
    - { shortcode: LtKBoot, type: armorgear }
    - { shortcode: SlkClk, type: armorgear }
    - { shortcode: tndrbx, type: miscgear }
    - { shortcode: StdRtns, type: miscgear, system: { quantity: 2 } }
    - name: Lockpicks and thief's tools
      type: miscgear
      system:
        weight: 0.3
        value: 100
        durability: 3
    - name: Disguise kit and cosmetics
      type: miscgear
      system:
        weight: 0.5
        value: 100
        durability: 3
    - name: Writing materials and coded notes
      type: miscgear
      system:
        weight: 0.3
        value: 100
        durability: 3
    - name: Fine silk face veil
      type: miscgear
      system:
        weight: 0.1
        value: 100
        durability: 3
    - name: Rope and grappling hook
      type: miscgear
      system:
        weight: 0.5
        value: 100
        durability: 3
    - { shortcode: bpchlg, type: containergear }
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

**Home:** [[place-khensuret|Khensuret]]

# Appearance {#appearance}

Isaret stands 5'6" tall with a light build. She has dusky brown skin, jet-black hair, and dark eyes. Her features include an oval face, a straight narrow nose, a tapered chin, well-shaped lips, high-set brows, hollow cheeks.

# Dossier {#dossier}

Isaret Ka'Seker, known in the shadow-trade as **"Whispers,"** was born in the warren-slums of **[[place-khensuret|Khensuret]]**, the great necropolis-nome of [[affiliation-empirtkhpr|Ta'Kheperu]] — a city of embalmers, tomb-masons, and the swarming poor who serve the dead. Abandoned as a child, she survived its streets as a cutpurse and informant, and fell early into the organized tomb-robbing underworld for which Khensuret is infamous, learning to move unseen among the mortuary chapels and to sell what she heard as readily as what she stole. And Isaret heard a great deal, for her true gift was an inborn sensitivity to the spirit world — the faint voices of the restless dead that crowd a city built around tombs. Untrained and unconsecrated, she nonetheless learned to listen: to gather secrets no living mouth had spoken, and to feel danger before it fell. The priesthood would have named the gift a blessing of [[affiliation-kemtnpnthn|Íšét]], goddess of magic; on the streets it simply made her valuable.

Her gift drew the notice of a patron among the Kheperi nobility, who had her schooled in the subtler arts — disguise, cipher, the long game of court espionage — and set her to work as a spy and listener, her dead voices turned to the uses of the living. For years she served, until a commission carried her too deep: she uncovered the forbidden work of the **Akh-Menraa**, the hidden circle led by **Master Neferha**, whose experiments upon the dead and the spirit-realm threatened the very balance the Kheperi hold sacred. Knowing such knowledge marked her for the embalmer's table, Isaret fled Ta'Kheperu and sought out [[being-kirobashkm|Kiroba]], hoping that together they might undo Neferha's work and set the balance right.

## Background

### Skills and Abilities

- **Strength**: Isaret is not physically strong, relying more on her mystical abilities and cunning than brute force.
- **Endurance**: Though not particularly robust, Isaret has learned to withstand the mental and spiritual strain of her mystical abilities.
- **Dexterity**: Her movements are precise and fluid, making her an expert at moving silently and handling delicate objects.
- **Agility**: Isaret moves with an uncanny grace, able to slip in and out of the shadows quickly and without a sound.
- **Perception**: Her attunement to the shadow realm heightens her awareness of her surroundings, allowing her to sense disturbances in both the physical and spiritual worlds.
- **Comeliness**: Isaret’s beauty is understated, but her mysterious aura and piercing gaze give her an enigmatic allure.
- **Aura**: Her deep connection to the spirit realm and her mystical talents give her a powerful, almost otherworldly presence.
- **Will**: Isaret possesses a strong will, necessary for manipulating the dangerous forces of shadow magic without losing control.
- **Reasoning**: Isaret is clever and resourceful, able to think on her feet and solve problems with a mix of magic and strategy.
- **Creativity**: Isaret is highly inventive with her use of her mystical talents, often finding creative solutions to obstacles and dangers.
- **Empathy**: Isaret can understand the emotions of others but often keeps her own feelings hidden, preferring to maintain emotional distance.
- **Eloquence**: When she speaks, her words are measured and thoughtful, often laced with subtle warnings or hidden meanings.
- **Morality**: Isaret operates in the gray areas of morality, adhering to her own code rather than societal or religious standards. She is willing to use her abilities in ways that others might consider questionable, especially when it serves her goals or provides valuable knowledge. While she isn't openly malicious, Isaret doesn’t shy away from using manipulation, stealth, and even her mystical abilities if it helps her gain the upper hand. She follows her own path, taking advantage of situations where the line between right and wrong is blurred, though she generally avoids overtly evil acts unless necessary for survival or protection.
- **Voice**: Isaret's voice is pleasant if unremarkable.
- **Whispers of the Spirit**: Isaret has several inborn arcane talents, including the ability to hear the faint whispers of spirits (Medium), allowing her to foresee dangers (Prescience) and uncover hidden information (Clairvoyance). Her unique gifts also let her sense spiritual imbalances from afar.
- **Stealth and Espionage**: Isaret is an expert at moving unseen, gathering information, and infiltrating dangerous places. She is adept at disguise and manipulation, making her invaluable in navigating Ta'Kheperu politics and secrets.
- **Subtle Manipulator**: Isaret has a knack for twisting situations to her advantage, able to manipulate conversations and steer people toward her desired outcome without them realizing it.

## Psyche

### Personality

Isaret is cunning, resourceful, and often prefers working in the shadows. She is pragmatic, willing to do whatever is necessary to accomplish her goals, though she has a strong sense of right and wrong, having seen firsthand the corruption of Ta'Kheperu’s elite. Isaret is quick-witted and often playful, teasing her companions to lighten the mood, but there’s a dark edge to her humor. Her mistrust of authority runs deep, and she is slow to trust others.

## Social

## Plot Hooks

1. **The Secrets of Akh-Menraa**:

   Isaret discovers that a fragment of the Akh-Menraa’s dangerous research has surfaced in a noble court outside [[affiliation-empirtkhpr|Ta’Kheperu]]. A desperate courier smuggles the information to her, revealing that Neferha’s experiments could disrupt the spiritual balance of an entire region. Isaret must infiltrate the court and retrieve or destroy the evidence before Neferha’s agents can exploit it, risking her safety to maintain the secrecy of her past affiliations.

2. **The Spirit’s Debt**:

   While traveling with her companions, Isaret encounters the lingering spirit of a thief who once helped her escape from Ta’Kheperu. The spirit claims it is bound to the mortal realm due to unfinished business linked to Isaret’s actions. To grant the spirit peace, Isaret must uncover the truth about a heist gone wrong, balancing her loyalty to her past with her present mission.

3. **The Whispering Dagger**:

   An artifact Isaret carries, a dagger gifted to her by her benefactor in Ta’Kheperu, begins to emit strange whispers that only she can hear. These whispers guide her toward secrets and hidden paths but come at the cost of attracting the attention of those who fear or revere the artifact’s power. Isaret must decide whether to embrace the dagger’s guidance or seek to rid herself of its influence.

4. **The Fugitive’s Shadow**:

   A former ally who escaped with Isaret during her flight from Ta’Kheperu resurfaces, now operating as a high-profile agent in a rival kingdom. This person’s actions threaten to expose Isaret’s identity to Neferha’s spies, forcing her to confront her former ally in a game of wits and deception, where the cost of failure could mean capture or death.
