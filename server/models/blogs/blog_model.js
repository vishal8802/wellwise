const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blog_schema = new Schema({
  category_id: { type: Schema.Types.ObjectId },
  topic: { type: String },
  heading: { type: Array },
  content: { type: Array }
});

let Blog = mongoose.model("blog", blog_schema);

module.exports = Blog;
