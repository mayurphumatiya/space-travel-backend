import express from "express"
import { userLogin, userLogout } from "../controllers/authController";
import { auth } from "../middlewares/auth";

const authRouter = express.Router();

// LOGIN
authRouter.post("/login", userLogin);

// LOGOUT
authRouter.post("/logout", auth, userLogout)

export default authRouter;