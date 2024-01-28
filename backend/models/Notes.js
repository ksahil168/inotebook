const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");

const UserSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    deafult: "General",
  },
  Date: {
    type: Date,
    required: Date.now,
  },
});

module.exports = mongoose.model("user", UserSchema);
