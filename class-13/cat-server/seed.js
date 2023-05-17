const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const Cat = require("./models/cat");

async function seed() {
  // create a few cats
  await Cat.create({ name: "Chrisp", colour: "blue", hasClaws: false, location: "Norwich" });
  await Cat.create({ name: "Tim", colour: "green", hasClaws: true, location: "Outer Space" });
  console.log("Create a couple o cool cats");
  mongoose.disconnect();
}

seed();
