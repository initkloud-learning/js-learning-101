// Continue and Break in JavaScript

// Continue
// The continue statement is used to skip the current iteration of the loop and continue with the next iteration. It is used with for, while, and do-while loops.

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("Number 5 detected!");
    continue;
  }
  console.log(`Index: ${index}`);
}

// Break
// The break statement is used to terminate the loop immediately. It is used with for, while, and do-while loops.

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("Number 5 detected!");
    break;
  }
  console.log(`Index: ${index}`);
}
