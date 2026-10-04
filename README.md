# sHelp — Zero-AI Prompt Optimizer & Lexicon Engine
### 👙 Dedicated to Adult Pinup, Glamour & Stylized Digital Art
> **100% Adult Content • Strictly No Underage Content • Zero Realism • Zero-AI**

**sHelp** is a deterministic prompt conversion tool and descriptor database engineered specifically for **Adult Pinup, Glamour, Boudoir, and Stylized Mature Illustration** workflows. It automatically formats, translates, and orders prompts for text encoders in models like **PonyXL**, **Flux.1**, **SDXL (Illustrious / Animagine)**, **Perchance**, and **Midjourney Niji 6**—**without using any external AI, LLMs, or API calls**.

---

## 🔞 Strict Adult Focus & Anti-Underage Enforcement

All archetypes, descriptors, and presets in sHelp are strictly designed for **adult works, pinups, and mature glamour art**:
1. **Explicit Adult Subjects**: All subjects default to `1woman, mature_female, adult, pinup`.
2. **Strict Anti-Underage Negative Prompting**: For all models with negative prompts (PonyXL, SDXL, SD 1.5, Perchance), sHelp automatically injects:
   `child, kid, underage, chibi, ...`
   ensuring models never generate minors or juvenile elements.
3. **No School or Child Concepts**: All school uniforms, student references, and chibi mascots have been completely removed from the lexicon.

---

## 🚫 The "Zero Realism" Guarantee

In stylized anime and cartoon pinup models, realism tokens (`photorealistic`, `8k`, `raw photo`, `skin pores`, `35mm film`, `dslr`) ruin 2D aesthetics, introducing uncanny hybrid faces, plastic 3D skin, and muddy linework.

**sHelp actively enforces Zero Realism:**
1. **Realism Purging & Translation**: Any input terms like `photorealistic`, `photo`, `realistic`, or `camera` are deterministically stripped or converted into high-impact 2D pinup equivalents (e.g., `clean stylized vector linework, rich digital cel-shading, painterly pinup illustration finish`).
2. **Anti-Realism Negative Prompting**: Negative prompts automatically suppress `realistic, photo, photorealistic, 3d, realistic skin, photograph`.
3. **Midjourney Niji 6 Integration**: Automatically switches Midjourney commands to `--niji 6 --style expressive` (the dedicated anime & illustration model) rather than the default photorealistic engine.

---

## 🧠 Model Text Encoders: Adult Pinup Optimization

| Target Model | Text Encoder | Preferred Format | Key Stylized Quirks & Rules |
| :--- | :--- | :--- | :--- |
| **Flux.1** (Dev/Schnell/Pro) | **T5-XXL + CLIP-L** | **Adult Glamour Prose** | Crafts rich descriptive narrative sentences detailing feminine curves, satin/lace attire, boudoir lighting, and painterly finish. |
| **Pony Diffusion / PonyXL** | **SDXL Danbooru CLIP** | **Danbooru Hierarchy** | Trained on Danbooru tags. **Strictly requires rating tags** (`rating:questionable, source_anime`), positive score tags (`score_9, score_8_up...`), and underscores (`bunny_suit`, `arched_back`, `bedroom_eyes`). Negative prompt banishes kids and realism. |
| **SDXL (Illustrious / Animagine)** | **Dual CLIP (ViT-G + CLIP-L)** | **Weighted Pinup Tags** | Comma-separated keyword groups emphasizing adult subjects with weighted syntax `(voluptuous:1.15)`. Suppresses 3D, realism, and underage tokens in the negative prompt. |
| **Stable Diffusion 1.5** | **CLIP-ViT-L/14 (77 Tokens)** | **Compact Pinup Tag Budgeting** | Concise 77-token window front-loading adult model and pinup tags with strict negative filters. |
| **Midjourney (Niji 6)** | **Niji 6 Engine** | **Pinup Parameters** | Uses `--niji 6 --style expressive` for glamorous adult pinup and stylized digital art without photo artifacts. |
| **Perchance** | **Flux Hybrid** | **Clean Pinup Prose** | Formats clean descriptive adult pinup prompts for Perchance's prompt and anti-prompt inputs. |

---

## ⚡ Core Features

