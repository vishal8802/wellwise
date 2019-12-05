const express = require("express");
const bcrypt = require("bcrypt");

const Patient = require("../models/patient_model");
const User = require("../models/user_model");
const Doctor = require("../models/doctor_model");
const Hospital = require("../models/hospital_model");
const Appointment = require("../models/appointment_model");
const Ecard = require("../models/ecard_model");
const Review = require("../models/review_model");
const Transaction = require("../models/transaction_model");
const Specialist = require("../models/specialist_model");
const Qna = require("../models/qna_model");
const Product = require("../models/product_model");
const Category = require("../models/blogs/blog_category_model");
const Blog = require("../models/blogs/blog_model");

const route = express.Router();

route.get("/user", (req, res) => {
  User.find().then(user => {
    res.send(user);
  });
});

route.post("/user-id", (req, res) => {
  User.findOne({ _id: req.body.id })
    .then(user => {
      Doctor.findOne({ user_id: user._id }).then(doctor => {
        res.send({ user, doctor });
      });
    })
    .catch(err => {
      res.send(err);
    })
    .catch(err => {
      res.send(err);
    });
});

route.post("/change-pwd", (req, res) => {
  let phone = req.body.phone;
  let oldpass = req.body.oldpass;
  let newpass = req.body.newpass;
  User.findOne({ phone })
    .then(user => {
      if (user == null) res.send({ msg: "user not exist" });
      else {
        if (bcrypt.compareSync(oldpass, user.password)) {
          let hash = bcrypt.hashSync(newpass, 10);
          User.update({ phone }, { $set: { password: hash } }).then(result => {
            res.send(result);
          });
        } else {
          res.send({ msg: "incorrect password" });
        }
      }
    })
    .catch(err => {
      res.send(err);
    });
});
module.exports = route;
