import express from "express";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
const router = express.Router();

export function isFieldPresentInRequest(reqBody, fieldName) {
  try {
    return (
      reqBody.hasOwnProperty(fieldName) &&
      reqBody[fieldName] !== null &&
      reqBody[fieldName] !== undefined &&
      reqBody[fieldName] !== ""
    );
  } catch (e) {
    console.log(`Error while check field name: ${e}`);
    return false;
  }
}

export const sendMail = async (mail) => {
  let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "spacetourism6969@gmail.com",
        pass: "ojagzlcpdvignujo",
      },
    }
  );

  var mailOptions = {
    from: "spacetourism6969@gmail.com",
    to: mail,
    subject: "Congratulations!! Tickets Booked",
    text: "Yout Ticket is Booked",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("email sent" + info.response);
    }
  });
};
