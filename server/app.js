const express = require("express");
const app = express();
const cors = require("cors");
const futuramaRoute = require("./routes/futuramaRoutes.js");
require('dotenv').config();

require("./connection/conn")
app.use(cors());
app.use(express.json());
app.use("/api/v1", futuramaRoute);

app.listen(1001, () => {
  console.log("SERVER STARTED SUCCESFULLY");
});