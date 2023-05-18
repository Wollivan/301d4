const Cat = require("../models/cat");

async function POSTCat(request, response) {
  const newCat = await Cat.create(request.body);
  response.json(newCat);
}
module.exports = POSTCat;
