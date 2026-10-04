/**
 * sHelp Lexicon Database (Zero-AI, 100% Focused on Anime / Cartoon / Digital Art)
 * Strictly non-realistic: specialized in 2D animation, cel shading, digital splash art,
 * manga screentones, cartoon linework, and stylized digital illustration.
 */

export const LEXICON = {
  // 1. Anime & Cartoon Archetypes & Subjects
  subjects: [
    { id: "1girl", label: "1 Anime Girl / Solo Female", danbooru: "1girl, solo", flux: "a stylized anime girl", sdxl: "1girl, solo, anime aesthetic", category: "subject" },
    { id: "1boy", label: "1 Anime Boy / Solo Male", danbooru: "1boy, solo", flux: "a stylish anime boy", sdxl: "1boy, solo, anime character", category: "subject" },
    { id: "2girls", label: "2 Anime Girls", danbooru: "2girls", flux: "two anime girls interacting", sdxl: "2girls, anime duo", category: "subject" },
    { id: "couple", label: "Anime Couple (Boy & Girl)", danbooru: "1girl, 1boy, couple", flux: "an anime couple together", sdxl: "1girl, 1boy, couple, anime visual", category: "subject" },
    { id: "chibi_char", label: "Chibi / Super-Deformed Character", danbooru: "chibi, super_deformed, cute", flux: "a super cute chibi anime character with oversized head and adorable expressive eyes", sdxl: "chibi character, super deformed, cute mascot, pastel", category: "subject" },
    { id: "magical_girl", label: "Mahou Shoujo / Magical Girl", danbooru: "magical_girl, wand, ribbon, frills", flux: "a magical girl in an ornate frilled battle costume holding a glowing magical wand", sdxl: "magical girl, mahou shoujo, sparkling magic, anime key visual", category: "subject" },
    { id: "mecha_pilot", label: "Sci-Fi Mecha Pilot (Plugsuit)", danbooru: "pilot_suit, plugsuit, headset", flux: "an anime mecha pilot wearing a sleek futuristic plugsuit inside a glowing cockpit", sdxl: "mecha pilot, plugsuit, cockpit interior, anime sci-fi", category: "subject" },
    { id: "cartoon_hero", label: "Western Cartoon Hero", danbooru: "source_cartoon, western_cartoon, stylized", flux: "a vibrant western cartoon animated hero with bold expressive linework and dynamic proportions", sdxl: "western cartoon style, bold outline, animated character", category: "subject" },
    { id: "catgirl_neko", label: "Nekomimi / Anime Catgirl", danbooru: "1girl, cat_ears, cat_tail, animal_ears", flux: "a playful anime catgirl with plush feline ears and a swishing tail", sdxl: "1girl, cat ears, nekomimi, animal ear headband, anime", category: "subject" },
    { id: "samurai_ronin", label: "Anime Ronin / Swordsman", danbooru: "samurai, katana, haori, traditional_japanese", flux: "a fierce anime swordsman in a fluttering haori cloak drawing a katana", sdxl: "anime samurai, katana sword, dynamic slash effect, anime key visual", category: "subject" },
    { id: "cyber_heroine", label: "Cyberpunk Anime Mercenary", danbooru: "cyberpunk, cyborg, glowing_lines, sci-fi", flux: "a cyberpunk anime heroine with glowing neon hair accents and cybernetic visor", sdxl: "cyberpunk anime girl, glowing holographic HUD, anime digital art", category: "subject" },
    { id: "dark_sorcerer", label: "Shonen Dark Sorcerer", danbooru: "sorcerer, dark_aura, glowing_eyes, energy", flux: "a dark fantasy anime sorcerer surrounded by surging magical aura and dark energy particles", sdxl: "anime sorcerer, dark magical aura, shonen anime visual", category: "subject" }
  ],

  // 2. Anime Hair, Eyes & Stylized Traits
  physical_traits: [
    { id: "twintails", label: "Classic Anime Twintails", danbooru: "twintails, long_hair", flux: "hair styled in iconic long anime twintails bouncing dynamically", sdxl: "twintails hairstyle, anime twintails, flowing hair", category: "physical" },
    { id: "ahoge", label: "Expressive Cowlick (Ahoge)", danbooru: "ahoge", flux: "an adorable expressive single ahoge hair antenna bouncing on top of the head", sdxl: "ahoge cowlick, cute anime hair", category: "physical" },
    { id: "sparkling_eyes", label: "Sparkling Detailed Anime Eyes", danbooru: "detailed_eyes, sparkling_eyes", flux: "huge luminous anime eyes filled with intricate star-like gradient highlights and colored reflections", sdxl: "detailed anime eyes, sparkling irises, luminous eyes, anime coloring", category: "physical" },
    { id: "silver_hair", label: "Silvery White Anime Hair", danbooru: "white_hair, silver_hair", flux: "flowing moonlit silvery-white anime hair with soft lavender cel-shading highlights", sdxl: "silver anime hair, white hair, cel shaded hair", category: "physical" },
    { id: "vibrant_blue_hair", label: "Vibrant Cyan / Blue Hair", danbooru: "blue_hair, cyan_hair", flux: "electric cyan-blue hair styled with sharp anime tips and gradient glow", sdxl: "vibrant cyan hair, anime blue hair", category: "physical" },
    { id: "fiery_red_hair", label: "Fiery Flame Crimson Hair", danbooru: "red_hair, orange_hair", flux: "fiery crimson anime hair resembling flickering flame tendrils", sdxl: "crimson red anime hair, fiery hair", category: "physical" },
    { id: "fang_tooth", label: "Cute Anime Snaggletooth (Yaeba)", danbooru: "fang, yaeba, open_mouth", flux: "parted smiling lips revealing a charming cute anime snaggletooth", sdxl: "single fang, yaeba, cute expression, anime face", category: "physical" },
    { id: "blushing_face", label: "Anime Blushing Cheeks", danbooru: "blush, blush_stickers", flux: "rosy anime blush marks with stylized diagonal blushing lines across the cheeks", sdxl: "anime blush, blushing cheeks, shy expression", category: "physical" },
    { id: "gradient_hair", label: "Two-Tone Gradient Anime Hair", danbooru: "gradient_hair, multicolored_hair", flux: "striking two-tone gradient hair shifting from midnight purple at the roots to neon pink tips", sdxl: "gradient hair, two-tone anime hair, vibrant colors", category: "physical" }
  ],

  // 3. Clothing & Costumes
  clothing: [
    { id: "serafuku", label: "Classic Sailor Uniform (Serafuku)", danbooru: "serafuku, school_uniform, pleated_skirt, neckerchief", flux: "a classic Japanese sailor school uniform with crisp folded neckerchief and pleated skirt", sdxl: "sailor uniform, serafuku, pleated skirt, anime school attire", category: "clothing" },
    { id: "oversized_hoodie", label: "Cozy Oversized Anime Hoodie", danbooru: "hoodie, oversized_clothes, long_sleeves", flux: "a pastel oversized anime hoodie with extra long sleeves hiding the hands", sdxl: "oversized hoodie, anime streetwear, long sleeves", category: "clothing" },
    { id: "cyber_plugsuit", label: "Futuristic Plugsuit / Bodysuit", danbooru: "plugsuit, bodysuit, futuristic", flux: "a form-fitting sci-fi anime plugsuit with glowing interface panels and aerodynamic accents", sdxl: "plugsuit, futuristic anime pilot suit, glossy bodysuit", category: "clothing" },
    { id: "anime_maid", label: "Frilled Anime Maid Dress", danbooru: "maid, maid_apron, maid_headdress, frills", flux: "a lavishly frilled anime maid costume with lace headdress and bow ribbons", sdxl: "anime maid dress, ruffled apron, lace headband, cute frills", category: "clothing" },
    { id: "fantasy_armor", label: "Stylized Fantasy Paladin Plate", danbooru: "armor, pauldrons, breastplate, gold_trim", flux: "stylized anime knight armor adorned with ornate gold filigree and floating magical gemstones", sdxl: "fantasy anime armor, golden filigree, ornate breastplate", category: "clothing" },
    { id: "yukata_kimono", label: "Festival Yukata / Kimono", danbooru: "yukata, kimono, obi, floral_print", flux: "a festive cotton yukata patterned with cherry blossoms and tied with an elaborate obi sash", sdxl: "colorful yukata, floral kimono pattern, obi sash, anime festival", category: "clothing" },
    { id: "techwear_ninja", label: "Cyber Techwear Ninja Gear", danbooru: "techwear, straps, face_mask, tactical", flux: "a modern anime techwear ninja outfit featuring utility straps, cargo joggers, and a glowing face mask", sdxl: "techwear anime ninja, cyber straps, tactical outfit, mask", category: "clothing" }
  ],

  // 4. Expressions, Poses & Dynamic Sakuga
  expressions_poses: [
    { id: "looking_at_viewer", label: "Captivating Eye Contact", danbooru: "looking_at_viewer", flux: "making direct, engaging eye contact with the viewer", sdxl: "looking at viewer, direct gaze, anime key visual", category: "expression_pose" },
    { id: "peace_sign", label: "Anime Peace Sign (V-Sign)", danbooru: "peace_sign, v, winking", flux: "flashing a cheerful peace sign by the face while giving a playful wink", sdxl: "peace sign, v sign, wink, cheerful anime pose", category: "expression_pose" },
    { id: "dynamic_battle_leap", label: "Dynamic Mid-Air Battle Leap", danbooru: "dynamic_pose, midair, leaping, foreshortening", flux: "captured in an acrobatic mid-air combat jump with extreme anime foreshortening", sdxl: "dynamic battle pose, midair action, extreme foreshortening, sakuga", category: "expression_pose" },
    { id: "pout_expression", label: "Cute Anime Pout (Tsundere)", danbooru: "pout, puffing_cheeks, angry", flux: "a cute frustrated anime pout with puffed-out rosy cheeks and narrowed eyes", sdxl: "anime pout, puffed cheeks, tsundere expression", category: "expression_pose" },
    { id: "smug_smirk", label: "Smug / Cat-Mouth Smirk", danbooru: "smug, smirk, :3", flux: "an ultra-smug anime expression with a playful cat-like :3 curved mouth", sdxl: "smug expression, smirk, cat mouth, playful", category: "expression_pose" },
    { id: "windblown_cape", label: "Dramatic Windblown Stance", danbooru: "standing, wind, fluttering_cape, coat", flux: "standing stoically on a precipice with hair and clothing billowing dramatically in strong wind", sdxl: "windblown pose, billowing coat, epic anime stance", category: "expression_pose" },
    { id: "casting_pose", label: "Magical Spellcasting Stance", danbooru: "casting_spell, magic_circle, outstretched_hand", flux: "outstretching an open hand summoning an intricate revolving magical glyph circle", sdxl: "casting magic, glowing magic circle, outstretched hand, anime spell", category: "expression_pose" }
  ],

  // 5. Stylized Environments & Backgrounds
  environments: [
    { id: "shinkai_sky", label: "Luminous Shinkai Painted Cloudscape", danbooru: "sky, clouds, blue_sky, cumulus, sunbeam", flux: "an awe-inspiring Makoto Shinkai style sky filled with towering fluffy volumetric clouds catching radiant sunset light rays", sdxl: "makoto shinkai aesthetic, gorgeous anime sky, painted cumulus clouds, scenic", category: "environment" },
    { id: "cherry_blossom_path", label: "Sakura Cherry Blossom Avenue", danbooru: "cherry_blossoms, falling_petals, tree, spring", flux: "a sunlit avenue shaded by blooming sakura cherry blossom trees with pink petals swirling in the spring breeze", sdxl: "cherry blossoms avenue, falling sakura petals, anime school road", category: "environment" },
    { id: "neo_tokyo_night", label: "Neo-Tokyo Cyberpunk Rooftop", danbooru: "night, city, neon_lights, rooftop, tokyo", flux: "a neon-soaked cyberpunk city rooftop overlooking sprawling futuristic skyscrapers and flying train tracks", sdxl: "neo-tokyo night, anime cyberpunk city, glowing neon signs, rooftop view", category: "environment" },
    { id: "floating_islands", label: "Fantasy Floating Sky Islands", danbooru: "floating_island, fantasy, waterfall, ruins", flux: "a mystical fantasy sky realm featuring lush floating islands with waterfalls tumbling into misty voids below", sdxl: "floating islands, anime fantasy landscape, sky waterfalls, studio ghibli vibe", category: "environment" },
    { id: "cozy_anime_room", label: "Cozy Lofi Anime Bedroom", danbooru: "bedroom, indoor, desk, computer, posters", flux: "a cozy warm lofi anime bedroom with fairy lights, anime posters, plushies, and rain tapping on the window", sdxl: "lofi anime bedroom, cozy desk setup, soft warm lighting, indoor", category: "environment" },
    { id: "magical_crystal_cave", label: "Bioluminescent Crystal Cavern", danbooru: "cave, crystals, glowing, bioluminescence", flux: "an ancient underground cavern lit by giant luminous cyan and purple mana crystals", sdxl: "crystal cavern, glowing mana crystals, fantasy underground, anime cave", category: "environment" },
    { id: "cartoon_desert", label: "Stylized Western Cartoon Canyon", danbooru: "desert, canyon, stylized, clear_sky", flux: "a vibrant stylized desert canyon with warm terracotta rock formations in the style of classic animation", sdxl: "stylized cartoon canyon, red rock desert, animation background art", category: "environment" }
  ],

  // 6. Lighting, Magic Auras & Visual Effects (VFX)
  lighting_vfx: [
    { id: "sakuga_effects", label: "Anime Sakuga Impact Sparks & Smoke", danbooru: "sparks, smoke, action, debris, glowing", flux: "accompanied by dynamic hand-drawn anime sakuga visual effects, impact sparks, and stylized smoke donuts", sdxl: "sakuga visual effects, dynamic anime impact, sparks, stylized dust", category: "lighting" },
    { id: "cel_gradient", label: "Soft Cel-Shaded Anime Lighting", danbooru: "clean_lineart, anime_coloring, soft_shading", flux: "illuminated with crisp traditional cel-shading combined with smooth digital airbrush gradient lighting", sdxl: "cel shaded, anime coloring, soft gradient highlights, crisp lineart", category: "lighting" },
    { id: "magic_aura", label: "Surging Shonen Power Aura", danbooru: "aura, glowing, energy, particles", flux: "enveloped in a fierce surging energy aura with glowing electric sparks crackling outward", sdxl: "energy aura, glowing power aura, shonen anime sparks, battle energy", category: "lighting" },
    { id: "golden_sunset_glow", label: "Warm Golden Sunset Rim Light", danbooru: "sunset, rim_light, warm_lighting, orange_sky", flux: "bathed in warm anime evening rim light with glowing silhouettes against a golden dusk sky", sdxl: "sunset rim light, golden hour anime glow, warm atmosphere", category: "lighting" },
    { id: "neon_luminescence", label: "Neon Cyberpunk Bloom & Glow", danbooru: "neon_lights, glowing, rim_light, cyan_and_pink", flux: "illuminated by saturated dual-tone neon lighting casting vivid cyan and magenta rim highlights", sdxl: "neon glow, cyber anime lighting, saturated colors, rim light", category: "lighting" },
    { id: "sparkles_glitter", label: "Shojo Anime Sparkles & Light Motes", danbooru: "sparkles, light_particles, glowing", flux: "surrounded by shimmering shojo light sparkles, floating heart motes, and soft pastel bokeh", sdxl: "shojo sparkles, glitter, anime light motes, magical ambiance", category: "lighting" }
  ],

  // 7. Visual Framing, Comic Screentones & Angles
  framing_angles: [
    { id: "sakuga_dutch_angle", label: "Dynamic Dutch Tilt / Action Angle", danbooru: "dutch_angle, dynamic_angle", flux: "framed in a dynamic tilted Dutch angle intensifying the kinetic motion and visual tension", sdxl: "dynamic dutch angle, action perspective, tilted frame", category: "camera" },
    { id: "extreme_foreshortening", label: "Dramatic Anime Foreshortening", danbooru: "foreshortening, from_below", flux: "featuring extreme anime perspective foreshortening with weapons or hands thrust toward the screen", sdxl: "extreme foreshortening, exaggerated anime perspective, dynamic framing", category: "camera" },
    { id: "manga_screentone", label: "Manga Screentone & Ink Hatching", danbooru: "screentone, halftone, hatching, monochrome", flux: "styled with authentic manga halftone dot screentones, crosshatch shading, and bold black ink fills", sdxl: "manga screentone, ink hatching, halftone dots, manga page aesthetic", category: "camera" },
    { id: "speed_lines", label: "High-Speed Manga Focus Lines", danbooru: "speed_lines, focus_lines", flux: "framed by intense converging manga speed lines focusing attention directly on the character", sdxl: "manga speed lines, anime focus lines, action burst", category: "camera" },
    { id: "chromatic_aberration", label: "Stylized Prismatic Chromatic Fringing", danbooru: "chromatic_aberration, bloom", flux: "with subtle digital prismatic chromatic aberration and soft glowing bloom along high-contrast lines", sdxl: "chromatic aberration, anime bloom, stylized fringe, digital art visual", category: "camera" },
    { id: "chibi_vignette", label: "Pastel Illustrated Vignette", danbooru: "vignette, pastel, simple_background", flux: "framed by a soft pastel floral vignette with clean decorative borders", sdxl: "pastel decorative vignette, clean frame, illustration border", category: "camera" }
  ],

  // 8. Dedicated Anime, Cartoon & Digital Art Styles
  styles_mediums: [
    { id: "modern_anime_film", label: "Modern Feature Anime (Shinkai / Ufotable)", danbooru: "source_anime, anime_coloring, clean_lineart, masterpiece", flux: "a breathtaking high-budget anime theatrical feature film visual with ultra-clean vector linework, multi-layer gradient cel shading, and painted background art in the style of Kyoto Animation and Ufotable", sdxl: "modern anime style, key visual, clean lineart, studio anime production, vibrant anime coloring", category: "style" },
    { id: "retro_80s_anime", label: "Retro 80s / 90s Cel Anime (OVA / VHS)", danbooru: "retro_artstyle, 1980s_(style), cel_shading, vintage_anime", flux: "a nostalgic 1980s retro anime aesthetic captured from an authentic vintage OVA laserdisc, featuring bold ink lines, hand-painted cel animation, and soft CRT glow", sdxl: "retro 80s anime, vintage cel shading, 1990s anime style, nostalgic aesthetic", category: "style" },
    { id: "splash_art_game", label: "Digital Splash Art (Genshin / Riot Games)", danbooru: "splash_art, digital_media, concept_art, detailed", flux: "an epic high-end digital illustration character splash art with dynamic lighting, expressive brushwork, volumetric particles, and game key-visual composition", sdxl: "game splash art, digital illustration, vibrant lighting, hoyoverse style, masterpiece digital art", category: "style" },
    { id: "western_cartoon_90s", label: "90s Western Animation / Cartoon Network", danbooru: "source_cartoon, western_cartoon, stylized, flat_color", flux: "a lively Saturday morning cartoon aesthetic with bold geometric outlines, vibrant flat cel coloring, and exaggerated animated charm", sdxl: "western cartoon style, bold black outlines, flat animation coloring, 90s cartoon network", category: "style" },
    { id: "indie_animated_arcane", label: "Stylized Painterly Animation (Arcane / Spider-Verse)", danbooru: "painterly, stylized, graphic_illustration, textures", flux: "a revolutionary stylized digital animation visual blending textured painterly brushstrokes, graphic ink lines, and chromatic halftone accents like Arcane and Spider-Verse", sdxl: "painterly animation style, graphic illustration, textured digital painting, bold stylization", category: "style" },
    { id: "manga_cover_art", label: "Manga Volume Cover (Shonen Jump)", danbooru: "manga_cover, clean_lineart, screentone, color_ink", flux: "a high-impact manga magazine cover illustration with dramatic ink linework, vibrant marker-style colors, and bold typographic composition", sdxl: "manga cover illustration, bold ink linework, dynamic shonen art, anime magazine visual", category: "style" },
    { id: "chibi_moe", label: "Chibi & Kawaii Moe Illustration", danbooru: "chibi, kawaii, moe, pastel, sparkle", flux: "an irresistible pastel kawaii chibi illustration with round bubbly lines, sticker-like clean outlines, and sweet pastel color palette", sdxl: "chibi moe style, kawaii illustration, pastel colors, cute sticker art", category: "style" },
    { id: "pixel_art_retro", label: "16-Bit Retro Pixel Art", danbooru: "pixel_art, 16-bit, retro_game, dithering", flux: "a masterwork 16-bit pixel art illustration with authentic color indexing, nostalgic dithering, and retro RPG aesthetic", sdxl: "16-bit pixel art, detailed pixel sprite, retro game aesthetic, clean pixels", category: "style" }
  ]
};

// Quick lookup map by id
export const LEXICON_BY_ID = {};
Object.keys(LEXICON).forEach(cat => {
  LEXICON[cat].forEach(item => {
    LEXICON_BY_ID[item.id] = item;
  });
});
