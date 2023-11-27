// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
const TYPE_NUMBER = 0;
const TYPE_BOOLEAN = 1;
const TYPE_STRING = 2;

const config = {
  len: 8,
  upc: false,
  loc: false,
  num: false,
  sym: false
};

while (true) {
  const len = ask('How many charcters would you like? (8-128)', TYPE_NUMBER);
  if (len <= 128 && len >= 8) {
    config.len = len; break;
  } else {
    alert("Password must be 8 to 128 characters long!");
  }
}

const upc = ask('Would you like to use capital letters?', TYPE_BOOLEAN);
if (upc) { config.upc = upc; }

const loc = ask('Would you like to use lowercase letters?', TYPE_BOOLEAN);
if (loc) { config.loc = loc; }

const num = ask('Would you like to use numbers?', TYPE_BOOLEAN);
if (num) { config.num = num; }

const sym = ask('Would you like to use special characters?', TYPE_BOOLEAN);
if (sym) { config.sym = sym; }

console.log(config);

function ask(msg, type) {
  let result;
  if (type === TYPE_BOOLEAN) {
    result = confirm(msg);
  } else if (type === TYPE_NUMBER) {
    result = parseInt(prompt(msg));
  } else if (type === TYPE_STRING) {
    result = prompt(msg);
  } else {
    result = "";
  }
  return result;
}


// let passInfo= "";
// let chosenOpts= "";

// function getPasswordOptions() {
// let passLength = prompt("please choose number between 1 and 128")
// passLength = parseInt(passLength);
// console.log(passLength)
// if (passLength>= 8 && passLength <= 128) {
//   const getNumbers = window.confirm("Would you like to include NUMBERS?");
//   if (getNumbers) {
//     passInfo += passwordOptions.num;
//     chosenOpts.push(getRandomChar(passwordOptions.num));
//   };

//   const getSpecialCharacters = window.confirm("Would you like to include SPECIAL characters?");
//   if (getSpecialCharacters) {
//     passInfo += passwordOptions.specialChar;
//     chosenOpts.push(getRandomChar(passwordOptions.specialChar));
//   };

//   const getLowerCase = window.confirm("Would you like to include LOWERCASE characters?");
//   if (getLowerCase) {
//     passInfo += passwordOptions.lowerCase;
//     chosenOpts.push(getRandomChar(passwordOptions.lowerCase));
//   };
  
//   const getUpperCase = window.confirm("Would you like to include UPPERCASE characters?");
//   if (getUpperCase) {
//     passInfo += passwordOptions.upperCase;
//     chosenOpts.push(getRandomChar(passwordOptions.upperCase));
//   };
//   if (!passInfo) {
//     window.alert("You need to select at least one option, please try again!");
//     return generatePassword();
//   };

//   while (passChars.length < characterAmount) {
//     chosenOpts.push(getRandomChar(passInfo));
//   }
  
  
  
//   else {
//     window.alert("You need to provide a valid length!");
//   }
//     return initialState;
// }
// }

console.log(getPasswordOptions());
// Function for getting a random element from an array
function getRandom(arr) {
return arr [Math.floor(Math.random()*arr.length)]
}
console.log(getRandom(arr))
// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);