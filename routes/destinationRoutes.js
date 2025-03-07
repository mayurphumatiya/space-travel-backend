import express from "express";
import { addDestination, getDestinations, getDestinationsById } from "../controllers/destinationController.js";

const destinationRouter = express.Router();

destinationRouter.post("/add", addDestination);

destinationRouter.get("/", getDestinations)

destinationRouter.get("/:id", getDestinationsById)

export default destinationRouter;
