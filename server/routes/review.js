const express = require("express");

const route = express.Router();

const Review = require("../models/review_model");
const User = require("../models/user_model");

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

route.post("/add", (req, res) => {
  let by_user, to_user;

  User.findOne({ phone: req.body.by_phone }).then(user_by => {
    by_user = user_by;
    User.findOne({ phone: req.body.to_phone }).then(user_to => {
      to_user = user_to;
      let review = new Review({
        by_id: by_user._id,
        to_id: to_user._id,
        review: req.body.review
      });
      review.save(err => {
        if (err) res.send({ err });
        else res.send({ by_user, to_user, review });
      });
    });
  });
});

module.exports = route;
