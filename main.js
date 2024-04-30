function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  // Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the email input fields and the text element
  const emailField = document.getElementById("mail");
  const confirmEmailField = document.getElementById("confirm-mail");
  const emailMatchText = document.createElement("p");
  emailMatchText.style.marginTop = "5px"; // Optional: Add some spacing
  confirmEmailField.parentNode.appendChild(emailMatchText);

  // Add input event listener to the confirm email field
  confirmEmailField.addEventListener("input", function () {
      if (confirmEmailField.value === emailField.value) {
          emailMatchText.textContent = "Emails match";
          emailMatchText.style.color = "green";
      } else {
          emailMatchText.textContent = "Emails don't match";
          emailMatchText.style.color = "red";
      }
  });
});
