const success = document.querySelector(".success");
const form = document.querySelector("form");
const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

function validateForm(event) {
  event.preventDefault();

  if (fullName.value.trim().length >= 5) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
    form.onsubmit = event.preventDefault();
  }

  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    form.onsubmit = event.preventDefault();
  }

  if (subject.value.trim().length >= 15) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
    form.onsubmit = event.preventDefault();
  }
  if (message.value.trim().length >= 25) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
    form.onsubmit = event.preventDefault();
  }

  this.submit();
  success.style.display.block;
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
form.addEventListener("submit", validateForm);
