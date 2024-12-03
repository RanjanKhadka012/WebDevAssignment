document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.querySelector(".signup form");
    const userNameInput = document.getElementById("userName");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("pWord");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
  
    // Utility function to validate email
    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  
    // Signup form submission
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const userName = userNameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      // Clear previous error messages
      emailError.textContent = "";
      passwordError.textContent = "";
  
      // Validate inputs
      if (!userName) {
        alert("Username is required.");
        return;
      }
  
      if (!validateEmail(email)) {
        emailError.textContent = "Invalid email format.";
        return;
      }
  
      if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        return;
      }
  
      // Store user data in localStorage
      const userData = { userName, email, password };
  
      try {
        localStorage.setItem("user", JSON.stringify(userData));
        alert("Signup successful! You can now log in.");
        signupForm.reset();
      } catch (error) {
        console.error("Error saving to localStorage:", error);
        alert("There was a problem saving your data. Please try again.");
      }
    });
  });
  