const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const product_schema = new Schema({
  brand: { type: String },
  product_name: { type: String },
  product_description: { type: String },
  mrp: { type: String },
  price: { type: String },
  bought: { type: String }
});

product_schema.index({ "$**": "text" });

let Product = mongoose.model("Product", product_schema);

module.exports = Product;
