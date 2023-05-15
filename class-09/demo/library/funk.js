function funk(request, response) {
  const { num1, num2 } = request.query;
  const num3 = num1 * num2;
  const arr = [];
  for (let i = 0; i < num3; i++) {
    arr.push("funk");
  }
  response.json(arr);
}

module.exports = funk;
