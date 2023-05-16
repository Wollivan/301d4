const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const Book = require("./models/book");

async function seed() {
  await Book.create({ title: "Lord of the Rings: Fellowship of the Ring", description: "The GOAT", status: "Read" });
  await Book.create({ title: "Cat in the Hat", description: "A weird filine trip", status: "Not Read" });
  await Book.create({ title: "Coding for Dummies", description: "Git gud", status: "Obviously not read" });
  await Book.create({ title: "The Clean Coder", description: "Coding clean", status: "Read (by Victor for sure)" });
  await Book.create({
    title: "My Teacher is an Alien",
    description: "About a teacher that is an alien",
    status: "Chris' favourite book",
  });

  mongoose.disconnect();
}

seed();
