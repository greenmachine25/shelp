/**
 * sHelp Optimizer Module (Zero-AI Deterministic Engine)
 * Converts, structures, and optimizes prompts based on target model text encoder specifications.
 */

import { MODEL_PROFILES } from "../data/modelProfiles.js";
import { WORD_SWAPS, BOORU_TO_PROSE, INTENT_PRESETS } from "../data/replacements.js";
import { PromptParser } from "./parser.js";

export class PromptOptimizer {
  /**
   * Main optimize method
   * @param {string} rawPrompt - The user's input prompt
   * @param {string} targetModelId - 'flux' | 'pony' | 'sdxl' | 'sd15' | 'midjourney' | 'perchance'
   * @param {Object} options - Custom options (intentPresetId, addQuality, customAspect, etc.)
   * @returns {Object} Optimized results { prompt, negativePrompt, swapsApplied, tokenEstimate, structureBreakdown }
   */
  static optimize(rawPrompt, targetModelId = "flux", options = {}) {
    const profile = MODEL_PROFILES[targetModelId] || MODEL_PROFILES.flux;
    const parsed = PromptParser.parse(rawPrompt);
    const swapsApplied = [];

    let positiveResult = "";
    let negativeResult = profile.defaultNegative || "";

    // 1. Apply Custom & Built-in Word Swaps
    const customSwaps = options.customSwaps || [];

    let processedTokens = parsed.tokens.map(token => {
      let currentVal = token.clean;
      let wasSwapped = false;

      // First check user's custom swaps
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

      // If not swapped by custom, check built-in WORD_SWAPS
      if (!wasSwapped) {
        for (const swap of WORD_SWAPS) {
          if (swap.pattern.test(currentVal)) {
            const replacement = swap[targetModelId] !== undefined ? swap[targetModelId] : (swap.sdxl || "");
            if (replacement !== currentVal) {
              swapsApplied.push({
                original: currentVal,
                replacedWith: replacement || "[stripped for model]",
                reason: `Optimized for ${profile.name}`
              });
              currentVal = replacement;
              wasSwapped = true;
              break;
            }
          }
        }
      }

      return {
        ...token,
        value: currentVal,
        wasSwapped
      };
    }).filter(t => t.value && t.value.trim().length > 0);

    // 2. Strip Buzzwords that degrade the target model (e.g. masterpiece on Flux)
    if (profile.stripWords && profile.stripWords.length > 0) {
      processedTokens = processedTokens.filter(t => {
        const valLower = t.value.toLowerCase().replace(/_/g, " ").trim();
        const shouldStrip = profile.stripWords.some(sw => valLower === sw.toLowerCase());
        if (shouldStrip) {
          swapsApplied.push({
            original: t.value,
            replacedWith: "[removed]",
            reason: `Harms output quality in ${profile.name}`
          });
          return false;
        }
        return true;
      });
    }

    // 3. Model-Specific Formatting & Ordering
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

    // 4. Apply Intent Preset (if chosen)
    if (options.intentPresetId) {
      const preset = INTENT_PRESETS.find(p => p.id === options.intentPresetId);
      if (preset) {
        positiveResult = this._applyPreset(positiveResult, preset, targetModelId);
      }
    }

    // 5. Estimate Token Count (Deterministic rule-of-thumb: ~1.3 tokens per word + punctuation)
    const tokenEstimate = this._estimateTokens(positiveResult);

    return {
      modelId: targetModelId,
      modelName: profile.name,
      prompt: positiveResult.trim(),
      negativePrompt: negativeResult.trim(),
      tokenEstimate,
      maxTokens: profile.maxTokens,
      swapsApplied,
      isProse: profile.features.useProse
    };
  }

