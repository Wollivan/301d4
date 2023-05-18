const Cat = require("../models/cat");

// additional get endpoint, specifically for getting a cat by their id
async function GETCat(request, response) {
  const cats = await Cat.findById(request.params.id); // returns JUST the result (no array)
  response.json(cats);
}

module.exports = GETCat;
