/**
 * sHelp Replacements & Word Swaps Database (100% Focused on Anime, Cartoon & Digital Art)
 * Zero-Realism configuration: Converts colloquial prompts into high-impact anime,
 * cartoon, and digital illustration terminology.
 */

export const WORD_SWAPS = [
  // 1. Anti-Realism Swaps (Aggressively converts photo/realism terms into stylized 2D equivalents)
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

  // 2. Generic Quality & Lighting Swaps
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
    flux: "", // Degrades Flux, strip completely
    pony: "score_9, score_8_up, score_7_up",
    sdxl: "masterpiece, clean lineart, key visual",
    midjourney: ""
  },

  // 3. Characters, Gaze & Anime Facial Features
  {
    pattern: /\b(looking at (?:camera|me|viewer)|eye contact)\b/gi,
    flux: "making direct, captivating eye contact with the viewer",
    pony: "looking_at_viewer",
    sdxl: "looking at viewer, direct eye contact, anime eyes",
    midjourney: "direct eye contact with viewer"
  },
  {
    pattern: /\b(looking away|side glance|averting eyes)\b/gi,
    flux: "gazing thoughtfully off to the side with an expressive anime profile",
    pony: "looking_away, profile",
    sdxl: "looking away, side profile, pensive anime gaze",
    midjourney: "looking away into the distance, pensive anime expression"
  },
  {
    pattern: /\b(pretty|beautiful|cute|gorgeous)\s+face\b/gi,
    flux: "an adorable expressive anime face with huge luminous sparkling eyes and delicate blush",
    pony: "detailed_eyes, sparkling_eyes, blush, slight_smile",
    sdxl: "beautiful anime face, sparkling detailed eyes, soft blush, anime coloring",
    midjourney: "expressive anime facial features with luminous sparkling eyes"
  },
  {
    pattern: /\b(smile|smiling|happy expression)\b/gi,
    flux: "a radiant, cheerful anime smile with a warm joyful expression",
    pony: "smile, happy, open_mouth",
    sdxl: "cheerful smile, joyful anime expression",
    midjourney: "bright cheerful anime smile"
  },
  {
    pattern: /\b(angry|mad|furious)\b/gi,
    flux: "an intense shonen battle glare with glowing determined eyes",
    pony: "angry, fierce, intense_eyes",
    sdxl: "intense angry expression, fierce anime gaze, shonen battle mood",
    midjourney: "fierce angry anime expression"
  },
  {
    pattern: /\b(blushing|shy)\b/gi,
    flux: "with adorable rosy anime blush marks and diagonal blushing lines across the cheeks",
    pony: "blush, shy, blush_stickers",
    sdxl: "cute anime blush, shy expression, blushing cheeks",
    midjourney: "cute blushing anime cheeks"
  },

  // 4. Costumes, Outfits & Stylized Elements
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
    pattern: /\b(cat ears|kitty ears|neko ears)\b/gi,
    flux: "plush anime feline cat ears twitching atop soft hair",
    pony: "cat_ears, animal_ears",
    sdxl: "cat ears, nekomimi, anime animal ears",
    midjourney: "cute plush cat ears"
  },
  {
    pattern: /\b(armor|knight armor)\b/gi,
    flux: "ornate stylized anime fantasy armor with polished golden filigree and floating magical pauldrons",
    pony: "armor, pauldrons, breastplate, gold_trim",
    sdxl: "fantasy anime armor, golden filigree, ornate breastplate",
    midjourney: "ornate stylized fantasy anime armor"
  },

  // 5. Action, Magic & Atmosphere
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
    pattern: /\b(in the rain|rainy|raining|under the rain)\b/gi,
    flux: "caught in a quiet anime rain shower with translucent stylized raindrops splashing on surfaces",
    pony: "rain, wet, outdoors, puddles",
    sdxl: "anime rain scene, falling raindrops, wet reflections, moody anime atmosphere",
    midjourney: "moody anime rain scene with glistening reflections"
  },
  {
    pattern: /\b(cyberpunk|neon city|futuristic city)\b/gi,
    flux: "in a sprawling Neo-Tokyo cyberpunk anime city with holographic neon advertisements glowing in the misty night",
    pony: "cyberpunk, science_fiction, city, night, neon_lights",
    sdxl: "neo-tokyo anime city, cyberpunk skyline, neon glow, anime sci-fi",
    midjourney: "neo-tokyo anime cyberpunk city at night with neon lights"
  }
];

// Booru tag to natural anime prose dictionary (for Flux and Perchance)
export const BOORU_TO_PROSE = {
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

// 100% Dedicated Anime, Cartoon & Digital Art Presets
export const INTENT_PRESETS = [
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
