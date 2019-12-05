const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Doctor sub Schemas

const address_schema = new Schema({
  line1: { type: String },
  city: { type: String },
  state: { type: String },
  zipcode: { type: String }
});

// const time_slots_schema = new Schema({
//   day: { type: Array }
// });

//Doctor Schema

const doctor_schema = new Schema({
  title: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  user_id: { type: Schema.Types.ObjectId, required: true },
  reg_no: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: false },
  specialization: { type: Array, index: true },
  gender: { type: String, required: true },
  address: [address_schema],
  time_slot: { type: Array },
  charges: { type: String, required: true },
  associated_with_hospital: { type: Array },
  experience: { type: String },
  verified: { type: Boolean },
  description: { type: String }
});
doctor_schema.index({ "$**": "text" });

let Doctor = mongoose.model("Doctor", doctor_schema);

module.exports = Doctor;
