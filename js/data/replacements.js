/**
 * sHelp Replacements & Synonym Swap Database
 * Deterministic mapping rules between colloquial English, Danbooru tags,
 * and high-impact model-specific vocabulary.
 */

// Common words that artists type, mapped to model-optimal terminology
export const WORD_SWAPS = [
  // 1. Generic Quality & Lighting
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
    flux: "", // Degrades Flux, strip completely
    pony: "score_9, score_8_up, score_7_up",
    sdxl: "masterpiece, sharp focus, highly detailed",
    midjourney: ""
  },

  // 2. Physical & Gaze
  {
    pattern: /\b(looking at (?:camera|me|viewer)|eye contact)\b/gi,
    flux: "making direct, engaging eye contact with the camera",
    pony: "looking_at_viewer",
    sdxl: "looking at viewer, direct eye contact",
    midjourney: "direct eye contact with viewer"
  },
  {
    pattern: /\b(looking away|side glance|averting eyes)\b/gi,
    flux: "gazing thoughtfully off to the side away from the camera",
    pony: "looking_away, profile",
    sdxl: "looking away, side glance, pensive gaze",
    midjourney: "looking away into the distance"
  },
  {
    pattern: /\b(pretty|beautiful|cute|gorgeous)\s+face\b/gi,
    flux: "expressive facial features with delicate natural skin texture and lifelike eyes",
    pony: "detailed_eyes, slight_smile",
    sdxl: "detailed symmetrical face, captivating eyes, soft features",
    midjourney: "striking expressive facial features"
  },
  {
    pattern: /\b(smile|smiling|happy expression)\b/gi,
    flux: "a subtle, radiant and genuine smile",
    pony: "smile, gentle_smile",
    sdxl: "subtle smile, happy expression",
    midjourney: "warm subtle smile"
  },
  {
    pattern: /\b(sad|melancholy|pensive|thoughtful)\b/gi,
    flux: "a quiet, pensive and melancholic expression lost in thought",
    pony: "expressionless, melancholy, sad",
    sdxl: "melancholic expression, pensive mood, contemplative",
    midjourney: "somber, contemplative mood"
  },

  // 3. Hair & Clothing
  {
    pattern: /\b(messy hair|disheveled hair|windblown hair)\b/gi,
    flux: "fine windblown strands of hair gently drifting in the breeze",
    pony: "messy_hair, windswept",
    sdxl: "windblown messy hair, detailed stray strands",
    midjourney: "windswept hair with natural flyaways"
  },
  {
    pattern: /\b(cat ears|kitty ears|neko ears)\b/gi,
    flux: "plush feline cat ears peeking through soft hair",
    pony: "cat_ears, animal_ears",
    sdxl: "cat ears, animal ear headband",
    midjourney: "delicate cat ears"
  },
  {
    pattern: /\b(school uniform|student clothes)\b/gi,
    flux: "a traditional pleated Japanese school uniform with crisp folded collar",
    pony: "school_uniform, serafuku, pleated_skirt",
    sdxl: "japanese school uniform, pleated skirt, sailor collar",
    midjourney: "classic pleated school uniform"
  },
  {
    pattern: /\b(maid outfit|maid dress|maid costume)\b/gi,
    flux: "a classic ruffled black-and-white Victorian maid dress with white lace apron",
    pony: "maid, maid_apron, maid_headdress",
    sdxl: "victorian maid outfit, ruffled apron, lace headdress",
    midjourney: "ornate lace-trimmed maid outfit"
  },
  {
    pattern: /\b(hoodie|sweatshirt)\b/gi,
    flux: "a comfortable oversized cotton hoodie with relaxed fabric folds",
    pony: "hoodie, oversized_clothes",
    sdxl: "oversized hoodie, relaxed fit, fabric wrinkles",
    midjourney: "casual oversized hoodie"
  },

  // 4. Atmosphere & Weather
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

  // 5. Camera & Composition
  {
    pattern: /\b(blurry background|bokeh|depth of field)\b/gi,
    flux: "shot with an 85mm f/1.4 lens yielding smooth creamy background bokeh",
    pony: "depth_of_field, bokeh",
    sdxl: "shallow depth of field, 85mm f/1.4, creamy bokeh background",
    midjourney: "shallow depth of field, creamy bokeh blur"
  },
  {
    pattern: /\b(full body|whole body|standing from head to toe)\b/gi,
    flux: "a full-length portrait capturing the entire subject from head to shoes",
    pony: "full_body, standing",
    sdxl: "full body shot, complete head to toe view",
    midjourney: "full body shot, head to toe composition"
  },
  {
    pattern: /\b(close up|face shot|portrait)\b/gi,
    flux: "an intimate, tightly framed portrait focusing on intricate facial features and eye expressions",
    pony: "close-up, portrait",
    sdxl: "close-up portrait shot, detailed eyes and face, tight framing",
    midjourney: "tight portrait close-up shot"
  }
];

// Danbooru tag to English phrase dictionary (for converting Booru tags to Flux prose)
export const BOORU_TO_PROSE = {
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
  "open_mouth": "with lips parted softly",
  "closed_eyes": "eyes peacefully closed",
  "blush": "with faint rosy color brushing across the cheeks",
  "school_uniform": "dressed in a neat school uniform",
  "skirt": "a pleated skirt",
  "dress": "an elegant dress",
  "jacket": "a stylish tailored jacket",
  "hoodie": "a relaxed casual hoodie",
  "holding_weapon": "firmly wielding a weapon",
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
  "bokeh": "with soft circular bokeh in the background",
  "retro_artstyle": "captured in a vintage 1980s hand-drawn animation style",
  "watercolour_(medium)": "rendered as a soft watercolor painting on cold-press paper",
  "oil_painting_(medium)": "painted with textured classical oil paint brushstrokes"
};

// Intent Presets: 1-click artist styles that configure modifiers, lighting, medium, and prompt templates
export const INTENT_PRESETS = [
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
