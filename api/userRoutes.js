import express from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";

const userRouter = express.Router();

userRouter.get("/", async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (e) {
    console.log(e);
    return console.log(e);
  }

  if (!users) {
    return res.status(500).json({ message: "Unexpected error occurred" });
  }

  return res.status(200).json({ users });
});

//SIGN UP
userRouter.post("/signup", async (req, res, next) => {
  let { first_name, last_name, email, password } = req.body;
  if (!first_name && !last_name && !email && !password) {
    return res.status(422).res.json({ message: "Invalid inputs" });
  }
  const hashPassword = bcrypt.hashSync(password);
  let user;
  try {
    user = new User({ first_name, last_name, email, password: hashPassword });
    user = await user.save();
  } catch (e) {
    console.log(e);
    return console.log(e);
  }

  if (!user) {
    return res.status(500).json({ message: "Unexpected error occurred" });
  }
  return res.status(201).json({ user });
});

export default userRouter;
