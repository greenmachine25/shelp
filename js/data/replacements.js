/**
 * sHelp Replacements & Word Swaps Database (100% Adult Pinup, Glamour & Stylized Art)
 * Strictly Adult: Converts colloquial prompts into high-impact adult pinup,
 * glamour, boudoir, and mature stylized illustration terminology.
 * STRICTLY NO CHILDREN / NO UNDERAGE CONTENT.
 */

export const WORD_SWAPS = [
  // 1. Anti-Realism Swaps (Aggressively converts photo/realism terms into stylized 2D pinup equivalents)
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

  // 2. Adult Pinup & Glamour Word Swaps
  {
    pattern: /^(?:bunny girl|playboy bunny|bunny suit|black bunny suit)$/i,
    flux: "an adult woman in a glossy satin black bunny suit with rabbit ears, bow tie, and fishnet stockings",
    pony: "1woman, bunny_suit, playboy_bunny, fishnets, collar, cuffs, rabbit_ears",
    sdxl: "1woman, adult playboy bunny suit, fishnet stockings, rabbit ears, high heels",
    midjourney: "glamorous adult bunny girl in glossy satin bunny suit and fishnets"
  },
  {
    pattern: /^(?:1girl|girl|solo girl)$/i,
    flux: "an alluring adult woman",
    pony: "1woman, mature_female, adult",
    sdxl: "1woman, adult, mature female",
    midjourney: "an alluring adult woman"
  },
  {
    pattern: /^(?:sexy|hot|gorgeous|stunning|babe)$/i,
    flux: "a glamorous adult pinup model with alluring hourglass curves and magnetic presence",
    pony: "mature_female, adult, pinup, hourglass_figure, voluptuous",
    sdxl: "adult pinup, mature female, voluptuous hourglass figure, glamorous",
    midjourney: "glamorous adult pinup model with alluring hourglass curves"
  },
  {
    pattern: /^(?:lingerie|underwear|negligee|sexy lingerie)$/i,
    flux: "dressed in sheer black lace boudoir lingerie with matching garter straps and silk stockings",
    pony: "lingerie, lace, negligee, garter_straps, stockings, sheer",
    sdxl: "sheer lace lingerie, garter belt, silk stockings, boudoir pinup",
    midjourney: "luxurious sheer black lace lingerie and garter stockings"
  },
  {
    pattern: /^(?:bikini|swimsuit|bathing suit|string bikini)$/i,
    flux: "wearing a stylish designer string bikini accentuating a voluptuous feminine silhouette",
    pony: "bikini, string_bikini, swimsuit, cleavage, hourglass_figure",
    sdxl: "designer string bikini, swimsuit pinup, hourglass curves, poolside",
    midjourney: "stylish designer bikini accentuating hourglass curves"
  },
  {
    // Match only standalone body curve tokens, never hair curves or existing detailed phrases
    pattern: /^(?:(?:voluptuous|sensual|hourglass|feminine|alluring)\s+)?(?:curves|curvy|hourglass|hourglass figure)$/i,
    flux: "a voluptuous hourglass silhouette with generous cleavage, a shapely waist, thick thighs, and wide rounded hips",
    pony: "voluptuous, hourglass_figure, wide_hips, thick_thighs, cleavage",
    sdxl: "voluptuous hourglass figure, wide hips, thick thighs, feminine curves, cleavage",
    midjourney: "voluptuous feminine hourglass figure with wide hips, thick thighs, and shapely curves"
  },
  {
    pattern: /\b(?:large\s+)?natural\s+breasts\b/gi,
    flux: "massive shapely natural breasts with heavy teardrop weight and deep alluring cleavage",
    pony: "huge_breasts, large_breasts, natural_breasts, heavy_breasts, deep_cleavage",
    sdxl: "massive natural breasts, heavy teardrop breasts, deep alluring cleavage",
    midjourney: "massive shapely natural breasts with heavy teardrop weight and deep cleavage"
  },
  {
    pattern: /^(?:cleavage|boobs|busty|breasts|large bust)$/i,
    flux: "prominent alluring cleavage and elegant bare décolletage",
    pony: "cleavage, bare_shoulders, large_breasts",
    sdxl: "alluring cleavage, bare décolletage, feminine curves",
    midjourney: "alluring cleavage and bare décolletage"
  },
  {
    pattern: /^(?:legs|thighs|long legs|toned legs)$/i,
    flux: "long shapely toned legs",
    pony: "long_legs, toned_thighs",
    sdxl: "long shapely legs, toned thighs",
    midjourney: "long shapely toned legs"
  },
  {
    // Match only generic footwear/stockings if no color, material, or boot is specified
    pattern: /^(?:stockings|thighhighs|thigh highs|heels|high heels|stilettos)$/i,
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
    pattern: /^(?:bedroom eyes|seductive eyes|flirty eyes|alluring eyes|sultry eyes|seductive gaze)$/i,
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
    flux: "flattering clean studio lighting with subtle soft rim highlights accentuating curves",
    pony: "soft_lighting, rim_light, studio_lighting",
    sdxl: "clean studio lighting, soft rim light, balanced illumination",
    midjourney: "clean flattering studio lighting with soft rim highlights"
  },
  {
    pattern: /\b(nice|pretty|beautiful|good)\s+background\b/i,
    flux: "a clean minimalist studio backdrop with soft subtle floor contact shadow",
    pony: "simple_background, clean_backdrop, contact_shadow",
    sdxl: "clean studio backdrop, soft contact shadow, minimalist background",
    midjourney: "clean minimalist studio backdrop with soft contact shadows"
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
    flux: "", // Degrades Flux, strip completely
    pony: "score_9, score_8_up, score_7_up",
    sdxl: "masterpiece, adult pinup, clean lineart",
    midjourney: ""
  },

  {
    pattern: /\b(?:style of\s+)?(?:xpi[\s_-]?sigma(?:[\s_-]?art)?|xpisigma)\b/i,
    flux: "rendered in an expressive 2D anime pinup illustration art style with subtle 2D animation flair, featuring bold clean dark contour outlines, vibrant saturated colors, smooth clean digital cel-shading with glossy specular skin sheen and prominent rosy cheek-and-nose blush, showcasing an extremely voluptuous adult woman with exaggerated feminine proportions, massive heavy natural teardrop breasts with deep cleavage, very wide rounded curvy hips, thick heavy thighs, a compact shapely waist, hair stylized with sharp angular locks and sleek curved tufts, and large captivating expressive anime eyes rendered with bold winged black eyeliner and detailed glossy irises, finished with crisp clean vector anime lineart and polished cel-shading",
    pony: "thick_outlines, bold_outline, clean_lineart, vibrant_colors, cel_shading, specular_highlight, blush, nose_blush, large_eyes, expressive_eyes, detailed_eyes, eyeliner, winged_eyeliner, huge_breasts, large_breasts, natural_breasts, heavy_breasts, cleavage, deep_cleavage, voluptuous, curvy, wide_hips, very_wide_hips, thick_thighs, hourglass_figure, source_anime, anime_coloring, 1woman, mature_female, adult, pinup, contact_shadow",
    sdxl: "(expressive 2d anime pinup illustration:1.2), (bold clean black outlines, crisp vector lineart:1.15), (smooth cel shading, glossy specular skin sheen, cheek and nose blush:1.15), (extremely voluptuous curvy proportions, massive heavy natural breasts, deep cleavage:1.2), (very wide rounded hips, thick heavy thighs, compact shapely waist:1.2), (sharp angular hair locks, crisp stylized curves:1.15), (large expressive anime eyes, bold winged eyeliner:1.15), vibrant saturated colors, 2d anime key visual, soft contact shadow",
    midjourney: "expressive 2D anime pinup illustration, bold clean black outlines, smooth cel shading, glossy specular skin highlights, rosy cheek and nose blush, extremely voluptuous curvy silhouette, massive heavy natural breasts, deep cleavage, very wide rounded hips, thick heavy thighs, compact shapely waist, sharp angular hair locks, large captivating expressive anime eyes, bold winged eyeliner --ar 16:9 --niji 6 --style expressive",
    reason: "Decomposed 'XPI Sigma Art' into expressive 2D anime pinup style, massive heavy natural breasts, very wide rounded hips, thick heavy thighs, large anime eyes with bold winged eyeliner, rosy cheek and nose blush, sharp sweeping locks, and clean black outlines"
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

// Booru tag to natural prose dictionary (Strictly Adult / Pinup)
export const BOORU_TO_PROSE = {
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
  "garter_straps": "sleek garter straps with metallic clips",
  "stockings": "wearing sheer silk stockings",
  "thighhighs": "wearing form-fitting thighhigh stockings",
  "high_heels": "wearing tall pointed stiletto high heels",
  "bikini": "wearing an alluring string bikini",
  "cleavage": "revealing deep elegant cleavage",
  "hourglass_figure": "possessing an exquisite voluptuous hourglass figure",
  "voluptuous": "with extremely voluptuous sensual feminine curves",
  "wide_hips": "featuring wide rounded hips and thick shapely thighs",
  "very_wide_hips": "very wide rounded curvy hips and thick heavy thighs",
  "large_natural_breasts": "massive shapely natural breasts with heavy teardrop weight and deep cleavage",
  "green_eyes": "large captivating vibrant green anime eyes with detailed glossy highlights",
  "blue_eyes": "large captivating vibrant blue anime eyes with detailed glossy highlights",
  "brown_eyes": "large captivating warm brown anime eyes with detailed glossy highlights",
  "short_blonde_wavy_hair": "short wavy blonde hair sculpted into sharp angular locks with pointed tufts",
  "blonde_to_pink_gradient_hair": "blonde-to-pink gradient hair with vibrant colorful tips",
  "gradient_hair": "dynamic two-tone gradient hair with vibrant colorful tips",
  "two_tone_hair": "dynamic two-tone hair with vibrant colorful tips",
  "blonde_hair": "radiant blonde hair with stylized locks",
  "short_hair": "short stylized hair with curved tips",
  "wavy_hair": "wavy hair with sculpted angular locks",
  "short_blonde_hair": "short blonde hair sculpted into sharp angular locks",
  "eyeliner": "bold winged black eyeliner with prominent rosy cheek-and-nose blush",
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

// 100% Dedicated Artist Styles & Adult Pinup Presets
// (Deconstructs unindexed artists into concrete linework, shading, anatomy, and rendering descriptors that AI models actually understand)
export const INTENT_PRESETS = [
  {
    id: "style_xpi_sigma",
    name: "Style of XPI Sigma Art",
    shortDesc: "Expressive 2D anime pinup, massive heavy breasts, very wide hips & thick thighs, large eyes with winged eyeliner, cheek & nose blush, sharp hair locks",
    description: "Recreates XPI Sigma's signature visual style: expressive 2D anime pinup with exaggerated feminine proportions (massive heavy natural teardrop breasts with deep cleavage, very wide rounded curvy hips, thick heavy thighs, compact shapely waist), large captivating anime eyes with bold winged black eyeliner, prominent rosy cheek-and-nose blush, hair stylized with sharp angular locks, bold clean black contour outlines, and smooth digital cel-shading with glossy specular skin sheen.",
    fluxAdditions: "rendered in an expressive 2D anime pinup illustration art style with subtle 2D animation flair, featuring bold clean dark contour outlines, vibrant saturated colors, smooth clean digital cel-shading with glossy specular skin sheen and prominent rosy cheek-and-nose blush, showcasing an extremely voluptuous adult woman with exaggerated feminine proportions, massive heavy natural teardrop breasts with deep cleavage, very wide rounded curvy hips, thick heavy thighs, a compact shapely waist, hair stylized with sharp angular locks and sleek curved tufts, and large captivating expressive anime eyes rendered with bold winged black eyeliner and detailed glossy irises, finished with crisp clean vector anime lineart and polished cel-shading",
    ponyAdditions: "thick_outlines, bold_outline, clean_lineart, vibrant_colors, cel_shading, specular_highlight, blush, nose_blush, large_eyes, expressive_eyes, detailed_eyes, eyeliner, winged_eyeliner, huge_breasts, large_breasts, natural_breasts, heavy_breasts, cleavage, deep_cleavage, voluptuous, curvy, wide_hips, very_wide_hips, thick_thighs, hourglass_figure, source_anime, anime_coloring, 1woman, mature_female, adult, pinup, contact_shadow",
    sdxlAdditions: "(expressive 2d anime pinup illustration:1.2), (bold clean black outlines, crisp vector lineart:1.15), (smooth cel shading, glossy specular skin sheen, cheek and nose blush:1.15), (extremely voluptuous curvy proportions, massive heavy natural breasts, deep cleavage:1.2), (very wide rounded hips, thick heavy thighs, compact shapely waist:1.2), (sharp angular hair locks, crisp stylized curves:1.15), (large expressive anime eyes, bold winged eyeliner:1.15), vibrant saturated colors, 2d anime key visual, soft contact shadow",
    mjAdditions: "expressive 2D anime pinup illustration, bold clean black outlines, smooth cel shading, glossy specular skin highlights, rosy cheek and nose blush, extremely voluptuous curvy silhouette, massive heavy natural breasts, deep cleavage, very wide rounded hips, thick heavy thighs, compact shapely waist, sharp angular hair locks, large captivating expressive anime eyes, bold winged eyeliner --ar 16:9 --niji 6 --style expressive"
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
