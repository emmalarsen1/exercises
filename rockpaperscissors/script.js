"use strict";

let userChoice;
let makeComputerChoice;
let result;
document.querySelector(".rock").addEventListener("click", klikRock);
document.querySelector(".paper").addEventListener("click", klikPaper);
document.querySelector(".scissors").addEventListener("click", klikScissors);

function klikRock() {
  userChoice = "rock";
  computerChoice();
  //  console.log("rock");
}
function klikPaper() {
  userChoice = "paper";
  computerChoice();
  //  console.log("paper");
}
function klikScissors() {
  userChoice = "scissors";
  computerChoice();
  // console.log("scissors");
}
function computerChoice() {
  console.log("computerChoice", userChoice);
  makeComputerChoice = "rock";
}

function determineWinner() {
  result = "win";
  startHandAnimations();
}

function startHandAnimations() {
  document
    .querySelector("#player1")
    .addEventListener("animationend", handAnimationsEnd);
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
}

function handAnimationsEnd() {
  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player2").classList.remove("shake");
  console.log("Animation ended");
  if (userChoice === "rock") {
    document.querySelector("#player1").classList.add("rock");
  } else if (userChoice === "paper") {
    document.querySelector("#player1").classList.add("paper");
  } else if (userChoice === "scissors") {
    document.querySelector("#player1").classList.add("scissors");
  }
  if (makeComputerChoice === "rock") {
    document.querySelector("#player2").classList.add("rock");
  } else if (makeComputerChoice === "paper") {
    document.querySelector("#player2").classList.add("paper");
  } else if (makeComputerChoice === "scissors") {
    document.querySelector("#player2").classList.add("scissors");
  }
}

function showWinnerScreen() {
  if (result === "win") {
    document.querySelector("#win").classList.remove("hidden");
  } else if (result === "lose") {
    document.querySelector("#lose").classList.remove("hidden");
  } else (result === "draw") {
    document.querySelector("#draw").classList.remove("hidden");
  }
}
