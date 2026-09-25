"use strict";

function book(title, author, year) {
  //function template för böcker
  this.title = title;
  this.author = author;
  this.year = year;
  this.presentation = function () {
    console.log(`Titel: ${this.title}`);
    console.log(`Författare: ${this.author}`);
    console.log(`Utgivningsår: ${this.year}`);
  };
}

const book1 = new book("Chippet", "Linnea Malmgren", 2024);

book1.presentation();
