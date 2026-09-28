// Lösning till uppgift 4 av Linneah Olofsson - for-loop och for-loop med if-sats som räknar ut modulus
"use strict";

//Loop som skriver alla tal från 1-20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

console.log(" ");

//Loop för jämna tal
// Loopen körs bara tom. tal 20. När i/2 inte får någon rest är talet jämnt och visas i konsolen.
for (let i = 1; i <= 20; i++) {
  //villkor för vad som visas i konsol
  if (i % 2 === 0) {
    console.log(i);
  }
}
