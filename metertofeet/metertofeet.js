"use strict";

const beregning = convertSquareMToSquareFt(20);

function convertSquareMToSquareFt(sqm) {
  return sqm * 10.7;
}

console.log(`Conversionen er ${convertSquareMToSquareFt}`);
