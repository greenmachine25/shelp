# sHelp — Zero-AI Prompt Optimizer & Lexicon Engine
### 🎨 Dedicated to Anime, Cartoon & Stylized Digital Art (Zero Realism)

> **100% Zero-AI • Pure Deterministic Rules • Instant & Offline • Local ComfyUI, Forge & Perchance Ready**

**sHelp** is a deterministic prompt conversion tool and descriptor database engineered specifically for **Anime, Cartoon, and Stylized 2D/Digital Art** workflows. It automatically formats, translates, and orders prompts for text encoders in models like **PonyXL**, **Flux.1**, **SDXL (Animagine / Illustrious)**, **Perchance**, and **Midjourney Niji 6**—**without using any external AI, LLMs, or API calls**.

---

## 🚫 The "Zero Realism" Guarantee

Most generic prompt optimizers pollute prompts with photographic terms (*"photorealistic, 8k, raw photo, 85mm f/1.4 lens, natural skin pores, dslr"*). In stylized anime and cartoon models, **realism words destroy the aesthetic**, leading to ugly uncanny-valley hybrid faces, plastic 3D textures, and ruined 2D linework.

**sHelp actively enforces Zero Realism:**
1. **Realism Purging & Translation**: Any input terms like `photorealistic`, `photo`, `realistic`, or `camera` are deterministically stripped or converted into high-impact 2D equivalents (e.g., `clean vector lineart, rich digital cel shading, studio anime visual`).
2. **Anti-Realism Negative Prompting**: For models with negative prompts (Pony, SDXL, SD 1.5, Perchance), sHelp automatically injects anti-realism tokens (`realistic, photo, photorealistic, 3d, realistic skin, photograph`) to guarantee pure 2D stylized results.
3. **Midjourney Niji 6 Integration**: Automatically switches Midjourney commands to `--niji 6` (Midjourney's dedicated anime and illustration model) rather than the default photorealistic engine.

---

## 🧠 Model Text Encoders: Anime & Cartoon Optimization

| Target Model | Text Encoder | Preferred Format | Key Stylized Quirks & Rules |
| :--- | :--- | :--- | :--- |
| **Flux.1** (Dev/Schnell/Pro) | **T5-XXL + CLIP-L** | **Animated Scene Prose** | Excels with rich descriptive narrative sentences detailing 2D animation, linework, and painted backgrounds. **Detests tag soup and score tags**: terms like `masterpiece`, `8k`, and `score_9` degrade Flux output. |
| **Pony Diffusion / PonyXL** | **SDXL Danbooru CLIP** | **Danbooru Hierarchy** | Trained on Danbooru tags. **Strictly requires positive score tags** (`score_9, score_8_up...`) and underscores (`twintails`, `looking_at_viewer`). Pushes `realistic, photo, 3d` directly into negative prompt. |
| **SDXL (Animagine / Illustrious)** | **Dual CLIP (ViT-G + CLIP-L)** | **Weighted Anime Tags** | Comma-separated keyword groups. Emphasizes early tokens with weighted syntax `(clean lineart:1.15)`. Suppresses 3D/realism in the negative prompt. |
| **Stable Diffusion 1.5** | **CLIP-ViT-L/14 (77 Tokens)** | **Compact Tag Budgeting** | Optimized for anime checkpoints (Anything, Counterfeit, OrangeMix). Strict 77-token window front-loading character and style. |
| **Midjourney (Niji 6)** | **Niji 6 Engine** | **Anime Parameters** | Uses `--niji 6 --style expressive` (or `--style cute`) for authentic Japanese animation, manga layouts, and stylized digital art. |
| **Perchance** | **Flux Hybrid** | **Clean 2D Prose** | Formats clean descriptive anime prompts for Perchance's prompt and anti-prompt inputs with zero clutter. |

---

## ⚡ Core Features

- **Anti-Realism Word Swapper ("Applied Swaps Inspector")**:
  - Automatically translates colloquial words into model-specific stylized terminology.
  - Displays a live badge list of every swapped word and the exact rationale behind it.
- **Dedicated Anime & Cartoon Lexicon Database**:
  - Searchable database categorized across:
    - **Anime Archetypes & Subjects** (1girl, magical girl, mecha pilot, chibi, cartoon hero, samurai)
    - **Hair, Eyes & Stylized Traits** (twintails, ahoge, sparkling anime eyes, gradient hair, cute fang, blush)
    - **Costumes & Uniforms** (serafuku sailor uniform, oversized hoodie, plugsuit, frilled maid dress, techwear ninja)
    - **Expressions & Sakuga Poses** (peace sign, pout, dynamic battle leap, foreshortening, spellcasting)
    - **Backgrounds & Shinkai Skies** (painted cloudscapes, sakura avenue, Neo-Tokyo rooftop, lofi bedroom)
    - **Lighting, Auras & Anime VFX** (sakuga impact sparks, cel gradient, surging energy aura, shojo sparkles)
    - **Manga Screentones, Angles & Framing** (Dutch tilt, speed lines, halftone screentones, chromatic fringing)
    - **Dedicated Styles & Mediums** (Modern Anime Film, Retro 80s/90s Cel OVA, Digital Splash Art, 90s Western Cartoon, Arcane / Spider-Verse Painterly, 16-Bit Pixel Art)
  - 1-click insertion formatted for your active engine.
- **Side-by-Side Model Comparison**:
  - Compare how your prompt transforms across Flux, PonyXL, SDXL, and Midjourney Niji 6 at the same time.
- **Token Estimator & Meter**:
  - Real-time token counter with color-coded safety thresholds (green, amber, red).
- **Custom Local Swaps (`localStorage`)**:
  - Define your own shorthand character shortcuts (e.g. `myoc` ➔ `1girl, silver_hair, purple_eyes, cat_ears, black_cloak`).
- **1-Click Clipboard Actions**:
  - Copy positive prompt, negative prompt, or comparison outputs instantly.

---

## 🚀 How to Run

### Local Use (100% Offline)
Simply double-click `index.html` in Windows Explorer or open it in any web browser. No Python, no Node.js, and no web server required:
```bash
git clone https://github.com/greenmachine25/shelp.git
cd shelp
# Double-click index.html!
```

### GitHub Pages
Ready to be hosted directly on GitHub Pages with zero build steps needed.

---

## 📄 License

MIT License. Free for local and commercial use.
