const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  Species: { type: String, required: true },
  Age: { type: String, required: true },
  Planet: { type: String, required: true },
  Profession:  { type: String, required: true },
  Status: { type: String, required: true },
  Firstappearance:  { type: String, required: true },
  Voicedby:  { type: String, required: true },
  image:  { type: String, required: true },
  Name:  { type: String, required: true },
});

module.exports = new mongoose.model("Character", characterSchema);