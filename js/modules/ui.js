/**
 * sHelp UI Controller & Event Handlers
 * Manages DOM interactions, live conversions, lexicon explorer,
 * side-by-side comparison, and clipboard operations.
 */

import { LEXICON } from "../data/lexicon.js";
import { MODEL_PROFILES } from "../data/modelProfiles.js";
import { INTENT_PRESETS } from "../data/replacements.js";
import { PromptOptimizer } from "./optimizer.js";

export class UIController {
  constructor() {
    const cachedPrefs = this.loadCachedPreferences();
    this.currentModel = cachedPrefs.model;
    this.currentIntent = cachedPrefs.intent;
    this.customSwaps = this.loadCustomSwaps();
    this.activeLexiconCategory = "all";

    this.cacheElements();
    this.applyInitialModel();
    this.bindEvents();
    this.renderLexiconCategories();
    this.renderIntentPresets();
    this.renderCustomSwapsList();
    this.triggerOptimization();
  }

  loadCachedPreferences() {
    try {
      const savedModel = localStorage.getItem("shelp_last_model");
      const savedIntent = localStorage.getItem("shelp_last_intent");
      const model = (savedModel && MODEL_PROFILES[savedModel]) ? savedModel : "flux";
      const intent = savedIntent || "";
      return { model, intent };
    } catch (e) {
      return { model: "flux", intent: "" };
    }
  }

  saveCachedModel(modelId) {
    try {
      localStorage.setItem("shelp_last_model", modelId);
    } catch (e) {
      // LocalStorage access restricted
    }
  }

  saveCachedIntent(intentId) {
    try {
      localStorage.setItem("shelp_last_intent", intentId);
    } catch (e) {
      // LocalStorage access restricted
    }
  }

  cacheElements() {
    this.promptInput = document.getElementById("promptInput");
    this.optimizedOutput = document.getElementById("optimizedOutput");
    this.negativeOutput = document.getElementById("negativeOutput");
    this.negativeContainer = document.getElementById("negativeContainer");
    this.tokenMeter = document.getElementById("tokenMeter");
    this.tokenFill = document.getElementById("tokenFill");
    this.tokenCountText = document.getElementById("tokenCountText");
    this.tokenStatusPill = document.getElementById("tokenStatusPill");
    this.inputStats = document.getElementById("inputStats");
    this.outputStats = document.getElementById("outputStats");
    this.modelSelectPills = document.querySelectorAll(".model-pill");
    this.intentSelect = document.getElementById("intentSelect");
    this.activePresetTag = document.getElementById("activePresetTag");
    this.presetStyleInfo = document.getElementById("presetStyleInfo");
    this.presetInfoTitle = document.getElementById("presetInfoTitle");
    this.presetInfoDesc = document.getElementById("presetInfoDesc");
    this.modelDescription = document.getElementById("modelDescription");
    this.modelEngineBadge = document.getElementById("modelEngineBadge");
    this.swapsDrawer = document.getElementById("swapsDrawer");
    this.swapsCountBadge = document.getElementById("swapsCountBadge");
    this.swapsList = document.getElementById("swapsList");
    this.customSwapsDrawer = document.getElementById("customSwapsDrawer");
    this.customSwapBadge = document.getElementById("customSwapBadge");
    this.lexiconContainer = document.getElementById("lexiconContainer");
    this.lexiconSearch = document.getElementById("lexiconSearch");
    this.lexiconFilterBar = document.getElementById("lexiconFilterBar");
    this.compareGrid = document.getElementById("compareGrid");
    this.compareSection = document.getElementById("compareSection");
    this.toggleCompareBtn = document.getElementById("toggleCompareBtn");
    this.closeCompareBtn = document.getElementById("closeCompareBtn");
    this.pastePromptBtn = document.getElementById("pastePromptBtn");
  }

  applyInitialModel() {
    if (this.modelSelectPills && this.modelSelectPills.length > 0) {
      this.modelSelectPills.forEach(pill => {
        if (pill.dataset.model === this.currentModel) {
          pill.classList.add("active");
        } else {
          pill.classList.remove("active");
        }
      });
    }
    this.updateModelInfo();
  }

