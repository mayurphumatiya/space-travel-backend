import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
} from "../controllers/userController";

const userRouter = express.Router();

// GET ARRAY OF ALL USERS
userRouter.get("/", getAllUsers);

//SIGN UP
userRouter.post("/signup", createUser);

// UPDATE USER
userRouter.put("/:id", updateUser);

// DELETE USER
userRouter.delete("/:id", deleteUser);

export default userRouter;
