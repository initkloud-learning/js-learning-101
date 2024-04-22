// Control Flow in JavaScript

const isUserLoggedIn = true;

// if (isUserLoggedIn) {
//   // code block to be executed if the condition is true
//   console.log("This is true");
// }

// if (2 === "2") {
//   console.log("This is executed 1");
// }

// if (2 == "2") {
//   console.log("This is executed 2");
// }

// if (2 === 2) {
//   console.log("This is executed 3");
// }

// < less than operator
// > greater than operator
// <= less than or equal to operator
// >= greater than or equal to operator
// == equality operator
// === strict equality operator
// != inequality operator
// !== strict inequality operator

// Shorthand if...else statement

const balance = 1000;
// if (balance > 0) console.log("You have money");

// if...else statement
if (balance < 500) {
  console.log("You have less than 500");
} else if (balance < 750) {
  console.log("You have less than 750");
} else {
  console.log("You have enough money");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("You can make a payment");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in successfully");
}
