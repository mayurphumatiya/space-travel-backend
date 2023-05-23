import Destination from "../models/Destination";
import { isFieldPresentInRequest } from "../utils/helpers";

export const getDestinations = async (req, res) => {
  try {
    const destination = await Destination.find();
    if (!destination) {
      return res.status(200).json({
        status: false,
        message: "Unexpected error occurred,Please try again later!",
      });
    }

    res.status(200).json({ status: true, destination });
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      status: false,
      message: "Unexpected error occurred!,Please try again later!",
    });
  }
};

export const addDestination = async (req, res) => {
  try {
    const reqBody = req.body;
    let requiredFields = [
      "name",
      "image",
      "description",
      "distance",
      "travel_time",
    ];
    let invalidFields = [];

    // Condition to check if required fields are present in the request
    // TODO: Make it more dynamic by iterating through a list of objects instead where we can specify if a field is optional, requires regex validation, check character limit count etc.
    requiredFields.forEach((field) => {
      if (!isFieldPresentInRequest(reqBody, field)) {
        invalidFields.push(field);
      }
    });

    if (invalidFields.length > 0) {
      return res.status(200).json({
        status: false,
        message: `Error - Missing fields: ${invalidFields.join(", ")}`,
      });
    }

    const { name, image, description, distance, travel_time } = reqBody;

    const destination = new Destination({
      name,
      image,
      description,
      distance,
      travel_time,
    });

    const newDestination = await destination.save();

    if (!newDestination) {
      return res.status(200).json({
        status: false,
        message: `Unexpected error ocuured while saving destination,Please try again later`,
      });
    }

    return res.status(200).json({
      status: true,
      message: `destination created successfully`,
      destination: {
        name: newDestination.name,
        image: newDestination.image,
        description: newDestination.description,
        distance: newDestination.distance,
        travel_time: newDestination.travel_time,
      },
    });
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      status: false,
      message:
        "Unexpected error occurred while creating new destination, Please try again later!",
    });
  }
};
