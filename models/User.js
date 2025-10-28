const mongoose = require("mongoose");
const cmsConnection = require("../database/cms");

const userSchema = new mongoose.Schema({
  username: String,
  phoneno: Number,
  usertype: String,
  email: String,
  password: String,
  CreateDate: {
    type: Date,
    default: Date.now
  }
});


const User = cmsConnection.model("users", userSchema);
module.exports = User;
