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
  Specialist.find().then(specialist => {
    res.send(specialist);
  });
});

route.post("/add", (req, res) => {
  let specs = new Specialist({
    name: req.body.name
  });
  specs
    .save()
    .then(specs => {
      res.send(specs);
    })
    .catch(err => {
      res.send(err);
    });
});

route.post("/remove", (req, res) => {
  console.log(req.body);
  Specialist.deleteOne({ name: req.body.name })
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err);
    });
});

route.post("/edit", (req, res) => {
  Specialist.update(
    { _id: req.body.id },
    {
      $set: {
        name: req.body.name
      }
    }
  )
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = route;
