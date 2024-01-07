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

// // Function to prompt user for password options
// const TYPE_NUMBER = 0;
// const TYPE_BOOLEAN = 1;
// const TYPE_STRING = 2;

// const getPasswordOptions = {
//   length: "",
//   uppercase: "",
//   lowercase: "",
//   numbers: "",
//   specialchar: ""
// };

// let passwordOpts = '';
// let passCharacters=[];

// while (true) {
//   const length = ask('How many charcters would you like? (8-128)', TYPE_NUMBER);
//   if (length <= 128 && length >= 8) {
//     getPasswordOptions.length = length; 
//     break;
//   } else {
//     alert("Password must be 8 to 128 characters long!");
//   }
// }

// const uppercase = ask('Would you like to use capital letters?', TYPE_BOOLEAN);
// if (true) { getPasswordOptions.uppercase = uppercase; }
//  //passwordOpts += upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];


// const lowercase = ask('Would you like to use lowercase letters?', TYPE_BOOLEAN);
// if (true) { getPasswordOptions.lowercase = lowercase;}
//  // passwordOpts += lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)]; }

// const numbers = ask('Would you like to use numbers?', TYPE_BOOLEAN);
// if (numbers) { getPasswordOptions.numbers = numbers;
//   passCharacters.push(getRandomChar(getPasswordOptions.num));}
//  // passwordOpts += numericCharacters[Math.floor(Math.random() * numericCharacters.length)]; }

// const specialchar = ask('Would you like to use special characters?', TYPE_BOOLEAN);
// if (specialchar) { getPasswordOptions.specialchar = specialchar; }
//   //passwordOpts += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];}

// console.log(getPasswordOptions);
// console.log(passwordOpts);


// function ask(msg, type) {
//   let result;
//   if (type === TYPE_BOOLEAN) {
//     result = confirm(msg);
//   } else if (type === TYPE_NUMBER) {
//     result = parseInt(prompt(msg));
//   } else if (type === TYPE_STRING) {
//     result = prompt(msg);
//   } else {
//     result = "";
//   }
//   return result;
// }

// let getRandomChar = function(fromString) {
//   return fromString[Math.floor(Math.random() * fromString.length)];}
// // function generateRandomPassword(length) {

// // let passwordOpts = '';

    
// //     for (let i = 0; i < length; i++) {
// //         const randomSet = Math.floor(Math.random() * 4);
        
// //         switch (randomSet) {
// //             case 0:
// //                 password += upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];
// //                 break;
// //             case 1:
// //                 password += lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)];
// //                 break;
// //             case 2:
// //                 password += numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
// //                 break;
// //             case 3:
// //                 password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
// //                 break;
// //         }
// //     }
    
// //     return password;
// //   }
// //     const randomPassword = generateRandomPassword(getPasswordOptions.length);
// // console.log(randomPassword);

// // Function for getting a random element from an array
// let passwordGenerated = [];
// function getRandom(specialCharacters) {
// return passwordGenerated [Math.floor(Math.random()*specialCharacters.length)]
// }
// console.log(getRandom(specialCharacters))

// function getRandom(numericCharacters) {
// return passwordGenerated [Math.floor(Math.random()*numericCharacters.length)]
// }
// console.log(getRandom(numericCharacters))
// // Function to generate password with user input
// function generatePassword() {

// }

// // Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);