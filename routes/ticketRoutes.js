import express from "express";
import { auth } from "../middlewares/auth.js";
import { ticketBooking } from "../controllers/ticketController.js";

const ticketRouter = express.Router();

ticketRouter.post("/book", auth, ticketBooking);

export default ticketRouter;
