const correctPassword = "dessertlover"; // change this to your own password

function checkPassword() {
  const input = document.getElementById("password-input").value;
  const error = document.getElementById("error");

  if (input === correctPassword) {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("site-content").style.display = "block";
  } else {
    error.textContent = "Incorrect password. Try again.";
  }
}
