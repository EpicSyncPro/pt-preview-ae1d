// Theme and reduce-motion before first paint. A file, not an inline script, so the CSP in
// _headers can stay `script-src 'self'`. Keys match src/lib/theme.ts and src/lib/motion.ts.
try {
  const t = localStorage.getItem("app.theme");
  const dark = t === "dark" || (t !== "light" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  if (dark) document.documentElement.classList.add("dark");
  if (localStorage.getItem("app.motion") === "reduce") document.documentElement.setAttribute("data-motion", "reduce");
} catch {
  /* storage blocked: defaults apply */
}
