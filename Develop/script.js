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
  var passwordLength = prompt('How many characters in your password');
  console.log(passwordLength);

  var lowQuestion = confirm('Will you want lowercase characters');
  console.log(lowQuestion);

  var uppQuestion = confirm('Will you want uppercase characters');
  console.log(uppQuestion);

  var specQuestion = confirm('Will you want special characters');
  console.log(specQuestion);

  var numQuestion = confirm('Will you want numerical characters');
  console.log(numQuestion);


  var allowChar = [
    function useNUm() {
      return String.fromCharCode(Math.floor(Math.random() * numChar.length));
    },

    function useLow() {
      return String.fromCharCode(Math.floor(Math.random() * lowChar.length));
    },

    function useUpp() {
      return +String.fromCharCode(Math.floor(Math.random() * uppChar.length));
    },

    function useSpec() {
      return specialCharacters(Math.floor(Math.random() * specChar.length));
    }

  ];

  var minimumCount = ''

  if (lowQuestion === true) {
    minimumNumbers = allowChar[0];
    minimumCount++;

  }

  if (uppQuestion === true) {
    minimumLowerCases = allowChar[1];
    minimumCount++;

  }

  if (numQuestion === true) {
    minimumUpperCases = allowChar[2];
    minimumCount++;

  }

  if (specQuestion === true) {
    minimumSpecialCharacters = allowChar[3];
    minimumCount++;

  }

}



// // Box asking for lowercase characters


// // Box asking for uppercase characters


// // Box asking for Special characters


// // Box asking for numerical characters
