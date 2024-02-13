// Get the yes and no buttons by their id
var yesButton = document.getElementById("yes-button");
var noButton = document.getElementById("no-button");

// Set the initial size of the yes button
var yesButtonSize = 100;

// Add a click event listener to the no button
noButton.addEventListener("click", function() {
    // Increase the size of the yes button by 10%
    yesButtonSize = yesButtonSize * 1.1;
    // Set the width and height of the yes button to the new size
    yesButton.style.width = yesButtonSize + "px";
    yesButton.style.height = yesButtonSize + "px";
});

// Add a click event listener to the yes button
yesButton.addEventListener("click", function() {
    // Redirect to another HTML page when the yes button is clicked
    window.location.href = "ily.html";
});