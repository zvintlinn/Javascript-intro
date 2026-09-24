"use strict";

let numbers = [10, 100, 100, 200, 300, 650];

let sumOfNumbers = (array) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum = sum + numbers[i];
  return sum;
};

console.log(sumOfNumbers(numbers));
