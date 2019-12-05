const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const review_schema = new Schema({
  by_id: { type: Schema.Types.ObjectId, require: true },
  to_id: { type: Schema.Types.ObjectId, require: true },
  review: { type: String, require: true }
});

let Review = mongoose.model("Review", review_schema);

// export default Review;
module.exports = Review;
