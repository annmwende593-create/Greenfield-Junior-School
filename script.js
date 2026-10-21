function showMessage() {
  document.getElementById("welcome-msg").innerHTML = "Thank you for visiting Greenfield Junior School! We are glad to have you.";
}

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  if (name == "" || email == "") {
    alert("Please fill in your name and email");
    return false;
  } else {
    alert("Message sent successfully! We will contact you soon.");
    return false;
  }
}
