const express = require("express");
const app = express();
const cors = require("cors");
const futuramaRoute = require("./routes/futuramaRoutes");
const characterRoute = require("./routes/characterRoutes");
const sypnosisRoute = require("./routes/sypnosisRoute");
const creatorRoute = require("./routes/creatorRoutes");
require('dotenv').config();
require("./connection/conn");

const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

app.use(cors());
app.use(express.json());
app.use("/api/v1", futuramaRoute);
app.use("/api/v1", characterRoute);
app.use("/api/v1", sypnosisRoute);
app.use("/api/v1", creatorRoute);


app.listen(8080, () => {
  console.log("SERVER STARTED SUCCESFULLY");
});