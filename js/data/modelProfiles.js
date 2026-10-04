/**
 * Model Profiles & Optimization Rules
 * Deterministic rulesets tailored for each AI image generator's specific text encoder.
 */

export const MODEL_PROFILES = {
  flux: {
    id: "flux",
    name: "Flux.1 (Dev / Schnell / Pro)",
    engine: "T5-XXL + CLIP-L",
    recommendedFormat: "natural_prose",
    description: "T5-XXL natural language text encoder. Excels with rich descriptive sentences and storytelling. DO NOT use tag soup, score tags, or generic buzzwords (e.g., 'masterpiece', '8k', 'trending on artstation') as they degrade Flux output.",
    maxTokens: 256,
    supportsNegative: false,
    defaultNegative: "",
    qualityPrefix: "",
    defaultAspect: "16:9",
    features: {
      useProse: true,
      removeBooruUnderscores: true,
      removeBuzzwords: true,
      addSensoryDetails: true,
      prioritizeSpatial: true
    },
    stripWords: [
      "masterpiece", "best quality", "ultra quality", "high quality", "8k", "4k", 
      "trending on artstation", "award winning", "hyperrealistic", "photorealistic",
      "score_9", "score_8_up", "score_7_up", "score_6_up", "score_5_up", "score_4_up",
      "source_anime", "source_cartoon", "source_pony"
    ],
    tips: [
      "Flux reads prompts like human prose. Write in complete descriptive sentences.",
      "Describe composition spatially: 'In the foreground...', 'Behind the subject...'",
      "Specify real-world camera settings, lighting physics, and authentic material textures.",
      "Avoid weighting syntax like (word:1.3) — Flux T5 ignores or misinterprets weights."
    ]
  },

  pony: {
    id: "pony",
    name: "Pony Diffusion / PonyXL (v6)",
    engine: "SDXL Danbooru CLIP",
    recommendedFormat: "danbooru_hierarchy",
    description: "Finely tuned on Danbooru tags. STRICTLY requires special score tags and Danbooru formatting with underscores. Sentences and story prose produce blurry or inaccurate output.",
    maxTokens: 225,
    supportsNegative: true,
    qualityPrefix: "score_9, score_8_up, score_7_up",
    defaultRating: "rating:general, source_anime",
    defaultNegative: "score_6, score_5, score_4, score_3, score_2, score_1, source_pony, source_furry, 3d, realistic, photo, ugly, deformed, lowres, bad anatomy, text, watermark, signature",
    features: {
      useProse: false,
      useDanbooruUnderscores: true,
      strictHierarchy: true,
      injectScoreTags: true
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
      "Always start with score tags: 'score_9, score_8_up, score_7_up'.",
      "Use Danbooru tags with underscores: 'looking_at_viewer', 'blue_hair', 'school_uniform'.",
      "Negative prompt MUST contain low score tags: 'score_6, score_5, score_4...'",
      "Keep tags grouped: Subject -> Physical -> Clothes -> Pose -> Background -> Style."
    ]
  },

  sdxl: {
    id: "sdxl",
    name: "Stable Diffusion XL (SDXL)",
    engine: "OpenCLIP ViT-G + CLIP-L",
    recommendedFormat: "weighted_tags",
    description: "Dual CLIP encoders. Excels with comma-separated keyword chunks and weighted tokens. Early tokens receive highest attention.",
    maxTokens: 150,
    supportsNegative: true,
    qualityPrefix: "masterpiece, highly detailed",
    defaultNegative: "ugly, deformed, bad anatomy, bad hands, missing fingers, extra limbs, low quality, blurry, pixelated, jpeg artifacts, watermark, signature",
    features: {
      useProse: false,
      allowWeights: true,
      chunkOrdering: true
    },
    tips: [
      "Put the focal subject in the first 20 tokens for maximum CLIP attention.",
      "Use emphasis weights: '(subject:1.2)' or '((detailed))' to boost weak elements.",
      "Use specific medium markers: 'cinematic still', 'oil painting', '35mm photograph'."
    ]
  },

  sd15: {
    id: "sd15",
    name: "Stable Diffusion 1.5",
    engine: "CLIP-ViT-L/14 (77 Tokens)",
    recommendedFormat: "compact_tags",
    description: "Strict 77-token CLIP window. Front-load key words and use targeted negative prompts.",
    maxTokens: 75,
    supportsNegative: true,
    qualityPrefix: "masterpiece, best quality, sharp focus",
    defaultNegative: "worst quality, low quality, normal quality, lowres, bad anatomy, bad hands, missing fingers, error, cropped, jpeg artifacts, watermark, signature",
    features: {
      useProse: false,
      compactOnly: true
    },
    tips: [
      "Strict 77 token limit! Keep prompts punchy and concise.",
      "Avoid long wordy sentences. Use comma-separated descriptive tags.",
      "Front-load critical subjects."
    ]
  },

  midjourney: {
    id: "midjourney",
    name: "Midjourney (v6.1)",
    engine: "Midjourney Proprietary",
    recommendedFormat: "mj_parameters",
    description: "Prefers clear scene descriptions, aesthetic directions, and terminal parameter flags.",
    maxTokens: 120,
    supportsNegative: false,
    qualityPrefix: "",
    defaultNegative: "",
    defaultParams: "--ar 16:9 --v 6.1 --style raw",
    features: {
      useParams: true
    },
    stripWords: [
      "photorealistic", "hyperrealistic", "4k", "8k", "masterpiece", "trending on artstation"
    ],
    tips: [
      "Describe the medium, lighting, and camera rather than saying 'realistic'.",
      "Append flags at the end: '--ar 16:9', '--v 6.1', '--style raw', '--stylize 200'.",
      "Avoid generic buzzwords like 4k or 8k."
    ]
  },

  perchance: {
    id: "perchance",
    name: "Perchance (Flux / Custom Engine)",
    engine: "Flux / Perchance Hybrid",
    recommendedFormat: "perchance_clean",
    description: "Optimized for Perchance's modern Flux-based image generator. Clean, vivid descriptions with optional anti-prompt support.",
    maxTokens: 200,
    supportsNegative: true,
    qualityPrefix: "",
    defaultNegative: "blurry, low quality, deformed, extra fingers, text, watermark",
    features: {
      useProse: true,
      cleanSeparation: true
    },
    tips: [
      "Perchance's Flux generator produces best results with vivid descriptive phrasing.",
      "Use the Anti-Prompt field for artifacts or unwanted elements."
    ]
  }
};
