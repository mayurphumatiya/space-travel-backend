import express from "express"
import { login, logout } from "../controllers/authController";

const authRouter = express.Router();

// LOGIN
authRouter.post("/login", login);

// LOGOUT
authRouter.post("/logout", logout)

export default authRouter;