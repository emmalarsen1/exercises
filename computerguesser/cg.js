"use strict";

let loNum = 0;
let hiNum = 100;
let computerGuess;
let numberOfGuesses = 0;
let computerGuessText = document.querySelector("h1");
document.querySelector("#tooLo").addEventListener("click", tooLo);
document.querySelector("#tooHi").addEventListener("click", tooHi);
computerGuesses();
function computerGuesses() {
  numberOfGuesses++;
  computerGuess = Math.round(loNum + (hiNum - loNum) / 2);
  computerGuessText.textContent = computerGuess;
  console.log("numberOfGuesses", numberOfGuesses);
}

function tooLo() {
  console.log("LO");
  loNum = computerGuess;
  computerGuesses();
}
function tooHi() {
  console.log("HI");
  hiNum = computerGuess;
  computerGuesses();
}
