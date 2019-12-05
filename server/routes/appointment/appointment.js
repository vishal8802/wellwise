const express = require("express");

const route = express.Router();

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

const sendMail = require("../mailer/mailer");

route.get("/get", (req, res) => {
  Appointment.aggregate([
    {
      $lookup: {
        from: "doctors",
        localField: "doctor_id",
        foreignField: "_id",
        as: "doctor"
      }
    },

    {
      $lookup: {
        from: "patients",
        localField: "patient_id",
        foreignField: "_id",
        as: "patient"
      }
    }
  ])
    .then(appointments => {
      res.send(appointments);
    })
    .catch(err => {
      res.send(err);
    });
});

route.post("/book", (req, res) => {
  Appointment.countDocuments().then(c => {
    let appointment = new Appointment({
      doctor_id: req.body.doctor_id,
      patient_id: req.body.patient_id,
      email: req.body.email,
      phone: req.body.phone,
      name: req.body.name,
      time: req.body.time,
      day: req.body.day,
      appointment_id: 1000 + c
    });
    let subject = `lol`,
      message = "ha ha";
    appointment
      .save()
      .then(appointment => {
        sendMail(appointment.email, subject, message);

        res.send({ appointment });
      })
      .catch(err => {
        res.send({ err });
      });
  });
});

route.post("/confirm", (req, res) => {
  Appointment.update(
    { _id: req.body.id },
    {
      $set: {
        status: "confirmed"
      }
    }
  )
    .then(result => {
      Appointment.findOne({ _id: req.body.id })
        .then(appointment => {
          let message = `confirmed ${appointment.appointment_id}`;
          let subject = `ha ha lol`;
          console.log(appointment);
          sendMail(appointment.email, subject, message);
        })
        .catch(err => {
          res.send({ err });
        });
      res.send({ result });
    })
    .catch(err => {
      res.send({ err });
    });
});

route.post("/decline", (req, res) => {
  Appointment.update(
    { _id: req.body.id },
    {
      $set: {
        status: "rejected",
        reason: req.body.reason
      }
    }
  )
    .then(result => {
      Appointment.findOne({ _id: req.body.id })
        .then(appointment => {
          let message = `canceled ${appointment.appointment_id}`;
          let subject = `ha ha lol`;
          sendMail(appointment.email, subject, message);
        })
        .catch(err => {
          res.send({ err });
        });
      res.send({ result });
    })
    .catch(err => {
      res.send({ err });
    });
});

module.exports = route;
