/* Candidate Login — mobile menu functionality patch
   Design/layout/CSS are unchanged. Replace the two existing inline menu scripts
   at the bottom of candidate-login.html (the scripts after the Firebase module)
   with this single script. Keep the Firebase module script untouched.
*/
(() => {
  const header = document.querySelector(".site-header");
  const nav = document.querySelector(".site-nav");
  const menu = document.querySelector(".menu-toggle");
  if (!header || !nav || !menu) return;

  const closeMenu = () => {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-label", "Open menu");
    menu.textContent = "☰";
  };

  const toggleMenu = () => {
    const isOpen = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(isOpen));
    menu.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    menu.textContent = isOpen ? "✕" : "☰";
  };

  menu.addEventListener("click", toggleMenu);

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", event => {
    if (!header.contains(event.target)) closeMenu();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) closeMenu();
  });
})();
