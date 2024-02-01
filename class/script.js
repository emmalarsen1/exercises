"use strict";
const funds = 100;

udregning(funds);
function udregning(funds, moms = 25) {
  console.log(funds + (funds * moms) / 100);
}
