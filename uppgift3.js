"use strict";

let age = 67; //resenärens ålder

if (age < 18) {
  console.log(`Du är ${age} år gammal och kan köpa barnbiljett!`); //Under 18 = barnbiljett
} else if (age < 65) {
  console.log(`Du är ${age} år gammal och måste köpa ordinarie biljett!`); //18-64 = vuxenbiljett
} else {
  console.log(`Du är ${age} år gammal och kan köpa seniorbiljett!`); //65+ = seniorbiljett
}
