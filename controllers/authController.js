import express from "express";
import bcrypt from "bcryptjs";
import { isFieldPresentInRequest } from "../utils/helpers";
import jsonwebtoken from "jsonwebtoken";
import User from "../models/User";
import mongoose from "mongoose";

export const userLogin = async (req, res) => {
  try {
    const reqBody = req.body;
    let requiredFields = ["email", "password"];

    let invalidFields = [];

    // Condition to check if required fields are present in the request
    // TODO: Make it more dynamic by iterating through a list of objects instead where we can specify if a field is optional, requires regex validation, check character limit count etc.
    requiredFields.forEach((field) => {
      if (!isFieldPresentInRequest(reqBody, field)) {
        invalidFields.push(field);
      }
    });

    if (invalidFields.length > 0) {
      return res.status(400).json({
        message: `Error - Missing fields: ${invalidFields.join(", ")}`,
      });
    }

    let { email, password } = reqBody;

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }
    if (user) {
      const isPasswordCorrect = bcrypt.compareSync(password, user.password);
      if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Incorrect Password" });
      }

      const token = jsonwebtoken.sign(
        { id: user._id },
        process.env.SECRET_KEY,
        {
          expiresIn: 3600,
        }
      );

      const userLog = await User.updateOne(
        { _id: user.id },
        {
          $set: {
            is_logged_in: true,
          },
        }
      );

      if (userLog) {
        return res.status(200).json({
          token,
          user: {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
          },
          message: "Logged in Successfully!",
        });
      }
    }
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ message: "Something went wrong, Please try again later!" });
  }
};

export const userLogout = async (req, res) => {
  try {
    const userId = req.user.id;
    const user_id = new mongoose.Types.ObjectId(userId);
    const user = User.findOne({ user_id });
    if (!user) {
      return res.status(404).json({ message: "User Not Found!" });
    }
    const updateUser = await User.updateOne(
      { _id: user_id },
      {
        $set: {
          is_logged_in: false,
        },
      }
    );
    if (!updateUser) {
      return res.status(500).json({ message: "Error while logging out!" });
    }
    return res.status(201).json({ message: "Logged out Successfully!" });
  } catch (e) {
    console.log(e);
  }
};
