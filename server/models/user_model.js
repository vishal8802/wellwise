const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user_schema = new Schema({
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true }
});

let User = mongoose.model("User", user_schema);

module.exports = User;
