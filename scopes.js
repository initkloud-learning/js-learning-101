// Scopes in JavaScript

let a = 10; // Global Scope
const b = 20; // Global Scope
var c = 30; // Global Scope

if (true) {
  let a = 40; // Block Scope
  const b = 50; // Block Scope
  var c = 60; // Function Scope

  console.log(a); // 40
  console.log(b); // 50
  console.log(c); // 60
}

function test() {
  let a = 70; // Function Scope
  const b = 80; // Function Scope
  var c = 90; // Function Scope

  console.log(a); // 70
  console.log(b); // 80
  console.log(c); // 90
}

test();

console.log("OUTSIDE IF BLOCK");
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
