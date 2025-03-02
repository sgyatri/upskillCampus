/*document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // Handle Registration
    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();
            let username = document.getElementById('reg-username').value;
            let password = document.getElementById('reg-password').value;

            if (localStorage.getItem(username)) {
                document.getElementById('register-msg').textContent = "Username already taken!";
                document.getElementById('register-msg').style.color = "red";
            } else {
                localStorage.setItem(username, password);
                document.getElementById('register-msg').textContent = "Registration successful! You can now login.";
                document.getElementById('register-msg').style.color = "green";
            }
        });
    }

    // Handle Login
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            let username = document.getElementById('username').value;
            let password = document.getElementById('password').value;

            let storedPassword = localStorage.getItem(username);

            if (storedPassword === password) {
                alert("Login successful!");
                localStorage.setItem("loggedInUser", username);
                window.location.href = "home.html"; // Redirect to home page
            } else {
                document.getElementById('error-msg').textContent = "Invalid credentials!";
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const logoutBtn = document.getElementById('logout-btn');

    // Check if user is logged in
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        document.getElementById('user-info')?.textContent = `Welcome, ${loggedInUser}`;
    }

    // Handle Registration
    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();
            let username = document.getElementById('reg-username').value.trim();
            let password = document.getElementById('reg-password').value.trim();

            if (localStorage.getItem(username)) {
                displayMessage('register-msg', "Username already taken!", "red");
            } else {
                localStorage.setItem(username, btoa(password)); // Encode password
                displayMessage('register-msg', "Registration successful! You can now login.", "green");
                setTimeout(() => window.location.href = "login.html", 1500);
            }
        });
    }

    // Handle Login
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            let username = document.getElementById('username').value.trim();
            let password = document.getElementById('password').value.trim();

            let storedPassword = localStorage.getItem(username);

            if (storedPassword && atob(storedPassword) === password) { // Decode password
                alert("Login successful!");
                localStorage.setItem("loggedInUser", username);
                window.location.href = "home.html"; // Redirect to home page
            } else {
                displayMessage('error-msg', "Invalid credentials!", "red");
            }
        });
    }

    // Handle Logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function () {
            logoutUser();
        });
    }
});

// Function to display messages
function displayMessage(elementId, message, color) {
    const msgElement = document.getElementById(elementId);
    if (msgElement) {
        msgElement.textContent = message;
        msgElement.style.color = color;
    }
}

// Logout function
function logoutUser() {
    localStorage.removeItem("loggedInUser");
    alert("Logged out successfully!");
    window.location.href = "index.html";
}
*/

document.addEventListener('DOMContentLoaded', function () {
    const authLink = document.getElementById('auth-link');
    const logoutBtn = document.getElementById('logout-btn');

    // Check if user is logged in
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
        authLink.style.display = "none"; // Hide Login link
        logoutBtn.style.display = "block"; // Show Logout button
    } else {
        authLink.style.display = "block"; // Show Login link
        logoutBtn.style.display = "none"; // Hide Logout button
    }

    // Logout Functionality
    logoutBtn.addEventListener('click', function () {
        localStorage.removeItem("loggedInUser");
        alert("Logged out successfully!");
        window.location.href = "index.html"; // Redirect to home
    });
});
