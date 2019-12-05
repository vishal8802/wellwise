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

route.get("/user", (req, res) => {
  User.find().then(user => {
    res.send(user);
  });
});

route.get("/user-d", (req, res) => {
  User.aggregate([
    {
      $lookup: {
        from: "doctors",
        localField: "_id",
        foreignField: "user_id",
        as: "doctor"
      }
    },
    {
      $lookup: {
        from: "patients",
        localField: "_id",
        foreignField: "user_id",
        as: "patient"
      }
    },
    {
      $lookup: {
        from: "admins",
        localField: "_id",
        foreignField: "user_id",
        as: "admin"
      }
    }
  ]).then(data => {
    res.send(data);
  });
});

route.get("/doctor", (req, res) => {
  Doctor.find({ verified: false }).then(doctor_non_verified => {
    Doctor.find({ verified: true }).then(doctor_verified => {
      res.send({
        doctor_non_verified,
        doctor_verified
      });
    });
  });
});

route.get("/patient", (req, res) => {
  Patient.find().then(patient => {
    res.send({ patient });
  });
});

route.get("/ecard", (req, res) => {
  Ecard.find().then(ecard => {
    res.send({ ecard });
  });
});

route.get("/review", (req, res) => {
  // Review.find().then(review => {
  //   res.send({ review });
  // });

  Review.aggregate([
    {
      $lookup: {
        from: "User",
        localField: "by_id",
        foreignField: "_id",
        as: "review_by"
      }
    },
    {
      $lookup: {
        from: "User",
        localField: "to_id",
        foreignField: "_id",
        as: "review_to"
      }
    }
  ]).then(review => {
    console.log(review);
    res.send({ review });
  });
});

route.get("/products", (req, res) => {
  Product.find().then(product => {
    res.send({ product });
  });
});

module.exports = route;
