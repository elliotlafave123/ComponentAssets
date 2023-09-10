export function initPasswordEye() {
  document.addEventListener("DOMContentLoaded", () => {
    const passwordInputs = document.querySelectorAll(".c-password-input");

    passwordInputs.forEach((passwordInput) => {
      const inputElement = passwordInput.querySelector(".c-text-input") as HTMLInputElement;
      const showPasswordEye = passwordInput.querySelector("#ShowPasswordEye");
      const hidePasswordEye = passwordInput.querySelector("#HidePasswordEye");

      if (showPasswordEye && hidePasswordEye && inputElement) {
        showPasswordEye.addEventListener("click", () => {
          inputElement.type = "text";
          showPasswordEye.classList.add("c-password-input__password-eye--hidden");
          hidePasswordEye.classList.remove("c-password-input__password-eye--hidden");
        });

        hidePasswordEye.addEventListener("click", () => {
          inputElement.type = "password";
          hidePasswordEye.classList.add("c-password-input__password-eye--hidden");
          showPasswordEye.classList.remove("c-password-input__password-eye--hidden");
        });
      }
    });
  });
}
initPasswordEye();
