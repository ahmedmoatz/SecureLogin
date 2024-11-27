document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === '' || password === '') {
            errorMessage.textContent = 'Please fill in all fields.';
        } else {
            errorMessage.textContent = '';
            // Here you would typically handle the login logic
            console.log('Login attempted with:', { username, password });
            // For demonstration purposes, we'll just log the attempt
            alert('Login attempt successful! (This is a demo)');
        }
    });
});