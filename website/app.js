window.onload = () => {
    // Check if the redirection has already happened
    if (!sessionStorage.getItem('redirected')) {
        setTimeout(() => {
            // Redirect after 3 seconds
            window.location.href = "../signup/index.html";
            // Store a flag in sessionStorage to indicate redirection has happened
            sessionStorage.setItem('redirected', 'true');
        }, 3000);
    }
};
