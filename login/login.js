document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector(".login form");
    const emailInput = loginForm.querySelector('input[name="email"]');
    const passwordInput = loginForm.querySelector('input[name="pswd"]');
    const loginButton = document.getElementById("loginButton");
  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent form from submitting traditionally
  
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      // Retrieve user data from localStorage
      const storedUserData = JSON.parse(localStorage.getItem("user"));
  
      if (!storedUserData) {
        alert("No user found. Please sign up first.");
        return;
      }
  
      // Validate credentials
      if (storedUserData.email === email && storedUserData.password === password) {
        alert("Login successful!");
        // Redirect to a new page
        window.location.href = "dashboard.html"; // Replace with the actual destination page
      } else {
        alert("Invalid email or password. Please try again.");
      }
    });
  });
  