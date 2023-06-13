import express from "express";
import { auth } from "../middlewares/auth";
import { ticketBooking } from "../controllers/ticketController";

const ticketRouter = express.Router();

ticketRouter.post("/book", ticketBooking);

export default ticketRouter;
