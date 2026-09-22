"use strict";

let age = 77;

if (age < 18) {
  console.log(`Du är ${age} år gammal och kan köpa barnbiljett!`);
} else if (18 <= age < 65) {
  console.log(`Du är ${age} år gammal och kan inte köpa barnbiljett!`);
} else {
  console.log(`Du är ${age} år gammal och kan köpa seniorbiljett!`);
}
