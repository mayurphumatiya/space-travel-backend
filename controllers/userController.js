import User from "../models/User";

export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (e) {
    console.log(e);
    return next(e);
  }

  if (!users) {
    return res.status(500).json({ message: "Unexpected error occurred" });
  }

  return res.status(200).json({ users });
};
