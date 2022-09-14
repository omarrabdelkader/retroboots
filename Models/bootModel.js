const mongoose = require("mongoose");

const bootSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
  },
  price: {
    type: String,
    required: [true, "Please add a price"],
  },
  type: {
    type: String,
    required: [true, "Please add a type"],
  },
  image: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model("Boot", bootSchema);