  /**
   * Format for Flux (Story / Natural Language Prose)
   */
  static _formatFluxProse(tokens, wasOriginalProse, rawText, options) {
    // If the input was already a detailed natural prose story, apply synonym swaps directly
    if (wasOriginalProse && tokens.length <= 4) {
      let prose = rawText;
      // Strip buzzwords
      MODEL_PROFILES.flux.stripWords.forEach(w => {
        const re = new RegExp(`\\b${w}\\b,?\\s*`, "gi");
        prose = prose.replace(re, "");
      });
      // Replace Danbooru underscores
      prose = prose.replace(/_([a-z0-9])/gi, " $1");
      return prose.replace(/\s+/g, " ").trim();
    }

    // Group tokens by semantic categories
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
      // Convert Danbooru tag to human readable if available
      let tagVal = t.value.toLowerCase().replace(/\s+/g, "_");
      let readable = BOORU_TO_PROSE[tagVal] || t.value.replace(/_/g, " ");

      const cat = groups[t.category] ? t.category : "general";
      groups[cat].push(readable);
    });

    const sentences = [];

    // Sentence 1: Stylized Subject + Physical Traits + Pose/Expression
    let subjPart = groups.subject_count.join(" and ") || "A stylized anime character";
    let physPart = groups.physical_traits.length > 0 ? `with ${groups.physical_traits.join(", ")}` : "";
    let posePart = groups.expression_pose.length > 0 ? `, ${groups.expression_pose.join(", ")}` : "";
    sentences.push(`${subjPart} ${physPart}${posePart}.`.replace(/\s+/g, " "));

    // Sentence 2: Attire & Clothing
    if (groups.clothing.length > 0) {
      sentences.push(`Wearing ${groups.clothing.join(", ")}.`);
    }

    // Sentence 3: Setting / Environment
    if (groups.environment.length > 0) {
      sentences.push(`Set against ${groups.environment.join(", ")}.`);
    }

    // Sentence 4: Lighting & Visual Effects (Sakuga / Auras / Glow)
    if (groups.lighting_camera.length > 0) {
      sentences.push(`Illuminated by ${groups.lighting_camera.join(", ")}.`);
    }

    // Sentence 5: Style / Animation Medium
    if (groups.style_medium.length > 0) {
      sentences.push(`Rendered in ${groups.style_medium.join(", ")}.`);
    } else {
      sentences.push(`Rendered in a vibrant 2D anime animation aesthetic with clean vector lineart and cel shading.`);
    }

    // Any remaining general terms
    if (groups.general.length > 0) {
      sentences.push(`Featuring ${groups.general.join(", ")}.`);
    }

    return sentences.join(" ").replace(/\s\./g, ".").replace(/\s+/g, " ").trim();
  }

  /**
   * Format for PonyXL (Strict Danbooru Ordering & Score Conditioning)
   */
  static _formatPonyHierarchy(tokens, options) {
    const profile = MODEL_PROFILES.pony;
    const hierarchy = profile.hierarchyOrder;
    
    // Buckets for each hierarchy level
    const buckets = {};
    hierarchy.forEach(h => buckets[h] = []);

    // Add quality prefix tags to score_tags bucket
    if (options.qualityScore !== false) {
      buckets["score_tags"].push("score_9", "score_8_up", "score_7_up");
    }

    // Add default rating & source tags
    if (options.includeRating !== false) {
      buckets["source_rating"].push("rating:general", "source_anime");
    }

    // Sort tokens into Danbooru buckets
    tokens.forEach(t => {
      // Format as danbooru (underscores, lower case)
      let tag = t.value.toLowerCase().trim().replace(/\s+/g, "_");

      // Categorize
      if (t.category === "score_tags") {
        if (!buckets["score_tags"].includes(tag)) buckets["score_tags"].push(tag);
      } else if (t.category === "subject_count") {
        buckets["subject_count"].push(tag);
      } else if (t.category === "physical_traits") {
        buckets["physical_traits"].push(tag);
      } else if (t.category === "clothing") {
        buckets["clothing"].push(tag);
      } else if (t.category === "expression_pose") {
        buckets["expression_pose"].push(tag);
      } else if (t.category === "environment") {
        buckets["environment"].push(tag);
      } else if (t.category === "lighting_camera") {
        buckets["lighting_camera"].push(tag);
      } else if (t.category === "style_medium") {
        buckets["style_medium"].push(tag);
      } else {
        buckets["expression_pose"].push(tag);
      }
    });

    // Assemble in exact Danbooru hierarchy order
    const orderedTags = [];
    hierarchy.forEach(h => {
      if (buckets[h] && buckets[h].length > 0) {
        // Deduplicate within bucket
        const unique = [...new Set(buckets[h])];
        orderedTags.push(...unique);
      }
    });

    return orderedTags.join(", ");
  }

  /**
   * Format for SDXL / SD 1.5 (Weighted Tag Chunks)
   */
  static _formatSdxlWeighted(tokens, modelId, options) {
    const profile = MODEL_PROFILES[modelId];
    const chunks = [];

    // Quality prefix if enabled
    if (options.addQuality !== false && profile.qualityPrefix) {
      chunks.push(profile.qualityPrefix);
    }

    // Order: Subject -> Appearance/Clothes -> Action/Pose -> Environment -> Lighting -> Style
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

  /**
   * Format for Midjourney v6
   */
  static _formatMidjourney(tokens, options) {
    const cleanTokens = tokens.map(t => t.value.replace(/_/g, " ")).join(", ");
    const params = options.mjParams || MODEL_PROFILES.midjourney.defaultParams;
    return `${cleanTokens} ${params}`.trim();
  }

  /**
   * Append style preset modifiers
   */
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

  /**
   * Deterministic token counter approximation
   */
  static _estimateTokens(text) {
    if (!text) return 0;
    // CLIP/T5 tokenizers generally break on words and punctuation
    const wordsAndPunct = text.trim().split(/[\s,._\-:()\[\]]+/);
    return Math.round(wordsAndPunct.length * 1.25);
  }
}
