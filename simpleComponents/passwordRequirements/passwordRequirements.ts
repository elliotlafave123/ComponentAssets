// Define HTMLElements
const passwordInput: HTMLInputElement = document.getElementById("password") as HTMLInputElement;
const errorMessagePassword: HTMLElement = document.getElementById("errorMessagePassword")!;
const lengthCheck: HTMLElement = document.getElementById("length")!;
const upperCheck: HTMLElement = document.getElementById("upper")!;
const numberCheck: HTMLElement = document.getElementById("number")!;
const specialCheck: HTMLElement = document.getElementById("special")!;
const showPasswordEye: HTMLElement = document.getElementById("ShowPasswordEye")!;
const hidePasswordEye: HTMLElement = document.getElementById("HidePasswordEye")!;

// Function to validate password
const validatePassword = () => {
  const password = passwordInput.value;
  console.log(password);

  [lengthCheck, upperCheck, numberCheck, specialCheck].forEach((check) => check.classList.remove("checked"));

  // Validate length
  if (password.length >= 8) {
    lengthCheck.classList.add("active");
  } else {
    lengthCheck.classList.remove("active");
  }

  // Validate uppercase and lowercase
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
    upperCheck.classList.add("active");
  } else {
    upperCheck.classList.remove("active");
  }

  // Validate numbers
  if (/\d/.test(password)) {
    numberCheck.classList.add("active");
  } else {
    numberCheck.classList.remove("active");
  }

  // Validate special characters
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    specialCheck.classList.add("active");
  } else {
    specialCheck.classList.remove("active");
  }

  // Show/hide error message
  if (
    lengthCheck.classList.contains("active") &&
    upperCheck.classList.contains("active") &&
    numberCheck.classList.contains("active") &&
    specialCheck.classList.contains("active")
  ) {
    errorMessagePassword.style.display = "none"; // Change this to match your SCSS
  } else {
    errorMessagePassword.style.display = "block"; // Change this to match your SCSS
  }
};

// Event listener for password input change
passwordInput.addEventListener("input", validatePassword);

// Initialize hidden state of error message
errorMessagePassword.classList.add("hidden");
