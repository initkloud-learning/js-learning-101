// Date: 02/18/21
// Name: Ashish Panwar
// File: guessNumber.js

let randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessNumberInput");
const guessSlot = document.querySelector("#previousGuesses");
const remaining = document.querySelector("#lastResult");
const logOrHigh = document.querySelector("#lowOrHigh");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("div");

let previousGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // Check if the input is a number
  if (isNaN(guess)) {
    displayMessage("That was not a valid number. Please try again.");
  } else if (guess < 1 || guess > 100) {
    displayMessage("Please enter a number between 1 and 100.");
    userInput.value = "";
  } else {
    previousGuess.push(guess);
    if (numGuess >= 10) {
      displayGuess(guess);
      displayMessage(`Game Over! The number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // Check if the guess is correct
  if (guess === randomNumber) {
    displayMessage(
      `Congratulations! You guessed the number in ${numGuess} attempts.`
    );
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Too low! Try again.");
  } else if (guess > randomNumber) {
    displayMessage("Too high! Try again.");
  } else {
    displayMessage("Please enter a number.");
  }
}

function displayGuess(guess) {
  // Display the guess
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  guessSlot.style.display = "block";
  remaining.innerHTML = `${10 - numGuess}`;
  numGuess++;
}

function displayMessage(message) {
  // Display the message
  logOrHigh.innerHTML = message;
}

function endGame() {
  // End the game
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  submit.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = "Start new game";
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  // Reset the game
  p.addEventListener("click", function (e) {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    numGuess = 1;
    previousGuess = [];
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute("disabled");
    submit.removeAttribute("disabled");
    startOver.removeChild(p);
    guessSlot.style.display = "none";
    playGame = true;
  });
}
