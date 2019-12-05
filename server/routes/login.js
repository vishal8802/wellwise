const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user_model");

const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

const JWT_SECRET = `bdnorprrrewhgin67johncena5448miasdvsdvkhalifa54s47dvdwasdfwe`;

route.post("/", (req, res) => {
  User.findOne({ phone: req.body.phone }, (err, user) => {
    if (err || user == null) {
      res.send({
        error: err,
        message: `user not exist`
      });
    } else {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        let token = jwt.sign(user.toJSON(), JWT_SECRET);

        res.send({
          user,
          token
        });
      } else {
        res.send({
          message: `incorrect attempt`
        });
      }
    }
  });
});

module.exports = route;
