/**
 * sHelp Lexicon Database (Zero-AI, Deterministic)
 * Comprehensive dictionary of categorized descriptors, Danbooru tag mappings,
 * photography specifications, art mediums, lighting, and composition elements.
 */

export const LEXICON = {
  // 1. Subjects & Entities
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

  // 2. Physical Attributes
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

  // 3. Clothing & Outfits
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

  // 4. Expressions & Poses
  expressions_poses: [
    { id: "looking_at_viewer", label: "Direct Gaze / Eye Contact", danbooru: "looking_at_viewer", flux: "making direct, captivating eye contact with the viewer", sdxl: "looking at viewer, direct eye contact", category: "expression_pose" },
    { id: "gentle_smile", label: "Subtle Gentle Smile", danbooru: "gentle_smile, slight_smile", flux: "a soft, tranquil and enigmatic half-smile", sdxl: "subtle smile, serene expression", category: "expression_pose" },
    { id: "intense_smirk", label: "Confident Smirk", danbooru: "smirk, confident", flux: "a knowing, sharp confident smirk with a cocked eyebrow", sdxl: "confident smirk, charismatic expression", category: "expression_pose" },
    { id: "melancholic", label: "Pensive & Melancholic", danbooru: "expressionless, sad, looking_away", flux: "a solemn, reflective and melancholic expression gazing thoughtfully into the distance", sdxl: "pensive expression, melancholy gaze, deep in thought", category: "expression_pose" },
    { id: "battle_stance", label: "Dynamic Combat Ready Pose", danbooru: "fighting_stance, dynamic_angle, dynamic_pose", flux: "poised in a grounded, ready combat fighting stance with weight shifted", sdxl: "dynamic battle stance, ready for combat, athletic pose", category: "expression_pose" },
    { id: "profile_view", label: "Side Profile Silhouette", danbooru: "profile, side_view", flux: "captured in sharp profile perspective highlighting the jawline", sdxl: "side profile view, crisp silhouette", category: "expression_pose" },
    { id: "leaning_back", label: "Leaning Against Wall", danbooru: "leaning_back, wall", flux: "casually leaning one shoulder against a textured brick wall with arms crossed", sdxl: "leaning against wall, casual relaxed pose", category: "expression_pose" }
  ],

  // 5. Environments & Scenes
  environments: [
    { id: "cyber_alley", label: "Rain-Slicked Cyberpunk Alley", danbooru: "outdoors, night, city, alley, rain, neon_lights", flux: "a rain-slicked futuristic cyberpunk back alley illuminated by glowing holographic advertisements and neon signs reflecting off puddles", sdxl: "cyberpunk alley, rain soaked asphalt, neon reflection, foggy city street", category: "environment" },
    { id: "enchanted_forest", label: "Misty Ancient Enchanted Forest", danbooru: "forest, trees, nature, moss, sunbeam", flux: "a primeval fairytale forest with towering moss-covered ancient oak trees, floating airborne spores, and lush fern undergrowth", sdxl: "enchanted misty forest, ancient mossy trees, magical flora", category: "environment" },
    { id: "cozy_cafe", label: "Warm Rain-Streaked Coffee Shop", danbooru: "cafe, indoor, table, coffee_cup, window", flux: "the cozy corner of an artisan coffee shop on a rainy afternoon, steam rising from a porcelain mug near a rain-speckled window", sdxl: "warm coffee shop interior, rainy window backdrop, wooden table", category: "environment" },
    { id: "gothic_cathedral", label: "Ruined Gothic Cathedral", danbooru: "ruins, cathedral, arch, stained_glass, indoor", flux: "the soaring interior of a dilapidated Gothic cathedral with towering ribbed vault ceilings, shattered stained-glass windows, and wild ivy creeping up marble pillars", sdxl: "gothic cathedral interior, arched nave, stained glass windows, ruined marble", category: "environment" },
    { id: "sci_fi_bridge", label: "Starship Observation Deck", danbooru: "spaceship, science_fiction, window, space, stars", flux: "the sleek panoramic observation deck of an interstellar spacecraft looking out into a spiral nebula and distant starfields", sdxl: "starship observation deck, glass panorama, space nebula outside, sci-fi interior", category: "environment" },
    { id: "sunset_beach", label: "Windy Coastal Cliffs at Twilight", danbooru: "cliff, ocean, beach, sunset, dramatic_sky", flux: "windswept coastal cliffs overlooking a roaring ocean with crashing waves under a fiery dusk horizon", sdxl: "dramatic ocean cliffs, crashing waves, sunset horizon, coastal scenery", category: "environment" },
    { id: "tokyo_crosswalk", label: "Bustling Shibuya-style Crossing", danbooru: "tokyo, crosswalk, crowd, city, buildings", flux: "a bustling neon-lit metropolitan pedestrian crossing at night with bustling crowds and skyscraper facades", sdxl: "tokyo pedestrian crossing, city crowds, glowing billboards, urban night", category: "environment" }
  ],

  // 6. Lighting & Atmosphere
  lighting: [
    { id: "chiaroscuro", label: "Chiaroscuro / Dramatic Shadow", danbooru: "chiaroscuro, strong_shadow, dramatic_lighting", flux: "dramatic chiaroscuro lighting with deep sculptural shadows and high-contrast illuminated highlights", sdxl: "chiaroscuro lighting, deep shadows, high contrast, dramatic light play", category: "lighting" },
    { id: "god_rays", label: "Volumetric Crepuscular Sunbeams (God Rays)", danbooru: "sunbeam, light_particles, volumetric_lighting", flux: "luminous volumetric god rays cutting through atmospheric haze and floating dust motes", sdxl: "volumetric light rays, crepuscular rays, hazy sunlight, glowing particles", category: "lighting" },
    { id: "golden_hour", label: "Warm Golden Hour Sunset", danbooru: "sunset, warm_lighting, orange_sky", flux: "bathed in the warm, flattering amber glow of golden hour sunlight casting elongated soft shadows", sdxl: "golden hour lighting, warm amber sunlight, soft evening glow", category: "lighting" },
    { id: "neon_rim", label: "Cyber Neon Rim Lighting", danbooru: "rim_light, neon_lights, glowing", flux: "sharp dual-tone neon rim lighting outlining the silhouette in vivid cyan and magenta", sdxl: "neon rim light, dual color lighting, cyan and magenta highlights", category: "lighting" },
    { id: "bioluminescent", label: "Ethereal Bioluminescence", danbooru: "bioluminescence, glowing, particles", flux: "surrounded by magical bioluminescent fungal spores emitting a serene soft teal glow in the dark", sdxl: "bioluminescent glow, glowing flora, ethereal night ambiance", category: "lighting" },
    { id: "moody_overcast", label: "Moody Soft Overcast Sky", danbooru: "overcast, cloudy, diffuse_light", flux: "soft, highly diffuse overcast northern light providing even illumination with zero harsh glare", sdxl: "overcast sky lighting, soft diffuse light, moody ambient tone", category: "lighting" },
    { id: "cinematic_teal_orange", label: "Cinematic Teal and Orange Grading", danbooru: "color_contrast, cinematic_lighting", flux: "hollywood cinematic color grading featuring warm skin tones set against cool teal shadows", sdxl: "teal and orange color grade, cinematic color palette, blockbuster look", category: "lighting" }
  ],

  // 7. Camera, Lens & Framing (Crucial for Flux & SDXL)
  camera_framing: [
    { id: "lens_85mm", label: "85mm Portrait (Creamy Bokeh)", danbooru: "depth_of_field, bokeh, portrait", flux: "shot on an 85mm prime lens at f/1.4 creating smooth creamy background bokeh and pinpoint eye sharpness", sdxl: "85mm f/1.4 portrait photography, creamy background blur, sharp focus", category: "camera" },
    { id: "lens_35mm", label: "35mm Street Documentary", danbooru: "wide_shot, detailed_background", flux: "captured on a 35mm f/2 lens giving an intimate documentary street photography perspective", sdxl: "35mm documentary photography, candid street shot", category: "camera" },
    { id: "wide_angle_low", label: "Cinematic Low-Angle Wide Shot", danbooru: "from_below, wide_angle", flux: "filmed from a dramatic low angle using an ultra-wide anamorphic lens emphasizing scale and grandeur", sdxl: "low angle shot, dramatic perspective, wide angle composition", category: "camera" },
    { id: "macro_lens", label: "Macro Extreme Close-Up", danbooru: "close-up, detailed", flux: "extreme macro photography revealing tactile surface micro-textures, fibers, and fine organic details", sdxl: "macro photography, extreme close up, intricate micro details", category: "camera" },
    { id: "kodak_portra", label: "Kodak Portra 400 Color Film", danbooru: "film_grain, vintage", flux: "authentic 35mm film still with Kodak Portra 400 grain texture, rich natural skin tones, and subtle halation", sdxl: "kodak portra 400 film grain, analog aesthetic, film still", category: "camera" },
    { id: "anamorphic_cinematic", label: "Anamorphic Cinema Widescreen", danbooru: "letterboxed, widescreen, cinematic", flux: "cinematic 2.39:1 widescreen frame with horizontal anamorphic lens flares and gentle oval bokeh", sdxl: "anamorphic lens flare, 2.39:1 aspect ratio, cinematic movie still", category: "camera" }
  ],

  // 8. Art Styles & Mediums
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

// Quick lookup map by id
export const LEXICON_BY_ID = {};
Object.keys(LEXICON).forEach(cat => {
  LEXICON[cat].forEach(item => {
    LEXICON_BY_ID[item.id] = item;
  });
});
