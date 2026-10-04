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

  // 3. Seductive Gaze & Expressions
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
    pattern: /\b(masterpiece|best quality|top quality|4k|8k|ultra hd)\b/i,
    flux: "", // Degrades Flux, strip completely
    pony: "score_9, score_8_up, score_7_up",
    sdxl: "masterpiece, adult pinup, clean lineart",
    midjourney: ""
  },

  // 5. Artist Name to Descriptive Style Swaps (For models not trained on these artists)
  {
    pattern: /\b(?:style of\s+)?(?:xpi[\s_-]?sigma(?:[\s_-]?art)?|xpisigma)\b/i,
    flux: "vibrant stylized digital pinup aesthetic with clean flowing vector inking and tapered contours, rich saturated color palette, smooth multi-tone cel shading blended with soft airbrush gradients, luminous warm skin with delicate rosy blush, glossy highlights on full pouty lips and hair, voluptuous hourglass silhouette",
    pony: "clean_lineart, smooth_lineart, vibrant_colors, cel_shading, soft_shading, airbrushed_blush, glossy_lips, detailed_eyes, voluptuous, hourglass_figure, wide_hips, narrow_waist, digital_illustration",
    sdxl: "(stylized digital pinup:1.15), (clean vector lineart, tapered inking:1.1), (vibrant saturated colors:1.1), (smooth cel shading, soft airbrush blush:1.1), voluptuous hourglass figure, wide hips, glossy highlights, detailed anime eyes",
    midjourney: "vibrant stylized digital pinup, clean tapered vector outlines, saturated colors, smooth cel shading, voluptuous hourglass curves, glossy highlights",
    reason: "Decomposed 'XPI Sigma Art' into visual linework, shading, and curve descriptors"
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

// 100% Dedicated Artist Styles & Adult Pinup Presets
// (Deconstructs unindexed artists into concrete linework, shading, anatomy, and rendering descriptors that AI models actually understand)
export const INTENT_PRESETS = [
  {
    id: "style_xpi_sigma",
    name: "Style of XPI Sigma Art",
    shortDesc: "Vector linework, vibrant cel shading, airbrushed blush, hourglass curves",
    description: "Recreates the signature XPI Sigma aesthetic by decomposing it into concrete model descriptors: crisp flowing vector lineart, saturated colors, smooth multi-tone cel shading, airbrush gradients, and voluptuous hourglass curves.",
    fluxAdditions: "rendered in a vibrant stylized digital pinup aesthetic with clean flowing vector inking and tapered contours, rich saturated color palette, smooth multi-tone cel shading blended with soft airbrush gradients, luminous warm skin with delicate rosy blush, glossy highlights on full pouty lips and hair, emphasizing an alluring voluptuous hourglass silhouette with narrow waist and shapely curves",
    ponyAdditions: "clean_lineart, smooth_lineart, vibrant_colors, cel_shading, soft_shading, airbrushed_blush, glossy_lips, detailed_eyes, voluptuous, hourglass_figure, wide_hips, narrow_waist, seductive_smile, digital_illustration, high_contrast",
    sdxlAdditions: "(stylized digital pinup:1.15), (clean vector lineart, tapered inking:1.1), (vibrant saturated colors:1.1), (smooth cel shading, soft airbrush blush:1.1), voluptuous hourglass figure, wide hips, narrow waist, glossy highlights, detailed anime eyes, polished digital illustration",
    mjAdditions: "vibrant stylized digital pinup illustration, clean tapered vector outlines, saturated color palette, smooth cel shading with soft airbrush blush, voluptuous hourglass curves, glossy highlights, expressive eyes --ar 16:9 --niji 6 --style expressive"
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
