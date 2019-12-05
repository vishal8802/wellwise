const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Admin_schema = new Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String, unique: true },
  user_id: { type: Schema.Types.ObjectId }
});

let Admin = mongoose.model("admin", Admin_schema);
module.exports = Admin;
