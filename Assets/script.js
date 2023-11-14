// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Defining character sets available for password
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharacters = "0123456789";
  var specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  var pwLength = prompt("Please enter the length of your password. It must be at least 8 characters and no more than 128 characters");

  // WHEN I answer each prompt
  // THEN my input should be validated
  if (pwLength < 8 || pwLength > 128) {
    alert("Please select a valid number between 8 and 128 characters you wish to use for your password.");
    return '';
  }

  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var lowercaseConfirmation = confirm("Would you like to include lowercase characters?");
  var uppercaseConfirmation = confirm("Would you like to include uppercase characters?");
  var numericConfirmation = confirm("Would you like to include numeric characters?");
  var specialConfirmation = confirm("Would you like to include special characters?");

  // WHEN I answer each prompt
  // THEN at least one character type should be selected
  if (!lowercaseConfirmation && !uppercaseConfirmation && !numericConfirmation && !specialConfirmation) {
    alert("Please select at least one character type.");
    return '';
  }

  var pwCharacters = '';
  if (lowercaseConfirmation) {
    pwCharacters += lowercaseCharacters
  }
  if (uppercaseConfirmation) {
    pwCharacters += uppercaseCharacters
  }
  if (numericConfirmation) {
    pwCharacters += numericCharacters
  }
  if (specialConfirmation) {
    pwCharacters += specialCharacters
  }

  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  var password = '';
  for (let i = 0; i < pwLength; i++) {
    var pwCreation = Math.floor(Math.random() * pwCharacters.length);
    password += pwCharacters.charAt(pwCreation)
  }

  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);