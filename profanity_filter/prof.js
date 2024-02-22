"use strict";
const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

function checkIfSentenceContainsProfanity() {
  let theText = document.querySelector("p").textContent;
  curseWords.forEach((wordObject) => {
    theText.replaceAll(wordObject.bad, wordObject.good);
  });
  document.querySelector("p").textContent = theText;
}
console.log(theText);

document
  .querySelector("button")
  .addEventListener("pointerdown", checkIfSentenceContainsProfanity);

function itIsSafe() {
  return !curseWords.some((item) => theText.includes(item.bad));
}
