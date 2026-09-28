// Lösning till uppgift 3 av Linneah Olofsson - if-sats som avgör om en person är barn, vuxen eller pensionär
"use strict";

let age = 67; //resenärens ålder

if (age < 18) {
  console.log(`Du är ${age} år gammal och räknas som barn.`); //Under 18 = barn
} else if (age < 65) {
  console.log(`Du är ${age} år gammal och räknas som vuxen.`); //18-64 = vuxen
} else {
  console.log(`Du är ${age} år gammal och räknas som pensionär.`); //65+ = pensionär
}
