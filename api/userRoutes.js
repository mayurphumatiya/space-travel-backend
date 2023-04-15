import express from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
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
userRouter.post("/signup", async (req, res) => {
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

// UPDATE USER
userRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  let { first_name, last_name, email, password } = req.body;
  if (!first_name && !last_name && !email && !password) {
    return res.status(422).res.json({ message: "Invalid inputs" });
  }

  let user;
  try {
    const hashPassword = bcrypt.hashSync(password);
    user = await User.findByIdAndUpdate(id, {
      first_name,
      last_name,
      email,
      hashPassword,
    });
  } catch (e) {
    console.log(e);
    return console.log(e);
  }
  if(!user){
    return res.status(500).json({message:"User does not exist!"})
  }
  res.status(200).json({message:"User updated successfully"});
});

// DELETE USER
userRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let user;
  try {
    user = await User.findByIdAndDelete(id);
  } catch (e) {
    console.log(e);
    return console.log(e);
  }
  if(!user){
    return res.status(500).json({message:"User does not exist!"})
  }
  res.status(200).json({message:"User deleted successfully"});
});

export default userRouter;
