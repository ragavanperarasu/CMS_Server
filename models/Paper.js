const mongoose = require("mongoose");
const cmsConnection = require("../database/cms");

const paperSchema = new mongoose.Schema({
  topic: String,
  description: String,
  videoURL: String,
  status: String,
  email: String,
  filepath: String,
});

const papers = cmsConnection.model("papers", paperSchema);

module.exports = papers;
