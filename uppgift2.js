"use strict";

let produktPris = 100; //Produktens pris
let produktAntal = 3; //Antal produkter

// Beräkningen visar totalpriset för produkterna och vad det totala priset blir inklusive 25% moms
console.log(
  `Pris: ${produktPris} Antal: ${produktAntal} Totalt: ${produktPris * produktAntal} Totalt inklusive moms: ${produktPris * produktAntal * 1.25}`,
);
