const express = require("express");
const bcrypt = require("bcrypt");

const Patient = require("../models/patient_model");
const User = require("../models/user_model");
const Doctor = require("../models/doctor_model");
const Hospital = require("../models/hospital_model");
const Admin = require("../models/admin");
const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

const JWT_SECRET = `bdnorprrrewhgin67johncena5448miasdvsdvkhalifa54s47dvdwasdfwe`;

//signup

route.post("/", (req, res) => {
  let hash = bcrypt.hashSync(req.body.password, 10);
  let user = new User({
    role: req.body.role,
    phone: req.body.phone,
    password: hash
  });

  //user type : patient

  if (req.body.role == "patient") {
    console.log(`signing up as patient`);
    let patient = new Patient({
      user_id: user.id,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      identity: {
        id_type: req.body.id_type,
        id_number: req.body.id_number
      },
      gender: req.body.gender,
      dob: req.body.dob
    });
    patient.save(err => {
      if (err) res.send({ err });
      else {
        user.save(err => {
          if (err) res.send({ err });
          else {
            res.send({ patient, user });
          }
        });
      }
    });
  }

  //user type : dcotor

  if (req.body.role == "doctor") {
    console.log(`signing up as doctor`);
    console.log(req.body.verified);
    let doctor = new Doctor({
      title: req.body.title,
      name: req.body.name,
      user_id: user.id,
      reg_no: req.body.reg_no,
      email: req.body.email,
      phone: req.body.phone,
      specialization: req.body.specialization,
      gender: req.body.gender,
      address: {
        line1: req.body.address_line1,
        city: req.body.address_city,
        state: req.body.address_state,
        zipcode: req.body.address_zipcode
      },
      time_slot: req.body.time_slot,
      associated_with_hospital: req.body.hospital,
      experience: req.body.experience,
      charges: req.body.charges,
      verified: req.body.verified
    });
    doctor.save(err => {
      if (err) {
        res.send({ err });
      } else {
        user.save(err => {
          if (err) res.send({ err });
          else {
            res.send({ doctor, user });
          }
        });
      }
    });
  }

  if (req.body.role == "hospital") {
    console.log(`signing up as hospital`);
    let hospital = new Hospital({
      name: req.body.name,
      user_id: user.id,
      phone: req.body.phone,
      email: req.body.email,
      website: req.body.website,
      address: {
        line1: req.body.line1,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode
      },
      doctors: req.body.doctors,
      specialization: req.body.specialization
    });
    hospital.save(err => {
      if (err) res.send({ err });
      else {
        user.save(err => {
          if (err) res.send({ err });
          else {
            res.send({ hospital, user });
          }
        });
      }
    });
  }
});

//signup by admin

route.post("/adduser-by-admin", (req, res) => {
  let hash = bcrypt.hashSync(req.body.password, 10);
  let user = new User({
    role: req.body.role,
    phone: req.body.phone,
    password: hash
  });
  if (req.body.role == "admin") {
    let admin = new Admin({
      user_id: user._id,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
    });
    admin.save(err => {
      if (err) res.send({ err });
      else {
        user.save(err => {
          if (err) res.send({ err });
          else {
            res.send({ admin, user });
          }
        });
      }
    });
  }
  if (req.body.role == "patient") {
    let patient = new Patient({
      user_id: user.id,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
    });
    patient.save(err => {
      if (err) res.send({ err });
      else {
        user.save(err => {
          if (err) res.send({ err });
          else {
            res.send({ patient, user });
          }
        });
      }
    });
  }
});

module.exports = route;
