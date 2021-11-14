// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Define password character type
function generatePassword() {
  const strings = {
    lowers: "abcdefghijklmnopqrstuvwxyz",
    uppers: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "1234567890",
    symbols: "`-=[];',./~!@#$%^&*()_+{}|:<>?`",
  };

  // Ask user to put password length
  var length = 0;
  var askLength = true;
  while (askLength) {
    if (length < 8 || length > 128) {
      length = window.prompt(
        "Enter a number from 8 to 128 for password length."
      );
    } else {
      askLength = false;
    }
  }

  // Ask user to put password character
  var passwordChars = "";
  var askCharacter = true;
  while (askCharacter) {
    // confirm user wants to use lowercase
    var lowercase = window.confirm("Would you like to use lowercase letters?");
    if (lowercase) {
      passwordChars += strings.lowers;
    }

    // confirm user wants to use uppercase
    var uppercase = window.confirm("Would you like to use uppercase letters?");
    if (uppercase) {
      passwordChars += strings.uppers;
    }

    // confirm user wants to use numbers
    var numbers = window.confirm("Would you like to use numbers?");
    if (numbers) {
      passwordChars += strings.numbers;
    }

    // confirm user wants to use symbols
    var symbols = window.confirm("Would you like to use special characters?");
    if (symbols) {
      passwordChars += strings.symbols;
    }

    if (!lowercase && !uppercase && !numbers && !symbols) {
      window.alert("At least one character type must be selected");
    } else {
      askCharacter = false;
    }
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
