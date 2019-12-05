const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//appointment Schema

const appointment_schema = new Schema({
  doctor_id: { type: Schema.Types.ObjectId, required: !true },
  name: { type: String, required: !true },
  email: { type: String, required: !true },
  phone: { type: String, required: !true },
  patient_id: { type: Schema.Types.ObjectId, required: !true },
  time: { type: String, required: !true },
  day: { type: String },
  status: { type: String, default: "Tentatively" },
  appointment_id: { type: String },
  reason: { type: String }
});

let Appointment = mongoose.model("Appointmnet", appointment_schema);

module.exports = Appointment;
