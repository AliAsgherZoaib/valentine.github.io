// JavaScript code for the login page

// Get the login form element
var loginForm = document.getElementById("login-form");
// Get the username input element
var usernameInput = document.getElementById("username");
// Get the password input element
var passwordInput = document.getElementById("password");
// Get the sign in button element
var signInButton = document.getElementById("sign-in");
// Get the error message element
var errorMsg = document.getElementById("error-msg");

// Define the valid username and password
var validUsername = "Munira.Aliasghar";
var validPassword = "IloveYou";

// Add a click event listener to the sign in button
signInButton.addEventListener("click", function() {
  // Get the username and password entered by the user
  var username = usernameInput.value;
  var password = passwordInput.value;
  // Check if the username and password are valid
  if (username == validUsername && password == validPassword) {
    // If valid, show an alert dialog and reload the page
   // alert("You have successfully logged in!");
   // location.reload();
   window.location.href = "card.html";
  } else {
    // If invalid, show an error message
    errorMsg.textContent = "Invalid username or password!";
  }
});