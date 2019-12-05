const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

function sendMail(email, subject, message) {
  const transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: "jon2088snow@gmail.com",
        pass: "theaccounthasnopassword"
      }
    })
  );

  const mailOptions = {
    from: "jon2088snow@gmail.com",
    to: email,
    subject: subject,
    text: message
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = sendMail;
