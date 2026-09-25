"use strict";

const people = [
  { name: "Linneah", age: 25, city: "Östersund" },
  {
    name: "Hanna",
    age: 27,
    city: "Stockholm",
  },
  {
    name: "Fanny",
    age: 30,
    city: "Göteborg",
  },
];

function giveInfo(people) {
  for (let i = 0; i < people.length; i++) {
    console.log(`${people[i].name} bor i ${people[i].city} och är`);
    if (people[i].age < 18) {
      console.log("inte myndig.");
    }
  }
}

giveInfo(people[1]);
