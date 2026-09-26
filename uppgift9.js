"use strict";

//array med tre personer
const people = [
  { name: "Linneah", age: 25, city: "Östersund" },
  {
    name: "Hanna",
    age: 27,
    city: "Stockholm",
  },
  {
    name: "Fanny",
    age: 12,
    city: "Göteborg",
  },
];
//funktion som tar emot array
function giveInfo(people) {
  for (let i = 0; i < people.length; i++) {
    //loop genom arrayen, if-sats avgör om person är myndig eller ej
    if (people[i].age < 18) {
      console.log(
        `${people[i].name} bor i ${people[i].city} och är inte myndig.`,
      );
    } else {
      console.log(`${people[i].name} bor i ${people[i].city} och är myndig.`);
    }
  }
}

giveInfo(people); //anropar funktion
