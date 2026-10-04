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
          if (swap.pattern) swap.pattern.lastIndex = 0;
          if (swap.pattern.test(currentVal)) {
            const replacement = swap[targetModelId] !== undefined ? swap[targetModelId] : (swap.sdxl || "");
            if (replacement !== currentVal) {
              swapsApplied.push({
                original: currentVal,
                replacedWith: replacement || "[stripped for model]",
                reason: swap.reason || `Optimized for ${profile.name}`
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
