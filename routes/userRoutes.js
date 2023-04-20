import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
} from "../controllers/userController";

const userRouter = express.Router();

// GET ARRAY OF ALL USERS
// @route GET /users/
// @desc Get All Users
// @response  Array of Users
// @access Public
userRouter.get("/", getAllUsers);

//SIGN UP
// @route POST /users/signup
// @desc Create new user
// @payload (first_name, last_name,email_id,password)
// @response  (token, user, message)
// @access Public
userRouter.post("/signup", createUser);

// UPDATE USER
// @route PUT /users/:id
// @desc Update user detail
// @payload id
// @response  Single User
// @access Public
userRouter.put("/:id", updateUser);

// DELETE USER
// @route DELETE /users/:id
// @desc Create new user
// @payload (id)
// @response  (message)
// @access Public
userRouter.delete("/:id", deleteUser);

export default userRouter;
