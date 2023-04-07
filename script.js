// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var availableCharacters = [];

function generatePassword() {  
  let userInput = prompt("How many characters would you like to include in your password?");
  if (userInput < 8 || userInput > 128) {
    alert("Your password must have between 8 to 128 characters. Click on Generate Password to try again.");
  } else {
    var characterLength = userInput;
    var hasUppercase = confirm("Would you like your password to include UPPERCASE characters?");
    if (hasUppercase) {
      availableCharacters = [...availableCharacters, ...upperCase];
    }
    var hasLowercase = confirm("Would you like your password to include lowercase characters?")
    if (hasLowercase) {
      availableCharacters = [...availableCharacters, ...lowerCase];
    }
    var hasNumbers = confirm("Would you like your password to include numbers?");
    if (hasNumbers) {
      availableCharacters = [...availableCharacters, ...numbers];
    }
    var hasSymbols = confirm("Would you like your password to include special characters?");
    if (hasSymbols) {
      availableCharacters = [...availableCharacters, ...symbols];
    }
  };
 
  var output = "";
  var charLength = availableCharacters.length;

  for (var i = 0; i < characterLength; i++) {
    output += availableCharacters[Math.floor(Math.random() * (charLength))];
  }
  
  return output;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


