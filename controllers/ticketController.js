import mongoose from "mongoose";
import Tickets from "../models/Tickets";
import User from "../models/User";
import { isFieldPresentInRequest } from "../utils/helpers";

export const ticketBooking = async (req, res) => {
  try {
    const reqBody = req.body;
    let requiredFields = [
      "ticket",
      "destination",
      "est_time",
      "distance",
      "total_price",
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

    let { ticket, destination, est_time, distance, total_price } = reqBody;

    const userId = req.user.id;
    const user_id = new mongoose.Types.ObjectId(userId);

    const user = await User.findOne({ _id: user_id });
    if (!user) {
      return res
        .status(200)
        .json({ status: false, message: "User does not exist" });
    }
    const bookTicket = new Tickets({
      user_id: user._id,
      ticket,
      destination,
      est_time,
      distance,
      total_price,
    });

    const newTicket = await bookTicket.save();

    if (!newTicket) {
      return res.status(200).json({
        status: false,
        message:
          "There was a problem while booking your ticket, Please try again later!",
      });
    }

    return res.status(200).json({
      status: true,
      message: `Congratulations on booking your ticket to the ${newTicket.destination}!`,
    });
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      status: false,
      message:
        "Unexpected error occurred while booking your ticket, Please try again later!",
    });
  }
};
