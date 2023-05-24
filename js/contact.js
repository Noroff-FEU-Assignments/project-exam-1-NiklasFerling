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

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const value = params.get("name");

function successMessage(value) {
  if (value) {
    success.style.display = "block";
  } else {
    console.log("failed");
  }
}
successMessage(value);

function validateForm(event) {
  event.preventDefault();
  var one = false;
  var two = false;
  var three = false;
  var four = false;

  if (fullName.value.trim().length >= 5) {
    fullNameError.style.display = "none";
    one = true;
  } else {
    fullNameError.style.display = "block";
    form.onsubmit = event.preventDefault();
  }

  if (validateEmail(email.value)) {
    emailError.style.display = "none";
    two = true;
  } else {
    emailError.style.display = "block";
    form.onsubmit = event.preventDefault();
  }

  if (subject.value.trim().length >= 15) {
    subjectError.style.display = "none";
    three = true;
  } else {
    subjectError.style.display = "block";
    form.onsubmit = event.preventDefault();
  }
  if (message.value.trim().length >= 25) {
    messageError.style.display = "none";
    four = true;
  } else {
    messageError.style.display = "block";
    form.onsubmit = event.preventDefault();
  }
  if (one && two && three && four) {
    this.submit();
    success.style.display.block;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
form.addEventListener("submit", validateForm);
