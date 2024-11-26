document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signUp');
    const userNameInput = document.getElementById('userName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('pWord');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Utility function to validate email
    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
    // Signup form submission
    signupForm.addEventListener('onclick', (e) => {
        e.preventDefault();

        const userName = userNameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        emailError.textContent = '';
        passwordError.textContent = '';

        if (!validateEmail(email)) {
            emailError.textContent = 'Invalid email format.';
            return;
        }
        if (password.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters.';
            return;
        }
        console.log('Signup successful!');
        const userData = { userName, email, password };
        localStorage.setItem('user', JSON.stringify(userData)); // Save to localStorage
        alert('Signup successful! You can now log in.');
        signupForm.reset();
    });
});
