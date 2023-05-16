const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = 8080;
const mongoose = require("mongoose");
const app = express();
app.use(cors());
mongoose.connect(process.env.DATABASE_URL);

const Book = require("./models/book");

app.get("/", (request, response) => {
  response.json("Root route");
});

app.get("/books", async (request, response) => {
  const books = await Book.find(request.query);
  response.json(books);
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
