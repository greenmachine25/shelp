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
      { id: "hourglass_figure", label: "Hourglass Curves & Voluptuous Figure", danbooru: "hourglass_figure, voluptuous, wide_hips, thick_thighs", flux: "a voluptuous hourglass silhouette with shapely curves, thick thighs, and wide rounded hips", sdxl: "voluptuous hourglass figure, thick thighs, wide hips, feminine curves", category: "physical" },
      { id: "seductive_eyes", label: "Seductive Bedroom Eyes", danbooru: "bedroom_eyes, heavy_eyelids, seductive_smile", flux: "heavy-lidded sultry bedroom eyes with long mascara lashes and a knowing gaze", sdxl: "bedroom eyes, sultry gaze, captivating mature eyes, anime pinup", category: "physical" },
      { id: "cleavage_decolletage", label: "Alluring Cleavage & Décolletage", danbooru: "cleavage, bare_shoulders, bare_back", flux: "revealing elegant décolletage and bare shoulders highlighted by soft lighting", sdxl: "cleavage, bare shoulders, elegant collarbones, alluring posture", category: "physical" },
      { id: "voluptuous_hips", label: "Curvy Hips & Long Toned Legs", danbooru: "wide_hips, long_legs, toned_thighs", flux: "long shapely legs and gracefully rounded feminine hips", sdxl: "long toned legs, wide hips, feminine pinup proportions", category: "physical" },
      { id: "crimson_lips", label: "Full Glossy Crimson Lips", danbooru: "lipstick, red_lips, parted_lips", flux: "full glossy crimson red lips slightly parted in a sensual smile", sdxl: "glossy red lipstick, parted lips, sultry expression", category: "physical" },
      { id: "flowing_cascade_hair", label: "Voluminous Cascading Hollywood Waves", danbooru: "long_hair, wavy_hair, voluminous_hair", flux: "voluminous glamorous wavy hair cascading down across bare shoulders", sdxl: "voluminous wavy hair, glamour hairstyle, flowing locks", category: "physical" },
      { id: "winged_eyeliner_shadow", label: "Winged Eyeliner & Colorful Eyeshadow", danbooru: "eyeliner, eyeshadow, makeup, detailed_eyes", flux: "delicate winged black eyeliner and vibrant colorful eyeshadow accentuating expressive eyes", sdxl: "winged eyeliner, colorful eyeshadow, glamorous eye makeup, detailed anime eyes", category: "physical" }
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
      { id: "kneeling_pose", label: "Alluring Kneeling Arch", danbooru: "kneeling, hands_on_hips, cleavage", flux: "kneeling upright with hands resting gently on her hips to accentuate feminine curves", sdxl: "kneeling pinup pose, hands on hips, hourglass silhouette", category: "expression_pose" },
      { id: "kneeling_pinup_arch", label: "Kneeling Pinup with Hands Behind Head", danbooru: "kneeling, arched_back, arms_behind_head, feet_pointed", flux: "kneeling in an alluring pinup pose with an arched back and arms relaxed behind her head", sdxl: "kneeling pinup pose, arched back, arms behind head, pointed heels", category: "expression_pose" }
    ],

    environments: [
      { id: "luxury_boudoir", label: "Luxury Satin Boudoir Bedroom", danbooru: "boudoir, bedroom, bed, silk_sheets, pillows, indoor", flux: "an opulent master boudoir bedroom with a canopied king bed, scattered silk pillows, and warm ambient candlelight", sdxl: "luxury boudoir, silk sheets, soft canopy bed, romantic indoor ambiance", category: "environment" },
      { id: "sunset_poolside", label: "Twilight Resort Poolside", danbooru: "pool, poolside, resort, sunset, lounge_chair, water", flux: "a private tropical villa poolside at dusk with turquoise water and glowing resort lanterns", sdxl: "sunset poolside, luxury villa resort, glowing water, evening ambiance", category: "environment" },
      { id: "neon_penthouse", label: "Neon City High-Rise Penthouse", danbooru: "penthouse, floor-to-ceiling_window, night, city_lights", flux: "a luxury high-rise penthouse featuring floor-to-ceiling windows looking out over glowing city lights", sdxl: "penthouse interior, panoramic city lights night view, modern luxury", category: "environment" },
      { id: "vintage_speakeasy", label: "1950s Velvet Lounge & Cocktail Bar", danbooru: "bar, lounge, velvet, dim_lighting, vintage", flux: "a sultry 1950s jazz lounge with tufted red velvet banquettes and golden bar mirrors", sdxl: "vintage cocktail lounge, red velvet decor, intimate bar setting, retro pinup", category: "environment" },
      { id: "steamy_onsen", label: "Steamy Hot Spring Sanctuary", danbooru: "hot_spring, onsen, steam, outdoor, rocks, water", flux: "a secluded natural outdoor hot spring shrouded in rising sensual steam and smooth river stones", sdxl: "steamy hot spring, onsen water, rising steam, secluded outdoor bath", category: "environment" },
      { id: "graphic_circle_backdrop", label: "Minimalist Pastel Circle Graphic Backdrop", danbooru: "white_background, simple_background, circle, minimalist", flux: "against a clean solid white studio backdrop accented by a warm minimalist pastel circular graphic halo", sdxl: "white background, minimalist circle backdrop, graphic art frame, clean simple background", category: "environment" }
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
      { id: "style_xpi_sigma", label: "Style of XPI Sigma Art", danbooru: "thick_outlines, bold_outline, clean_lineart, vibrant_colors, cel_shading, simple_shading, specular_highlight, blush, large_eyes, expressive_eyes, detailed_eyes, eyeliner, voluptuous, curvy, wide_hips, thick_thighs, hourglass_figure, full_body, source_anime, anime_coloring, 1woman, mature_female, adult, pinup, contact_shadow, white_background", flux: "rendered in an expressive 2D anime pinup illustration art style with subtle classic animation flair, featuring bold clean black outlines, vibrant saturated colors, smooth clean digital cel-shading with crisp specular highlights and soft blushing cheeks, showcasing a voluptuous, full-figured adult woman with curvaceous feminine proportions, thick thighs, wide rounded curvy hips, a natural shapely waist, full bust, voluminous stylized hair with sharp angular locks, and large captivating expressive anime eyes with delicate winged eyeliner, finished with crisp clean vector anime lineart and polished cel-shading", sdxl: "(expressive anime pinup illustration with subtle animation flair:1.2), (bold clean black outlines, crisp anime linework:1.15), (smooth cel shading, crisp specular highlights, soft cheek blush:1.15), (voluptuous curvy full-figured proportions, wide rounded hips, thick thighs, shapely waist:1.2), (voluminous hair with sharp angular locks, large expressive anime eyes, winged eyeliner:1.15), vibrant saturated colors, 2d anime key visual, soft contact shadow, clean white background", category: "style" },
      { id: "style_xaxaxa", label: "Style of xaxaxa", danbooru: "delicate_lineart, soft_shading, luminous_skin, glowing_light, detailed_eyes, bedroom_eyes, glossy_lips, blush, translucent_skin, painterly_anime, voluptuous, graceful_curves", flux: "rendered in a delicate Japanese digital anime pinup aesthetic, featuring soft refined colored linework, luminous porcelain skin with a warm translucent subsurface glow, intricate shimmering anime eyes with detailed highlights, soft glossy lips, subtle rosy blush across cheeks, and gentle painterly shading with ethereal glowing rim lighting", sdxl: "(delicate digital anime art:1.15), (luminous skin, glowing rim light:1.15), (intricate sparkling eyes, soft painterly shading:1.1), subtle blush, (voluptuous graceful pinup, glossy lips:1.1), dreamy atmosphere", category: "style" },
      { id: "style_awd_art", label: "AWD Art (AWD!)", danbooru: "thick_outlines, stylized_anime, cartoon_style, cel_shading, clean_coloring, voluptuous, thick_thighs, wide_hips, curvy, big_eyes, animated_look", flux: "rendered in a high-energy stylized 2D cartoon-anime pinup aesthetic, with thick rounded black contour lineart, vibrant clean animation cel shading, bouncy specular highlights, plush curvaceous proportions, thick rounded thighs, shapely hips, and expressive lively anime eyes", sdxl: "(stylized cartoon anime pinup:1.2), (thick rounded outlines, clean animation cel shading:1.15), (vibrant colors:1.1), (voluptuous curvy proportions, thick thighs:1.15), lively expressive eyes", category: "style" },
      { id: "style_ravenous_russ", label: "Ravenous Russ", danbooru: "bold_outline, thick_lineart, comic_style, cel_shading, high_contrast, saturated, voluptuous, wide_hips, thick_thighs, hourglass_figure, arched_back, seductive_smirk, digital_media", flux: "rendered in an energetic stylized comic pinup art style with confident heavy black ink outlines, dynamic line weight, punchy saturated pop colors, crisp two-tone comic cel shading with glossy specular sheen, exaggerated feminine curves, thick thighs, wide shapely hips", sdxl: "(bold comic pinup illustration:1.2), (heavy black outlines, expressive comic inking:1.15), (dynamic cel shading, saturated pop colors:1.1), (exaggerated voluptuous curves, wide hips, thick thighs:1.15)", category: "style" },
      { id: "style_digital_art_anime", label: "Digital Art Anime (Collector Visual)", danbooru: "source_anime, anime_coloring, clean_lineart, detailed_eyes, detailed_hair, highres, vibrant_colors, cel_shading, multi_layered_shading, hourglass_figure, dynamic_angle", flux: "rendered as an exquisite high-end Japanese anime key visual digital illustration, featuring razor-sharp clean linework, multi-layer gradient cel shading with crisp shadow edges, vibrant cinematic coloring, intricate glossy highlights on flowing hair strands, luminous skin tones, and detailed captivating eyes", sdxl: "japanese anime key visual, clean razor lineart, multi-layer cel shading, vibrant anime coloring, detailed glowing eyes, flowing glossy hair, voluptuous mature female pinup", category: "style" },
      { id: "style_western_anime_inspired", label: "Western Anime Inspired", danbooru: "western_anime, stylized, bold_outline, sharp_lines, graphic_style, dynamic_pose, athletic_female, voluptuous, long_legs, hourglass_figure, arched_back, confident_smile", flux: "rendered in a striking western-anime hybrid pinup illustration style, fusing bold geometric comic inking with sleek modern anime aesthetics, crisp dynamic contour lines, punchy graphic color blocking with intense rim light highlights, statuesque adult woman, athletic hourglass curves", sdxl: "(western anime fusion pinup:1.15), (bold geometric inking, graphic comic style:1.15), dynamic angles, (intense rim lighting:1.1), statuesque voluptuous curves, long legs, stylized graphic art", category: "style" },
      { id: "elvgren_cheesecake", label: "1950s Cheesecake Pinup (Gil Elvgren)", danbooru: "cheesecake_(art), 1950s_pinup, retro_artstyle, traditional_media, painted_style, oil_painting_(medium), vintage, voluptuous", flux: "rendered in a classic 1950s American cheesecake pinup painting aesthetic, traditional painterly gouache brushwork on canvas, warm creamy skin tones, soft diffused studio key lighting, playful caught-in-the-act pose, rich vintage glamour", sdxl: "1950s cheesecake pinup art, traditional gouache painting, alberto vargas style, vintage glamour illustration, warm creamy tones, voluptuous curves", category: "style" },
      { id: "sorayama_chrome", label: "Cyber Chrome Pinup (Hajime Sorayama)", danbooru: "metallic_skin, chrome, retro_futurism, 1980s_(style), airbrush, glowing_reflections, voluptuous, metallic", flux: "rendered in a legendary 1980s retro-futuristic chrome pinup aesthetic, ultra-polished liquid metal mirror reflections, razor-sharp specular highlights, sculpted feminine anatomy, luminous airbrushed glow, sleek sci-fi glamour", sdxl: "retro-futuristic chrome pinup, liquid metal mirror reflections, airbrushed metallic shine, 1980s sci-fi aesthetic, voluptuous curves", category: "style" },
      { id: "pulp_noir_pinup", label: "Vintage Pulp Fiction Cover Pinup", danbooru: "pulp_art, retro, vintage, dramatic_lighting, 1940s, femme_fatale, voluptuous, high_contrast", flux: "rendered in a dramatic 1940s vintage pulp fiction magazine cover illustration aesthetic, bold painterly gouache strokes, seductive adult femme fatale in a plunging backless dress, rich noir chiaroscuro shadows", sdxl: "pulp fiction cover art, retro 1940s pinup, vintage gouache painting, dramatic chiaroscuro, femme fatale, voluptuous", category: "style" }
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
      pattern: /\b(bunny girl|playboy bunny|bunny suit)\b/gi,
      flux: "an adult woman in a glossy satin black bunny suit with rabbit ears, bow tie, and fishnet stockings",
      pony: "1woman, bunny_suit, playboy_bunny, fishnets, collar, cuffs, rabbit_ears",
      sdxl: "1woman, adult playboy bunny suit, fishnet stockings, rabbit ears, high heels",
      midjourney: "glamorous adult bunny girl in glossy satin bunny suit and fishnets"
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
      flux: "a voluptuous hourglass silhouette with generous cleavage, a shapely waist, thick thighs, and wide rounded hips",
      pony: "voluptuous, hourglass_figure, wide_hips, thick_thighs, cleavage",
      sdxl: "voluptuous hourglass figure, wide hips, thick thighs, feminine curves, cleavage",
      midjourney: "voluptuous feminine hourglass figure with wide hips, thick thighs, and shapely curves"
    },
    {
      pattern: /\b(?:large\s+)?natural\s+breasts\b/gi,
      flux: "large shapely natural breasts and prominent alluring cleavage",
      pony: "large_breasts, natural_breasts, cleavage",
      sdxl: "large natural breasts, alluring cleavage, deep décolletage",
      midjourney: "large natural breasts and deep alluring cleavage"
    },
    {
      pattern: /\b(cleavage|boobs|busty|breasts)\b/gi,
      flux: "prominent alluring cleavage and elegant bare décolletage",
      pony: "cleavage, bare_shoulders, large_breasts",
      sdxl: "alluring cleavage, bare décolletage, feminine curves",
      midjourney: "alluring cleavage and bare décolletage"
    },
    {
      pattern: /\b(legs|thighs)\b/i,
      flux: "long shapely toned legs",
      pony: "long_legs, toned_thighs",
      sdxl: "long shapely legs, toned thighs",
      midjourney: "long shapely toned legs"
    },
    {
      pattern: /\b(stockings|thighhighs|heels|high heels|stilettos)\b/i,
      flux: "sheer silk thighhigh stockings and tall pointed stiletto high heels",
      pony: "thighhighs, high_heels, stockings",
      sdxl: "silk thighhigh stockings, high stiletto heels",
      midjourney: "sheer thighhigh stockings and pointed stiletto heels"
    },

    // 3. Seductive Gaze & Expressions
    {
      pattern: /\b(?:arms\s+)?relaxed\s+behind\s+head\b/gi,
      flux: "arms gracefully relaxed behind her head accentuating feminine posture",
      pony: "arms_behind_head, relaxed",
      sdxl: "arms behind head, relaxed posture, seductive arch",
      midjourney: "arms relaxed behind head, arched back"
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

    // 4. Quality & Lighting Swaps
    {
      pattern: /\b(nice|good|cool|awesome|great)\s+lighting\b/i,
      flux: "intimate warm amber candlelight and subtle sensual rim highlights tracing feminine curves",
      pony: "candlelight, warm_lighting, rim_light, soft_shadows",
      sdxl: "warm boudoir lighting, intimate candlelight, golden rim light, soft shadows",
      midjourney: "intimate warm boudoir lighting with soft golden rim highlights"
    },
    {
      pattern: /\b(nice|pretty|beautiful|good)\s+background\b/i,
      flux: "an opulent satin-draped luxury boudoir bedroom with romantic canopied bed and soft candlelight",
      pony: "boudoir, bedroom, bed, silk_sheets, pillows, indoor",
      sdxl: "luxury boudoir, silk sheets, soft canopy bed, romantic indoor ambiance",
      midjourney: "luxurious satin-draped boudoir bedroom background"
    },
    {
      pattern: /\bwhite\s+background\b/gi,
      flux: "against a clean solid white studio backdrop",
      pony: "white_background, simple_background",
      sdxl: "white background, clean simple background",
      midjourney: "clean white background"
    },
    {
      pattern: /\b(masterpiece|best quality|top quality|4k|8k|ultra hd)\b/i,
      flux: "", // Strip for Flux
      pony: "score_9, score_8_up, score_7_up",
      sdxl: "masterpiece, adult pinup, clean lineart",
      midjourney: ""
    },

    // 5. Artist Name to Descriptive Style Swaps (For models not trained on these artists)
    {
      pattern: /\b(?:style of\s+)?(?:xpi[\s_-]?sigma(?:[\s_-]?art)?|xpisigma)\b/i,
      flux: "rendered in an expressive 2D anime pinup illustration art style with subtle classic animation flair, featuring bold clean black outlines, vibrant saturated colors, smooth clean digital cel-shading with crisp specular highlights and soft blushing cheeks, showcasing a voluptuous, full-figured adult woman with curvaceous feminine proportions, thick thighs, wide rounded curvy hips, a natural shapely waist, full bust, voluminous stylized hair with sharp angular locks, and large captivating expressive anime eyes with delicate winged eyeliner, finished with crisp clean vector anime lineart and polished cel-shading",
      pony: "thick_outlines, bold_outline, clean_lineart, vibrant_colors, cel_shading, simple_shading, specular_highlight, blush, large_eyes, expressive_eyes, detailed_eyes, eyeliner, voluptuous, curvy, wide_hips, thick_thighs, hourglass_figure, full_body, source_anime, anime_coloring, 1woman, mature_female, adult, pinup, contact_shadow, white_background",
      sdxl: "(expressive anime pinup illustration with subtle animation flair:1.2), (bold clean black outlines, crisp anime linework:1.15), (smooth cel shading, crisp specular highlights, soft cheek blush:1.15), (voluptuous curvy full-figured proportions, wide rounded hips, thick thighs, shapely waist:1.2), (voluminous hair with sharp angular locks, large expressive anime eyes, winged eyeliner:1.15), vibrant saturated colors, 2d anime key visual, soft contact shadow, clean white background",
      midjourney: "expressive 2D anime pinup illustration with subtle animation flair, bold clean black outlines, smooth cel shading, crisp specular highlights, soft rosy blush, voluptuous curvy full-figured silhouette, wide rounded hips, thick thighs, shapely waist, voluminous hair with sharp angular locks, large expressive anime eyes, winged eyeliner, clean white background --ar 16:9 --niji 6 --style expressive",
      reason: "Decomposed 'XPI Sigma Art' into expressive 2D anime pinup style with subtle animation flair, voluptuous full-figured curves, wide rounded hips, thick thighs, sharp angular hair locks, crisp specular highlights, and clean black outlines"
    },
    {
      pattern: /\b(?:style of\s+)?(?:ravenous[\s_-]?russ|russ frey)\b/i,
      flux: "energetic stylized comic pinup art style with confident heavy black ink outlines, dynamic line weight, punchy saturated pop colors, crisp two-tone comic cel shading with glossy specular sheen, exaggerated feminine curves, thick thighs, wide shapely hips",
      pony: "bold_outline, thick_lineart, comic_style, cel_shading, high_contrast, saturated, voluptuous, wide_hips, thick_thighs, hourglass_figure, arched_back, seductive_smirk, digital_media",
      sdxl: "(bold comic pinup illustration:1.2), (heavy black outlines, expressive comic inking:1.15), (dynamic cel shading, saturated pop colors:1.1), (exaggerated voluptuous curves, wide hips, thick thighs:1.15)",
      midjourney: "dynamic cartoon pinup illustration, bold heavy black ink outlines, vibrant pop colors, high contrast cel shading, voluptuous exaggerated hourglass curves, thick thighs",
      reason: "Decomposed 'Ravenous Russ' into bold comic inking, pop coloring, and curvy anatomy descriptors"
    },
    {
      pattern: /\b(?:style of\s+)?(?:awd!?|awd[\s_-]?art|andrew[\s_-]?dickman)\b/i,
      flux: "high-energy stylized 2D cartoon-anime pinup aesthetic, thick rounded black contour lineart, vibrant clean animation cel shading, bouncy specular highlights, plush curvaceous proportions, thick rounded thighs, shapely hips, and expressive lively anime eyes",
      pony: "thick_outlines, stylized_anime, cartoon_style, cel_shading, clean_coloring, voluptuous, thick_thighs, wide_hips, curvy, big_eyes, animated_look",
      sdxl: "(stylized cartoon anime pinup:1.2), (thick rounded outlines, clean animation cel shading:1.15), (vibrant colors:1.1), (voluptuous curvy proportions, thick thighs:1.15), lively expressive eyes",
      midjourney: "stylized 2D cartoon anime pinup illustration, thick clean outlines, bright animation cel colors, voluptuous curvy silhouette, thick thighs, expressive eyes",
      reason: "Decomposed 'AWD Art' into 2D animation inking, bouncy cel shading, and curvy cartoon descriptors"
    },
    {
      pattern: /\b(?:style of\s+)?(?:xaxaxa|zazaza)\b/i,
      flux: "delicate Japanese digital anime pinup aesthetic, soft refined colored linework, luminous porcelain skin with warm translucent subsurface glow, intricate shimmering anime eyes with detailed highlights, soft glossy lips, subtle rosy blush across cheeks, and gentle painterly shading with ethereal glowing rim lighting",
      pony: "delicate_lineart, soft_shading, luminous_skin, glowing_light, detailed_eyes, bedroom_eyes, glossy_lips, blush, translucent_skin, painterly_anime, voluptuous, graceful_curves",
      sdxl: "(delicate digital anime art:1.15), (luminous skin, glowing rim light:1.15), (intricate sparkling eyes, soft painterly shading:1.1), subtle blush, (voluptuous graceful pinup, glossy lips:1.1), dreamy atmosphere",
      midjourney: "delicate painterly digital anime pinup illustration, luminous translucent skin glow, intricate shimmering eyes, soft warm rim lighting, graceful sensual curves, glossy lips",
      reason: "Decomposed 'xaxaxa' into delicate colored lineart, luminous translucent skin, and painterly anime descriptors"
    },
    {
      pattern: /\b(?:style of\s+)?(?:gil\s+elvgren|elvgren|alberto\s+vargas|vargas)\b/i,
      flux: "classic 1950s American cheesecake pinup painting aesthetic, traditional painterly gouache brushwork on canvas, warm creamy skin tones, soft diffused studio key lighting, playful caught-in-the-act pose, rich vintage glamour",
      pony: "cheesecake_(art), 1950s_pinup, retro_artstyle, traditional_media, painted_style, oil_painting_(medium), vintage, voluptuous",
      sdxl: "1950s cheesecake pinup art, traditional gouache painting, vintage glamour illustration, warm creamy tones, voluptuous curves",
      midjourney: "classic 1950s american cheesecake pinup painting, traditional gouache brushwork, vintage glamour, playful pinup pose",
      reason: "Translated classic pinup painter into traditional gouache and cheesecake brushwork descriptors"
    },
    {
      pattern: /\b(?:style of\s+)?(?:hajime\s+sorayama|sorayama)\b/i,
      flux: "legendary 1980s retro-futuristic chrome pinup aesthetic, ultra-polished liquid metal mirror reflections, razor-sharp specular highlights, sculpted feminine anatomy, luminous airbrushed glow, sleek sci-fi glamour",
      pony: "metallic_skin, chrome, retro_futurism, 1980s_(style), airbrush, glowing_reflections, voluptuous, metallic",
      sdxl: "retro-futuristic chrome pinup, liquid metal mirror reflections, airbrushed metallic shine, 1980s sci-fi aesthetic, voluptuous curves",
      midjourney: "retro-futuristic chrome cyber pinup, liquid metal reflections, airbrushed metallic shine, 1980s sci-fi aesthetic",
      reason: "Translated Sorayama into liquid chrome reflections, airbrush finish, and metallic skin descriptors"
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
    "garter_straps": "sleek garter straps",
    "stockings": "wearing sheer silk stockings",
    "thighhighs": "wearing form-fitting thighhigh stockings",
    "high_heels": "wearing tall pointed stiletto high heels",
    "bikini": "wearing an alluring string bikini",
    "cleavage": "revealing deep elegant cleavage",
    "hourglass_figure": "possessing an exquisite voluptuous hourglass figure",
    "voluptuous": "with full sensual feminine curves",
    "wide_hips": "featuring wide rounded hips and shapely curves",
    "very_wide_hips": "very wide curvy feminine hips",
    "large_natural_breasts": "large natural breasts and alluring cleavage",
    "green_eyes": "captivating vibrant green eyes",
    "short_blonde_wavy_hair": "short wavy blonde hair sculpted into sharp angular locks",
    "blonde_to_pink_gradient_hair": "blonde hair with vibrant hot-pink gradient tips",
    "gradient_hair": "dynamic gradient hair with colorful tips",
    "eyeliner": "delicate winged black eyeliner and subtle cheek-and-nose blush",
    "booty_shorts": "black form-fitting booty shorts",
    "black_booty_shorts": "black form-fitting booty shorts",
    "spaghetti_strap": "a black spaghetti strap tank top",
    "tank_top": "a tank top",
    "black_spaghetti_strap_tank_top": "a black spaghetti strap tank top",
    "purple_thigh_highs": "purple thighhigh stockings",
    "thigh_highs": "thighhigh stockings",
    "black_thong": "a black thong",
    "thong": "a thong",
    "black_heel_boots": "tall black high-heeled boots",
    "heel_boots": "high-heeled boots",
    "arms_behind_head": "with arms gracefully relaxed behind her head",
    "arms_relaxed_behind_head": "with arms gracefully relaxed behind her head",
    "white_background": "a clean solid white studio backdrop with a soft subtle floor contact shadow",
    "simple_background": "a clean simple background",
    "seductive_smile": "with a tantalizing seductive smile",
    "biting_lip": "gently biting her lower lip with playful allure",
    "arched_back": "with an elegantly arched back accentuating her silhouette",
    "reclining": "luxuriously reclining on her side",
    "boudoir": "within an intimate silk-sheeted boudoir",
    "kneeling": "in an alluring kneeling pose with legs tucked and feet pointed",
    "kneeling_pose": "in an alluring kneeling pinup pose",
    "eyeshadow": "vibrant colorful eyeshadow",
    "purple_eyeshadow": "vibrant purple eyeshadow",
    "graphic_circle_backdrop": "a clean solid white studio backdrop accented by a warm minimalist pastel circular graphic halo",
    "circle_backdrop": "a minimalist pastel circular graphic backdrop",
    "retro_pinup": "rendered in the timeless 1950s painted cheesecake pinup style",
    "cheesecake_(art)": "in the iconic American painted cheesecake art tradition",
    "femme_fatale": "exuding dangerous noir femme fatale magnetism"
  };

  const INTENT_PRESETS = [
    {
      id: "style_xpi_sigma",
      name: "Style of XPI Sigma Art",
      shortDesc: "Expressive 2D anime pinup, subtle animation flair, voluptuous full-figured curves, wide hips & thick thighs, sharp hair locks, clean cel shading & blush",
      description: "Recreates XPI Sigma's signature aesthetic: an expressive 2D anime pinup style with subtle classic animation flair, voluptuous full-figured proportions (wide rounded hips, thick thighs, natural shapely waist, full bust), voluminous stylized hair with sharp angular locks, large expressive anime eyes with delicate winged eyeliner, smooth clean cel-shading, crisp specular highlights, and bold clean outlines.",
      fluxAdditions: "rendered in an expressive 2D anime pinup illustration art style with subtle classic animation flair, featuring bold clean black outlines, vibrant saturated colors, smooth clean digital cel-shading with crisp specular highlights and soft blushing cheeks, showcasing a voluptuous, full-figured adult woman with curvaceous feminine proportions, thick thighs, wide rounded curvy hips, a natural shapely waist, full bust, voluminous stylized hair with sharp angular locks, and large captivating expressive anime eyes with delicate winged eyeliner, finished with crisp clean vector anime lineart and polished cel-shading",
      ponyAdditions: "thick_outlines, bold_outline, clean_lineart, vibrant_colors, cel_shading, simple_shading, specular_highlight, blush, large_eyes, expressive_eyes, detailed_eyes, eyeliner, voluptuous, curvy, wide_hips, thick_thighs, hourglass_figure, full_body, source_anime, anime_coloring, 1woman, mature_female, adult, pinup, contact_shadow, white_background",
      sdxlAdditions: "(expressive anime pinup illustration with subtle animation flair:1.2), (bold clean black outlines, crisp anime linework:1.15), (smooth cel shading, crisp specular highlights, soft cheek blush:1.15), (voluptuous curvy full-figured proportions, wide rounded hips, thick thighs, shapely waist:1.2), (voluminous hair with sharp angular locks, large expressive anime eyes, winged eyeliner:1.15), vibrant saturated colors, 2d anime key visual, soft contact shadow, clean white background",
      mjAdditions: "expressive 2D anime pinup illustration with subtle animation flair, bold clean black outlines, smooth cel shading, crisp specular highlights, soft rosy blush, voluptuous curvy full-figured silhouette, wide rounded hips, thick thighs, shapely waist, voluminous hair with sharp angular locks, large expressive anime eyes, winged eyeliner, clean white background --ar 16:9 --niji 6 --style expressive"
    },
    {
      id: "style_ravenous_russ",
      name: "Ravenous Russ",
      shortDesc: "Bold comic inking, dynamic cel shading, pop colors, exaggerated curves",
      description: "Recreates the Ravenous Russ aesthetic through visual attributes: bold heavy black comic ink outlines, punchy pop colors, dynamic two-tone cel shading, and exaggerated curvy anatomy with wide hips and thick thighs.",
      fluxAdditions: "rendered in an energetic stylized comic pinup art style with confident heavy black ink outlines, dynamic line weight, punchy saturated pop colors, crisp two-tone comic cel shading with glossy specular sheen, featuring a voluptuous adult woman with exaggerated feminine curves, thick thighs, wide shapely hips, and a playful seductive smirk",
      ponyAdditions: "bold_outline, thick_lineart, comic_style, cel_shading, high_contrast, saturated, voluptuous, wide_hips, thick_thighs, hourglass_figure, arched_back, seductive_smirk, expressive_eyes, digital_media",
      sdxlAdditions: "(bold comic pinup illustration:1.2), (heavy black outlines, expressive comic inking:1.15), (dynamic cel shading, saturated pop colors:1.1), (exaggerated voluptuous curves, wide hips, thick thighs:1.15), energetic pinup pose, seductive smirk",
      mjAdditions: "dynamic comic cartoon pinup illustration, bold heavy black ink outlines, vibrant pop colors, high contrast cel shading, voluptuous exaggerated hourglass curves, thick thighs, confident pinup pose --ar 16:9 --niji 6 --style expressive"
    },
    {
      id: "style_awd_art",
      name: "AWD Art (AWD!)",
      shortDesc: "Thick cartoon outlines, clean animation cel shading, plush curvy proportions",
      description: "Recreates the AWD (Andrew Dickman) style through structural descriptors: thick rounded contour lineart, clean animation cel shading, bouncy highlights, and plush curvaceous proportions with thick thighs and expressive eyes.",
      fluxAdditions: "rendered in a high-energy stylized 2D cartoon-anime pinup aesthetic, with thick rounded black contour lineart, vibrant clean animation cel shading, bouncy specular highlights, featuring an alluring adult woman with plush curvaceous proportions, thick rounded thighs, shapely hips, and expressive lively anime eyes",
      ponyAdditions: "thick_outlines, stylized_anime, cartoon_style, cel_shading, clean_coloring, voluptuous, thick_thighs, wide_hips, curvy, expressive_face, big_eyes, animated_look",
      sdxlAdditions: "(stylized cartoon anime pinup:1.2), (thick rounded outlines, clean animation cel shading:1.15), (vibrant colors:1.1), (voluptuous curvy proportions, thick thighs:1.15), lively expressive eyes, 2d animation art",
      mjAdditions: "stylized 2D cartoon anime pinup illustration, thick clean outlines, bright animation cel colors, voluptuous curvy silhouette, thick thighs, expressive eyes --ar 16:9 --niji 6 --style expressive"
    },
    {
      id: "style_xaxaxa",
      name: "Style of xaxaxa",
      shortDesc: "Delicate colored lineart, luminous translucent skin, shimmering anime eyes",
      description: "Recreates the xaxaxa aesthetic through rendering traits: delicate fine colored linework, luminous porcelain skin with warm translucent glow, soft romantic lighting, shimmering eye iris highlights, and soft glossy lips.",
      fluxAdditions: "rendered in a delicate Japanese digital anime pinup aesthetic, featuring soft refined colored linework, luminous porcelain skin with a warm translucent subsurface glow, intricate shimmering anime eyes with detailed highlights, soft glossy lips, subtle rosy blush across cheeks, and gentle painterly shading with ethereal glowing rim lighting, showcasing an alluring adult woman with graceful sensual curves",
      ponyAdditions: "delicate_lineart, soft_shading, luminous_skin, glowing_light, detailed_eyes, bedroom_eyes, glossy_lips, blush, translucent_skin, painterly_anime, voluptuous, graceful_curves, romantic_atmosphere",
      sdxlAdditions: "(delicate digital anime art:1.15), (luminous skin, glowing rim light:1.15), (intricate sparkling eyes, soft painterly shading:1.1), subtle blush, (voluptuous graceful pinup, glossy lips:1.1), dreamy atmosphere",
      mjAdditions: "delicate painterly digital anime pinup illustration, luminous translucent skin glow, intricate shimmering eyes, soft warm rim lighting, graceful sensual curves, glossy lips --ar 16:9 --niji 6 --style expressive"
    },
    {
      id: "style_digital_art_anime",
      name: "Digital Art Anime (Collector Visual)",
      shortDesc: "Razor-clean vector lineart, multi-layer cel shading, key visual finish",
      description: "Modern high-end Japanese anime key visual illustration with ultra-sharp vector linework, multi-layer gradient cel shading, and glossy specular hair highlights.",
      fluxAdditions: "rendered as an exquisite high-end Japanese anime key visual digital illustration, featuring razor-sharp clean linework, multi-layer gradient cel shading with crisp shadow edges, vibrant cinematic coloring, intricate glossy highlights on flowing hair strands, luminous skin tones, and detailed captivating eyes, showcasing an alluring mature anime woman with sculpted hourglass curves and regal pinup poise",
      ponyAdditions: "source_anime, anime_coloring, clean_lineart, detailed_eyes, detailed_hair, highres, vibrant_colors, cel_shading, multi_layered_shading, hourglass_figure, dynamic_angle",
      sdxlAdditions: "japanese anime key visual, clean razor lineart, multi-layer cel shading, vibrant anime coloring, detailed glowing eyes, flowing glossy hair, voluptuous mature female pinup, masterpiece",
      mjAdditions: "high-end Japanese anime digital illustration key visual, sharp clean linework, vibrant multi-layered cel shading, glossy hair highlights, mature anime pinup --ar 16:9 --niji 6 --style expressive"
    },
    {
      id: "style_western_anime_inspired",
      name: "Western Anime Inspired",
      shortDesc: "Bold geometric inking, sharp rim lighting, statuesque hourglass curves",
      description: "Dynamic fusion of Western comic geometry and Japanese anime aesthetics: bold stylized contours, punchy graphic color blocking, intense rim lighting, and athletic hourglass curves.",
      fluxAdditions: "rendered in a striking western-anime hybrid pinup illustration style, fusing bold geometric comic inking with sleek modern anime aesthetics, crisp dynamic contour lines, punchy graphic color blocking with intense rim light highlights, featuring a statuesque adult woman with exaggerated athletic hourglass curves, long shapely legs, and a confident seductive gaze",
      ponyAdditions: "western_anime, stylized, bold_outline, sharp_lines, graphic_style, dynamic_pose, athletic_female, voluptuous, long_legs, hourglass_figure, arched_back, confident_smile",
      sdxlAdditions: "(western anime fusion pinup:1.15), (bold geometric inking, graphic comic style:1.15), dynamic angles, (intense rim lighting:1.1), statuesque voluptuous curves, long legs, stylized graphic art",
      mjAdditions: "western anime fusion pinup illustration, bold geometric contour linework, graphic comic coloring, intense rim lighting, statuesque hourglass curves, dynamic pose --ar 16:9 --niji 6 --style expressive"
    },
    {
      id: "elvgren_cheesecake",
      name: "1950s Gil Elvgren Cheesecake Pinup",
      shortDesc: "Traditional gouache brushwork, creamy skin tones, vintage glamour",
      description: "Classic American painted cheesecake pinup in the tradition of Gil Elvgren and Alberto Vargas, with painterly gouache brushwork, warm creamy tones, and playful charm.",
      fluxAdditions: "rendered in a classic 1950s American cheesecake pinup painting aesthetic, traditional painterly gouache brushwork on canvas, warm creamy skin tones, soft diffused studio key lighting, playful caught-in-the-act pose, rich vintage glamour",
      ponyAdditions: "cheesecake_(art), 1950s_pinup, retro_artstyle, traditional_media, painted_style, oil_painting_(medium), vintage, voluptuous",
      sdxlAdditions: "1950s cheesecake pinup art, traditional gouache painting, alberto vargas style, vintage glamour illustration, warm creamy tones, voluptuous curves",
      mjAdditions: "classic 1950s american cheesecake pinup painting, traditional gouache brushwork, vintage glamour, playful pinup pose --ar 4:5 --niji 6 --style original"
    },
    {
      id: "bunny_girl_glamour",
      name: "Playboy Bunny Girl Pinup (Glossy Satin)",
      shortDesc: "Glossy black satin bunny suit, fishnets, stiletto heels, confident allure",
      description: "Confident adult bunny girl pinup in a glossy black satin suit, sheer fishnet stockings, satin bunny ears, white collar and cuffs, and pointed stiletto heels.",
      fluxAdditions: "featuring a glamorous adult bunny girl pinup, glossy black satin bunny suit, sheer fishnet tights, satin rabbit ears, white collar and cuffs, pointed stiletto high heels, confident alluring bedroom gaze, and soft sensual rim lighting",
      ponyAdditions: "bunny_suit, playboy_bunny, fishnets, high_heels, collar, cuffs, rabbit_ears, voluptuous, hourglass_figure, arched_back",
      sdxlAdditions: "playboy bunny suit, fishnet stockings, rabbit ears, high stiletto heels, adult glamour pinup, voluptuous curves",
      mjAdditions: "glamorous adult bunny girl pinup in glossy black satin suit and fishnets, pointed stiletto heels, confident alluring gaze --ar 16:9 --niji 6 --style expressive"
    },
    {
      id: "boudoir_lingerie",
      name: "Sultry Boudoir Lingerie & Silk",
      shortDesc: "Sheer black lace lingerie, garter belt, silk stockings, warm candlelight",
      description: "Intimate boudoir bedroom setting with sheer black lace lingerie, matching garter straps, silk stockings, reclining on satin sheets under warm candlelight.",
      fluxAdditions: "an intimate sultry boudoir pinup, sheer black lace lingerie, matching garter straps, sheer silk stockings, reclining on an opulent satin-sheeted canopy bed, warm ambient candlelight, seductive mood",
      ponyAdditions: "lingerie, lace, negligee, garter_straps, stockings, sheer, boudoir, bed, voluptuous, bedroom_eyes",
      sdxlAdditions: "sheer lace lingerie, garter belt, silk stockings, boudoir pinup, canopy bed, warm candlelight, voluptuous curves",
      mjAdditions: "intimate sultry boudoir pinup, sheer black lace lingerie and garter stockings, satin bed, warm candlelight --ar 16:9 --niji 6 --stylize 200"
    },
    {
      id: "sorayama_chrome_pinup",
      name: "Hajime Sorayama Chrome Cyber Pinup",
      shortDesc: "Liquid metallic chrome, mirror reflections, airbrushed 80s sci-fi sheen",
      description: "Iconic 1980s retro-futuristic chrome pinup with liquid metal mirror reflections, razor-sharp specular highlights, and airbrushed shine.",
      fluxAdditions: "rendered in a legendary 1980s retro-futuristic chrome pinup aesthetic, ultra-polished liquid metal mirror reflections, razor-sharp specular highlights, sculpted feminine anatomy, luminous airbrushed glow, sleek sci-fi glamour",
      ponyAdditions: "metallic_skin, chrome, retro_futurism, 1980s_(style), airbrush, glowing_reflections, voluptuous, metallic",
      sdxlAdditions: "retro-futuristic chrome pinup, liquid metal mirror reflections, airbrushed metallic shine, 1980s sci-fi aesthetic, voluptuous curves",
      mjAdditions: "retro-futuristic chrome cyber pinup, liquid metal reflections, airbrushed metallic shine, 1980s sci-fi aesthetic --ar 16:9 --niji 6 --style expressive"
    },
    {
      id: "pulp_noir_femme_fatale",
      name: "Retro Pulp Fiction Femme Fatale (1940s)",
      shortDesc: "1940s vintage pulp cover, dramatic chiaroscuro shadows, plunging gown",
      description: "Vintage 1940s pulp magazine cover illustration with dramatic chiaroscuro shadows, plunging backless dress, and dangerous femme fatale allure.",
      fluxAdditions: "rendered in a dramatic 1940s vintage pulp fiction magazine cover illustration aesthetic, bold painterly gouache strokes, seductive adult femme fatale in a plunging backless dress, rich noir chiaroscuro shadows",
      ponyAdditions: "pulp_art, retro, vintage, dramatic_lighting, 1940s, femme_fatale, voluptuous, high_contrast",
      sdxlAdditions: "pulp fiction cover art, retro 1940s pinup, vintage gouache painting, dramatic chiaroscuro, femme fatale, voluptuous",
      mjAdditions: "vintage 1940s pulp fiction cover illustration, bold gouache strokes, dramatic chiaroscuro shadows, plunging backless dress, femme fatale --ar 2:3 --niji 6 --style raw"
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

      // 0. Strip Unicode emoji codes (e.g., U1F51E, U+1F51E), hex entities, emoji glyphs, and safety tags
      text = text
        .replace(/\bU\+?[0-9A-Fa-f]{4,6}\b/gi, "")
        .replace(/\\u\{?[0-9a-fA-F]{4,6}\}?/gi, "")
        .replace(/&#x?[0-9a-zA-Z]+;/gi, "")
        .replace(/\p{Extended_Pictographic}/gu, "")
        .replace(/[:[\]{}|\\^~]/g, " ")
        .replace(/,\s*,+/g, ", ")
        .replace(/\s+/g, " ")
        .trim();

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

      // 4. Tokenize, filter, and categorize each unit
      const tokens = rawUnits
        .map((unit, index) => this._classifyToken(unit, index))
        .filter(t => t.clean && t.clean.length > 0 && !/^u\+?[0-9a-f]{4,6}$/i.test(t.clean));

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
      } else if (/^(1girl|1woman|1boy|1man|girl|woman|female|mature_female|adult|pinup|solo|model|couple|group|2girls|multiple_girls)$/i.test(booruNormalized)) {
        category = "subject_count";
      } else if (/(pose|smile|smirk|arched_back|arms_behind_head|relaxed|looking_|bedroom_eyes|reclining|biting_lip|sitting|standing)/i.test(booruNormalized)) {
        category = "expression_pose";
      } else if (/(eyes|hair|skin|face|body|freckles|breasts|cleavage|thighs|legs|curves|hourglass|waist|hips|eyeliner)/i.test(booruNormalized)) {
        category = "physical_traits";
      } else if (/(bunny_suit|lingerie|bikini|dress|gown|stockings|thighhighs|thigh_highs|heels|fishnets|garter|straps?|robe|corset|shorts|booty_shorts|top|tank_top|boots|heel_boots|thong|suit|gloves|skirt|shirt)/i.test(booruNormalized)) {
        category = "clothing";
      } else if (/(background|backdrop|indoors|outdoors|city|street|forest|sunset|poolside|boudoir|white_background|simple_background|(?:^|_)(?:bedroom|room|living_room)(?:_|$))/i.test(booruNormalized)) {
        category = "environment";
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
      if (/(pinup|cheesecake|elvgren|sorayama|pulp|retro|illustration|anime_coloring|style|artist|lineart|linework|cel|shading|xpi|sigma|ravenous|russ|awd|xaxaxa)/i.test(tag)) return "style_medium";
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
            if (swap.pattern) swap.pattern.lastIndex = 0;
            if (swap.pattern.test(currentVal)) {
              const replacement = swap[targetModelId] !== undefined ? swap[targetModelId] : (swap.sdxl || "");
              if (replacement !== currentVal) {
                swapsApplied.push({
                  original: currentVal,
                  replacedWith: replacement || "[stripped for model]",
                  reason: swap.reason || `Optimized for ${profile.name} (Adult Pinup)`
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

      // 3. Resolve Preset (if chosen)
      let selectedPreset = null;
      if (options.intentPresetId) {
        selectedPreset = INTENT_PRESETS.find(p => p.id === options.intentPresetId) || null;
      }

      // 4. Model-Specific Formatting & Ordering
      switch (targetModelId) {
        case "flux":
        case "perchance":
          positiveResult = this._formatFluxProse(processedTokens, parsed.isProse, parsed.raw, options, selectedPreset);
          break;

        case "pony":
          positiveResult = this._formatPonyHierarchy(processedTokens, options, selectedPreset);
          break;

        case "sdxl":
        case "sd15":
          positiveResult = this._formatSdxlWeighted(processedTokens, targetModelId, options, selectedPreset);
          break;

        case "midjourney":
          positiveResult = this._formatMidjourney(processedTokens, options, selectedPreset);
          break;

        default:
          positiveResult = processedTokens.map(t => t.value).join(", ");
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

    /**
     * Format for Flux (Coherent, Impactful Natural Language Story Prose)
     */
    static _formatFluxProse(tokens, wasOriginalProse, rawText, options, selectedPreset) {
      // If input was already long prose, clean buzzwords and inject preset if chosen
      if (wasOriginalProse && tokens.length <= 4) {
        let prose = rawText;
        MODEL_PROFILES.flux.stripWords.forEach(w => {
          const re = new RegExp(`\\b${w}\\b,?\\s*`, "gi");
          prose = prose.replace(re, "");
        });
        // Strip unicode/hex noise
        prose = prose
          .replace(/\bU\+?[0-9A-Fa-f]{4,6}\b/gi, "")
          .replace(/\\u\{?[0-9a-fA-F]{4,6}\}?/gi, "")
          .replace(/\p{Extended_Pictographic}/gu, "")
          .replace(/_([a-z0-9])/gi, " $1");
        if (selectedPreset) {
          prose = `${selectedPreset.fluxAdditions}. ${prose}`;
        }
        return prose.replace(/\s+/g, " ").trim();
      }

      const groups = {
        subject_count: [],
        physical_traits: [],
        clothing: [],
        expression_pose: [],
        environment: [],
        lighting_camera: [],
        style_medium: [],
        general: []
      };

      tokens.forEach(t => {
        let tagVal = t.value.toLowerCase().replace(/\s+/g, "_");
        let readable = BOORU_TO_PROSE[tagVal] || t.value.replace(/_/g, " ");
        readable = readable.trim();
        if (!readable) return;
        // Strip stray unicode codes
        readable = readable.replace(/\bU\+?[0-9A-Fa-f]{4,6}\b/gi, "").trim();
        if (!readable) return;

        const cat = groups[t.category] ? t.category : "general";

        // Deduplicate within the group
        const isDup = groups[cat].some(existing => 
          existing.toLowerCase() === readable.toLowerCase() ||
          (existing.length > 20 && readable.length > 20 && (existing.includes(readable) || readable.includes(existing)))
        );
        if (!isDup) {
          groups[cat].push(readable);
        }
      });

      const sentences = [];

      // --- 1. Subject Resolution (Zero Stuttering & Single Anchor Selection) ---
      const validSubjectTokens = groups.subject_count.filter(s => {
        const sLower = s.toLowerCase();
        // Ensure clothing or body parts aren't mistakenly chosen as subject
        if (/(?:garter|straps?|boots|shorts|tank_top|tank top|thong|stockings|thighhighs|thigh highs|cleavage|breasts|hips)/i.test(sLower)) return false;
        return true;
      });

      let chosenSubject = "an alluring adult woman";
      if (validSubjectTokens.length > 0) {
        const sorted = [...validSubjectTokens].sort((a, b) => b.length - a.length);
        chosenSubject = sorted[0];
      }
      chosenSubject = chosenSubject.replace(/\s+/g, " ").trim();

      // --- 2. Physical Traits Resolution ---
      // Strip leading prepositions, remove traits already present in chosenSubject or preset style
      let cleanPhys = groups.physical_traits
        .map(p => p.replace(/^(?:with|featuring|having|possessing)\s+/i, "").trim())
        .filter(p => {
          const pLower = p.toLowerCase();
          if (chosenSubject.toLowerCase().includes(pLower)) return false;
          if (selectedPreset && (pLower.includes("hourglass") || pLower.includes("curvy")) && selectedPreset.fluxAdditions.toLowerCase().includes("hourglass")) {
            return false;
          }
          return p.length > 0;
        });
      cleanPhys = cleanPhys.filter((item, idx) => cleanPhys.indexOf(item) === idx);

      let physPhrase = cleanPhys.length > 0 ? `, with ${cleanPhys.join(", ")}` : "";

      // --- 3. Style / Art Direction Phrase ---
      let stylePhrase = selectedPreset 
        ? selectedPreset.fluxAdditions 
        : (groups.style_medium.length > 0
            ? groups.style_medium.join(", ")
            : "rendered in an exquisite stylized adult pinup illustration aesthetic with crisp vector linework and clean cel shading");

      let styleSentencePart = "";
      if (stylePhrase.match(/^(?:rendered in|rendered as|featuring|in an?)\b/i)) {
        styleSentencePart = stylePhrase;
      } else {
        styleSentencePart = `rendered in ${stylePhrase}`;
      }

      sentences.push(`An alluring adult pinup illustration of ${chosenSubject}${physPhrase}, ${styleSentencePart}.`);

      // --- 4. Pose & Expression Phrasing (Prevent "with posing with", join multiple poses smoothly) ---
      let cleanPoses = groups.expression_pose
        .map(p => p.replace(/^(?:strikes? a seductive pose with|strikes? an alluring pose with|strikes? a pose with|striking a pose with|posing with|posing in|striking|with)\s+/i, "").trim())
        .filter(p => p.length > 0);
      
      cleanPoses = cleanPoses.filter((item, idx) => cleanPoses.indexOf(item) === idx);
      let cleanPose = "an alluring arched back pose emphasizing feminine curves";
      if (cleanPoses.length === 1) {
        cleanPose = cleanPoses[0];
      } else if (cleanPoses.length === 2) {
        cleanPose = `${cleanPoses[0]} and ${cleanPoses[1]}`;
      } else if (cleanPoses.length > 2) {
        cleanPose = `${cleanPoses.slice(0, -1).join(", ")}, and ${cleanPoses[cleanPoses.length - 1]}`;
      }

      // --- 5. Attire Integration (Prevent "dressed in legs" or repeating subject costume) ---
      let cleanAttireList = groups.clothing
        .map(c => c.replace(/^(?:dressed in|wearing|clad in|in)\s+/i, "").trim())
        .filter(c => {
          const cLower = c.toLowerCase();
          // Never include legs/thighs in attire
          if (/\b(legs|thighs)\b/i.test(cLower)) return false;
          // Don't repeat if already explicitly described in chosenSubject
          if (chosenSubject.toLowerCase().includes(cLower)) return false;
          return c.length > 0;
        });
      cleanAttireList = cleanAttireList.filter((item, idx) => cleanAttireList.indexOf(item) === idx);

      let attirePhrase = null;
      if (cleanAttireList.length === 1) {
        attirePhrase = cleanAttireList[0];
      } else if (cleanAttireList.length === 2) {
        attirePhrase = `${cleanAttireList[0]} and ${cleanAttireList[1]}`;
      } else if (cleanAttireList.length > 2) {
        attirePhrase = `${cleanAttireList.slice(0, -1).join(", ")}, and ${cleanAttireList[cleanAttireList.length - 1]}`;
      }

      if (attirePhrase) {
        sentences.push(`She strikes an alluring pose with ${cleanPose}, dressed in ${attirePhrase} that accentuates her feminine silhouette.`);
      } else {
        sentences.push(`She strikes an alluring pose with ${cleanPose}.`);
      }

      // --- 6. Setting & Atmospheric Lighting ---
      let env = groups.environment.length > 0 ? groups.environment.join(", ") : null;
      let light = groups.lighting_camera.length > 0 
        ? groups.lighting_camera.join(", ") 
        : "intimate warm amber candlelight and subtle sensual rim highlights tracing feminine curves";
      
      light = light.replace(/^(?:illuminated by|bathed in|lit by)\s+/i, "").trim();

      if (env) {
        if (env.toLowerCase().startsWith("against ") || env.toLowerCase().startsWith("in ")) {
          sentences.push(`The scene is set ${env}, warmly illuminated by ${light}.`);
        } else {
          sentences.push(`The scene is set against ${env}, warmly illuminated by ${light}.`);
        }
      } else {
        sentences.push(`Illuminated by ${light}.`);
      }

      // --- 7. General Details / Rendering Finish ---
      let cleanGeneral = groups.general.filter(g => {
        const gLower = g.toLowerCase();
        if (stylePhrase.toLowerCase().includes(gLower)) return false;
        if (light.toLowerCase().includes(gLower)) return false;
        if (chosenSubject.toLowerCase().includes(gLower)) return false;
        if (/\b(woman|female|model|girl|lady|pinup|adult|solo)\b/i.test(gLower)) return false;
        return g.length > 0;
      });

      if (cleanGeneral.length > 0) {
        sentences.push(`Detailed with ${cleanGeneral.join(", ")}.`);
      }

      return sentences.join(" ")
        .replace(/\s+([.,;:])/g, "$1")
        .replace(/\bU\+?[0-9A-Fa-f]{4,6}\b/gi, "")
        .replace(/,\s*,/g, ",")
        .replace(/\.\s*\./g, ".")
        .replace(/\s+/g, " ")
        .trim();
    }

    /**
     * Format for PonyXL (Strict Danbooru Ordering, Decomposed Stylistic Conditioning)
     */
    static _formatPonyHierarchy(tokens, options, selectedPreset) {
      const hierarchy = [
        "score_tags",
        "source_rating",
        "character_series",
        "subject_count",
        "physical_traits",
        "clothing",
        "expression_pose",
        "environment",
        "lighting_camera",
        "style_medium"
      ];
      
      const buckets = {};
      hierarchy.forEach(h => buckets[h] = []);

      // 1. Positive Quality Scores (Proven 3-tag sweet spot for PonyXL)
      if (options.qualityScore !== false) {
        buckets["score_tags"].push("score_9", "score_8_up", "score_7_up");
      }

      // 2. Rating & Source
      if (options.includeRating !== false) {
        buckets["source_rating"].push("rating:questionable", "source_anime");
      }

      // 3. Decomposed Style Tags from Preset (Distributed into proper Danbooru buckets)
      if (selectedPreset && selectedPreset.ponyAdditions) {
        const presetTags = selectedPreset.ponyAdditions.split(/,\s*/);
        presetTags.forEach(pt => {
          const ptClean = pt.trim().toLowerCase().replace(/\s+/g, "_");
          if (!ptClean) return;
          
          if (ptClean === "voluptuous" || ptClean === "hourglass_figure" || ptClean === "wide_hips" || ptClean === "narrow_waist" || ptClean === "thick_thighs" || ptClean === "long_legs" || ptClean.includes("eyes") || ptClean.includes("hair")) {
            if (!buckets["physical_traits"].includes(ptClean)) buckets["physical_traits"].push(ptClean);
          } else if (ptClean.includes("pose") || ptClean.includes("smile") || ptClean.includes("smirk") || ptClean.includes("arched_back")) {
            if (!buckets["expression_pose"].includes(ptClean)) buckets["expression_pose"].push(ptClean);
          } else if (ptClean === "1woman" || ptClean === "mature_female" || ptClean === "adult" || ptClean === "pinup") {
            if (!buckets["subject_count"].includes(ptClean)) buckets["subject_count"].push(ptClean);
          } else if (ptClean.startsWith("score_")) {
            if (!buckets["score_tags"].includes(ptClean)) buckets["score_tags"].push(ptClean);
          } else {
            if (!buckets["style_medium"].includes(ptClean)) buckets["style_medium"].push(ptClean);
          }
        });
      }

      // 4. Sort user tokens (splitting any multi-tag replacements cleanly)
      tokens.forEach(t => {
        const splitTags = t.value.split(/,\s*/);
        splitTags.forEach(rawTag => {
          let tag = rawTag.toLowerCase().trim().replace(/\s+/g, "_");
          if (!tag) return;

          if (t.category === "score_tags" || tag.startsWith("score_")) {
            if (!buckets["score_tags"].includes(tag)) buckets["score_tags"].push(tag);
          } else if (tag === "1woman" || tag === "mature_female" || tag === "adult" || tag === "pinup") {
            if (!buckets["subject_count"].includes(tag)) buckets["subject_count"].push(tag);
          } else if (tag === "voluptuous" || tag === "hourglass_figure" || tag === "wide_hips" || tag === "narrow_waist" || tag === "thick_thighs" || tag === "long_legs" || tag.includes("eyes") || tag.includes("hair")) {
            if (!buckets["physical_traits"].includes(tag)) buckets["physical_traits"].push(tag);
          } else if (buckets[t.category]) {
            if (!buckets[t.category].includes(tag)) buckets[t.category].push(tag);
          } else {
            if (!buckets["style_medium"].includes(tag)) buckets["style_medium"].push(tag);
          }
        });
      });

      // Ensure adult subject count exists
      if (buckets["subject_count"].length === 0) {
        buckets["subject_count"].push("1woman", "mature_female", "adult", "pinup");
      }

      // Assemble in exact Danbooru hierarchy order
      const orderedTags = [];
      hierarchy.forEach(h => {
        if (buckets[h] && buckets[h].length > 0) {
          const unique = [...new Set(buckets[h])];
          orderedTags.push(...unique);
        }
      });

      return orderedTags.join(", ");
    }

    /**
     * Format for SDXL / SD 1.5 (Weighted Tag Chunks with Deduplication)
     */
    static _formatSdxlWeighted(tokens, modelId, options, selectedPreset) {
      const profile = MODEL_PROFILES[modelId];
      const chunks = [];

      // Quality prefix
      if (options.addQuality !== false && profile.qualityPrefix) {
        chunks.push(profile.qualityPrefix);
      }

      // Add preset additions near the front for CLIP attention
      if (selectedPreset && selectedPreset.sdxlAdditions) {
        chunks.push(selectedPreset.sdxlAdditions);
      }

      const priorityOrder = ["subject_count", "physical_traits", "clothing", "expression_pose", "environment", "lighting_camera", "style_medium", "general"];

      priorityOrder.forEach(category => {
        const match = tokens.filter(t => t.category === category);
        match.forEach(t => {
          let cleanVal = t.value.replace(/_/g, " ").trim();
          if (!cleanVal) return;
          if (t.weight && t.weight !== 1.0) {
            cleanVal = `(${cleanVal}:${t.weight})`;
          }
          if (!chunks.some(c => c.toLowerCase() === cleanVal.toLowerCase())) {
            chunks.push(cleanVal);
          }
        });
      });

      return chunks.join(", ");
    }

    /**
     * Format for Midjourney Niji 6 (Clean Tag Flow & Deduplicated Parameter Flags)
     */
    static _formatMidjourney(tokens, options, selectedPreset) {
      const tagList = [];
      tokens.forEach(t => {
        const val = t.value.replace(/_/g, " ").trim();
        if (val && !tagList.some(item => item.toLowerCase() === val.toLowerCase())) {
          tagList.push(val);
        }
      });

      let mainPrompt = tagList.join(", ");
      let presetAdditions = selectedPreset ? (selectedPreset.mjAdditions || "") : "";
      
      // Extract and deduplicate parameter flags (--ar, --niji, etc.)
      const paramRegex = /--([a-zA-Z0-9_-]+)(?:\s+([^\s-]+))?/g;
      const flags = new Map();
      
      const defaultParams = options.mjParams || MODEL_PROFILES.midjourney.defaultParams || "";
      let m;
      while ((m = paramRegex.exec(defaultParams)) !== null) {
        flags.set(m[1], m[2] || "");
      }
      
      let presetCleanText = presetAdditions.replace(paramRegex, (match, p1, p2) => {
        flags.set(p1, p2 || "");
        return "";
      }).trim();

      if (presetCleanText) {
        mainPrompt = `${mainPrompt}, ${presetCleanText}`;
      }

      const flagStr = Array.from(flags.entries())
        .map(([k, v]) => v ? `--${k} ${v}` : `--${k}`)
        .join(" ");

      return `${mainPrompt} ${flagStr}`.replace(/\s+/g, " ").replace(/,\s*,/g, ",").trim();
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
      const cachedPrefs = this.loadCachedPreferences();
      this.currentModel = cachedPrefs.model;
      this.currentIntent = cachedPrefs.intent;
      this.customSwaps = this.loadCustomSwaps();

      this.cacheElements();
      this.applyInitialModel();
      this.bindEvents();
      this.renderLexiconCategories();
      this.renderIntentPresets();
      this.renderCustomSwapsList();
      this.triggerOptimization();
    }

    loadCachedPreferences() {
      try {
        const savedModel = localStorage.getItem("shelp_last_model");
        const savedIntent = localStorage.getItem("shelp_last_intent");
        const model = (savedModel && MODEL_PROFILES[savedModel]) ? savedModel : "flux";
        const intent = savedIntent || "";
        return { model, intent };
      } catch (e) {
        return { model: "flux", intent: "" };
      }
    }

    saveCachedModel(modelId) {
      try {
        localStorage.setItem("shelp_last_model", modelId);
      } catch (e) {
        // LocalStorage access restricted
      }
    }

    saveCachedIntent(intentId) {
      try {
        localStorage.setItem("shelp_last_intent", intentId);
      } catch (e) {
        // LocalStorage access restricted
      }
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
      this.presetStyleInfo = document.getElementById("presetStyleInfo");
      this.presetInfoTitle = document.getElementById("presetInfoTitle");
      this.presetInfoDesc = document.getElementById("presetInfoDesc");
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

    applyInitialModel() {
      if (this.modelSelectPills && this.modelSelectPills.length > 0) {
        this.modelSelectPills.forEach(pill => {
          if (pill.dataset.model === this.currentModel) {
            pill.classList.add("active");
          } else {
            pill.classList.remove("active");
          }
        });
      }
      this.updateModelInfo();
    }

    bindEvents() {
      this.promptInput.addEventListener("input", () => this.triggerOptimization());

      this.modelSelectPills.forEach(pill => {
        pill.addEventListener("click", () => {
          this.modelSelectPills.forEach(p => p.classList.remove("active"));
          pill.classList.add("active");
          this.currentModel = pill.dataset.model;
          this.saveCachedModel(this.currentModel);
          this.updateModelInfo();
          this.triggerOptimization();
        });
      });

      this.intentSelect.addEventListener("change", (e) => {
        this.currentIntent = e.target.value;
        this.saveCachedIntent(this.currentIntent);
        this.updatePresetInfo(e.target.value);
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
        this.tokenFill.style.background = "var(--accent-danger)";
      } else if (percent > 70) {
        this.tokenFill.style.background = "var(--accent-warning)";
      } else {
        this.tokenFill.style.background = "var(--gradient-accent-h)";
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
        const subtitle = preset.shortDesc ? ` (${preset.shortDesc})` : "";
        opt.textContent = `${preset.name}${subtitle}`;
        this.intentSelect.appendChild(opt);
      });

      if (this.currentIntent) {
        const exists = INTENT_PRESETS.some(p => p.id === this.currentIntent);
        if (exists) {
          this.intentSelect.value = this.currentIntent;
          this.updatePresetInfo(this.currentIntent);
        } else {
          this.currentIntent = "";
          this.saveCachedIntent("");
        }
      }
    }

    updatePresetInfo(presetId) {
      if (!this.presetStyleInfo) return;
      if (!presetId) {
        this.presetStyleInfo.style.display = "none";
        return;
      }
      const preset = INTENT_PRESETS.find(p => p.id === presetId);
      if (!preset) {
        this.presetStyleInfo.style.display = "none";
        return;
      }
      this.presetStyleInfo.style.display = "block";
      this.presetInfoTitle.textContent = `🎨 Decomposed Style Translation: ${preset.name}`;
      this.presetInfoDesc.textContent = preset.description;
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

  // Expose engine globally
  window.sHelpEngine = {
    PromptOptimizer,
    PromptParser,
    MODEL_PROFILES,
    WORD_SWAPS,
    INTENT_PRESETS,
    LEXICON,
    UIController
  };

  // Auto-initialize on DOM ready
  document.addEventListener("DOMContentLoaded", () => {
    window.sHelpApp = new UIController();
    console.log("sHelp Prompt Optimizer loaded (Adult Pinup & Glamour Focus - 100% Zero-AI).");
  });

})();
