const formField = document.querySelector(".form-field");
const emailInput = document.forms["form-field"]["email"];
const nameInput = document.forms["form-field"]["fullName"];

function nameValidation(name) {
  let nameRegex = /^[a-zA-Z\u0590-\u05FF\u200f\u200e ]+$/;
  return name.match(nameRegex);
}
function emailValidation(email) {
  let emailRegex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return email.match(emailRegex);
}

function formValidation(e) {
  const name = document.forms["form-field"]["fullName"].value;
  const email = document.forms["form-field"]["email"].value;

  e.preventDefault();

  if (!nameValidation(name)) {
    nameInput.style.borderColor = "black";
    return;
  } else {
    nameInput.style.borderColor = "white";
  }
  if (!emailValidation(email)) {
    emailInput.style.borderColor = "black";
    return;
  } else {
    emailInput.style.borderColor = "white";
  }
  document.querySelector(".confirmation-message").style.display = "block";
  nameInput.value = "";
  emailInput.value = "";
}

formField.addEventListener("click", formValidation);
