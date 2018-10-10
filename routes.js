const express = require("express"); //Need to require express for routing.
const app = express(); //Putting express into an app variable to write less code.
const router = express.Router(); //Setting up a router.
const nodemailer = require("nodemailer");
const { account } = require("./authentication.js");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: account.user,
    pass: account.pass
  }
});

router.get("/", function(req, res, next) {
  res.render("main");
});

router.get("/sent", function(req, res, next) {
  res.render("sent");
});

router.post("/email", function(req, res, next) {
  //app functionality here
  const emails = req.body.to;
  const emailSplit = emails.split(", ");
  let mailOptions = {
    from: account.user, //Need to allow for user input, but how?
    to: emailSplit,
    subject: req.body.subject,
    text: req.body.text
  };
  transporter.sendMail(mailOptions, function(error) {
    return error
      ? console.log(error)
      : console.log("Messages sent successfully!");
  });
  console.log(emailSplit);
  res.render("sent");
});

module.exports = router;