- **Adult Pinup Word Swapper ("Applied Swaps Inspector")**:
  - Automatically translates words into model-specific pinup terminology (`girl` ➔ `1woman, mature_female, adult`, `sexy` ➔ `glamorous adult pinup model with alluring hourglass curves`, `bunny girl` ➔ `bunny_suit, playboy_bunny, fishnets, high_heels`).
- **Dedicated Adult Pinup Lexicon Database**:
  - Searchable database categorized across:
    - **Adult Pinup & Glamour Archetypes** (1woman pinup, playboy bunny, noir femme fatale, fantasy succubus, resort swimsuit, boudoir model, Sorayama cyber pinup, Valkyrie, Gil Elvgren cheesecake)
    - **Hourglass Curves & Sensual Features** (hourglass figure, voluptuous, wide hips, bedroom eyes, cleavage & décolletage, glossy red lips)
    - **Glamour Attire, Lingerie & Bunny Suits** (glossy bunny suit, sheer lace negligee, garter straps, backless silk gown, micro bikini, fishnets)
    - **Seductive Poses & Bedroom Eyes** (classic arched back, reclining on velvet couch, over-the-shoulder glance, biting lip, kneeling arch)
    - **Boudoir, Penthouse & Resort Settings** (luxury satin boudoir bedroom, twilight poolside, neon high-rise penthouse, 1950s velvet lounge, steamy onsen)
    - **Intimate Candlelight & Sensual Lighting** (amber candlelight rim, sultry neon backlight magenta & cyan, golden dusk glow, soft romantic diffusion)
    - **Pinup & Adult Illustrative Styles** (Style of XPI Sigma Art, Style of xaxaxa, AWD Art / AWD!, Ravenous Russ, Digital Art Anime, Western Anime Inspired, 1950s Gil Elvgren Cheesecake, Hajime Sorayama Chrome, 1940s Retro Pulp Noir)
- **Decomposed Artist Style Engine (For Unindexed Artists)**:
  - Base models like Flux, SDXL, and Pony have **never been trained on specific online artists** (e.g. *XPI Sigma Art*, *Ravenous Russ*, *AWD Art*). Simply adding their names to a prompt fails or produces noise.
  - sHelp decomposes each artist into their **true visual DNA** (linework, shading method, color palette, anatomical exaggeration, and rendering finish):
    - **Style of XPI Sigma Art**: Expressive 2D anime pinup art style with subtle classic animation flair, bold clean black outlines, vibrant saturated colors, smooth clean cel shading with specular highlights and soft blush, voluptuous full-figured curves, wide rounded hips, thick thighs, sharp angular hair locks, and large captivating expressive anime eyes.
    - **Ravenous Russ**: Confident heavy black comic ink outlines, dynamic line weight, punchy saturated pop colors, crisp two-tone comic cel shading with glossy specular sheen, exaggerated feminine curves, thick thighs, and wide shapely hips.
    - **AWD Art (AWD! / Andrew Dickman)**: Thick rounded black contour inking, vibrant clean 2D animation cel shading, bouncy specular highlights, plush curvaceous proportions, thick rounded thighs, and expressive anime eyes.
    - **Style of xaxaxa**: Soft refined colored linework, luminous translucent porcelain skin, ethereal glowing rim lighting, intricate shimmering anime iris highlights, glossy lips, and gentle painterly shading.
    - **Digital Art Anime (Collector Key Visual)**: Razor-sharp clean linework, multi-layer gradient cel shading with crisp shadow edges, vibrant cinematic coloring, intricate glossy highlights on hair strands, and mature anime pinup poise.
    - **Western Anime Inspired**: Fusion of Western graphic comic inking and Japanese anime curves, bold geometric contours, punchy graphic color blocking, and statuesque athletic hourglass curves.
- **Side-by-Side Model Comparison**:
  - Compare how your prompt transforms across Flux, PonyXL, SDXL, and Midjourney Niji 6 at the same time.
- **Custom Local Swaps (`localStorage`)**:
  - Save your custom shorthand keywords locally in your browser.
- **1-Click Clipboard Actions**:
  - Copy positive prompt, negative prompt, or comparison outputs instantly.

---

## 🚀 How to Run Locally

Double-click `index.html` in Windows Explorer or open it in any web browser. 100% offline, zero dependencies, zero setup:
```bash
git clone https://github.com/greenmachine25/shelp.git
cd shelp
# Double-click index.html!
```

---

## 📄 License

MIT License. Free for local and commercial use.
