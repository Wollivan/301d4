const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
const bp = require("body-parser");
app.use(bp.json());

const GETCats = require("./library/GETCats");
const GETCat = require("./library/GETCat");
const POSTCat = require("./library/POSTCat");
const DELETECat = require("./library/DELETECat");
const PUTCat = require("./library/PUTCat");

mongoose.connect(process.env.DATABASE_URL);

app.get("/", (request, response) => response.json("You are on the root route of my cat app."));
app.get("/cats", GETCats);
app.get("/cats/:id", GETCat);
app.post("/cats", POSTCat);
app.delete("/cats/:id", DELETECat);
app.put("/cats/:id", PUTCat);

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
