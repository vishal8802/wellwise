const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const asked_for_schema = new Schema({
  name: { type: String },
  gender: { type: String },
  age: { type: String },
  height: { type: String },
  weight: { type: String }
});

const qna_schema = new Schema({
  asked_by: { type: String },
  asked_for: [asked_for_schema],
  question: { type: String, required: true },
  answered: { type: Boolean, default: false },
  answered_by: { type: String },
  answer: { type: String },
  doctor_type: { type: String }
});

let qna = mongoose.model("Qna", qna_schema);

module.exports = qna;
