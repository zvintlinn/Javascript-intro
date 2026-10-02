// Lösning till uppgift 7 av Linneah Olofsson - funktion som tar emot array och beräknar summan av talen
"use strict";

let numbers = [10, 100, 100, 200, 300, 650];
let differentNumbers = [20, 25, 34, 65];

let sumOfNumbers = (array) => {
  //funktion som tar emot array
  let sum = 0; //variabel som ska lagra summan efter varje loop-varv
  for (let i = 0; i < array.length; i++) sum = sum + array[i];
  /*första värdet i array adderas till sum som då är 0 och 
  lagras i sum till nästa varv då nästa värde används*/
  return sum; //totalen returneras i slutet
};

console.log(`Summan är ${sumOfNumbers(numbers)}`);
console.log(`Summan är ${sumOfNumbers(differentNumbers)}`);
