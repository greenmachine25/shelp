/**
 * sHelp Prompt Optimizer (Unified Zero-AI Engine)
 * Strictly focused on Adult Pinup, Glamour & Stylized Digital Art
 * STRICTLY NO CHILDREN / NO UNDERAGE CONTENT / ZERO REALISM
 * Works out-of-the-box via local file:// and GitHub Pages.
 */

(function () {
  "use strict";

  // ==========================================
  // 1. LEXICON DATABASE (100% Adult Pinup & Glamour)
  // ==========================================
  const LEXICON = {
    subjects: [
      { id: "1woman_pinup", label: "Adult Pinup Model (1Woman)", danbooru: "1woman, solo, mature_female, adult, pinup", flux: "a glamorous adult pinup model with stunning alluring curves", sdxl: "1woman, solo, mature female, adult, glamorous pinup, hourglass figure", category: "subject" },
      { id: "bunny_girl", label: "Classic Playboy Bunny Girl", danbooru: "1woman, bunny_suit, playboy_bunny, fishnets, collar, cuffs, rabbit_ears", flux: "a confident adult woman wearing a glossy satin bunny suit with fishnet stockings and satin bunny ears", sdxl: "1woman, playboy bunny suit, fishnet tights, rabbit ears, adult pinup visual", category: "subject" },
      { id: "femme_fatale", label: "Noir Femme Fatale", danbooru: "1woman, mature_female, femme_fatale, evening_gown, seductive", flux: "a sultry adult femme fatale in a plunging backless evening dress with an alluring gaze", sdxl: "1woman, mature female, femme fatale, seductive expression, noir pinup", category: "subject" },
      { id: "succubus_queen", label: "Fantasy Succubus Pinup", danbooru: "1woman, succubus, horns, bat_wings, demon_tail, seductive", flux: "a captivating adult demon succubus with curving horns, velvet bat wings, and a seductive pose", sdxl: "1woman, succubus pinup, demon horns, heart tail, adult fantasy art", category: "subject" },
      { id: "glamour_swimsuit", label: "Resort Swimsuit / Bikini Pinup", danbooru: "1woman, mature_female, bikini, swimsuit, bare_shoulders", flux: "a voluptuous adult woman in a stylish designer bikini sunbathing", sdxl: "1woman, adult, designer bikini, poolside pinup, glamorous curves", category: "subject" },
      { id: "lingerie_model", label: "Silk & Lace Boudoir Model", danbooru: "1woman, lingerie, lace, negligee, garter_straps", flux: "an elegant adult woman reclining in sheer silk and lace lingerie", sdxl: "1woman, mature female, sheer lace lingerie, boudoir pinup, garter straps", category: "subject" },
      { id: "cyber_pinup", label: "Sorayama-style Cyber Pinup", danbooru: "1woman, cyborg, chrome, metallic_skin, sci-fi_pinup", flux: "a voluptuous adult gynoid in the retro-futuristic chrome pinup aesthetic of Hajime Sorayama", sdxl: "1woman, chrome pinup, metallic sheen, retro futuristic cyber pinup", category: "subject" },
      { id: "valkyrie_warrior", label: "Adult Valkyrie / Battle Goddess", danbooru: "1woman, mature_female, armor, valkyrie, muscular_female", flux: "a statuesque adult Valkyrie warrior goddess with an athletic hourglass physique in ornate golden armor", sdxl: "1woman, mature valkyrie, battle goddess, ornate armor, adult fantasy pinup", category: "subject" },
      { id: "retro_cheesecake", label: "1950s Gil Elvgren Cheesecake Pinup", danbooru: "1woman, mature_female, 1950s_pinup, cheesecake_(art), retro", flux: "a charming adult 1950s cheesecake pinup girl in the painted illustrative style of Gil Elvgren", sdxl: "1woman, 1950s pinup, cheesecake art, gil elvgren aesthetic, retro glamour", category: "subject" }
    ],

    physical_traits: [
      { id: "hourglass_figure", label: "Hourglass Curves & Voluptuous Figure", danbooru: "hourglass_figure, voluptuous, wide_hips, narrow_waist", flux: "a voluptuous hourglass silhouette with a narrow waist and feminine curves", sdxl: "voluptuous hourglass figure, feminine curves, toned waist", category: "physical" },
      { id: "seductive_eyes", label: "Seductive Bedroom Eyes", danbooru: "bedroom_eyes, heavy_eyelids, seductive_smile", flux: "heavy-lidded sultry bedroom eyes with long mascara lashes and a knowing gaze", sdxl: "bedroom eyes, sultry gaze, captivating mature eyes, anime pinup", category: "physical" },
      { id: "cleavage_decolletage", label: "Alluring Cleavage & Décolletage", danbooru: "cleavage, bare_shoulders, bare_back", flux: "revealing elegant décolletage and bare shoulders highlighted by soft lighting", sdxl: "cleavage, bare shoulders, elegant collarbones, alluring posture", category: "physical" },
      { id: "voluptuous_hips", label: "Curvy Hips & Long Toned Legs", danbooru: "wide_hips, long_legs, toned_thighs", flux: "long shapely legs and gracefully rounded feminine hips", sdxl: "long toned legs, wide hips, feminine pinup proportions", category: "physical" },
      { id: "crimson_lips", label: "Full Glossy Crimson Lips", danbooru: "lipstick, red_lips, parted_lips", flux: "full glossy crimson red lips slightly parted in a sensual smile", sdxl: "glossy red lipstick, parted lips, sultry expression", category: "physical" },
      { id: "flowing_cascade_hair", label: "Voluminous Cascading Hollywood Waves", danbooru: "long_hair, wavy_hair, voluminous_hair", flux: "voluminous glamorous wavy hair cascading down across bare shoulders", sdxl: "voluminous wavy hair, glamour hairstyle, flowing locks", category: "physical" }
    ],

    clothing: [
      { id: "bunny_costume", label: "Glossy Bunny Suit & High Heels", danbooru: "bunny_suit, high_heels, collar, bow_tie, cuffs", flux: "a glossy form-fitting black latex bunny suit paired with high stiletto heels", sdxl: "glossy bunny suit, high heels, playboy bunny pinup attire", category: "clothing" },
      { id: "sheer_lingerie", label: "Lace Negligee & Garter Straps", danbooru: "lingerie, lace_trim, garter_straps, stockings, sheer", flux: "delicate sheer black lace lingerie with matching garter belt and silk stockings", sdxl: "sheer lace lingerie, garter belt, stockings, boudoir pinup outfit", category: "clothing" },
      { id: "backless_dress", label: "Plunging Backless Silk Gown", danbooru: "evening_gown, backless_dress, plunging_neckline, silk", flux: "a floor-length crimson silk evening gown with a dramatically low plunging neckline and backless drape", sdxl: "backless evening gown, plunging neckline, luxurious silk dress, glamour", category: "clothing" },
      { id: "micro_bikini", label: "Alluring Strappy Bikini", danbooru: "bikini, string_bikini, swimsuit, cleavage", flux: "a stylish string bikini accentuating a sun-kissed feminine physique", sdxl: "string bikini, stylish swimsuit, beach pinup attire", category: "clothing" },
      { id: "fishnet_stockings", label: "Fishnet Tights & Thighhighs", danbooru: "fishnets, fishnet_thighhighs, garter_straps", flux: "intricate diamond-pattern fishnet thighhigh stockings clinging to shapely legs", sdxl: "fishnet stockings, thighhighs, garter straps, pinup detail", category: "clothing" },
      { id: "open_robe", label: "Silk Robe Draped Open", danbooru: "robe, open_clothes, silk_robe, off_shoulder", flux: "a luxurious shimmering silk kimono robe casually slipping off one shoulder", sdxl: "silk robe slipping off shoulder, sensual draped robe, boudoir", category: "clothing" }
    ],

    expressions_poses: [
      { id: "arched_back", label: "Classic Pinup Arched Back Pose", danbooru: "arched_back, looking_at_viewer, seductive_pose", flux: "posing with an elegantly arched back emphasizing shapely curves and making seductive eye contact", sdxl: "arched back pose, classic pinup pose, looking at viewer, seductive", category: "expression_pose" },
      { id: "reclining_couch", label: "Reclining on Velvet Divan", danbooru: "lying, reclining, on_side, couch", flux: "gracefully reclining on her side across an opulent velvet chaise lounge", sdxl: "reclining on side, chaise lounge, relaxed pinup pose, alluring", category: "expression_pose" },
      { id: "looking_over_shoulder", label: "Sultry Over-the-Shoulder Glance", danbooru: "looking_over_shoulder, looking_at_viewer, from_behind", flux: "glancing back enticingly over a bare shoulder with a knowing coy smile", sdxl: "looking over shoulder, sultry glance, back view, pinup pose", category: "expression_pose" },
      { id: "biting_lip", label: "Biting Lip / Coy Flirtation", danbooru: "biting_lip, seductive_smile, blush", flux: "gently biting her lower lip with a playful flirtatious expression", sdxl: "biting lower lip, flirty expression, seductive smile", category: "expression_pose" },
      { id: "kneeling_pose", label: "Alluring Kneeling Arch", danbooru: "kneeling, hands_on_hips, cleavage", flux: "kneeling upright with hands resting gently on her hips to accentuate feminine curves", sdxl: "kneeling pinup pose, hands on hips, hourglass silhouette", category: "expression_pose" }
    ],

    environments: [
      { id: "luxury_boudoir", label: "Luxury Satin Boudoir Bedroom", danbooru: "boudoir, bedroom, bed, silk_sheets, pillows, indoor", flux: "an opulent master boudoir bedroom with a canopied king bed, scattered silk pillows, and warm ambient candlelight", sdxl: "luxury boudoir, silk sheets, soft canopy bed, romantic indoor ambiance", category: "environment" },
      { id: "sunset_poolside", label: "Twilight Resort Poolside", danbooru: "pool, poolside, resort, sunset, lounge_chair, water", flux: "a private tropical villa poolside at dusk with turquoise water and glowing resort lanterns", sdxl: "sunset poolside, luxury villa resort, glowing water, evening ambiance", category: "environment" },
      { id: "neon_penthouse", label: "Neon City High-Rise Penthouse", danbooru: "penthouse, floor-to-ceiling_window, night, city_lights", flux: "a luxury high-rise penthouse featuring floor-to-ceiling windows looking out over glowing city lights", sdxl: "penthouse interior, panoramic city lights night view, modern luxury", category: "environment" },
      { id: "vintage_speakeasy", label: "1950s Velvet Lounge & Cocktail Bar", danbooru: "bar, lounge, velvet, dim_lighting, vintage", flux: "a sultry 1950s jazz lounge with tufted red velvet banquettes and golden bar mirrors", sdxl: "vintage cocktail lounge, red velvet decor, intimate bar setting, retro pinup", category: "environment" },
      { id: "steamy_onsen", label: "Steamy Hot Spring Sanctuary", danbooru: "hot_spring, onsen, steam, outdoor, rocks, water", flux: "a secluded natural outdoor hot spring shrouded in rising sensual steam and smooth river stones", sdxl: "steamy hot spring, onsen water, rising steam, secluded outdoor bath", category: "environment" }
    ],

    lighting_vfx: [
      { id: "warm_candlelight", label: "Intimate Amber Candlelight & Rim", danbooru: "candlelight, warm_lighting, soft_shadows, rim_light", flux: "illuminated by the intimate warm amber glow of candlelight casting soft flattering rim highlights", sdxl: "warm candlelight, intimate lighting, golden rim light, soft shadows", category: "lighting" },
      { id: "neon_backlight", label: "Sultry Magenta & Cyan Neon Backlight", danbooru: "neon_lights, rim_light, pink_and_cyan, glowing", flux: "sensual neon rim lighting tracing feminine contours in saturated magenta and electric cyan", sdxl: "neon rim lighting, magenta highlights, glowing contours, cyber pinup lighting", category: "lighting" },
      { id: "golden_dusk_glow", label: "Golden Hour Glow on Skin", danbooru: "sunset, warm_lighting, sunbeam, golden_hour", flux: "bathed in the flattering golden honey glow of evening twilight highlighting curves", sdxl: "golden sunset glow, warm lighting, flattering light, pinup ambiance", category: "lighting" },
      { id: "soft_boudoir_diffusion", label: "Soft Romantic Boudoir Glow", danbooru: "soft_lighting, bloom, glowing, diffuse_light", flux: "soft diffused lighting with a gentle dreamlike bloom wrapping around the subject", sdxl: "soft boudoir lighting, romantic bloom, flattering diffuse illumination", category: "lighting" }
    ],

    framing_angles: [
      { id: "full_body_pinup", label: "Full-Length Glamour Frame", danbooru: "full_body, pinup, looking_at_viewer", flux: "a full-length illustrative pinup composition showcasing the complete head-to-toe silhouette and heels", sdxl: "full body pinup composition, complete silhouette, high heels, framed pose", category: "camera" },
      { id: "cowboy_glamour", label: "Three-Quarter Cowboy Shot (Thighs Up)", danbooru: "cowboy_shot, 3/4_view, cleavage", flux: "a dynamic three-quarter cowboy frame focusing on the torso, cleavage, and hips", sdxl: "cowboy shot, thighs up, hourglass emphasis, pinup framing", category: "camera" },
      { id: "from_above_reclined", label: "Reclined Perspective from Above", danbooru: "from_above, lying, looking_up", flux: "captured from an alluring high angle looking down as the subject gazes upward", sdxl: "view from above, reclining pose, looking up, seductive perspective", category: "camera" },
      { id: "close_portrait_glamour", label: "Intimate Glamour Face & Decolletage", danbooru: "close-up, portrait, cleavage, detailed_eyes", flux: "an intimate tightly framed portrait highlighting captivating bedroom eyes and parted lips", sdxl: "glamour close-up portrait, detailed sensual eyes, parted lips, decolletage", category: "camera" }
    ],

    styles_mediums: [
      { id: "elvgren_cheesecake", label: "1950s Cheesecake Pinup (Gil Elvgren)", danbooru: "cheesecake_(art), 1950s_pinup, retro_artstyle, traditional_media", flux: "a classic 1950s American cheesecake pinup painting in the signature illustrative style of Gil Elvgren and Alberto Vargas, with painterly gouache brushwork and playful charm", sdxl: "gil elvgren pinup style, 1950s cheesecake art, alberto vargas, painted retro pinup, vintage glamour", category: "style" },
      { id: "modern_anime_pinup", label: "Modern Anime Pinup (High-End Illustration)", danbooru: "source_anime, anime_coloring, clean_lineart, pinup, masterpiece", flux: "an exquisite modern Japanese anime pinup illustration with silky clean linework, subtle skin gradient shading, and high-end collector visual finish", sdxl: "anime pinup illustration, clean lineart, vibrant anime coloring, mature female, key visual", category: "style" },
      { id: "sorayama_chrome", label: "Cyber Chrome Pinup (Hajime Sorayama)", danbooru: "metallic_skin, chrome, retro_futurism, 1980s_(style), airbrush", flux: "a legendary airbrushed retro-futuristic chrome cyber pinup in the unmistakable metallic reflection style of Hajime Sorayama", sdxl: "hajime sorayama style, chrome reflections, metallic airbrush pinup, 80s retro sci-fi art", category: "style" },
      { id: "pulp_noir_pinup", label: "Vintage Pulp Fiction Cover Pinup", danbooru: "pulp_art, retro, vintage, dramatic_lighting, 1940s", flux: "a dramatic 1940s vintage pulp fiction magazine cover illustration with bold painterly gouache strokes, rich shadows, and seductive femme fatale energy", sdxl: "pulp fiction cover art, retro 1940s pinup, vintage gouache painting, dramatic chiaroscuro", category: "style" },
      { id: "stylized_cartoon_pinup", label: "Modern Stylized Cartoon Pinup", danbooru: "source_cartoon, stylized, bold_outline, flat_color, pinup", flux: "a sleek modern stylized cartoon pinup featuring bold graphic vector outlines, exaggerated feminine curves, and punchy pop-art colors", sdxl: "stylized cartoon pinup, bold outlines, graphic vector art, exaggerated curves", category: "style" }
    ]
  };

  // ==========================================
  // 2. MODEL PROFILES (100% Adult Pinup Focus)
  // ==========================================
  const MODEL_PROFILES = {
    flux: {
      id: "flux",
      name: "Flux.1 (Adult Pinup & Glamour Story)",
      engine: "T5-XXL + CLIP-L",
      recommendedFormat: "natural_prose",
      description: "T5-XXL natural language encoder tuned for Adult Pinup, Glamour & Stylized Digital Art. Crafts vivid descriptive sentences for sensual curves, boudoir settings, and illustrative pinup aesthetics. Strictly adult, zero realism.",
      maxTokens: 256,
      supportsNegative: false,
      defaultNegative: "",
      qualityPrefix: "",
      features: { useProse: true, banRealism: true, adultOnly: true },
      stripWords: [
        "masterpiece", "best quality", "ultra quality", "high quality", "8k", "4k", 
        "trending on artstation", "award winning", "hyperrealistic", "photorealistic", "realistic",
        "raw photo", "photograph", "35mm film", "dslr", "real life", "skin pores",
        "score_9", "score_8_up", "score_7_up", "score_6_up", "score_5_up", "score_4_up",
        "source_pony", "chibi", "school_uniform", "serafuku", "student"
      ]
    },
    pony: {
      id: "pony",
      name: "Pony Diffusion / PonyXL (Adult Pinup & Glamour)",
      engine: "SDXL Danbooru CLIP",
      recommendedFormat: "danbooru_hierarchy",
      description: "The premier engine for Adult Anime Pinup and Glamour. Strictly requires score tags, rating tags (rating:questionable or rating:explicit), and underscore Danbooru tags. Underage terms and realism are strictly banished in the negative prompt.",
      maxTokens: 225,
      supportsNegative: true,
      qualityPrefix: "score_9, score_8_up, score_7_up",
      defaultRating: "rating:questionable, source_anime",
      defaultNegative: "score_6, score_5, score_4, score_3, score_2, score_1, source_pony, source_furry, child, kid, underage, chibi, realistic, photo, photorealistic, 3d, realistic skin, photograph, ugly, deformed, lowres, bad anatomy, text, watermark",
      hierarchyOrder: [
        "score_tags", "source_rating", "character_series", "subject_count",
        "physical_traits", "clothing", "expression_pose", "environment",
        "lighting_camera", "style_medium"
      ]
    },
    sdxl: {
      id: "sdxl",
      name: "SDXL Adult Pinup / Illustrious / Animagine",
      engine: "Dual CLIP (ViT-G + CLIP-L)",
      recommendedFormat: "weighted_tags",
      description: "Tuned for adult anime pinup checkpoints (Illustrious XL, Pony, AutismMix). Uses weighted tags and negative prompt anti-realism/anti-underage filters.",
      maxTokens: 150,
      supportsNegative: true,
      qualityPrefix: "masterpiece, adult pinup, clean lineart",
      defaultNegative: "child, kid, underage, chibi, photorealistic, photo, 3d, realistic skin, photograph, realistic eyes, ugly, deformed, bad anatomy, bad hands, missing fingers, extra limbs, low quality, blurry, artifacts, watermark"
    },
    sd15: {
      id: "sd15",
      name: "SD 1.5 Adult Pinup (Anything / OrangeMix)",
      engine: "CLIP-ViT-L/14 (77 Tokens)",
      recommendedFormat: "compact_tags",
      description: "Optimized for classic adult anime pinup checkpoints. Concise 77-token tag ordering with zero realism and zero underage content.",
      maxTokens: 75,
      supportsNegative: true,
      qualityPrefix: "masterpiece, best quality, adult pinup",
      defaultNegative: "child, kid, underage, chibi, photorealistic, photo, 3d, realistic, worst quality, low quality, lowres, bad anatomy, bad hands, artifacts, watermark"
    },
    midjourney: {
      id: "midjourney",
      name: "Midjourney (Niji 6 Adult Pinup)",
      engine: "Midjourney Niji 6 (Anime & Pinup Model)",
      recommendedFormat: "mj_parameters",
      description: "Targets Midjourney's dedicated illustration model (--niji 6) for glamorous adult pinup and stylized digital art.",
      maxTokens: 120,
      supportsNegative: false,
      defaultNegative: "",
      defaultParams: "--ar 16:9 --niji 6 --style expressive",
      stripWords: ["photorealistic", "hyperrealistic", "realistic", "photo", "dslr", "4k", "8k", "masterpiece", "chibi"]
    },
    perchance: {
      id: "perchance",
      name: "Perchance Adult Pinup (Flux Engine)",
      engine: "Perchance Pinup / Flux Hybrid",
      recommendedFormat: "perchance_clean",
      description: "Tuned for Perchance's modern image generator when producing glamorous adult pinup and stylized 2D artwork.",
      maxTokens: 200,
      supportsNegative: true,
      defaultNegative: "child, kid, underage, chibi, realistic, photo, 3d, photorealistic, realistic skin, deformed, extra fingers, blurry, text, watermark"
    }
  };

  // ==========================================
  // 3. REPLACEMENTS & SWAPS (Adult Pinup Focus)
  // ==========================================
  const WORD_SWAPS = [
    {
      pattern: /\b(realistic|photorealistic|hyperrealistic|ultra realistic|real life|realism|photo|raw photo)\b/gi,
      flux: "crisp clean stylized vector linework with rich digital cel-shading and painterly pinup illustration finish",
      pony: "clean_lineart, detailed_background, anime_coloring, pinup",
      sdxl: "adult pinup key visual, clean lineart, vibrant anime coloring, high detail digital illustration",
      midjourney: "clean stylized adult pinup illustration, vibrant colors, detailed lineart"
    },
    {
      pattern: /\b(camera|lens|35mm|85mm|dslr|film grain|kodak)\b/gi,
      flux: "exquisite painterly adult pinup art visual with rich ambient lighting",
      pony: "pinup_art, clean_lineart",
      sdxl: "studio pinup visual, adult glamour aesthetic, key visual",
      midjourney: "pinup art visual, painted illustration"
    },
    {
      pattern: /\b(1girl|girl)\b/gi,
      flux: "an alluring adult woman",
      pony: "1woman, mature_female, adult",
      sdxl: "1woman, adult, mature female",
      midjourney: "an alluring adult woman"
    },
    {
      pattern: /\b(sexy|hot|gorgeous|stunning|babe)\b/gi,
      flux: "a glamorous adult pinup model with alluring hourglass curves and magnetic presence",
      pony: "mature_female, adult, pinup, hourglass_figure, voluptuous",
      sdxl: "adult pinup, mature female, voluptuous hourglass figure, glamorous",
      midjourney: "glamorous adult pinup model with alluring hourglass curves"
    },
    {
      pattern: /\b(bunny girl|playboy bunny|bunny suit)\b/gi,
      flux: "an adult woman in a glossy satin black bunny suit with rabbit ears, bow tie, and fishnet stockings",
      pony: "1woman, bunny_suit, playboy_bunny, fishnets, collar, cuffs, rabbit_ears",
      sdxl: "1woman, adult playboy bunny suit, fishnet stockings, rabbit ears, high heels",
      midjourney: "glamorous adult bunny girl in glossy satin bunny suit and fishnets"
    },
    {
      pattern: /\b(lingerie|underwear|negligee)\b/gi,
      flux: "dressed in sheer black lace boudoir lingerie with matching garter straps and silk stockings",
      pony: "lingerie, lace, negligee, garter_straps, stockings, sheer",
      sdxl: "sheer lace lingerie, garter belt, silk stockings, boudoir pinup",
      midjourney: "luxurious sheer black lace lingerie and garter stockings"
    },
    {
      pattern: /\b(bikini|swimsuit|bathing suit)\b/gi,
      flux: "wearing a stylish designer string bikini accentuating a voluptuous feminine silhouette",
      pony: "bikini, string_bikini, swimsuit, cleavage, hourglass_figure",
      sdxl: "designer string bikini, swimsuit pinup, hourglass curves, poolside",
      midjourney: "stylish designer bikini accentuating hourglass curves"
    },
    {
      pattern: /\b(curves|curvy|hourglass)\b/gi,
      flux: "a voluptuous hourglass silhouette with a narrow waist, generous cleavage, and rounded hips",
      pony: "voluptuous, hourglass_figure, wide_hips, narrow_waist, cleavage",
      sdxl: "voluptuous hourglass figure, wide hips, toned waist, cleavage",
      midjourney: "voluptuous feminine hourglass figure with narrow waist"
    },
    {
      pattern: /\b(cleavage|boobs|busty|breasts)\b/gi,
      flux: "prominent alluring cleavage and elegant bare décolletage",
      pony: "cleavage, bare_shoulders, large_breasts",
      sdxl: "alluring cleavage, bare décolletage, feminine curves",
      midjourney: "alluring cleavage and bare décolletage"
    },
    {
      pattern: /\b(legs|thighs|stockings|heels)\b/gi,
      flux: "long shapely legs clad in sheer silk thighhigh stockings and pointed stiletto heels",
      pony: "thighhighs, garter_straps, high_heels, long_legs",
      sdxl: "silk thighhigh stockings, garter straps, high stiletto heels, long legs",
      midjourney: "long shapely legs in sheer thighhigh stockings and stiletto heels"
    },
    {
      pattern: /\b(looking at (?:camera|me|viewer)|eye contact)\b/gi,
      flux: "making direct, seductive bedroom-eye contact with the viewer",
      pony: "looking_at_viewer, bedroom_eyes, seductive_smile",
      sdxl: "looking at viewer, bedroom eyes, seductive direct gaze",
      midjourney: "direct seductive eye contact with viewer"
    },
    {
      pattern: /\b(seductive|flirty|alluring|bedroom eyes)\b/gi,
      flux: "heavy-lidded sultry bedroom eyes with a knowing coy half-smile",
      pony: "bedroom_eyes, seductive_smile, blush",
      sdxl: "bedroom eyes, sultry gaze, flirty smile, mature expression",
      midjourney: "heavy-lidded sultry bedroom eyes and coy smile"
    },
    {
      pattern: /\b(pinup pose|arched back)\b/gi,
      flux: "posing with an elegantly arched back emphasizing shapely curves and feminine posture",
      pony: "arched_back, looking_at_viewer, seductive_pose",
      sdxl: "classic pinup pose, arched back, looking at viewer, seductive",
      midjourney: "classic pinup arched back pose emphasizing feminine curves"
    },
    {
      pattern: /\b(nice|good|cool|awesome|great)\s+lighting\b/gi,
      flux: "intimate warm amber candlelight and subtle sensual rim highlights tracing feminine curves",
      pony: "candlelight, warm_lighting, rim_light, soft_shadows",
      sdxl: "warm boudoir lighting, intimate candlelight, golden rim light, soft shadows",
      midjourney: "intimate warm boudoir lighting with soft golden rim highlights"
    },
    {
      pattern: /\b(nice|pretty|beautiful|good)\s+background\b/gi,
      flux: "an opulent satin-draped luxury boudoir bedroom with romantic canopied bed and soft candlelight",
      pony: "boudoir, bedroom, bed, silk_sheets, pillows, indoor",
      sdxl: "luxury boudoir, silk sheets, soft canopy bed, romantic indoor ambiance",
      midjourney: "luxurious satin-draped boudoir bedroom background"
    },
    {
      pattern: /\b(masterpiece|best quality|top quality|4k|8k|ultra hd)\b/gi,
      flux: "", // Strip for Flux
      pony: "score_9, score_8_up, score_7_up",
      sdxl: "masterpiece, adult pinup, clean lineart",
      midjourney: ""
    }
  ];

  const BOORU_TO_PROSE = {
    "1woman": "an alluring adult woman",
    "mature_female": "a mature adult female",
    "solo": "posing alone",
    "pinup": "in a classic illustrative glamour pinup pose",
    "looking_at_viewer": "making direct seductive eye contact with the viewer",
    "bedroom_eyes": "with sultry heavy-lidded bedroom eyes",
    "bunny_suit": "wearing a glossy satin bunny suit",
    "playboy_bunny": "in a classic playboy bunny costume with rabbit ears",
    "fishnets": "with black diamond-pattern fishnet stockings",
    "lingerie": "dressed in delicate sheer lace lingerie",
    "garter_straps": "adorned with sleek garter straps holding silk stockings",
    "stockings": "wearing sheer silk stockings",
    "thighhighs": "wearing form-fitting thighhigh stockings",
    "high_heels": "wearing tall pointed stiletto high heels",
    "bikini": "wearing an alluring string bikini",
    "cleavage": "revealing deep elegant cleavage",
    "hourglass_figure": "possessing an exquisite voluptuous hourglass figure",
    "voluptuous": "with full sensual feminine curves",
    "wide_hips": "featuring shapely rounded hips and narrow waist",
    "seductive_smile": "with a tantalizing seductive smile",
    "biting_lip": "gently biting her lower lip with playful allure",
    "arched_back": "with an elegantly arched back accentuating her silhouette",
    "reclining": "luxuriously reclining on her side",
    "boudoir": "within an intimate silk-sheeted boudoir",
    "poolside": "beside a moonlit luxury resort pool",
    "retro_pinup": "rendered in the timeless 1950s painted cheesecake pinup style",
    "cheesecake_(art)": "in the iconic American painted cheesecake art tradition",
    "femme_fatale": "exuding dangerous noir femme fatale magnetism"
  };

  const INTENT_PRESETS = [
    {
      id: "elvgren_cheesecake",
      name: "1950s Gil Elvgren Cheesecake Pinup",
      description: "Classic American painted cheesecake pinup in the style of Gil Elvgren and Alberto Vargas.",
      fluxAdditions: "a classic 1950s American cheesecake pinup painting, Gil Elvgren and Alberto Vargas style, painterly gouache brushwork, voluptuous curves, playful seductive charm, warm vintage palette",
      ponyAdditions: "cheesecake_(art), 1950s_pinup, retro_artstyle, traditional_media, mature_female, adult, pinup, score_9",
      sdxlAdditions: "gil elvgren pinup style, 1950s cheesecake art, alberto vargas, painted retro pinup, vintage glamour, masterpiece",
      mjAdditions: "--ar 4:5 --niji 6 --style original"
    },
    {
      id: "modern_anime_pinup",
      name: "Modern Anime Pinup (High-End Visual)",
      description: "Sleek contemporary anime pinup with silky linework, subtle skin blush, and collector visual polish.",
      fluxAdditions: "an exquisite modern Japanese anime pinup illustration, silky clean linework, subtle skin gradient shading, voluptuous adult woman, bedroom eyes, high-end collector visual finish",
      ponyAdditions: "source_anime, anime_coloring, clean_lineart, pinup, mature_female, adult, bedroom_eyes, masterpiece",
      sdxlAdditions: "anime pinup illustration, clean lineart, vibrant anime coloring, mature female, adult, key visual",
      mjAdditions: "--ar 16:9 --niji 6 --style expressive"
    },
    {
      id: "bunny_girl_glamour",
      name: "Playboy Bunny Girl Pinup (Glossy Satin)",
      description: "Confident bunny girl pinup in a glossy black satin suit, fishnets, and stiletto heels.",
      fluxAdditions: "a glamorous adult bunny girl pinup, glossy black satin bunny suit, fishnet tights, satin bunny ears, white cuffs, high stiletto heels, confident alluring gaze, soft rim lighting",
      ponyAdditions: "bunny_suit, playboy_bunny, fishnets, high_heels, collar, cuffs, rabbit_ears, 1woman, adult, pinup",
      sdxlAdditions: "playboy bunny suit, fishnet stockings, rabbit ears, high heels, adult pinup, glamorous curves",
      mjAdditions: "--ar 16:9 --niji 6 --style expressive"
    },
    {
      id: "boudoir_lingerie",
      name: "Sultry Boudoir Lingerie & Silk",
      description: "Intimate bedroom setting with sheer lace lingerie, garter belt, and warm candlelight.",
      fluxAdditions: "an intimate sultry boudoir pinup, sheer black lace lingerie, matching garter straps, silk stockings, reclining on an opulent satin bed, warm ambient candlelight, seductive mood",
      ponyAdditions: "lingerie, lace, negligee, garter_straps, stockings, sheer, boudoir, bed, 1woman, mature_female, adult",
      sdxlAdditions: "sheer lace lingerie, garter belt, silk stockings, boudoir pinup, canopy bed, warm candlelight",
      mjAdditions: "--ar 16:9 --niji 6 --stylize 200"
    },
    {
      id: "sorayama_chrome_pinup",
      name: "Hajime Sorayama Chrome Cyber Pinup",
      description: "Iconic 1980s retro-futuristic chrome pinup with liquid metal reflections and airbrushed shine.",
      fluxAdditions: "a legendary airbrushed retro-futuristic chrome cyber pinup in the unmistakable metallic reflection style of Hajime Sorayama, liquid chrome sheen, voluptuous feminine form, 80s aesthetic",
      ponyAdditions: "metallic_skin, chrome, retro_futurism, 1980s_(style), airbrush, 1woman, adult, pinup",
      sdxlAdditions: "hajime sorayama style, chrome reflections, metallic airbrush pinup, 80s retro sci-fi art, voluptuous",
      mjAdditions: "--ar 16:9 --niji 6 --style expressive"
    },
    {
      id: "pulp_noir_femme_fatale",
      name: "Retro Pulp Fiction Femme Fatale (1940s)",
      description: "Vintage pulp magazine cover with dramatic shadows, plunging gown, and dangerous noir magnetism.",
      fluxAdditions: "a dramatic 1940s vintage pulp fiction magazine cover illustration, bold painterly gouache strokes, seductive adult femme fatale in a plunging backless dress, rich noir shadows",
      ponyAdditions: "pulp_art, retro, vintage, dramatic_lighting, 1940s, femme_fatale, 1woman, mature_female, adult",
      sdxlAdditions: "pulp fiction cover art, retro 1940s pinup, vintage gouache painting, dramatic chiaroscuro, femme fatale",
      mjAdditions: "--ar 2:3 --niji 6 --style raw"
    },
    {
      id: "resort_poolside_glamour",
      name: "Resort Poolside Swimsuit Pinup",
      description: "Sun-drenched tropical villa poolside with a designer string bikini and twilight resort lanterns.",
      fluxAdditions: "a voluptuous adult pinup model in a designer string bikini posing poolside at a private luxury tropical villa at dusk, glowing turquoise water, golden twilight rim light",
      ponyAdditions: "bikini, string_bikini, swimsuit, poolside, resort, sunset, 1woman, mature_female, adult, pinup",
      sdxlAdditions: "designer string bikini, poolside pinup, luxury resort villa, golden hour glow, voluptuous curves",
      mjAdditions: "--ar 16:9 --niji 6 --style expressive"
    },
    {
      id: "dark_fantasy_succubus",
      name: "Fantasy Succubus Pinup",
      description: "Seductive demon queen with curving horns, velvet bat wings, and glowing arcane embers.",
      fluxAdditions: "a captivating adult demon succubus pinup with curving horns, velvet bat wings, spade tail, glowing violet eyes, seductive arched back pose, floating magical embers",
      ponyAdditions: "succubus, horns, bat_wings, demon_tail, seductive, 1woman, mature_female, adult, fantasy_pinup",
      sdxlAdditions: "succubus pinup, demon horns, bat wings, seductive pose, adult fantasy art, glowing embers",
      mjAdditions: "--ar 16:9 --niji 6 --stylize 250"
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
      } else if (/^(1woman|1man|mature_female|adult|pinup|couple|group)$/i.test(booruNormalized)) {
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
      if (/(curves|hourglass|hips|legs|thighs|cleavage|breasts|lips|eyes|hair|waist)/i.test(tag)) return "physical_traits";
      if (/(bunny_suit|lingerie|bikini|dress|gown|stockings|thighhighs|heels|fishnets|garter|robe|corset)/i.test(tag)) return "clothing";
      if (/(arched_back|seductive|bedroom_eyes|reclining|looking_|biting_lip|pose|smile)/i.test(tag)) return "expression_pose";
      if (/(boudoir|bedroom|poolside|resort|penthouse|lounge|onsen|indoor|sunset)/i.test(tag)) return "environment";
      if (/(lighting|candlelight|neon|rim_light|glow|bloom|soft_shadows)/i.test(tag)) return "lighting_camera";
      if (/(pinup|cheesecake|elvgren|sorayama|pulp|retro|illustration|anime_coloring)/i.test(tag)) return "style_medium";
      return "general";
    }
  }

  // ==========================================
  // 5. OPTIMIZER (100% Adult Pinup Focus)
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

        // Built-in WORD_SWAPS (including Adult Pinup & Anti-Realism Swaps)
        if (!wasSwapped) {
          for (const swap of WORD_SWAPS) {
            if (swap.pattern.test(currentVal)) {
              const replacement = swap[targetModelId] !== undefined ? swap[targetModelId] : (swap.sdxl || "");
              if (replacement !== currentVal) {
                swapsApplied.push({
                  original: currentVal,
                  replacedWith: replacement || "[stripped for model]",
                  reason: `Optimized for ${profile.name} (Adult Pinup)`
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

      // 2. Strip Buzzwords and Underage terms
      if (profile.stripWords && profile.stripWords.length > 0) {
        processedTokens = processedTokens.filter(t => {
          const valLower = t.value.toLowerCase().replace(/_/g, " ").trim();
          const shouldStrip = profile.stripWords.some(sw => valLower === sw.toLowerCase());
          if (shouldStrip) {
            swapsApplied.push({
              original: t.value,
              replacedWith: "[removed]",
              reason: `Removed for ${profile.name} (Adult Pinup / Non-realistic)`
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
      let subjPart = groups.subject_count.join(" and ") || "An alluring adult woman";
      let physPart = groups.physical_traits.length > 0 ? `with ${groups.physical_traits.join(", ")}` : "";
      let posePart = groups.expression_pose.length > 0 ? `, ${groups.expression_pose.join(", ")}` : "";
      sentences.push(`${subjPart} ${physPart}${posePart}.`.replace(/\s+/g, " "));

      if (groups.clothing.length > 0) sentences.push(`Wearing ${groups.clothing.join(", ")}.`);
      if (groups.environment.length > 0) sentences.push(`Set against ${groups.environment.join(", ")}.`);
      if (groups.lighting_camera.length > 0) sentences.push(`Illuminated by ${groups.lighting_camera.join(", ")}.`);
      if (groups.style_medium.length > 0) {
        sentences.push(`Rendered in ${groups.style_medium.join(", ")}.`);
      } else {
        sentences.push(`Rendered in an exquisite adult pinup illustration aesthetic with clean vector linework, subtle skin blush, and painterly shading.`);
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
        buckets["source_rating"].push("rating:questionable", "source_anime");
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
        subjects: "Adult Pinup & Glamour Archetypes",
        physical_traits: "Hourglass Curves & Sensual Features",
        clothing: "Glamour Attire, Lingerie & Bunny Suits",
        expressions_poses: "Seductive Poses & Bedroom Eyes",
        environments: "Boudoir, Penthouse & Resort Settings",
        lighting_vfx: "Intimate Candlelight & Sensual Glow",
        framing_angles: "Pinup Angles & Glamour Framing",
        styles_mediums: "Pinup & Adult Illustrative Styles"
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
      this.intentSelect.innerHTML = `<option value="">None (Standard Adult Pinup)</option>`;
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
    console.log("sHelp Prompt Optimizer loaded (Adult Pinup & Glamour Focus - 100% Zero-AI).");
  });

})();
