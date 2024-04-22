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

console.log("REST OPERATOR & SPREAD OPERATOR");
function calculateCartPrice(...num01) {
  // Rest Operator: ...num01 => when we add ... before the parameter, it will take all the arguments and put them in an array
  return num01;
}

console.log(calculateCartPrice(10, 10, 30, 40, 50)); // 10

const user = {
  userName: "John",
  price: 100,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.userName} and price is ${anyobject.price}`
  );
  return;
}

console.log(handleObject(user));
