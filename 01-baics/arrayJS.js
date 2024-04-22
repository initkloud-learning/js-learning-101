const myArray = [1, 2, 3, 4, 5]; // Array of numbers
const myArray2 = new Array(1, 2, 3, 4, 5); // Another way to create an array
console.log(myArray); // [1, 2, 3, 4, 5]
console.log(myArray2); // [1, 2, 3, 4, 5]

myArray.push(6); // Add 6 to the end of the array
console.log(myArray);

myArray.pop(); // Remove the last element of the array
console.log(myArray);

myArray.unshift(0); // Add 0 to the beginning of the array
console.log(myArray);

myArray.shift(); // Remove the first element of the array
console.log(myArray);

console.log(myArray.includes(3)); // true
console.log(myArray.includes(7)); // false

console.log(myArray.indexOf(3)); // 2
console.log(myArray.indexOf(7)); // -1

// slice(start, end) method
// splice(start, deleteCount, item1, item2, itemN) method

const newArray = myArray.slice(1, 3); // [2, 3]
console.log(newArray);
