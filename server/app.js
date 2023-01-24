const express = require("express");
const app = express();
const cors = require("cors");
const futuramaRoute = require("./routes/futuramaRoutes");
require('dotenv').config();

const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

app.use(cors());
app.use(express.json());
app.use("/api/v1", futuramaRoute);


app.listen(() => {
  console.log("SERVER STARTED SUCCESFULLY");
});