const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Hospital sub Schemas

const address_schema = new Schema({
  line1: { type: String },
  city: { type: String },
  state: { type: String },
  zipcode: { type: String }
});

//Hospital Schema

const hospital_schema = new Schema({
  name: { type: String, required: true },
  user_id: { type: Schema.Types.ObjectId, required: true },
  phone: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  website: { type: String },
  address: [address_schema],
  doctors: { type: Array },
  specialization: { type: Array }
});
hospital_schema.index({ "$**": "text" });

let Hospital = mongoose.model("Hospital", hospital_schema);

// export default Hospital;
module.exports = Hospital;
