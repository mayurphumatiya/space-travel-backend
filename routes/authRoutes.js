import express from "express"
import { userLogin, userLogout } from "../controllers/authController";

const authRouter = express.Router();

// LOGIN
authRouter.post("/login", userLogin);

// LOGOUT
authRouter.post("/logout", userLogout)

export default authRouter;