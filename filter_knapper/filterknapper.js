"use strict";

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", btnfilterEVTListener);
});

function btnfilterEVTListener(evt) {
  console.log(evt.currentTarget.dataset.filter);
}
