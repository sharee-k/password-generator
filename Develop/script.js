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
