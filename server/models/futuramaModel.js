const mongoose = require("mongoose");

const futuramaSchema = new mongoose.Schema({
  number: { type: String, required: true },
  title: { type: String, required: true },
  writers: { type: String, required: true },
  originalAirDate: { type: String, required: true },
  desc: { type: String, required: true },
  image: { type: String, required: true },
  video: { type: String, required: true },
});

module.exports = new mongoose.model("futurama", futuramaSchema);