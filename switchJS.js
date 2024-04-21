// Switch statement in JavaScript

const month = 1;

switch (month) {
  case 1:
    console.log("This is January");
    break;
  case 2:
    console.log("This is February");
    break;
  case 3:
    console.log("This is March");
    break;
  case 4:
    console.log("This is April");
    break;
  case 5:
    console.log("This is May");
    break;
  case 6:
    console.log("This is June");
    break;
  case 7:
    console.log("This is July");
    break;
  case 8:
    console.log("This is August");
    break;
  case 9:
    console.log("This is September");
    break;
  case 10:
    console.log("This is October");
    break;
  case 11:
    console.log("This is November");
    break;
  case 12:
    console.log("This is December");
    break;
  default:
    console.log("This is an invalid month");
    break;
}

// falsy values in JavaScript
// false; // Boolean false
// 0 - // Number 0 also false
//   0; // Number -0 also false
// 0n; // BigInt 0 also false
// (""); // Empty string also false
// null; // null value also false
// undefined; // undefined value also false
// NaN; // Not a Number also false

// Terinary operator in JavaScript
const iceTeaPrice = 100;
iceTeaPrice >= 100
  ? console.log("I will buy it")
  : console.log("I will not buy it");
