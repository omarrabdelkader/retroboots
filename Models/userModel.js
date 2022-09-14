const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please add a name!"],
    min: 6,
  },
  email: {
    type: String,
    required: [true, "Please add an email!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please add a password!"],
  },
});

module.exports = mongoose.model("User", userSchema);
