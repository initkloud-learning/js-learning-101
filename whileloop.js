// while loop in JavaScript
// The while loop is used to execute a block of code as long as the condition is true.
// Syntax:

let index = 0;
while (index <= 10) {
  console.log(`Value if index: ${index}`);
  index++;
}

// Example: Print the values of an array using while loop
let myArray = ["apple", "banana", "cherry", "date", "elderberry"];
let arrIndex = 0;
while (arrIndex < myArray.length) {
  console.log(`Value at index ${arrIndex}: ${myArray[arrIndex]}`);
  arrIndex++;
}

// Do-While loop
// Do-While loop is similar to the while loop, except that the condition is checked at the end of the loop.
// This means that the loop will always be executed at least once, even if the condition is false.
// Syntax:
let score = 1;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);

// Example: Print the values of an array using do-while loop

let scoreIndex = 11;
do {
  console.log(`Score is ${scoreIndex}`);
  scoreIndex++;
} while (score <= 10);
