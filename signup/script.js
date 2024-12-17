$(".message a").click(function () {
    $("form").animate({
        height: "toggle",
        opacity: "toggle"
    }, "slow")
})

const FName = document.getElementById("fname")

const Email = document.getElementById("email")
const Pass = document.getElementById("password")
const CPass = document.getElementById("cpassword")

const FNameError = document.getElementById("error1")
const EmailError = document.getElementById("error5")
const PassError = document.getElementById("error6")
const CPassError = document.getElementById("error7")

const Strength = document.getElementById("strength")
const RegisterForm = document.getElementById("register-form")

const indicator = document.querySelector(".indicator");
const input = document.getElementById("password")
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".strength");

let regExpWeak = /[a-zA-Z]+/;
let regExpMedium = /\d+/;
let regExpStrong = /[!@#$%^&*?_~(),-]+/;

function trigger() {
    let no;
    if (input.value !== "") {
        indicator.style.display = "block";
        indicator.style.display = "flex";
        if (input.value.length <= 3 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong))) no = 1;
        if (input.value.length >= 6 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong)))) no = 2;
        if (input.value.length >= 6 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong)) no = 3;
        if (no === 1) {
            weak.classList.add("active");
            text.style.display = "block";
            text.textContent = "Your password is too week";
            text.classList.add("weak");
        }
        if (no === 2) {
            medium.classList.add("active");
            text.textContent = "Your password is medium";
            text.classList.add("medium");
        } else {
            medium.classList.remove("active");
            text.classList.remove("medium");
        }
        if (no === 3) {
            weak.classList.add("active");
            medium.classList.add("active");
            strong.classList.add("active");
            text.textContent = "Your password is strong";
            text.classList.add("strong");
        } else {
            strong.classList.remove("active");
            text.classList.remove("strong");
        }
    } else {
        indicator.style.display = "none";
        text.style.display = "none";
    }
}

function validateEmail(emailText) {
    const re = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    return re.test(String(emailText).toLowerCase());
}

function validatePhone(phoneText) {
    const re = /^[\d\.\-]+$/;
    return re.test(String(phoneText));
}

function validateName(nameText) {
    const re = /^[a-zA-Z]*$/;
    return re.test(String(nameText));
}


const signUpBtn = document.getElementById("signUp");

signUpBtn.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent default form submission

  // Clear any previous error messages
  FNameError.innerHTML = "";
  EmailError.innerHTML = "";
  PassError.innerHTML = "";
  CPassError.innerHTML = "";

  // Validate user input (assuming you already have the validation functions)
  if (!validateName(FName.value)) {
    FNameError.innerText = "Please enter a valid first name.";
    return; // Exit the function if validation fails
  }

  if (!validateEmail(Email.value)) {
    EmailError.innerText = "Please enter a valid email.";
    return;
  }

  if (Pass.value.length < 8) {
    PassError.innerHTML = "Password must be at least 8 digits.";
    return;
  } else if (Pass.value !== CPass.value) {
    CPassError.innerHTML = "Password didn't match.";
    Pass.value = "";
    CPass.value = "";
    return;
  }

  // Create a user object with relevant data
  const userData = {
    firstName: FName.value,
    email: Email.value,
    password: Pass.value,
    // Add other relevant fields as needed
  };

    
  
      try {
        localStorage.setItem("user", JSON.stringify(userData));
        alert("Signup successful! You can now log in.");
        signupForm.reset();
      } catch (error) {
        console.error("Error saving to localStorage:", error);
        alert("There was a problem saving your data. Please try again.");
      }

  // Display success message or redirect (optional)
  alert("Registration successful! Please proceed to login.");
  // You can also redirect to a different page after successful signup
});


login = document.getElementById("login");

login.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent form from submitting traditionally

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginpwd").value.trim();

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
      window.location.href = "../website/home.html";
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });