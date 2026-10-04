/**
 * sHelp Prompt Optimizer (Unified Zero-AI Engine)
 * 100% Pure JavaScript - No External Dependencies - Zero-AI
 * Works out-of-the-box via local file:// and GitHub Pages.
 */

(function () {
  "use strict";

  // ==========================================
  // 1. LEXICON DATABASE
  // ==========================================
  const LEXICON = {
    subjects: [
      { id: "1girl", label: "1 Girl / Solo Female", danbooru: "1girl, solo", flux: "a young woman", sdxl: "1girl, solo female", category: "subject" },
      { id: "1boy", label: "1 Boy / Solo Male", danbooru: "1boy, solo", flux: "a young man", sdxl: "1boy, solo male", category: "subject" },
      { id: "2girls", label: "2 Girls", danbooru: "2girls", flux: "two women", sdxl: "2girls, two women", category: "subject" },
      { id: "couple", label: "Couple (Man & Woman)", danbooru: "1girl, 1boy, couple", flux: "a man and a woman together", sdxl: "couple, 1girl, 1boy", category: "subject" },
      { id: "knight", label: "Knight / Paladin", danbooru: "knight, armor", flux: "a valiant knight in ornate armor", sdxl: "armored knight, paladin", category: "subject" },
      { id: "cyber_warrior", label: "Cyberpunk Mercenary", danbooru: "cyborg, science_fiction, tactical_gear", flux: "a cyberpunk mercenary with cybernetic implants", sdxl: "cyberpunk mercenary, augmented cyborg", category: "subject" },
      { id: "wizard", label: "Mage / Sorcerer", danbooru: "wizard, mage, robe", flux: "an arcane wizard holding a staff channeling energy", sdxl: "sorcerer, arcane mage, spellcaster", category: "subject" },
      { id: "detective", label: "Noir Detective", danbooru: "detective, trench_coat, fedora", flux: "a weary private detective in a vintage trench coat", sdxl: "noir detective, trench coat, fedora", category: "subject" },
      { id: "astronaut", label: "Astronaut", danbooru: "astronaut, space_suit", flux: "an astronaut in an EVA space suit exploring", sdxl: "astronaut in space suit, cosmonaut", category: "subject" },
      { id: "elf", label: "Elven Character", danbooru: "elf, pointy_ears", flux: "an elegant elf with elongated pointed ears", sdxl: "elf, pointed ears, elven features", category: "subject" },
      { id: "vampire", label: "Vampire Noble", danbooru: "vampire, fangs, aristocratic", flux: "an aristocratic vampire with sharp fangs and pale skin", sdxl: "vampire noble, fangs, gothic aristocrat", category: "subject" },
      { id: "samurai", label: "Samurai / Ronin", danbooru: "samurai, katana, traditional_clothing", flux: "a disciplined samurai wielding a katana", sdxl: "ronin samurai with katana, feudal warrior", category: "subject" },
      { id: "pilot", label: "Mecha Pilot", danbooru: "pilot_suit, plugsuit, cockpit", flux: "a focused mecha pilot wearing a sleek pilot suit inside a cockpit", sdxl: "mecha pilot, plugsuit, cockpit interior", category: "subject" }
    ],

    physical_traits: [
      { id: "silver_hair", label: "Silver / White Hair", danbooru: "white_hair", flux: "silvery white hair catching the ambient light", sdxl: "silver hair, white hair, lustrous hair", category: "physical" },
      { id: "black_hair", label: "Raven Black Hair", danbooru: "black_hair", flux: "sleek jet-black hair with subtle highlights", sdxl: "jet black hair, dark hair", category: "physical" },
      { id: "blonde_hair", label: "Golden Blonde Hair", danbooru: "blonde_hair", flux: "wavy golden blonde hair cascading over shoulders", sdxl: "golden blonde hair, wavy hair", category: "physical" },
      { id: "red_hair", label: "Auburn / Red Hair", danbooru: "red_hair", flux: "vibrant natural auburn red hair with fine strands", sdxl: "vibrant red hair, fiery auburn hair", category: "physical" },
      { id: "blue_eyes", label: "Piercing Blue Eyes", danbooru: "blue_eyes", flux: "intense piercing azure-blue eyes with intricate iris details", sdxl: "detailed blue eyes, sparkling sapphire eyes", category: "physical" },
      { id: "emerald_eyes", label: "Emerald Green Eyes", danbooru: "green_eyes", flux: "luminous emerald-green eyes with deep depth", sdxl: "emerald green eyes, detailed iris", category: "physical" },
      { id: "golden_eyes", label: "Amber / Golden Eyes", danbooru: "amber_eyes, yellow_eyes", flux: "radiant glowing amber eyes with golden flecks", sdxl: "amber eyes, golden glowing eyes", category: "physical" },
      { id: "freckles", label: "Subtle Freckles", danbooru: "freckles", flux: "delicate natural freckles dusted across the bridge of the nose and cheeks", sdxl: "freckles, realistic skin texture with freckles", category: "physical" },
      { id: "cyber_implants", label: "Cybernetic Facial Implants", danbooru: "cybernetics, cybernetic_eyes", flux: "subtle glowing metallic cybernetic circuitry along the temples", sdxl: "cybernetic implants, glowing cyber lines", category: "physical" },
      { id: "ponytail", label: "High Ponytail", danbooru: "ponytail, high_ponytail", flux: "hair tied up in a dynamic high ponytail", sdxl: "high ponytail hairstyle", category: "physical" },
      { id: "twin_braids", label: "Twin Braids", danbooru: "twin_braids, braided_hair", flux: "intricately woven twin braids resting forward", sdxl: "twin braids, intricate braided hair", category: "physical" }
    ],

    clothing: [
      { id: "cyber_jacket", label: "Techwear Cyber Jacket", danbooru: "jacket, high_collar, techwear", flux: "a weathered techwear jacket with luminous LED piping and high collar", sdxl: "cyberpunk techwear jacket, glowing seams", category: "clothing" },
      { id: "victorian_suit", label: "Victorian Aristocrat Suit", danbooru: "formal, vest, collared_shirt, necktie", flux: "an immaculate tailored Victorian three-piece suit with silver pocket watch", sdxl: "victorian suit, tailored vest, aristocratic attire", category: "clothing" },
      { id: "plate_armor", label: "Engraved Steel Plate Armor", danbooru: "armor, pauldrons, breastplate", flux: "masterfully crafted plate armor with filigree engravings and battle scuffs", sdxl: "ornate steel plate armor, etched metal breastplate", category: "clothing" },
      { id: "leather_duster", label: "Weathered Leather Duster", danbooru: "trench_coat, leather", flux: "a rugged distressed leather trench duster coat flapping gently", sdxl: "weathered leather duster coat, rugged jacket", category: "clothing" },
      { id: "flowing_dress", label: "Silk Evening Gown", danbooru: "dress, evening_gown, bare_shoulders", flux: "an elegant flowing crimson silk evening gown with delicate draping", sdxl: "flowing silk evening gown, elegant dress", category: "clothing" },
      { id: "hoodie_streetwear", label: "Urban Oversized Hoodie", danbooru: "hoodie, oversized_clothes, streetwear", flux: "a relaxed oversized streetwear hoodie with minimal typography", sdxl: "oversized urban hoodie, streetwear fashion", category: "clothing" },
      { id: "tactical_vest", label: "Military Tactical Rig", danbooru: "tactical_vest, pouches, military_uniform", flux: "a heavy-duty tactical plate carrier vest equipped with modular pouches", sdxl: "tactical body armor vest, military combat gear", category: "clothing" },
      { id: "kimono", label: "Embroidered Silk Kimono", danbooru: "kimono, sash, obi, traditional_japanese", flux: "a traditional Japanese silk kimono adorned with gold-leaf crane patterns", sdxl: "detailed silk kimono with obi sash, traditional pattern", category: "clothing" }
    ],

    expressions_poses: [
      { id: "looking_at_viewer", label: "Direct Gaze / Eye Contact", danbooru: "looking_at_viewer", flux: "making direct, captivating eye contact with the viewer", sdxl: "looking at viewer, direct eye contact", category: "expression_pose" },
      { id: "gentle_smile", label: "Subtle Gentle Smile", danbooru: "gentle_smile, slight_smile", flux: "a soft, tranquil and enigmatic half-smile", sdxl: "subtle smile, serene expression", category: "expression_pose" },
      { id: "intense_smirk", label: "Confident Smirk", danbooru: "smirk, confident", flux: "a knowing, sharp confident smirk with a cocked eyebrow", sdxl: "confident smirk, charismatic expression", category: "expression_pose" },
      { id: "melancholic", label: "Pensive & Melancholic", danbooru: "expressionless, sad, looking_away", flux: "a solemn, reflective and melancholic expression gazing thoughtfully into the distance", sdxl: "pensive expression, melancholy gaze, deep in thought", category: "expression_pose" },
      { id: "battle_stance", label: "Dynamic Combat Ready Pose", danbooru: "fighting_stance, dynamic_angle, dynamic_pose", flux: "poised in a grounded, ready combat fighting stance with weight shifted", sdxl: "dynamic battle stance, ready for combat, athletic pose", category: "expression_pose" },
      { id: "profile_view", label: "Side Profile Silhouette", danbooru: "profile, side_view", flux: "captured in sharp profile perspective highlighting the jawline", sdxl: "side profile view, crisp silhouette", category: "expression_pose" },
      { id: "leaning_back", label: "Leaning Against Wall", danbooru: "leaning_back, wall", flux: "casually leaning one shoulder against a textured brick wall with arms crossed", sdxl: "leaning against wall, casual relaxed pose", category: "expression_pose" }
    ],

    environments: [
      { id: "cyber_alley", label: "Rain-Slicked Cyberpunk Alley", danbooru: "outdoors, night, city, alley, rain, neon_lights", flux: "a rain-slicked futuristic cyberpunk back alley illuminated by glowing holographic advertisements and neon signs reflecting off puddles", sdxl: "cyberpunk alley, rain soaked asphalt, neon reflection, foggy city street", category: "environment" },
      { id: "enchanted_forest", label: "Misty Ancient Enchanted Forest", danbooru: "forest, trees, nature, moss, sunbeam", flux: "a primeval fairytale forest with towering moss-covered ancient oak trees, floating airborne spores, and lush fern undergrowth", sdxl: "enchanted misty forest, ancient mossy trees, magical flora", category: "environment" },
      { id: "cozy_cafe", label: "Warm Rain-Streaked Coffee Shop", danbooru: "cafe, indoor, table, coffee_cup, window", flux: "the cozy corner of an artisan coffee shop on a rainy afternoon, steam rising from a porcelain mug near a rain-speckled window", sdxl: "warm coffee shop interior, rainy window backdrop, wooden table", category: "environment" },
      { id: "gothic_cathedral", label: "Ruined Gothic Cathedral", danbooru: "ruins, cathedral, arch, stained_glass, indoor", flux: "the soaring interior of a dilapidated Gothic cathedral with towering ribbed vault ceilings, shattered stained-glass windows, and wild ivy creeping up marble pillars", sdxl: "gothic cathedral interior, arched nave, stained glass windows, ruined marble", category: "environment" },
      { id: "sci_fi_bridge", label: "Starship Observation Deck", danbooru: "spaceship, science_fiction, window, space, stars", flux: "the sleek panoramic observation deck of an interstellar spacecraft looking out into a spiral nebula and distant starfields", sdxl: "starship observation deck, glass panorama, space nebula outside, sci-fi interior", category: "environment" },
      { id: "sunset_beach", label: "Windy Coastal Cliffs at Twilight", danbooru: "cliff, ocean, beach, sunset, dramatic_sky", flux: "windswept coastal cliffs overlooking a roaring ocean with crashing waves under a fiery dusk horizon", sdxl: "dramatic ocean cliffs, crashing waves, sunset horizon, coastal scenery", category: "environment" },
      { id: "tokyo_crosswalk", label: "Bustling Shibuya-style Crossing", danbooru: "tokyo, crosswalk, crowd, city, buildings", flux: "a bustling neon-lit metropolitan pedestrian crossing at night with bustling crowds and skyscraper facades", sdxl: "tokyo pedestrian crossing, city crowds, glowing billboards, urban night", category: "environment" }
    ],

    lighting: [
      { id: "chiaroscuro", label: "Chiaroscuro / Dramatic Shadow", danbooru: "chiaroscuro, strong_shadow, dramatic_lighting", flux: "dramatic chiaroscuro lighting with deep sculptural shadows and high-contrast illuminated highlights", sdxl: "chiaroscuro lighting, deep shadows, high contrast, dramatic light play", category: "lighting" },
      { id: "god_rays", label: "Volumetric Crepuscular Sunbeams (God Rays)", danbooru: "sunbeam, light_particles, volumetric_lighting", flux: "luminous volumetric god rays cutting through atmospheric haze and floating dust motes", sdxl: "volumetric light rays, crepuscular rays, hazy sunlight, glowing particles", category: "lighting" },
      { id: "golden_hour", label: "Warm Golden Hour Sunset", danbooru: "sunset, warm_lighting, orange_sky", flux: "bathed in the warm, flattering amber glow of golden hour sunlight casting elongated soft shadows", sdxl: "golden hour lighting, warm amber sunlight, soft evening glow", category: "lighting" },
      { id: "neon_rim", label: "Cyber Neon Rim Lighting", danbooru: "rim_light, neon_lights, glowing", flux: "sharp dual-tone neon rim lighting outlining the silhouette in vivid cyan and magenta", sdxl: "neon rim light, dual color lighting, cyan and magenta highlights", category: "lighting" },
      { id: "bioluminescent", label: "Ethereal Bioluminescence", danbooru: "bioluminescence, glowing, particles", flux: "surrounded by magical bioluminescent fungal spores emitting a serene soft teal glow in the dark", sdxl: "bioluminescent glow, glowing flora, ethereal night ambiance", category: "lighting" },
      { id: "moody_overcast", label: "Moody Soft Overcast Sky", danbooru: "overcast, cloudy, diffuse_light", flux: "soft, highly diffuse overcast northern light providing even illumination with zero harsh glare", sdxl: "overcast sky lighting, soft diffuse light, moody ambient tone", category: "lighting" },
      { id: "cinematic_teal_orange", label: "Cinematic Teal and Orange Grading", danbooru: "color_contrast, cinematic_lighting", flux: "hollywood cinematic color grading featuring warm skin tones set against cool teal shadows", sdxl: "teal and orange color grade, cinematic color palette, blockbuster look", category: "lighting" }
    ],

    camera_framing: [
      { id: "lens_85mm", label: "85mm Portrait (Creamy Bokeh)", danbooru: "depth_of_field, bokeh, portrait", flux: "shot on an 85mm prime lens at f/1.4 creating smooth creamy background bokeh and pinpoint eye sharpness", sdxl: "85mm f/1.4 portrait photography, creamy background blur, sharp focus", category: "camera" },
      { id: "lens_35mm", label: "35mm Street Documentary", danbooru: "wide_shot, detailed_background", flux: "captured on a 35mm f/2 lens giving an intimate documentary street photography perspective", sdxl: "35mm documentary photography, candid street shot", category: "camera" },
      { id: "wide_angle_low", label: "Cinematic Low-Angle Wide Shot", danbooru: "from_below, wide_angle", flux: "filmed from a dramatic low angle using an ultra-wide anamorphic lens emphasizing scale and grandeur", sdxl: "low angle shot, dramatic perspective, wide angle composition", category: "camera" },
      { id: "macro_lens", label: "Macro Extreme Close-Up", danbooru: "close-up, detailed", flux: "extreme macro photography revealing tactile surface micro-textures, fibers, and fine organic details", sdxl: "macro photography, extreme close up, intricate micro details", category: "camera" },
      { id: "kodak_portra", label: "Kodak Portra 400 Color Film", danbooru: "film_grain, vintage", flux: "authentic 35mm film still with Kodak Portra 400 grain texture, rich natural skin tones, and subtle halation", sdxl: "kodak portra 400 film grain, analog aesthetic, film still", category: "camera" },
      { id: "anamorphic_cinematic", label: "Anamorphic Cinema Widescreen", danbooru: "letterboxed, widescreen, cinematic", flux: "cinematic 2.39:1 widescreen frame with horizontal anamorphic lens flares and gentle oval bokeh", sdxl: "anamorphic lens flare, 2.39:1 aspect ratio, cinematic movie still", category: "camera" }
    ],

    styles_mediums: [
      { id: "photorealistic", label: "Raw High-End Editorial Photography", danbooru: "realistic, photo_(medium)", flux: "a raw, unedited high-end magazine editorial photograph with natural skin textures and authentic fabric weaves", sdxl: "professional editorial photography, raw photo, natural texture, 8k uhd", category: "style" },
      { id: "anime_modern", label: "Modern Anime Feature Film", danbooru: "source_anime, anime_coloring, clean_lineart", flux: "a breathtaking high-budget anime feature film screenshot with crisp line work, subtle gradient shading, and painted backgrounds reminiscent of modern Kyoto Animation or Makoto Shinkai films", sdxl: "modern anime style, crisp lineart, vibrant anime aesthetic, key visual", category: "style" },
      { id: "retro_80s_anime", label: "Retro 80s / 90s Cel Shaded Anime", danbooru: "retro_artstyle, 1990s_(style), cel_shading", flux: "a nostalgic 1980s retro anime aesthetic captured from an authentic vintage laserdisc, featuring bold ink lines, hand-painted cel animation, and soft CRT glow", sdxl: "retro 80s anime, vintage cel shading, 1990s anime style, nostalgic aesthetic", category: "style" },
      { id: "digital_concept_art", label: "Fantasy Concept Art (ArtStation)", danbooru: "concept_art, digital_media", flux: "an epic digital concept art illustration with expressive painterly brushwork, dynamic composition, and rich environmental storytelling", sdxl: "digital concept art, splash art, trending on artstation, painterly brushwork", category: "style" },
      { id: "oil_classical", label: "Classical Oil Painting (Rembrandt style)", danbooru: "oil_painting_(medium), traditional_media", flux: "a masterpiece classical oil painting with textured impasto brush marks, deep glazing, and dramatic chiaroscuro in the style of Old Masters", sdxl: "classical oil painting, textured canvas, impasto, old masters style", category: "style" },
      { id: "watercolor", label: "Fluid Botanical Watercolor", danbooru: "watercolor_(medium), paint_splatter", flux: "a delicate watercolor illustration on textured cold-press cotton paper with spontaneous pigment blooms and soft water-wash gradients", sdxl: "watercolor painting, wet-on-wet technique, soft pigments on paper", category: "style" },
      { id: "cyber_render", label: "3D Octane / Unreal Engine 5 Render", danbooru: "3d, cgi", flux: "a hyper-detailed 3D render with subsurface scattering, ray-traced reflections, and physically based rendering materials", sdxl: "unreal engine 5 render, octane render, pbr materials, raytracing", category: "style" },
      { id: "dark_fantasy", label: "Grimdark Dark Fantasy (Elden Ring / Souls)", danbooru: "dark_fantasy, gothic", flux: "a grimdark dark fantasy illustration with desaturated ash tones, decayed gothic architecture, and haunting atmospheric dread", sdxl: "dark fantasy aesthetic, soulsborne style, decayed grandeur, grim atmosphere", category: "style" }
    ]
  };

  // ==========================================
  // 2. MODEL PROFILES
  // ==========================================
  const MODEL_PROFILES = {
    flux: {
      id: "flux",
      name: "Flux.1 (Dev / Schnell / Pro)",
      engine: "T5-XXL + CLIP-L",
      recommendedFormat: "natural_prose",
      description: "T5-XXL natural language text encoder. Excels with rich descriptive sentences and storytelling. DO NOT use tag soup, score tags, or generic buzzwords (e.g., 'masterpiece', '8k', 'trending on artstation') as they degrade Flux output.",
      maxTokens: 256,
      supportsNegative: false,
      defaultNegative: "",
      qualityPrefix: "",
      features: { useProse: true },
      stripWords: [
        "masterpiece", "best quality", "ultra quality", "high quality", "8k", "4k", 
        "trending on artstation", "award winning", "hyperrealistic", "photorealistic",
        "score_9", "score_8_up", "score_7_up", "score_6_up", "score_5_up", "score_4_up",
        "source_anime", "source_cartoon", "source_pony"
      ]
    },
    pony: {
      id: "pony",
      name: "Pony Diffusion / PonyXL (v6)",
      engine: "SDXL Danbooru CLIP",
      recommendedFormat: "danbooru_hierarchy",
      description: "Finely tuned on Danbooru tags. STRICTLY requires special score tags and Danbooru formatting with underscores. Sentences and story prose produce blurry or inaccurate output.",
      maxTokens: 225,
      supportsNegative: true,
      qualityPrefix: "score_9, score_8_up, score_7_up",
      defaultRating: "rating:general, source_anime",
      defaultNegative: "score_6, score_5, score_4, score_3, score_2, score_1, source_pony, source_furry, 3d, realistic, photo, ugly, deformed, lowres, bad anatomy, text, watermark, signature",
      hierarchyOrder: [
        "score_tags", "source_rating", "character_series", "subject_count",
        "physical_traits", "clothing", "expression_pose", "environment",
        "lighting_camera", "style_medium"
      ]
    },
    sdxl: {
      id: "sdxl",
      name: "Stable Diffusion XL (SDXL)",
      engine: "OpenCLIP ViT-G + CLIP-L",
      recommendedFormat: "weighted_tags",
      description: "Dual CLIP encoders. Excels with comma-separated keyword chunks and weighted tokens. Early tokens receive highest attention.",
      maxTokens: 150,
      supportsNegative: true,
      qualityPrefix: "masterpiece, highly detailed",
      defaultNegative: "ugly, deformed, bad anatomy, bad hands, missing fingers, extra limbs, low quality, blurry, pixelated, jpeg artifacts, watermark, signature"
    },
    sd15: {
      id: "sd15",
      name: "Stable Diffusion 1.5",
      engine: "CLIP-ViT-L/14 (77 Tokens)",
      recommendedFormat: "compact_tags",
      description: "Strict 77-token CLIP window. Front-load key words and use targeted negative prompts.",
      maxTokens: 75,
      supportsNegative: true,
      qualityPrefix: "masterpiece, best quality, sharp focus",
      defaultNegative: "worst quality, low quality, normal quality, lowres, bad anatomy, bad hands, missing fingers, error, cropped, jpeg artifacts, watermark, signature"
    },
    midjourney: {
      id: "midjourney",
      name: "Midjourney (v6.1)",
      engine: "Midjourney Proprietary",
      recommendedFormat: "mj_parameters",
      description: "Prefers clear scene descriptions, aesthetic directions, and terminal parameter flags.",
      maxTokens: 120,
      supportsNegative: false,
      defaultNegative: "",
      defaultParams: "--ar 16:9 --v 6.1 --style raw",
      stripWords: ["photorealistic", "hyperrealistic", "4k", "8k", "masterpiece", "trending on artstation"]
    },
    perchance: {
      id: "perchance",
      name: "Perchance (Flux / Custom Engine)",
      engine: "Flux / Perchance Hybrid",
      recommendedFormat: "perchance_clean",
      description: "Optimized for Perchance's modern Flux-based image generator. Clean, vivid descriptions with optional anti-prompt support.",
      maxTokens: 200,
      supportsNegative: true,
      defaultNegative: "blurry, low quality, deformed, extra fingers, text, watermark"
    }
  };

  // ==========================================
  // 3. REPLACEMENTS & SWAPS
  // ==========================================
  const WORD_SWAPS = [
    {
      pattern: /\b(nice|good|cool|awesome|great)\s+lighting\b/gi,
      flux: "dramatic chiaroscuro lighting with subtle ambient rim light",
      pony: "dramatic_lighting, rim_light",
      sdxl: "cinematic lighting, dramatic shadows, volumetric rim light",
      midjourney: "cinematic dramatic lighting with soft rim highlights"
    },
    {
      pattern: /\b(nice|pretty|beautiful|good)\s+background\b/gi,
      flux: "an exquisitely detailed environmental background with atmospheric depth",
      pony: "detailed_background, scenic",
      sdxl: "detailed background, scenic environment, depth of field",
      midjourney: "richly detailed cinematic background"
    },
    {
      pattern: /\b(realistic|photorealistic|hyperrealistic|ultra realistic)\b/gi,
      flux: "authentic documentary photography, natural skin pores and micro-textures, 35mm film",
      pony: "realistic, photo_(medium)",
      sdxl: "professional photography, raw photo, realistic skin texture, 85mm f/1.4",
      midjourney: "authentic documentary photography, 35mm lens, raw aesthetic"
    },
    {
      pattern: /\b(masterpiece|best quality|top quality|4k|8k|ultra hd)\b/gi,
      flux: "", // Strip for Flux
      pony: "score_9, score_8_up, score_7_up",
      sdxl: "masterpiece, sharp focus, highly detailed",
      midjourney: ""
    },
    {
      pattern: /\b(looking at (?:camera|me|viewer)|eye contact)\b/gi,
      flux: "making direct, engaging eye contact with the camera",
      pony: "looking_at_viewer",
      sdxl: "looking at viewer, direct eye contact",
      midjourney: "direct eye contact with viewer"
    },
    {
      pattern: /\b(pretty|beautiful|cute|gorgeous)\s+face\b/gi,
      flux: "expressive facial features with delicate natural skin texture and lifelike eyes",
      pony: "detailed_eyes, slight_smile",
      sdxl: "detailed symmetrical face, captivating eyes, soft features",
      midjourney: "striking expressive facial features"
    },
    {
      pattern: /\b(cat ears|kitty ears|neko ears)\b/gi,
      flux: "plush feline cat ears peeking through soft hair",
      pony: "cat_ears, animal_ears",
      sdxl: "cat ears, animal ear headband",
      midjourney: "delicate cat ears"
    },
    {
      pattern: /\b(in the rain|rainy|raining|under the rain)\b/gi,
      flux: "in a heavy rainfall with droplets beading on surfaces and mist hanging in the cool air",
      pony: "rain, wet, outdoors",
      sdxl: "heavy rain, rain droplets, wet surfaces, atmospheric mist",
      midjourney: "cinematic heavy rain, wet reflections"
    },
    {
      pattern: /\b(in the snow|snowing|winter landscape)\b/gi,
      flux: "amidst gentle snowfall with soft snowflakes settling on clothes in a frosty winter atmosphere",
      pony: "snow, falling_snow, winter",
      sdxl: "falling snowflakes, winter setting, frosty breath",
      midjourney: "serene snowfall, winter ambiance"
    },
    {
      pattern: /\b(sunset|golden hour|dusk)\b/gi,
      flux: "illuminated by the amber warmth of a radiant golden hour sunset casting long soft shadows",
      pony: "sunset, warm_lighting, orange_sky",
      sdxl: "golden hour, sunset lighting, warm orange glow, long shadows",
      midjourney: "golden hour sunset glow, warm ambient light"
    },
    {
      pattern: /\b(cyberpunk|neon city|futuristic city)\b/gi,
      flux: "in a sprawling futuristic cyberpunk city filled with towering holographic signs, flying vehicles, and vibrant neon reflections on wet streets",
      pony: "cyberpunk, science_fiction, city, night, neon_lights",
      sdxl: "cyberpunk cityscape, futuristic skyscrapers, neon reflections, volumetric smog",
      midjourney: "cyberpunk megacity at night, glowing neon architecture"
    },
    {
      pattern: /\b(blurry background|bokeh|depth of field)\b/gi,
      flux: "shot with an 85mm f/1.4 lens yielding smooth creamy background bokeh",
      pony: "depth_of_field, bokeh",
      sdxl: "shallow depth of field, 85mm f/1.4, creamy bokeh background",
      midjourney: "shallow depth of field, creamy bokeh blur"
    }
  ];

  const BOORU_TO_PROSE = {
    "1girl": "a young woman",
    "1boy": "a young man",
    "solo": "standing alone",
    "looking_at_viewer": "looking directly into the camera with an engaging gaze",
    "looking_away": "gazing pensively into the distance",
    "blue_eyes": "piercing azure blue eyes",
    "green_eyes": "emerald green eyes",
    "red_eyes": "striking ruby red eyes",
    "brown_eyes": "warm amber-brown eyes",
    "black_hair": "sleek midnight-black hair",
    "blonde_hair": "golden blonde hair",
    "silver_hair": "lustrous silvery-white hair",
    "white_hair": "pure snowy-white hair",
    "blue_hair": "vibrant azure-blue hair",
    "long_hair": "long flowing hair cascading down",
    "short_hair": "cleanly cropped short hair",
    "ponytail": "hair bound in a graceful ponytail",
    "twintails": "hair styled in playful twin tails",
    "braid": "an intricately woven braid",
    "smile": "wearing a gentle, warm smile",
    "school_uniform": "dressed in a neat school uniform",
    "skirt": "a pleated skirt",
    "dress": "an elegant dress",
    "jacket": "a stylish tailored jacket",
    "hoodie": "a relaxed casual hoodie",
    "outdoors": "in an open outdoor environment",
    "indoors": "within an intimate interior setting",
    "night": "under the stillness of a night sky",
    "day": "bathed in bright natural daylight",
    "sunset": "under the rich amber glow of a setting sun",
    "rain": "caught in a quiet rain shower with visible raindrops",
    "wet": "with surfaces glistening with moisture",
    "standing": "standing upright with grounded posture",
    "sitting": "comfortably seated",
    "depth_of_field": "with a shallow depth of field separating the subject from the background",
    "bokeh": "with soft circular bokeh in the background"
  };

  const INTENT_PRESETS = [
    {
      id: "cinematic_photo",
      name: "Cinematic Film (35mm)",
      description: "Atmospheric movie still with authentic film grain, Panavision framing, and natural color grading.",
      fluxAdditions: "cinematic film still, 35mm photography, subtle film grain, Kodak Portra 400 tones, Panavision widescreen framing, realistic lighting physics, atmospheric mood",
      ponyAdditions: "photo_(medium), realistic, cinematic_lighting, depth_of_field",
      sdxlAdditions: "cinematic film still, 35mm photograph, kodak portra 400, depth of field, anamorphic lens, masterpiece",
      mjAdditions: "--ar 16:9 --style raw --v 6.1"
    },
    {
      id: "anime_shinkai",
      name: "Anime Feature (Shinkai / KyoAni)",
      description: "Vibrant high-budget anime theatrical visual with luminous skies, painterly clouds, and detailed backgrounds.",
      fluxAdditions: "a high-budget Japanese anime feature film screenshot, Makoto Shinkai aesthetic, luminous painted clouds, crisp line work, vibrant atmospheric lighting, emotional key visual",
      ponyAdditions: "source_anime, anime_coloring, masterpiece, detailed_background, scenic, sky, clouds",
      sdxlAdditions: "anime key visual, makoto shinkai style, vibrant sky, detailed anime aesthetic, clean lineart",
      mjAdditions: "--ar 16:9 --v 6.1 --niji 6"
    },
    {
      id: "cyberpunk_neon",
      name: "Cyberpunk Dystopia",
      description: "Rain-soaked neo-city with intense neon reflections, holographic signs, and moody dark contrast.",
      fluxAdditions: "gritty cyberpunk neo-noir aesthetic, drenched in neon reflections cyan and magenta, wet asphalt, volumetric mist, Blade Runner atmosphere",
      ponyAdditions: "cyberpunk, science_fiction, neon_lights, night, city, rain, wet",
      sdxlAdditions: "cyberpunk city, neon lighting, volumetric fog, rainy street, octane render, photorealistic",
      mjAdditions: "--ar 16:9 --v 6.1 --style raw"
    },
    {
      id: "retro_80s_anime",
      name: "Retro 80s / 90s OVA Anime",
      description: "Vintage cel-shaded anime aesthetic with authentic CRT television glow, ink lines, and nostalgic colors.",
      fluxAdditions: "vintage 1980s anime screencap, authentic hand-painted cel animation, bold ink lines, VHS tape aesthetic, retro sci-fi mood",
      ponyAdditions: "retro_artstyle, 1980s_(style), cel_shading, vintage, anime_screencap",
      sdxlAdditions: "retro 80s anime, vintage cel shaded aesthetic, 1990s anime style, nostalgic animation still",
      mjAdditions: "--ar 16:9 --v 6.1"
    },
    {
      id: "dark_fantasy_souls",
      name: "Dark Fantasy / Grimdark",
      description: "Decayed gothic grandeur, desaturated ashen colors, and foreboding Soulsborne atmosphere.",
      fluxAdditions: "grimdark dark fantasy, towering decayed gothic architecture, muted ashen palette, ominous volumetric fog, subtle gold embers drifting",
      ponyAdditions: "dark_fantasy, gothic, ruins, fog, atmospheric",
      sdxlAdditions: "dark fantasy concept art, soulsborne aesthetic, ruined gothic architecture, dramatic chiaroscuro",
      mjAdditions: "--ar 16:9 --v 6.1 --chaos 20"
    },
    {
      id: "classical_oil",
      name: "Classical Oil Painting",
      description: "Rich impasto oil paint texture, Rembrandt chiaroscuro, and textured museum canvas.",
      fluxAdditions: "classical oil painting on textured canvas, visible impasto brushstrokes, dramatic Rembrandt chiaroscuro lighting, rich deep glazed pigments",
      ponyAdditions: "oil_painting_(medium), traditional_media, chiaroscuro",
      sdxlAdditions: "classical oil painting, textured canvas, impasto brushwork, old masters style",
      mjAdditions: "--ar 4:5 --v 6.1"
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
        case "lighting": return "lighting_camera";
        case "camera_framing": return "lighting_camera";
        case "styles_mediums": return "style_medium";
        default: return "general";
      }
    }

    static _heuristicCategory(tag) {
      if (/(eyes|hair|skin|face|body|freckles|ears|wings|tail|horns|breasts|thighs)/i.test(tag)) return "physical_traits";
      if (/(shirt|dress|skirt|pants|jacket|hoodie|uniform|hat|gloves|shoes|boots|costume|suit|armor|ribbon|collar)/i.test(tag)) return "clothing";
      if (/(looking_|smile|smirk|standing|sitting|lying|holding|arms|hands|expression|pose|view|gaze|crying|laughing)/i.test(tag)) return "expression_pose";
      if (/(outdoors|indoors|city|room|street|forest|sky|night|day|sunset|rain|snow|building|space|water|beach|ruins)/i.test(tag)) return "environment";
      if (/(lighting|shadow|glow|sunlight|neon|bokeh|lens|angle|shot|view|dof|chiaroscuro|rays)/i.test(tag)) return "lighting_camera";
      if (/(artstyle|medium|render|painting|watercolor|illustration|anime|photo|realistic|masterpiece|aesthetic)/i.test(tag)) return "style_medium";
      return "general";
    }
  }

  // ==========================================
  // 5. OPTIMIZER
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

        // Built-in WORD_SWAPS
        if (!wasSwapped) {
          for (const swap of WORD_SWAPS) {
            if (swap.pattern.test(currentVal)) {
              const replacement = swap[targetModelId] !== undefined ? swap[targetModelId] : (swap.sdxl || "");
              if (replacement !== currentVal) {
                swapsApplied.push({
                  original: currentVal,
                  replacedWith: replacement || "[stripped for model]",
                  reason: `Optimized for ${profile.name}`
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

      // 2. Strip Buzzwords that harm the model
      if (profile.stripWords && profile.stripWords.length > 0) {
        processedTokens = processedTokens.filter(t => {
          const valLower = t.value.toLowerCase().replace(/_/g, " ").trim();
          const shouldStrip = profile.stripWords.some(sw => valLower === sw.toLowerCase());
          if (shouldStrip) {
            swapsApplied.push({
              original: t.value,
              replacedWith: "[removed]",
              reason: `Harms output quality in ${profile.name}`
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
      let subjPart = groups.subject_count.join(" and ") || "A detailed subject";
      let physPart = groups.physical_traits.length > 0 ? `with ${groups.physical_traits.join(", ")}` : "";
      let posePart = groups.expression_pose.length > 0 ? `, ${groups.expression_pose.join(", ")}` : "";
      sentences.push(`${subjPart} ${physPart}${posePart}.`.replace(/\s+/g, " "));

      if (groups.clothing.length > 0) sentences.push(`Wearing ${groups.clothing.join(", ")}.`);
      if (groups.environment.length > 0) sentences.push(`Set against ${groups.environment.join(", ")}.`);
      if (groups.lighting_camera.length > 0) sentences.push(`Illuminated by ${groups.lighting_camera.join(", ")}.`);
      if (groups.style_medium.length > 0) sentences.push(`Rendered in ${groups.style_medium.join(", ")}.`);
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
        subjects: "Entities & Subjects",
        physical_traits: "Physical Traits & Hair",
        clothing: "Clothing & Attire",
        expressions_poses: "Poses & Expressions",
        environments: "Environments & Backgrounds",
        lighting: "Lighting & Atmosphere",
        camera_framing: "Camera & Optics (Flux/SDXL)",
        styles_mediums: "Art Styles & Mediums"
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
      this.intentSelect.innerHTML = `<option value="">None (Standard Artist Intent)</option>`;
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
    console.log("sHelp Prompt Optimizer loaded (100% Zero-AI, Deterministic Engine).");
  });

})();
