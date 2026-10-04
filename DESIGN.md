# sHelp Design System: Obsidian & Cyber-Chroma

> **Single Source of Truth** for the visual aesthetic, components, color tokens, and styling standards of **sHelp**. Reference this document whenever building, modifying, or extending components.

---

## 1. Visual Philosophy & Core Aesthetic

* **Theme**: **Obsidian Dark Mode** with high-contrast, electric **Pink-to-Green Gradient Accents**.
* **Palette Vibe**: Deep obsidian black surfaces, crisp charcoal panels, and vibrant cyber-pinup neon accents (Electric Hot Pink `#ff2a85` blending into Vivid Neon Emerald `#00ff87`).
* **Principles**:
  1. **Obsidian First**: Avoid mid-gray or blue washes. Backgrounds are deep pitch black (`#070709`) and charcoal (`#0d0e12`, `#13141b`).
  2. **Gradient Power**: The signature Pink-to-Green gradient is reserved for key interactions, focal badges, active selections, primary action buttons, and progress meters.
  3. **High Contrast & Legibility**: Text is crisp and bright against dark canvas. Code and booru tags use monospace styling with high-visibility color coding.
  4. **Subtle Dual Glows**: Interactions employ soft dual-spectrum glows (pink + neon green) to give depth without visual clutter.

---

## 2. Color Palette & CSS Variables

All components must strictly utilize the CSS variables defined in `:root`:

```css
:root {
  /* Surface & Background Colors (Obsidian / Dark Mode) */
  --bg-primary: #070709;           /* Pure Obsidian Canvas */
  --bg-secondary: #0d0e12;         /* Panel & Header Surfaces */
  --bg-card: #13141b;              /* Elevated Card Surfaces */
  --bg-input: #0a0b0e;             /* Recessed Inputs / Textareas */
  
  /* Borders */
  --border-color: #1e2029;         /* Default Crisp Dark Border */
  --border-subtle: #292c3a;        /* Elevated Hover Border */
  --border-focus: #ff2a85;         /* Focus Ring Base */

  /* Text & Typography */
  --text-main: #f8fafc;            /* Primary Crisp White */
  --text-muted: #9ca3af;           /* Secondary Muted Gray */
  --text-dim: #6b7280;             /* Subdued Hints & Timestamps */

  /* Signature Accents & Gradients */
  --accent-pink: #ff2a85;          /* Electric Hot Pink */
  --accent-pink-hover: #ff4797;
  --accent-green: #00ff87;         /* Vivid Neon Emerald Green */
  --accent-green-hover: #1aff95;
  
  /* Gradient Presets */
  --gradient-accent: linear-gradient(135deg, #ff2a85 0%, #00ff87 100%);
  --gradient-accent-h: linear-gradient(90deg, #ff2a85 0%, #00ff87 100%);
  --gradient-glow: linear-gradient(135deg, rgba(255, 42, 133, 0.18), rgba(0, 255, 135, 0.18));
  --gradient-subtle: linear-gradient(135deg, rgba(255, 42, 133, 0.08), rgba(0, 255, 135, 0.08));

  /* Feedback Colors */
  --accent-success: #00ff87;       /* Replaced Tokens / Success */
  --accent-warning: #fbbf24;       /* Token Near Limit */
  --accent-danger: #ff2a85;        /* Removed / Strikethrough */

  /* Shadows & Glows */
  --shadow-sm: 0 2px 6px rgba(0, 0, 0, 0.6);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.75);
  --shadow-glow: 0 0 20px rgba(255, 42, 133, 0.25), 0 0 35px rgba(0, 255, 135, 0.15);
  --shadow-pink-glow: 0 0 16px rgba(255, 42, 133, 0.35);
  --shadow-green-glow: 0 0 16px rgba(0, 255, 135, 0.35);

  /* Radii */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-full: 9999px;
}
```

---

## 3. Component Design Guidelines

### A. Headers & Branding
* **Logo**: The logo title uses `-webkit-background-clip: text` with `--gradient-accent` for a vibrant pink-to-green shimmer.
* **Badges**:
  * **Zero-AI Badge**: Dark pill with `--gradient-glow` background, bordered in `rgba(0, 255, 135, 0.4)`, font in `--accent-green`.

### B. Model Selector Pills (`.model-pill`)
* **Inactive State**:
  * Surface: `--bg-card` (`#13141b`), Border: `--border-color`.
  * Text: `--text-muted`.
  * Hover: Border transitions to `--accent-pink`, text to `--text-main`.
* **Active State**:
  * Background: `--gradient-glow` (`rgba(255, 42, 133, 0.18) -> rgba(0, 255, 135, 0.18)`).
  * Border: `1px solid transparent; border-image: var(--gradient-accent) 1` (or dual glow).
  * Glow: `box-shadow: 0 0 14px rgba(255, 42, 133, 0.3), 0 0 22px rgba(0, 255, 135, 0.2);`.
  * Text: `--text-main` with font weight `600`.

### C. Buttons (`.btn`)
* **Primary Button (`.btn`)**:
  * Background: `var(--gradient-accent)` (Pink to Green).
  * Text: `#050608` (bold black for maximum contrast and punch).
  * Hover: Subtle scale lift (`translateY(-1px)`), glow shadow (`var(--shadow-glow)`).
