---
"sohl-thalorna": patch
---

**Shipped assets: 36.1 MB → 16.5 MB.** Being portraits were resized to what the
sheet actually renders, the totem artwork went from 15 MB of 512px PNG to 540 KB
of 256px webp, and ninety-one creature portraits belonging to SoHL's bestiary
were returned to that repository.

**Art that pointed nowhere now resolves.** 1,087 image paths were repointed at
files that exist; 341 beings gained their own portrait on `data.portrait`, where
a being's portrait belongs, rather than on `img`. The module packages and themes
its own icons the way the system does.
