// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var uppChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numChar = ['1','2','3','4','5','6','7','8','9','0']
var specChar = ['!','@','#','$','%','&',]









// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){

  // Prompts that ask which characters to use
  var passwordLength = parseInt(prompt('How many characters in your password'));
  // Makes the user choose between 8 and 128 characters
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Invalid length. Please enter a length between 8 and 128."));
  }
  console.log(passwordLength);

  var lowQuestion = confirm('Will you want lowercase characters');
  console.log(lowQuestion);

  var uppQuestion = confirm('Will you want uppercase characters');
  console.log(uppQuestion);

  var specQuestion = confirm('Will you want special characters');
  console.log(specQuestion);

  var numQuestion = confirm('Will you want numerical characters');
  console.log(numQuestion);

  // Creates empty array where the characters the user inputs will be placed into
  var functionArray = []
    function getNumbers() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    };

    function getLowerCases() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    };

    function getUpperCases() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    };

    function getSpecialCharacters() {
      return specChar[Math.floor(Math.random() * specChar.length)];
    };

  ;

  var minimumCount = 0;
  var minimumNumbers = ''
  var minimumLowerCases = ''
  var minimumUpperCases = ''
  var minimumSpecialCharacters = ''


// Checks if the user said yes or no to specific characters
if (uppQuestion) {
  functionArray.push(getUpperCases);
}
if (lowQuestion) {
  functionArray.push(getLowerCases);
}
if (numQuestion) {
  functionArray.push(getNumbers);
}
if (specQuestion) {
  functionArray.push(getSpecialCharacters);
}
  if (lowQuestion === true) {
    minimumNumbers = getLowerCases();
    minimumCount++;

  }

  if (uppQuestion === true) {
    minimumLowerCases = getUpperCases();
    minimumCount++;

  }

  if (numQuestion === true) {
    minimumUpperCases = getNumbers();
    minimumCount++;

  }

  if (specQuestion === true) {
    minimumSpecialCharacters = getSpecialCharacters();
    minimumCount++;

  };


  var randomPasswordGenerated = "";

  // for loop that uses the length of the functionarray and the length to create the password
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * functionArray.length);

    randomPasswordGenerated += functionArray[randomNumberPicked]();


  }
  return randomPasswordGenerated;
}