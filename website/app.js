window.onload = () => {
    // Check if the redirection has already happened
    if (!sessionStorage.getItem('redirected')) {
        setTimeout(() => {
            // Redirect after 3 seconds
            window.location.href = "../login/login.html";
            // Store a flag in localStorage to indicate redirection has happened
            sessionStorages.setItem('redirected', 'true');
        }, 3000);
    }
};
