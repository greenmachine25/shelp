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
    flux: "", // Degrades Flux, strip completely
    pony: "score_9, score_8_up, score_7_up",
    sdxl: "masterpiece, adult pinup, clean lineart",
    midjourney: ""
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

// 100% Dedicated Adult Pinup & Glamour Intent Presets
export const INTENT_PRESETS = [
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
