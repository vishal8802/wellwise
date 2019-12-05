const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const specialist_schema = new Schema({
  name: { type: String, unique: true }
});

let Specialist = mongoose.model("Specialist", specialist_schema);

module.exports = Specialist;
