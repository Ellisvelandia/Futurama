const mongoose = require("mongoose");

const creatorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = new mongoose.model("Creator", creatorSchema);