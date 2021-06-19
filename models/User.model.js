const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const userModel = new Schema({
  name: String,
  age: Number,
});

module.exports = mongoose.model("User", userModel);
