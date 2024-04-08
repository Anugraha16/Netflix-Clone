let sigIn = document.querySelector("button");
sigIn.addEventListener("click", function () {
  let email = document.getElementById("Username");
  let password = document.getElementById("Password");
  console.log(email.value, password.value);
});
