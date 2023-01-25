const express = require("express");
const app = express();
const cors = require("cors");
const futuramaRoute = require("./routes/futuramaRoutes");
const characterRoute = require("./routes/characterRoutes");
require('dotenv').config();
require("./connection/conn");

const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

app.use(cors());  
app.use(express.json());
app.use("/api/v1", futuramaRoute);
app.use("/api/v1", characterRoute);


app.listen(8080, () => {
  console.log("SERVER STARTED SUCCESFULLY");
});