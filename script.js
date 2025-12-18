/* =========================================================
   THEME MANAGEMENT
   - Default dark mode
   - Persist user preference
   - No SEO logic in JS (correct practice)
   ========================================================= */

const root = document.documentElement;
const toggleButton = document.getElementById("theme-toggle");
const STORAGE_KEY = "preferred-theme";

/**
 * Apply theme and persist choice
 */
function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem(STORAGE_KEY, theme);
}

/**
 * Initialize theme on first load
 * Default: DARK
 */
function initTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  applyTheme(savedTheme || "dark");
}

/**
 * Toggle theme on click
 */
toggleButton.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  applyTheme(currentTheme === "dark" ? "light" : "dark");
});

initTheme();
