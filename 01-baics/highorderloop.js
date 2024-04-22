// High-Order Loop
// This is a high-order loop that takes a function and a number as arguments and returns a function that will call the original function the number of times specified.

// (for of) loop in JavaScript
// The for...of loop is used to iterate over the values of an iterable object (array, string, etc).
// Syntax:
// for (variable of iterable) {
//   // code block to be executed
// }
// Example: Print the values of an array using for...of loop
const myArray = ["apple", "banana", "cherry", "date", "elderberry"];

for (const item of myArray) {
  // for...of loop
  console.log(`Item: ${item}`); // Print the value of the item
} // Output: Item: apple, Item: banana, Item: cherry, Item: date, Item: elderberry

// for..of loop on string

const myString = "Hello, There!";
for (const char of myString) {
  // for...of loop
  console.log(`Character: ${char}`); // Print the value of the character
} // Output: Character: H, Character: e, Character: l, Character: l, Character: o, Character: ,, Character:  , Character: T, Character: h, Character: e, Character: r, Character: e, Character: !

// Maps in JavaScript

const map = new Map([
  ["name", "John"],
  ["age", 30],
  ["city", "New York"],
]);
console.log(map); // Output: Map(3) {"name" => "John", "age" => 30, "city" => "New York"}

for (const [key, value] of map) {
  // for...of loop
  console.log(`${key}: ${value}`); // Print the key-value pair
} // Output: name: John, age: 30, city: New York

// (for ..in) loop in JavaScript
// The for...in loop is used to iterate over the properties of an object.
// Syntax:
// for (variable in object) {
//   // code block to be executed
// }
// Example: Print the properties of an object using for...in loop
const myObject = {
  name: "John",
  age: 30,
  city: "New York",
};

for (const key in myObject) {
  // for...in loop
  console.log(`${key}: ${myObject[key]}`); // Print the key-value pair
} // Output: name: John, age: 30, city: New York

// for..each loop in JavaScript
// The forEach() method is used to execute a function on each element of an array.
// Syntax:
// array.forEach(function(currentValue, index, arr), thisValue)
// Example: Print the elements of an array using forEach() method
const fruitsArray = ["apple", "banana", "cherry", "date", "elderberry"];

// Example: Using forEach() method with an arrow function
fruitsArray.forEach((item, index) => {
  // forEach() method
  console.log(`Arrow: For Each Item ${index + 1}: ${item}`); // Print the value of the item
}); // Output: Item 1: apple, Item 2: banana, Item 3: cherry, Item 4: date, Item 5: elderberry

// Example: Using forEach() method with an function
fruitsArray.forEach(function (item, index) {
  // forEach() method
  console.log(`Func: For Each Item ${index + 1}: ${item}`); // Print the value of the item
}); // Output: Item 1: apple, Item 2: banana, Item 3: cherry, Item 4: date, Item 5: elderberry

function printMe(item) {
  console.log(`For Each Item: ${item}`); // Print the value of the item
}

fruitsArray.forEach(printMe); // Output: Item: apple, Item: banana, Item: cherry, Item: date, Item: elderberry
