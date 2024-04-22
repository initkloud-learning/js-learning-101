// inbuild functions in JavaScript for looping through arrays
const programming_languages = ["JavaScript", "Python", "Ruby", "Java", "C#"];

// forEach() method: returns undefined
const values = programming_languages.forEach((item) => {
  // console.log(item);
  return item; // Return the value of the item
});

console.log(values); // Output: undefined

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// filter() method: returns a new array
const newNUmbers = myNumbers.filter((number) => {
  return number > 5;
});

console.log(newNUmbers); // Output: [6, 7, 8, 9, 10]

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const userBooks = books.filter((book) => {
  return book.genre === "History";
});

console.log(userBooks); // Output: [ { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 }, { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 } ]

const userbooksAfter2000 = books.filter((book) => {
  return book.publish > 2000;
});

console.log(userbooksAfter2000); // Output: [ { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 }, { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 } ]

const userbooksAfter1980AndHistroy = books.filter((book) => {
  return book.publish > 1980 && book.genre === "History";
});

console.log(userbooksAfter1980AndHistroy); // Output: [ { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 }, { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 } ]

//MAPS IN JAVA SCRIPT
// map() method: returns a new array
// syntax: array.map((element) => {})
// element: stores the current element being processed
// map() method does not change the original array
// map() method is used to transform the elements of an array

const doubleNumbers = myNumbers.map((number) => {
  return number * 2;
});

console.log(doubleNumbers); // Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// REDUCE IN JAVA SCRIPT
// reduce() method: returns a single value
// syntax: array.reduce((accumulator, currentValue) => {}, initialValue)
// accumulator: stores the accumulated value
// currentValue: stores the current value being processed
// initialValue: optional, initial value of the accumulator
// if initialValue is not provided, the first element of the array is used as the initial value of the accumulator

// const sumOfNumbers = myNumbers.reduce((acc, number) => {
//   return acc + number;
// }, 0);

const myNumbers1 = [1, 2, 3, 4, 5];
// reduce() method: returns a single value
const sum = myNumbers1.reduce((acc, number) => {
  return acc * number;
}, 1);

// console.log(sum); // Output: 55
