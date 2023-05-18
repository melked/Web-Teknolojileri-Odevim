<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Retrieve the form data
  $username = $_POST["username"];
  $password = $_POST["password"];
  
  // Validate the username and password (you can customize this part)
  if ($username === "admin" && $password === "password") {
    // Successful login, redirect to the home page or any other desired page
    header("Location: home.php");
    exit();
  } else {
    // Invalid credentials, display an error message
    echo "Invalid username or password. Please try again.";
  }
}
?>
