const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = {
  login: require("./routes/login"),
  retrieve: require("./routes/retrieve"),
  signup: require("./routes/signup"),
  review: require("./routes/review"),
  query: require("./routes/query/search"),
  qna_ask: require("./routes/qna/ask"),
  ecard: require("./routes/ecard/ecard"),
  appointment: require("./routes/appointment/appointment"),
  blogs: require("./routes/blogs"),
  hospital: require("./routes/hospital"),
  transaction: require("./routes/transactions"),
  specialization: require("./routes/specialization"),
  users: require("./routes/users"),
  doctors: require("./routes/doctor")
};

const DB_URL = `mongodb://localhost:27017/medical_tourism_DB`;

mongoose.connect(DB_URL, { useNewUrlParser: false });
let db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/list", routes.retrieve); //retrieving all data

//sign up
app.use("/signup", routes.signup);

//login
app.use("/login", routes.login);

//adding review to doctor
app.use("/review", routes.review);

//getting doctor, hospital list based on keyword
app.use("/query", routes.query);

//asking and answering question
app.use("/ques", routes.qna_ask);

//ecard grneration and retrieval
app.use("/ecard", routes.ecard);

//appointment
app.use("/appointment", routes.appointment);

//blogs
app.use("/blog", routes.blogs);

//hospital route
app.use("/hospital", routes.hospital);

//transactions
app.use("/transactions", routes.transaction);

//doctor's specialization adding or removing or retrieving
app.use("/specs", routes.specialization);

app.use("/users", routes.users);

app.use("/doc", routes.doctors);

// const Specialist = require("./models/specialist_model");
// app.post("/addspc", (req, res) => {
//   console.log("Adding Specs");
//   let arr = req.body.data.split(",");
//   arr.forEach(name => {
//     let specialist = new Specialist({
//       name
//     });
//     specialist.save().then(x => {
//       console.log(x);
//       res.send({ x });
//     });
//   });
// });

app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT);
});
