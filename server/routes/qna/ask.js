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

route.post("/ask", (req, res) => {
  let qna = new Qna({
    asked_by: req.body.phone,
    asked_for: {
      name: req.body.name,
      gender: req.body.gender,
      age: req.body.age,
      height: req.body.height,
      weight: req.body.weight
    },
    question: req.body.question
  });

  qna
    .save()
    .then(ques => {
      res.send({ ques });
    })
    .catch(err => {
      res.send(err);
    });
});

route.post("/resolve", (req, res) => {
  console.log(req.body);
  Qna.update(
    { _id: req.body.ques_id },
    {
      $set: {
        answer: req.body.answer,
        answered_by: req.body.doctor_id,
        answered: true
      }
    }
  )
    .then(question => {
      res.send({ question });
    })
    .catch(err => {
      res.send({ err });
    });
});

route.get("/qna", (req, res) => {
  Qna.find({ answered: false })
    .then(unresolved_qna => {
      Qna.find({ answered: true }).then(resolved_qna => {
        res.send({ unresolved_qna, resolved_qna });
      });
    })
    .catch(err => {
      message = `An error ocurred`;
      res.send({ err, message });
    });
});

route.post("/delete", (req, res) => {
  Qna.remove({ _id: req.body.id }).then(result => {
    res.send(result);
  });
});

module.exports = route;
