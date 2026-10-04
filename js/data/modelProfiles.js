/**
 * Model Profiles & Optimization Rules (100% Anime / Cartoon / Digital Art Focus)
 * Zero-Realism configuration: strictly tunes text encoders for 2D animation,
 * Danbooru anime checkpoints, stylized digital art, and Niji 6.
 */

export const MODEL_PROFILES = {
  flux: {
    id: "flux",
    name: "Flux.1 (Anime & Digital Art Story)",
    engine: "T5-XXL + CLIP-L",
    recommendedFormat: "natural_prose",
    description: "T5-XXL natural language encoder tuned for Anime, Cartoon & Digital Art. Crafts vivid descriptive sentences for 2D animation, cel shading, and digital illustration. Avoids buzzwords and photographic realism.",
    maxTokens: 256,
    supportsNegative: false,
    defaultNegative: "",
    qualityPrefix: "",
    features: {
      useProse: true,
      removeBooruUnderscores: true,
      removeBuzzwords: true,
      banRealism: true
    },
    stripWords: [
      "masterpiece", "best quality", "ultra quality", "high quality", "8k", "4k", 
      "trending on artstation", "award winning", "hyperrealistic", "photorealistic", "realistic",
      "raw photo", "photograph", "35mm film", "dslr", "real life", "skin pores",
      "score_9", "score_8_up", "score_7_up", "score_6_up", "score_5_up", "score_4_up",
      "source_pony"
    ],
    tips: [
      "Flux excels at anime and digital art when described like an animated movie scene or high-end illustration.",
      "Describe linework, cel shading gradients, background painting, and emotional lighting.",
      "Never use photo terms (like 'photorealistic', 'dslr', 'skin pores')—they spoil Flux's stylized art capabilities."
    ]
  },

  pony: {
    id: "pony",
    name: "Pony Diffusion / PonyXL (Anime & Cartoon)",
    engine: "SDXL Danbooru CLIP",
    recommendedFormat: "danbooru_hierarchy",
    description: "The gold standard for Anime, Cartoon, and Fanart. Strictly requires score tags, source tags (source_anime or source_cartoon), and underscore Danbooru tags. Realism is actively banished to the negative prompt.",
    maxTokens: 225,
    supportsNegative: true,
    qualityPrefix: "score_9, score_8_up, score_7_up",
    defaultRating: "rating:general, source_anime",
    defaultNegative: "score_6, score_5, score_4, score_3, score_2, score_1, source_pony, source_furry, realistic, photo, photorealistic, 3d, realistic skin, photograph, ugly, deformed, lowres, bad anatomy, text, watermark",
    features: {
      useProse: false,
      useDanbooruUnderscores: true,
      strictHierarchy: true,
      injectScoreTags: true,
      banRealism: true
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
      "Must begin with: 'score_9, score_8_up, score_7_up, rating:general, source_anime'.",
      "For western cartoon, swap 'source_anime' with 'source_cartoon'.",
      "All tags should be lowercase Danbooru with underscores: 'looking_at_viewer', 'blue_hair', 'clean_lineart'.",
      "Negative prompt strictly eliminates realism and 3D."
    ]
  },

  sdxl: {
    id: "sdxl",
    name: "SDXL Anime / Illustrious / Animagine",
    engine: "Dual CLIP (ViT-G + CLIP-L)",
    recommendedFormat: "weighted_tags",
    description: "Tuned for popular anime checkpoints (Animagine XL, Illustrious XL, AutismMix). Uses weighted tags and negative prompt anti-realism filters.",
    maxTokens: 150,
    supportsNegative: true,
    qualityPrefix: "masterpiece, anime aesthetic, clean lineart",
    defaultNegative: "photorealistic, photo, 3d, realistic skin, photograph, realistic eyes, ugly, deformed, bad anatomy, bad hands, missing fingers, extra limbs, low quality, blurry, artifacts, watermark",
    features: {
      useProse: false,
      allowWeights: true,
      banRealism: true
    },
    tips: [
      "Place primary anime subject at the front for maximum CLIP attention.",
      "Use weights like '(clean lineart:1.15)' and '(anime coloring:1.1)'.",
      "Strictly suppresses realism and 3D in the negative prompt."
    ]
  },

  sd15: {
    id: "sd15",
    name: "SD 1.5 Anime (Anything / Counterfeit / OrangeMix)",
    engine: "CLIP-ViT-L/14 (77 Tokens)",
    recommendedFormat: "compact_tags",
    description: "Optimized for classic anime checkpoints (Anything v5, Counterfeit, AbyssOrangeMix). Concise 77-token tag ordering with zero realism.",
    maxTokens: 75,
    supportsNegative: true,
    qualityPrefix: "masterpiece, best quality, anime style",
    defaultNegative: "photorealistic, photo, 3d, realistic, worst quality, low quality, lowres, bad anatomy, bad hands, artifacts, watermark",
    features: {
      useProse: false,
      compactOnly: true,
      banRealism: true
    },
    tips: [
      "Strict 77 token budget! Front-load characters and core anime tags.",
      "Use classic anime tags: '1girl, solo, clean lineart, anime key visual'."
    ]
  },

  midjourney: {
    id: "midjourney",
    name: "Midjourney (Niji 6 Anime Mode)",
    engine: "Midjourney Niji 6 (Anime Model)",
    recommendedFormat: "mj_parameters",
    description: "Targets Midjourney's dedicated anime and illustration model (--niji 6). Delivers spectacular anime visuals, manga composition, and stylized digital art.",
    maxTokens: 120,
    supportsNegative: false,
    defaultNegative: "",
    defaultParams: "--ar 16:9 --niji 6 --style expressive",
    features: {
      useParams: true,
      banRealism: true
    },
    stripWords: [
      "photorealistic", "hyperrealistic", "realistic", "photo", "dslr", "4k", "8k", "masterpiece"
    ],
    tips: [
      "Uses '--niji 6' dedicated anime engine automatically.",
      "Try '--style expressive' or '--style cute' for distinct anime flavors.",
      "Describe anime aesthetic, animation directors, or digital art style."
    ]
  },

  perchance: {
    id: "perchance",
    name: "Perchance Anime / Digital Art (Flux)",
    engine: "Perchance Anime / Flux Hybrid",
    recommendedFormat: "perchance_clean",
    description: "Tuned for Perchance's modern image generator when producing anime, cartoon, and fantasy digital art.",
    maxTokens: 200,
    supportsNegative: true,
    defaultNegative: "realistic, photo, 3d, photorealistic, realistic skin, deformed, extra fingers, blurry, text, watermark",
    features: {
      useProse: true,
      cleanSeparation: true,
      banRealism: true
    },
    tips: [
      "Perchance excels with story-like anime descriptions without tag clutter.",
      "Anti-prompt guarantees pure 2D/stylized output with zero realism bleed."
    ]
  }
};
