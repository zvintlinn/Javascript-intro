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

/*Eftersom jag insåg att jag kanske 
missförstod uppgiften när jag gjorde en 
function template så gör jag en till variant nedan*/

console.log(" "); //Googlade hur jag fick in en tom rad för att separera böckerna

const secondBook = {
  title: "Allt jag fått lära mig",
  author: "Tara Westover",
  year: 2019,
};

function bookInfo(book) {
  console.log(`Titel: ${book.title}`);
  console.log(`Författare: ${book.author}`);
  console.log(`Utgivningsår: ${book.year}`);
}

bookInfo(secondBook);
