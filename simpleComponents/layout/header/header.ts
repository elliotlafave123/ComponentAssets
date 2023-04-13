document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuToggle = document.querySelector(".c-mobile-menu-toggle");
  const headerElement = document.querySelector(".c-header");

  mobileMenuToggle?.addEventListener("click", () => {
    headerElement?.classList.toggle("c-header--open");

    const icon = mobileMenuToggle.querySelector("i");
    if (icon) {
      if (icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
        mobileMenuToggle.setAttribute("aria-label", "Close menu");
      } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
        mobileMenuToggle.setAttribute("aria-label", "Open menu");
      }
    }
  });
});
