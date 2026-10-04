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
      prose = prose.replace(/_([a-z0-9])/gi, " $1");
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
      const cat = groups[t.category] ? t.category : "general";
      groups[cat].push(readable);
    });

    const sentences = [];

    // 1. Opening Art Direction & Subject Anchor
    let stylePhrase = selectedPreset 
      ? selectedPreset.fluxAdditions 
      : (groups.style_medium.join(", ") || "an exquisite adult pinup illustration with crisp vector linework and clean cel shading");
    
    let subj = groups.subject_count.join(" and ") || "an alluring adult woman";
    let phys = groups.physical_traits.length > 0 ? `with ${groups.physical_traits.join(", ")}` : "with a voluptuous hourglass figure";
    
    sentences.push(`An exquisite stylized adult pinup illustration ${stylePhrase.startsWith("in ") ? stylePhrase : "in " + stylePhrase}, featuring ${subj} ${phys}.`);

    // 2. Pose, Gaze & Attire Integration
    let pose = groups.expression_pose.length > 0 ? groups.expression_pose.join(", ") : "an alluring arched back pose";
    let attire = groups.clothing.length > 0 ? groups.clothing.join(", ") : null;
    if (attire) {
      sentences.push(`She strikes a seductive pose with ${pose}, dressed in ${attire} that accentuates her feminine silhouette.`);
    } else {
      sentences.push(`She strikes a confident, seductive pinup pose with ${pose}.`);
    }

    // 3. Spatial Setting & Atmospheric Lighting Physics
    let env = groups.environment.length > 0 ? groups.environment.join(", ") : null;
    let light = groups.lighting_camera.length > 0 
      ? groups.lighting_camera.join(", ") 
      : "warm amber candlelight with soft sensual rim highlights tracing her contours";
    
    if (env) {
      sentences.push(`The scene is set in ${env}, warmly illuminated by ${light}.`);
    } else {
      sentences.push(`Illuminated by ${light}.`);
    }

    // 4. Any general details
    if (groups.general.length > 0) {
      sentences.push(`Detailed with ${groups.general.join(", ")}.`);
    }

    return sentences.join(" ").replace(/\s\./g, ".").replace(/\s+/g, " ").trim();
  }

  /**
   * Format for PonyXL (Strict Danbooru Ordering, Artist Prioritization & Score Conditioning)
   */
  static _formatPonyHierarchy(tokens, options, selectedPreset) {
    const hierarchy = [
      "score_tags",
      "source_rating",
      "artist_tag",
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

    // 3. Artist Tag Prioritization from Preset (Front-loaded for maximum CLIP attention)
    if (selectedPreset && selectedPreset.ponyAdditions) {
      const presetTags = selectedPreset.ponyAdditions.split(/,\s*/);
      presetTags.forEach(pt => {
        const ptClean = pt.trim();
        if (ptClean.startsWith("by_") || ptClean === "xaxaxa" || ptClean === "awd!" || ptClean === "awd" || ptClean === "ravenous_russ") {
          buckets["artist_tag"].push(ptClean);
        } else if (!buckets["style_medium"].includes(ptClean) && !buckets["score_tags"].includes(ptClean)) {
          buckets["style_medium"].push(ptClean);
        }
      });
    }

    // Sort user tokens
    tokens.forEach(t => {
      let tag = t.value.toLowerCase().trim().replace(/\s+/g, "_");
      if (t.category === "score_tags") {
        if (!buckets["score_tags"].includes(tag)) buckets["score_tags"].push(tag);
      } else if (tag.startsWith("by_") || tag === "xaxaxa" || tag === "awd!" || tag === "awd" || tag === "ravenous_russ") {
        if (!buckets["artist_tag"].includes(tag)) buckets["artist_tag"].push(tag);
      } else if (buckets[t.category]) {
        buckets[t.category].push(tag);
      } else {
        buckets["expression_pose"].push(tag);
      }
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
   * Format for SDXL / SD 1.5 (Weighted Tag Chunks)
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
   * Format for Midjourney Niji 6
   */
  static _formatMidjourney(tokens, options, selectedPreset) {
    const cleanTokens = tokens.map(t => t.value.replace(/_/g, " ")).join(", ");
    const presetAdditions = selectedPreset ? (selectedPreset.mjAdditions || "") : "";
    const params = options.mjParams || MODEL_PROFILES.midjourney.defaultParams;
    return `${cleanTokens} ${presetAdditions} ${params}`.replace(/\s+/g, " ").trim();
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