  bindEvents() {
    // Live input update
    this.promptInput.addEventListener("input", () => this.triggerOptimization());

    // Model selection pills
    this.modelSelectPills.forEach(pill => {
      pill.addEventListener("click", () => {
        this.modelSelectPills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        this.currentModel = pill.dataset.model;
        this.saveCachedModel(this.currentModel);
        this.updateModelInfo();
        this.triggerOptimization();
      });
    });

    // Intent preset change
    this.intentSelect.addEventListener("change", (e) => {
      this.currentIntent = e.target.value;
      this.saveCachedIntent(this.currentIntent);
      this.updatePresetInfo(e.target.value);
      this.triggerOptimization();
    });

    // Copy buttons
    document.getElementById("copyPromptBtn").addEventListener("click", () => {
      this.copyToClipboard(this.optimizedOutput.value, "copyPromptBtn");
    });

    document.getElementById("copyNegBtn").addEventListener("click", () => {
      this.copyToClipboard(this.negativeOutput.value, "copyNegBtn");
    });

    document.getElementById("clearPromptBtn").addEventListener("click", () => {
      this.promptInput.value = "";
      this.triggerOptimization();
      this.promptInput.focus();
    });

    // Paste button
    if (this.pastePromptBtn) {
      this.pastePromptBtn.addEventListener("click", async () => {
        try {
          const text = await navigator.clipboard.readText();
          if (text) {
            this.promptInput.value = text;
            this.triggerOptimization();
          }
        } catch (err) {
          // Clipboard read denied, focus textarea so user can Ctrl+V
          this.promptInput.focus();
        }
      });
    }

    // Sample prompt pills
    document.querySelectorAll(".sample-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        this.promptInput.value = chip.dataset.sample;
        this.triggerOptimization();
      });
    });

    // Lexicon search
    this.lexiconSearch.addEventListener("input", () => {
      this.filterLexicon();
    });

    // Lexicon category filter tabs
    if (this.lexiconFilterBar) {
      this.lexiconFilterBar.querySelectorAll(".lexicon-tab").forEach(tab => {
        tab.addEventListener("click", () => {
          this.lexiconFilterBar.querySelectorAll(".lexicon-tab").forEach(t => t.classList.remove("active"));
          tab.classList.add("active");
          this.activeLexiconCategory = tab.dataset.category;
          this.filterLexicon();
        });
      });
    }

    // Toggle Side-by-Side Comparison
    this.toggleCompareBtn.addEventListener("click", () => {
      this.toggleComparison();
    });

    if (this.closeCompareBtn) {
      this.closeCompareBtn.addEventListener("click", () => {
        this.compareSection.style.display = "none";
        this.toggleCompareBtn.innerHTML = `<span>🔄</span> Compare`;
      });
    }

    // Custom Swaps form
    const addSwapBtn = document.getElementById("addSwapBtn");
    if (addSwapBtn) {
      addSwapBtn.addEventListener("click", () => this.handleAddNewSwap());
    }
  }

  updateModelInfo() {
    const profile = MODEL_PROFILES[this.currentModel];
    if (this.modelDescription) {
      this.modelDescription.textContent = profile.description;
    }
    if (this.modelEngineBadge) {
      this.modelEngineBadge.textContent = profile.engine;
    }

    if (profile.supportsNegative) {
      this.negativeContainer.style.display = "block";
    } else {
      this.negativeContainer.style.display = "none";
    }
  }

  triggerOptimization() {
    const rawText = this.promptInput.value;
    const result = PromptOptimizer.optimize(rawText, this.currentModel, {
      intentPresetId: this.currentIntent,
      customSwaps: this.customSwaps
    });

    // Set outputs
    this.optimizedOutput.value = result.prompt;
    this.negativeOutput.value = result.negativePrompt;

    // Word & Character count stats
    const inWords = rawText.trim() ? rawText.trim().split(/\s+/).length : 0;
    const inChars = rawText.length;
    if (this.inputStats) {
      this.inputStats.textContent = `${inWords} words • ${inChars} chars`;
    }

    const outWords = result.prompt.trim() ? result.prompt.trim().split(/\s+/).length : 0;
    const outChars = result.prompt.length;
    if (this.outputStats) {
      this.outputStats.textContent = `${outWords} words • ${outChars} chars`;
    }

    // Update Token meter
    const percent = Math.min(100, Math.round((result.tokenEstimate / result.maxTokens) * 100));
    this.tokenCountText.textContent = `${result.tokenEstimate} / ${result.maxTokens} tokens`;
    this.tokenFill.style.width = `${percent}%`;

    if (percent > 90) {
      this.tokenFill.style.background = "var(--accent-danger)";
      if (this.tokenStatusPill) {
        this.tokenStatusPill.textContent = "Near Limit";
        this.tokenStatusPill.style.background = "rgba(255, 42, 133, 0.15)";
        this.tokenStatusPill.style.color = "var(--accent-pink)";
        this.tokenStatusPill.style.borderColor = "rgba(255, 42, 133, 0.4)";
      }
    } else if (percent > 70) {
      this.tokenFill.style.background = "var(--accent-warning)";
      if (this.tokenStatusPill) {
        this.tokenStatusPill.textContent = "Moderate Load";
        this.tokenStatusPill.style.background = "rgba(251, 191, 36, 0.15)";
        this.tokenStatusPill.style.color = "var(--accent-warning)";
        this.tokenStatusPill.style.borderColor = "rgba(251, 191, 36, 0.4)";
      }
    } else {
      this.tokenFill.style.background = "var(--gradient-accent-h)";
      if (this.tokenStatusPill) {
        this.tokenStatusPill.textContent = "Within Limit";
        this.tokenStatusPill.style.background = "rgba(0, 255, 135, 0.1)";
        this.tokenStatusPill.style.color = "var(--accent-green)";
        this.tokenStatusPill.style.borderColor = "rgba(0, 255, 135, 0.3)";
      }
    }

    // Update Swaps Card / Drawer
    this.renderSwapsList(result.swapsApplied);

    // If comparison is open, re-render comparison
    if (this.compareSection.style.display === "block") {
      this.renderComparison();
    }
  }

  renderSwapsList(swaps) {
    if (!swaps || swaps.length === 0) {
      if (this.swapsDrawer) this.swapsDrawer.style.display = "none";
      if (this.swapsCountBadge) this.swapsCountBadge.textContent = "0";
      return;
    }

    if (this.swapsDrawer) {
      this.swapsDrawer.style.display = "block";
    }
    if (this.swapsCountBadge) {
      this.swapsCountBadge.textContent = swaps.length;
    }

    this.swapsList.innerHTML = swaps.map(swap => `
      <div class="swap-item">
        <span class="swap-original">${this.escapeHtml(swap.original)}</span>
        <span class="swap-arrow">➔</span>
        <span class="swap-replaced">${this.escapeHtml(swap.replacedWith)}</span>
        <span class="swap-reason">${this.escapeHtml(swap.reason)}</span>
      </div>
    `).join("");
  }

  renderLexiconCategories() {
    this.lexiconContainer.innerHTML = "";

    const categoryTitles = {
      subjects: "Entities & Subjects",
      physical_traits: "Physical Traits & Hair",
      clothing: "Clothing & Attire",
      expressions_poses: "Poses & Expressions",
      environments: "Environments & Backgrounds",
      lighting: "Lighting & Atmosphere",
      camera_framing: "Camera & Optics (Flux/SDXL)",
      styles_mediums: "Art Styles & Mediums"
    };

    Object.entries(LEXICON).forEach(([catKey, items]) => {
      const catWrapper = document.createElement("div");
      catWrapper.className = "lexicon-category-group";
      catWrapper.dataset.cat = catKey;

      const title = document.createElement("h4");
      title.className = "lexicon-category-title";
      title.textContent = categoryTitles[catKey] || catKey;
      catWrapper.appendChild(title);

      const chipContainer = document.createElement("div");
      chipContainer.className = "lexicon-chips-wrapper";

      items.forEach(item => {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "lexicon-chip";
        chip.textContent = item.label;
        chip.title = `Flux: ${item.flux}\nPony: ${item.danbooru}\nSDXL: ${item.sdxl}`;
        chip.addEventListener("click", () => {
          this.insertIntoPrompt(item, chip);
        });
        chipContainer.appendChild(chip);
      });

      catWrapper.appendChild(chipContainer);
      this.lexiconContainer.appendChild(catWrapper);
    });
  }

  insertIntoPrompt(lexiconItem, chipElement) {
    // Visual click confirmation feedback
    if (chipElement) {
      const origText = chipElement.textContent;
      chipElement.classList.add("chip-added");
      chipElement.textContent = "✓ Added!";
      setTimeout(() => {
        chipElement.classList.remove("chip-added");
        chipElement.textContent = origText;
      }, 650);
    }

    // Determine appropriate representation based on current model
    let insertion = "";
    if (this.currentModel === "pony") {
      insertion = lexiconItem.danbooru;
    } else if (this.currentModel === "flux" || this.currentModel === "perchance") {
      insertion = lexiconItem.flux;
    } else {
      insertion = lexiconItem.sdxl;
    }

    const currentVal = this.promptInput.value.trim();
    if (currentVal.length === 0) {
      this.promptInput.value = insertion;
    } else {
      this.promptInput.value = currentVal.endsWith(",") ? `${currentVal} ${insertion}` : `${currentVal}, ${insertion}`;
    }

    this.triggerOptimization();
    this.promptInput.focus();
  }

  filterLexicon() {
    const query = this.lexiconSearch ? this.lexiconSearch.value.toLowerCase().trim() : "";
    const activeCategory = this.activeLexiconCategory || "all";
    const groups = document.querySelectorAll(".lexicon-category-group");

    groups.forEach(group => {
      const groupCat = group.dataset.cat;
      const isCatMatch = (activeCategory === "all" || groupCat === activeCategory);

      if (!isCatMatch) {
        group.style.display = "none";
        return;
      }

      let hasVisibleChild = false;
      const chips = group.querySelectorAll(".lexicon-chip");
      chips.forEach(chip => {
        const textMatch = !query || chip.textContent.toLowerCase().includes(query) || chip.title.toLowerCase().includes(query);
        chip.style.display = textMatch ? "inline-flex" : "none";
        if (textMatch) hasVisibleChild = true;
      });

      group.style.display = hasVisibleChild ? "block" : "none";
    });
  }

  renderIntentPresets() {
    this.intentSelect.innerHTML = `<option value="">None (Standard Artist Intent)</option>`;
    INTENT_PRESETS.forEach(preset => {
      const opt = document.createElement("option");
      opt.value = preset.id;
      const subtitle = preset.shortDesc ? ` (${preset.shortDesc})` : "";
      opt.textContent = `${preset.name}${subtitle}`;
      this.intentSelect.appendChild(opt);
    });

    if (this.currentIntent) {
      const exists = INTENT_PRESETS.some(p => p.id === this.currentIntent);
      if (exists) {
        this.intentSelect.value = this.currentIntent;
        this.updatePresetInfo(this.currentIntent);
      } else {
        this.currentIntent = "";
        this.saveCachedIntent("");
        this.updatePresetInfo("");
      }
    } else {
      this.updatePresetInfo("");
    }
  }

  updatePresetInfo(presetId) {
    if (!presetId) {
      if (this.presetStyleInfo) this.presetStyleInfo.style.display = "none";
      if (this.activePresetTag) this.activePresetTag.textContent = "Default";
      return;
    }
    const preset = INTENT_PRESETS.find(p => p.id === presetId);
    if (!preset) {
      if (this.presetStyleInfo) this.presetStyleInfo.style.display = "none";
      if (this.activePresetTag) this.activePresetTag.textContent = "Default";
      return;
    }
    if (this.activePresetTag) {
      this.activePresetTag.textContent = preset.name;
    }
    if (this.presetStyleInfo) {
      this.presetStyleInfo.style.display = "block";
      this.presetInfoTitle.textContent = `🎨 Decomposed Style DNA: ${preset.name}`;
      this.presetInfoDesc.textContent = preset.description;
    }
  }

  toggleComparison() {
    const isShowing = this.compareSection.style.display === "block";
    this.compareSection.style.display = isShowing ? "none" : "block";
    this.toggleCompareBtn.innerHTML = isShowing 
      ? `<span>🔄</span> Compare` 
      : `<span>✕</span> Close Compare`;

    if (!isShowing) {
      this.renderComparison();
      this.compareSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  renderComparison() {
    const rawText = this.promptInput.value;
    const models = ["flux", "pony", "sdxl", "midjourney"];
    
    this.compareGrid.innerHTML = models.map(mId => {
      const res = PromptOptimizer.optimize(rawText, mId, {
        intentPresetId: this.currentIntent,
        customSwaps: this.customSwaps
      });
      return `
        <div class="compare-card">
          <div class="compare-header">
            <h4>${res.modelName}</h4>
            <span class="badge">${res.tokenEstimate} tokens</span>
          </div>
          <div class="compare-body">
            <p class="compare-prompt">${this.escapeHtml(res.prompt || "(Empty prompt)")}</p>
            ${res.negativePrompt ? `
              <div class="compare-neg">
                <strong>Negative:</strong> ${this.escapeHtml(res.negativePrompt)}
              </div>
            ` : ""}
          </div>
          <button type="button" class="btn btn-xs btn-secondary copy-sub-btn" data-text="${this.escapeAttr(res.prompt)}">📋 Copy</button>
        </div>
      `;
    }).join("");

    this.compareGrid.querySelectorAll(".copy-sub-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        navigator.clipboard.writeText(btn.dataset.text);
        const orig = btn.innerHTML;
        btn.innerHTML = "✓ Copied!";
        btn.classList.add("btn-success");
        setTimeout(() => {
          btn.innerHTML = orig;
          btn.classList.remove("btn-success");
        }, 1500);
      });
    });
  }

  copyToClipboard(text, buttonId) {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      const btn = document.getElementById(buttonId);
      const originalText = btn.innerHTML;
      btn.innerHTML = `<span class="check-icon">✓</span> Copied!`;
      btn.classList.add("btn-success");
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.classList.remove("btn-success");
      }, 1500);
    });
  }

  loadCustomSwaps() {
    try {
      const stored = localStorage.getItem("shelp_custom_swaps");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  saveCustomSwaps() {
    localStorage.setItem("shelp_custom_swaps", JSON.stringify(this.customSwaps));
  }

  handleAddNewSwap() {
    const wordInput = document.getElementById("customWordInput");
    const replacementInput = document.getElementById("customReplacementInput");

    const word = wordInput.value.trim();
    const replacement = replacementInput.value.trim();

    if (!word || !replacement) {
      alert("Please enter both the word to find and its replacement.");
      return;
    }

    this.customSwaps.push({ word, replacement, id: Date.now() });
    this.saveCustomSwaps();
    this.renderCustomSwapsList();
    wordInput.value = "";
    replacementInput.value = "";
    this.triggerOptimization();
  }

  renderCustomSwapsList() {
    const container = document.getElementById("customSwapsList");
    if (!container) return;

    if (this.customSwapBadge) {
      this.customSwapBadge.textContent = this.customSwaps.length;
    }

    if (this.customSwaps.length === 0) {
      container.innerHTML = `<p class="text-muted" style="font-size:0.82rem; margin-top:0.35rem;">No custom word replacements configured yet.</p>`;
      return;
    }

    container.innerHTML = this.customSwaps.map(item => `
      <div class="custom-swap-pill">
        <span><strong>${this.escapeHtml(item.word)}</strong> ➔ ${this.escapeHtml(item.replacement)}</span>
        <button type="button" class="delete-swap-btn" data-id="${item.id}" title="Remove">✕</button>
      </div>
    `).join("");

    container.querySelectorAll(".delete-swap-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.dataset.id, 10);
        this.customSwaps = this.customSwaps.filter(s => s.id !== id);
        this.saveCustomSwaps();
        this.renderCustomSwapsList();
        this.triggerOptimization();
      });
    });
  }

  escapeHtml(str) {
    if (!str) return "";
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  escapeAttr(str) {
    if (!str) return "";
    return str.replace(/"/g, "&quot;");
  }
}
