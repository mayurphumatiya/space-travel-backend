import mongoose from "mongoose";
import Tickets from "../models/Tickets";
import User from "../models/User";
import { isFieldPresentInRequest, sendMail } from "../utils/helpers";
import qr from "qrcode"

export const ticketBooking = async (req, res) => {
  try {
    const reqBody = req.body;
    let requiredFields = [
      "full_name",
      "destination",
      "tickets",
      "price",
      "total_price",
      "travel",
      "distance",
      "image",
      "email",
      "paymentMethod",
    ];
    let invalidFields = [];

    // Condition to check if required fields are present in the request
    // TODO: Make it more dynamic by iterating through a list of objects instead where we can specify if a field is optional, requires regex validation, check character limit count etc.
    requiredFields.forEach((field) => {
      if (!isFieldPresentInRequest(reqBody, field)) {
        invalidFields.push(field);
      }
    });

    if (invalidFields.length > 0) {
      return res.status(200).json({
        status: false,
        message: `Error - Missing fields: ${invalidFields.join(", ")}`,
      });
    }

    let {
      user_id,
      full_name,
      destination,
      tickets,
      price,
      total_price,
      travel,
      distance,
      image,
      email,
      paymentMethod,
      cardNo,
      upiId,
    } = reqBody;

    const userId = req.user.id;
    const userid = new mongoose.Types.ObjectId(userId);

    const user = await User.findOne({ _id: userid });
    if (!user) {
      return res
        .status(200)
        .json({ status: false, message: "User does not exist" });
    }
    const bookTicket = new Tickets({
      user_id: user._id,
      full_name,
      destination,
      tickets,
      price,
      total_price,
      travel,
      distance,
      image,
      email,
      paymentMethod,
      cardNo,
      upiId,
    });

    const newTicket = await bookTicket.save();

    if (!newTicket) {
      return res.status(200).json({
        status: false,
        message:
          "There was a problem while booking your ticket, Please try again later!",
      });
    }

    let data = {
      "id": newTicket._id,
      "Tickets":newTicket.tickets,
      "Name":newTicket.full_name,
      "Price":newTicket.total_price,
      "Destination":newTicket.destination
    }
    let dataJson = JSON.stringify(data);
    qr.toDataURL(dataJson,{type:'terminal'},function(err, code){
      if(err) return console.log(err);
      
      sendMail(newTicket.email, code)

      return res.status(200).json({
        status: true,
        message: `Congratulations! Your tickets are booked🎉`,
      });

    })

  } catch (e) {
    console.log(e);
    return res.status(200).json({
      status: false,
      message:
        "Unexpected error occurred while booking your ticket, Please try again later!",
    });
  }
};
