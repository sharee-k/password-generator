// Assignment code here
var passwordCharacters = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: '!@#$%^&*()-+=<>?[]{}',
};

// Generate password
function generatePassword() {
  var passwordCriteria = "";

  var passwordLength = window.prompt("Enter the length of your password. Must be a number between 8 and 128");
  // Will return a warning if a valid number is not entered
  if (isNaN(passwordLength) === true || passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be a valid number between 8 and 128");
    return '';
  };

  var lowercase = window.confirm("Does your password need to contain lowercase letters?");
  if (lowercase) {
    passwordCriteria += passwordCharacters.lowercase;
  };

  var uppercase = window.confirm("Does your password need to contain uppercase letters");
  if (uppercase) {
    passwordCriteria += passwordCharacters.uppercase;
  };

  var numbers = window.confirm("Does your password need to contain numbers?");
  if (numbers) {
    passwordCriteria += passwordCharacters.number;
  };

  var symbols = window.confirm("Does your password need to contain symbols?");
  if (symbols) {
    passwordCriteria += passwordCharacters.symbol;
  };

  // Will return a warning if at least one password variable is not true
  if (lowercase === false && uppercase === false && numbers === false && symbols === false) {
    window.alert("You did not select any criteria for your password. Please click Generate Password and select at least one criteria for your password (i.e. lowercase, uppercase, numbers, or symbols).");
    return '';
  };

  var password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)]
  };
  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);