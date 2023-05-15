function question(request, response) {
  const { funnyObject, funnySituation } = request.query;
  const q = `Is ${funnyObject} always the same when ${funnySituation} happens?`;
  response.json(q);
}

module.exports = question;
