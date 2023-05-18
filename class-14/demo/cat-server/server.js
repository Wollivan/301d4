const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
const bp = require("body-parser");
app.use(bp.json());

const Cat = require("./models/cat");

mongoose.connect(process.env.DATABASE_URL);

app.get("/", (request, response) => {
  response.json("You are on the root route of my cat app.");
});

// localhost:8080/cats?_id=12345
// request.query = { id: 12345 }
app.get("/cats", async (request, response) => {
  const cats = await Cat.find(request.query); // returns an array of matching results
  response.json(cats);
});

// additional get endpoint, specifically for getting a cat by their id
app.get("/cats/:id", async (request, response) => {
  const cats = await Cat.findById(request.params.id); // returns JUST the result (no array)
  response.json(cats);
});

// post - CREATE
app.post("/cats", async (request, response) => {
  const newCat = await Cat.create(request.body);
  response.json(newCat);
});

// delete - DELETE
// localhost:8080/cats/12345
// request.params = { id: 12345 }
app.delete("/cats/:id", async (request, response) => {
  const deletedCat = await Cat.findByIdAndDelete(request.params.id);
  response.json(deletedCat);
});

// put - UPDATE
app.put("/cats/:id", async (request, response) => {
  const id = request.params.id;
  const update = request.body;
  const updatedCat = await Cat.findByIdAndUpdate(id, update);
  response.json(updatedCat);
});

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
