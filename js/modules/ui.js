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
    this.currentModel = "flux";
    this.currentIntent = "";
    this.customSwaps = this.loadCustomSwaps();

    this.cacheElements();
    this.bindEvents();
    this.renderLexiconCategories();
    this.renderIntentPresets();
    this.renderCustomSwapsList();
    this.triggerOptimization();
  }

  cacheElements() {
    this.promptInput = document.getElementById("promptInput");
    this.optimizedOutput = document.getElementById("optimizedOutput");
    this.negativeOutput = document.getElementById("negativeOutput");
    this.negativeContainer = document.getElementById("negativeContainer");
    this.tokenMeter = document.getElementById("tokenMeter");
    this.tokenFill = document.getElementById("tokenFill");
    this.tokenCountText = document.getElementById("tokenCountText");
    this.modelSelectPills = document.querySelectorAll(".model-pill");
    this.intentSelect = document.getElementById("intentSelect");
    this.modelDescription = document.getElementById("modelDescription");
    this.modelEngineBadge = document.getElementById("modelEngineBadge");
    this.swapsList = document.getElementById("swapsList");
    this.swapsCard = document.getElementById("swapsCard");
    this.lexiconContainer = document.getElementById("lexiconContainer");
    this.lexiconSearch = document.getElementById("lexiconSearch");
    this.compareGrid = document.getElementById("compareGrid");
    this.compareSection = document.getElementById("compareSection");
    this.toggleCompareBtn = document.getElementById("toggleCompareBtn");
  }

  bindEvents() {
    // Live input update
    this.promptInput.addEventListener("input", () => this.triggerOptimization());

    // Model selection pills
    this.modelSelectPills.forEach(pill => {
      pill.addEventListener("click", (e) => {
        this.modelSelectPills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        this.currentModel = pill.dataset.model;
        this.updateModelInfo();
        this.triggerOptimization();
      });
    });

    // Intent preset change
    this.intentSelect.addEventListener("change", (e) => {
      this.currentIntent = e.target.value;
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
    });

    // Sample prompt pills
    document.querySelectorAll(".sample-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        this.promptInput.value = chip.dataset.sample;
        this.triggerOptimization();
      });
    });

    // Lexicon search
    this.lexiconSearch.addEventListener("input", (e) => {
      this.filterLexicon(e.target.value.toLowerCase());
    });

    // Toggle Side-by-Side Comparison
    this.toggleCompareBtn.addEventListener("click", () => {
      this.toggleComparison();
    });

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

    // Update Token meter
    const percent = Math.min(100, Math.round((result.tokenEstimate / result.maxTokens) * 100));
    this.tokenCountText.textContent = `${result.tokenEstimate} / ${result.maxTokens} tokens`;
    this.tokenFill.style.width = `${percent}%`;

    if (percent > 90) {
      this.tokenFill.style.backgroundColor = "var(--accent-danger)";
    } else if (percent > 70) {
      this.tokenFill.style.backgroundColor = "var(--accent-warning)";
    } else {
      this.tokenFill.style.backgroundColor = "var(--accent-primary)";
    }

    // Update Swaps Card
    this.renderSwapsList(result.swapsApplied);

    // If comparison is open, re-render comparison
    if (this.compareSection.style.display === "block") {
      this.renderComparison();
    }
  }

  renderSwapsList(swaps) {
    if (!swaps || swaps.length === 0) {
      this.swapsCard.style.display = "none";
      return;
    }

    this.swapsCard.style.display = "block";
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
          this.insertIntoPrompt(item);
        });
        chipContainer.appendChild(chip);
      });

      catWrapper.appendChild(chipContainer);
      this.lexiconContainer.appendChild(catWrapper);
    });
  }

  insertIntoPrompt(lexiconItem) {
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

  filterLexicon(query) {
    const groups = document.querySelectorAll(".lexicon-category-group");
    groups.forEach(group => {
      let hasVisibleChild = false;
      const chips = group.querySelectorAll(".lexicon-chip");
      chips.forEach(chip => {
        const match = chip.textContent.toLowerCase().includes(query) || chip.title.toLowerCase().includes(query);
        chip.style.display = match ? "inline-flex" : "none";
        if (match) hasVisibleChild = true;
      });
      group.style.display = hasVisibleChild ? "block" : "none";
    });
  }

  renderIntentPresets() {
    this.intentSelect.innerHTML = `<option value="">None (Standard Artist Intent)</option>`;
    INTENT_PRESETS.forEach(preset => {
      const opt = document.createElement("option");
      opt.value = preset.id;
      opt.textContent = `${preset.name} - ${preset.description.slice(0, 45)}...`;
      this.intentSelect.appendChild(opt);
    });
  }

  toggleComparison() {
    const isShowing = this.compareSection.style.display === "block";
    this.compareSection.style.display = isShowing ? "none" : "block";
    this.toggleCompareBtn.textContent = isShowing ? "Compare All Models Side-by-Side" : "Hide Comparison View";
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
          <button class="btn btn-sm btn-secondary copy-sub-btn" data-text="${this.escapeAttr(res.prompt)}">Copy</button>
        </div>
      `;
    }).join("");

    this.compareGrid.querySelectorAll(".copy-sub-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        navigator.clipboard.writeText(btn.dataset.text);
        const orig = btn.textContent;
        btn.textContent = "Copied!";
        setTimeout(() => btn.textContent = orig, 1500);
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

    if (this.customSwaps.length === 0) {
      container.innerHTML = `<p class="text-muted" style="font-size:0.85rem;">No custom word replacements configured yet.</p>`;
      return;
    }

    container.innerHTML = this.customSwaps.map(item => `
      <div class="custom-swap-pill">
        <span><strong>${this.escapeHtml(item.word)}</strong> ➔ ${this.escapeHtml(item.replacement)}</span>
        <button class="delete-swap-btn" data-id="${item.id}" title="Remove">✕</button>
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
