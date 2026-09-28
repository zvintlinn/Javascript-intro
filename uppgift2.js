// Lösning till uppgift 2 av Linneah Olofsson - skriver ut prisuppgifter om en produkt
"use strict";

let productPrice = 100; //Produktens pris
let productCount = 3; //Antal produkter

// Beräkningen visar totalpriset för antalet produkter och vad det totala priset blir inklusive 25% moms
console.log(`Pris: ${productPrice}kr`);
console.log(`Antal: ${productCount}st`);
console.log(`Totalt: ${productPrice * productCount}kr`);
console.log(`Totalt inklusive moms: ${productPrice * productCount * 1.25}kr`);
