// Functions in JavaScript

// Parameters and Arguments
// Parameters are the names listed in the function definition.
// Arguments are the real values passed to the function.

function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}

addTwoNumbers(10, 20);

function addNumbers(number1, number2) {
  let additionNumber = number1 + number2; // additionNumber is a local variable and can only be accessed inside the function
  return additionNumber; // return statement is used to return a value from a function
}

console.log(addNumbers(10, 20));

function multiplyNumbers(number1, number2) {
  return number1 * number2; // return statement is used to return a value from a function
}

function loginUserMessaege(username) {
  if (!username) {
    return "Please provide a username";
  }
  return `${username} just logged in`; // return statement is used to return a value from a function
}

console.log(loginUserMessaege("John")); // John just logged in
console.log(loginUserMessaege()); // in JavaScript, if a function is called without an argument, the parameter will be undefined
