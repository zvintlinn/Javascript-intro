"use strict";

let age = 67;

if (age < 18) {
  console.log(`Du är ${age} år gammal och kan köpa barnbiljett!`);
} else if (age < 65) {
  console.log(`Du är ${age} år gammal och måste köpa ordinarie biljett!`);
} else {
  console.log(`Du är ${age} år gammal och kan köpa seniorbiljett!`);
}
