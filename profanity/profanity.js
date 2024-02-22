"use strict";
const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

document
  .querySelector("button")
  .addEventListener("pointerdown", chechIfSentenceContainsProfanity);
