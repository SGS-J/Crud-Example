const mongoose = require("mongoose");

const URI = "mongodb://localhost:27017/crud-test";
module.exports = mongoose.connect(
  URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("DB is connected");
  }
);
