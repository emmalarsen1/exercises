"use strict";
const funds = 100;

udregning(funds);
function udregning(funds, moms = 25) {
  return funds + (funds * moms) / 100;
}

let doneUdregning = udregning(100);
console.log("doneUdregning", doneUdregning);
