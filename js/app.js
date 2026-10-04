/**
 * sHelp Main Application Entry Point
 * Zero-AI Deterministic Prompt Transformer & Lexicon Engine
 */

import { UIController } from "./modules/ui.js";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize the UI controller
  window.sHelpApp = new UIController();
  console.log("sHelp Prompt Optimizer initialized successfully (100% Zero-AI, Deterministic Engine).");
});
