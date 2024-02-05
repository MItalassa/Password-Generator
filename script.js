// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var generateBtn = document.querySelector("#generate");
//variable to store user choices from which take the characters for the password
var charAvailable = [];
var passChar = [];
var passLenght = "";

//function to take a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generatePassword() {
  while (true) {
    const length = prompt("How many charcters would you like? (8-128)");
    if (length <= 128 && length >= 8) {
      passLenght = parseInt(length);
      break;
    } else {
      alert("Password must be 8 to 128 characters long!");
    }
  }
  var lowercase = confirm("Would you like to use capital letters?");
  var uppercase = confirm("Would you like to use lowercase letters?");
  var number = confirm("Would you like to use numbers?");
  var specialChar = confirm("Would you like to use special characters?");

  if (uppercase) {
    charAvailable = charAvailable.concat(upperCasedCharacters);
    passChar += getRandom(upperCasedCharacters);
  }

  if (lowercase) {
    charAvailable = charAvailable.concat(lowerCasedCharacters);
    passChar += getRandom(lowerCasedCharacters);
  }

  if (number) {
    charAvailable = charAvailable.concat(numericCharacters);
    passChar += getRandom(numericCharacters);
  }

  if (specialChar) {
    charAvailable = charAvailable.concat(specialCharacters);
    passChar += getRandom(specialCharacters);
  }

  console.log(charAvailable);
  console.log(passChar);

  for (var i = passChar.length; i < passLenght; i++) {
    passChar += getRandom(charAvailable);
  }
  console.log(passChar);

  return passChar;
}


