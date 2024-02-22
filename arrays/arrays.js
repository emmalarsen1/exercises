"use strict";

// let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
// console.log("letters[4]", letters[4]);
// //console.log("letters[7]", letters[7]);
// //console.log("letters.length", letters.length);
// let newarr = letters;
// newarr[4] = "*";
// console.log(letters[4]);

// const people = ["Harry", "Ron", "Hermione"];
// let result;
// result = people;
// console.log("result", result);
// console.log("people", people);
// console.log("*****************");

// const str = "abcdefghijklm";
// const arr1 = str.split("");
// console.log(arr1);

// const str = "abcdefghijklm";
// const arr2 = Array.from(str);
// console.log(arr2);

// function greeting(firstname) {
//   return `Hello ${firstname}`;
// }

// // console.log(greeting("Mona"));

// const sayHi = greeting;
// console.log(sayHi("Mona"));
const person3 = {
  firstName: "Harry",
  lastName: "Potter",
  hired: false,
};
const person4 = {
  firstName: "Fred",
  lastName: "Weasley",
  hired: false,
};

function hire(person) {
  person.hired = true;
}
function fire(person) {
  person.hired = false;
}

function fireOrHire(action, person) {
  action(person);
}
fireOrHire(hire, person4);
fireOrHire(fire, person3);

console.log(person3, person4);
