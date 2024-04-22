// String methods in JavaScript

const userStringOne = "   ashish    panwar  ";
console.log(userStringOne);

console.log(userStringOne.trim()); // Trim method helps you to remove extra space from the string.

const url = "https://ashishpanwar.com/ashish%20panwar";

console.log(url.replace("%20", "-")); // Replace method helps you to replace a substring with another substring.

console.log(url.includes("ashish")); // Includes method helps you to check if a substring is present in the string or not.

const gameName = "panwar-game-zone";

console.log(gameName.split("-")); // Split method helps you to split a string into an array of substrings.
