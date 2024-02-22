document.querySelector("button").addEventListener("pointerdown", btn_klik);

function btn_klik(evt) {
  console.log("currentTarget", evt.currentTarget);
  console.log("target", evt.Target);
  document.querySelector("#ball").classList.add("ani");
  document
    .querySelector("#ball")
    .addEventListener("animationend", animationEnd);
  document
    .querySelector("#ball")
    .addEventListener("animationiteration", animationIterationAndEnd);
}

function animationEnd() {
  console.log("animationEnd");
  document.querySelector("#ball").classList.remove("ani");
}

function animationIterationAndEnd(evt) {
  console.log("animationIterationAndEnd", evt.type);
  if (evt.type === animationEnd) {
    document.querySelector("#ball").classList.remove("ani");
  }
  //document.querySelector("#ball").classList.remove("ani");
}
