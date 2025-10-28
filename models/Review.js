const mongoose = require("mongoose");
const cmsConnection = require("../database/cms");

const reviewSchema = new mongoose.Schema({
  paper_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "papers",
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  score: { type: Number, required: true },
  comment: { type: String, required: true },
});

const reviews = cmsConnection.model("reviews", reviewSchema);
module.exports = reviews;
