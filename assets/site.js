// Mobile menu: close on Escape (returning focus to the toggle) and on a click outside it.
for (const menu of document.querySelectorAll("details.mnav")) {
  const summary = menu.querySelector("summary");
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.open) { menu.open = false; summary.focus(); }
  });
  document.addEventListener("click", (e) => {
    if (menu.open && !menu.contains(e.target)) menu.open = false;
  });
}
