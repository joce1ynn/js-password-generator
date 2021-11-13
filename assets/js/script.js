// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    const strings = {
      lowers: "abcdefghijklmnopqrstuvwxyz",
      uppers: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numbers: "1234567890",
      symbols: "`-=[]\;',./~!@#$%^&*()_+{}|:<>?`",
    };

    var passwordChars = "";

    // create password length
    var length = window.prompt(
      "Enter a number from 8 to 128 for password length."
    );

    // confirm user wants to use lowercase


    // confirm user wants to use uppercase

    // confirm user wants to use numbers

    // confirm user wants to use symbols
    

  }

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
