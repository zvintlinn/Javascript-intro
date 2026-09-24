"use strict";

let dishes = ["carbonara", "pizza", "hamburgare", "räksallad", "lasagne"];
console.log(`1. ${dishes}`); //Upg 1
console.log(`2. ${dishes[0]}`); //Upg 2
console.log(`3. ${dishes[4]}`); //Upg 3

dishes.push("Köttsoppa"); //Upg 4
dishes.shift(); //Upg 5

console.log(`6. ${dishes}`); //Upg 6
