"use strict";

//Lav en funktion der hedder udregnRektangelAreal der modtager to parametre (arguments)
// - width og height og returnerer arealet af rektanglet.

const samletAreal = udregnRektangelAreal(100, 200);

function udregnRektangelAreal(width, height) {
  const areal = 2 * (width + height);
  return areal;
}

console.log(`Arealet er ${samletAreal}`);
