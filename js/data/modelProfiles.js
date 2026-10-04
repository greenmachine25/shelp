/**
 * Model Profiles & Optimization Rules (100% Adult Pinup, Glamour & Stylized Focus)
 * Zero-Realism + Zero-Underage: strictly tunes text encoders for adult pinup,
 * glamour, boudoir, and stylized mature art.
 */

export const MODEL_PROFILES = {
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
    features: {
      useProse: true,
      removeBooruUnderscores: true,
      removeBuzzwords: true,
      banRealism: true,
      adultOnly: true
    },
    stripWords: [
      "masterpiece", "best quality", "ultra quality", "high quality", "8k", "4k", 
      "trending on artstation", "award winning", "hyperrealistic", "photorealistic", "realistic",
      "raw photo", "photograph", "35mm film", "dslr", "real life", "skin pores",
      "score_9", "score_8_up", "score_7_up", "score_6_up", "score_5_up", "score_4_up",
      "source_pony", "chibi", "school_uniform", "serafuku", "student"
    ],
    tips: [
      "Flux excels at adult pinup when described with narrative glamour: pose, silhouette, silk/lace materials, and warm lighting.",
      "Always specify adult subject: 'an alluring adult woman', 'a glamorous pinup model'.",
      "Describe lighting physics, voluptuous curves, and painterly illustrative textures."
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
    features: {
      useProse: false,
      useDanbooruUnderscores: true,
      strictHierarchy: true,
      injectScoreTags: true,
      banRealism: true,
      adultOnly: true
    },
    hierarchyOrder: [
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
    ],
    tips: [
      "Must begin with: 'score_9, score_8_up, score_7_up, rating:questionable, source_anime'.",
      "Use adult tags: '1woman, mature_female, adult, pinup, hourglass_figure, voluptuous'.",
      "All tags should be lowercase Danbooru with underscores: 'bunny_suit', 'looking_at_viewer', 'cleavage'.",
      "Negative prompt strictly enforces no kids, no realism, and no 3D."
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
    defaultNegative: "child, kid, underage, chibi, photorealistic, photo, 3d, realistic skin, photograph, realistic eyes, ugly, deformed, bad anatomy, bad hands, missing fingers, extra limbs, low quality, blurry, artifacts, watermark",
    features: {
      useProse: false,
      allowWeights: true,
      banRealism: true,
      adultOnly: true
    },
    tips: [
      "Place primary adult pinup subject at the front for maximum CLIP attention.",
      "Use weights like '(voluptuous:1.15)' and '(pinup pose:1.1)'.",
      "Strictly suppresses underage content, realism, and 3D in the negative prompt."
    ]
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
    defaultNegative: "child, kid, underage, chibi, photorealistic, photo, 3d, realistic, worst quality, low quality, lowres, bad anatomy, bad hands, artifacts, watermark",
    features: {
      useProse: false,
      compactOnly: true,
      banRealism: true,
      adultOnly: true
    },
    tips: [
      "Strict 77 token budget! Front-load adult model and pinup tags.",
      "Use classic pinup tags: '1woman, mature female, adult, pinup, cleavage, garter straps'."
    ]
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
    features: {
      useParams: true,
      banRealism: true,
      adultOnly: true
    },
    stripWords: [
      "photorealistic", "hyperrealistic", "realistic", "photo", "dslr", "4k", "8k", "masterpiece", "chibi"
    ],
    tips: [
      "Uses '--niji 6' dedicated anime and pinup engine.",
      "Use aesthetic keywords: 'adult pinup illustration', 'glamour', 'voluptuous curves', 'cheesecake art'.",
      "Avoid photorealism words to keep the stylized illustrative aesthetic."
    ]
  },

  perchance: {
    id: "perchance",
    name: "Perchance Adult Pinup (Flux Engine)",
    engine: "Perchance Pinup / Flux Hybrid",
    recommendedFormat: "perchance_clean",
    description: "Tuned for Perchance's modern image generator when producing glamorous adult pinup and stylized 2D artwork.",
    maxTokens: 200,
    supportsNegative: true,
    defaultNegative: "child, kid, underage, chibi, realistic, photo, 3d, photorealistic, realistic skin, deformed, extra fingers, blurry, text, watermark",
    features: {
      useProse: true,
      cleanSeparation: true,
      banRealism: true,
      adultOnly: true
    },
    tips: [
      "Perchance excels with story-like adult pinup descriptions without tag clutter.",
      "Anti-prompt guarantees pure adult stylized pinup output with zero realism bleed."
    ]
  }
};
