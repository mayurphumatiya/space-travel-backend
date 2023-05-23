import express from "express";
import { auth } from "../middlewares/auth";
import { addDestination, getDestinations } from "../controllers/destinationController";

const destinationRouter = express.Router();

destinationRouter.post("/add", addDestination);

destinationRouter.get("/", getDestinations)

export default destinationRouter;
