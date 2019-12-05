const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blog_category_schema = new Schema({
  name: { type: String }
});

let Blog_category = mongoose.model("Blog_category", blog_category_schema);

module.exports = Blog_category;
