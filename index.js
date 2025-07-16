const passwordLength = document.getElementById("passwordLength");
const isUppercase = document.getElementById("uppercase");
const isLowercase = document.getElementById("lowercase");
const isNumber = document.getElementById("numbers");
const isSymbol = document.getElementById("symbols");
const display = document.getElementById("displayPassword");

const lowercases = "abcdefghijklmnopqrstuvwxyz";
const uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const symbols = "~!@#$%^&*()_+-={}|[]<>,.?";

function generatePassword() {
  let allowedCharacters = "";
  let password = "";

  allowedCharacters += isUppercase.checked ? uppercases : "";
  allowedCharacters += isLowercase.checked ? lowercases : "";
  allowedCharacters += isNumber.checked? numbers : "";
  allowedCharacters += isSymbol.checked ? symbols : "";

  if (passwordLength.value < 4) {
    window.alert("Password length must be at least 4, for it to be secure");
    return;
  }

  if (allowedCharacters.length === 0) {
    window.alert("At least 1 set of character needs to be selected");
    return;
  }

  for(let i = 0; i < passwordLength.value; i++){
    const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
    password += allowedCharacters[randomIndex];
  }

  displayPassword.value = password;
}
