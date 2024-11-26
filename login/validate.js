// Define regex for email and password validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Real-time validation function
function validateInput() {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const submitButton = document.getElementById("submitButton");

  // Validate email
  if (emailRegex.test(emailInput.value)) {
    emailError.textContent = "Valid email!";
    emailError.classList.remove("error");
    emailError.classList.add("valid");
  } else {
    emailError.textContent = "Invalid email format.";
    emailError.classList.remove("valid");
    emailError.classList.add("error");
  }

  // Validate password
  if (passwordRegex.test(passwordInput.value)) {
    passwordError.textContent = "Valid password!";
    passwordError.classList.remove("error");
    passwordError.classList.add("valid");
  } else {
    passwordError.textContent = "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.";
    passwordError.classList.remove("valid");
    passwordError.classList.add("error");
  }

  // Enable/disable submit button
  submitButton.disabled = !(emailRegex.test(emailInput.value) && passwordRegex.test(passwordInput.value));
}

// Add event listeners to input fields
document.getElementById("email").addEventListener("input", validateInput);
document.getElementById("password").addEventListener("input", validateInput);
