// Nested Scope in JavaScript

function one() {
  const username = "ashish";

  function two() {
    const website = "ashish.me";
    console.log(username);
  }
  console.log(website);
  two();
}

one();
