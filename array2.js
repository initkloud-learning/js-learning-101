const marvel_heroes = [
  "Iron man",
  "Thor",
  "Hulk",
  "Black widow",
  "Captain America",
  "Hawkeye",
];
const dc_heroes = [
  "Superman",
  "Batman",
  "Flash",
  "Wonder Woman",
  "Aquaman",
  "Green Lantern",
];

new_heros = marvel_heroes.concat(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes);

// console.table(new_heros);

const all_new_heros = [...marvel_heroes, ...dc_heroes]; // Spread operator: used to merge two arrays
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11, 12]]];
console.log(another_array.flat(Infinity)); // flat method : used to flatten the array

console.log(Array.isArray("Ashish")); // isArray method : used to check if the given value is an array or not
console.log(Array.isArray("Ashish".split(""))); // isArray method : used to check if the given value is an array or not
console.log(Array.from("Ashish")); // from method : used to convert the given value into an array

let score01 = 100;
let score02 = 200;
let score03 = 300;

console.log(Array.of(score01, score02, score03)); // of method : used to convert the given values into an array
