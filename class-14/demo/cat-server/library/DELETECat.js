const Cat = require("../models/cat");

// delete - DELETE
// localhost:8080/cats/12345
// request.params = { id: 12345 }
async function DELETECat(request, response) {
  const deletedCat = await Cat.findByIdAndDelete(request.params.id);
  response.json(deletedCat);
}

module.exports = DELETECat;
