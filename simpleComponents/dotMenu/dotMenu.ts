export function initDotMenus() {
  const dotMenus = document.querySelectorAll(".c-dot-menu");
  dotMenus.forEach((dotMenu) => {
    const dotMenuToggle = dotMenu.querySelector(".c-dot-menu__toggle") as HTMLButtonElement;
    const dotMenuContent = dotMenu.querySelector(".c-dot-menu__content") as HTMLDivElement;

    dotMenuToggle.addEventListener("click", (event) => {
      event.stopPropagation();

      dotMenus.forEach((otherMenu) => {
        if (otherMenu !== dotMenu) {
          const otherMenuContent = otherMenu.querySelector(".c-dot-menu__content") as HTMLDivElement;
          otherMenuContent.style.display = "none";
        }
      });

      dotMenuContent.style.display = dotMenuContent.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", () => {
      dotMenuContent.style.display = "none";
    });

    dotMenuContent.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });
}
