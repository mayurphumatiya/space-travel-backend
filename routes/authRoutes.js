import express from "express";
import { userLogin, userLogout } from "../controllers/authController.js";
import { auth } from "../middlewares/auth.js";

const authRouter = express.Router();

// LOGIN
// @route POST /users/login
// @desc Logs In
// @payload (email_id,password)
// @response  (token, user, message)
// @access Public
authRouter.post("/login", userLogin);

// LOGOUT
// @route POST /users/logout
// @desc Logs Out
// @header (token)
// @response  (message)
// @access Private
authRouter.post("/logout", auth, userLogout);

export default authRouter;
