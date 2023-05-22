import User from "../models/User";
import bcrypt from "bcryptjs";
import { isFieldPresentInRequest } from "../utils/helpers";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (e) {
    return console.log(e);
  }
};

export const createUser = async (req, res) => {
  try {
    const reqBody = req.body;
    let requiredFields = ["first_name", "last_name", "email", "password"];

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

    let { first_name, last_name, email, password } = reqBody;

    const existingUser = User.findOne({ email });
    if (existingUser) {
      return res.status(200).json({
        status: false,
        message: `User with ${email} email id already exists!`,
      });
    } else {
      const hashPassword = bcrypt.hashSync(password);
      let user = new User({
        first_name,
        last_name,
        email,
        password: hashPassword,
      });
      const newUser = await user.save();
      if (!newUser) {
        return res.status(200).json({
          status: false,
          message: "Unexpected error occurred, Please try again later!",
        });
      }
      return res.status(200).json({
        status: true,
        user: {
          first_name: newUser.first_name,
          last_name: newUser.last_name,
          email: newUser.email,
        },
        message: "User Registered Successfully!",
      });
    }
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      status: false,
      message: "Unexpected error occurred, Please try again later!",
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const reqBody = req.body;
    let requiredFields = ["first_name", "last_name", "email", "password"];

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

    const id = req.params.id;
    let { first_name, last_name, email, password } = reqBody;

    const hashPassword = bcrypt.hashSync(password);
    let user = await User.findByIdAndUpdate(id, {
      first_name,
      last_name,
      email,
      hashPassword,
    });
    if (!user) {
      return res
        .status(200)
        .json({ status: false, message: "User does not exist!" });
    } else {
      res
        .status(200)
        .json({ status: true, message: "User updated successfully" });
    }
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      status: false,
      message: "Unexpected error occurred, Please try again later!",
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    let user = await User.findByIdAndDelete(id);
    if (!user) {
      return res
        .status(200)
        .json({ status: false, message: "User does not exist!" });
    } else {
      res
        .status(200)
        .json({ status: true, message: "User deleted successfully" });
    }
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      status: false,
      message: "Unexpected error occurred, Please try again later!",
    });
  }
};
