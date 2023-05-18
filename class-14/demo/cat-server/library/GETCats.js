const Cat = require("../models/cat");

// localhost:8080/cats?_id=12345
// request.query = { id: 12345 }
async function GETCats(request, response) {
  const cats = await Cat.find(request.query); // returns an array of matching results
  response.json(cats);
}

module.exports = GETCats;
