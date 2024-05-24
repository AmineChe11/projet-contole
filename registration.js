document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var errorElement = document.getElementById('error');

    // Check if passwords match
    if (password !== confirmPassword) {
        errorElement.textContent = "Passwords do not match";
        return;
    }

    // Check if username already exists in local storage
    if (localStorage.getItem(username)) {
        errorElement.textContent = "Username already exists";
        return;
    }

    // Store user information in local storage
    var user = { username: username, password: password };
    localStorage.setItem(username, JSON.stringify(user));

    // Redirect to login page after successful registration
    window.location.href = "login.html";
});
