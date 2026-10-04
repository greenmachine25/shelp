/**
 * sHelp Parser Module (Deterministic Tokenizer & Categorizer)
 * Parses user input prompts (comma-separated, tag-soup, or natural sentences)
 * into classified semantic units with weights, categories, and cleanup.
 */

import { LEXICON } from "../data/lexicon.js";

export class PromptParser {
  /**
   * Parse raw text into structured tokens
   * @param {string} rawText 
   * @returns {Object} { tokens: Array, parameters: Object, isProse: boolean }
   */
  static parse(rawText) {
    if (!rawText || !rawText.trim()) {
      return { tokens: [], parameters: {}, isProse: false, raw: "" };
    }

    let text = rawText.trim();

    // 1. Extract parameter flags (e.g., --ar 16:9, --v 6.1, --no text)
    const parameters = {};
    const paramRegex = /--([a-zA-Z0-9_-]+)(?:\s+([^\s-]+))?/g;
    let match;
    while ((match = paramRegex.exec(text)) !== null) {
      parameters[match[1]] = match[2] || true;
    }
    // Remove flags from main text
    text = text.replace(paramRegex, "").trim();

    // 2. Detect if text is mostly natural prose or comma-separated tags
    const commaCount = (text.match(/,/g) || []).length;
    const periodCount = (text.match(/\./g) || []).length;
    const wordCount = text.split(/\s+/).length;
    const isProse = commaCount < 3 && periodCount >= 1 && wordCount > 8;

    // 3. Split into units: If comma-separated, split by comma; else split by sentence/clause
    let rawUnits = [];
    if (isProse) {
      rawUnits = text
        .split(/(?<=[.!?])\s+/)
        .map(u => u.trim())
        .filter(u => u.length > 0);
    } else {
      rawUnits = text
        .split(",")
        .map(u => u.trim())
        .filter(u => u.length > 0);
    }

    // 4. Tokenize and categorize each unit
    const tokens = rawUnits.map((unit, index) => {
      return this._classifyToken(unit, index);
    });

    return {
      tokens,
      parameters,
      isProse,
      raw: rawText
    };
  }

  /**
   * Classify a single token into category, weight, and clean value
   */
  static _classifyToken(rawUnit, index) {
    let cleanUnit = rawUnit.trim();
    let weight = 1.0;

    // Check for weight syntax: (tag:1.2) or (tag) or ((tag)) or [tag]
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

    // Categorization logic
    let category = "general";
    let matchedLexicon = null;

    // A. Check Score / Rating Tags
    if (/^score_\d+(_up)?$/i.test(booruNormalized) || /^rating(:|_)/i.test(booruNormalized) || /source_/i.test(booruNormalized)) {
      category = "score_tags";
    }
    // B. Check Subject Counts / Entities
    else if (/^(1girl|1boy|2girls|2boys|multiple_girls|multiple_boys|solo|couple|group)$/i.test(booruNormalized)) {
      category = "subject_count";
    }
    // C. Match against Lexicon
    else {
      // Search in Lexicon
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

    // D. Fallback Heuristics for Unmatched Tokens
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

  /**
   * Map lexicon keys to standardized pipeline categories
   */
  static _mapLexiconCategory(lexKey) {
    switch (lexKey) {
      case "subjects": return "subject_count";
      case "physical_traits": return "physical_traits";
      case "clothing": return "clothing";
      case "expressions_poses": return "expression_pose";
      case "environments": return "environment";
      case "lighting": return "lighting_camera";
      case "camera_framing": return "lighting_camera";
      case "styles_mediums": return "style_medium";
      default: return "general";
    }
  }

  /**
   * Keyword heuristics for categorizing standard Danbooru & English tags
   */
  static _heuristicCategory(tag) {
    if (/(eyes|hair|skin|face|body|freckles|ears|wings|tail|horns|breasts|thighs)/i.test(tag)) {
      return "physical_traits";
    }
    if (/(shirt|dress|skirt|pants|jacket|hoodie|uniform|hat|gloves|shoes|boots|costume|suit|armor|ribbon|collar)/i.test(tag)) {
      return "clothing";
    }
    if (/(looking_|smile|smirk|standing|sitting|lying|holding|arms|hands|expression|pose|view|gaze|crying|laughing)/i.test(tag)) {
      return "expression_pose";
    }
    if (/(outdoors|indoors|city|room|street|forest|sky|night|day|sunset|rain|snow|building|space|water|beach|ruins)/i.test(tag)) {
      return "environment";
    }
    if (/(lighting|shadow|glow|sunlight|neon|bokeh|lens|angle|shot|view|dof|chiaroscuro|rays)/i.test(tag)) {
      return "lighting_camera";
    }
    if (/(artstyle|medium|render|painting|watercolor|illustration|anime|photo|realistic|masterpiece|aesthetic|style|artist|lineart|linework|cel|shading|xpi|sigma|ravenous|russ|awd|xaxaxa|elvgren|sorayama)/i.test(tag)) {
      return "style_medium";
    }
    return "general";
  }
}
