import express from "express";
import { auth } from "../middlewares/auth";
import { addDestination, getDestinations, getDestinationsById } from "../controllers/destinationController";

const destinationRouter = express.Router();

destinationRouter.post("/add", addDestination);

destinationRouter.get("/", getDestinations)

destinationRouter.get("/:id", getDestinationsById)

export default destinationRouter;
