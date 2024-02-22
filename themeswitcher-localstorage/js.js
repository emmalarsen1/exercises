"use strict";

document.querySelector("#theme_select").addEventListener("change", theChange);

function theChange(evt) {
  console.log("change", evt.target.value);
  document.querySelector("body").dataset.theme = evt.target.value;
  console.log("setItem", evt.target.value);
  localStorage.setItem("switchertheme", evt.target.value);
}
const themeFromLocalStorage = localStorage.getItem("switchertheme");
console.log("what is the theme:", themeFromLocalStorage);
document.querySelector("body").dataset.theme = themeFromLocalStorage;
document.querySelector("#theme_select").value = themeFromLocalStorage;
// const root = document.documentElement,
//   select = document.querySelector("#theme_select");

// let isDark = localStorage.getItem("theme") === "dark";
// let isHawaii = localStorage.getItem("theme") === "hawaii";
// let isLight = localStorage.getItem("theme") === "light";

// function applyTheme() {
//   if (isDark === true) {
//     root.dataset.theme = "dark";
//     localStorage.setItem("theme", "dark");
//   } else if (isHawaii === true) {
//     root.dataset.theme = "hawaii";
//     localStorage.setItem("theme", "hawaii");
//   } else if (isLight === true) {
//     root.dataset.theme = "light";
//     localStorage.setItem("theme", "light");
//   }
// }
//document.querySelector("#theme_select").applyTheme;

function choseTheme() {
  if (isDark === true) {
    isDark = false;
  } else {
    isDark = true;
  }

  // applyTheme();
}

// applyTheme();

// btn.addEventListener("click", toggleTheme);
