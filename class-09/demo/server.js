const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = 8080;
const app = express();
app.use(cors());

const funk = require("./library/funk");
const ross = require("./library/ross");
const question = require("./library/question");

app.get("/", function (request, response) {
  response.json("tHIs IS tHe ROoT roUTe");
});

app.get("/funk", funk);
app.get("/ross", ross);
app.get("/question", question);

app.listen(PORT, () => console.log("ApP iS RunnINg on pAWt " + PORT));
