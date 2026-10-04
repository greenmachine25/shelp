/**
 * sHelp Prompt Optimizer (Unified Zero-AI Engine)
 * Strictly focused on Anime / Cartoon / Digital Art (Zero Realism)
 * Works out-of-the-box via local file:// and GitHub Pages.
 */

(function () {
  "use strict";

  // ==========================================
  // 1. LEXICON DATABASE (Anime / Cartoon / Digital Art)
  // ==========================================
  const LEXICON = {
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

    clothing: [
      { id: "serafuku", label: "Classic Sailor Uniform (Serafuku)", danbooru: "serafuku, school_uniform, pleated_skirt, neckerchief", flux: "a classic Japanese sailor school uniform with crisp folded neckerchief and pleated skirt", sdxl: "sailor uniform, serafuku, pleated skirt, anime school attire", category: "clothing" },
      { id: "oversized_hoodie", label: "Cozy Oversized Anime Hoodie", danbooru: "hoodie, oversized_clothes, long_sleeves", flux: "a pastel oversized anime hoodie with extra long sleeves hiding the hands", sdxl: "oversized hoodie, anime streetwear, long sleeves", category: "clothing" },
      { id: "cyber_plugsuit", label: "Futuristic Plugsuit / Bodysuit", danbooru: "plugsuit, bodysuit, futuristic", flux: "a form-fitting sci-fi anime plugsuit with glowing interface panels and aerodynamic accents", sdxl: "plugsuit, futuristic anime pilot suit, glossy bodysuit", category: "clothing" },
      { id: "anime_maid", label: "Frilled Anime Maid Dress", danbooru: "maid, maid_apron, maid_headdress, frills", flux: "a lavishly frilled anime maid costume with lace headdress and bow ribbons", sdxl: "anime maid dress, ruffled apron, lace headband, cute frills", category: "clothing" },
      { id: "fantasy_armor", label: "Stylized Fantasy Paladin Plate", danbooru: "armor, pauldrons, breastplate, gold_trim", flux: "stylized anime knight armor adorned with ornate gold filigree and floating magical gemstones", sdxl: "fantasy anime armor, golden filigree, ornate breastplate", category: "clothing" },
      { id: "yukata_kimono", label: "Festival Yukata / Kimono", danbooru: "yukata, kimono, obi, floral_print", flux: "a festive cotton yukata patterned with cherry blossoms and tied with an elaborate obi sash", sdxl: "colorful yukata, floral kimono pattern, obi sash, anime festival", category: "clothing" },
      { id: "techwear_ninja", label: "Cyber Techwear Ninja Gear", danbooru: "techwear, straps, face_mask, tactical", flux: "a modern anime techwear ninja outfit featuring utility straps, cargo joggers, and a glowing face mask", sdxl: "techwear anime ninja, cyber straps, tactical outfit, mask", category: "clothing" }
    ],

    expressions_poses: [
      { id: "looking_at_viewer", label: "Captivating Eye Contact", danbooru: "looking_at_viewer", flux: "making direct, engaging eye contact with the viewer", sdxl: "looking at viewer, direct gaze, anime key visual", category: "expression_pose" },
      { id: "peace_sign", label: "Anime Peace Sign (V-Sign)", danbooru: "peace_sign, v, winking", flux: "flashing a cheerful peace sign by the face while giving a playful wink", sdxl: "peace sign, v sign, wink, cheerful anime pose", category: "expression_pose" },
      { id: "dynamic_battle_leap", label: "Dynamic Mid-Air Battle Leap", danbooru: "dynamic_pose, midair, leaping, foreshortening", flux: "captured in an acrobatic mid-air combat jump with extreme anime foreshortening", sdxl: "dynamic battle pose, midair action, extreme foreshortening, sakuga", category: "expression_pose" },
      { id: "pout_expression", label: "Cute Anime Pout (Tsundere)", danbooru: "pout, puffing_cheeks, angry", flux: "a cute frustrated anime pout with puffed-out rosy cheeks and narrowed eyes", sdxl: "anime pout, puffed cheeks, tsundere expression", category: "expression_pose" },
      { id: "smug_smirk", label: "Smug / Cat-Mouth Smirk", danbooru: "smug, smirk, :3", flux: "an ultra-smug anime expression with a playful cat-like :3 curved mouth", sdxl: "smug expression, smirk, cat mouth, playful", category: "expression_pose" },
      { id: "windblown_cape", label: "Dramatic Windblown Stance", danbooru: "standing, wind, fluttering_cape, coat", flux: "standing stoically on a precipice with hair and clothing billowing dramatically in strong wind", sdxl: "windblown pose, billowing coat, epic anime stance", category: "expression_pose" },
      { id: "casting_pose", label: "Magical Spellcasting Stance", danbooru: "casting_spell, magic_circle, outstretched_hand", flux: "outstretching an open hand summoning an intricate revolving magical glyph circle", sdxl: "casting magic, glowing magic circle, outstretched hand, anime spell", category: "expression_pose" }
    ],

    environments: [
      { id: "shinkai_sky", label: "Luminous Shinkai Painted Cloudscape", danbooru: "sky, clouds, blue_sky, cumulus, sunbeam", flux: "an awe-inspiring Makoto Shinkai style sky filled with towering fluffy volumetric clouds catching radiant sunset light rays", sdxl: "makoto shinkai aesthetic, gorgeous anime sky, painted cumulus clouds, scenic", category: "environment" },
      { id: "cherry_blossom_path", label: "Sakura Cherry Blossom Avenue", danbooru: "cherry_blossoms, falling_petals, tree, spring", flux: "a sunlit avenue shaded by blooming sakura cherry blossom trees with pink petals swirling in the spring breeze", sdxl: "cherry blossoms avenue, falling sakura petals, anime school road", category: "environment" },
      { id: "neo_tokyo_night", label: "Neo-Tokyo Cyberpunk Rooftop", danbooru: "night, city, neon_lights, rooftop, tokyo", flux: "a neon-soaked cyberpunk city rooftop overlooking sprawling futuristic skyscrapers and flying train tracks", sdxl: "neo-tokyo night, anime cyberpunk city, glowing neon signs, rooftop view", category: "environment" },
      { id: "floating_islands", label: "Fantasy Floating Sky Islands", danbooru: "floating_island, fantasy, waterfall, ruins", flux: "a mystical fantasy sky realm featuring lush floating islands with waterfalls tumbling into misty voids below", sdxl: "floating islands, anime fantasy landscape, sky waterfalls, studio ghibli vibe", category: "environment" },
      { id: "cozy_anime_room", label: "Cozy Lofi Anime Bedroom", danbooru: "bedroom, indoor, desk, computer, posters", flux: "a cozy warm lofi anime bedroom with fairy lights, anime posters, plushies, and rain tapping on the window", sdxl: "lofi anime bedroom, cozy desk setup, soft warm lighting, indoor", category: "environment" },
      { id: "magical_crystal_cave", label: "Bioluminescent Crystal Cavern", danbooru: "cave, crystals, glowing, bioluminescence", flux: "an ancient underground cavern lit by giant luminous cyan and purple mana crystals", sdxl: "crystal cavern, glowing mana crystals, fantasy underground, anime cave", category: "environment" },
      { id: "cartoon_desert", label: "Stylized Western Cartoon Canyon", danbooru: "desert, canyon, stylized, clear_sky", flux: "a vibrant stylized desert canyon with warm terracotta rock formations in the style of classic animation", sdxl: "stylized cartoon canyon, red rock desert, animation background art", category: "environment" }
    ],

    lighting_vfx: [
      { id: "sakuga_effects", label: "Anime Sakuga Impact Sparks & Smoke", danbooru: "sparks, smoke, action, debris, glowing", flux: "accompanied by dynamic hand-drawn anime sakuga visual effects, impact sparks, and stylized smoke donuts", sdxl: "sakuga visual effects, dynamic anime impact, sparks, stylized dust", category: "lighting" },
      { id: "cel_gradient", label: "Soft Cel-Shaded Anime Lighting", danbooru: "clean_lineart, anime_coloring, soft_shading", flux: "illuminated with crisp traditional cel-shading combined with smooth digital airbrush gradient lighting", sdxl: "cel shaded, anime coloring, soft gradient highlights, crisp lineart", category: "lighting" },
      { id: "magic_aura", label: "Surging Shonen Power Aura", danbooru: "aura, glowing, energy, particles", flux: "enveloped in a fierce surging energy aura with glowing electric sparks crackling outward", sdxl: "energy aura, glowing power aura, shonen anime sparks, battle energy", category: "lighting" },
      { id: "golden_sunset_glow", label: "Warm Golden Sunset Rim Light", danbooru: "sunset, rim_light, warm_lighting, orange_sky", flux: "bathed in warm anime evening rim light with glowing silhouettes against a golden dusk sky", sdxl: "sunset rim light, golden hour anime glow, warm atmosphere", category: "lighting" },
      { id: "neon_luminescence", label: "Neon Cyberpunk Bloom & Glow", danbooru: "neon_lights, glowing, rim_light, cyan_and_pink", flux: "illuminated by saturated dual-tone neon lighting casting vivid cyan and magenta rim highlights", sdxl: "neon glow, cyber anime lighting, saturated colors, rim light", category: "lighting" },
      { id: "sparkles_glitter", label: "Shojo Anime Sparkles & Light Motes", danbooru: "sparkles, light_particles, glowing", flux: "surrounded by shimmering shojo light sparkles, floating heart motes, and soft pastel bokeh", sdxl: "shojo sparkles, glitter, anime light motes, magical ambiance", category: "lighting" }
    ],

    framing_angles: [
      { id: "sakuga_dutch_angle", label: "Dynamic Dutch Tilt / Action Angle", danbooru: "dutch_angle, dynamic_angle", flux: "framed in a dynamic tilted Dutch angle intensifying the kinetic motion and visual tension", sdxl: "dynamic dutch angle, action perspective, tilted frame", category: "camera" },
      { id: "extreme_foreshortening", label: "Dramatic Anime Foreshortening", danbooru: "foreshortening, from_below", flux: "featuring extreme anime perspective foreshortening with weapons or hands thrust toward the screen", sdxl: "extreme foreshortening, exaggerated anime perspective, dynamic framing", category: "camera" },
      { id: "manga_screentone", label: "Manga Screentone & Ink Hatching", danbooru: "screentone, halftone, hatching, monochrome", flux: "styled with authentic manga halftone dot screentones, crosshatch shading, and bold black ink fills", sdxl: "manga screentone, ink hatching, halftone dots, manga page aesthetic", category: "camera" },
      { id: "speed_lines", label: "High-Speed Manga Focus Lines", danbooru: "speed_lines, focus_lines", flux: "framed by intense converging manga speed lines focusing attention directly on the character", sdxl: "manga speed lines, anime focus lines, action burst", category: "camera" },
      { id: "chromatic_aberration", label: "Stylized Prismatic Chromatic Fringing", danbooru: "chromatic_aberration, bloom", flux: "with subtle digital prismatic chromatic aberration and soft glowing bloom along high-contrast lines", sdxl: "chromatic aberration, anime bloom, stylized fringe, digital art visual", category: "camera" },
      { id: "chibi_vignette", label: "Pastel Illustrated Vignette", danbooru: "vignette, pastel, simple_background", flux: "framed by a soft pastel floral vignette with clean decorative borders", sdxl: "pastel decorative vignette, clean frame, illustration border", category: "camera" }
    ],

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

  // ==========================================
  // 2. MODEL PROFILES (Zero Realism)
  // ==========================================
  const MODEL_PROFILES = {
    flux: {
      id: "flux",
      name: "Flux.1 (Anime & Digital Art Story)",
      engine: "T5-XXL + CLIP-L",
      recommendedFormat: "natural_prose",
      description: "T5-XXL natural language encoder tuned for Anime, Cartoon & Digital Art. Crafts vivid descriptive sentences for 2D animation, cel shading, and digital illustration. Avoids buzzwords and photographic realism.",
      maxTokens: 256,
      supportsNegative: false,
      defaultNegative: "",
      qualityPrefix: "",
      features: { useProse: true, banRealism: true },
      stripWords: [
        "masterpiece", "best quality", "ultra quality", "high quality", "8k", "4k", 
        "trending on artstation", "award winning", "hyperrealistic", "photorealistic", "realistic",
        "raw photo", "photograph", "35mm film", "dslr", "real life", "skin pores",
        "score_9", "score_8_up", "score_7_up", "score_6_up", "score_5_up", "score_4_up",
        "source_pony"
      ]
    },
    pony: {
      id: "pony",
      name: "Pony Diffusion / PonyXL (Anime & Cartoon)",
      engine: "SDXL Danbooru CLIP",
      recommendedFormat: "danbooru_hierarchy",
      description: "The gold standard for Anime, Cartoon, and Fanart. Strictly requires score tags, source tags (source_anime or source_cartoon), and underscore Danbooru tags. Realism is actively banished to the negative prompt.",
      maxTokens: 225,
      supportsNegative: true,
      qualityPrefix: "score_9, score_8_up, score_7_up",
      defaultRating: "rating:general, source_anime",
      defaultNegative: "score_6, score_5, score_4, score_3, score_2, score_1, source_pony, source_furry, realistic, photo, photorealistic, 3d, realistic skin, photograph, ugly, deformed, lowres, bad anatomy, text, watermark",
      hierarchyOrder: [
        "score_tags", "source_rating", "character_series", "subject_count",
        "physical_traits", "clothing", "expression_pose", "environment",
        "lighting_camera", "style_medium"
      ]
    },
    sdxl: {
      id: "sdxl",
      name: "SDXL Anime / Illustrious / Animagine",
      engine: "Dual CLIP (ViT-G + CLIP-L)",
      recommendedFormat: "weighted_tags",
      description: "Tuned for popular anime checkpoints (Animagine XL, Illustrious XL, AutismMix). Uses weighted tags and negative prompt anti-realism filters.",
      maxTokens: 150,
      supportsNegative: true,
      qualityPrefix: "masterpiece, anime aesthetic, clean lineart",
      defaultNegative: "photorealistic, photo, 3d, realistic skin, photograph, realistic eyes, ugly, deformed, bad anatomy, bad hands, missing fingers, extra limbs, low quality, blurry, artifacts, watermark"
    },
    sd15: {
      id: "sd15",
      name: "SD 1.5 Anime (Anything / Counterfeit / OrangeMix)",
      engine: "CLIP-ViT-L/14 (77 Tokens)",
      recommendedFormat: "compact_tags",
      description: "Optimized for classic anime checkpoints (Anything v5, Counterfeit, AbyssOrangeMix). Concise 77-token tag ordering with zero realism.",
      maxTokens: 75,
      supportsNegative: true,
      qualityPrefix: "masterpiece, best quality, anime style",
      defaultNegative: "photorealistic, photo, 3d, realistic, worst quality, low quality, lowres, bad anatomy, bad hands, artifacts, watermark"
    },
    midjourney: {
      id: "midjourney",
      name: "Midjourney (Niji 6 Anime Mode)",
      engine: "Midjourney Niji 6 (Anime Model)",
      recommendedFormat: "mj_parameters",
      description: "Targets Midjourney's dedicated anime and illustration model (--niji 6). Delivers spectacular anime visuals, manga composition, and stylized digital art.",
      maxTokens: 120,
      supportsNegative: false,
      defaultNegative: "",
      defaultParams: "--ar 16:9 --niji 6 --style expressive",
      stripWords: ["photorealistic", "hyperrealistic", "realistic", "photo", "dslr", "4k", "8k", "masterpiece"]
    },
    perchance: {
      id: "perchance",
      name: "Perchance Anime / Digital Art (Flux)",
      engine: "Perchance Anime / Flux Hybrid",
      recommendedFormat: "perchance_clean",
      description: "Tuned for Perchance's modern image generator when producing anime, cartoon, and fantasy digital art.",
      maxTokens: 200,
      supportsNegative: true,
      defaultNegative: "realistic, photo, 3d, photorealistic, realistic skin, deformed, extra fingers, blurry, text, watermark"
    }
  };

  // ==========================================
  // 3. REPLACEMENTS & SWAPS (Anti-Realism)
  // ==========================================
  const WORD_SWAPS = [
    {
      pattern: /\b(realistic|photorealistic|hyperrealistic|ultra realistic|real life|realism|photo|raw photo)\b/gi,
      flux: "crisp clean anime vector linework with rich digital cel-shading and painterly background art",
      pony: "clean_lineart, detailed_background, anime_coloring",
      sdxl: "anime key visual, clean lineart, vibrant anime coloring, high detail digital illustration",
      midjourney: "clean anime illustration, vibrant colors, detailed lineart"
    },
    {
      pattern: /\b(camera|lens|35mm|85mm|dslr|film grain|kodak)\b/gi,
      flux: "high-budget theatrical anime animation screenshot with vibrant painted colors",
      pony: "anime_screencap, clean_lineart",
      sdxl: "studio anime visual, anime aesthetic, key visual",
      midjourney: "anime screencap, studio animation visual"
    },
    {
      pattern: /\b(nice|good|cool|awesome|great)\s+lighting\b/gi,
      flux: "dramatic anime sunset rim lighting with soft glowing bloom and volumetric sunbeams",
      pony: "dramatic_lighting, rim_light, bloom",
      sdxl: "anime dramatic lighting, soft rim light, glowing highlights, volumetric anime light",
      midjourney: "dramatic anime rim lighting with warm ambient glow"
    },
    {
      pattern: /\b(nice|pretty|beautiful|good)\s+background\b/gi,
      flux: "an exquisitely painted Makoto Shinkai style animated landscape with soaring clouds and atmospheric depth",
      pony: "detailed_background, scenic, sky, clouds",
      sdxl: "gorgeous anime background, scenic sky, detailed painted environment",
      midjourney: "breathtaking painted anime landscape background"
    },
    {
      pattern: /\b(masterpiece|best quality|top quality|4k|8k|ultra hd)\b/gi,
      flux: "", // Strip for Flux
      pony: "score_9, score_8_up, score_7_up",
      sdxl: "masterpiece, clean lineart, key visual",
      midjourney: ""
    },
    {
      pattern: /\b(looking at (?:camera|me|viewer)|eye contact)\b/gi,
      flux: "making direct, captivating eye contact with the viewer",
      pony: "looking_at_viewer",
      sdxl: "looking at viewer, direct eye contact, anime eyes",
      midjourney: "direct eye contact with viewer"
    },
    {
      pattern: /\b(pretty|beautiful|cute|gorgeous)\s+face\b/gi,
      flux: "an adorable expressive anime face with huge luminous sparkling eyes and delicate blush",
      pony: "detailed_eyes, sparkling_eyes, blush, slight_smile",
      sdxl: "beautiful anime face, sparkling detailed eyes, soft blush, anime coloring",
      midjourney: "expressive anime facial features with luminous sparkling eyes"
    },
    {
      pattern: /\b(cat ears|kitty ears|neko ears)\b/gi,
      flux: "plush anime feline cat ears twitching atop soft hair",
      pony: "cat_ears, animal_ears",
      sdxl: "cat ears, nekomimi, anime animal ears",
      midjourney: "cute plush cat ears"
    },
    {
      pattern: /\b(school uniform|student clothes)\b/gi,
      flux: "a traditional pleated Japanese sailor school uniform with crisp folded neckerchief",
      pony: "school_uniform, serafuku, pleated_skirt",
      sdxl: "japanese school uniform, serafuku, pleated skirt, anime school attire",
      midjourney: "classic pleated anime school uniform"
    },
    {
      pattern: /\b(maid outfit|maid dress|maid costume)\b/gi,
      flux: "a lavishly frilled anime maid costume with lace headdress and bow ribbons",
      pony: "maid, maid_apron, maid_headdress, frills",
      sdxl: "anime maid dress, ruffled apron, lace headband, cute frills",
      midjourney: "cute frilled anime maid costume"
    },
    {
      pattern: /\b(hoodie|sweatshirt)\b/gi,
      flux: "a cozy oversized pastel anime hoodie with extra long sleeves",
      pony: "hoodie, oversized_clothes, long_sleeves",
      sdxl: "oversized hoodie, anime streetwear, long sleeves",
      midjourney: "casual oversized anime hoodie"
    },
    {
      pattern: /\b(in the rain|rainy|raining|under the rain)\b/gi,
      flux: "caught in a quiet anime rain shower with translucent stylized raindrops splashing on surfaces",
      pony: "rain, wet, outdoors, puddles",
      sdxl: "anime rain scene, falling raindrops, wet reflections, moody anime atmosphere",
      midjourney: "moody anime rain scene with glistening reflections"
    },
    {
      pattern: /\b(magic|spell|casting spell|sorcery)\b/gi,
      flux: "channeling a glowing magical glyph spell circle with crackling electric arcane runes and floating motes",
      pony: "magic, magic_circle, glowing, casting_spell, particles",
      sdxl: "glowing magic circle, anime spellcasting, arcane runes, floating particles",
      midjourney: "glowing magical circle, arcane spellcasting energy"
    },
    {
      pattern: /\b(fighting|battle|action scene)\b/gi,
      flux: "an explosive anime sakuga battle sequence with kinetic impact lines, flying debris, and dynamic foreshortening",
      pony: "fighting_stance, dynamic_angle, sakuga, sparks, action",
      sdxl: "sakuga action battle, dynamic anime pose, impact sparks, extreme foreshortening",
      midjourney: "high-octane anime action battle with dynamic energy"
    },
    {
      pattern: /\b(cyberpunk|neon city|futuristic city)\b/gi,
      flux: "in a sprawling Neo-Tokyo cyberpunk anime city with holographic neon advertisements glowing in the misty night",
      pony: "cyberpunk, science_fiction, city, night, neon_lights",
      sdxl: "neo-tokyo anime city, cyberpunk skyline, neon glow, anime sci-fi",
      midjourney: "neo-tokyo anime cyberpunk city at night with neon lights"
    }
  ];

  const BOORU_TO_PROSE = {
    "1girl": "an anime girl",
    "1boy": "an anime boy",
    "solo": "standing alone",
    "looking_at_viewer": "looking directly into the screen with an engaging gaze",
    "looking_away": "gazing pensively into the distance",
    "blue_eyes": "piercing luminous blue anime eyes",
    "green_eyes": "emerald green sparkling eyes",
    "red_eyes": "striking ruby red glowing eyes",
    "black_hair": "sleek jet-black anime hair",
    "blonde_hair": "golden blonde flowing hair",
    "silver_hair": "silvery-white moonlit hair",
    "blue_hair": "vibrant azure-blue hair",
    "pink_hair": "soft pastel bubblegum-pink hair",
    "twintails": "hair bound in dynamic bouncy twintails",
    "ahoge": "with an expressive single cowlick ahoge hair antenna",
    "smile": "wearing a cheerful sunny anime smile",
    "blush": "with cute rosy anime blush marks on the cheeks",
    "school_uniform": "wearing a crisp Japanese school uniform",
    "serafuku": "dressed in a classic sailor serafuku uniform",
    "skirt": "a pleated anime skirt",
    "hoodie": "a relaxed oversized hoodie",
    "cat_ears": "plush feline cat ears peeking through the hair",
    "outdoors": "in an open outdoor animated setting",
    "indoors": "within a cozy stylized interior",
    "night": "under a luminous anime night sky",
    "sunset": "bathed in the warm glow of a Makoto Shinkai sunset",
    "rain": "in a gentle anime rain with stylized droplets",
    "magic_circle": "summoning a glowing revolving magical circle",
    "retro_artstyle": "captured in a vintage 1980s cel-shaded anime aesthetic",
    "chibi": "rendered in super-deformed cute chibi proportions",
    "screentone": "shaded with authentic manga screentone dot patterns"
  };

  const INTENT_PRESETS = [
    {
      id: "anime_shinkai",
      name: "Modern Anime Film (Shinkai / KyoAni)",
      description: "Theatrical feature film anime visual with luminous skies, painterly clouds, and crisp lineart.",
      fluxAdditions: "a high-budget Japanese anime feature film screenshot, Makoto Shinkai aesthetic, luminous painted cumulus clouds, crisp vector line work, vibrant atmospheric lighting, emotional key visual",
      ponyAdditions: "source_anime, anime_coloring, clean_lineart, masterpiece, detailed_background, scenic, sky, clouds",
      sdxlAdditions: "anime key visual, makoto shinkai style, vibrant sky, detailed anime aesthetic, clean lineart, studio anime",
      mjAdditions: "--ar 16:9 --niji 6 --style expressive"
    },
    {
      id: "retro_80s_anime",
      name: "Retro 80s / 90s Cel Anime (OVA / VHS)",
      description: "Nostalgic hand-painted cel animation with authentic ink lines and soft CRT retro aesthetic.",
      fluxAdditions: "vintage 1980s anime screencap, authentic hand-painted cel animation, bold ink lines, retro OVA aesthetic, soft analog CRT television glow",
      ponyAdditions: "retro_artstyle, 1980s_(style), cel_shading, vintage_anime, anime_screencap",
      sdxlAdditions: "retro 80s anime, vintage cel shaded aesthetic, 1990s anime style, nostalgic animation still",
      mjAdditions: "--ar 4:3 --niji 6 --style original"
    },
    {
      id: "splash_art_game",
      name: "Digital Splash Art (Genshin / Riot Games)",
      description: "Epic character illustration with dynamic lighting, rich particle effects, and game key-visual polish.",
      fluxAdditions: "an epic high-end digital illustration character splash art with dynamic lighting, expressive brushwork, volumetric particle effects, and premium game splash art composition",
      ponyAdditions: "splash_art, digital_media, concept_art, dynamic_lighting, glowing, particles, masterpiece",
      sdxlAdditions: "game splash art, digital illustration, vibrant lighting, hoyoverse style, masterpiece digital art, dynamic pose",
      mjAdditions: "--ar 16:9 --niji 6 --stylize 250"
    },
    {
      id: "western_cartoon_90s",
      name: "Western Cartoon (90s Cartoon Network)",
      description: "Vibrant Saturday morning animation with bold black outlines, flat cel colors, and expressive energy.",
      fluxAdditions: "a lively classic Saturday morning western cartoon aesthetic with bold black outlines, dynamic proportions, and vibrant flat cel colors in the style of 90s Cartoon Network",
      ponyAdditions: "source_cartoon, western_cartoon, stylized, flat_color, bold_outline",
      sdxlAdditions: "western cartoon style, bold black outlines, flat animation coloring, 90s cartoon network visual",
      mjAdditions: "--ar 16:9 --niji 6 --style cute"
    },
    {
      id: "manga_ink_screentone",
      name: "Manga Page & Screentone (Shonen Jump)",
      description: "Monochrome comic aesthetic with crosshatch shading, halftone screentones, and dynamic speed lines.",
      fluxAdditions: "a dramatic Japanese manga page illustration with bold black ink lines, authentic halftone screentone dot shading, crosshatch shading, and intense shonen speed lines",
      ponyAdditions: "monochrome, greyscale, manga, screentone, ink_lines, hatching, highres",
      sdxlAdditions: "manga aesthetic, screentone dots, monochrome ink, shonen jump visual, clean lineart",
      mjAdditions: "--ar 2:3 --niji 6 --style raw"
    },
    {
      id: "arcane_indie_animation",
      name: "Stylized Painterly Animation (Arcane / Spider-Verse)",
      description: "Rich painterly brush textures blended with graphic ink lines and chromatic aberration.",
      fluxAdditions: "a stunning stylized 2.5D animation still blending textured digital brushwork, graphic comic ink outlines, and subtle chromatic aberration reminiscent of Arcane and Spider-Verse",
      ponyAdditions: "painterly, stylized, graphic_illustration, textures, dynamic_lighting",
      sdxlAdditions: "painterly animation style, graphic illustration, textured digital painting, bold stylization, spider-verse aesthetic",
      mjAdditions: "--ar 16:9 --niji 6 --style expressive"
    },
    {
      id: "chibi_kawaii_pastel",
      name: "Chibi & Kawaii Moe (Pastel Sticker)",
      description: "Super-deformed adorable mascot style with bubbly clean linework and sweet pastel tones.",
      fluxAdditions: "an irresistible kawaii chibi anime illustration with cute super-deformed proportions, sweet pastel colors, bubbly round outlines, and floating heart sparkles",
      ponyAdditions: "chibi, super_deformed, cute, kawaii, pastel, sparkle, simple_background",
      sdxlAdditions: "chibi moe style, kawaii illustration, pastel colors, cute sticker art, super deformed",
      mjAdditions: "--ar 1:1 --niji 6 --style cute"
    },
    {
      id: "cyberpunk_anime_edgerunners",
      name: "Cyberpunk Anime (Edgerunners / Akira)",
      description: "High-octane neon dystopia with saturated cyan/magenta lighting and intense anime energy.",
      fluxAdditions: "a high-octane cyberpunk anime visual with saturated neon lighting in electric cyan and hot magenta, Studio Trigger aesthetic, glowing energy lines, and rain-slicked Neo-Tokyo streets",
      ponyAdditions: "cyberpunk, science_fiction, neon_lights, night, city, rain, wet, anime_screencap",
      sdxlAdditions: "cyberpunk anime, studio trigger aesthetic, saturated neon glow, edgerunners style, clean lineart",
      mjAdditions: "--ar 16:9 --niji 6 --stylize 200"
    }
  ];

  // ==========================================
  // 4. PARSER
  // ==========================================
  class PromptParser {
    static parse(rawText) {
      if (!rawText || !rawText.trim()) {
        return { tokens: [], parameters: {}, isProse: false, raw: "" };
      }

      let text = rawText.trim();
      const parameters = {};
      const paramRegex = /--([a-zA-Z0-9_-]+)(?:\s+([^\s-]+))?/g;
      let match;
      while ((match = paramRegex.exec(text)) !== null) {
        parameters[match[1]] = match[2] || true;
      }
      text = text.replace(paramRegex, "").trim();

      const commaCount = (text.match(/,/g) || []).length;
      const periodCount = (text.match(/\./g) || []).length;
      const wordCount = text.split(/\s+/).length;
      const isProse = commaCount < 3 && periodCount >= 1 && wordCount > 8;

      let rawUnits = [];
      if (isProse) {
        rawUnits = text.split(/(?<=[.!?])\s+/).map(u => u.trim()).filter(u => u.length > 0);
      } else {
        rawUnits = text.split(",").map(u => u.trim()).filter(u => u.length > 0);
      }

      const tokens = rawUnits.map((unit, index) => this._classifyToken(unit, index));

      return { tokens, parameters, isProse, raw: rawText };
    }

    static _classifyToken(rawUnit, index) {
      let cleanUnit = rawUnit.trim();
      let weight = 1.0;

      const weightMatch = cleanUnit.match(/^\((.*?):([0-9.]+)\)$/);
      if (weightMatch) {
        cleanUnit = weightMatch[1].trim();
        weight = parseFloat(weightMatch[2]);
      } else if (cleanUnit.startsWith("((") && cleanUnit.endsWith("))")) {
        cleanUnit = cleanUnit.slice(2, -2).trim();
        weight = 1.21;
      } else if (cleanUnit.startsWith("(") && cleanUnit.endsWith(")")) {
        cleanUnit = cleanUnit.slice(1, -1).trim();
        weight = 1.1;
      } else if (cleanUnit.startsWith("[") && cleanUnit.endsWith("]")) {
        cleanUnit = cleanUnit.slice(1, -1).trim();
        weight = 0.9;
      }

      const normalized = cleanUnit.toLowerCase().replace(/\s+/g, " ");
      const booruNormalized = normalized.replace(/\s+/g, "_");

      let category = "general";
      let matchedLexicon = null;

      if (/^score_\d+(_up)?$/i.test(booruNormalized) || /^rating(:|_)/i.test(booruNormalized) || /source_/i.test(booruNormalized)) {
        category = "score_tags";
      } else if (/^(1girl|1boy|2girls|2boys|multiple_girls|multiple_boys|solo|couple|group)$/i.test(booruNormalized)) {
        category = "subject_count";
      } else {
        for (const [catKey, items] of Object.entries(LEXICON)) {
          for (const item of items) {
            const itemTags = (item.danbooru || "").toLowerCase().split(/,\s*/);
            if (
              normalized.includes(item.id.replace(/_/g, " ")) ||
              itemTags.some(t => booruNormalized === t || normalized === t.replace(/_/g, " ")) ||
              normalized.includes(item.label.toLowerCase())
            ) {
              category = this._mapLexiconCategory(catKey);
              matchedLexicon = item;
              break;
            }
          }
          if (matchedLexicon) break;
        }
      }

      if (category === "general") {
        category = this._heuristicCategory(booruNormalized);
      }

      return {
        index,
        raw: rawUnit,
        clean: cleanUnit,
        normalized,
        booruFormat: booruNormalized,
        weight,
        category,
        matchedLexicon
      };
    }

    static _mapLexiconCategory(lexKey) {
      switch (lexKey) {
        case "subjects": return "subject_count";
        case "physical_traits": return "physical_traits";
        case "clothing": return "clothing";
        case "expressions_poses": return "expression_pose";
        case "environments": return "environment";
        case "lighting_vfx": return "lighting_camera";
        case "framing_angles": return "lighting_camera";
        case "styles_mediums": return "style_medium";
        default: return "general";
      }
    }

    static _heuristicCategory(tag) {
      if (/(eyes|hair|skin|face|body|freckles|ears|wings|tail|horns|ahoge|fang|blush)/i.test(tag)) return "physical_traits";
      if (/(shirt|dress|skirt|pants|jacket|hoodie|uniform|hat|gloves|shoes|boots|costume|suit|armor|ribbon|collar|serafuku|maid)/i.test(tag)) return "clothing";
      if (/(looking_|smile|smirk|standing|sitting|lying|holding|arms|hands|expression|pose|view|gaze|pout|peace_sign|casting)/i.test(tag)) return "expression_pose";
      if (/(outdoors|indoors|city|room|street|forest|sky|night|day|sunset|rain|snow|building|space|water|beach|ruins|clouds)/i.test(tag)) return "environment";
      if (/(lighting|shadow|glow|neon|sparkles|aura|dutch_angle|screentone|speed_lines|sakuga|magic_circle|bloom)/i.test(tag)) return "lighting_camera";
      if (/(artstyle|medium|render|illustration|anime|cartoon|manga|chibi|splash_art|pixel_art|flat_color|cel_shading)/i.test(tag)) return "style_medium";
      return "general";
    }
  }

  // ==========================================
  // 5. OPTIMIZER (100% Zero-Realism)
  // ==========================================
  class PromptOptimizer {
    static optimize(rawPrompt, targetModelId = "flux", options = {}) {
      const profile = MODEL_PROFILES[targetModelId] || MODEL_PROFILES.flux;
      const parsed = PromptParser.parse(rawPrompt);
      const swapsApplied = [];

      let positiveResult = "";
      let negativeResult = profile.defaultNegative || "";

      const customSwaps = options.customSwaps || [];

      // 1. Process tokens & apply word swaps
      let processedTokens = parsed.tokens.map(token => {
        let currentVal = token.clean;
        let wasSwapped = false;

        // User custom swaps first
        for (const cs of customSwaps) {
          if (cs.word && currentVal.toLowerCase() === cs.word.toLowerCase()) {
            swapsApplied.push({
              original: currentVal,
              replacedWith: cs.replacement,
              reason: "User Custom Replacement"
            });
            currentVal = cs.replacement;
            wasSwapped = true;
            break;
          }
        }

        // Built-in WORD_SWAPS (including Anti-Realism Swaps)
        if (!wasSwapped) {
          for (const swap of WORD_SWAPS) {
            if (swap.pattern.test(currentVal)) {
              const replacement = swap[targetModelId] !== undefined ? swap[targetModelId] : (swap.sdxl || "");
              if (replacement !== currentVal) {
                swapsApplied.push({
                  original: currentVal,
                  replacedWith: replacement || "[stripped for model]",
                  reason: `Optimized for ${profile.name} (Stylized 2D)`
                });
                currentVal = replacement;
                wasSwapped = true;
                break;
              }
            }
          }
        }

        return { ...token, value: currentVal, wasSwapped };
      }).filter(t => t.value && t.value.trim().length > 0);

      // 2. Strip Buzzwords that harm the model or introduce realism
      if (profile.stripWords && profile.stripWords.length > 0) {
        processedTokens = processedTokens.filter(t => {
          const valLower = t.value.toLowerCase().replace(/_/g, " ").trim();
          const shouldStrip = profile.stripWords.some(sw => valLower === sw.toLowerCase());
          if (shouldStrip) {
            swapsApplied.push({
              original: t.value,
              replacedWith: "[removed]",
              reason: `Removed for ${profile.name} (Non-realistic)`
            });
            return false;
          }
          return true;
        });
      }

      // 3. Format according to model target
      switch (targetModelId) {
        case "flux":
        case "perchance":
          positiveResult = this._formatFluxProse(processedTokens, parsed.isProse, parsed.raw, options);
          break;
        case "pony":
          positiveResult = this._formatPonyHierarchy(processedTokens, options);
          break;
        case "sdxl":
        case "sd15":
          positiveResult = this._formatSdxlWeighted(processedTokens, targetModelId, options);
          break;
        case "midjourney":
          positiveResult = this._formatMidjourney(processedTokens, options);
          break;
        default:
          positiveResult = processedTokens.map(t => t.value).join(", ");
      }

      // 4. Apply intent preset
      if (options.intentPresetId) {
        const preset = INTENT_PRESETS.find(p => p.id === options.intentPresetId);
        if (preset) {
          positiveResult = this._applyPreset(positiveResult, preset, targetModelId);
        }
      }

      const tokenEstimate = this._estimateTokens(positiveResult);

      return {
        modelId: targetModelId,
        modelName: profile.name,
        prompt: positiveResult.trim(),
        negativePrompt: negativeResult.trim(),
        tokenEstimate,
        maxTokens: profile.maxTokens,
        swapsApplied,
        isProse: profile.features ? profile.features.useProse : false
      };
    }

    static _formatFluxProse(tokens, wasOriginalProse, rawText, options) {
      if (wasOriginalProse && tokens.length <= 4) {
        let prose = rawText;
        MODEL_PROFILES.flux.stripWords.forEach(w => {
          const re = new RegExp(`\\b${w}\\b,?\\s*`, "gi");
          prose = prose.replace(re, "");
        });
        prose = prose.replace(/_([a-z0-9])/gi, " $1");
        return prose.replace(/\s+/g, " ").trim();
      }

      const groups = {
        subject_count: [], physical_traits: [], clothing: [],
        expression_pose: [], environment: [], lighting_camera: [],
        style_medium: [], general: []
      };

      tokens.forEach(t => {
        let tagVal = t.value.toLowerCase().replace(/\s+/g, "_");
        let readable = BOORU_TO_PROSE[tagVal] || t.value.replace(/_/g, " ");
        const cat = groups[t.category] ? t.category : "general";
        groups[cat].push(readable);
      });

      const sentences = [];
      let subjPart = groups.subject_count.join(" and ") || "A stylized anime character";
      let physPart = groups.physical_traits.length > 0 ? `with ${groups.physical_traits.join(", ")}` : "";
      let posePart = groups.expression_pose.length > 0 ? `, ${groups.expression_pose.join(", ")}` : "";
      sentences.push(`${subjPart} ${physPart}${posePart}.`.replace(/\s+/g, " "));

      if (groups.clothing.length > 0) sentences.push(`Wearing ${groups.clothing.join(", ")}.`);
      if (groups.environment.length > 0) sentences.push(`Set against ${groups.environment.join(", ")}.`);
      if (groups.lighting_camera.length > 0) sentences.push(`Illuminated by ${groups.lighting_camera.join(", ")}.`);
      if (groups.style_medium.length > 0) {
        sentences.push(`Rendered in ${groups.style_medium.join(", ")}.`);
      } else {
        sentences.push(`Rendered in a vibrant 2D anime animation aesthetic with clean vector lineart and cel shading.`);
      }
      if (groups.general.length > 0) sentences.push(`Featuring ${groups.general.join(", ")}.`);

      return sentences.join(" ").replace(/\s\./g, ".").replace(/\s+/g, " ").trim();
    }

    static _formatPonyHierarchy(tokens, options) {
      const profile = MODEL_PROFILES.pony;
      const hierarchy = profile.hierarchyOrder;
      const buckets = {};
      hierarchy.forEach(h => buckets[h] = []);

      if (options.qualityScore !== false) {
        buckets["score_tags"].push("score_9", "score_8_up", "score_7_up");
      }
      if (options.includeRating !== false) {
        buckets["source_rating"].push("rating:general", "source_anime");
      }

      tokens.forEach(t => {
        let tag = t.value.toLowerCase().trim().replace(/\s+/g, "_");
        if (t.category === "score_tags") {
          if (!buckets["score_tags"].includes(tag)) buckets["score_tags"].push(tag);
        } else if (buckets[t.category]) {
          buckets[t.category].push(tag);
        } else {
          buckets["expression_pose"].push(tag);
        }
      });

      const orderedTags = [];
      hierarchy.forEach(h => {
        if (buckets[h] && buckets[h].length > 0) {
          const unique = [...new Set(buckets[h])];
          orderedTags.push(...unique);
        }
      });

      return orderedTags.join(", ");
    }

    static _formatSdxlWeighted(tokens, modelId, options) {
      const profile = MODEL_PROFILES[modelId];
      const chunks = [];

      if (options.addQuality !== false && profile.qualityPrefix) {
        chunks.push(profile.qualityPrefix);
      }

      const priorityOrder = ["subject_count", "physical_traits", "clothing", "expression_pose", "environment", "lighting_camera", "style_medium", "general"];

      priorityOrder.forEach(category => {
        const match = tokens.filter(t => t.category === category);
        if (match.length > 0) {
          const str = match.map(t => {
            let cleanVal = t.value.replace(/_/g, " ");
            if (t.weight && t.weight !== 1.0) {
              return `(${cleanVal}:${t.weight})`;
            }
            return cleanVal;
          }).join(", ");
          chunks.push(str);
        }
      });

      return chunks.join(", ");
    }

    static _formatMidjourney(tokens, options) {
      const cleanTokens = tokens.map(t => t.value.replace(/_/g, " ")).join(", ");
      const params = options.mjParams || MODEL_PROFILES.midjourney.defaultParams;
      return `${cleanTokens} ${params}`.trim();
    }

    static _applyPreset(prompt, preset, targetModelId) {
      switch (targetModelId) {
        case "flux":
        case "perchance":
          return `${prompt}. Styled with ${preset.fluxAdditions}.`.replace(/\.\./g, ".");
        case "pony":
          return `${prompt}, ${preset.ponyAdditions}`;
        case "sdxl":
        case "sd15":
          return `${prompt}, ${preset.sdxlAdditions}`;
        case "midjourney":
          return `${prompt} ${preset.mjAdditions}`;
        default:
          return `${prompt}, ${preset.sdxlAdditions}`;
      }
    }

    static _estimateTokens(text) {
      if (!text) return 0;
      const wordsAndPunct = text.trim().split(/[\s,._\-:()\[\]]+/);
      return Math.round(wordsAndPunct.length * 1.25);
    }
  }

  // ==========================================
  // 6. UI CONTROLLER
  // ==========================================
  class UIController {
    constructor() {
      this.currentModel = "flux";
      this.currentIntent = "";
      this.customSwaps = this.loadCustomSwaps();

      this.cacheElements();
      this.bindEvents();
      this.renderLexiconCategories();
      this.renderIntentPresets();
      this.renderCustomSwapsList();
      this.triggerOptimization();
    }

    cacheElements() {
      this.promptInput = document.getElementById("promptInput");
      this.optimizedOutput = document.getElementById("optimizedOutput");
      this.negativeOutput = document.getElementById("negativeOutput");
      this.negativeContainer = document.getElementById("negativeContainer");
      this.tokenFill = document.getElementById("tokenFill");
      this.tokenCountText = document.getElementById("tokenCountText");
      this.modelSelectPills = document.querySelectorAll(".model-pill");
      this.intentSelect = document.getElementById("intentSelect");
      this.modelDescription = document.getElementById("modelDescription");
      this.modelEngineBadge = document.getElementById("modelEngineBadge");
      this.swapsList = document.getElementById("swapsList");
      this.swapsCard = document.getElementById("swapsCard");
      this.lexiconContainer = document.getElementById("lexiconContainer");
      this.lexiconSearch = document.getElementById("lexiconSearch");
      this.compareGrid = document.getElementById("compareGrid");
      this.compareSection = document.getElementById("compareSection");
      this.toggleCompareBtn = document.getElementById("toggleCompareBtn");
    }

    bindEvents() {
      this.promptInput.addEventListener("input", () => this.triggerOptimization());

      this.modelSelectPills.forEach(pill => {
        pill.addEventListener("click", () => {
          this.modelSelectPills.forEach(p => p.classList.remove("active"));
          pill.classList.add("active");
          this.currentModel = pill.dataset.model;
          this.updateModelInfo();
          this.triggerOptimization();
        });
      });

      this.intentSelect.addEventListener("change", (e) => {
        this.currentIntent = e.target.value;
        this.triggerOptimization();
      });

      document.getElementById("copyPromptBtn").addEventListener("click", () => {
        this.copyToClipboard(this.optimizedOutput.value, "copyPromptBtn");
      });

      document.getElementById("copyNegBtn").addEventListener("click", () => {
        this.copyToClipboard(this.negativeOutput.value, "copyNegBtn");
      });

      document.getElementById("clearPromptBtn").addEventListener("click", () => {
        this.promptInput.value = "";
        this.triggerOptimization();
      });

      document.querySelectorAll(".sample-chip").forEach(chip => {
        chip.addEventListener("click", () => {
          this.promptInput.value = chip.dataset.sample;
          this.triggerOptimization();
        });
      });

      this.lexiconSearch.addEventListener("input", (e) => {
        this.filterLexicon(e.target.value.toLowerCase());
      });

      this.toggleCompareBtn.addEventListener("click", () => {
        this.toggleComparison();
      });

      const addSwapBtn = document.getElementById("addSwapBtn");
      if (addSwapBtn) {
        addSwapBtn.addEventListener("click", () => this.handleAddNewSwap());
      }
    }

    updateModelInfo() {
      const profile = MODEL_PROFILES[this.currentModel];
      if (this.modelDescription) {
        this.modelDescription.textContent = profile.description;
      }
      if (this.modelEngineBadge) {
        this.modelEngineBadge.textContent = profile.engine;
      }
      if (profile.supportsNegative) {
        this.negativeContainer.style.display = "block";
      } else {
        this.negativeContainer.style.display = "none";
      }
    }

    triggerOptimization() {
      const rawText = this.promptInput.value;
      const result = PromptOptimizer.optimize(rawText, this.currentModel, {
        intentPresetId: this.currentIntent,
        customSwaps: this.customSwaps
      });

      this.optimizedOutput.value = result.prompt;
      this.negativeOutput.value = result.negativePrompt;

      const percent = Math.min(100, Math.round((result.tokenEstimate / result.maxTokens) * 100));
      this.tokenCountText.textContent = `${result.tokenEstimate} / ${result.maxTokens} tokens`;
      this.tokenFill.style.width = `${percent}%`;

      if (percent > 90) {
        this.tokenFill.style.backgroundColor = "var(--accent-danger)";
      } else if (percent > 70) {
        this.tokenFill.style.backgroundColor = "var(--accent-warning)";
      } else {
        this.tokenFill.style.backgroundColor = "var(--accent-primary)";
      }

      this.renderSwapsList(result.swapsApplied);

      if (this.compareSection.style.display === "block") {
        this.renderComparison();
      }
    }

    renderSwapsList(swaps) {
      if (!swaps || swaps.length === 0) {
        this.swapsCard.style.display = "none";
        return;
      }

      this.swapsCard.style.display = "block";
      this.swapsList.innerHTML = swaps.map(swap => `
        <div class="swap-item">
          <span class="swap-original">${this.escapeHtml(swap.original)}</span>
          <span class="swap-arrow">➔</span>
          <span class="swap-replaced">${this.escapeHtml(swap.replacedWith)}</span>
          <span class="swap-reason">${this.escapeHtml(swap.reason)}</span>
        </div>
      `).join("");
    }

    renderLexiconCategories() {
      this.lexiconContainer.innerHTML = "";

      const categoryTitles = {
        subjects: "Anime & Cartoon Archetypes",
        physical_traits: "Hair, Eyes & Stylized Traits",
        clothing: "Costumes & Anime Attire",
        expressions_poses: "Expressions & Sakuga Poses",
        environments: "Backgrounds & Shinkai Skies",
        lighting_vfx: "Lighting, Auras & Anime VFX",
        framing_angles: "Angles, Manga Screentone & Framing",
        styles_mediums: "Anime, Cartoon & Digital Art Styles"
      };

      Object.entries(LEXICON).forEach(([catKey, items]) => {
        const catWrapper = document.createElement("div");
        catWrapper.className = "lexicon-category-group";
        catWrapper.dataset.cat = catKey;

        const title = document.createElement("h4");
        title.className = "lexicon-category-title";
        title.textContent = categoryTitles[catKey] || catKey;
        catWrapper.appendChild(title);

        const chipContainer = document.createElement("div");
        chipContainer.className = "lexicon-chips-wrapper";

        items.forEach(item => {
          const chip = document.createElement("button");
          chip.type = "button";
          chip.className = "lexicon-chip";
          chip.textContent = item.label;
          chip.title = `Flux: ${item.flux}\nPony: ${item.danbooru}\nSDXL: ${item.sdxl}`;
          chip.addEventListener("click", () => {
            this.insertIntoPrompt(item);
          });
          chipContainer.appendChild(chip);
        });

        catWrapper.appendChild(chipContainer);
        this.lexiconContainer.appendChild(catWrapper);
      });
    }

    insertIntoPrompt(lexiconItem) {
      let insertion = "";
      if (this.currentModel === "pony") {
        insertion = lexiconItem.danbooru;
      } else if (this.currentModel === "flux" || this.currentModel === "perchance") {
        insertion = lexiconItem.flux;
      } else {
        insertion = lexiconItem.sdxl;
      }

      const currentVal = this.promptInput.value.trim();
      if (currentVal.length === 0) {
        this.promptInput.value = insertion;
      } else {
        this.promptInput.value = currentVal.endsWith(",") ? `${currentVal} ${insertion}` : `${currentVal}, ${insertion}`;
      }

      this.triggerOptimization();
      this.promptInput.focus();
    }

    filterLexicon(query) {
      const groups = document.querySelectorAll(".lexicon-category-group");
      groups.forEach(group => {
        let hasVisibleChild = false;
        const chips = group.querySelectorAll(".lexicon-chip");
        chips.forEach(chip => {
          const match = chip.textContent.toLowerCase().includes(query) || chip.title.toLowerCase().includes(query);
          chip.style.display = match ? "inline-flex" : "none";
          if (match) hasVisibleChild = true;
        });
        group.style.display = hasVisibleChild ? "block" : "none";
      });
    }

    renderIntentPresets() {
      this.intentSelect.innerHTML = `<option value="">None (Standard Anime / Digital Art)</option>`;
      INTENT_PRESETS.forEach(preset => {
        const opt = document.createElement("option");
        opt.value = preset.id;
        opt.textContent = `${preset.name} - ${preset.description.slice(0, 45)}...`;
        this.intentSelect.appendChild(opt);
      });
    }

    toggleComparison() {
      const isShowing = this.compareSection.style.display === "block";
      this.compareSection.style.display = isShowing ? "none" : "block";
      this.toggleCompareBtn.textContent = isShowing ? "Compare All Models Side-by-Side" : "Hide Comparison View";
      if (!isShowing) {
        this.renderComparison();
        this.compareSection.scrollIntoView({ behavior: "smooth" });
      }
    }

    renderComparison() {
      const rawText = this.promptInput.value;
      const models = ["flux", "pony", "sdxl", "midjourney"];
      
      this.compareGrid.innerHTML = models.map(mId => {
        const res = PromptOptimizer.optimize(rawText, mId, {
          intentPresetId: this.currentIntent,
          customSwaps: this.customSwaps
        });
        return `
          <div class="compare-card">
            <div class="compare-header">
              <h4>${res.modelName}</h4>
              <span class="badge">${res.tokenEstimate} tokens</span>
            </div>
            <div class="compare-body">
              <p class="compare-prompt">${this.escapeHtml(res.prompt || "(Empty prompt)")}</p>
              ${res.negativePrompt ? `
                <div class="compare-neg">
                  <strong>Negative:</strong> ${this.escapeHtml(res.negativePrompt)}
                </div>
              ` : ""}
            </div>
            <button class="btn btn-sm btn-secondary copy-sub-btn" data-text="${this.escapeAttr(res.prompt)}">Copy</button>
          </div>
        `;
      }).join("");

      this.compareGrid.querySelectorAll(".copy-sub-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          navigator.clipboard.writeText(btn.dataset.text);
          const orig = btn.textContent;
          btn.textContent = "Copied!";
          setTimeout(() => btn.textContent = orig, 1500);
        });
      });
    }

    copyToClipboard(text, buttonId) {
      if (!text) return;
      navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById(buttonId);
        const originalText = btn.innerHTML;
        btn.innerHTML = `<span class="check-icon">✓</span> Copied!`;
        btn.classList.add("btn-success");
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove("btn-success");
        }, 1500);
      });
    }

    loadCustomSwaps() {
      try {
        const stored = localStorage.getItem("shelp_custom_swaps");
        return stored ? JSON.parse(stored) : [];
      } catch (e) {
        return [];
      }
    }

    saveCustomSwaps() {
      localStorage.setItem("shelp_custom_swaps", JSON.stringify(this.customSwaps));
    }

    handleAddNewSwap() {
      const wordInput = document.getElementById("customWordInput");
      const replacementInput = document.getElementById("customReplacementInput");

      const word = wordInput.value.trim();
      const replacement = replacementInput.value.trim();

      if (!word || !replacement) {
        alert("Please enter both the word to find and its replacement.");
        return;
      }

      this.customSwaps.push({ word, replacement, id: Date.now() });
      this.saveCustomSwaps();
      this.renderCustomSwapsList();
      wordInput.value = "";
      replacementInput.value = "";
      this.triggerOptimization();
    }

    renderCustomSwapsList() {
      const container = document.getElementById("customSwapsList");
      if (!container) return;

      if (this.customSwaps.length === 0) {
        container.innerHTML = `<p class="text-muted" style="font-size:0.85rem;">No custom word replacements configured yet.</p>`;
        return;
      }

      container.innerHTML = this.customSwaps.map(item => `
        <div class="custom-swap-pill">
          <span><strong>${this.escapeHtml(item.word)}</strong> ➔ ${this.escapeHtml(item.replacement)}</span>
          <button class="delete-swap-btn" data-id="${item.id}" title="Remove">✕</button>
        </div>
      `).join("");

      container.querySelectorAll(".delete-swap-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = parseInt(btn.dataset.id, 10);
          this.customSwaps = this.customSwaps.filter(s => s.id !== id);
          this.saveCustomSwaps();
          this.renderCustomSwapsList();
          this.triggerOptimization();
        });
      });
    }

    escapeHtml(str) {
      if (!str) return "";
      return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    escapeAttr(str) {
      if (!str) return "";
      return str.replace(/"/g, "&quot;");
    }
  }

  // Auto-initialize on DOM ready
  document.addEventListener("DOMContentLoaded", () => {
    window.sHelpApp = new UIController();
    console.log("sHelp Prompt Optimizer loaded (Anime / Cartoon / Digital Art Focus - Zero Realism).");
  });

})();
