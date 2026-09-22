"use strict";

let produktPris = 100; //Produktens pris
let produktAntal = 3; //Antal produkter

// Beräkningen visar totalpriset för antalet produkter och vad det totala priset blir inklusive 25% moms
console.log(`Pris: ${produktPris}kr`);
console.log(`Antal: ${produktAntal}st`);
console.log(`Totalt: ${produktPris * produktAntal}kr`);
console.log(`Totalt inklusive moms: ${produktPris * produktAntal * 1.25}kr`);
