const express = require("express");

const Patient = require("../../models/patient_model");
const User = require("../../models/user_model");
const Doctor = require("../../models/doctor_model");
const Hospital = require("../../models/hospital_model");
const Appointment = require("../../models/appointment_model");
const Ecard = require("../../models/ecard_model");
const Review = require("../../models/review_model");
const Transaction = require("../../models/transaction_model");
const Specialist = require("../../models/specialist_model");
const Qna = require("../../models/qna_model");

const route = express.Router();

route.use("/generate", (req, res) => {
  //height in cm , weight in kg
  let bmi = req.body.weight / ((req.body.height * req.body.height) / 10000);
  let ecard = new Ecard({
    name: req.body.name,
    age: req.body.age,
    sex: req.body.sex,
    weight: req.body.weight,
    height: req.body.height,
    bmi: bmi,
    bp: req.body.bp,
    body_temp: req.body.body_temp,
    complaints: req.body.complaints,
    lab_result: req.body.lab_result,
    diagnosis: req.body.diagnosis,
    prescription: req.body.prescription,
    doctor_name: req.body.doctor_name,
    facility_name: req.body.facility_name,
    doctor_id: req.body.doctor_id,
    patient_id: req.body.patient_id
  });
  ecard.save().then(card => {
    console.log(card.id);
    console.log(req.body.patient_id);
    Patient.update(
      { _id: req.body.patient_id },
      {
        $push: {
          e_card: card._id
        }
      }
    ).then(result => {
      res.send({ card, result });
    });
  });
});

route.post("/get", (req, res) => {
  Ecard.find({
    patient_id: req.body.patient_id
  }).then(card => {
    res.send({ card });
  });
});

module.exports = route;
