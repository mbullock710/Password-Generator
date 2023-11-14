// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Defining character sets available for password
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz"
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numericCharacters = "0123456789"
  var specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  var pwLength = window.prompt("Please enter the length of your password. It must be at least 8 characters and no more than 128 characters");

  // WHEN I answer each prompt
  // THEN my input should be validated
  if (pwLength < 8 || pwLength > 128) {
    window.alert("Please select a valid number between 8 and 128 characters you wish to use for your password.");
    return "";
  }

  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var lowercaseConfirmation = window.confirm("Would you like to include lowercase characters?");
  var uppercaseConfirmation = window.confirm("Would you like to include uppercase characters?");
  var numericConfirmation = window.confirm("Would you like to include numeric characters?");
  var specialConfirmation = window.confirm("Would you like to include special characters?");

  // WHEN I answer each prompt
  // THEN at least one character type should be selected
  if (!lowercaseConfirmation && !uppercaseConfirmation && !numericConfirmation && !specialConfirmation) {
    window.alert("Please select at least one character type.");
    return "";
  }


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);