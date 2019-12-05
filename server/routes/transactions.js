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

route.get("/get", (req, res) => {
  Transaction.find().then(transaction => {
    res.send(transaction);
  });
});

route.post("/create", (req, res) => {
  let transaction = new Transaction({
    transaction_id: "from gateway",
    amount: req.body.amount,
    from: req.body.from,
    to: req.body.to,
    date: req.body.date,
    payment_mode: req.body.mode
  });
  transaction
    .save()
    .then(() => {
      res.send({
        status: "success"
      });
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = route;
