const Cat = require("../models/cat");

async function PUTCat(request, response) {
  const id = request.params.id;
  const update = request.body;
  const updatedCat = await Cat.findByIdAndUpdate(id, update);
  response.json(updatedCat);
}

module.exports = PUTCat;