* **Secondary Button (`.btn-secondary`)**:
  * Surface: `--bg-card`, Border: `--border-color`, Text: `--text-main`.
  * Hover: Border turns `--accent-pink`, subtle background highlight.
* **Success State (`.btn-success`)**:
  * Background: `--accent-green`, Text: `#050608`.

### D. Inputs, Dropdowns & Textareas
* **Surfaces**: Recessed obsidian `#0a0b0e`.
* **Borders**: Sharp `#1e2029`.
* **Focus State**:
  * Border color: `--accent-pink`.
  * Box-shadow: `0 0 0 2px rgba(255, 42, 133, 0.25), 0 0 16px rgba(0, 255, 135, 0.15)`.
* **Prompt Textarea vs Output Textarea**:
  * Input is clean and responsive.
  * Output has a dedicated gradient accent top line to distinguish generated content.

### E. Token Meter (`.token-fill`)
* **Track**: Recessed obsidian `#0a0b0e` with dark border.
* **Fill**: Horizontal gradient: `background: var(--gradient-accent-h)`.
* **Near Limit (>90%)**: Flashes to `--accent-pink`.

### F. Word Swaps Display (`.swap-item`)
* **Original Word (`.swap-original`)**: Styled with strikethrough in `--accent-pink`.
* **Arrow (`.swap-arrow`)**: `--text-dim`.
* **Replaced Word (`.swap-replaced`)**: Bold in `--accent-green`.
* **Card Container**: Subtle gradient glow border.

### G. Lexicon Chips (`.lexicon-chip`)
* Compact interactive pills.
* Hover effect: Glows with soft pink border and green accent text.
* Active/Added Feedback (`.chip-added`): Flashes with emerald green background (`rgba(0, 255, 135, 0.25)`), green border, slight 1.05 scale lift, and text changes briefly to "✓ Added!".

### H. Collapsible Drawers (`.custom-swaps-drawer`, `.swaps-drawer`)
* Built with semantic `<details>` and `<summary>` for maximum zero-AI performance.
* Inactive State: Clean, recessed bar (`#101117`) with badge count and smooth rotating chevron (`transform: rotate(180deg)` when opened).
* Content: Contained scrollable drawer with dark background (`#0b0c10`), eliminating vertical clutter from the main view.

### I. Lexicon Category Filter Tabs (`.lexicon-tab`)
* Filter bar allowing instant switching between descriptor categories (Archetypes, Curves, Attire, Poses, Settings, Lighting, Styles).
* Inactive: Charcoal surface `--bg-card` with subtle border.
* Active: `--gradient-glow` with vibrant emerald border and neon shadow.

### J. Textarea Footers & Live Stats (`.textarea-footer`, `.text-stats`)
* Attached directly to the bottom of input and output textareas with `#08090d` background.
* Displays live real-time `X words • Y chars` counter.
* Displays `.token-status-pill` reflecting token headroom (Green: "Within Limit", Amber: "Moderate Load", Pink: "Near Limit").

---

## 4. Rules for Extending Components

When adding new components to **sHelp**:
1. **Never introduce light backgrounds**; all surfaces must stay in the `#070709` – `#13141b` family.
2. **Never hardcode blue/cyan hex colors**; replace all legacy blues (`#38bdf8`, `#0ea5e9`) with `--accent-pink`, `--accent-green`, or `--gradient-accent`.
3. **Use the gradient for hierarchy**: Do not paint every element in full gradient. Use solid darks for 85% of the surface area, and illuminate the remaining 15% with the pink-to-green gradient.
4. **Preserve accessible contrast ratios**: Monospace code and copy buttons must always meet WCAG AAA / AA contrast against dark backgrounds.

---

## 5. Horizontal Viewport & Responsive Containment

To ensure zero horizontal scrollbars and pristine presentation across all screen resolutions (from 320px mobile screens to 4K ultra-wide monitors):
1. **Root Strict Containment**: `html` and `body` must always enforce `overflow-x: hidden; width: 100%; max-width: 100vw; box-sizing: border-box;`.
2. **Universal Box-Sizing**: All elements inherit `*, *::before, *::after { box-sizing: border-box; }`.
3. **CSS Grid Columns**: Never use `grid-template-columns: 1fr 1fr;` on containers holding inputs or textareas. Always use `minmax(0, 1fr)` (e.g., `grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);`) to prevent child intrinsic `min-content` widths from blowing out parent grid cells.
4. **Card & Panel Width Containment**: Panels (`.panel-card`, modals) must declare `min-width: 0; max-width: 100%; width: 100%; overflow: hidden;`.
5. **No Fixed Horizontal Dimensions**: Avoid fixed pixel widths (`width: 320px;`) on form elements or containers. Use fluid sizing with maximum limits (`width: 100%; max-width: 290px;`).
6. **Word & Code Wrapping**: Long tokens, URLs, booru tags, or unspaced prompt strings must specify `word-break: break-word; overflow-wrap: break-word;` on textareas and swap displays.

