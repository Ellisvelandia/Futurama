const mongoose = require("mongoose");

const sypnosiSchema = new mongoose.Schema({
  title: { type: String, required: true },
  poster: { type: String, required: true },
  desc: { type: String, required: true },
  firstEpisodeDate: { type: String, required: true },
});

module.exports = new mongoose.model("Sypnosis", sypnosiSchema);