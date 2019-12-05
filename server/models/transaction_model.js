const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transaction_schema = new Schema({
  transaction_id: { type: String, required: true },
  amount: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  date: { type: String, required: true },
  payment_mode: { type: String, required: true }
});
let Transaction = mongoose.model("Transaction", transaction_schema);
// export default Transaction;
module.exports = Transaction;
