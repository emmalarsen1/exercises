"use strict";

document
  .querySelector("button")
  .addEventListener("pointerdown", btnPointerDown);

function btnPointerDown() {
  document.querySelector("h1").dataset.filter = "fox";
}
