const express = require("express");

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

route.post("/user-id", (req, res) => {
  console.log(req.body);
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

route.post("change-pwd", (req, res) => {
  let phone = req.body.phone;
  let oldpass = req.body.oldpass;
  let newpass = req.body.newpass;
  User.findOne({ $and: [{ phone }, { password: oldpass }] })
    .then(user => {
      let hash = bcrypt.hashSync(req.body.newpass, 10);
    })
    .catch(err => {
      res.send({ err, msg: "Incorrect Password" });
    });
});

module.exports = route;
