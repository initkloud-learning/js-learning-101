// Description: This file contains examples of type conversion in JavaScript.
let score = 40;
console.log(typeof score);

// Converting string to number
let valueInString = "20";

console.log(valueInString); // Printing value before conversion
console.log(typeof valueInString); // Printing type before conversion
console.log(Number(valueInString)); // Printing value after conversion
console.log(typeof Number(valueInString)); // Printing type after conversion

/*
Value of Boolean true will be converted to 1 and false will be converted to 0.
Value of null will be converted to 0 and undefined will be converted to NaN.
Value containing only whitespace will be converted to 0.
Value containing string and number will be converted to NaN.
Value containing number as string will be converted to number.
*/

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn); // Converting number to boolean
console.log(booleanIsLoggedIn); // Printing value after conversion
console.log(typeof booleanIsLoggedIn); // Printing type after conversion

let isLoggedInZero = 0;

let booleanIsLoggedInZero = Boolean(isLoggedInZero); // Converting number to boolean
console.log(booleanIsLoggedInZero); // Printing value after conversion
console.log(typeof booleanIsLoggedInZero); // Printing type after conversion
