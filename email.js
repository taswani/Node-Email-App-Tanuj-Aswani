//Consists of scripts for the basic implementation of the blast email option.

const nodemailer = require("nodemailer");
const sendList = ["tanuj.aswani@gmail.com", "tanuj.aswani618@gmail.com"];
const { account } = require("./authentication.js");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: account.user,
    pass: account.pass
  }
});

const mailOptions = {
  from: "tanuj.aswani@hotmail.com",
  to: sendList,
  subject: "Testing 123",
  text:
    "This is a blast email with a generic message to send out to two different people.",
  html: '<img src="cid:uniqueImage"/>',
  attachments: [
    {
      filename: "scenery.jpeg",
      path: "./scenery.jpeg",
      cid: "uniqueID"
    }
  ]
};

transporter.sendMail(mailOptions, function(error) {
  return error
    ? console.log(error)
    : console.log("Messages sent successfully!");
});
