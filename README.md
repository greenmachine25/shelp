# sHelp — Zero-AI Image Prompt Optimizer & Lexicon Engine

> **100% Zero-AI • Pure Deterministic Rules • Instant & Offline • Local & Perchance Ready**

**sHelp** is a deterministic prompt conversion tool and word database engineered for artists using modern image generation models. It automatically transforms artist prompts into the exact syntax, ordering, and vocabulary required by different text encoders—**without using any external AI, LLMs, or API calls**.

---

## 🎯 Why Zero-AI?

1. **Instant Speed (0ms Network Latency)**: Everything executes deterministically in your browser using pure JavaScript regex and semantic token mapping.
2. **100% Offline & Private**: No prompts leave your machine. Perfect for local ComfyUI, Automatic1111, Forge, and WebUI setups.
3. **Transparent & Predictable**: No AI hallucinations or unexpected alterations. You can inspect every single word swap and rule applied in real time.
4. **Zero Cost & Zero Setup**: No API keys, no Python dependencies, no build tools. Just open `index.html` in any browser.

---

## 🧠 Understanding the Text Encoders: Model Differences

Different diffusion and flow models utilize completely different text encoders that require radically different prompt structures:

| Target Model | Text Encoder | Preferred Format | Key Quirks & Requirements |
| :--- | :--- | :--- | :--- |
| **Flux.1 (Dev / Schnell / Pro)** | **T5-XXL + CLIP-L** | **Natural Story Prose** | Excels with rich descriptive sentences and spatial composition. **Detests tag soup**: tags like `masterpiece`, `8k`, `trending on artstation`, and `score_9` degrade output quality and introduce plastic artifacts. |
| **Pony Diffusion / PonyXL** | **SDXL Danbooru CLIP** | **Danbooru Hierarchy** | Trained on Danbooru tags. **Strictly requires score tags** (`score_9, score_8_up...`) and underscores (`blue_hair`, `looking_at_viewer`). Natural prose causes blurry or degraded results. |
| **SDXL (Base / Custom)** | **OpenCLIP ViT-G + CLIP-L** | **Weighted Chunks** | Comma-separated keyword groups. Earlier tokens receive higher attention weight. Supports attention syntax `(keyword:1.2)`. |
| **Stable Diffusion 1.5** | **CLIP-ViT-L/14** | **Compact (77 Tokens)** | Strict 77-token CLIP window limit. Front-loads key subjects and requires negative prompts. |
| **Midjourney (v6.1)** | **MJ Proprietary** | **Descriptive + Parameters** | Clean scene descriptions with terminal parameter flags (`--ar 16:9 --v 6.1 --style raw`). Avoids buzzwords like "photorealistic". |
| **Perchance** | **Flux Hybrid** | **Clean Descriptive** | Optimized for Perchance's prompt and anti-prompt input fields. |

---

## ⚡ Core Features

- **Automatic Word Swapping & Upgrading**:
  - Replaces generic/vague terms (`nice lighting` ➔ `dramatic chiaroscuro lighting with subtle ambient rim light` for Flux, or `cinematic lighting` for SDXL).
  - Automatically strips toxic buzzwords (`masterpiece`, `8k`, `photorealistic`) when targeting Flux.
  - Automatically injects quality score tags (`score_9, score_8_up, score_7_up`) when targeting PonyXL.
  - Converts Danbooru tags into flowing natural prose for Flux and Perchance.
- **Categorized Lexicon Database**:
  - Searchable database of descriptors covering Entities, Physical Traits, Clothing, Poses, Environments, Lighting, Camera Optics (lenses, films, angles), and Art Styles.
  - 1-click insertion into the prompt formatted for your active engine.
- **Side-by-Side Model Comparison**:
  - Compare how your prompt transforms for Flux, PonyXL, SDXL, and Midjourney simultaneously.
- **Token Estimator & Meter**:
  - Real-time token counter with color-coded warning bars (green, amber, red) based on each model's token limits.
- **Negative Prompt Tuning**:
  - Auto-generates model-tuned negative prompts for Pony (`score_6, score_5...`), SDXL, SD 1.5, and Perchance.
- **Local Custom Word Swaps**:
  - Define custom abbreviations or character shortcuts (e.g. `myoc` ➔ `1girl, silver_hair, purple_eyes, cat_ears, black_cloak`) stored locally in your browser (`localStorage`).
- **1-Click Clipboard Copying**:
  - Copy positive prompt, negative prompt, or comparison outputs with a single click.

---

## 🚀 How to Use

### 1. Run Locally
Simply clone or download this repository and double-click `index.html`:
```bash
git clone https://github.com/greenmachine25/shelp.git
cd shelp
# Double-click index.html or open with any web browser!
```

### 2. GitHub Pages
This repository is configured to be hosted directly on GitHub Pages with zero build steps needed.

---

## 🛠️ Project Structure

```
shelp/
├── index.html              # Main application interface
├── css/
│   └── styles.css          # Responsive modern dark UI styling
├── js/
│   ├── shelp.js            # Standalone unified engine (for local & web)
│   ├── app.js              # Modular entry point
│   ├── data/
│   │   ├── lexicon.js      # Categorized descriptor dictionary
│   │   ├── modelProfiles.js# Text encoder specifications & rules
│   │   └── replacements.js # Word swaps, synonyms, & intent presets
│   └── modules/
│       ├── parser.js       # Semantic token categorizer
│       ├── optimizer.js    # Model transformation engine
│       └── ui.js           # UI state & event management
└── README.md               # Documentation & guide
```

---

## 📄 License

MIT License. Free for local and commercial use.
