const express = require("express");

const Patient = require("../../models/patient_model");
const User = require("../../models/user_model");
const Doctor = require("../../models/doctor_model");
const Hospital = require("../../models/hospital_model");
const Appointment = require("../../models/appointment_model");
const Ecard = require("../../models/ecard_model");
const Review = require("../../models/review_model");
const Transaction = require("../../models/transaction_model");

const route = express.Router();

route.post("/", (req, res) => {
  let category = req.body.specialist;
  Doctor.find({ $text: { $search: category } }).then(doctor => {
    Hospital.find({ $text: { $search: category } }).then(hospital => {
      res.send({ doctor, hospital });
    });
  });
});

route.post("/nearme", (req, res) => {
  let pincode = req.body.pincode;
  let city = req.body.city;
  Doctor.find({ $text: { $search: city } }).then(doctor => {
    Hospital.find({ $text: { $search: city } }).then(hospital => {
      res.send({ doctor, hospital });
    });
  });
});
module.exports = route;
