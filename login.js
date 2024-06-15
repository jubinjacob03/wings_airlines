document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    if (!username || !password) {
        alert('Please fill out all fields.');
        return;
    }

    // Show spinner
    document.getElementById('spinner').style.display = 'block';

    // Simulate a network request
    setTimeout(function() {
        document.getElementById('spinner').style.display = 'none';
        alert('Logged in successfully!');

        if (rememberMe) {
            localStorage.setItem('username', username);
        } else {
            localStorage.removeItem('username');
        }

        // Redirect to another page or perform any other action here
    }, 2000);
});

function togglePassword() {
    const passwordField = document.getElementById('password');
    const togglePasswordText = document.querySelector('.toggle-password');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        togglePasswordText.textContent = 'Hide';
    } else {
        passwordField.type = 'password';
        togglePasswordText.textContent = 'Show';
    }
}

// Remember Me functionality
window.onload = function() {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        document.getElementById('username').value = savedUsername;
        document.getElementById('rememberMe').checked = true;
    }
};
