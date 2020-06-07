import validator from "./validator.js";

// console.log(validator);

const formValidator = document.getElementById("form"); // form
const userCreditCard = document.getElementById("numberTdc"); // input
const invalidCreditCard = document.getElementById("invalidCard");
const validCreditCard = document.getElementById("validCard");
const validCardReport = document.getElementById("validCardMessage");
const affiliateButton = document.getElementById("affiliateButton");
const signUpButton = document.getElementById("signUpButton");
const returnButton = document.getElementById("returnButton");
const notFoundView = document.getElementById("notFoundView");
const firstView = document.getElementById("firstView");
const homeDiv = document.getElementById("homeDiv");

formValidator.addEventListener("submit", getNumber);
affiliateButton.addEventListener("click", secondView);
signUpButton.addEventListener("click", notFound);
returnButton.addEventListener("click", returnHome);
homeDiv.addEventListener("click", returnHome);
validCreditCard.style.display = "none";

function secondView() {
  formValidator.style.display = "block";
  firstView.style.display = "none";
  let userName = document.getElementById("userName");
  userName.value = "";
  let numberTdc = document.getElementById("numberTdc");
  numberTdc.value = "";
}

function notFound() {
  notFoundView.style.display = "flex";
  firstView.style.display = "none";
}

function returnHome() {
  firstView.style.display = "flex";
  notFoundView.style.display = "none";
  formValidator.style.display = "none";
  validCreditCard.style.display = "none";
}

function approvedTransaction() {
  const tdcNumber = userCreditCard.value;
  const maskify = validator.maskify(tdcNumber);
  document.getElementById("validCard").style.display = "block";
  document.getElementById("form").style.display = "none";
  validCardReport.innerHTML = `La transacción con la tarjeta ${maskify} ha sido exitosa`;
  invalidCreditCard.innerHTML = "";
}

function getNumber(event) {
  event.preventDefault();
  const tdcNumber = userCreditCard.value; // value
  if (validator.isValid(tdcNumber) === true) {
    approvedTransaction();
  } else {
    invalidCreditCard.innerHTML = "Tarjeta no valida";
  }
  validator.maskify(tdcNumber);
}

document.getElementById("numberTdc").addEventListener("input", onlyNumber);

function onlyNumber() {
  let numberTdc = document.getElementById("numberTdc");
  const regEx = new RegExp(/^\d+$/);
  if (!regEx.test(numberTdc.value)) {
    numberTdc.value = numberTdc.value.substring(0, numberTdc.value.length - 1);
  }
}
