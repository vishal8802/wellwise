const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ecard_schema = new Schema({
  name: { type: String, required: !true },
  age: { type: String, required: !true },
  sex: { type: String, required: !true },
  weight: { type: String, required: !true },
  height: { type: String, required: !true },
  bmi: { type: String, required: !true },
  bp: { type: String, required: !true },
  body_temp: { type: String, required: !true },
  complaints: { type: String, required: !true },
  lab_result: { type: String, required: !true },
  diagnosis: { type: String, required: !true },
  prescription: { type: String, required: !true },
  doctor_name: { type: String, required: !true },
  doctor_id: { type: Schema.Types.ObjectId, required: !true },
  patient_id: { type: Schema.Types.ObjectId },
  facility_name: { type: String, required: !true }
});

let Ecard = mongoose.model("Ecard", ecard_schema);

// export default Ecard;
module.exports = Ecard;
//
