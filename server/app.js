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

app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'success from Futurama!',
  });
});

const startServer = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL).then(() => console.log("mongoDB connected"));
    app.listen(8080, () => console.log('Server has started on port http://localhost:8080'))
  } catch (error) {
    console.log(error);
  }
}

startServer();
