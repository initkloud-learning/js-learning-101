// In this file, we define the data types used in JavaScript
// JavaScript has 7 data types:
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. Object
"use strict";
let userNames = "ashupanwar2024"; //string data type
let userAge = 20; //number data type
let isUserActive = true; //boolean data type
let userAddress = undefined; //undefined data type
let userCity = null; //null data type

//String can be enclosed in single quotes, double quotes or backticks
let userCountry = "India"; //single quotes
let userState = "Maharashtra"; //double quotes
let userPincode = `400001`; //backticks

//Number can be integer, float, hexadecimal, octal or binary
let userMobile = 1234567890; //integer
let userBalance = 1000.5; //float
let userHex = 0x123; //hexadecimal
let userOct = 0o123; //octal
let userBin = 0b101; //binary

//Boolean can be true or false
let isUserVerified = true; //true
let isUserBlocked = false; //false

//Undefined is a variable that has been declared but not assigned a value
let userGender = undefined;

//Null is a variable that has been assigned a null value
let userPin = null;

// NaN is a property of the global object. In other words, it is a variable in global scope.
/* 
The initial value of NaN is Not-A-Number — the same as the value of Number.NaN. In modern browsers, 
NaN is a non - configurable, non - writable property.Even when this is not the case, avoid overriding it.
*/
let userNaN = NaN;
