import express from "express"
import bcrypt from "bcryptjs";
import { isFieldPresentInRequest } from "../utils/helpers";
import jsonwebtoken from "jsonwebtoken"
import User from "../models/User";

export const login = async (req, res) => {
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
  
      let existingUser = await User.findOne({ email });
      if (!existingUser) {
        return res.status(404).json({ message: "User does not exist" });
      }
      if (existingUser) {
        const isPasswordCorrect = bcrypt.compareSync(
          password,
          existingUser.password
        );
        if (!isPasswordCorrect) {
          return res.status(400).json({ message: "Incorrect Password" });
        }
  
        const token = jsonwebtoken.sign({ id: existingUser._id }, process.env.SECRET_KEY, {
          expiresIn: 3600,
        });
  
        return res
          .status(200)
          .json({ token,existingUser, message: "Logged in Successfully!" });
      }
    } catch (e) {
      console.log(e);
      return res
        .status(500)
        .json({ message: "Something went wrong, Please try again later!" });
    }
  };