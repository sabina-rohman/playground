class Book {
  constructor(title, author){
    this.title = title;
    this.author = author;
  }
}

class MyBook extends Book {
  constructor(title, author, price){
    super(title, author);
    this.price = price;
  }
  
  display() {
    console.log("Title: " + this.title);
    console.log("Author: " + this.author);
    console.log("Price: " + this.price);
  }
}

var alien = new MyBook("Alien", "Colt", 4);
alien.display();


