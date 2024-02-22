"use strict";

// const people = ["Harry", "Ron", "Hermione", "Neville"];

// // function sayHello(person) {
// //   console.log(`Hello ${person}`);
// // }

// // people.forEach(sayHello);

// function testParms(a, b, c, d) {
//   console.log(`a: ${a},${b},${c},${d},`);
// }

// people.forEach(testParms);

const animals = [
  {
    name: "Mandu",
    type: "cat",
  },
  {
    name: "Mia",
    type: "cat",
  },
  {
    name: "Leeloo",
    type: "dog",
  },
  {
    name: "Scooby",
    type: "dog",
  },
];

// const onlyCats = animals.filter(isCat);
// console.log(onlyCats);
const onlyDogs = animals.filter(isDog);
console.log(onlyDogs);

function isCat(animal) {
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
}
function isDog(animal) {
  if (animal.type === "dog") {
    return true;
  } else {
    return false;
  }
}
// let result = animals.filter(isCat);
// console.log(result);

// let resultDog = animals.filter(isDog);
// console.log(resultDog);

// function all(animal) {
//   return true;
// }
// function none(animal) {
//   return false;
// }
// console.log("all", animals.filter(all));
// console.log("none", animals.filter(none));
