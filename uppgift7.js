"use strict";

let numbers = [2, 6, 3, 5, 8, 9];

let sumOfNumbers = (array) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
    return sum;
  }
};

console.log();
