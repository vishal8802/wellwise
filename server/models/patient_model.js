const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Patient sub Schemas

const patient_id_schema = new Schema({
  id_type: { type: String, required:!true },
  id_number: { type: String, required: !true }
});

const address_schema = new Schema({
  line1: { type: String },
  city: { type: String },
  state: { type: String },
  zipcode: { type: String }
});

const insurance_schema = new Schema({
  company: { type: String },
  number: { type: String },
  expiry: { type: String }
});

const medical_info_schema = new Schema({
  height: { type: String },
  weight: { type: String },
  blood: { type: String },
  smoking: { type: String },
  alcohol: { type: String },
  allergies: { type: Array },
  disease: { type: Array }
});

//Patient Schemas

const patinet_schema = new Schema({
  user_id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  identity: [patient_id_schema],
  gender: { type: String, required: !true },
  dob: { type: String, required: !true },
  address: [address_schema],
  insurance: [insurance_schema],
  medical_info: [medical_info_schema],
  e_card: { type: Array }
});

let Patient = mongoose.model("Patient", patinet_schema);

// export default Patient;
module.exports = Patient;
