const email = "john.doe@example.com";
const password = "1234567890-=";

document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById("submitButton");

    submitButton.addEventListener('click', () => {
        const emailInput = document.getElementById("email").value;
        const passInput = document.getElementById("password").value;
        const emailMessage = document.getElementById("email-message");
        const loginMessage = document.getElementById("login-message");

        emailMessage.textContent = "";
        loginMessage.textContent = "";

        if (!validateEmail(emailInput)) { 
            emailMessage.textContent = "Invalid email address!"; 
            emailMessage.style.color = "red"; 
        } else {
            if (emailInput === email && passInput === password) {
                loginMessage.textContent = "Login Successful!";
                loginMessage.style.color = "green";
            } else {
                loginMessage.textContent = "Invalid credentials.";
                loginMessage.style.color = "red";
            }
        }
    });
});

function validateEmail(email) { 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email); 
}