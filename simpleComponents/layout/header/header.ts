function toggleMobileMenu(mobileMenuToggle, headerElement) {
  headerElement.classList.toggle("c-header--open");

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
}

function initMobileMenuToggle(headerElement) {
  const mobileMenuToggle = document.querySelector(".c-mobile-menu-toggle");
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", function () {
      toggleMobileMenu(mobileMenuToggle, headerElement);
    });
  }
}

function initHeaderHideOnScroll(headerElement) {
  let lastScrollPosition = 0;

  window.addEventListener("scroll", function () {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition < lastScrollPosition) {
      // Scrolling up
      headerElement.classList.remove("c-header--hidden");
    } else {
      // Scrolling down
      headerElement.classList.add("c-header--hidden");
    }

    lastScrollPosition = currentScrollPosition;
  });
}

export const initHeader = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const headerElement = document.querySelector(".c-header");

    if (headerElement) {
      initMobileMenuToggle(headerElement);
      initHeaderHideOnScroll(headerElement);
    }
  });
};
